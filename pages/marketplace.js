import Layout from "../components/layout";
import MarketplaceMain from "../components/marketplace/marketplace_main";

const Marketplace = () => {
return (
    <MarketplaceMain/>
);
}

Marketplace.getLayout = (page) => <Layout>{page}</Layout>

export default Marketplace;