import styled from "styled-components";
import Button from "../../ui/button/button";

const StyledButton = styled(Button)`
  display: inline-block;
  min-width: auto;
  min-height: auto;
  color: ${(props) => props.theme.colors.primary};
  background-color: transparent;
  border-radius: 0;

  &:hover,
  &:active {
    text-decoration: underline;
    background-color: transparent;
  }

  &:hover {
    box-shadow: none;
  }
`;

export { StyledButton };
