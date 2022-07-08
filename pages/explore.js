import ExploreMain from "../components/explore/explore_main";

import Layout from "../components/layout";;

const Explore = () => {

    return (<><ExploreMain /></>)

}

Explore.getLayout = (page) => <Layout>{page}</Layout>

export default Explore;