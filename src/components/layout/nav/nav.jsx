import React from "react";
import Button from "../../ui/button/button";
import { AppRoute } from "../../utils/const";

function Nav() {
  return (
    <Button minWidth={260} link={AppRoute.BUY}>
      Купить
    </Button>
  );
}

export default Nav;
