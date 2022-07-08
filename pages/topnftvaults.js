import CollectionsMain from "../components/collections/collections_main";

import Layout from "../components/layout";

const Topnftvaults = () => {
return (
    <CollectionsMain type="Top NFT Vaults" internalLink="/vaultdetails"/>
)
}

Topnftvaults.getLayout = (page) => <Layout>{page}</Layout>

export default Topnftvaults;