import styled from "styled-components";
import { Section } from "../../styled";

const StyledSection = styled(Section)`
  background-color: ${(props) => props.theme.colors.gray};
`;

const ContentInner = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 353px 1fr;
  gap: ${(props) => props.theme.spacing.medium};
  width: ${(props) => props.theme.page.width};
  padding: 40px ${(props) => props.theme.page.padding};
`;

export { StyledSection, ContentInner };
