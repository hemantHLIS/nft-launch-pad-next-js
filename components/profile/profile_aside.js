import { Moralis } from "moralis";
import { useState } from "react";

const ProfileAside = () => {

    const [name, setName] = useState("");
    const [gender, SetGender] = useState("");
    const callMyProfile= async()=>{

        const LaunchpadUser1 = Moralis.Object.extend("LaunchpadUser1");
        const launchpaduser = new LaunchpadUser1();   

        const query = new Moralis.Query(launchpaduser);
        const users = await query.find();  
        setName(users[0].get("name"));    
        SetGender(users[0].get("gender"));
    }
    return (<>
        <div className="col-xl-3 col-lg-4 col-md-6 ">
            <aside className="author-profile-wrap">
                <div className="author-profile-thumb">
                    <picture>
                        <img src="assets/img/others/author_profile.png" alt="" />
                    </picture>
                </div>
                <div className="author-info" onLoad={callMyProfile}>
                    <h5 className="title">{name} <picture><img src="assets/img/icons/star.svg" alt=""/></picture></h5>
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
                        <span>235</span>
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