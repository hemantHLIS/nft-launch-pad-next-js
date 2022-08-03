import { Moralis } from "moralis";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

const FaqMain = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout, isInitialized } = useMoralis();
   
    
    const faq=async()=>{
        const FAQ = Moralis.Object.extend("LaunchpadFAQ");
        const faq = new FAQ();
        const query = new Moralis.Query(faq);
        const result = await query.find();
        setQuestion(result[0].get("question"));
        setAnswer(result[0].get("answer"));
    }
    if(isInitialized){
    //  useEffect(()=>{
        // if(isAuthenticated){
        //     const FAQ = Moralis.Object.extend("LaunchpadFAQ");
        //     // const faq = new FAQ();
        //     const query = new Moralis.Query(FAQ);
        //     const result = await query.find();
        //     console.log(result[0]);
        //     setQuestion(result[0].get("question"));
        //     setAnswer(result[0].get("answer"));
        // }
        faq();
    // })
}
    // const [myState, setMyState] = useState('initial value')
    
    return (<>
        <section className="breadcrumb-area breadcrumb-bg breadcrumb-bg-two">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="breadcrumb-content text-center">
                            <h3 className="title">FAQ</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="latest-news-area">
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="submit-btn text-end mb-3">
                           <Link href="/newfeature"><a  className="btn">Submit Request</a></Link>
                        </div>
                        <div className="accordion faq-accordian" id="accordionExample">
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={faq}>
                                        {question}
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {/* <strong>This is the first item&apos;s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                                        {answer}
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={faq}>
                                        {question}
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {/* <strong>This is the second item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                                        {answer}
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" onClick={faq}>
                                        {question}
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {/* <strong>This is the third item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                                        {answer}
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" onClick={faq}>
                                        {question}
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {/* <strong>This is the third item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                                        {answer}
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" onClick={faq}>
                                        {question}
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {/* <strong>This is the third item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                                        {answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );

}

export default FaqMain;