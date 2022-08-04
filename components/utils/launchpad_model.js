import { Moralis } from "moralis";

const User = Moralis.Object.extend("LaunchpadUser");
const UserQuery = new Moralis.Query(new User());

const Vault = Moralis.Object.extend("LaunchpadVault");
const VaultQuery = new Moralis.Query(new Vault());
const LaunchpadModel = {
    User,
    UserQuery,
    Vault, 
    VaultQuery
};

export default LaunchpadModel;