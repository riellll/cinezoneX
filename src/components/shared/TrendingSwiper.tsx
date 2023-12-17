"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../app/globals.css";

import { Pagination, Navigation } from "swiper/modules";
import { trendSwiperImg } from "@/lib/index.js";
import { IoMdStar } from "react-icons/io";
import {Image} from "@nextui-org/react";
import SwiperButton from "./SwiperButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFire } from "react-icons/bs";
interface Props {
  trendDay: any;
}

const TrendingSwiper = ({trendDay}: Props) => {
  const pathname = usePathname()
  // console.log(trendSwiperImg.length);
  return (
    <>
    <div className={`relative ${pathname !== '/' && 'hidden'} mb-5 z-40 text-center`}>
          <div className="flex justify-center items-center gap-2 text-gray-100 text-base sm:text-lg font-normal sm:font-medium">
            <span>
              <BsFire />
            </span>
            <p className="tracking-wide">Trending Now</p>{" "}
            <span>
              <BsFire />
            </span>
          </div>
        </div>
    <div className={`relative ${pathname !== '/' && 'hidden'} px-5 bg-[#141412]`}>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
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
          {trendDay.results.map((item: any, index: any) => {
            const vote = `${String(item.vote_average).split('.')[0]}${String(item.vote_average).split('.')[1] ? '.'+ String(item.vote_average).split('.')[1][0] : ''}`;
            const overview = item.overview.split('.');
            const date = item.release_date ? item.release_date.split('-')[0] : item.first_air_date.split('-')[0];
            const link = item.media_type === 'tv' ? `/tv/details/${item.id}` : `/movie/details/${item.id}`
            //  console.log(String(item.vote_average).split('.'));
            return(
            <SwiperSlide key={index}>
              <Link href={link} className="relative trend flex items-stretch w-full p-4 h-44 sm:h-56 rounded-xl">
              <div className="bgtrend transition ease-in-out delay-50 duration-700 absolute bg-black bg-opacity-30 top-0 left-0 w-full h-56 rounded-lg z-10"></div>
              <img src={`https://image.tmdb.org/t/p/w533_and_h300_face${item.backdrop_path}`} alt="img" className="absolute top-0 left-0 bg-cover w-full h-56 rounded-xl"/>
                <div className="self-end flex flex-col items-start text-gray-100 gap-3 pb-2 z-20">
                  <h1 className="sm:text-xl text-start text-md font-bold text-white dark:text-white">
                  {item.title ? item.title : item.name}
                  </h1>
                  <div className="flex gap-3 text-green-500 text-xs font-bold">
                  <p className="text-xs border border-green-600 bg-green-600 px-1.5 text-gray-900 rounded-full">{'HD'}</p>
                    <p>{item.media_type[0].toUpperCase()+item.media_type.slice(1)}</p>
                    <div className="flex items-center font-norma dark:text-gray-400">
                  <p className="text-sm"><IoMdStar /></p>
                  <p>{vote}</p>
                    </div>
                    <p>{date}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          )})}
        </div>
        <div className="hidden absolute z-40 bottom-0 right-0 top-0 lg:grid place-items-stretch justify-items-stretch">
          <div className="flex flex-col gap-5 mb-7">
            <SwiperButton />
          </div>
        </div>
      </Swiper>
    </div>
    </>
  );
};

export default TrendingSwiper;
