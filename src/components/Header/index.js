import React from "react";
import "./styles.css";
import LogoCollab from "../../objects/LogoCollab";
import AboutLink from "../../objects/AboutLink";
import BurgerMenu from "../../objects/BurgerMenu";

const Header = () => {
    return (
        <header className="header">
            <LogoCollab />
            <AboutLink />
            <BurgerMenu />
        </header>
    );
};

export default Header;
