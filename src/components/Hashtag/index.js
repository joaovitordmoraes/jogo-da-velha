import React from "react";
import "./styles.css";
import Board from "../../objects/Board";
import Marcacao from "../../objects/Marcacao";

const Hashtag = () => {
    return (
        <Board>
            <ul className="hashtag">
                <li className="item">
                    <Marcacao player="o" />
                </li>
                <li className="item">
                    <Marcacao player="x" />
                </li>
                <li className="item">
                    <Marcacao player="o" />
                </li>

                <li className="item">
                    <Marcacao player="x" />
                </li>
                <li className="item">
                    <Marcacao player="o" />
                </li>
                <li className="item">
                    <Marcacao player="x" />
                </li>

                <li className="item">
                    <Marcacao player="o" />
                </li>
                <li className="item">
                    <Marcacao player="o" />
                </li>
                <li className="item">
                    <Marcacao player="x" />
                </li>
            </ul>
        </Board>
    );
};

export default Hashtag;
