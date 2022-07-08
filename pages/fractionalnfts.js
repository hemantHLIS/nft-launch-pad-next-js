import CollectionsMain from "../components/collections/collections_main";

import Layout from "../components/layout";

const FractionalNfts = () => {
return (
    <CollectionsMain type="Fractional NFTs" internalLink="/nftdetails"/>
)
}

FractionalNfts.getLayout = (page) => <Layout>{page}</Layout>

export default FractionalNfts;