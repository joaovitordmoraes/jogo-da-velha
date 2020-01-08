import React from "react";
import "./styles.css";
import AboutLink from "../../objects/AboutLink";
import IconClose from "../../objects/IconClose";
import LogoCollab from "../../objects/LogoCollab";

const HeaderInternal = () => {
    return (
        <header className="header-internal">
            <LogoCollab light />
            <AboutLink className="-light" />
            <IconClose />
        </header>
    );
}

export default HeaderInternal;