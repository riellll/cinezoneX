"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../app/globals.css";
import {
  Scrollbar,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Controller ,
} from "swiper/modules";
import Image from "next/image";
import { homeSwiperImg } from "@/lib/index.js";
import SwiperButton from "./SwiperButton";

const HeroSwiper = () => {
  const [controlledSwiper, setControlledSwiper] = useState<number>(0);
  console.log(controlledSwiper);
  return (
    <>
    <div className="relative bg-[#141412]">
 
      <Swiper
          modules={[Scrollbar, Navigation, Mousewheel, Keyboard, Controller]}
        scrollbar={{
          hide: false,
          enabled: true,
        }}
        // onSwiper={(swiper) => console.log(swiper.slideNext())}
        // navigation={true}
        mousewheel={true}
        keyboard={true}
        grabCursor={true}
        className="relative mySwiper"
      >
        {homeSwiperImg.map((item, index) => (
            <SwiperSlide>
              <div className="bghero saturate-50 flex items-stretch bg-[url('../../public/donbelle.webp')] bg-no-repeat bg-cover bg-center bg-gray-300 p-4 w-full h-screen">
                <div className="self-end flex flex-col items-start pb-40">
              <h1>THE MARVELS</h1>
              <div className="flex gap-5">
                <p>rating</p>
                <p>year</p>
                <p>time</p>
                <p>desc</p>
                <p>desc</p>
                <p>desc</p>
              </div>
              <p className="text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ipsam temporibus facere sit repellat nihil alias assumenda? Ad aperiam, magnam beatae nostrum eligendi alias. Voluptas soluta quo quia ex consequatur?</p>
                </div>
              </div>
          </SwiperSlide>
        ))}
        <div className="absolute z-30 bottom-52 h-10 w-24 right-5 grid place-items-stretch">
        <div className="flex flex-row-reverse items-stretch place-content-center gap-1">
      <SwiperButton />
        </div>
        </div>
      </Swiper>
    </div>
    </>
  );
};

export default HeroSwiper;
