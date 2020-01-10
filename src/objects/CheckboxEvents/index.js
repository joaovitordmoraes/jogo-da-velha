import React from "react";
import "./styles.css";
import Input from "../Input";
import Label from "../Label";

const Checkbox = ({id = "", value = "", content = ""}) => {

    return (
        <div className="checkbox-events">
            <Input id={id} type="checkbox" value={value} content={content} />
            <Label htmlFor={id} content={content} />
        </div>
    );
};

export default Checkbox;