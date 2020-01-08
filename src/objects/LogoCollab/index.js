import React from "react";
import "./styles.css";
import Logo from "../../images/logo.png";
import LogoLight from "../../images/logo-light.png";

const LogoCollab = ({ light }) => {
    return (
        <img className="logo-collab" src={light ? LogoLight : Logo} alt="Logo da CollabCode" />
    );
};

export default LogoCollab;
