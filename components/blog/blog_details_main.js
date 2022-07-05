import Link from "next/link";

const BlogDetailsMain = () => {

    return (<>
        <section className="breadcrumb-area breadcrumb-bg breadcrumb-bg-two">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="breadcrumb-content text-center">
                            <h3 className="title">Blog</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="blog-details-area pt-80 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-9 col-lg-8">
                        <div className="standard-blog-item blog-details-content">
                            <div className="blog-thumb">
                                <picture>
                                    <img src="assets/img/blog/blog_thumb01.png" alt="" /></picture>
                            </div>
                            <div className="standard-blog-content">
                                <ul className="standard-blog-meta">
                                    <li><a href="#"><i className="flaticon-supermarket"></i>NFT Marketplace</a></li>
                                    <li><a href="#"><i className="flaticon-avatar"></i>Admin</a></li>
                                    <li><a href="#"><i className="flaticon-calendar"></i>Mar 10, 2022</a></li>
                                </ul>
                                <h4 className="title">Marketplace is the online shop for the video</h4>
                                <p>Wallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum nsectetur. Non fungible tokens or NFTs are cryptographic assets on a blockchain with unique identification codes a metadata that distinguish them from each other Unlike cryptocurren.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                <p>Dallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum nsectetur. Non fungible tokens or NFTs are cryptographic assets on a blockchain with unique identification codes a metadata that distinguish them from each other Unlike cryptocurren.</p>
                                <blockquote>
                                    “ Wallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum nsectetur. Non fungible tokens or NFTs are cryptographic assets on a blockchain with unique identification codes “
                                    <footer>jon Bernthal</footer>
                                </blockquote>
                                <p>Mallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum nsectetur. Non fungible tokens or NFTs are cryptographic assets on a blockchain with unique identification codes a metadata that distinguish them from each other Unlike cryptocurren.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                <h4 className="small-title">The online shop for the video</h4>
                                <p>Gallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum nsectetur. Non fungible tokens or NFTs are cryptographic assets on a blockchain with unique identification codes a metadata that distinguish them from each other Unlike cryptocurren.</p>
                                <p>Wallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum nsectetur. Non fungible tokens or NFTs are cryptographic assets on a blockchain with unique identification codes a metadata that distinguish them from each other Unlike cryptocurren.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                <div className="blog-line"></div>
                                <div className="blog-details-bottom">
                                    <div className="blog-details-tags">
                                        <ul>
                                            <li className="title">Tags :</li>
                                            <li><a href="#">Business,</a></li>
                                            <li><a href="#">Work,</a></li>
                                            <li><a href="#">Knowledge,</a></li>
                                            <li><a href="#">Online</a></li>
                                        </ul>
                                    </div>
                                    <div className="blog-details-social">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="avatar-post mt-50 mb-50">
                            <div className="post-avatar-img"><picture>
                                <img src="assets/img/blog/post_avatar_img.png" alt="img" /></picture>
                            </div>
                            <div className="post-avatar-content">
                                <h5>Thomas Herlihy</h5>
                                <p>Non-core vaccines are given dependng on the dog&apos;s exposure risk. These include vaccines against Bordetella.
                                </p>
                                <ul className="post-avatar-social">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="blog-next-prev">
                            <ul>
                                <li className="blog-prev">
                                    <a href="#"><picture><img src="assets/img/icons/left_arrow.png" alt="img" /></picture>Previous Post</a>
                                </li>
                                <li className="blog-next">
                                    <a href="#">Next Post<picture><img src="assets/img/icons/right_arrow.png" alt="img" /></picture></a>
                                </li>
                            </ul>
                        </div>
                        <div className="comment-reply-box">
                            <h5 className="title">Leave a Reply</h5>
                            <form action="#" className="comment-reply-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-grp">
                                            <input type="text" placeholder="Author *" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-grp">
                                            <input type="email" placeholder="Your Email *" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-grp">
                                    <textarea name="message" placeholder="Type Comment Here..."></textarea>
                                </div>
                                <button type="submit" className="btn">Submit now</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4">
                        <aside className="blog-sidebar">
                            <div className="widget">
                                <h4 className="sidebar-title">Search</h4>
                                <div className="sidebar-search">
                                    <form action="#">
                                        <input type="text" placeholder="Search ..." />
                                        <button type="submit"><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="widget">
                                <h4 className="sidebar-title">Categories</h4>
                                <div className="sidebar-cat-list">
                                    <ul>
                                        <li><a href="#">Domain Names <i className="fas fa-angle-double-right"></i></a></li>
                                        <li><a href="#">Photography <i className="fas fa-angle-double-right"></i></a></li>
                                        <li><a href="#">Coinbase <i className="fas fa-angle-double-right"></i></a></li>
                                        <li><a href="#">Trading Cards <i className="fas fa-angle-double-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget">
                                <h4 className="sidebar-title">Recent Post</h4>
                                <div className="rc-post-list">
                                    <ul>
                                        <li>
                                            <div className="rc-post-thumb">
                                                <Link href="/blogdetails"><picture><img src="assets/img/blog/rc_post_thumb01.jpg" alt="" /></picture></Link>
                                            </div>
                                            <div className="rc-post-content">
                                                <ul className="standard-blog-meta">
                                                    <li><a href="#"><i className="flaticon-avatar"></i>Admin</a></li>
                                                    <li><a href="#"><i className="flaticon-calendar"></i>Mar 10, 2022</a></li>
                                                </ul>
                                                <h5 className="title"><Link href="/blogdetails">Marketplace is the online shop for the video</Link></h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="rc-post-thumb">
                                                <Link href="/blogdetails"><picture><img src="assets/img/blog/rc_post_thumb02.jpg" alt="" /></picture></Link>
                                            </div>
                                            <div className="rc-post-content">
                                                <ul className="standard-blog-meta">
                                                    <li><a href="#"><i className="flaticon-avatar"></i>Admin</a></li>
                                                    <li><a href="#"><i className="flaticon-calendar"></i>Mar 10, 2022</a></li>
                                                </ul>
                                                <h5 className="title"><Link href="/blogdetails">Marketplace is the online shop for the video</Link></h5>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    </>);

}

export default BlogDetailsMain;