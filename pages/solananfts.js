import CollectionsMain from "../components/collections/collections_main";

import Layout from "../components/layout";

const SolanaNfts = () => {
return (
    <CollectionsMain type="Solana NFTs" internalLink="/nftdetails"/>
)
}

SolanaNfts.getLayout = (page) => <Layout>{page}</Layout>

export default SolanaNfts;