import React from "react";
import Board from "../../objects/Board";
import Marcacao from "../../objects/Marcacao";

const Hashtag = () => {
    return (
        <Board>
            <Marcacao player="o" />
            <Marcacao player="x" />
            <Marcacao player="o" />

            <Marcacao player="x" />
            <Marcacao player="o" />
            <Marcacao player="x" />

            <Marcacao player="o" />
            <Marcacao player="o" />
            <Marcacao player="x" />
        </Board>
    );
};

export default Hashtag;
