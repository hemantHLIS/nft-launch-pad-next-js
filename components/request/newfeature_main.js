const NewfeatureMain = () => {

    return (
        <>
            <section className="breadcrumb-area breadcrumb-bg breadcrumb-bg-two">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="breadcrumb-content text-center">
                                <h3 className="title">Request for New Feature</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="latest-news-area">
                    <div className="container">                        
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-5">
                                <div className="reuest-list">
                                    <div className="select-money">
                                        <div className="text-radio">
                                            <input id="list1" name="money" type="radio" className="carfilter"/>
                                            <label htmlFor="list1">
                                                My Account
                                            </label>
                                        </div>
                                        <div className="text-radio">
                                            <input id="list2" name="money" type="radio" checked="" className="carfilter"/>
                                            <label htmlFor="list2">
                                                Wallet And Transaction Issues
                                            </label>
                                        </div>
                                        <div className="text-radio">
                                            <input id="list3" name="money" type="radio" className="carfilter"/>
                                            <label htmlFor="list3">
                                                Buying and Selling NFTs
                                            </label>
                                        </div>
                                        <div className="text-radio">
                                            <input id="list4" name="money" type="radio" className="carfilter"/>
                                            <label htmlFor="list4">
                                                Developer Help
                                            </label>
                                        </div>
                                        <div className="text-radio">
                                            <input id="list5" name="money" type="radio" className="carfilter"/>
                                            <label htmlFor="list5">
                                                Report an Error Message
                                            </label>
                                        </div>
                                        <div className="text-radio">
                                            <input id="list6" name="money" type="radio" className="carfilter"/>
                                            <label htmlFor="list6">
                                                Report Fraudlent Activity
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7">
                                  <div className="signup-form-wrap request-form">                                    
                                    <form action="#">
                                        <div className="form-grp">
                                            <label htmlFor="fName">Your email address</label>
                                            <input type="text" className="form-control" id="fName"/>
                                        </div>
                                        <div className="form-grp">
                                            <label htmlFor="lName">My Account has an issue</label>
                                            <select className="form-control form-select">
                                                <option>Getting Started</option>
                                                <option>Login Issues</option>
                                                <option>Collection on Nft Display Issues</option>
                                            </select>
                                        </div> 
                                        <div className="form-grp">
                                            <label htmlFor="lName">What is the URL of the suspicious collection on NFT Launchpad?(optional)</label>
                                            <input type="text" className="form-control" id="lName"/>
                                        </div> 
                                        <div className="form-grp">
                                            <label htmlFor="lName">Subject*</label>
                                            <input type="text" className="form-control" id="lName"/>
                                        </div>                                        
                                        <div className="form-grp">
                                            <label htmlFor="textarea">Description</label>
                                            <textarea className="form-control" rows="5"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <input type="file" name="file" id="file" className="input-file"/>
                                            <label htmlFor="file" className=" btn-tertiary js-labelFile">
                                                <i className="icon fa fa-check"></i>
                                                <span className="js-fileName">Choose a file</span>
                                            </label>
                                        </div>
                                        
                                        <div className="form-btn-wrap">
                                            <button className="btn signup">Submit</button>
                                            
                                        </div>
                                    </form>
                                </div>      
                            </div>
                        </div>
                    </div>
                </section>

        </>
    );
}

export default NewfeatureMain;