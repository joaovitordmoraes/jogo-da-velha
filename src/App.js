import React, {useState} from "react";
import "./App.css";

import Checkbox from "./objects/Checkbox";
import About from "./objects/About";
import HeaderGame from "./components/HeaderGame";
import HashtagBoard from "./components/HashtagBoard";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";

const App = () => {

    const [activeAbout, setActiveAbout] = useState("");

    const handleClickAdd = () => {
        setActiveAbout("-active");
    }

    const handleClickRemove = () => {
        setActiveAbout("");
    }

    return (
        <main className="app">
            <HeaderGame onClick={handleClickAdd} />
            <HashtagBoard />
            <Checkbox id="show" value="show" content="Mostrar eventos" type="checkbox" />

            <About className={activeAbout}>
                <HeaderInternal onClick={handleClickRemove} />
                <ProfileUser />
            </About>
        </main>
    );
}

export default App;
