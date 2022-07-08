
import Link from "next/link";

const BlogMain = () => {

    return (
        <>
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
            <section className="latest-news-area">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-md-6 col-sm-9">
                            <div className="latest-news-item">
                                <div className="latest-news-thumb">
                                <picture>
                                    <img src="assets/img/blog/news_thumb01.png" alt="" />
                                    </picture>
                                </div>
                                <div className="latest-news-content">
                                    <ul className="latest-news-meta">
                                        <li><i className="flaticon-user"></i><Link href="/blog">Admin</Link></li>
                                        <li><i className="fi-sr-calendar"></i> Jan 12, 2022</li>
                                    </ul>
                                    <h4 className="title"><Link href="/blogdetails">Top 5 Most Popular NFT Games world most powerful ?</Link></h4>
                                    <Link href="/blogdetails" ><a className="btn" >read more</a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-9">
                            <div className="latest-news-item">
                                <div className="latest-news-thumb">
                                <picture> <img src="assets/img/blog/news_thumb02.png" alt="" /></picture>
                                </div>
                                <div className="latest-news-content">
                                    <ul className="latest-news-meta">
                                        <li><i className="flaticon-user"></i><Link href="/blog">Admin</Link></li>
                                        <li><i className="fi-sr-calendar"></i> Jan 19, 2022</li>
                                    </ul>
                                    <h4 className="title"><Link href="/blogdetails">NFTs, rare digital items worlds crypto collectibles</Link></h4>
                                    <Link href="/blogdetails" ><a className="btn" >read more</a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-9">
                            <div className="latest-news-item">
                                <div className="latest-news-thumb">
                                <picture> <img src="assets/img/blog/news_thumb03.png" alt="" /></picture>
                                </div>
                                <div className="latest-news-content">
                                    <ul className="latest-news-meta">
                                        <li><i className="flaticon-user"></i><Link href="/blog">Admin</Link></li>
                                        <li><i className="fi-sr-calendar"></i> Jan 19, 2022</li>
                                    </ul>
                                    <h4 className="title"><Link href="/blogdetails">Crypto enthusiasts on a single platform to create</Link></h4>
                                    <Link href="/blogdetails" ><a className="btn" >read more</a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-9">
                            <div className="latest-news-item">
                                <div className="latest-news-thumb">
                                    <picture>
                                    <img src="assets/img/blog/news_thumb03.png" alt="" />
                                    </picture>
                                </div>
                                <div className="latest-news-content">
                                    <ul className="latest-news-meta">
                                        <li><i className="flaticon-user"></i><Link href="/blog">Admin</Link></li>
                                        <li><i className="fi-sr-calendar"></i> Jan 19, 2022</li>
                                    </ul>
                                    <h4 className="title"><Link href="/blogdetails">Crypto enthusiasts on a single platform to create</Link></h4>
                                    <Link href="/blogdetails" ><a className="btn" >read more</a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-9">
                            <div className="latest-news-item">
                                <div className="latest-news-thumb">
                                <picture><img src="assets/img/blog/news_thumb01.png" alt=""/></picture>
                                </div>
                                <div className="latest-news-content">
                                    <ul className="latest-news-meta">
                                        <li><i className="flaticon-user"></i><Link href="/blog">Admin</Link></li>
                                        <li><i className="fi-sr-calendar"></i> Jan 12, 2022</li>
                                    </ul>
                                    <h4 className="title"><Link href="/blogdetails">Top 5 Most Popular NFT Games world most powerful ?</Link></h4>
                                    <Link href="/blogdetails" ><a className="btn" >read more</a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-9">
                            <div className="latest-news-item">
                                <div className="latest-news-thumb">
                                <picture><img src="assets/img/blog/news_thumb02.png" alt="" /></picture>
                                </div>
                                <div className="latest-news-content">
                                    <ul className="latest-news-meta">
                                        <li><i className="flaticon-user"></i><Link href="/blog">Admin</Link></li>
                                        <li><i className="fi-sr-calendar"></i> Jan 19, 2022</li>
                                    </ul>
                                    <h4 className="title"><Link href="/blogdetails">NFTs, rare digital items worlds crypto collectibles</Link></h4>
                                    <Link href="/blogdetails" ><a className="btn" >read more</a></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );

}

export default BlogMain;