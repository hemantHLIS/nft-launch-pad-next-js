const ProfileAside = () => {
    return (<>
        <div className="col-xl-3 col-lg-4 col-md-6 ">
            <aside className="author-profile-wrap">
                <div className="author-profile-thumb">
                    <picture>
                        <img src="assets/img/others/author_profile.png" alt="" />
                    </picture>
                </div>
                <div className="author-info">
                    <h5 className="title">Olivia Jenar <picture><img src="assets/img/icons/star.svg" alt=""/></picture></h5>
                    <span>Female</span>
                    <p>Myself Olivia_ ipsum dolor amet this consectetur adipisicing elit. Quis non fugit totam laborio.</p>
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