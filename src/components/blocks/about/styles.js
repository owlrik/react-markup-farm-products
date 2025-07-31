import styled from "styled-components";
import { Section } from "../../styled";
import aboutImage from "../../../assets/about.svg";

const Paragraph = styled.p`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const StyledSection = styled(Section)`
  background-color: #d8ecfe;
`;

const ContentWrapper = styled.div`
  position: relative;
  padding: 182px 552px 182px ${(props) => props.theme.page.padding};

  &::before {
    content: "";
    position: absolute;
    right: ${(props) => props.theme.page.padding};
    bottom: 0;
    display: block;
    width: 446px;
    height: 563px;
    background-image: url(${aboutImage});
  }
`;

const TextWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 636px;
`;

const Text = styled(Paragraph)`
  max-width: 538px;
  margin-top: 27px;
`;

export { StyledSection, ContentWrapper, TextWrapper, Text };
