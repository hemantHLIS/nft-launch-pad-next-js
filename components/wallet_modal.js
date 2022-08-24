import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { Moralis } from "moralis";
import { getUser, loginUser } from "../store/user/action";
import { wrapper } from "../store/store";
import { getModalConfigs, setModalConfigs } from "../store/modals/action";
import LaunchpadModel from "./utils/launchpad_model";
import {  walletConnectProvider, wcProviderUrl } from "./utils/walletConnectProvider";
import WalletConnectProvider from "@walletconnect/web3-provider";
import MyWalletConnectWeb3Connector from "./utils/myconnector";
export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    store.dispatch(getUser());
    store.dispatch(getModalConfigs());
});

const WalletModal = () => {
    const dispatch = useDispatch();
    const Web3Api = useMoralisWeb3Api();
    const data = useSelector((state) => state.launchUser);
    const { launchUser } = data;
    const modalData = useSelector((state) => state.modal_config);
    const { modal_config } = modalData;
    const [name, setName] = useState();
    const [modalOpen, setModalOpen] = useState(modal_config.wallet);
    const modalOpt = modal_config.walletOpt;
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    const wcProvider = new WalletConnectProvider({
        rpc: {
            4: "https://eth-rinkeby.alchemyapi.io/v2/Zm7W-MKgphvYTxRFPgVYFHcREUKIHxl4"
        }
    });

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
        dispatch(getUser());
        dispatch(getModalConfigs());
        if (isAuthenticated) {

            // get user nfts
            getAllNftData();

            dispatch(setModalConfigs({ ...modal_config, wallet: false }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, dispatch]);


    const login = async (walletOpt) => {
        if (!isAuthenticated) {
            console.log(walletOpt);
            dispatch(setModalConfigs({ ...modal_config, walletOpt: walletOpt }));
            if(walletOpt == 'walletconnect'){
               
                await authenticate({
                    signingMessage: "Log in to NFT Launchpad",
                    connector: MyWalletConnectWeb3Connector
                })
                    .then(async function (user) {
    
                        if (user?.get('ethAddress')) {
                            dispatch(loginUser({ ...launchUser, wallet_address: user?.get('ethAddress') }));
                            dispatch(setModalConfigs({ ...modal_config, wallet: false }));
                            // get user nfts
                            await getAllNftData();
                        } else {
                            console.log('Login Failed');
                        }
    
                    })
                    .catch(function (error) {
                        console.log(error);
                    }); 




               
                // await wcProvider.enable().then(async resp=>{
                //     console.log(resp);
                //     console.log(wcProvider);
                //     if(resp[0]){
                //         dispatch(loginUser({ ...launchUser, wallet_address: String(resp[0]).toLowerCase() }));
                //         dispatch(setModalConfigs({ ...modal_config, wallet: false }));
                //         await getAllNftData(String(resp[0]).toLowerCase());
                //     }
                // });
            }else{
                await authenticate({
                    signingMessage: "Log in to NFT Launchpad",
                    provider: walletOpt
                })
                    .then(async function (user) {
    
                        if (user?.get('ethAddress')) {
                            dispatch(loginUser({ ...launchUser, wallet_address: user?.get('ethAddress') }));
                            dispatch(setModalConfigs({ ...modal_config, wallet: false }));
                            // get user nfts
                            await getAllNftData();
                        } else {
                            console.log('Login Failed');
                        }
    
                    })
                    .catch(function (error) {
                        console.log(error);
                    }); 
            }

        }
    }

    const logOut = async () => {
        await logout();
        dispatch(loginUser({ ...launchUser, wallet_address: '0x0' }));
        console.log("logged out");
    }

    const displayName = async () => {

        const LaunchpadUser1 = Moralis.Object.extend("LaunchpadUser1");
        const launchpaduser = new LaunchpadUser1();
        const query = new Moralis.Query(launchpaduser);
        const users = await query.find();
        setName(users[0].get("name"));
    }

    const changeModalState = (status) => {
        dispatch(setModalConfigs({ ...modal_config, wallet: status }));
    }

    return (
        <>
            {launchUser?.wallet_address === '0x0' ?
                <li className="header-btn"><button onClick={() => changeModalState(true)} className="btn">Connect Wallet</button></li>
                :
                <>
                    <div className="header-action d-none d-md-block" onLoad={displayName}>
                        <ul className="profile-menu">
                            <li className=""><a href="#" className="menu-profile">
                                <picture>
                                    <img src={process.env.NEXT_PUBLIC_APP_URL + "/assets/img/others/activity_author02.png"} alt="" />
                                </picture>
                            </a>
                                <div className="profile-box">
                                    <div className="profile-name" >
                                        <h3>{launchUser?.username}<span style={{ cursor: "pointer" }} onClick={() => navigator.clipboard.writeText(launchUser?.wallet_address)}><i className="far fa-clone"></i></span></h3>
                                        <span>{launchUser?.wallet_address?.substr(0, 6) + "..." + launchUser?.wallet_address?.substr(launchUser?.wallet_address?.length - 4, launchUser?.wallet_address?.length)}</span>
                                    </div>
                                    <ul>
                                        <li><Link href="/profile"><a><i className="far fa-user"></i> My Profile</a></Link></li>
                                        <li><a href="#"><i className="far fa-image"></i> My Items</a></li>
                                        <li><span style={{ color: "#fff", fontSize: "14px", cursor: "pointer" }} onClick={logOut}><i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;Disconnect</span></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>


                    </div>
                </>
            }

            <Modal toggle={() => changeModalState(!modal_config.wallet)} isOpen={modal_config.wallet}>

                <ModalBody>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header pb-0">
                                <h4 className="modal-title" id="exampleModalLabel">Connect your wallet </h4>
                                <button type="button" className="btn-close" onClick={() => changeModalState(false)} aria-label="Close"></button>
                            </div>
                            <div className="modal-body pt-0">
                                <p>Connect with one of available wallet providers or create a new wallet.</p>
                                <div className="wallet-list pt-3">

                                    <button className="wallet-box" style={{ textAlign: "left" }} onClick={() => login('metamask')}>
                                        <div className="wallet-img">
                                            <picture><img src={process.env.NEXT_PUBLIC_APP_URL + "/assets/img/icons/meta-mask.png"} alt="" /></picture>
                                        </div>
                                        <div className="wallet-detail">
                                            <h3>MetaMask</h3>
                                            <p>Start exploring blockchain applications in seconds.  Trusted by over 1 million users worldwide.</p>
                                        </div>
                                    </button>
                                    <button className="wallet-box" style={{ textAlign: "left" }} onClick={() => login('walletconnect')}>
                                        <div className="wallet-img">
                                            <picture><img src={process.env.NEXT_PUBLIC_APP_URL + "/assets/img/icons/c-wallet.png"} alt="" /></picture>
                                        </div>
                                        <div className="wallet-detail">
                                            <h3>Wallet Connect</h3>
                                            <p>Open source protocol for connecting decentralised applications to mobile wallets.</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>

            </Modal>
        </>
    );
}

export default WalletModal;