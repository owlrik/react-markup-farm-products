import styled from "styled-components";

const StyledButton = styled.a`
  display: block;
  min-height: 60px;
  font-size: ${(props) => props.theme.fontSizes.base};
  min-width: ${(props) => `${props.$minWidth}px` || "100%"};
  max-width: 700px;
  font-weight: 700;
  line-height: 58px;
  color: ${(props) => props.theme.colors.text.inverted};
  background-color: ${(props) => props.theme.colors.button.primary};
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colors.button.primaryHover};
  }

  &:hover {
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }
`;

export { StyledButton };
