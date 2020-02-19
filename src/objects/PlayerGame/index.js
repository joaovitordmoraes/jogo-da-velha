import React from "react";
import "./styles.css";
import playerO from "../../images/Circle.png";
import playerX from "../../images/X.png";


const PlayerGame = ({ content = '' }) => {

    const players = [];
    players[''] = '';
    players["x"] = playerX;
    players["o"] = playerO;

    return (
        <>
            <button className="player-game">
                {players[content] && <img src={players[content]} alt={`Jogador ${content}`} />}
            </button>
        </>
    );
};

export default PlayerGame;
