import Link from "next/link";

const CollectionsMain = (props) => {
    
    const {type, internalLink} = props;
    
    return (
        <>
            <section className="breadcrumb-area breadcrumb-bg breadcrumb-bg-two">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="breadcrumb-content text-center">
                                <h3 className="title">{type}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="top-collection-section">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-2 col-md-3 col-6">
                            <div className="form-group mb-4">
                                <select className="form-control form-select">
                                    <option>Filter</option>
                                    <option>All</option>
                                    <option>24 Hours</option>
                                    <option>Last 7 Days</option>
                                    <option>Last 30 Days</option>
                                    <option>Popular</option>
                                    <option>New</option>
                                </select>
                            </div>
                        </div>
                    </div>
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
            </section>
        </>
    );
}

export default CollectionsMain;