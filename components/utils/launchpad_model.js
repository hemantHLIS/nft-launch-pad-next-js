import { Moralis } from "moralis";

const User = Moralis.Object.extend("LaunchpadUser");
const UserQuery = new Moralis.Query(new User());

const EthTokenTransfers = Moralis.Object.extend("EthTokenTransfers");
const EthTokenTransfersQuery = new Moralis.Query("EthTokenTransfers");

const EthNFTTransfers = Moralis.Object.extend("EthNFTTransfers");
const EthNFTTransfersQuery = new Moralis.Query("EthNFTTransfers");


const Vault = Moralis.Object.extend("LaunchpadVault");
const VaultQuery = new Moralis.Query(new Vault());

const LaunchpadSteps = Moralis.Object.extend("LaunchpadSteps");
const LaunchpadQuery = new Moralis.Query(new LaunchpadSteps());

const LaunchpadAboutUs = Moralis.Object.extend("LaunchpadAboutUs");
const LaunchpadAboutUsQuery = new Moralis.Query(new LaunchpadAboutUs());

const LaunchpadModel = {
    User,
    UserQuery,
    Vault, 
    VaultQuery,
    EthTokenTransfers,
    EthTokenTransfersQuery,
    LaunchpadSteps,
    LaunchpadQuery,
    LaunchpadAboutUs,
    LaunchpadAboutUsQuery,
    EthNFTTransfers,
    EthNFTTransfersQuery
};

export default LaunchpadModel;