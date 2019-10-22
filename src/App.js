import React from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import Marcacao from "./objects/Marcacao";

function App() {
    return (
        <>
            <Header />
            <Game />
            <Marcacao player="o" />
        </>
    );
}

export default App;
