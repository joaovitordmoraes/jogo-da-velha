import React from "react";
import "./styles.css";

const BoardGame = ({ children }) => {
    return (
        <>
            <section className="board-game">{children}</section>
        </>
    );
};

export default BoardGame;
