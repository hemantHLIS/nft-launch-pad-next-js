import { Moralis } from "moralis";
import { useState } from "react";
import LaunchpadModel from "../utils/launchpad_model";

const ProfileAside = ({userData}) => {

    const [name, setName] = useState("");
    const [gender, SetGender] = useState("");
    const callMyProfile= async()=>{

        
        const query = LaunchpadModel.UserQuery;
        const users = await query.find();  
        setName(users[0].get("name"));    
        SetGender(users[0].get("gender"));
    }
    return (<>
        <div className="col-xl-3 col-lg-4 col-md-6 ">
            <aside className="author-profile-wrap">
                <div className="author-profile-thumb">
                    <picture>
                        <img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/others/author_profile.png"} alt="" />
                    </picture>
                </div>
                <div className="author-info" onLoad={callMyProfile}>
                    <h5 className="title">{name} <picture><img src={process.env.NEXT_PUBLIC_APP_URL+"/assets/img/icons/star.svg"} alt=""/></picture></h5>
                    <span>{gender}</span>
                    <p>Myself {name} ipsum dolor amet this consectetur adipisicing elit. Quis non fugit totam laborio.</p>
                </div>
                <ul className="author-collection">
                    <li>
                        <p>Collection</p>
                        <span>201</span>
                    </li>
                    <li>
                        <p>Vaults</p>
                        <span>{userData?.vaults?.length}</span>
                    </li>
                </ul>
                <div>
                    <a href="#" className="btn" data-bs-toggle="modal" data-bs-target="#editModal">Edit Profile</a>
                </div>

            </aside>
        </div>
    </>);
}

export default ProfileAside;