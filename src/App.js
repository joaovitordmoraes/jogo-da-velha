import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import Checkbox from "./objects/Checkbox";

const App = () => {
    return (
        <main className="app">
            <Header />
            <Hashtag />
            <Checkbox id="show" value="show" content="Mostrar eventos" type="checkbox" />
        </main>
    );
}

export default App;
