"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../app/globals.css";

import { Pagination, Navigation } from "swiper/modules";
import { trendSwiperImg } from "@/lib/index.js";

import Image from "next/image";
import SwiperButton from "./SwiperButton";

const TrendingSwiper = () => {
    // console.log(trendSwiperImg);
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper bottom-0"
      pagination={{ type: "progressbar" }}
    >
        {trendSwiperImg.map((item, index) => (
            <SwiperSlide>
            <Image
              src={item.img}
              alt="hero"
              width={500}
              height={500}
              className="w-auto h-auto"
            />
          </SwiperSlide>
        ))}
      <SwiperButton />
    </Swiper>
  );
};

export default TrendingSwiper;
