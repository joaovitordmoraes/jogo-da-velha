import React from "react";
import "./styles.css";

const AboutMenu = ({children, className = ""}) => {
    return (
        <article className={`about-menu ${className}`}>
            {children}
        </article>
    );
}

export default AboutMenu;