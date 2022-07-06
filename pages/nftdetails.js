import NftDetailsMain from "../components/nft_details/nft_details_main";

import Layout from "../components/layout";

const Nftdetails = () => {
    return (
        <><NftDetailsMain />
        </>);
}

Nftdetails.getLayout = (page) => <Layout>{page}</Layout>

export default Nftdetails;