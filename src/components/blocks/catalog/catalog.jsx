import React, { useState, useRef } from "react";
import { StyledSection, ContentInner } from "./styles";
import CatalogForm from "../catalog-form/catalog-form";
import CatalogList from "../catalog-list/catalog-list";

function Catalog({ products }) {
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const scrollToProductSlide = (index) => {
    swiperInstance.slideTo(index, 0);
  };

  const handleProductClick = (id) => {
    const currentProductIds = [...selectedProductIds];
    const selectedIndex = selectedProductIds.indexOf(id);
    if (selectedProductIds.length && selectedIndex !== -1) {
      currentProductIds.splice(selectedIndex, 1);
    } else {
      currentProductIds.push(id);
      const index = products.findIndex((item) => item.id === id);
      scrollToProductSlide(index, 0);
    }

    setSelectedProductIds(currentProductIds);
  };

  return (
    <StyledSection>
      <ContentInner>
        <CatalogForm
          products={products}
          selectedProducts={selectedProductIds}
          onClickLabel={handleProductClick}
        />
        <CatalogList products={products} onSwiperInit={setSwiperInstance} />
      </ContentInner>
    </StyledSection>
  );
}

export default Catalog;
