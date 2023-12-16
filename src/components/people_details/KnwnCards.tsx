import React, { Suspense } from 'react'
import {ScrollShadow} from "@nextui-org/react";
import GetTrending from '@/lib/FetchTrending';
import Link from 'next/link';
import { MdOutlinePlayCircleFilled } from 'react-icons/md';
import {Image} from "@nextui-org/react";
interface Props {
  knownfor: any[]
}
const KnwnCards = async () => {
    const {results} = await GetTrending('day')
    // console.log(knownfor);
  return (
    <>
    <h1 className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-300 md:text-lg lg:text-2xl dark:text-white">Recommendations</h1>
    <ScrollShadow orientation="horizontal" className="flex gap-5 max-w-[950px] xl:max-w-[950px] lg:max-w-[700px]">
    {/* <div className="flex gap-5"> */}
        {results.map((item: any) =>{ 
        const link = item.media_type === 'tv' ? `/tv/details/${item.id}` : `/movie/details/${item.id}`
        return(
           <div
           className="relative group cards selection: max-w-full min-h-full rounded-lg dark:bg-gray-800 dark:border-gray-700"
           key={item.id}
         >
           <Link href={link} className="relative imgcards">
           {/* <span className="transition ease-in-out delay-150 duration-700 absolute rounded-md top-0 bottom-0 left-0 right-0"><MdOutlinePlayCircleFilled /></span> */}
           <Suspense fallback={<h1 className="w-full bg-red-600 text-gray-200">Loading</h1>}>
             <Image
               className="rounded-lg max-w-[150px] h-auto shadow-inner"
               src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
               alt={item.title || item.name}
               width={500}
               height={500}
             />
               </Suspense>
             <span className="transition ease-in-out delay-300 duration-1000 absolute text-6xl bgcard rounded-md top-0 bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 flex justify-center items-center z-20"><MdOutlinePlayCircleFilled /></span>
           </Link>
           <div className="sm:p-1 min-[320px]:p-2">
{/*              <div className="flex justify-between text-gray-400 text-xs">
             <p className=" font-norma dark:text-gray-400">
               {datee}
             </p>
             <p className="transition ease-in-out delay-150 duration-700 font-norma dark:text-gray-400 border text-center border-gray-400 px-1.5 rounded-full group-hover:text-green-600 group-hover:border-green-600">
               {media === 'tv' ? 'SS 1' : 'MOVIE'}
             </p>
             <div className="flex items-center font-norma dark:text-gray-400">
               <p><IoMdStar /></p>
               <p>{votee}</p>
             </div>
             </div> */}
             <Link href={link}>
               <h5 className="mb-2 sm:text-xs font-normal sm:font-semibold text-gray-100 dark:text-gray-300 text-sm group-hover:text-green-600 transition ease-in-out delay-150 duration-700">
                 {item.title || item.name}
               </h5>
             </Link>
           </div>
         </div>
        )})}
      {/* </div> */}
      </ScrollShadow>
      </>
  )
}

export default KnwnCards