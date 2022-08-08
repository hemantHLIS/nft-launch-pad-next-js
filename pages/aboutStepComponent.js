import React from 'react';

export default function aboutStepComponent(props) {
    return (
        <div className="row justify-content-center">
            {props.data.map((item) => {
                console.log(item);
                return (
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="sell-nfts-item">
                            <picture><img src={item.image} alt="" className="icon" /></picture>
                            <span className="step-count">{item.step}</span>
                            <h5 className="title">{item.title}</h5>
                            <p>{item.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
