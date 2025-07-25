import styled, { css } from "styled-components";

const gridList = css`
  margin-left: ${(props) =>
  props.$spacing ? `-${props.$spacing}px` : `-${props.theme.spacing.medium}`};
  margin-top: ${(props) =>
  props.$spacing ? `-${props.$spacing}px` : `-${props.theme.spacing.medium}`};
  font-size: 0;
  line-height: 0;
  text-align: ${(props) => props.$align || "center"};

  li {
    display: inline-block;
    margin-left: ${(props) =>
      props.$spacing ? `${props.$spacing}px` : props.theme.spacing.medium};
    margin-top: ${(props) =>
      props.$spacing ? `${props.$spacing}px` : props.theme.spacing.medium};
    font-size: ${(props) =>
      props.$fontSize ? `${props.$fontSize}px` : props.theme.fontSize.base};
    line-height: ${(props) =>
      props.$lineHeight ? `${props.$lineHeight}px` : "27px"};
    vertical-align: top;
  }
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  ${(props) => (props.$isGridList ? gridList : "")}
`;

export default Ul;
