import CollectionsMain from "../components/collections/collections_main";

const { default: Layout } = require("../components/layout")

const SolanaNfts = () => {
return (
    <CollectionsMain type="Solana NFTs"/>
)
}

SolanaNfts.getLayout = (page) => <Layout>{page}</Layout>

export default SolanaNfts;