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

  const price = selectedProducts.reduce(
    (total, product) => (total += product.price),
    0
  );

  const handleBuy = () => {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за заказ, вы купили:\n${selectedProducts
      .map((product) => `${product.name} - ${product.price} руб.`)
      .join("\n")}
    Итого: ${price} руб.
    Доставка по адресу: ${inputState}.`);
  };

  const handleLabelClick = (id) => {
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
              {products.map((product) => (
                <CheckboxLabel key={product.id}>
                  <CheckboxInput
                    type="checkbox"
                    name={`product-${product.id}`}
                    value={product.name}
                    checked={selectedProducts.some(
                      (selectedProduct) => selectedProduct.id === product.id
                    )}
                    onChange={() => handleLabelClick(product.id)}
                  />
                  <CheckboxText>{product.name}</CheckboxText>
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
