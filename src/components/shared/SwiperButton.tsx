import React from 'react'
import { useSwiper } from 'swiper/react'
import { FaPlay } from 'react-icons/fa';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

const SwiperButton = () => {
    const swiper = useSwiper()

  return (
    <>
    {/* <div className='absolute z-10'> */}
    <button onClick={() => swiper.slidePrev()} className="px-2 text-gray-900 flex items-center bg-opacity-60 text-center bg-white hover:bg-opacity-70 border border-gray-300 rounded-lg text-2xl w-full h-full dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 "><BiSolidRightArrow/></button>
    <button onClick={() => swiper.slideNext()} className="px-2 text-gray-900 flex items-center bg-opacity-60 text-center bg-white hover:bg-opacity-70 border border-gray-300 rounded-lg text-2xl w-full h-full dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 "><BiSolidLeftArrow/></button>
    {/* </div> */}
    </>
  )
}

export default SwiperButton