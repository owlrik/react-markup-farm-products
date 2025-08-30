import React from "react";
import { StyledSection, ContentInner } from "./styles";
import CatalogForm from "../catalog-form/catalog-form";
import CatalogList from "../catalog-list/catalog-list";

function Catalog({ products }) {
  return (
    <StyledSection>
      <ContentInner>
        <CatalogForm products={products} />
        <CatalogList products={products} />
      </ContentInner>
    </StyledSection>
  );
}

export default Catalog;
