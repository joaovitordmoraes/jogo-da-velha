import React, { useState } from "react";
import "./styles.css";
import playerO from "../../images/Circle.png";
import playerX from "../../images/X.png";


let firstPlayer = "x";

const PlayerGame = ({ player = false }) => {

    const [statePlayer, setStatePlayer] = useState(player);

    const players = [];
    players["x"] = playerX;
    players["o"] = playerO;

    const handleClick = () => setStatePlayer(player);

    return (
        <>
            <button className="player-game" onClick={handleClick}>
                {statePlayer && <img src={players[statePlayer]} alt={`Jogador ${statePlayer.toUpperCase()}`} />}
            </button>
        </>
    );
};

export default PlayerGame;
