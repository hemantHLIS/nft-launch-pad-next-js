
import Link from "next/link";

const ProfileTabs = () => {
const internalLink = "/nftdetails";
    return (
        <>
            <div className="col-xl-9 col-lg-8">
                <div className="responsive-tabs">
                    <div className="author-product-meta">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a id="tab-A" href="#pane-A" className="nav-link active" data-bs-toggle="tab" role="tab">Fractions</a>
                            </li>
                            <li className="nav-item">
                                <a id="tab-B" href="#pane-B" className="nav-link" data-bs-toggle="tab" role="tab">Vaults Created</a>
                            </li>
                            <li className="nav-item">
                                <a id="tab-C" href="#pane-C" className="nav-link" data-bs-toggle="tab" role="tab">Collectibles</a>
                            </li>
                            <li className="nav-item">
                                <a id="tab-C" href="#pane-D" className="nav-link" data-bs-toggle="tab" role="tab">Active Bids</a>
                            </li>
                            <li className="nav-item">
                                <a id="tab-C" href="#pane-E" className="nav-link" data-bs-toggle="tab" role="tab">Past Bids</a>
                            </li>
                            <li className="nav-item">
                                <a id="tab-C" href="#pane-F" className="nav-link" data-bs-toggle="tab" role="tab">Activity</a>
                            </li>

                        </ul>
                    </div>
                    <div id="content" className="tab-content" role="tablist">
                        <div id="pane-A" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">
                            <div className="card-header" role="tab" id="heading-A">
                                <h5 className="mb-0">
                                    <a className="accordion-button" data-bs-toggle="collapse" href="#collapse-A" aria-expanded="true" aria-controls="collapse-A">
                                        Fractions
                                    </a>
                                </h5>
                            </div>
                            <div id="collapse-A" className="collapse show" data-bs-parent="#content" role="tabpanel"
                                aria-labelledby="heading-A">
                                <div className="card-body">
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
                        <div id="pane-B" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-B">
                            <div className="card-header" role="tab" id="heading-B">
                                <h5 className="mb-0">
                                    <a className="accordion-button" data-bs-toggle="collapse" href="#collapse-B" aria-expanded="false"
                                        aria-controls="collapse-B">
                                        Vaults Created
                                    </a>
                                </h5>
                            </div>
                            <div id="collapse-B" className="collapse" data-bs-parent="#content" role="tabpanel"
                                aria-labelledby="heading-B">
                                <div className="card-body">
                                <div className="row">
                        <div className="col-xl-3 col-lg-4 colmd-6">
                            <Link href={internalLink}><a href={internalLink} className="single-author">
                                <div className="thumb">
                                    <picture>
                                    <img src="assets/img/others/c-bg.jpg" alt="author cover photo" />
                                    </picture>
                                </div>
                                <div className="content">
                                    <div className="author-thumb">
                                    <picture><img src="assets/img/others/mp_avatar01.png" alt="author photo" /></picture>
                                    </div>
                                    <h4 className="title">Olivia danyal</h4>
                                    <div className="collection-bio">
                                        <p>
                                            Myself Olivia_ ipsum dolor amet this consectetur adipisicing elit. Quis non fugit totam laborio.
                                        </p>
                                    </div>
                                </div>
                            </a></Link>
                        </div>
                        <div className="col-xl-3 col-lg-4 colmd-6">
                            <Link href={internalLink}><a href={internalLink} className="single-author">
                                <div className="thumb"><picture>
                                    <img src="assets/img/others/c-bg1.jpg" alt="author cover photo" /></picture>
                                </div>
                                <div className="content">
                                    <div className="author-thumb"><picture>
                                        <img src="assets/img/others/mp_avatar01.png" alt="author photo" /></picture>
                                    </div>
                                    <h4 className="title">Olivia danyal</h4>
                                    <div className="collection-bio">
                                        <p>
                                            Myself Olivia_ ipsum dolor amet this consectetur adipisicing elit. Quis non fugit totam laborio.
                                        </p>
                                    </div>
                                </div>
                            </a></Link>
                        </div>
                        <div className="col-xl-3 col-lg-4 colmd-6">
                           <Link href={internalLink}><a href={internalLink} className="single-author">
                                <div className="thumb"><picture>
                                    <img src="assets/img/others/c-bg2.jpg" alt="author cover photo" /></picture>
                                </div>
                                <div className="content">
                                    <div className="author-thumb"><picture>
                                        <img src="assets/img/others/mp_avatar01.png" alt="author photo" /></picture>
                                    </div>
                                    <h4 className="title">Olivia danyal</h4>
                                    <div className="collection-bio">
                                        <p>
                                            Myself Olivia_ ipsum dolor amet this consectetur adipisicing elit. Quis non fugit totam laborio.
                                        </p>
                                    </div>
                                </div>
                            </a></Link>
                        </div>
                        <div className="col-xl-3 col-lg-4 colmd-6">
                          <Link href={internalLink}><a href={internalLink} className="single-author">
                                <div className="thumb"><picture>
                                    <img src="assets/img/others/c-bg.jpg" alt="author cover photo" /></picture>
                                </div>
                                <div className="content">
                                    <div className="author-thumb"><picture>
                                        <img src="assets/img/others/mp_avatar01.png" alt="author photo" /></picture>
                                    </div>
                                    <h4 className="title">Olivia danyal</h4>
                                    <div className="collection-bio">
                                        <p>
                                            Myself Olivia_ ipsum dolor amet this consectetur adipisicing elit. Quis non fugit totam laborio.
                                        </p>
                                    </div>
                                </div>
                            </a></Link>
                        </div>
                        <div className="col-xl-3 col-lg-4 colmd-6">
                           <Link href={internalLink}><a href={internalLink} className="single-author">
                                <div className="thumb"><picture>
                                    <img src="assets/img/others/c-bg1.jpg" alt="author cover photo" /></picture>
                                </div>
                                <div className="content">
                                    <div className="author-thumb"><picture>
                                        <img src="assets/img/others/mp_avatar01.png" alt="author photo" /></picture>
                                    </div>
                                    <h4 className="title">Olivia danyal</h4>
                                    <div className="collection-bio">
                                        <p>
                                            Myself Olivia_ ipsum dolor amet this consectetur adipisicing elit. Quis non fugit totam laborio.
                                        </p>
                                    </div>
                                </div>
                            </a></Link>
                        </div>
                        <div className="col-xl-3 col-lg-4 colmd-6">
                           <Link href={internalLink}><a href={internalLink} className="single-author">
                                <div className="thumb"><picture>
                                    <img src="assets/img/others/c-bg2.jpg" alt="author cover photo" /></picture>
                                </div>
                                <div className="content">
                                    <div className="author-thumb"><picture>
                                        <img src="assets/img/others/mp_avatar01.png" alt="author photo" /></picture>
                                    </div>
                                    <h4 className="title">Olivia danyal</h4>
                                    <div className="collection-bio">
                                        <p>
                                            Myself Olivia_ ipsum dolor amet this consectetur adipisicing elit. Quis non fugit totam laborio.
                                        </p>
                                    </div>
                                </div>
                            </a></Link>
                        </div>
                        <div className="col-xl-3 col-lg-4 colmd-6">
                           <Link href={internalLink}><a href={internalLink} className="single-author">
                                <div className="thumb"><picture>
                                    <img src="assets/img/others/c-bg.jpg" alt="author cover photo" /></picture>
                                </div>
                                <div className="content">
                                    <div className="author-thumb"><picture>
                                        <img src="assets/img/others/mp_avatar01.png" alt="author photo" /></picture>
                                    </div>
                                    <h4 className="title">Olivia danyal</h4>
                                    <div className="collection-bio">
                                        <p>
                                            Myself Olivia_ ipsum dolor amet this consectetur adipisicing elit. Quis non fugit totam laborio.
                                        </p>
                                    </div>
                                </div>
                            </a></Link>
                        </div>
                        <div className="col-xl-3 col-lg-4 colmd-6">
                            <Link href={internalLink}><a href={internalLink} className="single-author">
                                <div className="thumb"><picture>
                                    <img src="assets/img/others/c-bg1.jpg" alt="author cover photo" /></picture>
                                </div>
                                <div className="content">
                                    <div className="author-thumb"><picture>
                                        <img src="assets/img/others/mp_avatar01.png" alt="author photo" /></picture>
                                    </div>
                                    <h4 className="title">Olivia danyal</h4>
                                    <div className="collection-bio">
                                        <p>
                                            Myself Olivia_ ipsum dolor amet this consectetur adipisicing elit. Quis non fugit totam laborio.
                                        </p>
                                    </div>
                                </div>
                            </a></Link>
                        </div>
                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="pane-C" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-C">
                            <div className="card-header" role="tab" id="heading-C">
                                <h5 className="mb-0">
                                    <a className="accordion-button" data-bs-toggle="collapse" href="#collapse-C" aria-expanded="true" aria-controls="collapse-C">
                                        Collectibles
                                    </a>
                                </h5>
                            </div>
                            <div id="collapse-C" className="collapse" data-bs-parent="#content" role="tabpanel"
                                aria-labelledby="heading-C">
                                <div className="card-body">
                                    <div className="row">

                                        <div className="col-xl-4 col-lg-4 colmd-6">
                                            <Link href="/collectiondetails"><a className="single-author">
                                                <div className="thumb">
                                                <picture><img src="assets/img/others/c-bg2.jpg" alt="author cover photo"/></picture>
                                                </div>
                                                <div className="content">
                                                    <div className="author-thumb">
                                                    <picture><img src="assets/img/others/mp_avatar01.png" alt="author photo"/></picture>
                                                    </div>
                                                    <h4 className="title">Olivia danyal</h4>
                                                    <div className="collection-bio">
                                                        <p>
                                                            Myself Olivia_ ipsum dolor amet this consectetur adipisicing elit. Quis non fugit totam laborio.
                                                        </p>
                                                    </div>
                                                </div>
                                            </a></Link>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 colmd-6">
                                        <Link href="/collectiondetails"><a className="single-author">
                                                <div className="thumb">
                                                <picture><img src="assets/img/others/c-bg.jpg" alt="author cover photo"/></picture>
                                                </div>
                                                <div className="content">
                                                    <div className="author-thumb">
                                                    <picture><img src="assets/img/others/mp_avatar01.png" alt="author photo"/></picture>
                                                    </div>
                                                    <h4 className="title">Olivia danyal</h4>
                                                    <div className="collection-bio">
                                                        <p>
                                                            Myself Olivia_ ipsum dolor amet this consectetur adipisicing elit. Quis non fugit totam laborio.
                                                        </p>
                                                    </div>
                                                </div>
                                            </a></Link>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 colmd-6">
                                        <Link href="/collectiondetails"><a className="single-author">
                                                <div className="thumb">
                                                <picture><img src="assets/img/others/c-bg1.jpg" alt="author cover photo"/></picture>
                                                </div>
                                                <div className="content">
                                                    <div className="author-thumb">
                                                    <picture><img src="assets/img/others/mp_avatar01.png" alt="author photo"/></picture>
                                                    </div>
                                                    <h4 className="title">Olivia danyal</h4>
                                                    <div className="collection-bio">
                                                        <p>
                                                            Myself Olivia_ ipsum dolor amet this consectetur adipisicing elit. Quis non fugit totam laborio.
                                                        </p>
                                                    </div>
                                                </div>
                                            </a></Link>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 colmd-6">
                                        <Link href="/collectiondetails"><a className="single-author">
                                                <div className="thumb">
                                                <picture><img src="assets/img/others/c-bg2.jpg" alt="author cover photo"/></picture>
                                                </div>
                                                <div className="content">
                                                    <div className="author-thumb">
                                                    <picture><img src="assets/img/others/mp_avatar01.png" alt="author photo"/></picture>
                                                    </div>
                                                    <h4 className="title">Olivia danyal</h4>
                                                    <div className="collection-bio">
                                                        <p>
                                                            Myself Olivia_ ipsum dolor amet this consectetur adipisicing elit. Quis non fugit totam laborio.
                                                        </p>
                                                    </div>
                                                </div>
                                            </a></Link>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 colmd-6">
                                        <Link href="/collectiondetails"><a className="single-author">
                                                <div className="thumb">
                                                <picture><img src="assets/img/others/c-bg.jpg" alt="author cover photo"/></picture>
                                                </div>
                                                <div className="content">
                                                    <div className="author-thumb">
                                                    <picture><img src="assets/img/others/mp_avatar01.png" alt="author photo"/></picture>
                                                    </div>
                                                    <h4 className="title">Olivia danyal</h4>
                                                    <div className="collection-bio">
                                                        <p>
                                                            Myself Olivia_ ipsum dolor amet this consectetur adipisicing elit. Quis non fugit totam laborio.
                                                        </p>
                                                    </div>
                                                </div>
                                            </a></Link>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 colmd-6">
                                        <Link href="/collectiondetails"><a className="single-author">
                                                <div className="thumb">
                                                    <picture><img src="assets/img/others/c-bg1.jpg" alt="author cover photo"/></picture>
                                                </div>
                                                <div className="content">
                                                    <div className="author-thumb">
                                                    <picture><img src="assets/img/others/mp_avatar01.png" alt="author photo"/></picture>
                                                    </div>
                                                    <h4 className="title">Olivia danyal</h4>
                                                    <div className="collection-bio">
                                                        <p>
                                                            Myself Olivia_ ipsum dolor amet this consectetur adipisicing elit. Quis non fugit totam laborio.
                                                        </p>
                                                    </div>
                                                </div>
                                            </a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="pane-D" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-D">
                            <div className="card-header" role="tab" id="heading-D">
                                <h5 className="mb-0">
                                    <a className="accordion-button" data-bs-toggle="collapse" href="#collapse-D" aria-expanded="true" aria-controls="collapse-D">
                                        Active Bids
                                    </a>
                                </h5>
                            </div>
                            <div id="collapse-D" className="collapse" data-bs-parent="#content" role="tabpanel"
                                aria-labelledby="heading-D">
                                <div className="card-body">
                                    <div className="row justify-content-center ">
                                        <div className="col-xl-4 col-md-6 col-sm-6">
                                            <div className="top-collection-item">
                                                <div className="collection-item-thumb">
                                                    <div className="shield-icon">
                                                    <picture><img src="assets/img/others/shield.png" alt=""/></picture>
                                                    </div>
                                                    <Link href="/nftdetails"><a><picture><img src="assets/img/others/1top_collection01.jpg" alt=""/></picture></a></Link>
                                                </div>
                                                <div className="collection-item-content">
                                                    <h5 className="title"><Link href="/nftdetails"><a>NFT Collection</a></Link> <span className="price">5.4 ETH</span></h5>
                                                </div>
                                                <div className="collection-item-bottom">
                                                    <ul>
                                                        <li className="avatar"><Link href="/nftdetails"><a className="thumb"><picture><img src="assets/img/others/top_col_avatar.png" alt=""/></picture></a></Link>By <a href="#" className="name">Jonson</a></li>
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
                                                    <Link href="/nftdetails"><a><picture><img src="assets/img/others/2top_collection01.jpg" alt=""/></picture></a></Link>
                                                </div>
                                                <div className="collection-item-content">
                                                    <h5 className="title"><Link href="/nftdetails"><a>NFT Collection</a></Link> <span className="price">5.4 ETH</span></h5>
                                                </div>
                                                <div className="collection-item-bottom">
                                                    <ul>
                                                        <li className="avatar"><Link href="/nftdetails"><a className="thumb"><picture><img src="assets/img/others/top_col_avatar.png" alt=""/></picture></a></Link>By <a href="#" className="name">Jonson</a></li>
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
                                                    <Link href="/nftdetails"><a><picture><img src="assets/img/others/3top_collection01.jpg" alt=""/></picture></a></Link>
                                                </div>
                                                <div className="collection-item-content">
                                                    <h5 className="title"><Link href="/nftdetails"><a>NFT Collection</a></Link> <span className="price">5.4 ETH</span></h5>
                                                </div>
                                                <div className="collection-item-bottom">
                                                    <ul>
                                                        <li className="avatar"><Link href="/nftdetails"><a className="thumb"><picture><img src="assets/img/others/top_col_avatar.png" alt=""/></picture></a></Link>By <a href="#" className="name">Jonson</a></li>
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
                                                    <Link href="/nftdetails"><a><picture><img src="assets/img/others/4top_collection01.jpg" alt=""/></picture></a></Link>
                                                </div>
                                                <div className="collection-item-content">
                                                    <h5 className="title"><Link href="/nftdetails"><a>NFT Collection</a></Link> <span className="price">5.4 ETH</span></h5>
                                                </div>
                                                <div className="collection-item-bottom">
                                                    <ul>
                                                        <li className="avatar"><Link href="/nftdetails"><a className="thumb"><picture><img src="assets/img/others/top_col_avatar.png" alt=""/></picture></a></Link>By <a href="#" className="name">Jonson</a></li>
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
                                                    <Link href="/nftdetails"><a><picture><img src="assets/img/others/1top_collection01.jpg" alt=""/></picture></a></Link>
                                                </div>
                                                <div className="collection-item-content">
                                                    <h5 className="title"><Link href="/nftdetails"><a>NFT Collection</a></Link> <span className="price">5.4 ETH</span></h5>
                                                </div>
                                                <div className="collection-item-bottom">
                                                    <ul>
                                                        <li className="avatar"><Link href="/nftdetails"><a className="thumb"><picture><img src="assets/img/others/top_col_avatar.png" alt=""/></picture></a></Link>By <a href="#" className="name">Jonson</a></li>
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
                                                    <Link href="/nftdetails"><a><picture><img src="assets/img/others/2top_collection01.jpg" alt=""/></picture></a></Link>
                                                </div>
                                                <div className="collection-item-content">
                                                    <h5 className="title"><Link href="/nftdetails"><a>NFT Collection</a></Link> <span className="price">5.4 ETH</span></h5>
                                                </div>
                                                <div className="collection-item-bottom">
                                                    <ul>
                                                        <li className="avatar"><Link href="/nftdetails"><a className="thumb"><picture><img src="assets/img/others/top_col_avatar.png" alt=""/></picture></a></Link>By <a href="#" className="name">Jonson</a></li>
                                                        <li className="wishlist"><a href="#">59</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="pane-E" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-E">
                            <div className="card-header" role="tab" id="heading-E">
                                <h5 className="mb-0">
                                    <a className="accordion-button" data-bs-toggle="collapse" href="#collapse-E" aria-expanded="true" aria-controls="collapse-E">
                                        Past Bids
                                    </a>
                                </h5>
                            </div>
                            <div id="collapse-E" className="collapse" data-bs-parent="#content" role="tabpanel"
                                aria-labelledby="heading-E">
                                <div className="card-body">
                                    <h3 className="text-white">Under Construction</h3></div>
                            </div>
                        </div>
                        <div id="pane-F" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-F">
                            <div className="card-header" role="tab" id="heading-F">
                                <h5 className="mb-0">
                                    <a className="accordion-button" data-bs-toggle="collapse" href="#collapse-F" aria-expanded="true" aria-controls="collapse-F">
                                        Activity
                                    </a>
                                </h5>
                            </div>
                            <div id="collapse-F" className="collapse" data-bs-parent="#content" role="tabpanel"
                                aria-labelledby="heading-F">
                                <div className="card-body">
                                    <div className="activity-list">
                                        <div className="activity-item">
                                            <div className="lab-inner d-flex flex-wrap align-items-center p-3 p-md-4">
                                                <div className="lab-thumb me-3 me-md-4">
                                                    <picture><img src="assets/img/others/top_collection07.jpg" alt="img" /></picture>
                                                </div>
                                                <div className="lab-content">
                                                    <h4><a href="#">Gold digger x</a>
                                                    </h4>
                                                    <p className="mb-2">GOLD DIGGER (x Antoni Tudisco)
                                                        #44/44 was put up for sale for
                                                        <b>0.0991
                                                            ETH</b>
                                                    </p>
                                                    <p className="user-id">By: <a href="#">@rasselmrh</a></p>
                                                    <p>At: 10/07/2022, 10:03 am</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="activity-item">
                                            <div className="lab-inner d-flex flex-wrap align-items-center p-3 p-md-4">
                                                <div className="lab-thumb me-3 me-md-4">
                                                    <picture><img src="assets/img/others/top_collection07.jpg" alt="img" /></picture>
                                                </div>
                                                <div className="lab-content">
                                                    <h4><a href="#">Gold digger x</a>
                                                    </h4>
                                                    <p className="mb-2">GOLD DIGGER (x Antoni Tudisco)
                                                        #44/44 was put up for sale for
                                                        <b>0.0991
                                                            ETH</b>
                                                    </p>
                                                    <p className="user-id">By: <a href="#">@rasselmrh</a></p>
                                                    <p>At: 10/07/2022, 10:03 am</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="activity-item">
                                            <div className="lab-inner d-flex flex-wrap align-items-center p-3 p-md-4">
                                                <div className="lab-thumb me-3 me-md-4">
                                                    <picture>  <img src="assets/img/others/top_collection07.jpg" alt="img" /></picture>
                                                </div>
                                                <div className="lab-content">
                                                    <h4><a href="#">Gold digger x</a>
                                                    </h4>
                                                    <p className="mb-2">GOLD DIGGER (x Antoni Tudisco)
                                                        #44/44 was put up for sale for
                                                        <b>0.0991
                                                            ETH</b>
                                                    </p>
                                                    <p className="user-id">By: <a href="#">@rasselmrh</a></p>
                                                    <p>At: 10/07/2022, 10:03 am</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default ProfileTabs;