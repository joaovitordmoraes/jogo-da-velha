import React from "react";
import "./styles.css";

const LabelField = ({htmlFor, content, onClick}) => {

    return (
        <label className="label-field" htmlFor={htmlFor} onClick={onClick}>{content}</label>
    );
};

export default LabelField;