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

function CatalogForm({ products }) {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const checkProduct = (id) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts((currentProducts) =>
        currentProducts.filter((itemId) => itemId !== id)
      );
    } else {
      setSelectedProducts((currentProducts) => [...currentProducts, id]);
    }
  };

  const price = products
    .filter((item) => selectedProducts.includes(item.id))
    .reduce((total, item) => total + parseInt(item.description.price, 10), 0);

  return (
    <div>
      <form>
        <Panel>
          <Title as="h2" size={TitleSize.EXTRA_SMALL}>
            Выберите продукты
          </Title>

          <Fieldset>
            {products &&
              products.length &&
              products.map((item, index) => (
                <CheckboxLabel key={index}>
                  <CheckboxInput
                    type="checkbox"
                    name={`product-${item.id}`}
                    value={item.name}
                    checked={selectedProducts.includes(item.id)}
                    onChange={(evt) => checkProduct(item.id)}
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
              placeholder="Введите адрес доставки"
              required
            />
          </InputWrap>

          <PriceWrap>
            <PriceText>Цена</PriceText>
            <PriceValue>
              <span>{price}</span> руб.
            </PriceValue>
          </PriceWrap>

          <SubmitWrap>
            <Button type="submit">Купить</Button>
          </SubmitWrap>
        </BuyPanel>
      </form>
    </div>
  );
}

export default CatalogForm;
