import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  html,
  body {
    margin: 0;
  }

  body {
    position: relative;
    min-height: 100%;
    font-weight: 400;
    font-family: ${props => props.theme.fonts.family};
    font-size: ${props => props.theme.fontSizes.base};
    line-height: 1.5;
    color: ${props => props.theme.colors.text.primary};
  }
`;

export default GlobalStyle;
