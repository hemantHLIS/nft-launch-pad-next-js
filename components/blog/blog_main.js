import { useState } from "react";
import Link from "next/link";
import { Moralis } from "moralis";

const BlogMain = () => {
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [bloggerName, setBloggerName] = useState();
    const blogDetails=async()=>{
        const LaunchpadBlog = Moralis.Object.extend("LaunchpadBlog");
        const launchpadblog = new LaunchpadBlog();
        const query = new Moralis.Query(launchpadblog);
        const result = await query.find();
        setTitle(result[0].get("title"));
        setDate(result[0].get("date"));
        setBloggerName(result[0].get("blogBy"));
    }
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
            <section className="latest-news-area" onLoad={blogDetails}>
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
                                        <li><i className="flaticon-user"></i><Link href="/blog"><a>{bloggerName}</a></Link></li>
                                        <li><i className="fi-sr-calendar"></i>{date}</li>
                                    </ul>
                                    <h4 className="title"><Link href="/blogdetails"><a>{title}</a></Link></h4>
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
                                        <li><i className="flaticon-user"></i><Link href="/blog"><a>{bloggerName}</a></Link></li>
                                        <li><i className="fi-sr-calendar"></i> {date}</li>
                                    </ul>
                                    <h4 className="title"><Link href="/blogdetails"><a>{title}</a></Link></h4>
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
                                        <li><i className="flaticon-user"></i><Link href="/blog"><a>{bloggerName}</a></Link></li>
                                        <li><i className="fi-sr-calendar"></i>{date}</li>
                                    </ul>
                                    <h4 className="title"><Link href="/blogdetails"><a>{title}</a></Link></h4>
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
                                        <li><i className="flaticon-user"></i><Link href="/blog"><a>{bloggerName}</a></Link></li>
                                        <li><i className="fi-sr-calendar"></i>{date}</li>
                                    </ul>
                                    <h4 className="title"><Link href="/blogdetails"><a>{title}</a></Link></h4>
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
                                        <li><i className="flaticon-user"></i><Link href="/blog"><a>{bloggerName}</a></Link></li>
                                        <li><i className="fi-sr-calendar"></i>{date}</li>
                                    </ul>
                                    <h4 className="title"><Link href="/blogdetails"><a>{title}</a></Link></h4>
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
                                        <li><i className="flaticon-user"></i><Link href="/blog"><a>{bloggerName}</a></Link></li>
                                        <li><i className="fi-sr-calendar"></i><a>{bloggerName}</a></li>
                                    </ul>
                                    <h4 className="title"><Link href="/blogdetails"><a>{title}</a></Link></h4>
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