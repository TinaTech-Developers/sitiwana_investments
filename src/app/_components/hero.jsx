"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeroCard from "./herocard";
import HeroCard1 from "./herocardone";

export default function Hero() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
      >
        <SwiperSlide>
          <HeroCard
            head={
              "Premium Solar Systems for Superior Energy Efficiency and Performance"
            }
            text={
              "Maximize your energy efficiency with our state-of-the-art solar systems."
            }
          />
        </SwiperSlide>

        <SwiperSlide>
          <HeroCard1
            head={
              "Top-Rated Satellite Technology for Unrivaled Performance and Connection"
            }
            text={
              "Achieve seamless global connectivity with our advanced satellite technology."
            }
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
