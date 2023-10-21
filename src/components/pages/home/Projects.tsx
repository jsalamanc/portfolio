"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import { CardProject } from "./CardProject";

export const Projects = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardProject />
        </SwiperSlide>
        <SwiperSlide>
          <CardProject />
        </SwiperSlide>
        <SwiperSlide>
          <CardProject />
        </SwiperSlide>
        <SwiperSlide>
          <CardProject />
        </SwiperSlide>
        <SwiperSlide>
          <CardProject />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
