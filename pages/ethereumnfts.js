import CollectionsMain from "../components/collections/collections_main";

import Layout from "../components/layout";

const EthereumNfts = () => {
return (
    <CollectionsMain type="Ethereum NFTs" internalLink="/nftdetails"/>
)
}

EthereumNfts.getLayout = (page) => <Layout>{page}</Layout>

export default EthereumNfts;