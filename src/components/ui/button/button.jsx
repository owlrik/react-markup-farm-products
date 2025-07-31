import React from "react";
import { StyledButton } from "./styles";

function Button({ children, minWidth, link, ...props }) {
  return (
    <StyledButton
      $minWidth={minWidth}
      {...(link ? { href: link } : { as: "button", type: "button" })}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
