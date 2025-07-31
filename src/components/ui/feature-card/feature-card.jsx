import React from "react";
import Title, { TitleSize } from "../title/title";
import {
  StyledFeatureCard,
  Header,
  HeaderTextWrapper,
  Icon,
  Label,
  TextWrapper,
  Text,
} from "./styles";

function FeatureCard({ type, level, title, description, image }) {
  return (
    <StyledFeatureCard type={type}>
      <Header>
        <Icon src={image} width={56} height={56} aria-hidden="true" />
        <HeaderTextWrapper>
          <Label type={type}>
            {`${
              type === "farm" ? "Фермерские продукты" : "Магазинные продукты"
            }`}
          </Label>
          <Title as={"h3"} size={TitleSize.EXTRA_SMALL}>
            {title}
          </Title>
        </HeaderTextWrapper>
      </Header>
      <TextWrapper>
        <Text dangerouslySetInnerHTML={{ __html: description }} />
      </TextWrapper>
    </StyledFeatureCard>
  );
}

export default FeatureCard;
