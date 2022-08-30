import Link from "next/link";
import React, { useState, useEffect } from 'react'
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { NotificationManager } from "react-notifications";
import { useDispatch, useSelector } from "react-redux";
import { getModalConfigs, setModalConfigs } from "../../store/modals/action";
import { wrapper } from "../../store/store";
import { getUser, loginUser } from "../../store/user/action";
import { Moralis } from "moralis";
import Web3 from "web3";
import { Abi } from "../utils/abi";
import { BigNumber } from "bignumber.js";
import LaunchpadModel from "../utils/launchpad_model";
import { useRouter } from "next/router";
import { getMode, setMode } from "../../store/fractionalize/action";
import { walletConnectProvider, wcProviderUrl } from "../utils/walletConnectProvider";
import MyWalletConnectWeb3Connector from "../utils/myconnector";
import NFTTokenLIst from "./NFTTokenLIst";
import { exists } from "fs";
import RangeSlider from 'react-bootstrap-range-slider';

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    store.dispatch(getMode());
    store.dispatch(getUser());
    store.dispatch(getModalConfigs());
});
const FractionStep2Main = () => {
    const router = useRouter();
    let web3Provider;
    const dispatch = useDispatch();
    const data = useSelector((state) => state.fractionalize);
    const modalData = useSelector((state) => state.modal_config);
    const userData = useSelector((state) => state.launchUser);
    const [provider, setProvider] = useState();
    const { fractionalize } = data;
    const { launchUser } = userData;
    const { modal_config } = modalData;
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout, isInitialized } = useMoralis();
    const Web3Api = useMoralisWeb3Api();
    const [nftIndex, setNftIndex] = useState({ index: -1, token_address: '0x0', token_id: 0, token_name: '', token_symbol: '' });
    const [render, setRender] = useState(true);
    const [contDisabled, setContDisabled] = useState(false);
    const [mde, setMde] = useState(fractionalize.mode == 'erc20' ? 0 : 1);

    // vault data
    const [vaultName, setVaultName] = useState('');
    const [vaultSupply, setVaultSupply] = useState(0);
    const [vaultSymbol, setVaultSymbol] = useState('');
    const [vaultReservePrice, setVaultReservePrice] = useState(0.0);
    const [vaultCuratorFee, setVaultCuratorFee] = useState(0.0);

    let newTokenData = (item, index) => {
        let postToken;
        if (item.token_uri && item.token_uri.substring(8, 12) == 'ipfs') {
            var postTokensub = item.token_uri.replace(/^.{28}/g, 'http://gateway.moralisipfs.com');
            console.log("Token Sub", postTokensub);
            let postToken1 = postTokensub.substring(0, postTokensub.length - 1);
            fetch(postToken1)
                .then(res => res.json())
                .then(data => {
                    console.log("For Inner image", data.image);
                    postToken = data.image;
                    document.getElementById('img' + index).src = postToken;
                    var new_img = data.image;
                    console.log("Get IMAGE", new_img);
                    var myArray = new_img.split("/");
                    let CID = myArray[4];
                    console.log("GET CID DATA", CID);

                    //   var data = JSON.stringify({
                    //     "hashToPin": CID,
                    //     "pinataMetadata": {
                    //       "name": "MyCustomName",
                    //       "keyvalues": {
                    //         "customKey": "customValue",
                    //         "customKey2": "customValue2"
                    //       }
                    //     }
                    //   });

                    //   var config = {
                    //     method: 'post',
                    //     url: 'https://api.pinata.cloud/pinning/pinByHash',
                    //     headers: { 
                    //       'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjYzcxZDdlYS03MWU3LTRmNjEtODZmMy1hMDUzYzJmYWVlYTIiLCJlbWFpbCI6ImNoaW50YW5zdXJ5YXdhbnNoaTFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjI4NGI0YjM2ZWVhZjBjZTgyMDEyIiwic2NvcGVkS2V5U2VjcmV0IjoiZWFkNjRjMTA4NzUwODdlYmY2N2Y1NjA3ODJkZTVjZWI2YWEwMTdkZGQwZmEwMDZmODUwMDIzNDhiMWJmZmY1ZCIsImlhdCI6MTY2MDgxMjc4NH0.N1WWJDiUfUA4-5LYIF0NlIwGi99Zz9GS2b54UhrwtqA', 
                    //       'Content-Type': 'application/json'
                    //     },
                    //     data: data
                    //   };

                    //    axios(config).then(res =>{
                    //     console.log(res.data);
                    //    }).catch(err =>{
                    //     console.log(err);
                    //    });
                    var myHeaders = new Headers();
                    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjYzcxZDdlYS03MWU3LTRmNjEtODZmMy1hMDUzYzJmYWVlYTIiLCJlbWFpbCI6ImNoaW50YW5zdXJ5YXdhbnNoaTFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjI4NGI0YjM2ZWVhZjBjZTgyMDEyIiwic2NvcGVkS2V5U2VjcmV0IjoiZWFkNjRjMTA4NzUwODdlYmY2N2Y1NjA3ODJkZTVjZWI2YWEwMTdkZGQwZmEwMDZmODUwMDIzNDhiMWJmZmY1ZCIsImlhdCI6MTY2MDgxMjc4NH0.N1WWJDiUfUA4-5LYIF0NlIwGi99Zz9GS2b54UhrwtqA");
                    myHeaders.append("Content-Type", "application/json");
                    var raw = JSON.stringify({
                        "hashToPin": CID,
                        "pinataMetadata": {
                            "name": "MyCustomName",
                            "keyvalues": {
                                "customKey": "customValue",
                                "customKey2": "customValue2"
                            }
                        }
                    });

                    var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                    };

                    fetch("https://api.pinata.cloud/pinning/pinByHash", requestOptions)
                        .then(response => response.text())
                        .then(result => console.log("Fatching results", result))
                        .catch(error => console.log('error', error));

                })
            return (postToken);
        }
        else {
            postToken = item.token_uri;
            console.log("Else Post Token", postToken);

            try {
                if (postToken && (postToken.endsWith('.png') || postToken.endsWith('.jpg') || postToken.endsWith('.jpeg'))) {
                    document.getElementById('img' + index).src = postToken;
                } else {
                    if (index % 2 == 0) {
                        document.getElementById('img' + index).src = process.env.NEXT_PUBLIC_APP_URL + "/assets/img/others/1top_collection01.jpg";
                    } else {
                        document.getElementById('img' + index).src = process.env.NEXT_PUBLIC_APP_URL + "/assets/img/others/2top_collection01.jpg";
                    }
                }
            }
            catch (err) {

            }

            return (postToken);
        }
    }

    async function providerInit() {
        try {
            if (modal_config.walletOpt != 'walletconnect') {
                await Moralis.enableWeb3({ provider: modal_config.walletOpt });
                setProvider(Moralis.provider);
            } else {
                await Moralis.enableWeb3({ connector: MyWalletConnectWeb3Connector });
                setProvider(Moralis.provider);
            }
        } catch (err) {
            console.log(err);
        }
    }
    const fetchNativeBalance = async () => {
        // get mainnet native balance for the current user
        // const balance = await Web3Api.account.getNativeBalance();
        // console.log(balance);
        // // get BSC native balance for a given address
        const options = {
            chain: "rinkeby"
        };
        const bscBalance = await Web3Api.account.getNativeBalance(options);
        return bscBalance;
    };

    async function getAllNftData() {
        await Web3Api.account.getNFTs({
            chain: "rinkeby",
        }).then(async resp => {
            const vaultQuery = LaunchpadModel.VaultQuery;
            vaultQuery.equalTo('curator', user?.get('ethAddress'));
            const result = await vaultQuery.find();

            // get user balance as well here
            const balance = await fetchNativeBalance();

            dispatch(loginUser({ ...launchUser, wallet_address: user?.get('ethAddress'), nfts: resp.result, vaults: result, balance: balance }));
        });
    }


    useEffect(() => {
        if (launchUser.wallet_address === '0x0') {
            // open dialog for user to connect its wallet
            dispatch(setModalConfigs({ ...modal_config, wallet: true }));
        }
        if (isAuthenticated) {
            console.log(modal_config.walletOpt);
            console.log('===>' + JSON.parse(localStorage.getItem('walletconnect'))?.connected);
            // add your logic here
            getAllNftData();

            dispatch(setModalConfigs({ ...modal_config, wallet: false }));

        }
        if (render && isInitialized) {
            providerInit();
            setRender(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, dispatch]);

    const changeMode = (newMode) => {
        console.log('prev mode=>' + mde);
        dispatch(setMode({ ...fractionalize, mode: newMode }));
        setMde(newMode == 'erc20' ? 0 : 1);
        console.log('mode updated ==>' + mde);
    }

    const createVault = async (e) => {

        e.preventDefault();
        console.log('mode===' + mde);
        if (nftIndex.index == -1) {
            // alert('Please select NFT to Fractionalize');
            NotificationManager.warning('Please select NFT to Fractionalize');
        } else {
            NotificationManager.info('Please approve Tx for NFT Fractionalize');
            if (JSON.parse(localStorage.getItem('walletconnect'))?.connected != true) {
                console.log(modal_config.walletOpt);
                web3Provider = await Moralis.enableWeb3({ provider: modal_config.walletOpt });
                setProvider(Moralis.provider);
            } else {
                console.log(modal_config.walletOpt);
                web3Provider = await Moralis.enableWeb3({ connector: MyWalletConnectWeb3Connector });
                setProvider(Moralis.provider);
            }
            let web3 = new Web3(Moralis.provider);

            const tokenContract = new web3.eth.Contract(Abi.ERC721ABI, nftIndex.token_address);
            const factoryContract = new web3.eth.Contract(Abi.LaunchFactoryABI, Abi.LaunchFactoryAddress);
            try {
                setContDisabled(true);
                await tokenContract.methods.approve(Abi.LaunchFactoryAddress, nftIndex.token_id).send({ from: user?.get('ethAddress') }).then(resp => {
                    NotificationManager.info('Approval Successful, Please confirm transaction for fractionalization of NFT');
                });

                try {
                    const decimals = mde == 0 ? 18 : 0;
                    await factoryContract.methods.createVault(vaultName, vaultSymbol, "0x" + new BigNumber(vaultSupply).shiftedBy(decimals).toString(16), "0x" + new BigNumber(vaultReservePrice).shiftedBy(18).toString(16), nftIndex.token_address, nftIndex.token_id, "0x" + new BigNumber(vaultCuratorFee).shiftedBy(3).toString(16), mde).send({ from: user?.get('ethAddress') }).then(async (resp) => {
                        console.log('resp===>' + JSON.stringify(resp));
                        console.log('values===>' + resp.events.Mint.returnValues);
                        NotificationManager.success('NFT successfull fractionalized...Vault created successfully');


                        // save vault in Moralis
                        const newVault = new LaunchpadModel.Vault();
                        newVault.set('mode', mde);
                        newVault.set('name', vaultName);
                        newVault.set('symbol', vaultSymbol);
                        newVault.set('totalSupply', vaultSupply);
                        newVault.set('reservePrice', vaultReservePrice);
                        newVault.set('curator', launchUser.wallet_address);
                        newVault.set('curatorFee', vaultCuratorFee);
                        newVault.set('nft', nftIndex.token_address);
                        newVault.set('nftId', nftIndex.token_id);
                        newVault.set('nftName', nftIndex.token_name);
                        newVault.set('nftSymbol', nftIndex.token_symbol);
                        newVault.set('vaultDetails', resp.events.Mint.returnValues);

                        await newVault.save();

                        // refresh nft data
                        await getAllNftData();
                        setNftIndex({ index: -1, token_address: '', token_id: 0, token_name: '', token_symbol: '' });
                        // route to vaults
                        router.push('/profile?tab=vaults');
                    })


                } catch (error) {
                    console.log(error);
                    NotificationManager.error('User decline the transaction');
                }


            } catch (error) {
                console.log(error);
                NotificationManager.error('User decline the transaction');
            }
            finally {
                setContDisabled(false);
            }
        }

    }




    return (<>
        <section className="breadcrumb-area breadcrumb-bg breadcrumb-bg-two">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="breadcrumb-content text-center">
                            <h3 className="title">fraction standard</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="fraction-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="fractional-tab">
                            <Link href="/fractionstep1"><a className="">Choose Standard <i className="fas fa-chevron-right"></i></a></Link>
                            <a href="#" className="active">Select your NFTs</a>
                        </div>
                    </div>
                    <div className="col-lg-12 mt-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-9 col-md-8">
                                <div className="fractionalize-choose">
                                    <div className="choose-detail">
                                        <h2>Select your NFTs to Fractionalize</h2>
                                        <p>Choose the NFT(s) to send to a new vault, select your desired fraction type, set your vault’s details, then continue to fractionalize. Once complete, all fractions will appear in your wallet. Be aware, you cannot add to the NFTs in a vault once created. Read our guides for more information.</p>
                                    </div>

                                    <div className="row mt-5 ">
                                        {launchUser.nfts && launchUser.nfts.map((item, i) => {
                                            return (
                                                <div className="col-xl-4 col-md-6 col-sm-6" key={'nftindex' + i} style={{ cursor: 'pointer' }} onClick={() => setNftIndex({ index: i, token_address: item.token_address, token_id: item.token_id, token_name: item.token_name, token_symbol: item.token_symbol })}>
                                                    <div className={i == nftIndex.index ? "top-collection-item active" : "top-collection-item"}>
                                                        <div className="collection-item-thumb">
                                                            <div className="shield-icon">
                                                                <picture><img alt="" src={process.env.NEXT_PUBLIC_APP_URL + "/assets/img/others/shield.png"} /></picture>
                                                            </div>
                                                            <picture><img src={i % 2 == 0 ? process.env.NEXT_PUBLIC_APP_URL + "/assets/img/others/1top_collection01.jpg" : process.env.NEXT_PUBLIC_APP_URL + "/assets/img/others/2top_collection01.jpg"} alt="" /></picture>
                                                            {newTokenData(item, i)}
                                                        </div>
                                                        <div className="collection-item-content">
                                                            <h5 className="title">{item.name} <span className="symbol">{item.symbol}</span></h5>
                                                        </div>
                                                        <div className="collection-item-bottom">
                                                            <ul>
                                                                <li className="avatar"><div className="thumb"><picture><img src={process.env.NEXT_PUBLIC_APP_URL + "/assets/img/others/top_col_avatar.png"} alt="" /></picture></div>By&nbsp;<div className="name">{launchUser?.username}</div></li>
                                                                <li>ID:<a><b>{item.token_id}</b></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    {/* <NFTTokenLIst myData={launchUser.nfts} launchUser={launchUser}/> */}

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="fractionalize-right">
                                    <h4 className="mb-3">Fractionalization standard</h4>
                                    <div className="activity-table-nav">
                                        <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button onClick={() => changeMode('erc20')} className={fractionalize.mode == "erc20" ? "nav-link active" : "nav-link"} id="nft-tab" data-bs-toggle="tab" data-bs-target="#nft" type="button"
                                                    role="tab" aria-controls="nft" aria-selected={fractionalize.mode == "erc20" ? "true" : "false"}>ERC 20</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button onClick={() => changeMode('erc721')} className={fractionalize.mode == "erc721" ? "nav-link active" : "nav-link"} id="month-tab" data-bs-toggle="tab" data-bs-target="#month" type="button"
                                                    role="tab" aria-controls="month" aria-selected={fractionalize.mode == "erc721" ? "true" : "false"}>ERC 721</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="nft" role="tabpanel" aria-labelledby="nft-tab">
                                            <form onSubmit={(e) => createVault(e)} className="create-item-form">
                                                <div className="form-grp">
                                                    <label htmlFor="title">VAULT NAME</label>
                                                    <input id="title" onChange={(e) => setVaultName(e.target.value)} type="text" placeholder="e. g. Cryptopunk Frenzy " required />
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-grp">
                                                            <label htmlFor="royalties">TOKEN SUPPLY</label>
                                                            <input id="royalties" onChange={(e) => setVaultSupply(e.target.value)} type="number" placeholder="1000" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-grp">
                                                            <label htmlFor="size">TOKEN SYMBOL</label>
                                                            <input id="size" onChange={(e) => setVaultSymbol(e.target.value)} type="text" placeholder="CPF" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-grp">
                                                    <label htmlFor="price">RESERVE PRICE IN ETH</label>
                                                    <input id="price" onChange={(e) => setVaultReservePrice(e.target.value)} type="number" placeholder="0.0" step="0.01" required />
                                                </div>
                                                <div className="form-grp">
                                                    <label htmlFor="price">CURATOR FEE(%)</label>
                                                    <RangeSlider
                                                        value={vaultCuratorFee}
                                                        onChange={e => setVaultCuratorFee(e.target.value)}
                                                        variant='success'
                                                        tooltipPlacement='bottom'
                                                        tooltip='on'
                                                        max='20'
                                                        size='lg'
                                                    />
                                                    
                                                </div>



                                                <button type="submit" disabled={contDisabled} className="btn w-100">Continue</button>
                                            </form>
                                        </div>
                                        <div className="tab-pane fade" id="month-tab" role="tabpanel" aria-labelledby="month-tab">
                                            <form onSubmit={(e) => createVault(e)} className="create-item-form">
                                                <div className="form-grp">
                                                    <label htmlFor="title">VAULT NAME</label>
                                                    <input id="title" onChange={(e) => setVaultName(e.target.value)} type="text" placeholder="e. g. Cryptopunk Frenzy " />
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-grp">
                                                            <label htmlFor="royalties">TOKEN SUPPLY</label>
                                                            <input id="royalties" onChange={(e) => setVaultSupply(e.target.value)} type="number" placeholder="1000" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-grp">
                                                            <label htmlFor="size">TOKEN SYMBOL</label>
                                                            <input id="size" onChange={(e) => setVaultSymbol(e.target.value)} type="text" placeholder="CPF" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-grp">
                                                    <label htmlFor="price">RESERVE PRICE IN ETH</label>
                                                    <input id="price" onChange={(e) => setVaultReservePrice(e.target.value)} type="text" placeholder="0.0" />
                                                </div>
                                                <div className="form-grp">
                                                    <label htmlFor="price">CURATOR FEE(%)</label>
                                                    <RangeSlider
                                                        value={vaultCuratorFee}
                                                        onChange={e => setVaultCuratorFee(e.target.value)}
                                                        variant='success'
                                                        tooltipPlacement='bottom'
                                                        tooltip='on'
                                                        max='20'
                                                        size='lg'
                                                    />
                                                </div>



                                                <button type="submit" disabled={contDisabled} className="btn w-100">Continue</button>
                                            </form>
                                        </div>

                                    </div>


                                    <h4>Need Help ?</h4>
                                    <div className="fractionalize-right-box">
                                        <picture><img src={process.env.NEXT_PUBLIC_APP_URL + "/assets/img/others/rightbanner.png"} className="img-fluid" alt="" /></picture>
                                        <label>How to guide</label>
                                        <h4>Things to Know Before Fractionalizing NFT(s)</h4>
                                    </div>
                                    <a href="#" className="btn w-100">View All Guide</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default FractionStep2Main;