import Link from "next/link";
import Layout from "../layout";
import Filter from "./filter";
import MarketplaceData from "./marketplace_data";

const MarketplaceMain = () => {
    return (
        <>
            <section className="breadcrumb-area breadcrumb-bg breadcrumb-bg-two">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="breadcrumb-content text-center">
                                <h3 className="title"></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="marketplace-section">
                <div className="container-fluid">
                    <div className="row">
                        <Filter />
                        <div className="col-xl-9 col-lg-8">
                        <MarketplaceData/>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}


export default MarketplaceMain;