import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/bundle';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import { wrapper } from '../../store/store';
import { getVault, vaultActions } from '../../store/vault/action';
import { useDispatch, useSelector } from 'react-redux';
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';
import { Router, useRouter } from 'next/router';
import { Moralis } from "moralis";
import Web3 from 'web3';
import { Abi } from '../utils/abi';
import BigNumber from 'bignumber.js';
import LaunchpadModel from '../utils/launchpad_model';
import moment from 'moment';
import { getUser } from '../../store/user/action';
import { getModalConfigs } from '../../store/modals/action';
import { walletConnectProvider, wcProviderUrl } from '../utils/walletConnectProvider';
import MyWalletConnectWeb3Connector from '../utils/myconnector';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    store.dispatch(getVault({ type: vaultActions.GET }));
    store.dispatch(getUser());
    store.dispatch(getModalConfigs());
});
const UniswapDynamic = dynamic(() => import('../widgets/uniswap_dynamic'));
const VaultDetailsMain = () => {
    let web3Provider;
    const dispatch = useDispatch();
    const router = useRouter();
    const modalData = useSelector((state) => state.modal_config);
    const vaultData = useSelector((state) => state.vault_config);
    const userData = useSelector((state) => state.launchUser);
    const [provider, setProvider] = useState();
    const { launchUser } = userData;
    const { modal_config } = modalData;
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout, isInitialized } = useMoralis();
    const Web3Api = useMoralisWeb3Api();
    const [render, setRender] = useState(true);
    const { vault_config } = vaultData.vault_config;
    const [vaultTokenBalance, setVaultTokenBalance] = useState(0);
    const [vaultTokenTransfers, setVaultTokenTransfers] = useState([]);
    const [owners, setOwners] = useState([]);
    const [ownersBal, setOwnersBal] = useState([]);
    const [options, setOptions] = useState({
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    });

    const [tokens, setTokens] = useState(new Set([
        {
        "name": "Dai Stablecoin",
        "address": "0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa",
        "symbol": "DAI",
        "decimals": 18,
        "chainId": 4,
        "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
      },
        {
        "name": "Tether USD",
        "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        "symbol": "USDT",
        "decimals": 6,
        "chainId": 4,
        "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
      },
      {
        "name": "USD Coin",
        "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "symbol": "USDC",
        "decimals": 6,
        "chainId": 4,
        "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
      },
      ]));

    const [series, setSeries] = useState([
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]);

    async function providerInit() {
        try {
            if (JSON.parse(localStorage.getItem('walletconnect'))?.connected != true) {
                web3Provider = await Moralis.enableWeb3({ provider: modal_config.walletOpt });
                setProvider(Moralis.provider);
            } else {
                console.log(modal_config.walletOpt);
                web3Provider = await Moralis.enableWeb3({ connector: MyWalletConnectWeb3Connector });
                setProvider(Moralis.provider);
            }

        } catch (err) {
            console.log(err);
        }
    }

    async function fetchTokenBalances() {
        console.log('Add==>' + vault_config?.vault?.get('vaultDetails').vault);
        const options = {
            chain: "rinkeby",
            token_addresses: [vault_config?.vault?.get('vaultDetails').vault],
        };
        const balances = await Web3Api.account.getTokenBalances(options);
        console.log('balancesssss' + balances[0].balance);
        setVaultTokenBalance(balances[0].balance);
    };

    const fetchNFTOwners = async () => {
        const options = {
            address: vault_config?.vault?.get('vaultDetails').vault,
            chain: "rinkeby",
        };
        const nftOwners = await Web3Api.token.getNFTOwners(options);
        console.warn(nftOwners);
    };

    const fetchTokenTransfers = async () => {
        let tokensSet = tokens;
        tokensSet.add({name: vault_config?.vault?.get('name'), address: String(vault_config?.vault?.get('vaultDetails').vault).toLowerCase(), symbol: vault_config?.vault?.get('symbol'), decimals: 18, chainId: 4 });
        
        setTokens(tokensSet);
        const tq = LaunchpadModel.EthTokenTransfersQuery;
        tq.equalTo("token_address", String(vault_config?.vault?.get('vaultDetails').vault).toLowerCase());
        tq.descending("updatedAt");
        tq.limit(11);
        const result = await tq.find();
        // var ownersSet = new Set();
        // result.forEach(element => {
        //    if(element.get('from_address') != '0x0000000000000000000000000000000000000000'){ 
        //     ownersSet.add(element.get('from_address'));
        //    }
        //    if(element.get('to_address') != '0x0000000000000000000000000000000000000000'){
        //     ownersSet.add(element.get('to_address'));
        //    }
        // });

        // setOwners(ownersSet);
        // var obs = new Set();
        // ownersSet.forEach(async (element) => {
        //     const options = {
        //         chain: "rinkeby",
        //         token_addresses: [vault_config?.vault?.get('vaultDetails').vault],
        //         address: element
        //     };
        //     const balances = await Web3Api.account.getTokenBalances(options);
        //     obs.add({address: element, value: balances[0]?.balance});
        // });
        // setOwnersBal(obs);
        // console.log('000000000000'+JSON.stringify(obs));
        // console.log('===========2=2'+JSON.stringify(result));
        setVaultTokenTransfers(result);
    };



    useEffect(() => {

        console.log('=====>' + launchUser.balance);
        if (launchUser.wallet_address === '0x0') {
            // open dialog for user to connect its wallet
            router.push('/');
        }
        if (render && isInitialized) {
            providerInit();

            setRender(false);
        }
        if (isInitialized) {
            fetchTokenBalances();
            fetchNFTOwners();
            fetchTokenTransfers();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, dispatch]);
    return (
        <>
            <section className="breadcrumb-area breadcrumb-bg breadcrumb-bg-two">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="breadcrumb-content text-center">
                                <h3 className="title"></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="vault-banner">
                <Swiper
                    spaceBetween={50}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    slidesPerView={3}
                    centeredSlides={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><div className="swiper-slide"><picture><img src={process.env.NEXT_PUBLIC_APP_URL + "/assets/img/others/top_collection01.jpg"} className="img-fluid" alt="" /></picture></div></SwiperSlide>
                    <SwiperSlide><div className="swiper-slide"><picture><img src={process.env.NEXT_PUBLIC_APP_URL + "/assets/img/others/top_collection02.jpg"} className="img-fluid" alt="" /></picture></div></SwiperSlide>
                    <SwiperSlide><div className="swiper-slide"><picture><img src={process.env.NEXT_PUBLIC_APP_URL + "/assets/img/others/top_collection03.jpg"} className="img-fluid" alt="" /></picture></div></SwiperSlide>
                </Swiper>

            </section>

            <section className="market-single-area">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="market-single-top">
                                <div className="market-single-title-wrap">
                                    <div><picture>
                                        <img src={process.env.NEXT_PUBLIC_APP_URL + "/assets/img/others/mp_avatar01.png"} alt="author photo" className=" collection-profile" /></picture>
                                    </div>
                                    <h2 className="title">{vault_config?.vault?.get('name')}</h2>
                                    <ul className="market-details-meta">
                                        <li>Owned by <a href="#">{vault_config?.vault?.get('curator')}</a></li>
                                        {/* <li className="wishlist">6 favorites</li> */}
                                    </ul>
                                </div>
                                <div className="market-single-action">
                                    {/* <ul>
                                        <li><a href="#"><i className="fas fa-share-alt"></i></a></li>
                                        <li><a href="#"><i className="fi-sr-menu-dots"></i></a></li>
                                    </ul> */}
                                    <div className="collection-details-list">
                                        <p><span>COLLECTABLE SUPPLY</span> +10.65%</p>
                                        <p><span>IMPLIED VALUATION</span> 250.50</p>
                                        <p><span>FRACTIONS</span> {vault_config?.vault?.get('totalSupply')} {vault_config?.vault?.get('symbol')}</p>
                                        <p><span>CURATOR FEE</span> {vault_config?.vault?.get('curatorFee')}%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="market-single-content">
                                {/* target="_blank" <p>What even is an NFT? NFT stands for non-fungible token, which basically means that it&apos;s one-of-kind digital asset that belongs to you and you only. The most popular NFTs right now include artwork and music also include videos.</p> */}
                                <div className="proof-authority">
                                    <h4>Proof of Authenticity</h4>
                                    <ul>
                                        <li><p><picture><img src={process.env.NEXT_PUBLIC_APP_URL + "/assets/img/others/checked.png"} alt="" /></picture> Verified by fractional</p></li>
                                        <li><a href={"https://rinkeby.etherscan.io/address/" + vault_config?.vault?.get('vaultDetails').vault} rel="noreferrer"><picture><img src={process.env.NEXT_PUBLIC_APP_URL + "/assets/img/others/line-chart.png"} alt="" /></picture> View on Etherscan</a></li>
                                        <li><a href="#"><picture><img src={process.env.NEXT_PUBLIC_APP_URL + "/assets/img/others/sailboat.png"} alt="" /></picture> View on Opensea</a></li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-12">

                            <div className="responsive-tabs">
                                <div className="author-product-meta">
                                    <ul className="nav nav-tabs" role="tablist">
                                        {/* <li className="nav-item">
                                            <a id="tab-A" href="#pane-A" className="nav-link active" data-bs-toggle="tab" role="tab">Auction/Bidding</a>
                                        </li> */}
                                        <li className="nav-item">
                                            <a id="tab-B" href="#pane-B" className="nav-link active" data-bs-toggle="tab" role="tab">Trade Fraction</a>
                                        </li>
                                        <li className="nav-item">
                                            <a id="tab-C" href="#pane-C" className="nav-link" data-bs-toggle="tab" role="tab">Recent Transaction</a>
                                        </li>
                                        <li className="nav-item">
                                            <a id="tab-D" href="#pane-D" className="nav-link" data-bs-toggle="tab" role="tab">Top Owners</a>
                                        </li>
                                        {/*<li className="nav-item">
                                            <a id="tab-E" href="#pane-E" className="nav-link" data-bs-toggle="tab" role="tab">Analysis</a>
                                        </li>*/}
                                        <li className="nav-item">
                                            <a id="tab-F" href="#pane-F" className="nav-link" data-bs-toggle="tab" role="tab">Token Stats</a>
                                        </li>
                                        {/*<li className="nav-item">
                                            <a id="tab-G" href="#pane-G" className="nav-link" data-bs-toggle="tab" role="tab">FAQs</a>
                                        </li>*/}
                                        <li className="nav-item">
                                            <a id="tab-H" href="#pane-H" className="nav-link" data-bs-toggle="tab" role="tab">Trade</a>
                                        </li>
                                    </ul>
                                </div>
                                <div id="content" className="tab-content" role="tablist">
                                    {/* <div id="pane-A" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">
                                        <div className="card-header" role="tab" id="heading-A">
                                            <h5 className="mb-0">
                                                <a className="accordion-button" data-bs-toggle="collapse" href="#collapse-A" aria-expanded="true" aria-controls="collapse-A">
                                                    Auction/Bidding
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="collapse-A" className="collapse show" data-bs-parent="#content" role="tabpanel"
                                            aria-labelledby="heading-A">
                                            <div className="card-body">
                                                <div className="auction-biding-section">
                                                    <div className="fraction-owner">
                                                        <h4>PRICE SET BY FRACTION OWNERS</h4>
                                                        <div className="pie-wrapper progress-30">
                                                            <span className="label">30<span className="smaller">%</span></span>
                                                            <div className="pie">
                                                                <div className="left-side half-circle"></div>
                                                                <div className="right-side half-circle"></div>
                                                            </div>
                                                        </div>
                                                        <p>An auction for this vault is only possible if reserve prices have been set by owners who collectively hold more than 50% of the total fraction supply.</p>
                                                    </div>
                                                    <div className="reserve-price">
                                                        <h4>RESERVE PRICE</h4>
                                                        <h2>Ξ 303,031.4098</h2>
                                                        <h3>≈ $ 719,472,324.76</h3>
                                                        <p>Once a bid has been placed and the reserve price is met, a 7 day auction will begin.</p>
                                                        <hr />
                                                        <div className="bid-amount">
                                                            <label>YOUR BID AMOUNT</label>
                                                            <label className="float-end">BALANCE: 0 ETH</label>
                                                            <div className="value-bid">303031.409818143279700892
                                                                <span className="c-icon"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/icons/coin.svg"} alt="" /></picture> ETH</span>
                                                                <label>USE MAX</label>
                                                            </div>
                                                            <a href="#" className="buy-btn">Place Bid & Start Auction</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div id="pane-B" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-B">
                                        <div className="card-header" role="tab" id="heading-B">
                                            <h5 className="mb-0">
                                                <a className="accordion-button" data-bs-toggle="collapse" href="#collapse-B" aria-expanded="false"
                                                    aria-controls="collapse-B">
                                                    Trade Fraction
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="collapse-B" className="collapse" data-bs-parent="#content" role="tabpanel"
                                            aria-labelledby="heading-B">
                                            <div className="card-body">
                                                <UniswapDynamic tokenList={Array.from(tokens)}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="pane-C" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-C">
                                        <div className="card-header" role="tab" id="heading-C">
                                            <h5 className="mb-0">
                                                <a className="accordion-button" data-bs-toggle="collapse" href="#collapse-C" aria-expanded="true" aria-controls="collapse-C">
                                                    Recent Transaction
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="collapse-C" className="collapse" data-bs-parent="#content" role="tabpanel"
                                            aria-labelledby="heading-C">
                                            <div className="card-body">
                                                <div className="row justify-content-end">
                                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                                        <div className="table-filter text-end">
                                                            <input type="text" name="" placeholder="search" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                                        <div className="table-filter text-end">
                                                            <select className="form-select">
                                                                <option>All</option>
                                                                <option>BUY</option>
                                                                <option>SELL</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="activity-table-responsive">
                                                    <table className="table activity-table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col" className="title">Date</th>
                                                                <th scope="col">From</th>
                                                                <th scope="col">To</th>
                                                                <th scope="col" className="">Amount</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {vaultTokenTransfers.length > 0 && vaultTokenTransfers.map((v, i) => (<tr key={i}>
                                                                <th scope="row" className="author" style={{ color: 'grey' }}>
                                                                    {moment(v.get('updatedAt')).format('DD-MMM-YYYY HH:mm A')}
                                                                </th>
                                                                <td className="text-danger">{v.get('from_address').substr(0, 5) + '..' + v.get('from_address').substr(v.get('from_address').length - 5, v.get('from_address').length)}</td>
                                                                <td>{v.get('to_address').substr(0, 5) + '..' + v.get('to_address').substr(v.get('to_address').length - 5, v.get('to_address').length)}</td>
                                                                <td>{(BigNumber(Moralis.Units.FromWei(v.get('value'), 18) + '').toFormat(2))} {vault_config?.vault?.get('symbol')}</td>
                                                            </tr>))}

                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div id="pane-D" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-D">
                                        <div className="card-header" role="tab" id="heading-D">
                                            <h5 className="mb-0">
                                                <a className="accordion-button" data-bs-toggle="collapse" href="#collapse-D" aria-expanded="true" aria-controls="collapse-D">
                                                    Top Owners
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="collapse-D" className="collapse" data-bs-parent="#content" role="tabpanel"
                                            aria-labelledby="heading-D">
                                            <div className="card-body">
                                                <div className="activity-table-responsive">
                                                    <table className="table activity-table">
                                                        <thead>
                                                            <tr>

                                                                <th scope="col" className="title">WALLET ADDRESS</th>
                                                                <th scope="col">QUANTITY</th>
                                                                <th scope="col">Percentage</th>
                                                                <th scope="col" className="">Value</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row" className="author">
                                                                    <picture><img src={process.env.NEXT_PUBLIC_APP_URL + "/assets/img/others/mp_activity_author01.png"} alt="" /></picture> <a href="nft-marketplace.html">{launchUser?.username}</a>
                                                                </th>
                                                                <td>{BigNumber(Moralis.Units.FromWei(vaultTokenBalance, 18) + '').toFormat(2)} {vault_config?.vault?.get('symbol')}</td>
                                                                <td>100%</td>
                                                                <td> {BigNumber(BigNumber(Moralis.Units.FromWei(vaultTokenBalance, 18) + '').multipliedBy(vault_config?.vault?.get('reservePrice')) + '').toFormat(2)} ETH </td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div id="pane-E" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-E">
                                        <div className="card-header" role="tab" id="heading-E">
                                            <h5 className="mb-0">
                                                <a className="accordion-button" data-bs-toggle="collapse" href="#collapse-E" aria-expanded="true" aria-controls="collapse-E">
                                                    Analysis
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="collapse-E" className="collapse" data-bs-parent="#content" role="tabpanel"
                                            aria-labelledby="heading-E">
                                            <div className="card-body">
                                                <div>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima error distinctio ex blanditiis vero repudiandae unde? Sapiente quaerat, nulla, laboriosam exercitationem explicabo dolores nobis delectus sed consequuntur placeat, molestias.</p>

                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima error distinctio ex blanditiis vero repudiandae unde? Sapiente quaerat, nulla, laboriosam exercitationem explicabo dolores nobis delectus sed consequuntur placeat, molestias.</p>

                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima error distinctio ex blanditiis vero repudiandae unde? Sapiente quaerat, nulla, laboriosam exercitationem explicabo dolores nobis delectus sed consequuntur placeat, molestias.</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div id="pane-F" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-F">
                                        <div className="card-header" role="tab" id="heading-F">
                                            <h5 className="mb-0">
                                                <a className="accordion-button" data-bs-toggle="collapse" href="#collapse-F" aria-expanded="true" aria-controls="collapse-F">
                                                    Token Stats
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="collapse-F" className="collapse" data-bs-parent="#content" role="tabpanel"
                                            aria-labelledby="heading-F">
                                            <div className="card-body">
                                                <div id="chart">
                                                    <Chart
                                                        options={options}
                                                        series={series}
                                                        type="line"
                                                        height={350}
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div id="pane-G" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-G">
                                        <div className="card-header" role="tab" id="heading-G">
                                            <h5 className="mb-0">
                                                <a className="accordion-button" data-bs-toggle="collapse" href="#collapse-G" aria-expanded="true" aria-controls="collapse-G">
                                                    FAQs
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="collapse-G" className="collapse" data-bs-parent="#content" role="tabpanel"
                                            aria-labelledby="heading-G">
                                            <div className="card-body">
                                                <div>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima error distinctio ex blanditiis vero repudiandae unde? Sapiente quaerat, nulla, laboriosam exercitationem explicabo dolores nobis delectus sed consequuntur placeat, molestias.</p>

                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima error distinctio ex blanditiis vero repudiandae unde? Sapiente quaerat, nulla, laboriosam exercitationem explicabo dolores nobis delectus sed consequuntur placeat, molestias.</p>

                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima error distinctio ex blanditiis vero repudiandae unde? Sapiente quaerat, nulla, laboriosam exercitationem explicabo dolores nobis delectus sed consequuntur placeat, molestias.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="pane-H" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-H">
                                        <div className="card-header" role="tab" id="heading-H">
                                            <h5 className="mb-0">
                                                <a className="accordion-button" data-bs-toggle="collapse" href="#collapse-H" aria-expanded="true" aria-controls="collapse-H">
                                                    Trade
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="collapse-H" className="collapse" data-bs-parent="#content" role="tabpanel"
                                            aria-labelledby="heading-H">
                                            <div className="card-body">
                                                <div className="row justify-content-end">
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                        <div className="table-filter text-end">
                                                            <input type="text" name="" placeholder="Search by name" className="form-control" />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="activity-table-responsive">
                                                    <table className="table activity-table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col" className="title">Assets</th>
                                                                <th scope="col">Supply for sale</th>
                                                                <th scope="col">Buyout</th>
                                                                <th scope="col" className=""></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row" className="author">
                                                                    <picture><img src={process.env.NEXT_PUBLIC_APP_URL + "/assets/img/others/mp_activity_author01.png"} alt="" className="mCS_img_loaded" /></picture> <a href="#" className="text-black">Stoned App #544</a>
                                                                </th>
                                                                <td className="text-black">99.82% <span className="d-block">998.2 fractions</span></td>
                                                                <td className="text-black">1,008.18 SAC <span className="d-block">80.58 SOL</span></td>
                                                                <td className=""><a href="#" className="btn btn-info">Buy Now</a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" className="author">
                                                                    <picture><img src={process.env.NEXT_PUBLIC_APP_URL + "/assets/img/others/mp_activity_author01.png"} alt="" className="mCS_img_loaded" /></picture> <a href="#" className="text-black">Stoned App #544</a>
                                                                </th>
                                                                <td className="text-black">99.82% <span className="d-block">998.2 fractions</span></td>
                                                                <td className="text-black">1,008.18 SAC <span className="d-block">80.58 SOL</span></td>
                                                                <td className=""><a href="#" className="btn btn-info">Buy Now</a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" className="author">
                                                                    <picture><img src={process.env.NEXT_PUBLIC_APP_URL + "/assets/img/others/mp_activity_author01.png"} alt="" className="mCS_img_loaded" /></picture> <a href="#" className="text-black">Stoned App #544</a>
                                                                </th>
                                                                <td className="text-black">99.82% <span className="d-block">998.2 fractions</span></td>
                                                                <td className="text-black">1,008.18 SAC <span className="d-block">80.58 SOL</span></td>
                                                                <td className=""><a href="#" className="btn btn-info">Buy Now</a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" className="author">
                                                                    <picture><img src={process.env.NEXT_PUBLIC_APP_URL + "/assets/img/others/mp_activity_author01.png"} alt="" className="mCS_img_loaded" /></picture> <a href="#" className="text-black">Stoned App #544</a>
                                                                </th>
                                                                <td className="text-black">99.82% <span className="d-block">998.2 fractions</span></td>
                                                                <td className="text-black">1,008.18 SAC <span className="d-block">80.58 SOL</span></td>
                                                                <td className=""><a href="#" className="btn btn-info">Buy Now</a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" className="author">
                                                                    <picture><img src={process.env.NEXT_PUBLIC_APP_URL + "/assets/img/others/mp_activity_author01.png"} alt="" className="mCS_img_loaded" /></picture> <a href="#" className="text-black">Stoned App #544</a>
                                                                </th>
                                                                <td className="text-black">99.82% <span className="d-block">998.2 fractions</span></td>
                                                                <td className="text-black">1,008.18 SAC <span className="d-block">80.58 SOL</span></td>
                                                                <td className=""><a href="#" className="btn btn-info">Buy Now</a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );

}

export default VaultDetailsMain;