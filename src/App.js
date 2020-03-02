import React, {useState} from "react";
import "./App.css";

import AboutMenu from "./objects/AboutMenu";
import HeaderGame from "./components/HeaderGame";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";
import HashtagBoardWrapper from "./objects/HashtagBoardWrapper";


const App = () => {

    const [activeAbout, setActiveAbout] = useState("");

    const handleClickAdd = () => {
        setActiveAbout("-active");
    }

    const handleClickRemove = () => {
        setActiveAbout("");
    }

    return (
        <main id="main" className="app">
            <HeaderGame onClick={handleClickAdd} />

            <HashtagBoardWrapper />

            <AboutMenu className={activeAbout}>
                <HeaderInternal onClick={handleClickRemove} />
                <ProfileUser />
            </AboutMenu>
        </main>
    );
}

export default App;
