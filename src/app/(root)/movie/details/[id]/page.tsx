import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { GetLatestMovie } from "@/lib/fetchData";
import MainCards from "@/components/cards/MainCards";
import {Divider} from "@nextui-org/react";
import Recom from "@/components/details_components/Recom";
import Cast from "@/components/details_components/Cast";
import ReviewCard from "@/components/details_components/ReviewCard";
import SideDetails from "@/components/details_components/SideDetails";
import HeroDetails from "@/components/details_components/HeroDetails";

const page = async () => {
  const { results: latestMovie, total_pages } = await GetLatestMovie('1');
  return (
    <>
    <div className="pt-28">
        <div className="mb-10">
      <div className="relative flex w-full h-screen">
        <Image
          src={"/heroPic/Creator.jpeg"}
          alt="image"
          width={500}
          height={500}
          className="absolute w-full h-screen z-10 saturate-50 blur-sm"
          />
           <div className="flex lg:flex-row flex-col items-center justify-center z-20 p-5 lg:p-20 gap-10">
   <HeroDetails/>
    </div>
      </div>
      </div>
      <div className="flex xl:flex-row flex-col gap-10 px-5">
      <ul className="divide-y divide-gray-700">
      <li className="py-3 sm:py-4">
        <Cast/>
        </li>
        <li className="py-3 sm:py-4">
        <ReviewCard/>
        </li>
        <li className="py-3 sm:py-4">
       <Recom latestMovie={latestMovie}/>
        </li>
      </ul>
      <div className="mt-10 max-w-md">
      <SideDetails/>
      </div>
      </div>
    </div>
      {/* <div className="flex">

      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Get back to growth with <span className="text-blue-600 dark:text-blue-500">the world's #1</span> CRM.</h1>
<p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

      </div> */}
      </>
  );
};

export default page;
