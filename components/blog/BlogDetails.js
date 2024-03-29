import React from 'react'

export default function BlogDetails(props) {
    return (
        <div className="standard-blog-item blog-details-content">
            {props.data.map((item, key)=>{
                console.log(item)
                return(
                    <>
                    <div className="blog-thumb" key={key}>
                        <picture>
                            <img src={item.blogImage} alt="" /></picture>
                    </div>
                    <div className="standard-blog-content">
                    <ul className="standard-blog-meta">
                        <li><a href="#"><i className="flaticon-supermarket"></i>NFT Marketplace</a></li>
                        <li><a href="#"><i className="flaticon-avatar"></i>{item.role}</a></li>
                        <li><a href="#"><i className="flaticon-calendar"></i>{item.date}</a></li>
                    </ul>
                    <h4 className="title">{item.blogTitle}</h4>
                    <p>{item.description}</p>
                    <p>{item.description}</p>
                    <blockquote>
                        “ Wallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum nsectetur. Non fungible tokens or NFTs are cryptographic assets on a blockchain with unique identification codes “
                        <footer>jon Bernthal</footer>
                    </blockquote>
                    <p>{item.description}</p>
                    <h4 className="small-title">{item.blogTitle}</h4>
                    <p>{item.description}</p>
                    <p>{item.description}</p>
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
                </>
                )
            })}
            
            
        </div>
    )
}
