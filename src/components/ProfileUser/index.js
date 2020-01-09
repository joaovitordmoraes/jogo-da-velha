import React from "react";
import Profile from "../../images/profile.jpg";

import AvatarProfile from "../../objects/AvatarProfile";


const ProfileUser = () => {
    return (
        <dl>
            <dd><AvatarProfile src={Profile} alt="Avatar do Profile" /></dd>
            <dt>João Moraes</dt>
            <dd>Dev Front-End, de Piracicaba para São Paulo. Nos momentos livres gamer dedicado.</dd>
        </dl>
    );
}

export default ProfileUser;