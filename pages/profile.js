import Layout from "../components/layout";
import ProfileMain from "../components/profile/profile_main";
const Profile = ()=> {
    return (<>
    <ProfileMain/></>);
}

Profile.getLayout = (page)=> <Layout>{page}</Layout>

export default Profile;