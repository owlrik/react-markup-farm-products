import React from "react";
import { ReactComponent as LogoImage } from "../../../assets/logo.svg";
import { StyledLogo, StyledLogoMainPage, Text } from "./styles";
import { useLocation } from "react-router-dom";
import { AppRoute } from "../../utils/const";

function Logo() {
  const { pathname } = useLocation();

  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <LogoImage />
      <Text>Фермерские продукты</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to="/">
      <LogoImage />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
