import ExploreMain from "../components/explore/explore_main";

const { default: Layout } = require("../components/layout");

const Explore = () => {

    return (<><ExploreMain /></>)

}

Explore.getLayout = (page) => <Layout>{page}</Layout>

export default Explore;