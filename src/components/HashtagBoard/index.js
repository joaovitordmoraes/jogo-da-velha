import React, { useState } from "react";
import "./styles.css";
import BoardGame from "../../objects/BoardGame";
import PlayerGame from "../../objects/PlayerGame";

const HashtagBoard = () => {

    const [nextPlayer, setNextPlayer] = useState("x");
    const [players, setPlayers] = useState([
        {id: 1, content: ''},
        {id: 2, content: ''},
        {id: 3, content: ''},
        {id: 4, content: ''},
        {id: 5, content: ''},
        {id: 6, content: ''},
        {id: 7, content: ''},
        {id: 8, content: ''},
        {id: 9, content: ''},
    ]);

    const handleClick = (id) => {
        setNextPlayer(old => old === "x" ? "o" : "x" );

        setPlayers(old => old.map(player => player.id === id ? {id, content: nextPlayer} : player));
    };

    return (
        <BoardGame>
            <ul className="hashtag-board">
                {players.map(player => (
                    <li key={player.id} className="item" onClick={() => player.content === '' && handleClick(player.id)}>
                        <PlayerGame id={player.id} content={player.content} />
                    </li>
                ))}
            </ul>
        </BoardGame>
    );
};

export default HashtagBoard;
