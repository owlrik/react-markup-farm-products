import React, { forwardRef } from "react";
import { StyledButton } from "./styles";

const Button = forwardRef(
  ({ children, minWidth, link, className, onClick, ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        $minWidth={minWidth}
        {...(link ? { href: link } : { as: "button", type: "button", onClick })}
        className={className}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
