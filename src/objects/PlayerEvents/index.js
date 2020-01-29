import React from "react";
import "./styles.css";

const PlayerEvents = ({children}) => {
    return (
        <div className="player-events">{children}</div>
    );
}

export default PlayerEvents;