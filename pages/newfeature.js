import NewfeatureMain from "../components/request/newfeature_main";

import Layout from "../components/layout";;

const Newfeature = () => {
    return (
        <><NewfeatureMain />
        </>);
}

Newfeature.getLayout = (page) => <Layout>{page}</Layout>

export default Newfeature;