import Layout from "../components/layout";
import { Moralis } from "moralis";
import { useEffect, useState } from "react";
import AboutUsData from "./AboutUsData";
import { useMoralis } from "react-moralis";
import LaunchpadModel from "../components/utils/launchpad_model";
const About = () => {
    const { isInitialized } = useMoralis();
    var [about, setAbout] = useState([]);
    const [img, setImg] = useState();
    const aboutUs=async()=>{
       
        const query = LaunchpadModel.LaunchpadAboutUsQuery;
        const result = await query.first(); 
        setAbout(result.get("About"));
        setImg(result.get("image"));
        
    };
    const storeAboutUs = async()=> {
        const LaunchpadAboutUs = new LaunchpadModel.LaunchpadAboutUs();
        LaunchpadAboutUs.set('image','assets/img/bg/aboutbg.jpg');
        LaunchpadAboutUs.set('About','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ');
       await LaunchpadAboutUs.save(); 
    }

    useEffect(() => {
        if (isInitialized) {
            // storeAboutUs();
          aboutUs();
        }
      }, [isInitialized]);
    
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
                                    <img src={img} className="img-fluid" alt="" /></picture>
                            </div>
                            <div className="about-description">
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