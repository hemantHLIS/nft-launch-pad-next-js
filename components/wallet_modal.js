import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useMoralis } from "react-moralis";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { Moralis } from "moralis";
import { getUser, loginUser } from "../store/user/action";
import { wrapper } from "../store/store";

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    store.dispatch(getUser());
});

const WalletModal = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.launchUser);
    const { launchUser } = data;
    const [name, setName] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
    useEffect(() => {
        console.log('launchUser==>' + JSON.stringify(data));
        dispatch(getUser());
        if (isAuthenticated) {
            // add your logic here
            dispatch(loginUser({ ...launchUser, wallet_address: user?.get('ethAddress') }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, dispatch]);


    const login = async () => {
        if (!isAuthenticated) {

            await authenticate({ signingMessage: "Log in to NFT Launchpad" })
                .then(function (user) {
                    console.log("logged in user:", user);
                    console.log(user?.get("ethAddress"));
                    dispatch(loginUser({ ...launchUser, wallet_address: user?.get('ethAddress') }));
                    setModalOpen(!modalOpen);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    const logOut = async () => {
        await logout();
        console.log("logged out");
    }

    const displayName = async () => {

        const LaunchpadUser1 = Moralis.Object.extend("LaunchpadUser1");
        const launchpaduser = new LaunchpadUser1();
        const query = new Moralis.Query(launchpaduser);
        const users = await query.find();
        setName(users[0].get("name"));
    }

    return (
        <>
            {!isAuthenticated ?
                <li className="header-btn"><button onClick={() => setModalOpen(!modalOpen)} className="btn">Connect Wallet</button></li>
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

            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>

                <ModalBody>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header pb-0">
                                <h4 className="modal-title" id="exampleModalLabel">Connect your wallet </h4>
                                <button type="button" className="btn-close" onClick={() => setModalOpen(!modalOpen)} aria-label="Close"></button>
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