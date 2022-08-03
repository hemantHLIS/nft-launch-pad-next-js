import React from 'react'

export default function NFTTokenLIst(props) {
  return (
    <div className="row mt-5  justify-content-center">
        {props.myData && props.myData.map((item)=>{
      return(
        <div className="col-xl-4 col-md-6 col-sm-6">
                                        <div className="top-collection-item">
                                            <div className="collection-item-thumb">
                                                <div className="shield-icon">
                                                    <picture><img alt="" src="assets/img/others/shield.png"/></picture>
                                                </div>
                                                <a href="#"><picture><img src={item.token_uri} alt={item.token_uri}/></picture></a>
                                            </div>
                                            <div className="collection-item-content">
                                                <h5 className="title"><a href="#">{item.name}</a> <span className="symbol">{item.symbol}</span></h5>
                                            </div>
                                            <div className="collection-item-bottom">
                                                <ul>
                                                    <li className="avatar"><a href="#" className="thumb"><picture><img src="assets/img/others/top_col_avatar.png" alt=""/></picture></a>By <a href="#" className="name">Jonson</a></li>
                                                    <li className="wishlist"><a href="#">59</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        </div>
                                    )
                                     })}
    </div>
  )
}
