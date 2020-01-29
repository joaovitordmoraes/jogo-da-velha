import React from "react";
import "./styles.css";

import PlayerClick from "../../objects/PlayerClick";

const PlayerEvents = () => {

    return (
        <ol className="player-events">
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