import React from "react";
import "./styles.css";
import Profile from "../../images/profile.jpg";
import Github from "../../images/github.png";
import Linkedin from "../../images/linkedin.png";
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
                <IconSocial action="https://github.com/joaovitordmoraes" src={Github} alt="Logo do Github" />
                <IconSocial action="https://br.linkedin.com/in/joao-vitor-moraes" src={Linkedin} alt="Logo do Linkedin" />
                <IconSocial action="https://twitter.com/joaovdmoraes" src={Twitter} alt="Logo do Twitter" />
                <IconSocial action="https://www.instagram.com/joaovitordmoraes/" src={Instagram} alt="Logo do Instagram" />
            </dd>
        </dl>
    );
}

export default ProfileUser;