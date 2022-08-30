import React from 'react';
import Link from 'next/link';

export default function BlogMainComp(props) {
    return (
        <div className="row justify-content-center">
            {props.data?.map((item, key) => {
                return (
                    <div className="col-xl-4 col-md-6 col-sm-9" key={key}>
                        <div className="latest-news-item">
                            <div className="latest-news-thumb">
                                <picture>
                                    <img src={process.env.NEXT_PUBLIC_APP_URL+item.image} alt="" />
                                </picture>
                            </div>
                            <div className="latest-news-content">
                                <ul className="latest-news-meta">
                                    <li><i className="flaticon-user"></i><Link href="/blog"><a>{item.blogger}</a></Link></li>
                                    <li><i className="fi-sr-calendar"></i>{item.date}</li>
                                </ul>
                                <h4 className="title"><Link href="/blogdetails"><a>{item.blogTitle}</a></Link></h4>
                                <Link href="/blogdetails" ><a className="btn" >read more</a></Link>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
