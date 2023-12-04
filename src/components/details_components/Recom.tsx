import React from 'react'
import MainCards from '../cards/MainCards'
import {ScrollShadow} from "@nextui-org/react";
interface Props{
  recommendations: any[],
  media: string
}

const Recom = ({recommendations,media}: Props) => {
  return (
    <>
    <h1 className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-300 md:text-lg lg:text-2xl dark:text-white">Recommendations</h1>
    <ScrollShadow orientation="horizontal" className="max-w-[950px]">
    <div className="flex gap-5">
        {recommendations.map((item: any) => (
          <MainCards
            key={item.id}
            title={item.title || item.name}
            img={item.poster_path}
            media={media}
            date={item.release_date ? item.release_date : item.first_air_date}
            vote={item.vote_average}
            id={item.id}
          />
        ))}
      </div>
      </ScrollShadow>
      </>
   )
}

export default Recom