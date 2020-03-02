import React, { useState } from "react";
import PlayerEvents from "../../components/PlayerEvents";
import HashtagBoard from "../../components/HashtagBoard";
import CheckboxEvents from "../CheckboxEvents";

const HashtagBoardWrapper = ({ children }) => {
    const [history, setHistory] = useState(["Start"]);

    const addEvents = (player) => {
        setHistory(old => [...old, `Adicionou ${player.toUpperCase()}`]);
    }

    const changeHistory = key => {
        setHistory(old => old.slice(0, key + 1));
    }

    return (
        <div className="hashtagboard-wrapper">
            <HashtagBoard history={addEvents} />
            <CheckboxEvents id="show" value="show" content="Mostrar eventos" type="checkbox"  />
            
            <PlayerEvents history={history} onClick={changeHistory} />
        </div>
    );
}

export default HashtagBoardWrapper;