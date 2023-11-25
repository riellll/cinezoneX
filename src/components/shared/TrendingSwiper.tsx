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
import Link from "next/link";
interface Props {
  trendDay: any;

}

const TrendingSwiper = ({trendDay}: Props) => {
  // console.log(trendSwiperImg.length);
  return (
    <div className="relative px-5 bg-[#141412]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="relative mySwiper pr-10"
        pagination={{ type: "progressbar" }}
      >
        <div className="mt-20">
          {trendSwiperImg.map((item, index) => (
            <SwiperSlide>
              <Link href={'#'} className="bgtrend transition ease-in-out delay-50 duration-700 flex items-stretch bg-[url('../../public/tsdark.PNG')] bg-no-repeat bg-cover bg-center bg-gray-300 p-4 w-full h-56 rounded-xl">
                <div className="self-end flex flex-col items-start text-gray-100 gap-3 pb-2">
                  <h1 className="text-xl font-medium dark:text-white">
                    THE MARVELS
                  </h1>
                  <div className="flex gap-3 text-green-500 text-sm font-bold">
                    <p>rating</p>
                    <p>year</p>
                    <p>time</p>
                    <p>desc</p>
                    <p>desc</p>
                    <p>desc</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
        <div className="hidden absolute z-40 bottom-0 right-0 top-0 lg:grid place-items-stretch justify-items-stretch">
          <div className="flex flex-col gap-5 mb-7">
            <SwiperButton />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default TrendingSwiper;
