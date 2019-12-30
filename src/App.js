import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import Checkbox from "./objects/Checkbox";
import About from "./objects/About";

const App = () => {
    return (
        <main className="app">
            <Header />
            <About />
            <Hashtag />
            <Checkbox id="show" value="show" content="Mostrar eventos" type="checkbox" />
        </main>
    );
}

export default App;
