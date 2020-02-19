import React, { useState } from "react";
import "./styles.css";
import BoardGame from "../../objects/BoardGame";
import PlayerGame from "../../objects/PlayerGame";

const HashtagBoard = () => {

    const [nextPlayer, setNextPlayer] = useState("x");

    const handleClick = () => {
        console.log("Próximo jogador ", nextPlayer);

        setNextPlayer(old => old === "x" ? "o" : "x" );
    };

    return (
        <BoardGame>
            <ul className="hashtag-board" onClick={handleClick}>
                <li className="item">
                    <PlayerGame player={nextPlayer} />
                </li>
                <li className="item">
                    <PlayerGame player={nextPlayer} />
                </li>
                <li className="item">
                    <PlayerGame player={nextPlayer} />
                </li>

                <li className="item">
                    <PlayerGame player={nextPlayer} />
                </li>
                <li className="item">
                    <PlayerGame player={nextPlayer} />
                </li>
                <li className="item">
                    <PlayerGame player={nextPlayer} />
                </li>

                <li className="item">
                    <PlayerGame player={nextPlayer} />
                </li>
                <li className="item">
                    <PlayerGame player={nextPlayer} />
                </li>
                <li className="item">
                    <PlayerGame player={nextPlayer} />
                </li>
            </ul>
        </BoardGame>
    );
};

export default HashtagBoard;
