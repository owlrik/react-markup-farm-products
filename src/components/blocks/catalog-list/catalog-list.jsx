import React from "react";
import { StyledCatalogList } from "./styles";
import ProductCard from "../../ui/product-card/product-card";

function CatalogList({ products }) {
  return products?.length ? (
    <StyledCatalogList>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard {...product} />
        </li>
      ))}
    </StyledCatalogList>
  ) : null;
}

export default CatalogList;
