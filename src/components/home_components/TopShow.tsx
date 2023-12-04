"use client";
import useSWR from "swr";
import { useEffect, useState } from "react";
import LongCards from "../cards/LongCards";
import { IoIosPlay } from "react-icons/io";
import { useRouter } from "next/navigation";

import GetTrending from "@/lib/FetchTrending";
import SmallCardsLoading from "../shared/SmallCardsLoading";
// interface Props {
//   topShow: any;

// }

const TopShow = () => {
  const [tabs, setTabs] = useState("day");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);


  useEffect(() => {
    setLoading(true)
    async function getData() {
      const getTrending = await GetTrending(tabs);
      setData(getTrending.results);
      // console.log(getTrending)
      setLoading(false)
    }
    getData();
  }, [tabs]);

  return (
    <div className="grow flex w-full flex-col justify-items-stretch mt-10">
      <div className="hidden pr-10 mt-6 md:block">
        <div className="relative w-full h-0 pb-96 pr-20">
          <iframe
            src="https://giphy.com/embed/7SrHwak3yoO9a"
            width="100%"
            height="100%"
            className="absolute giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="flex justify-start items-center mb-10">
        <div className="flex justify-center items-center mr-5">
          <p className="bg-green-700 py-1.5 px-1 rounded mr-1">
            <IoIosPlay />
          </p>
          <p className="text-3xl font-bold text-gray-200">TOP 9</p>
        </div>
        <button
          onClick={() => setTabs("day")}
          className={`${
            tabs === "day"
              ? "text-green-700 border-green-700"
              : "text-gray-500 border-gray-500 hover:text-green-700 hover:border-green-700"
          } border font-medium rounded-lg text-sm px-3 py-1 text-center me-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600`}
        >
          Day
        </button>
        <button
          onClick={() => setTabs("week")}
          className={`${
            tabs === "week"
              ? "text-green-700 border-green-700"
              : "text-gray-500 border-gray-500 hover:text-green-700 hover:border-green-700"
          } border font-medium rounded-lg text-sm px-3 py-1 text-center me-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600`}
        >
          Week
        </button>
      </div>

        <div className="relative flex flex-col gap-3 w-full pl-3 lg:w-80">
          {!loading || <SmallCardsLoading/>}
          {loading || data
            ?.filter((e: any, i: any) => i < 9)
            .map((item: any, index: number) => (
              <LongCards
                key={index}
                title={item.title || item.name}
                img={item.poster_path}
                media={item.media_type}
                date={item.release_date ? item.release_date : item.first_air_date}
                vote={item.vote_average}
                id={item.id}
                index={index + 1}
              />
            ))}
        </div>

    </div>
  );
};

export default TopShow;
