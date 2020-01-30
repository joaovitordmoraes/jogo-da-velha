import React from "react";
import "./styles.css";
import InputField from "../InputField";
import LabelField from "../LabelField";

const CheckboxEvents = ({id = "", value = "", content = ""}) => {

    return (
        <>
            <InputField id={id} type="checkbox" value={value} content={content} />
            <LabelField htmlFor={id} content={content} />
        </>
    );
};

export default CheckboxEvents;