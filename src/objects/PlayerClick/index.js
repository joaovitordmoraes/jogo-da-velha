import React from "react";
import "./styles.css";

const PlayerClick = ({ content, className = "" }) => {
    return (
        <>
            <output className={`player-click ${className}`}>{content}</output>
        </>
    );
}

export default PlayerClick;