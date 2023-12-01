import React from 'react'
import MainCards from '../cards/MainCards'

const TvList = ({tv}: any) => {
  return (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 sm:gap-5 items-center justify-between min-[320px]:grid-cols-2 min-[320px]:gap-3 min-[320px]:mb-10 min-[320px]:mt-10">
       {tv.map((item: any) => (
      <MainCards
      key={item.id}
      title={item.title || item.name}
      img={item.poster_path}
      media={'tv'}
      date={item.release_date ? item.release_date : item.first_air_date}
      vote={item.vote_average}
      id={item.id}
      />
    ))}
  </div>
  )
}

export default TvList