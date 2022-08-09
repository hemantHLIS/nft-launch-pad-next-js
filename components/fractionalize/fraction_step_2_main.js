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
import {BigNumber} from "bignumber.js";
import LaunchpadModel from "../utils/launchpad_model";
import { useRouter } from "next/router";
import { getMode } from "../../store/fractionalize/action";

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
    const [provider, setProvider]= useState();
    const { fractionalize } = data;
    const { launchUser } = userData;
    const { modal_config } = modalData;
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout, isInitialized } = useMoralis();
    const Web3Api = useMoralisWeb3Api();
    const [nftIndex, setNftIndex] = useState({ index: -1, token_address: '0x0', token_id: 0, token_name: '', token_symbol:'' });
    const [render, setRender] = useState(true);
    const [contDisabled, setContDisabled] = useState(false);
    
    // vault data
    const [vaultName, setVaultName] = useState('');
    const [vaultSupply, setVaultSupply] = useState(0);
    const [vaultSymbol, setVaultSymbol] = useState('');
    const [vaultReservePrice, setVaultReservePrice] = useState(0.0);
    const [vaultCuratorFee, setVaultCuratorFee] = useState(0.0);



    async function providerInit() {
        try {
            await Moralis.enableWeb3();
            setProvider(Moralis.provider);
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
        }).then( async resp=>{
            const vaultQuery = LaunchpadModel.VaultQuery;
            vaultQuery.equalTo('curator',user?.get('ethAddress'));
            const result = await vaultQuery.find();

            // get user balance as well here
            const balance = await fetchNativeBalance();

            dispatch(loginUser({...launchUser,wallet_address: user?.get('ethAddress'), nfts:resp.result, vaults:result, balance: balance}));
        });
    }


    useEffect(() => {
        if (launchUser.wallet_address === '0x0') {
            // open dialog for user to connect its wallet
            dispatch(setModalConfigs({ ...modal_config, wallet: true }));
        }
        if (isAuthenticated) {
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


    const createVault = async(e)=>{
        e.preventDefault();
        if(nftIndex.index == -1){
            // alert('Please select NFT to Fractionalize');
            NotificationManager.warning('Please select NFT to Fractionalize');
        }else{
            NotificationManager.info('Please approve Tx for NFT Fractionalize');
            web3Provider = await Moralis.enableWeb3();
            setProvider(Moralis.provider);
            const web3 = new Web3(Moralis.provider);
            const tokenContract = new web3.eth.Contract(Abi.ERC721ABI,nftIndex.token_address);
            const factoryContract = new web3.eth.Contract(Abi.LaunchFactoryABI,Abi.LaunchFactoryAddress);
            try {
                setContDisabled(true);
                 await tokenContract.methods.approve(Abi.LaunchFactoryAddress,nftIndex.token_id).send({from: user?.get('ethAddress')}).then(resp=>{
                    NotificationManager.info('Approval Successful, Please confirm transaction for fractionalization of NFT');
                 });

                 try {
                  
                    await factoryContract.methods.createVault(vaultName,vaultSymbol,"0x"+new BigNumber(vaultSupply).shiftedBy(18).toString(16),"0x"+new BigNumber(vaultReservePrice).shiftedBy(18).toString(16),nftIndex.token_address, nftIndex.token_id,"0x"+new BigNumber(vaultCuratorFee).shiftedBy(3).toString(16)).send({from: user?.get('ethAddress')}).then(async (resp)=>{
                        console.log('resp===>'+JSON.stringify(resp));
                        console.log('values===>'+resp.events.Mint.returnValues);
                        NotificationManager.success('NFT successfull fractionalized...Vault created successfully');

                        
                        // save vault in Moralis
                        const newVault = new LaunchpadModel.Vault();
                        newVault.set('name',vaultName);
                        newVault.set('symbol',vaultSymbol);
                        newVault.set('totalSupply',vaultSupply);
                        newVault.set('reservePrice',vaultReservePrice);
                        newVault.set('curator',launchUser.wallet_address);
                        newVault.set('curatorFee',vaultCuratorFee);
                        newVault.set('nft',nftIndex.token_address);
                        newVault.set('nftId',nftIndex.token_id);
                        newVault.set('nftName',nftIndex.token_name);
                        newVault.set('nftSymbol',nftIndex.token_symbol);
                        newVault.set('vaultDetails', resp.events.Mint.returnValues);
                        
                        await newVault.save();
                        
                        // refresh nft data
                        await getAllNftData();
                        setNftIndex({index:-1, token_address:'',token_id:0, token_name: '', token_symbol: ''});
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
            finally{
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
                                                                <picture><img alt="" src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/shield.png"} /></picture>
                                                            </div>
                                                            <picture><img src={i % 2 == 0 ? process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/1top_collection01.jpg" : process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/2top_collection01.jpg"} alt="" /></picture>
                                                        </div>
                                                        <div className="collection-item-content">
                                                            <h5 className="title">{item.name} <span className="symbol">{item.symbol}</span></h5>
                                                        </div>
                                                        <div className="collection-item-bottom">
                                                            <ul>
                                                                <li className="avatar"><div className="thumb"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/top_col_avatar.png"} alt="" /></picture></div>By&nbsp;<div className="name">{launchUser?.username}</div></li>
                                                                {/* <li className="wishlist"><a>59</a></li> */}
                                                                <li>ID:<a><b>{item.token_id}</b></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="fractionalize-right">
                                    <h4 className="mb-3">Fractionalization standard</h4>
                                    <div className="activity-table-nav">
                                        <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className={fractionalize.mode == "erc20" ? "nav-link active" : "nav-link"} id="nft-tab" data-bs-toggle="tab" data-bs-target="#nft" type="button"
                                                    role="tab" aria-controls="nft" aria-selected={fractionalize.mode == "erc20" ? "true" : "false"}>ERC 20</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className={fractionalize.mode == "erc721" ? "nav-link active" : "nav-link"} id="month-tab" data-bs-toggle="tab" data-bs-target="#month" type="button"
                                                    role="tab" aria-controls="month" aria-selected={fractionalize.mode == "erc721" ? "true" : "false"}>ERC 721</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="nft" role="tabpanel" aria-labelledby="nft-tab">
                                        <form  onSubmit={(e)=>createVault(e)} className="create-item-form">
                                                <div className="form-grp">
                                                    <label htmlFor="title">VAULT NAME</label>
                                                    <input id="title" onChange={(e)=>setVaultName(e.target.value)} type="text" placeholder="e. g. Cryptopunk Frenzy " required/>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-grp">
                                                            <label htmlFor="royalties">TOKEN SUPPLY</label>
                                                            <input id="royalties" onChange={(e)=>setVaultSupply(e.target.value)} type="number" placeholder="1000" required/>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-grp">
                                                            <label htmlFor="size">TOKEN SYMBOL</label>
                                                            <input id="size" onChange={(e)=>setVaultSymbol(e.target.value)} type="text" placeholder="CPF" required/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-grp">
                                                    <label htmlFor="price">RESERVE PRICE IN ETH</label>
                                                    <input id="price" onChange={(e)=>setVaultReservePrice(e.target.value)} type="number" placeholder="0.0" step="0.01" required />
                                                </div>
                                                <div className="form-grp">
                                                    <label htmlFor="price">CURATOR FEE(%)</label>
                                                    <input id="price" onChange={(e)=>setVaultCuratorFee(e.target.value)} type="number" step="0.01" placeholder="0.0" required/>
                                                </div>



                                                <button type="submit" disabled={contDisabled} className="btn w-100">Continue</button>
                                            </form>
                                        </div>
                                        <div className="tab-pane fade" id="month-tab" role="tabpanel" aria-labelledby="month-tab">
                                            <form  onSubmit={(e)=>createVault(e)} className="create-item-form">
                                                <div className="form-grp">
                                                    <label htmlFor="title">VAULT NAME</label>
                                                    <input id="title" onChange={(e)=>setVaultName(e.target.value)} type="text" placeholder="e. g. Cryptopunk Frenzy " />
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-grp">
                                                            <label htmlFor="royalties">TOKEN SUPPLY</label>
                                                            <input id="royalties" onChange={(e)=>setVaultSupply(e.target.value)} type="number" placeholder="1000" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-grp">
                                                            <label htmlFor="size">TOKEN SYMBOL</label>
                                                            <input id="size" onChange={(e)=>setVaultSymbol(e.target.value)} type="text" placeholder="CPF" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-grp">
                                                    <label htmlFor="price">RESERVE PRICE IN ETH</label>
                                                    <input id="price" onChange={(e)=>setVaultReservePrice(e.target.value)} type="text" placeholder="0.0" />
                                                </div>
                                                <div className="form-grp">
                                                    <label htmlFor="price">CURATOR FEE(%)</label>
                                                    <input id="price" onChange={(e)=>setVaultCuratorFee(e.target.value)} type="text" placeholder="0.0" />
                                                </div>



                                                <button type="submit" disabled={contDisabled} className="btn w-100">Continue</button>
                                            </form>
                                        </div>

                                    </div>


                                    <h4>Need Help ?</h4>
                                    <div className="fractionalize-right-box">
                                        <picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/rightbanner.png"} className="img-fluid" alt="" /></picture>
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