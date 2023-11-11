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
    console.log(trendSwiperImg.length);
  return (
    <div className="relative px-5">
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      // navigation={true}
      modules={[Pagination, Navigation]}
      className="relative mySwiper pr-10"
      pagination={{ type: "progressbar" }}
    >
      <div>
        {trendSwiperImg.map((item, index) => (
            <SwiperSlide>
            <Image
              src={item.img}
              alt="hero"
              width={500}
              height={500}
              className={`w-full h-56 rounded-xl bg-none`}
            />
          </SwiperSlide>
        ))}
        </div>
      <div className="absolute z-40 bottom-0 right-0 top-0 grid place-items-center ">
        <div className="flex flex-col bottom-5 justify-self-auto">
      <SwiperButton />
        </div>
        </div>
    </Swiper>
        </div>
  );
};

export default TrendingSwiper;
