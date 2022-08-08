import CollectionDetailsMain from "../components/collections/collection_details_main";
import Layout from "../components/layout";

const Collectiondetails = () => {
    return (<CollectionDetailsMain/>);
}

Collectiondetails.getLayout = (page) => <Layout>{page}</Layout>

export default Collectiondetails;