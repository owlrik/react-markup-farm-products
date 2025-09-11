import React from "react";
import { StyledSwiper, StyledSwiperSlide } from "./styles";
import ProductCard from "../../ui/product-card/product-card";

import "swiper/css";
import "swiper/css/scrollbar";

import { Mousewheel, Scrollbar } from "swiper/modules";

function CatalogList({ products }) {
  return products?.length ? (
    <StyledSwiper
      slidesPerView={"auto"}
      spaceBetween={12}
      direction={"vertical"}
      mousewheel={true}
      scrollbar={{
        hide: true,
        draggable: true,
      }}
      modules={[Mousewheel, Scrollbar]}
      className="catalog-swiper"
    >
      {products.map((product) => (
        <StyledSwiperSlide key={`product-${product.id}`}>
          <ProductCard {...product} />
        </StyledSwiperSlide>
      ))}
    </StyledSwiper>
  ) : null;
}

export default CatalogList;
