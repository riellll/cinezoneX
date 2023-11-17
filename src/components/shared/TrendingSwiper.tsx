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
    <div className="relative px-5 bg-[#141412]">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="relative mySwiper pr-10"
        pagination={{ type: "progressbar" }}
      >
        <div className="mt-20">
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
        <div className="absolute z-40 bottom-0 right-0 top-0 grid place-items-stretch justify-items-stretch">
          <div className="flex flex-col gap-5 mb-7">
            <SwiperButton />
          </div>
        </div>
        <div className="absolute z-50 top-0 ">
        <h1 className="text-white">Trending Now</h1>
        </div>
      </Swiper>
    </div>
  );
};

export default TrendingSwiper;
