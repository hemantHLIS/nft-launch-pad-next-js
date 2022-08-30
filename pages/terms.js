import Layout from '../components/layout';
import { Moralis } from "moralis";
import { useMoralis } from 'react-moralis';
import { useState , useEffect } from 'react';


const Terms = () => {


const { isInitialized } = useMoralis();
    var [cond, setCond] = useState('');
    var [render,setrender] = useState(true);
    
    const blogDetails=async()=>{
        const LaunchpadTermCondition = Moralis.Object.extend("LaunchpadTermCondition");
        const LaunchpadtermCondition = new LaunchpadTermCondition();
        const query = new Moralis.Query(LaunchpadtermCondition);
        const result = await query.first();
        setCond(result.get('content'));
    }
    useEffect(()=>{
        if(isInitialized && render && cond == ''){
            blogDetails();
            setrender(false);
        }
    },[render, isInitialized, cond])

    return (
        <>
            <section className="breadcrumb-area breadcrumb-bg breadcrumb-bg-two">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="breadcrumb-content text-center">
                                <h3 className="title">Terms &amp; Conditions</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="latest-news-area">
                    <div className="container">                        
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="terms-condition">
                                     <div style={{color:'#fff'}} dangerouslySetInnerHTML={{ __html: cond}}></div>
                           
                        </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </section>

        </>
    );
}

Terms.getLayout = (page) => <Layout>{page}</Layout>

export default Terms;