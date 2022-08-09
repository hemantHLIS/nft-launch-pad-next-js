import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { Moralis } from "moralis";
import { useMoralis } from "react-moralis";
import AboutStepComponent from "../pages/aboutStepComponent";
import BlogMainComp from "./blog/BlogMainComp";
import LaunchpadModel from "./utils/launchpad_model";
const Home = () => {
    
    const { isInitialized } = useMoralis();

    var [stepList, setStepList] = useState([]);

    var [blog, setBlog] = useState([]);
    const blogDetails=async()=>{
        const LaunchpadBlog = Moralis.Object.extend("LaunchpadBlog");
        const launchpadblog = new LaunchpadBlog();
        const query = new Moralis.Query(launchpadblog);
        query.limit(3);
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

    const stepData=async()=>{
        
        const query = LaunchpadModel.LaunchpadQuery;
        const result = await query.find();
        var stepTempList = [];
        for(let i=0; i<result.length;i++){
            var obj = {
                "step": result[i].get("step"), 
                "title":result[i].get("title"), 
                "description": result[i].get("description"),
                "image": result[i].get("image")
            }
            stepTempList.push(obj);
        }
        setStepList(stepTempList);
    }

    const storeStepData = async()=> {
        const LaunchpadStepsModel = LaunchpadModel.LaunchpadSteps;
        const LaunchpadSteps =  new LaunchpadStepsModel();
        LaunchpadSteps.set('step','GO STEP 1');
        LaunchpadSteps.set('title','Create And Sell');
        LaunchpadSteps.set('description','Wallet that is functional for NFT purchasing. You have Coinbase account at this point.');
        LaunchpadSteps.set('image','assets/img/icons/nfts_01.png');

        await LaunchpadSteps.save();

        const LaunchpadSteps2 =  new LaunchpadStepsModel();

        LaunchpadSteps2.set('step','GO STEP 2');
        LaunchpadSteps2.set('title','Create Collection');
        LaunchpadSteps2.set('description','Wallet that is functional for NFT purchasing. You have Coinbase account at this point.');
        LaunchpadSteps2.set('image','assets/img/icons/nfts_02.png');

        await LaunchpadSteps2.save();

        const LaunchpadSteps3 =  new LaunchpadStepsModel();

        LaunchpadSteps3.set('step','GO STEP 3');
        LaunchpadSteps3.set('title','Add Your NFTs');
        LaunchpadSteps3.set('description','Wallet that is functional for NFT purchasing. You have Coinbase account at this point.');
        LaunchpadSteps3.set('image','assets/img/icons/nfts_03.png');

        await LaunchpadSteps3.save();

        const LaunchpadSteps4 =  new LaunchpadStepsModel();

        LaunchpadSteps4.set('step','GO STEP 4');
        LaunchpadSteps4.set('title','List Them For Sale');
        LaunchpadSteps4.set('description','Wallet that is functional for NFT purchasing. You have Coinbase account at this point.');
        LaunchpadSteps4.set('image','assets/img/icons/nfts_04.png');

        await LaunchpadSteps4.save();



    }
    
    useEffect(() => {
        if (isInitialized) {
            // storeStepData();
          stepData();
          blogDetails();
        }
      }, [isInitialized]);
     
    return (
        <>
            <div className="banner-bg">
                <div className="banner-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-8">
                                <div className="banner-content">
                                    <h2 className="title">Buy and sell digital art <br /> <span>NFT</span> collection</h2>
                                    <p>Fractional ownership of the world’s most sought after NFTs. Fractional reduces entry costs, increases access, and enables new communities.</p>
                                    <a href="login-register.html" className="banner-btn">Explore live vaults <i className="fi-sr-arrow-right"></i></a>
                                    <a href="#"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <section className="sell-nfts-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title mb-45">
                                    <h2 className="title">Create And Sell Your NFTs </h2>
                                </div>
                            </div>
                        </div>
                        {<AboutStepComponent data={stepList} />}
                        
                    </div>
                </section>
            </div>

            <section className="top-collection-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section-title mb-40">
                                <h2 className="title">Live Auctions</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="top-collection-nav"></div>
                        </div>
                    </div>
                    <div className="row top-collection-active">
                        <div className="col-xl-3">
                            <div className="top-collection-item">
                                <div className="collection-item-thumb">
                                    <div className="shield-icon">
                                        <picture><img alt="" src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/shield.png"} /></picture>
                                    </div>
                                    <Link href="/nftdetails"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/1top_collection01.jpg"} alt="" /></picture></Link>
                                </div>
                                <div className="collection-item-content">
                                    <h5 className="title"><Link href="/nftdetails">NFT Collection</Link> <span className="price">5.4 ETH</span></h5>
                                </div>
                                <div className="collection-item-bottom">
                                    <ul>
                                        <li className="avatar"><a href="#" className="thumb"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/top_col_avatar.png"} alt="" /></picture></a>By <a href="#" className="name">Jonson</a></li>
                                        <li className="wishlist"><a href="#">59</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="top-collection-item">
                                <div className="collection-item-thumb">
                                    <div className="shield-icon">
                                    <picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/shield.png"} alt="" /> </picture>
                                    </div>
                                    <Link href="/nftdetails"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/2top_collection01.jpg"} alt="" /></picture></Link>
                                </div>
                                <div className="collection-item-content">
                                    <h5 className="title"><Link href="/nftdetails">Colorful Abstract</Link> <span className="price">5.4 ETH</span></h5>
                                </div>
                                <div className="collection-item-bottom">
                                    <ul>
                                        <li className="avatar"><a href="#" className="thumb"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/top_col_avatar.png"} alt="" /></picture></a>By <a href="#" className="name">Jonson</a></li>
                                        <li className="wishlist"><a href="#">59</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="top-collection-item">
                                <div className="collection-item-thumb">
                                    <div className="shield-icon"><picture>
                                        <img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/shield.png"} alt="" /></picture>
                                    </div>
                                    <Link href="/nftdetails"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/3top_collection01.jpg"} alt="" /></picture></Link>
                                </div>
                                <div className="collection-item-content">
                                    <h5 className="title"><Link href="/nftdetails">The girl firefly</Link> <span className="price">5.4 ETH</span></h5>
                                </div>
                                <div className="collection-item-bottom">
                                    <ul>
                                        <li className="avatar"><a href="#" className="thumb"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/top_col_avatar.png"} alt="" /></picture></a>By <a href="#" className="name">Jonson</a></li>
                                        <li className="wishlist"><a href="login-register.html">59</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="top-collection-item">
                                <div className="collection-item-thumb">
                                    <div className="shield-icon"><picture>
                                        <img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/shield.png"} alt="" /></picture>
                                    </div>
                                    <Link href="/nftdetails"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/4top_collection01.jpg"} alt="" /></picture></Link>
                                </div>
                                <div className="collection-item-content">
                                    <h5 className="title"><Link href="/nftdetails">Forest Princess</Link> <span className="price">5.4 ETH</span></h5>
                                </div>
                                <div className="collection-item-bottom">
                                    <ul>
                                        <li className="avatar"><a href="#" className="thumb"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/top_col_avatar.png"} alt="" /></picture></a>By <a href="#" className="name">Jonson</a></li>
                                        <li className="wishlist"><a href="login-register.html">59</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="top-collection-item">
                                <div className="collection-item-thumb">
                                    <div className="shield-icon"><picture>
                                        <img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/shield.png"} alt="" /></picture>
                                    </div>
                                    <Link href="/nftdetails"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/top_collection05.jpg"} alt="" /></picture></Link>
                                </div>
                                <div className="collection-item-content">
                                    <h5 className="title"><Link href="/nftdetails">NFT Painting</Link> <span className="price">5.4 ETH</span></h5>
                                </div>
                                <div className="collection-item-bottom">
                                    <ul>
                                        <li className="avatar"><a href="#" className="thumb"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/top_col_avatar.png"} alt="" /></picture></a>By <a href="#" className="name">Jonson</a></li>
                                        <li className="wishlist"><a href="login-register.html">59</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="area-bg">
                <section className="week-features-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title mb-35">
                                    <h2 className="title">Features Collections</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-5">
                                <div className="week-features-item">
                                    <div className="features-item-top">
                                        <div className="features-avatar">
                                            <div className="features-avatar-thumb">
                                                <a href="author-profile.html"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/features_avatar.png"} alt="" /></picture></a>
                                            </div>
                                            <div className="features-avatar-info">
                                                <h5 className="title"><a href="nft-marketplace.html">Deploy Abstract</a></h5>
                                                <span>Created by <a href="author-profile.html">Konx</a></span>
                                            </div>
                                        </div>
                                        <div className="features-item-wishlist">
                                            <a href="#">100</a>
                                        </div>
                                    </div>
                                    <ul className="features-img-wrap">
                                        <li className="grid-item"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/1features_img01.jpg"} alt="" /></picture></li>
                                        <li className="grid-item"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/features_img02.png"} alt="" /></picture></li>
                                        <li className="grid-item"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/features_img03.png"} alt="" /></picture></li>
                                        <li className="grid-item"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/features_img04.png"} alt="" /></picture></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="week-features-item">
                                    <div className="features-item-top">
                                        <div className="features-avatar">
                                            <div className="features-avatar-thumb">
                                                <a href="author-profile.html"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/features_avatar02.png"} alt="" /></picture></a>
                                            </div>
                                            <div className="features-avatar-info">
                                                <h5 className="title"><a href="nft-marketplace.html">Random Abstract</a></h5>
                                                <span>Created by <a href="author-profile.html">Tanuok</a></span>
                                            </div>
                                        </div>
                                        <div className="features-item-wishlist">
                                            <a href="#">300</a>
                                        </div>
                                    </div>
                                    <ul className="features-img-wrap">
                                        <li className="grid-item"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/2features_img01.jpg"} alt="" /></picture></li>
                                        <li className="grid-item"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/features_img02.png"} alt="" /></picture></li>
                                        <li className="grid-item"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/s_features_img03.png"} alt="" /></picture></li>
                                        <li className="grid-item"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/s_features_img04.png"} alt="" /></picture></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="week-features-item">
                                    <div className="features-item-top">
                                        <div className="features-avatar">
                                            <div className="features-avatar-thumb">
                                                <a href="author-profile.html"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/features_avatar03.png"} alt="" /></picture></a>
                                            </div>
                                            <div className="features-avatar-info">
                                                <h5 className="title"><a href="nft-marketplace.html">Colorful Abstract</a></h5>
                                                <span>Created by <a href="author-profile.html">Jonson</a></span>
                                            </div>
                                        </div>
                                        <div className="features-item-wishlist">
                                            <a href="#">190</a>
                                        </div>
                                    </div>
                                    <ul className="features-img-wrap">
                                        <li className="grid-item"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/3features_img01.jpg"} alt="" /></picture></li>
                                        <li className="grid-item"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/features_img02.png"} alt="" /></picture></li>
                                        <li className="grid-item"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/features_img03.png"} alt="" /></picture></li>
                                        <li className="grid-item"><picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/t_features_img04.png"} alt="" /></picture></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>



            <section className="latest-news-area" onLoad={blogDetails}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="section-title mb-45">
                                <h2 className="title">Latest Blogs </h2>
                            </div>
                        </div>
                    </div>
                    {<BlogMainComp data={blog} />}
                    {/* <div className="row justify-content-center">
                        <div className="col-xl-4 col-md-6 col-sm-9">
                            <div className="latest-news-item">
                                <div className="latest-news-thumb"><picture>
                                    <img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/blog/news_thumb01.png"} alt="" /></picture>
                                </div>
                                <div className="latest-news-content">
                                    <ul className="latest-news-meta">
                                        <li><i className="flaticon-user"></i><a href="blog.html">{bloggerName}</a></li>
                                        <li><i className="fi-sr-calendar"></i>{date}</li>
                                    </ul>
                                    <h4 className="title"><a href="blog-details.html">{title}</a></h4>
                                    <Link href="/blogdetails" ><a className="btn">read more</a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-9">
                            <div className="latest-news-item">
                                <div className="latest-news-thumb"><picture>
                                    <img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/blog/news_thumb02.png"} alt="" /></picture>
                                </div>
                                <div className="latest-news-content">
                                    <ul className="latest-news-meta">
                                        <li><i className="flaticon-user"></i><a href="blog.html">{bloggerName}</a></li>
                                        <li><i className="fi-sr-calendar"></i>{date}</li>
                                    </ul>
                                    <h4 className="title"><a href="blog-details.html">{title}</a></h4>
                                    <Link href="/blogdetails" ><a className="btn">read more</a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-9">
                            <div className="latest-news-item">
                                <div className="latest-news-thumb"><picture>
                                    <img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/blog/news_thumb03.png"} alt="" /></picture>
                                </div>
                                <div className="latest-news-content">
                                    <ul className="latest-news-meta">
                                        <li><i className="flaticon-user"></i><a href="blog.html">{bloggerName}</a></li>
                                        <li><i className="fi-sr-calendar"></i>{date}</li>
                                    </ul>
                                    <h4 className="title"><a href="blog-details.html">{title}</a></h4>
                                    <Link href="/blogdetails" ><a className="btn">read more</a></Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>


        </>
    );
}

export default Home;