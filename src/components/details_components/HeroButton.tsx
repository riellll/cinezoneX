'use client'
import { FaHeart } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import {Tooltip, Button} from "@nextui-org/react";
import { useState } from "react";

const HeroButton = () => {
    const [list, setList] = useState(false);
    const [heart, setHeart] = useState(false);
    const [bookmark, setBookmark] = useState(false);
    const [star, setStar] = useState(false);

  return (
    <>
    <Tooltip showArrow={true} content="Add to list" classNames={{
        base: [
          // arrow color
          "before:bg-gray-950 dark:before:bg-white",
        ],
        content: [
          "py-2 px-4 shadow-xl",
          "text-gray-300 bg-gray-950",
        ],
      }}>
    <p onClick={() => setList(prev => !prev)} className={`bg-gray-950 ${list ? 'text-red-700' : 'text-gray-200'} p-4 sm:p-5 text-sm sm:text-base rounded-full cursor-pointer`}><FaListUl /></p>
    </Tooltip>
        <Tooltip showArrow={true} content="Mark as favorite" classNames={{
        base: [
          // arrow color
          "before:bg-gray-950 dark:before:bg-white",
        ],
        content: [
          "py-2 px-4 shadow-xl",
          "text-gray-300 bg-gray-950",
        ],
      }}>
    <p onClick={() => setHeart(prev => !prev)} className={`bg-gray-950 ${heart ? 'text-pink-500' : 'text-gray-200'} p-4 sm:p-5 text-sm sm:text-base rounded-full cursor-pointer`}><FaHeart /></p>
    </Tooltip>
        <Tooltip showArrow={true} content="Add to your watchlist" classNames={{
        base: [
          // arrow color
          "before:bg-gray-950 dark:before:bg-white",
        ],
        content: [
          "py-2 px-4 shadow-xl",
          "text-gray-300 bg-gray-950",
        ],
      }}>
    <p onClick={() => setBookmark(prev => !prev)} className={`bg-gray-950 ${bookmark ? 'text-green-700' : 'text-gray-200'} p-4 sm:p-5 text-sm sm:text-base rounded-full cursor-pointer`}><FaBookmark /></p>
    </Tooltip>
        <Tooltip showArrow={true} content="Rate It!" classNames={{
        base: [
          // arrow color
          "before:bg-gray-950 dark:before:bg-white",
        ],
        content: [
          "py-2 px-4 shadow-xl",
          "text-gray-300 bg-gray-950",
        ],
      }}>
   <p onClick={() => setStar(prev => !prev)} className={`bg-gray-950 ${star ? 'text-yellow-600' : 'text-gray-200'} p-4 sm:p-5 text-sm sm:text-base rounded-full cursor-pointer`}><FaStar /></p>
    </Tooltip>
    </>
  )
}

export default HeroButton