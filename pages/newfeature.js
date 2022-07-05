import NewfeatureMain from "../components/request/newfeature_main";

const { default: Layout } = require("../components/layout");

const Newfeature = () => {
    return (
        <><NewfeatureMain />
        </>);
}

Newfeature.getLayout = (page) => <Layout>{page}</Layout>

export default Newfeature;