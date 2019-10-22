import React from "react";
import Header from "./components/Header";
import Marcacao from "./objects/Marcacao";
import Board from "./objects/Board";

function App() {
    return (
        <>
            <Header />
            <Board>
                <Marcacao player="o" />
            </Board>
        </>
    );
}

export default App;
