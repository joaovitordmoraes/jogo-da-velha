import React from "react";
import "./styles.css";
import InputField from "../InputField";
import LabelField from "../LabelField";

const CheckboxEvents = ({id = "", value = "", content = "", onClick}) => {

    return (
        <div className="checkbox-events">
            <InputField id={id} type="checkbox" value={value} content={content} />
            <LabelField onClick={onClick} htmlFor={id} content={content} />
        </div>
    );
};

export default CheckboxEvents;