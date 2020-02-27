import React from "react";
import "./styles.css";

import PlayerClick from "../../objects/PlayerClick";

const changeHistory = () => {
    console.log("Clicou!!")
}

const PlayerEvents = ({ className = "", history }) => {

    return (
        <ol className={`player-events ${className}`}>
            {history.map((content, key) => <li key={key} className="action" onClick={changeHistory}><PlayerClick content={content} /></li>)}
        </ol>
    );
}

export default PlayerEvents;