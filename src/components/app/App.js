import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
//import features from "../../mocks/features";
import products from "../../mocks/products";
import { GlobalStyle } from "./styles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      {/* <PageWrapper features={features} /> */}
      <PageWrapper products={products} />
    </>
  );
}
