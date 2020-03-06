import React, { useState } from "react";
import PlayerEvents from "../../components/PlayerEvents";
import HashtagBoard from "../../components/HashtagBoard";
import CheckboxEvents from "../CheckboxEvents";

const HashtagBoardWrapper = () => {
    const [history, setHistory] = useState(["Start"]);
    const [active, setActive] = useState(false);
    const [nextPlayer, setNextPlayer] = useState("x");
    const [lastRound, setLastRound] = useState(0);

    const addEvents = (player) => {
        setHistory(old => [...old, `Adicionou ${player.toUpperCase()}`]);
    }

    const changeHistory = key => {
        setHistory(old => old.slice(0, key + 1));
        setLastRound(key);
        setBoardHistory(old => old.slice(0, key + 1));
    }

    const [boardHistory, setBoardHistory] = useState([
        {
            round: 0,
            state: [
                {id: 1, content: ''},
                {id: 2, content: ''},
                {id: 3, content: ''},
                {id: 4, content: ''},
                {id: 5, content: ''},
                {id: 6, content: ''},
                {id: 7, content: ''},
                {id: 8, content: ''},
                {id: 9, content: ''},
            ]
        }
    ]);

    const handleClick = (id) => {
        setNextPlayer(old => old === "x" ? "o" : "x" );
        setBoardHistory(old => [...old, {
            round: lastRound + 1,
            state: old[lastRound].state.map(player => player.id === id ? {id, content: nextPlayer} : player)
        }]);
        setLastRound(old => old + 1);
        addEvents(nextPlayer);
    };

    return (
        <div className={`hashtagboard-wrapper ${active && "-active"}`}>
            <HashtagBoard boardHistory={boardHistory} onClick={handleClick} lastRound={lastRound} />
            <CheckboxEvents id="show" value="show" content="Mostrar eventos" type="checkbox"  />
            
            <PlayerEvents history={history} onClick={changeHistory} />
        </div>
    );
}

export default HashtagBoardWrapper;