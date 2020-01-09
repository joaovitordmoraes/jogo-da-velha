import React from "react";
import "./styles.css";

const BurgerMenu = ({ onClick }) => {
    return (
        <a href="#menu" className="burger-menu" onClick={onClick}>
            <span className="center">Menu</span>
        </a>
    );
};

export default BurgerMenu;
