import styled from "styled-components";

const VisuallyHiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);

  &:focus-visible ~ * {
    outline: 1px solid ${(props) => props.theme.colors.black};
  }
`;

export default VisuallyHiddenInput;
