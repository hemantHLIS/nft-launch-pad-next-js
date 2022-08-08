import Layout from "../components/layout";

const Contactus = () => {
    return (
        <>
            <section className="breadcrumb-area breadcrumb-bg breadcrumb-bg-two">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="breadcrumb-content text-center">
                                <h3 className="title">Contact Us</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="latest-news-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="signup-form-wrap">

                                <form action="#">
                                    <div className="form-grp">
                                        <label htmlFor="fName">First name</label>
                                        <input type="text" className="form-control" id="fName" />
                                    </div>
                                    <div className="form-grp">
                                        <label htmlFor="lName">Last name</label>
                                        <input type="text" className="form-control" id="lName" />
                                    </div>
                                    <div className="form-grp">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="form-grp">
                                        <label htmlFor="textarea">Description</label>
                                        <textarea className="form-control" rows="5"></textarea>
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

Contactus.getLayout = (page) => <Layout>{page}</Layout>

export default Contactus;