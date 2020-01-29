import React, {useState} from "react";
import "./App.css";

import CheckboxEvents from "./objects/CheckboxEvents";
import AboutMenu from "./objects/AboutMenu";
import PlayerClick from "./objects/PlayerClick";
import PlayerEvents from "./objects/PlayerEvents";
import HeaderGame from "./components/HeaderGame";
import HashtagBoard from "./components/HashtagBoard";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";


const App = () => {

    const [activeAbout, setActiveAbout] = useState("");
    const [activeCheckbox, setActiveCheckbox] = useState(false);

    const handleClickAdd = () => {
        setActiveAbout("-active");
    }

    const handleClickRemove = () => {
        setActiveAbout("");
    }

    const handleClickCheckbox = () => {
        alert();
    }

    return (
        <main id="main" className="app">
            <HeaderGame onClick={handleClickAdd} />
            <HashtagBoard />
            <CheckboxEvents id="show" value="show" content="Mostrar eventos" type="checkbox" onClick={handleClickCheckbox} />
            <PlayerEvents>
                <PlayerClick />
            </PlayerEvents>

            <AboutMenu className={activeAbout}>
                <HeaderInternal onClick={handleClickRemove} />
                <ProfileUser />
            </AboutMenu>
        </main>
    );
}

export default App;
