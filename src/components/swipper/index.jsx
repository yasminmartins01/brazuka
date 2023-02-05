import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";
import { Navigation } from "swiper";

export default function Swipper() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="uno"></SwiperSlide>
        <SwiperSlide className="dos"></SwiperSlide>
        <SwiperSlide className="tres"></SwiperSlide>
      </Swiper>
    </>
  );
}
