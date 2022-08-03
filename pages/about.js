import Layout from "../components/layout";
import { Moralis } from "moralis";
import { useState } from "react";
const About = () => {
    const [about, setAbout] = useState()
    const aboutUs=async()=>{
        const LaunchpadAboutUs = Moralis.Object.extend("LaunchpadAboutUs");
        const aboutus = new LaunchpadAboutUs();
        const query = new Moralis.Query(aboutus);
        const result = await query.find(); 
        setAbout(result[0].get("About"));
    };
    
    return (
        <>
            <section className="breadcrumb-area breadcrumb-bg breadcrumb-bg-two">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="breadcrumb-content text-center">
                                <h3 className="title">About Us</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="latest-news-area" onLoad={aboutUs}>
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="about-banner">
                                <picture>
                                    <img src="assets/img/bg/aboutbg.jpg" className="img-fluid" alt="" /></picture>
                            </div>
                            <div className="about-description">
                                <p>
                                    {about}
                                </p>
                                <p>
                                    {about}
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    );
}

About.getLayout = (page) => <Layout>{page}</Layout>

export default About;