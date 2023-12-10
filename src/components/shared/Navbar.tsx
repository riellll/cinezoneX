
import React, { Suspense } from "react";
import DropdownNavbar from "./DropdownNavbar";
import SearchDropdown from "./SearchDropdown";
import Link from "next/link";
import SearchBar from "./SearchBar";
import Login from "../Login_components/Login";



const Navbar = async () => {

  return (
    <nav className="relative border-gray-200 dark:bg-gray-900">
      <div className="navbar absolute flex items-center justify-between mx-auto left-0 right-0 p-5 z-10">
        <div className="flex items-center">
        <DropdownNavbar/>

          <Link href={'/'} className="self-center text-2xl text-center px-1.5 bg-green-600 rounded-sm font-extrabold dark:text-white tracking-tight text-gray-300">
            CINIZONE
          </Link>
        </div>

          <div className="basis-1/2 hidden md:flex items-center justify-center px-20">
          <SearchBar/>
          </div>


        <div className="flex gap-5">
          <div className="md:hidden">
            <SearchDropdown/>
          </div>
          <Login/>
        </div>
      </div>
{/*       <HeroSwiper trendWeek={heroSwiperData}/>
      <div className="absolute w-full bottom-0"> 
        <TrendingSwiper trendDay={day}/>
      </div> */}
    </nav>
  );
};

export default Navbar;

/* 
shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]
shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]
shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
*/
