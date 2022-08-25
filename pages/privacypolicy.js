import Layout from '../components/layout';
import { useMoralis } from 'react-moralis';
import { Moralis } from "moralis";
import { useState , useEffect } from 'react';

// import { useNewMoralisObject } from "react-moralis";

const Privacypolicy = () => {


const { isInitialized } = useMoralis();
    var [privacy, setPrivacy] = useState('');
    var [render,setrender] = useState(true);
    
    const blogDetails=async()=>{
        const LaunchpadPrivacyPolicy = Moralis.Object.extend("LaunchpadPrivacyPolicy");
        const LaunchpadprivacyPolicy = new LaunchpadPrivacyPolicy();
        const query = new Moralis.Query(LaunchpadprivacyPolicy);
        const result = await query.first();
        console.log('ppp'+result.get('content'));
        setPrivacy(result.get('content'));
    }
    useEffect(()=>{
        if(isInitialized && render && privacy == ''){
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
                                <div style={{color:'#fff'}} dangerouslySetInnerHTML={{ __html: privacy}}></div>
                            
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