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
import { IoMdStar } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { FaPlayCircle } from "react-icons/fa";
import { homeSwiperImg } from "@/lib/index.js";
import SwiperButton from "./SwiperButton";
import Link from "next/link";
interface Props {
  trendWeek: any;

}

const HeroSwiper = ({ trendWeek }: Props) => {
  const [controlledSwiper, setControlledSwiper] = useState<number>(0);
  // console.log(trendWeek);
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
          {trendWeek.results.filter((e: any,i: any) => i < 10).map((item: any, index: any) => {
            const vote = `${String(item.vote_average).split('.')[0]}.${String(item.vote_average).split('.')[1][0]}`
            const overview = item.overview.split('.')
            const date = item.release_date ? item.release_date.split('-')[0] : item.first_air_date.split('-')[0] 
            // console.log(typeof item.release_date);
            return (
            <SwiperSlide key={index}>
              <div className={`relative saturate-50 flex bg-no-repeat bg-cover bg-center bg-gray-300 w-full h-screen`}
              >
                <div className="bghero absolute bg-black bg-opacity-30 w-full h-screen z-10"></div>
              <Image src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.backdrop_path}`} alt="img" width={900} height={900} className="absolute w-full h-screen"/>
                <div className="self-end flex flex-col w-full items-center sm:items-start text-gray-100 gap-2 md:gap-3 pb-44 px-3 z-20">
                  <h1 className="text-2xl drop-shadow-lg md:text-4xl font-medium dark:text-white saturate-200">
                  {item.title ? item.title : item.name}
                  </h1>
                  <div className="flex flex-wrap drop-shadow-lg font-semibold text-sm gap-5 saturate-200">
                    <p className="text-xs border border-green-600 bg-green-600 px-1.5 text-gray-900 rounded-full">{'HD'}</p>
                    <p className="text-xs px-1.5 border rounded-full">{item.adult ? 'R' : 'PG'}</p>
                    <p>{item.media_type[0].toUpperCase()+item.media_type.slice(1)}</p>
                    <div className="flex items-center font-norma dark:text-gray-400">
                  <p className="text-xl"><IoMdStar /></p>
                  <p>{vote}</p>
                    </div>
                    <p>{date}</p>
                  </div>
                  <p className="hidden lg:block text-start drop-shadow-lg text-base text-gray-400 max-w-4xl saturate-200">
                   {overview[0]+'.'+overview[1]+'.'}
                  </p>
                  <div className="flex mb-3 mt-5 w-full sm:justify-start text-center sm:text-start">
                    <button className="grow sm:flex-none flex text-center justify-center gap-1 p-4 bg-green-600 text-md hover:bg-green-500 transition ease-in-out duration-300 rounded-full text-black saturate-200">
                    <span className='text-2xl font-semibold'><FaPlayCircle /></span>
                      <span className='text-lg font-semibold'>Watch Now</span>
                    </button>
                    <div className="grow sm:flex-none p-4 rounded-full font-medium saturate-200 ml-3">
                      <Link href={'#'} className="flex justify-center hover:text-green-600 transition ease-in-out duration-300">
                      <span  className='text-2xl font-semibold'><CiBookmark/></span>
                      <span>Bookmark</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )})}
          <div className="hidden absolute z-30 bottom-48 h-10 w-24 right-5 sm:grid place-items-stretch">
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
// ../../public/donbelle.webp
// {item.title ? item.title : item.name}