import React from "react";
import logo from "../../../assets/logo.svg";
import "./style.css";

function Logo() {
  return (
    <a className="logo" href="/">
      <img className="logo__image" src={logo} alt="Логотип" />
      <span className="logo__text">Фермерские продукты</span>
    </a>
  );
}

export default Logo;
