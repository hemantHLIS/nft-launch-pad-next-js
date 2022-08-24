import Layout from '../components/layout';
import { useMoralis } from 'react-moralis';
import { Moralis } from "moralis";
import PrivacyPolicyCom from './privacyPolicyCom';
import { useState , useEffect } from 'react';

// import { useNewMoralisObject } from "react-moralis";

const Privacypolicy = () => {

//     const Monster = Moralis.Object.extend("LaunchpadPrivacyPolicy");
//     const monster = new Monster();
//     monster.set("number",10)
//     monster.set("content","Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam");
//     monster.set("data", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.");
// monster.save().then(
//   (monster) => {
//     // Execute any logic that should take place after the object is saved.
//     alert("New object created with objectId: " + monster.id);
//   },
//   (error) => {
//     // Execute any logic that should take place if the save fails.
//     // error is a Moralis.Error with an error code and message.
//     alert("Failed to create new object, with error code: " + error.message);
//   }
// );

const { isInitialized } = useMoralis();
    var [blog, setBlog] = useState([]);
    var [render,setrender] = useState(true);
    
    const blogDetails=async()=>{
        const LaunchpadPrivacyPolicy = Moralis.Object.extend("LaunchpadPrivacyPolicy");
        const LaunchpadprivacyPolicy = new LaunchpadPrivacyPolicy();
        const query = new Moralis.Query(LaunchpadprivacyPolicy);
        const result = await query.find();
        var blogData = [];
        for(let i=0; i<result.length; i++){
            const obj = {
                "No": result[i].get("number"),
                "Content": result[i].get("content"),
                "Data":result[i].get("data")
            }
            blogData.push(obj);
            console.log(blogData);
        }
        setBlog(blogData);
    }
    useEffect(()=>{
        if(isInitialized && render){
            blogDetails();
            setrender(false);
        }
    })

    return (
        <>
            <section className="breadcrumb-area breadcrumb-bg breadcrumb-bg-two">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="breadcrumb-content text-center">
                                <h3 className="title">Privacy Policy</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="latest-news-area">
                    <div className="container" >                        
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="terms-condition" onLoad={blogDetails}>
                                <PrivacyPolicyCom data = {blog}/>
                            {/* <div className="mb-3">
                                <h4>1. Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam</h4>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                            </div>
                            <div className="mb-3">
                                <h4>2. Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam</h4>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                            </div>
                            <div className="mb-3">
                                <h4>3. Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam</h4>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                            </div>
                            <div className="mb-3">
                                <h4>4 .Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam</h4>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                            </div>
                            <div className="mb-3">
                                <h4>5. Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam</h4>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                            </div>
                            <div className="mb-3">
                                <h4>6. Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam</h4>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                            </div>
                            <div className="mb-3">
                                <h4>7 .Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam</h4>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                            </div>
                            <div className="mb-3">
                                <h4>8 .Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam</h4>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                            </div>
                            <div className="mb-3">
                                <h4>9 .Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam</h4>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                            </div>
                            <div className="mb-3">
                                <h4>10 .Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam</h4>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                            </div> */}
                        </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </section>

        </>
    );
}

Privacypolicy.getLayout = (page) => <Layout>{page}</Layout>

export default Privacypolicy;