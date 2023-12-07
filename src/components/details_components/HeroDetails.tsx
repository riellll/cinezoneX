import {Image} from "@nextui-org/react";
import Link from 'next/link'
import { TbPointFilled } from "react-icons/tb";
import {Tooltip, Button} from "@nextui-org/react";
import HeroButton from './HeroButton';
interface Props {
  title: string,
  img: string,
  overview: string,
  genres: any[],
  vote: number,
  tagline: string,
  runtime: number,
  date: string,
  countries: string,
}
const HeroDetails = ({title,
img,
overview,
genres,
vote,
tagline,
runtime,
date,
countries}: Props) => {
  const image = img ? `https://image.tmdb.org/t/p/w220_and_h330_face${img}` : `/error.png`
  const votes = `${String(vote).split('.')[0]}${String(vote).split('.')[1] ? String(vote).split('.')[1][0] : '0'}%`
  
  function time_convert(num:number)
 { 
  let hours = Math.floor(num / 60);  
  let minutes = num % 60;
  return `${hours ? hours+'h' : ''}${minutes ? minutes+'m' : ''}`;         
}

  return (
   <>
   <div className="flex max-w-full min-h-full justify-center items-center">
    <Image
    src={image}
    alt="image"
    width={300}
    height={300}
    className="w-36 sm:w-full h-auto z-10"
    />
    </div>
    <div className="lg:col-start-2 lg:col-span-2">
    <h2 className="sm:text-4xl text-xl font-extrabold dark:text-white">{title}<span className="font-normal">{`(${date.split('-')[0]})`}</span></h2>
    <div className="flex flex-wrap items-center gap-1 pt-1">
      <p className="px-1 border border-gray-900">{`PG`}</p>
      <p>{date}</p>
      <p>{`(${countries})`}</p>
      <p><TbPointFilled /></p>
      {genres.map((item, index)=> (
      <p key={index}>{`${item.name}${index + 1 < genres.length ? ',' : ''}`}</p>
      ))}
      <p><TbPointFilled /></p>
      <p>{time_convert(runtime)}</p>
    </div>
    <div className="flex flex-wrap gap-3 pt-4">
        <Tooltip showArrow={true} content="User Score" classNames={{
        base: [
          // arrow color
          "before:bg-gray-950 dark:before:bg-white",
        ],
        content: [
          "py-2 px-4 shadow-xl",
          "text-gray-300 bg-gray-950",
        ],
      }}>
      <p className="bg-gray-950 text-gray-200 p-3 sm:p-4 text-sm sm:text-base rounded-full cursor-pointer">{votes}</p>
    </Tooltip>
    <HeroButton/>
    </div>
    <p className="my-4 text-lg text-gray-500">{tagline}</p>
    <div>
    <h1 className="font-semibold text-lg">Overview</h1>
    <p className="mb-4 text-sm text-ellipsis overflow-hidden sm:text-base font-normal text-gray-950 dark:text-gray-400">{overview}</p>
    </div>
    </div>
   </>
  )
}

export default HeroDetails