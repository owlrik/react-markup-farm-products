import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import { StyledSection, ContentWrapper, TextWrapper, Text } from "./styles";

function About() {
  return (
    <StyledSection>
      <ContentWrapper>
        <TextWrapper>
          <Title size={TitleSize.BIG}>
            Магазин фермерских продуктов с&nbsp;доставкой
          </Title>
          <Text>
            Все продукты изготавливаются под заказ. Фермеры начинают готовить
            продукты за день до отправки заказа клиентам. Именно поэтому мы
            принимаем заказы заранее и доставляем продукты максимально свежими.
          </Text>
        </TextWrapper>
      </ContentWrapper>
    </StyledSection>
  );
}

export default About;
