import CollectionsMain from "../components/collections/collections_main";

const { default: Layout } = require("../components/layout")

const Collections = ()=>{
return (
    <CollectionsMain type="My Collections" internalLink="/collectiondetails"/>
);
}

Collections.getLayout = (page) => <Layout>{page}</Layout>

export default Collections;