import CollectionsMain from "../components/collections/collections_main";

const { default: Layout } = require("../components/layout")

const FractionalNfts = () => {
return (
    <CollectionsMain type="Fractional NFTs" internalLink="/nftdetails"/>
)
}

FractionalNfts.getLayout = (page) => <Layout>{page}</Layout>

export default FractionalNfts;