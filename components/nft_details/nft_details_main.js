import dynamic from 'next/dynamic';
import { useState } from 'react';
import LiveAuction from './live_auction';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
const NftDetailsMain = () => {
    const [options, setOptions] = useState({
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    });

    const [series, setSeries] = useState([
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]);
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
            <section className="market-single-area single-nft">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="market-single-img">
                                <picture>
                                <img src="assets/img/others/market_details_img.png" alt="" />
                                </picture>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="market-single-top">
                                <div className="market-single-title-wrap">
                                    <h2 className="title">Anatomy Science Club</h2>
                                    <ul className="market-details-meta">
                                        <li>Owned by <a href="#">B14484</a></li>
                                        <li className="wishlist">6 favorites</li>
                                    </ul>
                                </div>
                                <div className="market-single-action">
                                    <ul>
                                        <li><a href="#"><i className="fas fa-share-alt"></i></a></li>
                                        <li><a href="#"><i className="fi-sr-menu-dots"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="market-single-content">
                                <p>SolFennex is an Open-world P2E game with various artistic features and utilities which includes 3D art , Comics, 3D series ,Fennex-DAO , $zen , staking , breeding and the Solivia Metaverse</p>
                                <p>What even is an NFT? NFT stands for non-fungible token, which basically means that it&apos;s one-of-kind digital asset that belongs to you and you only. The most popular NFTs right now include artwork and music also include videos.</p>
                            </div>
                            <div className="highest-bid-wrap">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-6">
                                        <div className="content">
                                            <p className="">Sale ends May 16, 2022 at 5:20pm GMT+5:30</p>
                                        </div>
                                        <hr className="mt-0 mb-3" />
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-6">
                                        <h5 className="title">Current Price</h5>
                                        <div className="highest-bid-avatar">

                                            <div className="content">
                                                <h3 className="title"><a href="author-profile.html">10.88 ETH</a></h3>
                                                <span>($37,835.85)</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <a href="#" className="place-bid-btn">Buy Now</a>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-12 mt-5">
                            <div className="accordion faq-accordian" id="accordionExample">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="accordion-item mb-3">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Details
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" >
                                                <div className="accordion-body bg-dark">
                                                    <div className="fractional-info">
                                                        <div>
                                                            <p>Contract Address</p>
                                                            <a href="#">Tokenk...Q5DA</a>
                                                        </div>
                                                        <div>
                                                            <p>Token ID</p>
                                                            <a href="#">7ttw4irhqHVw8nbi...</a>
                                                        </div>
                                                        <div>
                                                            <p>Token Standard</p>
                                                            <span>Metaplex</span>
                                                        </div>
                                                        <div>
                                                            <p>Blockchain</p>
                                                            <span>Tokenk...Q5DA</span>
                                                        </div>
                                                        <div>
                                                            <p>Metadata</p>
                                                            <span>Centralized</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="accordion-item mb-3">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Listing
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" >
                                                <div className="accordion-body bg-dark">
                                                    <div className="activity-table-responsive my-custom-scrollbar table-wrapper-scroll-y">

                                                        <table className="table activity-table mt-0">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col" className="title">Price</th>

                                                                    <th scope="col">Expiration</th>
                                                                    <th scope="col" >From</th>
                                                                    <th scope="col" >Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row" className="">
                                                                        1.5 SOL
                                                                    </th>

                                                                    <td>about 1 month</td>
                                                                    <td><a href="#">TraderGx</a></td>
                                                                    <td><a href="#" className="btn">Buy</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row" className="">
                                                                        1.5 SOL
                                                                    </th>

                                                                    <td>about 1 month</td>
                                                                    <td><a href="#">TraderGx</a></td>
                                                                    <td><a href="#" className="btn">Buy</a></td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-3">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Price History
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" >
                                                <div className="accordion-body bg-dark">
                                                    <div className="row justify-content-end mt-4">
                                                        <div className="col-lg-4 col-md-6 col-6">
                                                            <div className="form-group mb-2">
                                                                <select className="form-control form-select">
                                                                    <option>Filter</option>
                                                                    <option>All Time</option>
                                                                    <option>24 Hours</option>
                                                                    <option>Last 7 Days</option>
                                                                    <option>Last 30 Days</option>
                                                                    <option>Popular</option>
                                                                    <option>New</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="chart">
                                                    <Chart
                                                    options={options}
                                                    series={series}
                                                    type="line"
                                                    height={350}
                                                />
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
            </section>
            <LiveAuction/>
        </>
    );
}

export default NftDetailsMain;