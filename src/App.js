import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import Input from "./objects/Input";

const App = () => {
    return (
        <main className="app">
            <Header />
            <Hashtag />
            <Input id="show" value="show" content="Mostrar eventos" />
        </main>
    );
}

export default App;
