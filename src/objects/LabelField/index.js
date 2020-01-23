import React from "react";
import "./styles.css";

const LabelField = ({htmlFor, content}) => {

    return (
        <label className="label-field" htmlFor={htmlFor}>{content}</label>
    );
};

export default LabelField;