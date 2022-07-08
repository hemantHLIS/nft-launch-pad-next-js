import AllNftsMain from "../components/allnfts/all_nfts_main";

import Layout from "../components/layout";

const AllNfts = () => {
return (
<AllNftsMain/>
);
}

AllNfts.getLayout = (page) => <Layout>{page}</Layout>

export default AllNfts;