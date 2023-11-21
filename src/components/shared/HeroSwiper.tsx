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
  Controller,
} from "swiper/modules";
import Image from "next/image";
import { CiBookmark } from "react-icons/ci";
import { FaPlayCircle } from "react-icons/fa";
import { homeSwiperImg } from "@/lib/index.js";
import SwiperButton from "./SwiperButton";
import Link from "next/link";

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
                <div className="self-end flex flex-col items-start text-gray-100 gap-3 pb-40">
                  <h1 className="text-4xl font-medium dark:text-white saturate-200">
                    THE MARVELS
                  </h1>
                  <div className="flex gap-5 saturate-200">
                    <p>rating</p>
                    <p>year</p>
                    <p>time</p>
                    <p>desc</p>
                    <p>desc</p>
                    <p>desc</p>
                  </div>
                  <p className="text-start text-base text-gray-400 max-w-4xl saturate-200">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Incidunt ipsam temporibus facere sit repellat nihil alias
                    assumenda? Ad aperiam, magnam beatae nostrum eligendi alias.
                    Voluptas soluta quo quia ex consequatur?
                  </p>
                  <div className="flex mb-3 w-full text-start">
                    <button className=" flex gap-1 p-4 bg-green-600 text-md hover:bg-green-500 transition ease-in-out duration-300 rounded-full text-black saturate-200">
                    <span className='text-2xl font-semibold'><FaPlayCircle /></span>
                      <span className='text-lg font-semibold'>Watch Now</span>
                    </button>
                    <div className="p-4 rounded-full font-medium saturate-200 ml-3">
                      <Link href={'#'} className="flex hover:text-green-600 transition ease-in-out duration-300">
                      <span  className='text-2xl font-semibold'><CiBookmark/></span>
                      <span>Bookmark</span>
                      </Link>
                    </div>
                  </div>
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
