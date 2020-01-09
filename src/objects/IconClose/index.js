import React from "react";
import "./styles.css";

const IconClose = ({ onClick }) => {

    return (
        <a href="#close-menu" className="icon-close" onClick={onClick}>
            <span className="content">Fechar</span>
        </a>
    );
}

export default IconClose;