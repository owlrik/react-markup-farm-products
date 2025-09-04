import React from "react";
import { StyledPrice, Text, Value } from "./styles";

const formatPrice = (value) => {
  const roundedPrice = Math.round(value);
  return roundedPrice.toString().replace(/(\d)(?=(\d\d\d)+$)/, "$1 ");
};

function Price({ value, classname }) {
  return (
    <StyledPrice classname={classname}>
      <Text>Цена</Text>
      <Value>
        <span>{formatPrice(value)}</span> руб.
      </Value>
    </StyledPrice>
  );
}

export default Price;
