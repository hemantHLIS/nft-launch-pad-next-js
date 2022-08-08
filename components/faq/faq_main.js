import { Moralis } from "moralis";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

const FaqMain = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [render, setRender] = useState(true);
    const [faqs, setFaqs] = useState([]);
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout, isInitialized } = useMoralis();




    useEffect(() => {
        const getFaqs = async () => {
            const FAQ = Moralis.Object.extend("LaunchpadFAQ");
            const query = new Moralis.Query(FAQ);
            const result = await query.find();
            console.log(result);
            setFaqs(result);
            
            setQuestion(result[0].get("question"));
            setAnswer(result[0].get("answer"));
        }

        if (isInitialized && render) {
            getFaqs();
            setRender(false);
        }

    });



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
                            <Link href="/newfeature"><a className="btn">Submit Request</a></Link>
                        </div>
                        <div className="accordion faq-accordian" id="accordionExample">
                            {faqs.length > 0 && faqs.map((v, i) => (
                                <div className="accordion-item mb-3" key={v.id}>
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={'#blog' + i} aria-expanded="false" aria-controls="collapseOne" >
                                            {v.get('question')}
                                        </button>
                                    </h2>
                                    <div id={'blog'+i} className={i==0 ?'accordion-collapse collapse show':'accordion-collapse collapse'} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            {v.get('answer')}
                                        </div>
                                    </div>
                                </div>
                            ))

                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );

}

export default FaqMain;