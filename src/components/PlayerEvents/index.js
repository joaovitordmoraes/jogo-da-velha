import React from "react";
import "./styles.css";

import PlayerClick from "../../objects/PlayerClick";

const PlayerEvents = ({ className = "", history, onClick }) => {

    return (
        <ol className={`player-events ${className}`}>
            {history.map((content, key) => <li key={key} className="action" onClick={() => onClick(key)}><PlayerClick content={content} /></li>)}
        </ol>
    );
}

export default PlayerEvents;