import styled from "styled-components";

const StyledLabel = styled.span`
  padding: 2px 10px;
  font-size: 14px;
  line-height: 1.5;
  color: #fff;
  background-color: ${(props) => props.$bgColor};
`;

export { StyledLabel };
