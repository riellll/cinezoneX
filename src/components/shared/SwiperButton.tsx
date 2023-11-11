import React from 'react'
import { useSwiper } from 'swiper/react'


const SwiperButton = () => {
    const swiper = useSwiper()
  return (
    <>
    <button onClick={() => swiper.slidePrev()} className="text-gray-900 bg-white border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 ">prev</button>
    <button onClick={() => swiper.slideNext()} className="text-gray-900 bg-white border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 ">next</button>
    </>
  )
}

export default SwiperButton