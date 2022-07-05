import Link from "next/link";

const Footer = () => {
    return (<>
        <footer>
            <div className="footer-top-wrap">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-9">
                            <div className="footer-widget">
                                <div className="footer-logo mb-25">
                                    <Link href="/"><picture><img src="assets/img/logo/logo.png" alt="" /></picture></Link>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus veritatis sequi doloribus fuga.</p>
                                <ul className="footer-social">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">Useful Links</h4>
                                <ul className="fw-links">
                                    <li><Link href="/allnfts">All NFTs</Link></li>
                                    <li><a href="#">How It Works</a></li>
                                    <li><Link href="/newfeature">New Features</Link></li>
                                    <li><Link href="/explore">Explore</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">Community</h4>
                                <ul className="fw-links">
                                    <li><a href="#">Help Center</a></li>

                                    <li><Link href="/faq">FAQ</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li><Link href="/about">About Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">Subscribe Us</h4>
                                <form action="#" className="newsletter-form">
                                    <input type="email" placeholder="info@youmail.com" />
                                    <button type="submit"><i className="flaticon-small-rocket-ship-silhouette"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="copyright-text">
                                <p>All rights reserved © 2022 by <a href="#">NFT Fractions</a></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ul className="copyright-link-list">
                                <li><Link href="/privacypolicy">Privacy Policy</Link></li>
                                <li><Link href="/terms">Terms And Condition</Link></li>
                                <li><Link href="/contactus">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>);
}

export default Footer;