import { useState } from "react";
import { Moralis } from "moralis";

const NewfeatureMain = () => {
    const [issueType, setIssueType] = useState('My Account');
    const [email, setEmail] = useState('');
    const [url, setUrl] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');

    const submitNewFeature=()=>{
        setIssueType("");
        setEmail("");
        setUrl("");
        setSubject("");
        setDescription("");

        const LaunchNewFeature = Moralis.Object.extend("LaunchNewFeature");
        const launchNewFeature = new LaunchNewFeature();

        launchNewFeature.set("issueType", issueType);
        launchNewFeature.set("email", email);
        launchNewFeature.set("url", url);
        launchNewFeature.set("subject", subject);
        launchNewFeature.set("description", description);
        
        launchNewFeature.save();
    }
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
                                            <input id="list1" name="money" checked={issueType == 'MyAccount'} onClick={()=>setIssueType('My Account')}  type="radio" className="carfilter"/>
                                            <label htmlFor="list1">
                                                My Account
                                            </label>
                                        </div>
                                        <div className="text-radio">
                                            <input id="list2" name="money" type="radio" checked={issueType == 'Wallet And Transaction Issues'} onClick={()=>setIssueType('Wallet And Transaction Issues')} className="carfilter"/>
                                            <label htmlFor="list2">
                                                Wallet And Transaction Issues
                                            </label>
                                        </div>
                                        <div className="text-radio">
                                            <input id="list3" name="money" checked={issueType == 'Buying and Selling NFTs'} onClick={()=>setIssueType('Buying and Selling NFTs')} type="radio" className="carfilter"/>
                                            <label htmlFor="list3">
                                                Buying and Selling NFTs
                                            </label>
                                        </div>
                                        <div className="text-radio">
                                            <input id="list4" name="money" checked={issueType == 'Developer Help'} onClick={()=>setIssueType('Developer Help')} type="radio" className="carfilter"/>
                                            <label htmlFor="list4">
                                                Developer Help
                                            </label>
                                        </div>
                                        <div className="text-radio">
                                            <input id="list5" name="money" checked={issueType == 'Report an Error Message'} onClick={()=>setIssueType('Report an Error Message')} type="radio" className="carfilter"/>
                                            <label htmlFor="list5">
                                                Report an Error Message
                                            </label>
                                        </div>
                                        <div className="text-radio">
                                            <input id="list6" name="money" type="radio" checked={issueType == 'Report Fraudlent Activity'} onClick={()=>setIssueType('Report Fraudlent Activity')} className="carfilter"/>
                                            <label htmlFor="list6">
                                                Report Fraudlent Activity
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7">
                                  <div className="signup-form-wrap request-form">                                    
                                        <div className="form-grp">
                                            <label htmlFor="fName">Your email address</label>
                                            <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}  id="fName" value={email}/>
                                        </div>
                                        <div className="form-grp">
                                            <label htmlFor="lName">What is the URL of the suspicious collection on NFT Launchpad?(optional)</label>
                                            <input type="text" className="form-control" id="lName" onChange={(e)=>setUrl(e.target.value)} value={url}/>
                                        </div> 
                                        <div className="form-grp">
                                            <label htmlFor="lName">Subject*</label>
                                            <input type="text" className="form-control" id="lName" onChange={(e)=>setSubject(e.target.value)} value={subject}/>
                                        </div>                                        
                                        <div className="form-grp">
                                            <label htmlFor="textarea">Description</label>
                                            <textarea className="form-control" rows="5" onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
                                        </div>
                                        
                                        <div className="form-btn-wrap">
                                            <button className="btn signup" onClick={submitNewFeature}>Submit</button>    
                                        </div>
                                </div>      
                            </div>
                        </div>
                    </div>
                </section>

        </>
    );
}

export default NewfeatureMain;