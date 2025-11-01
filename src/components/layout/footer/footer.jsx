import React from "react";
import Logo from "../../ui/logo/logo";
import { StyledFooter, Copyright } from "./styles";

function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <Copyright>
        Создано <span>2025</span>
      </Copyright>
    </StyledFooter>
  );
}

export default Footer;
