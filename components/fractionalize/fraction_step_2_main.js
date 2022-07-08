import Link from "next/link";

const FractionStep2Main = () => {

    return (<>
        <section className="breadcrumb-area breadcrumb-bg breadcrumb-bg-two">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="breadcrumb-content text-center">
                            <h3 className="title">fraction standard</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="fraction-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="fractional-tab">
                                    <Link href="/fractionstep1"><a className="">Choose Standard <i className="fas fa-chevron-right"></i></a></Link>
                                    <a href="#" className="active">Select your NFTs</a>
                                </div>
                            </div>
                            <div className="col-lg-12 mt-5">
                                <div className="row justify-content-center">
                                    <div className="col-lg-9 col-md-8">
                                        <div className="fractionalize-choose">
                                            <div className="choose-detail">
                                                <h2>Select your NFTs to Fractionalize</h2>
                                                <p>Choose the NFT(s) to send to a new vault, select your desired fraction type, set your vault’s details, then continue to fractionalize. Once complete, all fractions will appear in your wallet. Be aware, you cannot add to the NFTs in a vault once created. Read our guides for more information.</p>
                                            </div>
                                           
                                            <div className="row mt-5 justify-content-center ">
                                    <div className="col-xl-4 col-md-6 col-sm-6">
                                        <div className="top-collection-item">
                                            <div className="collection-item-thumb">
                                                <div className="shield-icon">
                                                    <picture><img alt="" src="assets/img/others/shield.png"/></picture>
                                                </div>
                                                <a href="#"><picture><img src="assets/img/others/3top_collection01.jpg" alt=""/></picture></a>
                                            </div>
                                            <div className="collection-item-content">
                                                <h5 className="title"><a href="#">The girl firefly</a> <span className="price">5.4 ETH</span></h5>
                                            </div>
                                            <div className="collection-item-bottom">
                                                <ul>
                                                    <li className="avatar"><a href="#" className="thumb"><picture><img src="assets/img/others/top_col_avatar.png" alt=""/></picture></a>By <a href="#" className="name">Jonson</a></li>
                                                    <li className="wishlist"><a href="#">59</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-6">
                                        <div className="top-collection-item">
                                            <div className="collection-item-thumb">
                                                <div className="shield-icon">
                                                <picture><img src="assets/img/others/shield.png" alt=""/></picture>
                                                </div>
                                                <a href="#"><picture><img src="assets/img/others/1top_collection01.jpg" alt=""/></picture></a>
                                            </div>
                                            <div className="collection-item-content">
                                                <h5 className="title"><a href="#">The girl firefly</a> <span className="price">5.4 ETH</span></h5>
                                            </div>
                                            <div className="collection-item-bottom">
                                                <ul>
                                                    <li className="avatar"><a href="#" className="thumb"><picture><img src="assets/img/others/top_col_avatar.png" alt=""/></picture></a>By <a href="#" className="name">Jonson</a></li>
                                                    <li className="wishlist"><a href="#">59</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-6">
                                    <div className="top-collection-item">
                                        <div className="collection-item-thumb">
                                            <div className="shield-icon">
                                            <picture><img src="assets/img/others/shield.png" alt=""/></picture>
                                            </div>
                                            <a href="#"><picture><img src="assets/img/others/2top_collection01.jpg" alt=""/></picture></a>
                                        </div>
                                        <div className="collection-item-content">
                                            <h5 className="title"><a href="#">The girl firefly</a> <span className="price">5.4 ETH</span></h5>
                                        </div>
                                        <div className="collection-item-bottom">
                                            <ul>
                                                <li className="avatar"><a href="#" className="thumb"><picture><img src="assets/img/others/top_col_avatar.png" alt=""/></picture></a>By <a href="#" className="name">Jonson</a></li>
                                                <li className="wishlist"><a href="#">59</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                    
                                </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4">
                                        <div className="fractionalize-right">
                                            <h4 className="mb-3">Fractionalization standard</h4>
                                            <div className="activity-table-nav">
                                                <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link active" id="nft-tab" data-bs-toggle="tab" data-bs-target="#nft" type="button"
                                                        role="tab" aria-controls="nft" aria-selected="true">ERC 20</button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="month-tab" data-bs-toggle="tab" data-bs-target="#month" type="button"
                                                        role="tab" aria-controls="month" aria-selected="false">ERC 721</button>
                                                    </li>
                                                </ul>                                                
                                            </div>
                                            <div className="tab-content" id="myTabContent">
                                                <div className="tab-pane fade show active" id="nft" role="tabpanel" aria-labelledby="nft-tab">
                                                    <form action="#" className="create-item-form">
                                                        <div className="form-grp">
                                                            <label htmlFor="title">VAULT NAME</label>
                                                            <input id="title" type="text" placeholder="e. g. Cryptopunk Frenzy "/>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-grp">
                                                                    <label htmlFor="royalties">TOKEN SUPPLY</label>
                                                                    <input id="royalties" type="text" placeholder="1000"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-grp">
                                                                    <label htmlFor="size">TOKEN SYMBOL</label>
                                                                    <input id="size" type="text" placeholder="CPF"/>
                                                                </div>
                                                            </div>
                                                        </div>              
                                                        <div className="form-grp">
                                                            <label htmlFor="price">RESERVE PRICE IN ETH</label>
                                                            <input id="price" type="text" placeholder="0.0"/>
                                                        </div>
                                                        <div className="form-grp">
                                                            <label htmlFor="price">Annual Management Fee</label>
                                                            <input id="price" type="text" placeholder="0.0"/>
                                                        </div>
                                                        <div className="form-grp">
                                                            <label htmlFor="price">Governance Fee %</label>
                                                            <input id="price" type="text" placeholder="2%"/>
                                                        </div>
                                                        
                                                        
                                                        
                                                        <button type="submit" className="btn w-100">Continue</button>
                                                    </form>
                                                </div>
                                                <div className="tab-pane fade" id="month-tab" role="tabpanel" aria-labelledby="month-tab">
                                                    <form action="#" className="create-item-form">
                                                        <div className="form-grp">
                                                            <label htmlFor="title">VAULT NAME</label>
                                                            <input id="title" type="text" placeholder="e. g. Cryptopunk Frenzy "/>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-grp">
                                                                    <label htmlFor="royalties">TOKEN SUPPLY</label>
                                                                    <input id="royalties" type="text" placeholder="1000"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-grp">
                                                                    <label htmlFor="size">TOKEN SYMBOL</label>
                                                                    <input id="size" type="text" placeholder="CPF"/>
                                                                </div>
                                                            </div>
                                                        </div>              
                                                        <div className="form-grp">
                                                            <label htmlFor="price">RESERVE PRICE IN ETH</label>
                                                            <input id="price" type="text" placeholder="0.0"/>
                                                        </div>
                                                        <div className="form-grp">
                                                            <label htmlFor="price">Annual Management Fee</label>
                                                            <input id="price" type="text" placeholder="0.0"/>
                                                        </div>
                                                        <div className="form-grp">
                                                            <label htmlFor="price">Governance Fee %</label>
                                                            <input id="price" type="text" placeholder="2%"/>
                                                        </div>
                                                        
                                                        
                                                        
                                                        <button type="submit" className="btn w-100">Continue</button>
                                                    </form>
                                                </div>
                                                
                                            </div>


                                            <h4>Need Help ?</h4>
                                            <div className="fractionalize-right-box">
                                            <picture><img src="assets/img/others/rightbanner.png" className="img-fluid" alt=""/></picture>
                                                <label>How to guide</label>
                                                <h4>Things to Know Before Fractionalizing NFT(s)</h4>
                                            </div>
                                            <a href="#" className="btn w-100">View All Guide</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </>);
}

export default FractionStep2Main;