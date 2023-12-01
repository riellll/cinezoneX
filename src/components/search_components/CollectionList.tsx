import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'
import { IoMdStar } from 'react-icons/io'
import { MdOutlinePlayCircleFilled } from 'react-icons/md'

const CollectionList = ({collection}: any) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 sm:gap-5 items-center justify-between min-[320px]:grid-cols-2 min-[320px]:gap-3 min-[320px]:mb-10 min-[320px]:mt-10">
    {collection.map((item:any,index:number) => {
            const image = item.poster_path ? `https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}` : `/error.png`
        return(
            <div
            className="relative group cards selection: max-w-full min-h-full rounded-lg dark:bg-gray-800 dark:border-gray-700"
            key={item.id}
          >
            <Link href={'#'} className="relative imgcards">
            {/* <span className=" transition ease-in-out delay-150 duration-700 absolute rounded-md top-0 bottom-0 left-0 right-0"><MdOutlinePlayCircleFilled /></span> */}
            <Suspense fallback={<h1 className="w-full bg-red-600 text-gray-200">Loading</h1>}>
              <Image
                className="rounded-lg w-full h-auto shadow-inner"
                src={image}
                alt={item.name}
                width={500}
                height={500}
              />
                </Suspense>
              <span className="transition ease-in-out delay-300 duration-1000 absolute text-6xl bgcard rounded-md top-0 bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 flex justify-center items-center"><MdOutlinePlayCircleFilled /></span>
            </Link>
            <div className="sm:p-1 min-[320px]:p-2">
              <div className="flex justify-center mb-2 text-gray-400 text-xs">
              {/* <p className=" font-norma dark:text-gray-400">
                {'datee'}
              </p> */}
              <p className="transition ease-in-out delay-150 duration-700 font-norma dark:text-gray-400 border text-center border-gray-400 px-1.5 rounded-full group-hover:text-green-600 group-hover:border-green-600">
                {'COLLECTIONS'}
              </p>
              {/* <div className="flex items-center font-norma dark:text-gray-400">
                <p><IoMdStar /></p>
                <p>{'votee'}</p>
              </div> */}
              </div>
              <Link href={'#'}>
                <h5 className="mb-2 sm:text-base font-normal sm:font-semibold text-gray-100 dark:text-gray-300 text-md group-hover:text-green-600 transition ease-in-out delay-150 duration-700">
                  {item.name}
                </h5>
              </Link>
            </div>
          </div>
        )
    })}

  </div>
  )
}

export default CollectionList