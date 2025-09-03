import React from "react";
import styled from "styled-components";
import { VisuallyHiddenInput } from "../../styled";

const Label = styled.label`
  display: block;
`;

function CheckboxButton(
  labelComponent, // компонент для отображения label
  name, // имя
  value, // значение
  text, // текст элемента
  isChecked, // состояние
  onChange, // событие при изменении
  ...props
) {
  const LabelComponent = labelComponent;

  return (
    <Label>
      <VisuallyHiddenInput
        type="checkbox"
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChange}
        {...props}
      />
      <LabelComponent>{text}</LabelComponent>
    </Label>
  );
}

export default CheckboxButton;
