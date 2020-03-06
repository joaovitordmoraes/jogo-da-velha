import React from "react";
import "./styles.css";
import BoardGame from "../../objects/BoardGame";
import PlayerGame from "../../objects/PlayerGame";


const HashtagBoard = ({ boardHistory, onClick, lastRound }) => {

    return (
        <BoardGame>
            <ul className="hashtag-board">
                {boardHistory[lastRound].state.map(player => (
                    <li key={player.id} className="item" onClick={() => player.content === '' && onClick(player.id)}>
                        <PlayerGame id={player.id} content={player.content} />
                    </li>
                ))}
            </ul>
        </BoardGame>
    );
};

export default HashtagBoard;
