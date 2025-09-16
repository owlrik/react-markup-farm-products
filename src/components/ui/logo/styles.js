import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 44px;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
`;

const Text = styled.span`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.15;
`;

export { StyledLogo, Text };
