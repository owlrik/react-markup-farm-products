import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const logoStyle = css`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 44px;
  color: ${(props) => props.theme.colors.primary};
`;

const StyledLogo = styled(Link)`
  ${logoStyle}
  text-decoration: none;
`;

const StyledLogoMainPage = styled.span`
  ${logoStyle}
  cursor: default;
`;

const Text = styled.span`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.15;
`;

export { StyledLogo, StyledLogoMainPage, Text };
