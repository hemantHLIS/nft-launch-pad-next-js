import CollectionsMain from "../components/collections/collections_main";

import Layout from "../components/layout";

const Collections = ()=>{
return (
    <CollectionsMain type="My Collections" internalLink="/collectiondetails"/>
);
}

Collections.getLayout = (page) => <Layout>{page}</Layout>

export default Collections;