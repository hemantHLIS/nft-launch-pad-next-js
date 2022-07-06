import CollectionsMain from "../components/collections/collections_main";

const { default: Layout } = require("../components/layout")

const EthereumNfts = () => {
return (
    <CollectionsMain type="Ethereum NFTs" internalLink="/nftdetails"/>
)
}

EthereumNfts.getLayout = (page) => <Layout>{page}</Layout>

export default EthereumNfts;