import React from "react";
import { StyledLabel } from "./styles";

function Label({ className = "", $bgColor, children }) {
  return <StyledLabel className={className}>{children}</StyledLabel>;
}

export default Label;
