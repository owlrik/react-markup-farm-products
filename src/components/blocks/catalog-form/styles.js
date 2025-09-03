import styled, { css } from "styled-components";
import Title from "../../ui/title/title";
import checkImage from "../../../assets/check.svg";
import { P } from "../../styled";

const Panel = styled.div`
  padding: 24px 16px 28px 20px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 10px 20px rgba(0, 0, 0, 0.04);

  ${Title} {
    margin-bottom: 28px;
  }
`;

const BuyPanel = styled(Panel)`
  margin-top: 18px;
  padding: 24px 20px 20px;

  ${Title} {
    margin-bottom: 24px;
  }
`;

const Fieldset = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const CheckboxLabel = styled.label`
  display: block;
`;

const CheckboxInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);

  &:checked + span::before {
    background-color: ${(props) => props.theme.colors.accentMain};
  }

  &:checked + span::after {
    opacity: 1;
  }

  &:focus-visible ~ * {
    outline: 1px solid ${(props) => props.theme.colors.black};
  }
`;

const CheckboxText = styled.span`
  position: relative;
  display: block;
  padding-right: 36px;
  font-size: 18px;
  line-height: 1.5;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    display: block;
    aspect-ratio: 1;
  }

  &::before {
    top: 0;
    right: 0;
    width: 24px;
    background-color: ${(props) => props.theme.colors.gray};
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  &::after {
    top: 3px;
    right: 4px;
    width: 16px;
    background: url(${checkImage}) 0 0 / 16px auto no-repeat;
    opacity: 0;
  }
`;

const InputWrap = styled.div`
  margin-bottom: 20px;
`;

const PriceWrap = styled(P)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PriceText = styled.span`
  font-size: 14px;
`;

const PriceValue = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.3;
`;

const SubmitWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 32px;
`;

export {
  Panel,
  BuyPanel,
  Fieldset,
  CheckboxLabel,
  CheckboxInput,
  CheckboxText,
  InputWrap,
  PriceWrap,
  PriceText,
  PriceValue,
  SubmitWrap,
};
