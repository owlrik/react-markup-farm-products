import React from "react";

function Button({children, link, ...props}) {
    return link
        ? (<a href={link} {...props}>{children}</a>)
        : (<button {...props}>{children}</button>);
}

export default Button;
