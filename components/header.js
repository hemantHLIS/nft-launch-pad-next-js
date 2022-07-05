import WalletModal from "./wallet_modal";

const Header = () => {
    return (
        <>
            <header>
                <div className="menu-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo"><a href="index.php">
                                            <picture><img src="assets/img/logo/logo-new.png" alt="" />
                                            </picture>
                                        </a></div>
                                        <div className="header-form">
                                            <form action="#">
                                                <button><i className="flaticon-search"></i></button>
                                                <input type="text" placeholder="Search by collection, asset or user" />
                                            </form>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                                <li className="active"><a href="index.php">Home</a></li>
                                                <li><a href="marketplace.php">Marketplace</a></li>
                                                <li className="menu-item-has-children"><a href="explore.php">Explore</a>
                                                    <ul className="submenu">
                                                        <li><a href="collections.php">Collection</a></li>
                                                        <li><a href="allnfts.php">All NFTs</a></li>
                                                        <li><a href="solananfts.php">Solana NFTs</a></li>
                                                        <li><a href="ethereum.php">Ethereum NFTs</a></li>
                                                        <li><a href="fractional-nfts.php">Fractional NFTs </a></li>
                                                        <li><a href="topnftvaults.php">Top NFT Vaults</a></li>
                                                    </ul>

                                                </li>

                                                <li className="menu-item-has-children"><a href="fractionalize.php">Fractionalize</a>
                                                </li>

                                                <li className="menu-item-has-children"><a href="#">Help</a>
                                                    <ul className="submenu">
                                                        <li><a href="#">Community</a>
                                                            <ul className="submenu">
                                                                <li><a href="#">Discord</a></li>
                                                                <li><a href="#">Twitter</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="header-action d-none d-md-block">
                                            <ul>
                                               <WalletModal/>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn"><i className="fas fa-times"></i></div>
                                        <div className="nav-logo"><a href="index.html">
                                            <picture><img src="assets/img/logo/logo.png" alt="" /></picture></a>
                                        </div>
                                        <div className="menu-outer">
                                        </div>
                                        <div className="social-links">
                                            <ul className="clearfix">
                                                <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                                <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                                <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
                                                <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                                <li><a href="#"><span className="fab fa-youtube"></span></a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="menu-backdrop"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;