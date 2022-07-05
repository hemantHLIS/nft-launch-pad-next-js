import MarketplaceData from "../marketplace/marketplace_data";
import MarketplaceMain from "../marketplace/marketplace_main";

const ExploreMain = () => {

    return (<>
        <section className="breadcrumb-area breadcrumb-bg breadcrumb-bg-two">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="breadcrumb-content text-center">
                            <h3 className="title">Explore</h3>
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
                <MarketplaceData />
            </div>
        </section>
    </>
    );
}

export default ExploreMain;