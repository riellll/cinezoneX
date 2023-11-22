"use client";
import { useState } from "react";
import MainCards from "../cards/MainCards";
import { IoIosPlay } from "react-icons/io";

const Recommended = () => {
    const [tabs, setTabs] = useState('movies')
  return (
    <>
      <div className="flex w-full flex-col mt-10">
        <div className="flex">
            <div className="flex justify-center items-center mx-5">
              <p className="bg-green-700 py-1.5 px-1 rounded mr-1"><IoIosPlay /></p>
            <p className="text-3xl font-bold text-gray-200">RECOMMENDED</p>
            </div>
          <button
            onClick={() => setTabs('movies')}
            className={`${tabs === 'movies' ? 'text-green-700 border-green-700' : 'text-gray-500 border-gray-500 hover:text-green-700 hover:border-green-700'} border font-medium rounded-lg text-sm px-3 py-1 text-center me-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600`}
          >
            Movies
          </button>
          <button
            onClick={() => setTabs('tv')}
            className={`${tabs === 'tv' ? 'text-green-700 border-green-700' : 'text-gray-500 border-gray-500 hover:text-green-700 hover:border-green-700'} border font-medium rounded-lg text-sm px-3 py-1 text-center me-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600`}
          >
            TV Shows
          </button>
        </div>
        {tabs === 'movies' && <MainCards/>}
      </div>
    </>
  );
};

export default Recommended;
