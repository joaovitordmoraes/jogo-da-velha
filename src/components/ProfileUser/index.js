import React from "react";
import "./styles.css";
import Profile from "../../images/profile.jpg";

import AvatarProfile from "../../objects/AvatarProfile";


const ProfileUser = () => {
    return (
        <dl className="profile-user">
            <dd className="avatar">
                <AvatarProfile src={Profile} alt="Avatar do Profile" />
            </dd>
            <dt className="title">João Moraes</dt>
            <dd className="description">Dev Front-End, de Piracicaba para São Paulo. Nos momentos livres gamer dedicado.</dd>
        </dl>
    );
}

export default ProfileUser;