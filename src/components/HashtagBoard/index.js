import React from "react";
import "./styles.css";
import BoardGame from "../../objects/BoardGame";
import PlayerGame from "../../objects/PlayerGame";

const HashtagBoard = () => {
    return (
        <BoardGame>
            <ul className="hashtag-board">
                <li className="item">
                    <PlayerGame />
                </li>
                <li className="item">
                    <PlayerGame />
                </li>
                <li className="item">
                    <PlayerGame />
                </li>

                <li className="item">
                    <PlayerGame />
                </li>
                <li className="item">
                    <PlayerGame />
                </li>
                <li className="item">
                    <PlayerGame />
                </li>

                <li className="item">
                    <PlayerGame />
                </li>
                <li className="item">
                    <PlayerGame />
                </li>
                <li className="item">
                    <PlayerGame />
                </li>
            </ul>
        </BoardGame>
    );
};

export default HashtagBoard;
