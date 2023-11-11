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
    <div className="relative">
 
      <Swiper
          modules={[Scrollbar, Navigation, Mousewheel, Keyboard, Controller]}
        scrollbar={{
          hide: false,
          enabled: true,
        }}
        onSwiper={(swiper) => console.log(swiper.slideNext())}
        // navigation={true}
        mousewheel={true}
        keyboard={true}
        grabCursor={true}
        className="relative mySwiper"
      >
        {homeSwiperImg.map((item, index) => (
            <SwiperSlide>
            <Image
              src={item.img}
              alt="hero"
              width={500}
              height={500}
              className="w-full h-screen"
            />
          </SwiperSlide>
        ))}
        <div className="absolute z-30 top-64 right-10">
      <SwiperButton />
        </div>
      </Swiper>
    </div>
    </>
  );
};

export default HeroSwiper;
