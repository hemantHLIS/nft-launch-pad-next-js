const Filter = () => {
    return (
        <>
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
        </>
    );
}

export default Filter;