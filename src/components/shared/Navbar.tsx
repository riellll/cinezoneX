import React from "react";
import HeroSwiper from "./HeroSwiper";
import { BsArrowRight } from 'react-icons/bs';
import TrendingSwiper from "./TrendingSwiper";

const Navbar = () => {
  return (
    <nav className="relative bg-white border-gray-200 dark:bg-gray-900">
      <div className="absolute max-w-screen-xl flex flex-wrap items-center justify-between mx-auto left-0 right-0 p-4 z-10">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        
<form>
    <div className="flex">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative w-96">
            <input type="search" id="location-search" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-900 bg-opacity-10 rounded-full border-l-gray-50 border-l-2 border border-gray-300 focus:outline-none dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search for city or address" required/>
            <button type="submit" className="absolute top-0 right-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-full border border-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <button type="button" className="flex justify-start items-center gap-3 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 font-medium rounded-full text-lg px-5 py-1.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"><span>Login</span><BsArrowRight/> </button>

        </div>
      </div>
      <HeroSwiper />
      <div>
      <TrendingSwiper/>
      </div>
    </nav>
  );
};

export default Navbar;
