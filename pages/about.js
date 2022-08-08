import Layout from "../components/layout";
import { Moralis } from "moralis";
import { useEffect, useState } from "react";
import AboutUsData from "./AboutUsData";
import { useMoralis } from "react-moralis";
const About = () => {
    const { isInitialized } = useMoralis();
    var [about, setAbout] = useState([]);
    // const [img, setImg] = useState();
    const aboutUs=async()=>{
        const LaunchpadAboutUs = Moralis.Object.extend("LaunchpadAboutUs");
        const aboutus = new LaunchpadAboutUs();
        const query = new Moralis.Query(aboutus);
        const result = await query.find(); 
        var tempAboutData = [];
        // setAbout(result[0].get("About"));
        // setImg(result[0].get("image"));
        for(let i=0;i<result.length;i++){
            var obj = {
                "about": result[i].get("About"),
                "image": result[i].get("image")
            }
        }
        tempAboutData.push(obj);
        console.log(tempAboutData);
        setAbout(tempAboutData);
    };

    useEffect(() => {
        if (isInitialized) {
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
            {<AboutUsData data={about}/>}
            {/* <section className="latest-news-area" onLoad={aboutUs}>
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
            </section> */}
        </>
    );
}

About.getLayout = (page) => <Layout>{page}</Layout>

export default About;