import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const StyledSwiper = styled(Swiper)`
  max-height: calc(
    100vh -
      (
        ${(props) => props.theme.headerHeight} +
          ${(props) => props.theme.footerHeight}
      )
  );
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  height: auto;
`;

export { StyledSwiper, StyledSwiperSlide };
