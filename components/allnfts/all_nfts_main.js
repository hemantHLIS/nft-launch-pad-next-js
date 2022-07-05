import Link from "next/link";

const AllNftsMain = () => {
    return (
        <>
            <section className="breadcrumb-area breadcrumb-bg breadcrumb-bg-two">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="breadcrumb-content text-center">
                                <h3 className="title">All NFTs</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="author-profile-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 prelative">
                            <aside className="browse-category-sidebar" >
                                <div className="sticky" id="doc-menu">
                                    <div className="section-title mb-25">
                                        <h2 className="title">Filter</h2>
                                    </div>
                                    <div className="widget category-widget">
                                        <div className="widget-inner">
                                            <ul className="sidebar-tags">
                                                <li><a href="#" className="active">All</a></li>
                                                <li><a href="#">Live Auction</a></li>
                                                <li><a href="#">Fraction Sale</a></li>
                                                <li><a href="#">Vault Closed</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="widget category-widget">
                                        <h4 className="category-widget-title">Price</h4>
                                        <div className="widget-inner">
                                            <form action="#" className="sidebar-price-filter">

                                                <div className="select_wrap">
                                                    <ul className="default_option">
                                                        <li>
                                                            <div className="option pizza">
                                                                <div className="icon"></div>
                                                                <p>USD Dollars</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <ul className="select_ul">
                                                        <li>
                                                            <div className="option pizza">
                                                                <div className="icon"></div>
                                                                <p>USD Dollars</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="option burger">
                                                                <div className="icon"></div>
                                                                <p>Ether (ETH)</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="option ice">
                                                                <div className="icon"></div>
                                                                <p>Solana (SOL)</p>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </div>
                                                <div className="form-grp">
                                                    <input type="text" placeholder="Min" />
                                                    <span className="to">to</span>
                                                    <input type="text" placeholder="Max" />
                                                </div>
                                                <div className="form-grp mt-4">
                                                    <a href="#" className="btn w-100">Apply</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="widget category-widget">
                                        <h4 className="category-widget-title">Attributes</h4>
                                        <div className="widget-inner">
                                            <ul className="sidebar-tags">
                                                <li><a href="#" className="active">All</a></li>
                                                <li><a href="#">Solana</a></li>
                                                <li><a href="#">Etherium</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <div className="row justify-content-center ">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="top-collection-item">
                                        <div className="collection-item-thumb">
                                            <div className="shield-icon">
                                                <picture> <img src="assets/img/others/shield.png" alt="" /></picture>
                                            </div>
                                            <Link href="/nftdetails">
                                                <picture><img src="assets/img/others/1top_collection01.jpg" alt="" /></picture></Link>
                                        </div>
                                        <div className="collection-item-content">
                                            <h5 className="title"><Link href="/nftdetails">NFT Collection</Link> <span className="price">5.4 ETH</span></h5>
                                        </div>
                                        <div className="collection-item-bottom">
                                            <ul>
                                                <li className="avatar"><a href="#" className="thumb"><picture><img src="assets/img/others/top_col_avatar.png" alt="" /></picture></a>By <a href="#" className="name">Jonson</a></li>
                                                <li className="wishlist"><a href="#">59</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="top-collection-item">
                                        <div className="collection-item-thumb">
                                            <div className="shield-icon">
                                                <picture>
                                                    <img src="assets/img/others/shield.png" alt="" /></picture>
                                            </div>
                                            <Link href="/nftdetails"><picture><img src="assets/img/others/2top_collection01.jpg" alt="" /></picture></Link>
                                        </div>
                                        <div className="collection-item-content">
                                            <h5 className="title"><Link href="/nftdetails">NFT Collection</Link> <span className="price">5.4 ETH</span></h5>
                                        </div>
                                        <div className="collection-item-bottom">
                                            <ul>
                                                <li className="avatar"><a href="#" className="thumb"><picture><img src="assets/img/others/top_col_avatar.png" alt="" /></picture></a>By <a href="#" className="name">Jonson</a></li>
                                                <li className="wishlist"><a href="#">59</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="top-collection-item">
                                        <div className="collection-item-thumb">
                                            <div className="shield-icon">
                                                <picture>
                                                    <img alt="" src="assets/img/others/shield.png" />
                                                </picture>
                                            </div>
                                            <Link href="/nftdetails">
                                                <picture>
                                                    <img src="assets/img/others/3top_collection01.jpg" alt="" />
                                                </picture></Link>
                                        </div>
                                        <div className="collection-item-content">
                                            <h5 className="title"><Link href="/nftdetails">NFT Collection</Link> <span className="price">5.4 ETH</span></h5>
                                        </div>
                                        <div className="collection-item-bottom">
                                            <ul>
                                                <li className="avatar"><a href="#" className="thumb">
                                                    <picture>
                                                        <img src="assets/img/others/top_col_avatar.png" alt="" />
                                                    </picture></a>By <a href="#" className="name">Jonson</a></li>
                                                <li className="wishlist"><a href="#">59</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="top-collection-item">
                                        <div className="collection-item-thumb">
                                            <div className="shield-icon">
                                                <picture>
                                                    <img alt="" src="assets/img/others/shield.png" />
                                                </picture>
                                            </div>
                                            <Link href="/nftdetails">
                                                <picture><img src="assets/img/others/2top_collection01.jpg" alt="" /></picture></Link>
                                        </div>
                                        <div className="collection-item-content">
                                            <h5 className="title"><Link href="/nftdetails">NFT Collection</Link> <span className="price">5.4 ETH</span></h5>
                                        </div>
                                        <div className="collection-item-bottom">
                                            <ul>
                                                <li className="avatar"><a href="#" className="thumb"><picture><img src="assets/img/others/top_col_avatar.png" alt="" /></picture></a>By <a href="#" className="name">Jonson</a></li>
                                                <li className="wishlist"><a href="#">59</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="top-collection-item">
                                        <div className="collection-item-thumb">
                                            <div className="shield-icon">
                                                <picture>
                                                    <img alt="" src="assets/img/others/shield.png" />
                                                </picture>
                                            </div>
                                            <Link href="/nftdetails">
                                                <picture><img src="assets/img/others/1top_collection01.jpg" alt="" /></picture></Link>
                                        </div>
                                        <div className="collection-item-content">
                                            <h5 className="title"><Link href="/nftdetails">NFT Collection</Link> <span className="price">5.4 ETH</span></h5>
                                        </div>
                                        <div className="collection-item-bottom">
                                            <ul>
                                                <li className="avatar"><a href="#" className="thumb"><picture><img src="assets/img/others/top_col_avatar.png" alt="" /></picture></a>By <a href="#" className="name">Jonson</a></li>
                                                <li className="wishlist"><a href="#">59</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="top-collection-item">
                                        <div className="collection-item-thumb">
                                            <div className="shield-icon"><picture>
                                                <img src="assets/img/others/shield.png" alt="" /></picture>
                                            </div>
                                            <Link href="/nftdetails">
                                                <picture><img src="assets/img/others/4top_collection01.jpg" alt="" /></picture></Link>
                                        </div>
                                        <div className="collection-item-content">
                                            <h5 className="title"><Link href="/nftdetails">NFT Collection</Link> <span className="price">5.4 ETH</span></h5>
                                        </div>
                                        <div className="collection-item-bottom">
                                            <ul>
                                                <li className="avatar"><a href="#" className="thumb">
                                                    <picture><img src="assets/img/others/top_col_avatar.png" alt="" /></picture></a>By <a href="#" className="name">Jonson</a></li>
                                                <li className="wishlist"><a href="#">59</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default AllNftsMain;