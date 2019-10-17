import React from "react";
import LogoCollab from "../../objects/LogoCollab";
import Sobre from "../../objects/Sobre";
import BurgerMenu from "../../objects/BurgerMenu";
import "./styles.css";

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
