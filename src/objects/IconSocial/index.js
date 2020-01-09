import React from "react";

const IconSocial = ({ action, src, alt }) => {
    return (
        <a href={action} target="_blank">
            <img className="icon-social" src={src} alt={alt} />
        </a>
    );
}

export default IconSocial;