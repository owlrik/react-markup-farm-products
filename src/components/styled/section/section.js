import styled from "styled-components";

const Section = styled.section`
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: ${(props) => props.theme.page.padding};
  padding-right: ${(props) => props.theme.page.padding};
  position: relative;
  box-sizing: border-box;
`;

export default Section;
