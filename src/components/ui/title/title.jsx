import React from "react";

function Title({children, level}) {
    const TitleTag = `h${level}`;

    return (
        <TitleTag>{children}</TitleTag>
    );
}

export default Title;
