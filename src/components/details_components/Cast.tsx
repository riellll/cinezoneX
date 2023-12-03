
import React from 'react'
import { GetPopularPeople } from "@/lib/fetchData";
import { ScrollShadow } from '@nextui-org/react';
import PeopleCards from '../cards/PeopleCards';
import Link from 'next/link';
interface Props {
  cast: any[]
}
const Cast = async ({cast}: Props) => {
      const { results: people, total_pages } = await GetPopularPeople('1');
  return (
<>
    <h1 className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-300 md:text-lg lg:text-2xl dark:text-white">Series Cast</h1>
    <div className="gap-5 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 mt-5">
        {cast.filter((e: any, i: any) => i < 9).map((item: any,index: number) => (
          <PeopleCards key={item.id} img={item.profile_path} name={item.name} id={item.id} character={item.character}/>
          ))}
           <div
              className="flex justify-center items-center max-w-full min-h-full rounded-lg dark:bg-gray-800 dark:border-gray-700"
            >
                <Link href={'#'}>
                  <h5 className="mb-2 sm:text-base font-normal sm:font-semibold text-gray-100 dark:text-gray-300 text-md hover:text-green-600 transition ease-in-out delay-150 duration-700">
                    view more
                  </h5>
                </Link>
            </div>
      </div>
</>
  )
}

export default Cast