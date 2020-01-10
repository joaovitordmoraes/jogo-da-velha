import React from "react";
import "./styles.css";
import BoardGame from "../../objects/BoardGame";
import Player from "../../objects/Player";

const HashtagBoard = () => {
    return (
        <BoardGame>
            <ul className="hashtag-board">
                <li className="item">
                    <Player player="o" />
                </li>
                <li className="item">
                    <Player player="x" />
                </li>
                <li className="item">
                    <Player player="o" />
                </li>

                <li className="item">
                    <Player player="x" />
                </li>
                <li className="item">
                    <Player player="o" />
                </li>
                <li className="item">
                    <Player player="x" />
                </li>

                <li className="item">
                    <Player player="o" />
                </li>
                <li className="item">
                    <Player player="o" />
                </li>
                <li className="item">
                    <Player player="x" />
                </li>
            </ul>
        </BoardGame>
    );
};

export default HashtagBoard;
