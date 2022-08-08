import { useDispatch, useSelector } from "react-redux";
import { getMode } from "../../store/fractionalize/action";
import { getModalConfigs } from "../../store/modals/action";
import { wrapper } from "../../store/store";
import { getUser } from "../../store/user/action";
import { getVault } from "../../store/vault/action";
import ProfileAside from "./profile_aside";
import ProfileTabs from "./profile_tabs";

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    store.dispatch(getMode());
    store.dispatch(getUser());
    store.dispatch(getModalConfigs());
    store.dispatch(getVault());
});
const ProfileMain = () => {

    const dispatch = useDispatch();
    const modalData = useSelector((state) => state.modal_config);
    const userData = useSelector((state) => state.launchUser);
    const vaultData = useSelector((state) => state.vault_config);
    const { launchUser } = userData;
    const { modal_config } = modalData;
    const { vault_config } = vaultData;


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
                    <ProfileAside userData={launchUser} />
                    <ProfileTabs userData={launchUser} vault_config={vault_config} />
                </div></div>
        </div>
    </>);
}

export default ProfileMain;