import React from "react";
import { TitleSize } from "../title/title";
import SafeHtml from "../../utils/safe-html/safe-html";
import Tabs from "../tabs/tabs";
import {
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
} from "./styles";

function ProductCard({ id, name, image, description, specs, value }) {
  const tabs = [
    {
      title: "Описание",
      content: (
        <>
          <SafeHtml html={description.text} />
          <LabelWrap>
            <StyledLabel>{description.price}</StyledLabel>
          </LabelWrap>
        </>
      ),
    },
    {
      title: "Характеристики",
      content: (
        <SpecList>
          <div>
            <SpecTitle>Масса:</SpecTitle> <SpecValue>{specs.weight}</SpecValue>
          </div>
          <div>
            <SpecTitle>Срок годности:</SpecTitle>{" "}
            <SpecValue>{specs.expiration}</SpecValue>
          </div>
          {specs.code && (
            <div>
              <SpecTitle>Порода:</SpecTitle>{" "}
              <SafeHtml html={specs.code} tag={SpecValue} />
            </div>
          )}
          <div>
            <SpecTitle>Место происхождения:</SpecTitle>{" "}
            <SpecValue>{specs.origin}</SpecValue>
          </div>
        </SpecList>
      ),
    },
    {
      title: "Свойства",
      content: (
        <SpecList>
          <div>
            <SpecTitle>Энергетическая ценность:</SpecTitle>{" "}
            <SpecValue>
              <SafeHtml html={value.energy} />
            </SpecValue>
          </div>
          <div>
            <SpecTitle>Пищевая ценность:</SpecTitle>{" "}
            <SpecValue>
              <SafeHtml html={value.nutritional} />
            </SpecValue>
          </div>
        </SpecList>
      ),
    },
  ];

  return (
    <StyledProductCard>
      <ImageWrap>
        <Image src={image} alt={name} />
      </ImageWrap>

      <Info>
        <StyledTitle as="h2" size={TitleSize.SMALL}>
          {name}
        </StyledTitle>

        <Tabs tabs={tabs} />
      </Info>
    </StyledProductCard>
  );
}

export default ProductCard;
