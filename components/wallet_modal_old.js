const WalletModal = () => {
    return (
        <div className="modal fade" id="wallet_Modal" tabIndex="-1" aria-labelledby="wallet_ModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header pb-0">
                        <h4 className="modal-title" id="exampleModalLabel">Connect your wallet </h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body pt-0">
                        <p>Connect with one of available wallet providers or create a new wallet.</p>
                        <div className="wallet-list pt-3">

                            <a href="home.php" className="wallet-box">
                                <div className="wallet-img">
                                    <picture><img src="assets/img/icons/meta-mask.png" alt=""  /></picture>
                                </div>
                                <div className="wallet-detail">
                                    <h3>Meta Mask</h3>
                                    <p>Start exploring blockchain applications in seconds.  Trusted by over 1 million users worldwide.</p>
                                </div>
                            </a>
                            <a href="home.php" className="wallet-box">
                                <div className="wallet-img">
                                    <picture><img src="assets/img/icons/c-wallet.png" alt="" /></picture>
                                </div>
                                <div className="wallet-detail">
                                    <h3>Wallet Connect</h3>
                                    <p>Open source protocol for connecting decentralised applications to mobile wallets.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WalletModal;