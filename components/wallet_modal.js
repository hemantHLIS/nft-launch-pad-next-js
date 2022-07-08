import Link from "next/link";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
const WalletModal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
    useEffect(() => {
        if (isAuthenticated) {
            // add your logic here
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    const login = async () => {
        if (!isAuthenticated) {

            await authenticate({ signingMessage: "Log in using Moralis" })
                .then(function (user) {
                    console.log("logged in user:", user);
                    console.log(user?.get("ethAddress"));
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

    return (
        <>
            {!isAuthenticated ?
                <li className="header-btn"><button onClick={() => setModalOpen(!modalOpen)} className="btn">Connect Wallet</button></li>
                :
                <>
                    <div className="header-action d-none d-md-block">
                        <ul className="profile-menu">
                            <li className=""><a href="#" className="menu-profile">
                                <picture>
                                    <img src="assets/img/others/activity_author02.png" alt="" />
                                </picture>
                            </a>
                                <div className="profile-box">
                                    <div className="profile-name">
                                        <h3>John Doe <span style={{cursor:"pointer"}} onClick={()=>navigator.clipboard.writeText(user?.get('ethAddress'))}><i className="far fa-clone"></i></span></h3>
                                        <span>{user?.get('ethAddress').substr(0,6)+"..."+user?.get('ethAddress').substr(user?.get('ethAddress').length-4,user?.get('ethAddress').length)}</span>
                                    </div>
                                    <ul>
                                        <li><Link href="/profile"><a><i className="far fa-user"></i> My Profile</a></Link></li>
                                        <li><a href="#"><i className="far fa-image"></i> My Items</a></li>
                                        <li><span style={{color:"#fff", fontSize: "14px", cursor:"pointer"}} onClick={logOut}><i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;Disconnect</span></li>
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