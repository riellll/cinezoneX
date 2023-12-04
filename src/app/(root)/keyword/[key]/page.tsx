
import MainCards from "@/components/cards/MainCards";
import Paginations from "@/components/shared/Paginations";
import { GetLatestTvShow} from "@/lib/fetchData";
import { GetKeyword } from "@/lib/fetchKeywords";

import { IoIosPlay } from "react-icons/io";
import SelectKey from "./SelectKey";
import Link from "next/link";



const page = async ({ params, searchParams }: { params: { key: string }, searchParams: { [page: string]: string } }) => {
    const [key,media = 'movie'] = params.key.split('-')
      const { results: keywords, total_pages } = await GetKeyword(key,searchParams.page,media);

  return (
        <div className="flex flex-col lg:flex-row px-5 gap-5 pt-16">
      <div className="flex w-full flex-col mt-10">
        <div className="flex flex-col sm:flex-row justify-start gap-5 items-center">
          <div className="flex justify-center items-center">
            <p className="bg-green-700 py-1 md:py-1.5 px-1 rounded mr-1">
              <IoIosPlay />
            </p>
            <p className="text-xl md:text-3xl font-bold text-gray-200">
            {`${key.split("%20").join(" ")}`}
            </p>
          </div>
            <div>
            <div>
            <Link
              href={`/keyword/${key}-movie`}
              className={`${
                media === "movie"
                  ? "text-green-700 border-green-700"
                  : "text-gray-500 border-gray-500 hover:text-green-700 hover:border-green-700"
              } border font-medium rounded-lg text-sm px-3 py-1 text-center me-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600`}
            >
              Movies
            </Link>
            <Link
              href={`/keyword/${key}-tv`}
              className={`${
                media === "tv"
                  ? "text-green-700 border-green-700"
                  : "text-gray-500 border-gray-500 hover:text-green-700 hover:border-green-700"
              } border font-medium rounded-lg text-sm px-3 py-1 text-center me-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600`}
            >
              TV Shows
            </Link>
          </div>
            </div>
            <div>
                <SelectKey/>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 sm:gap-5 items-center justify-between min-[320px]:grid-cols-2 min-[320px]:gap-3 min-[320px]:mb-10 min-[320px]:mt-10">
          {keywords.map((item: any) => (
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
        <div className="flex justify-center items-center py-5 text-center">
          <Paginations currentPage={searchParams.page} totalPage={total_pages} query=''/>
        </div>
      </div>
      </div>
  )
}

export default page