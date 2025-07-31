import styled from "styled-components";
import { Img, P } from "../../styled";

const StyledFeatureCard = styled.div`
  box-sizing: border-box;
  min-height: 197px;
  padding: ${(props) => props.theme.spacing.medium};
  background-color: ${(props) =>
    props.type === "farm"
      ? props.theme.colors.accentGreenLight
      : props.theme.colors.accentRedLight};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.medium};
`;

const Icon = styled(Img)`
  width: 56px;
  height: 56px;
  object-fit: contain;
`;

const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const Label = styled.span`
  padding: 2px 10px;
  font-size: 14px;
  line-height: 1.5;
  color: #fff;
  background-color: ${(props) =>
    props.type === "farm"
      ? props.theme.colors.accentGreen
      : props.theme.colors.accentRed};
`;

const TextWrapper = styled.div`
  margin-top: ${(props) => props.theme.spacing.medium};
`;

const Text = styled(P)`
  margin: 0;
`;

export {
  StyledFeatureCard,
  Header,
  Icon,
  HeaderTextWrapper,
  Label,
  TextWrapper,
  Text,
};
