import React, { useState } from "react";
import Title, { TitleSize } from "../../ui/title/title";
import Button from "../../ui/button/button";
// import CheckboxButton from "../../ui/checkbox-button/checkbox-button";
import { Input } from "../../styled";
import {
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
} from "./styles";

function CatalogForm({ products, selectedProducts, onClickLabel }) {
  const [inputState, setInputState] = useState("");

  const canBuy = selectedProducts && selectedProducts.length && inputState;

  const price =
    products && products.length
      ? products
          .filter((item) => selectedProducts.includes(item.id))
          .reduce((total, item) => total + parseInt(item.price, 10), 0)
      : 0;

  const handleBuy = () => {
    alert(`
      Спасибо за покупку.
      Цена составляет ${price} руб.
    `);
  };

  const labelClickHandler = (id) => {
    onClickLabel(id);
  };

  return (
    <div>
      {products && products.length ? (
        <form>
          <Panel>
            <Title as="h2" size={TitleSize.EXTRA_SMALL}>
              Выберите продукты
            </Title>

            <Fieldset>
              {products.map((item, index) => (
                <CheckboxLabel key={index}>
                  <CheckboxInput
                    type="checkbox"
                    name={`product-${item.id}`}
                    value={item.name}
                    checked={selectedProducts.includes(item.id)}
                    onChange={() => labelClickHandler(item.id)}
                  />
                  <CheckboxText>{item.name}</CheckboxText>
                </CheckboxLabel>
              ))}
            </Fieldset>
          </Panel>

          <BuyPanel>
            <Title as="h2" size={TitleSize.EXTRA_SMALL}>
              Сделать заказ
            </Title>

            <InputWrap>
              <Input
                type="text"
                name="address"
                value={inputState}
                placeholder="Введите адрес доставки"
                required
                onChange={(evt) => setInputState(evt.target.value)}
              />
            </InputWrap>

            <PriceWrap>
              <PriceText>Цена</PriceText>
              <PriceValue>
                <span>{price}</span> руб.
              </PriceValue>
            </PriceWrap>

            <SubmitWrap>
              <Button type="submit" onClick={handleBuy} disabled={!canBuy}>
                Купить
              </Button>
            </SubmitWrap>
          </BuyPanel>
        </form>
      ) : (
        <p>Продукты были слишком вкусные и их разобрали.</p>
      )}
    </div>
  );
}

export default CatalogForm;
