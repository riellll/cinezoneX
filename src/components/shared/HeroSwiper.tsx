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
      <Swiper
          modules={[Scrollbar, Navigation, Mousewheel, Keyboard, Controller]}
        scrollbar={{
          hide: true,
        }}
        onSwiper={(swiper) => setControlledSwiper(swiper.activeIndex)}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        grabCursor={true}
        className="mySwiper"
      >
        {homeSwiperImg.map((item, index) => (
            <SwiperSlide>
            <Image
              src={item.img}
              alt="hero"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </SwiperSlide>
        ))}
      <SwiperButton />
      </Swiper>
    </>
  );
};

export default HeroSwiper;
