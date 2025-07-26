import React from "react";
import Logo from "../../ui/logo/logo";
import "./style.css";

function Footer() {
  return (
    <footer className="page-footer">
      <Logo />
      <p>
        Создано <span>2021</span>
      </p>
    </footer>
  );
}

export default Footer;
