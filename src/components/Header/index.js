import React from "react";
import LogoCollab from "../../objects/LogoCollab";
import Sobre from "../../objects/Sobre";
import BurgerMenu from "../../objects/BurgerMenu";
import "./styles.css";

const Header = () => {
    return (
        <header className="header">
            <LogoCollab />
            <div className="menu-button">
                <Sobre />
                <BurgerMenu />
            </div>
        </header>
    );
};

export default Header;
