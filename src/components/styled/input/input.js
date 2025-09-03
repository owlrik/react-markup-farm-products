import styled from "styled-components";

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 48px;
  padding: 14px 12px 13px;
  font-family: ${(props) => props.theme.fonts.family};
  font-size: 14px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.gray};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0;

  &::placeholder {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default Input;
