import React from "react";
import "./styles.css";

const Board = ({ children }) => {
    return (
        <>
            <section className="board">{children}</section>
        </>
    );
};

export default Board;
