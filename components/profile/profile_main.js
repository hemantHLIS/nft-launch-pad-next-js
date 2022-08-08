import ProfileAside from "./profile_aside";
import ProfileTabs from "./profile_tabs";

const ProfileMain = () => {


    return (<>
        <section className="breadcrumb-area breadcrumb-bg breadcrumb-bg-two">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="breadcrumb-content text-center">
                            <h3 className="title">My Profile</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="author-profile-area">
            <div className="container">
                <div className="row justify-content-center">
                    <ProfileAside/>
                    <ProfileTabs/>
                </div></div>
        </div>
    </>);
}

export default ProfileMain;