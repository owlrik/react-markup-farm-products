import styled from "styled-components";
import { Img } from "../../styled";
import Title from "../title/title";
import Label from "../label/label";

const StyledProductCard = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: ${(props) => props.theme.spacing.medium};
  padding: ${(props) => props.theme.spacing.medium};
  background-color: ${(props) => props.theme.colors.white};
`;

const ImageWrap = styled.div`
  flex: 0 0 248px;
`;

const Image = styled(Img)`
  display: block;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`;

const Info = styled.div`
  flex: 1 1 auto;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 16px;
`;

const LabelWrap = styled.div`
  margin-top: 14px;
`;

const StyledLabel = styled(Label)`
  padding: 4px 8px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text.primary};
  background-color: ${(props) => props.theme.colors.accentBlue};
`;

const SpecList = styled.dl`
  display: flex;
  flex-direction: column;
  gap 8px;
`;

const SpecTitle = styled.dt`
  display: inline;
  font-weight: 700;
`;

const SpecValue = styled.dd`
  display: inline;
  margin: 0;
`;

export {
  StyledProductCard,
  ImageWrap,
  Image,
  Info,
  StyledTitle,
  LabelWrap,
  StyledLabel,
  SpecList,
  SpecTitle,
  SpecValue,
};
