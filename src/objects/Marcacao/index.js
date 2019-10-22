import React from "react";
import "./styles.css";
import playerCircle from "../../images/Circle.png";

const Marcacao = () => {
    return (
        <>
            <button className="marcacao">
                <img src={playerCircle} alt="Circulo" />
            </button>
        </>
    );
};

export default Marcacao;
