import React, {useState} from "react";
import "./App.css";

import CheckboxEvents from "./objects/CheckboxEvents";
import AboutMenu from "./objects/AboutMenu";
import HeaderGame from "./components/HeaderGame";
import HashtagBoard from "./components/HashtagBoard";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";
import PlayerEvents from "./components/PlayerEvents";


const App = () => {

    const [activeAbout, setActiveAbout] = useState("");
    const [activePlayerEvents, setActivePlayerEvents] = useState("");

    const handleClickAdd = () => {
        setActiveAbout("-active");
    }

    const handleClickRemove = () => {
        setActiveAbout("");
    }

    const handleClick = () => {
        setActivePlayerEvents(old => old === "-active" ? "" : "-active");
    }

    return (
        <main id="main" className="app">
            <HeaderGame onClick={handleClickAdd} />
            <HashtagBoard />
            <CheckboxEvents onClick={handleClick} id="show" value="show" content="Mostrar eventos" type="checkbox"  />
            
            <PlayerEvents className={activePlayerEvents} />

            <AboutMenu className={activeAbout}>
                <HeaderInternal onClick={handleClickRemove} />
                <ProfileUser />
            </AboutMenu>
        </main>
    );
}

export default App;
