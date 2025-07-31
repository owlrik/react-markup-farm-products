import styled from "styled-components";

const StyledHeader = styled.header`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.theme.page.width};
  min-height: ${(props) => props.theme.headerHeight};
  margin: 0 auto;
  padding: 10px ${(props) => props.theme.page.padding};
  background-color: #fff;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.04), 0 2px 6px 0 rgba(0, 0, 0, 0.04),
    0 0 1px 0 rgba(0, 0, 0, 0.04);
`;

export { StyledHeader };
