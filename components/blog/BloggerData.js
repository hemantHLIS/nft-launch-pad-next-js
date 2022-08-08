import React from 'react'

export default function BloggerData(props) {
    return (
        <div className="avatar-post mt-50 mb-50">
            {props.data.map((item)=>{
                return(
                    <>
                        <div className="post-avatar-img"><picture>
                            <img src={item.bloggerPhoto} alt="img" /></picture>
                        </div>
                        <div className="post-avatar-content">
                            <h5>{item.bloggerName}</h5>
                            <p>{item.aboutBlogger}</p>
                            <ul className="post-avatar-social">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </>
                )
            })}
            
        </div>
    )
}
