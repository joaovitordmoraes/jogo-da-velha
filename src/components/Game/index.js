import React from "react";
import "./styles.css";
import Board from "../../objects/Board";

const Game = () => {
    return (
        <>
            <article className="game">
                <Board />
            </article>
        </>
    );
};

export default Game;
