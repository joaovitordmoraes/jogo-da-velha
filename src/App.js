import React from "react";
import "./App.css";
import Profile from "./images/profile.jpg";

import Checkbox from "./objects/Checkbox";
import About from "./objects/About";
import AvatarProfile from "./objects/AvatarProfile";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import HeaderInternal from "./components/HeaderInternal";

const App = () => {
    return (
        <main className="app">
            <Header />
            <Hashtag />
            <Checkbox id="show" value="show" content="Mostrar eventos" type="checkbox" />

            <About>
                <HeaderInternal />
                <AvatarProfile src={Profile} alt="Avatar do Profile" />
            </About>
        </main>
    );
}

export default App;
