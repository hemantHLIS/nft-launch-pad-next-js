import FaqMain from "../components/faq/faq_main";

import Layout from "../components/layout";
const Faq = () => {
return (
    <><FaqMain/></>
);
}

Faq.getLayout = (page) => <Layout>{page}</Layout>

export default Faq;