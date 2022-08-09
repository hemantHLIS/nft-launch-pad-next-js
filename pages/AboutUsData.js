import React from 'react'

export default function AboutUsData(props) {
    return (
        <section className="latest-news-area">
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {props.data?.map((item, key) => {
                            return (<>
                                <div className="about-banner" key={key}>
                                    <picture>
                                        <img src={item.image} className="img-fluid" alt="" /></picture>
                                </div>
                                <div className="about-description">
                                    <p>
                                        {item.about}
                                    </p>
                                    <p>
                                        {item.about}
                                    </p>
                                </div></>)
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
