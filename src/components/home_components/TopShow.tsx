"use client";

import { useState } from "react";
import LongCards from "../cards/LongCards";
import { IoIosPlay } from "react-icons/io";

const TopShow = () => {
    const [tabs, setTabs] = useState('day')
  return (
    <div className="grow flex w-full flex-col justify-items-stretch mt-10">
      <div className="hidden pr-10 mt-6 md:block">
      <div  className="relative w-full h-0 pb-96 pr-20"><iframe src="https://giphy.com/embed/7SrHwak3yoO9a" width="100%" height="100%" className="absolute giphy-embed" allowFullScreen></iframe></div>        
      </div>
    <div className="flex justify-start items-center mb-10">
        <div className="flex justify-center items-center mr-5">
          <p className="bg-green-700 py-1.5 px-1 rounded mr-1"><IoIosPlay /></p>
        <p className="text-3xl font-bold text-gray-200">TOP 10</p>
        </div>
      <button
        onClick={() => setTabs('day')}
        className={`${tabs === 'day' ? 'text-green-700 border-green-700' : 'text-gray-500 border-gray-500 hover:text-green-700 hover:border-green-700'} border font-medium rounded-lg text-sm px-3 py-1 text-center me-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600`}
      >
        Day
      </button>
      <button
        onClick={() => setTabs('week')}
        className={`${tabs === 'week' ? 'text-green-700 border-green-700' : 'text-gray-500 border-gray-500 hover:text-green-700 hover:border-green-700'} border font-medium rounded-lg text-sm px-3 py-1 text-center me-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600`}
      >
        Week
      </button>
    </div>
    {tabs === 'day' && <LongCards/>}
  </div>
  )
}

export default TopShow