"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Testimonial from "./testimonial";
import SliderWrapper from "./_slicksiderstyle";
function Testimonials() {
  // var settings = {
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 1000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  //   dots: true,
  // };

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 1000,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };
  return (
    <div className="  my-4 mx-10 ">
      <div className="flex flex-col items-center justify-center">
        <h1 className=" text-2xl md:text-3xl font-bold my-2 ">
          Testimonials
          {/* <span class="block max-w-[100%] py-[2px] transition-all duration-500 h-0.5 bg-blue-950 mt-2 "></span> */}
          {/* <span class="block max-w-[25%] py-[2px] transition-all duration-500 h-0.5 bg-blue-700  translate-x-[130px] -translate-y-1"></span>
          <span class="block max-w-[13%] py-[2px] transition-all duration-500 h-0.5 bg-blue-400  translate-x-[195px] -translate-y-2"></span> */}
        </h1>
      </div>
      <SliderWrapper className="mt-2">
        <Slider {...settings} className="flex items-center justify-center">
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </Slider>
      </SliderWrapper>
    </div>
  );
}

export default Testimonials;
