import React from "react";
import "./styles.css";
import LogoCollab from "../../objects/LogoCollab";
import AboutLink from "../../objects/AboutLink";
import BurgerMenu from "../../objects/BurgerMenu";

const Header = ({ onClick }) => {
    return (
        <header className="header-game">
            <LogoCollab />
            <AboutLink onClick={onClick} />
            <BurgerMenu onClick={onClick} />
        </header>
    );
};

export default Header;
