import React from "react";
import "./styles.css";
import LogoCollab from "../../objects/LogoCollab";
import Sobre from "../../objects/Sobre";
import BurgerMenu from "../../objects/BurgerMenu";

const Header = () => {
    return (
        <header className="header">
            <LogoCollab />
            <Sobre />
            <BurgerMenu />
        </header>
    );
};

export default Header;
