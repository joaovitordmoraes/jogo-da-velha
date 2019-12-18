import React from "react";
import Input from "../Input";
import Label from "../Label";

const Checkbox = ({id = "", value = "", content = ""}) => {

    return (
        <>
            <Input id={id} type="checkbox" value={value} content={content} />
            <Label htmlFor={id} content={content} />
        </>
    );
};

export default Checkbox;