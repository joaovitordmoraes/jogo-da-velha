import React from "react";
import "./styles.css";

import PlayerClick from "../../objects/PlayerClick";

const PlayerEvents = ({ className = "" }) => {

    return (
        <ol className={`player-events ${className}`}>
            <li className="action">
                <PlayerClick content="Adicionou O" />
            </li>
            <li className="action">
                <PlayerClick content="Adicionou X" />
            </li>
            <li className="action">
                <PlayerClick content="Adicionou O" />
            </li>
            <li className="action">
                <PlayerClick content="Adicionou X" />
            </li>
            <li className="action">
                <PlayerClick content="Adicionou O" />
            </li>
            <li className="action">
                <PlayerClick content="Adicionou X" />
            </li>
            <li className="action">
                <PlayerClick content="Adicionou O" />
            </li>
            <li className="action">
                <PlayerClick content="Adicionou X" />
            </li>
            <li className="action">
                <PlayerClick content="Empate!" className="-end" />
            </li>
        </ol>
    );
}

export default PlayerEvents;