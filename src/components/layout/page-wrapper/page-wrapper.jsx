import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page";
import "./style.css";

function PageWrapper({ ...props }) {
  return (
    <>
      <Header />
      <main className="page-main">
        <MainPage {...props} />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
