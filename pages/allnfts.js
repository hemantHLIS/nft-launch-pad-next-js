import AllNftsMain from "../components/allnfts/all_nfts_main";

const { default: Layout } = require("../components/layout")

const AllNfts = () => {
return (
<AllNftsMain/>
);
}

AllNfts.getLayout = (page) => <Layout>{page}</Layout>

export default AllNfts;