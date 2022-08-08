import Layout from "../components/layout";
import VaultDetailsMain from "../components/vault/vault_details_main";

const Vaultdetails = () => {

    return (
            <VaultDetailsMain />
    );

}

Vaultdetails.getLayout = (page) => <Layout>{page}</Layout>

export default Vaultdetails;