import { Moralis } from "moralis";

const User = Moralis.Object.extend("LaunchpadUser");
const UserQuery = new Moralis.Query(new User());
const LaunchpadModel = {
    User,
    UserQuery
};

export default LaunchpadModel;