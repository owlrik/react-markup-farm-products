import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page";
import { Main } from "./styles";

function PageWrapper({ ...props }) {
  return (
    <>
      <Header />
      <Main>
        <MainPage {...props} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
