import { useEffect, useState } from "react";
import Link from "next/link";
import { Moralis } from "moralis";
import { useMoralis } from "react-moralis";
import BlogMainComp from "./BlogMainComp";

const BlogMain = () => {
    const { isInitialized } = useMoralis();
    var [blog, setBlog] = useState([]);
    const blogDetails=async()=>{
        const LaunchpadBlog = Moralis.Object.extend("LaunchpadBlog");
        const launchpadblog = new LaunchpadBlog();
        const query = new Moralis.Query(launchpadblog);
        const result = await query.find();
        var blogData = [];
        for(let i=0; i<result.length; i++){
            const obj = {
                "image": result[i].get("blogOuterImage"),
                "blogger": result[i].get("blogBy"),
                "blogTitle":result[i].get("title"),
                "date":result[i].get("date")
            }
            blogData.push(obj);
        }
        setBlog(blogData);
    }

    useEffect(()=>{
        if(isInitialized){
            blogDetails();
        }
    })
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
                {<BlogMainComp data={blog}/>}
                    {/* <div className="row justify-content-center"> */}
                        
                        {/* <div className="col-xl-4 col-md-6 col-sm-9">
                            <div className="latest-news-item" data={blog}>
                                <div className="latest-news-thumb">
                                <picture>
                                    <img src="assets/img/blog/news_thumb01.png" alt="" />
                                    </picture>
                                </div>
                                <div className="latest-news-content">
                                    <ul className="latest-news-meta">
<<<<<<< HEAD
                                        <li><i className="flaticon-user"></i><Link href="/blog"><a></a></Link></li>
                                        <li><i className="fi-sr-calendar"></i></li>
                                    </ul>
                                    <h4 className="title"><Link href="/blogdetails"><a></a></Link></h4>
=======
                                        <li><i className="flaticon-user"></i><Link href="/blog"><a>{bloggerName}</a></Link></li>
                                        <li><i className="fi-sr-calendar"></i>{date}</li>
                                    </ul>
                                    <h4 className="title"><Link href="/blogdetails"><a>{title}</a></Link></h4>
>>>>>>> df2310ba5d35b8e8dfb008c45f24973b43a846d7
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
                                        <li><i className="flaticon-user"></i><Link href="/blog"><a></a></Link></li>
                                        <li><i className="fi-sr-calendar"></i> </li>
                                    </ul>
                                    <h4 className="title"><Link href="/blogdetails"><a></a></Link></h4>
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
                                        <li><i className="flaticon-user"></i><Link href="/blog"><a></a></Link></li>
                                        <li><i className="fi-sr-calendar"></i></li>
                                    </ul>
                                    <h4 className="title"><Link href="/blogdetails"><a></a></Link></h4>
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
                                        <li><i className="flaticon-user"></i><Link href="/blog"><a></a></Link></li>
                                        <li><i className="fi-sr-calendar"></i></li>
                                    </ul>
                                    <h4 className="title"><Link href="/blogdetails"><a></a></Link></h4>
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
                                        <li><i className="flaticon-user"></i><Link href="/blog"><a></a></Link></li>
                                        <li><i className="fi-sr-calendar"></i></li>
                                    </ul>
                                    <h4 className="title"><Link href="/blogdetails"><a></a></Link></h4>
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
                                        <li><i className="flaticon-user"></i><Link href="/blog"><a></a></Link></li>
                                        <li><i className="fi-sr-calendar"></i><a></a></li>
                                    </ul>
                                    <h4 className="title"><Link href="/blogdetails"><a></a></Link></h4>
                                    <Link href="/blogdetails" ><a className="btn" >read more</a></Link>
                                </div>
                            </div>
                        </div> */}

                    {/* </div> */}
                </div>
            </section>
        </>
    );

}

export default BlogMain;