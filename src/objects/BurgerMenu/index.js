import React from "react";
import "./styles.css";

const handleClick = () => {
    console.log("clicou!!!")
}

const BurgerMenu = () => {
    return (
        <a href="#menu" className="burger-menu" onClick={handleClick}>
            <span className="center">Menu</span>
        </a>
    );
};

export default BurgerMenu;
