import React from "react";

const InputField = ({id = "", value = "", type = "text"}) => {

    return (
        <>
            <input className="input-field" id={id} type={type} value={value} />
        </>
    );
};

export default InputField;