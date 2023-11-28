import MainCards from "../cards/MainCards";
import { IoIosPlay } from "react-icons/io";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { GetLatestTvShow } from "@/lib/fetchData";

const LatestTvShow = async () => {
  const { results } = await GetLatestTvShow("1");

  return (
    <>
      <div className="flex w-full flex-col mt-10">
        <div className="flex flex-col sm:flex-row justify-between gap-5 items-center">
          <div className="flex justify-center items-center">
            <p className="bg-green-700 py-1.5 px-1 rounded mr-1">
              <IoIosPlay />
            </p>
            <p className="text-3xl font-bold text-gray-200">LATEST TV SHOWS</p>
          </div>
          <div>
            <Link
              href={"/tv"}
              className={`flex justify-center items-center gap-1 text-gray-500 border-gray-500 hover:text-green-700 hover:border-green-700 border rounded-full text-xs px-3 py-1 text-center me-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600`}
            >
              <p>view more</p>
              <p>
                <BsArrowUpRight />
              </p>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 sm:gap-5 items-center justify-between min-[320px]:grid-cols-2 min-[320px]:gap-3 min-[320px]:mb-10 min-[320px]:mt-7">
          {results
            .filter((e: any, i: any) => i < 14)
            .map((item: any) => (
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
      </div>
    </>
  );
};

export default LatestTvShow;
