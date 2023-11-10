"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import 'swiper/css/navigation';
import "../../app/globals.css";
import {
  Scrollbar,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import Image from "next/image";

const HeroSwiper = () => {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        grabCursor={true}
        modules={[Scrollbar,Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={"/Capture.PNG"}
            alt="hero"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/Capture.PNG"}
            alt="hero"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/Capture.PNG"}
            alt="hero"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/Capture.PNG"}
            alt="hero"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/Capture.PNG"}
            alt="hero"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-10 bg-slate-900"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSwiper;
