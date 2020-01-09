import React from "react";
import "./styles.css";
import Profile from "../../images/profile.jpg";
import Github from "../../images/github.png";
import Linkedin from "../../images/linkedin.png";
import Facebook from "../../images/facebook.png";
import Twitter from "../../images/twitter.png";
import Instagram from "../../images/instagram.png";

import AvatarProfile from "../../objects/AvatarProfile";
import IconSocial from "../../objects/IconSocial";


const ProfileUser = () => {
    return (
        <dl className="profile-user">
            <dd className="avatar">
                <AvatarProfile src={Profile} alt="Avatar do Profile" />
            </dd>
            <dt className="title">João Moraes</dt>
            <dd className="description">Dev Front-End, de Piracicaba para São Paulo. Nos momentos livres gamer dedicado.</dd>
            <dd className="socials">
                <IconSocial src={Github} alt="Logo do Github" />
                <IconSocial src={Linkedin} alt="Logo do Linkedin" />
                <IconSocial src={Facebook} alt="Logo do Facebook" />
                <IconSocial src={Twitter} alt="Logo do Twitter" />
                <IconSocial src={Instagram} alt="Logo do Instagram" />
            </dd>
        </dl>
    );
}

export default ProfileUser;