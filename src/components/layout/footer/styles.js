import styled from "styled-components";

const StyledFooter = styled.footer`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.theme.page.width};
  min-height: ${(props) => props.theme.footerHeight};
  margin: 0 auto;
  padding: 10px ${(props) => props.theme.page.padding};
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
`;

const Copyright = styled.p`
  margin: 0;
`;

export { StyledFooter, Copyright };
