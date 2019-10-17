import React from "react";
import "./styles.css";
import Square from "../../objects/Square";

const Board = () => {
    return (
        <>
            <section className="board">
                <Square />
            </section>
        </>
    );
};

export default Board;
