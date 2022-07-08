import Link from "next/link";
import { useRouter } from "next/router";
import WalletModal from "./wallet_modal";

const Header = () => {
    const router = useRouter();
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
                                        <div className="logo"><Link href="/index">
                                            <picture><img src="assets/img/logo/logo-new.png" alt="" />
                                            </picture>
                                        </Link></div>
                                        <div className="header-form">
                                            <form action="#">
                                                <button><i className="flaticon-search"></i></button>
                                                <input type="text" placeholder="Search by collection, asset or user" />
                                            </form>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                                <li className={router.pathname == '/' ? "active" :"" }><Link href="/">Home</Link></li>
                                                <li className={router.pathname == '/marketplace' ? "active" :"" }><Link href="/marketplace">Marketplace</Link></li>
                                                <li className={['/explore','/collections','/allnfts','/solananfts','/ethereumnfts','/fractionalnfts','/topnftvaults'].includes(router.pathname) ? "active menu-item-has-children" : "menu-item-has-children"}><Link href="/explore">Explore</Link>
                                                    <ul className="submenu">
                                                        <li><Link href="/collections">Collections</Link></li>
                                                        <li><Link href="/allnfts">All NFTs</Link></li>
                                                        <li><Link href="/solananfts">Solana NFTs</Link></li>
                                                        <li><Link href="/ethereumnfts">Ethereum NFTs</Link></li>
                                                        <li><Link href="/fractionalnfts">Fractional NFTs </Link></li>
                                                        <li><Link href="/topnftvaults">Top NFT Vaults</Link></li>
                                                    </ul>

                                                </li>

                                                <li className="menu-item-has-children"><Link href="/fractionstep1"><a>Fractionalize</a></Link>
                                                </li>

                                                <li className={['/blog'].includes(router.pathname) ? "active menu-item-has-children" : "menu-item-has-children"}><a href="#">Help</a>
                                                    <ul className="submenu">
                                                        <li><a href="#">Community</a>
                                                            <ul className="submenu">
                                                                <li><a href="#">Discord</a></li>
                                                                <li><a href="#">Twitter</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><Link href="/blog">Blog &amp; News</Link></li>
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