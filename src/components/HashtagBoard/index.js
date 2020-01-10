import React from "react";
import "./styles.css";
import Board from "../../objects/Board";
import Player from "../../objects/Player";

const HashtagBoard = () => {
    return (
        <Board>
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
        </Board>
    );
};

export default HashtagBoard;
