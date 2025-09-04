import React from "react";
import { TitleSize } from "../title/title";
import SafeHtml from "../../utils/safe-html/safe-html";
import Tabs from "../tabs/tabs";
import OptionList from "../option-list/option-list";
import {
  StyledProductCard,
  ImageWrap,
  Image,
  Info,
  StyledTitle,
  PriceWrap,
  StyledPrice,
} from "./styles";

function ProductCard({
  name,
  price,
  weight,
  image,
  description,
  specifications,
  structure,
}) {
  const tabs = [
    {
      title: "Описание",
      content: <SafeHtml html={description} />,
    },
    {
      title: "Характеристики",
      content: <OptionList list={specifications} />,
    },
    {
      title: "Свойства",
      content: <OptionList list={structure} />,
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

        <Tabs tabs={tabs} maxContentHeight="105px" />

        <PriceWrap>
          <StyledPrice>
            {price} руб. / {weight} гр.
          </StyledPrice>
        </PriceWrap>
      </Info>
    </StyledProductCard>
  );
}

export default ProductCard;
