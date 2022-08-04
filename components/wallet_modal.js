import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useMoralis,useMoralisWeb3Api } from "react-moralis";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { Moralis } from "moralis";
import { getUser, loginUser } from "../store/user/action";
import { wrapper } from "../store/store";
import { getModalConfigs, setModalConfigs } from "../store/modals/action";

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    store.dispatch(getUser());
    store.dispatch(getModalConfigs());
});

const WalletModal = () => {
    const dispatch = useDispatch();
    const Web3Api = useMoralisWeb3Api();
    const data = useSelector((state) => state.launchUser);
    const { launchUser } = data;
    const modalData = useSelector((state)=>state.modal_config);
    const { modal_config } = modalData;
    const [name, setName] = useState();
    const [modalOpen, setModalOpen] = useState(modal_config.wallet);
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
    
    async function getAllNftData() {
        await Web3Api.account.getNFTs({
            chain: "rinkeby",
        }).then(resp=>{

            dispatch(loginUser({...launchUser,wallet_address: user?.get('ethAddress'), nfts:resp.result}));
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


    const login = async () => {
        if (!isAuthenticated) {

            await authenticate({ signingMessage: "Log in to NFT Launchpad" })
                .then(async function (user) {
                    dispatch(loginUser({ ...launchUser, wallet_address: user?.get('ethAddress') }));
                    dispatch(setModalConfigs({...modal_config,wallet:false}));
                    // get user nfts
                    await getAllNftData();
                   
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    const logOut = async () => {
        await logout();
        dispatch(loginUser({...launchUser, wallet_address:'0x0'}));
        console.log("logged out");
    }

    const displayName = async () => {

        const LaunchpadUser1 = Moralis.Object.extend("LaunchpadUser1");
        const launchpaduser = new LaunchpadUser1();
        const query = new Moralis.Query(launchpaduser);
        const users = await query.find();
        setName(users[0].get("name"));
    }

    const changeModalState = (status) =>{
        dispatch(setModalConfigs({...modal_config,wallet:status}));
    }

    return (
        <>
            {!isAuthenticated ?
                <li className="header-btn"><button onClick={() => changeModalState(true)} className="btn">Connect Wallet</button></li>
                :
                <>
                    <div className="header-action d-none d-md-block" onLoad={displayName}>
                        <ul className="profile-menu">
                            <li className=""><a href="#" className="menu-profile">
                                <picture>
                                    <img src="assets/img/others/activity_author02.png" alt="" />
                                </picture>
                            </a>
                                <div className="profile-box">
                                    <div className="profile-name" >
                                        <h3>{launchUser?.username}<span style={{ cursor: "pointer" }} onClick={() => navigator.clipboard.writeText(launchUser?.wallet_address)}><i className="far fa-clone"></i></span></h3>
                                        <span>{launchUser?.wallet_address.substr(0, 6) + "..." + launchUser?.wallet_address.substr(launchUser?.wallet_address.length - 4, launchUser?.wallet_address.length)}</span>
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

                                    <button className="wallet-box" style={{ textAlign: "left" }} onClick={login}>
                                        <div className="wallet-img">
                                            <picture><img src="assets/img/icons/meta-mask.png" alt="" /></picture>
                                        </div>
                                        <div className="wallet-detail">
                                            <h3>MetaMask</h3>
                                            <p>Start exploring blockchain applications in seconds.  Trusted by over 1 million users worldwide.</p>
                                        </div>
                                    </button>
                                    <button className="wallet-box" style={{ textAlign: "left" }} onClick={login}>
                                        <div className="wallet-img">
                                            <picture><img src="assets/img/icons/c-wallet.png" alt="" /></picture>
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