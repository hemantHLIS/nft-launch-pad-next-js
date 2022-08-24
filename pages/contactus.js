import Layout from "../components/layout";
import React, { useEffect, useState } from 'react';
import { Moralis } from "moralis";
// import { useMoralis } from "react-moralis";

const Contactus = () => {
    // const { isInitialized } = useMoralis();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const handleFName=(e)=>{
        setFirstName(e.target.value);
    }
    const handleLName=(e)=>{
        setLastName(e.target.value);
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handleDescription=(e)=>{
        setDescription(e.target.value);
    }
    const getData=()=>{
        // console.log("First Name is", firstName);
        // console.log("Last Name is", lastName);
        // console.log("Email address is", email);
        // console.log("Description:", description);
        setFirstName("");
        setLastName("");
        setEmail("");
        setDescription("");

        const LaunchContactUs = Moralis.Object.extend("LaunchContactUs");
        const launchContactUs = new LaunchContactUs();

        launchContactUs.set("firstName", firstName);
        launchContactUs.set("lastName", lastName);
        launchContactUs.set("email", email);
        launchContactUs.set("description", description);
        
        launchContactUs.save();
    }
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
                                        <input type="text" className="form-control" onChange={handleFName} value={firstName} id="fName" />
                                    </div>
                                    <div className="form-grp">
                                        <label htmlFor="lName">Last name</label>
                                        <input type="text" className="form-control" id="lName" onChange={handleLName} value={lastName} />
                                    </div>
                                    <div className="form-grp">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" id="email" onChange={handleEmail} value={email} />
                                    </div>
                                    <div className="form-grp">
                                        <label htmlFor="textarea">Description</label>
                                        <textarea className="form-control" rows="5" onChange={handleDescription} value={description}></textarea>
                                    </div>


                                    <div className="form-btn-wrap">
                                        <button className="btn signup" type="reset" onClick={getData}>Submit</button>
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