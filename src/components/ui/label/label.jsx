import React from "react";
import { StyledLabel } from "./styles";

function Label({ className = "", $bgColor, children }) {
  return <StyledLabel>{children}</StyledLabel>;
}

export default Label;
