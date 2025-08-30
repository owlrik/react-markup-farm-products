import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page/main-page";
import BuyPage from "../../pages/buy-page/buy-page";
import { Main } from "./styles";

function PageWrapper({ ...props }) {
  return (
    <>
      <Header />
      <Main>
        {/*
          <MainPage {...props} />
        */}
        <BuyPage {...props} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
