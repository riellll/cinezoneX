import LongCards from "@/components/cards/LongCards";
import MainCards from "@/components/cards/MainCards";
import Paginations from "@/components/shared/Paginations";
import { GetMovieRecommendations, GetTopRatedMovie } from "@/lib/fetchData";
import { IoIosPlay } from "react-icons/io";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { results: topRatedMovie, total_pages } = await GetTopRatedMovie(
    searchParams.page
  );
  const { results: movieRecomm } = await GetMovieRecommendations(238);
  return (
    <div className="flex flex-col lg:flex-row px-5 gap-5 pt-16">
      <div className="flex w-full flex-col mt-10">
        <div className="flex flex-col sm:flex-row justify-start gap-5 items-center">
          <div className="flex justify-center items-center">
            <p className="bg-green-700 py-1 md:py-1.5 px-1 rounded mr-1">
              <IoIosPlay />
            </p>
            <p className="text-xl md:text-3xl font-bold text-gray-200">
              TOP RATED MOVIES
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 sm:gap-5 items-center justify-between min-[320px]:grid-cols-2 min-[320px]:gap-3 min-[320px]:mb-10 min-[320px]:mt-10">
          {topRatedMovie.map((item: any) => (
            <MainCards
            key={item.id}
            title={item.title || item.name}
            img={item.poster_path}
            media={'movie'}
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

      <div className="basis-1/4 flex w-full flex-col justify-items-stretch mt-10">
        <div className="hidden pr-10 md:block">
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
        <div className="flex justify-start items-center mb-7">
          <div className="flex justify-center items-center mr-5">
            <p className="bg-green-700 py-1 md:py-1.5 px-1 rounded mr-1">
              <IoIosPlay />
            </p>
            <p className="text-xl md:text-3xl font-bold text-gray-200">
              SUGGESTIONS
            </p>
          </div>
        </div>
        <div className="relative flex flex-col gap-3 w-full lg:w-80">
          {movieRecomm
            .filter((e: any, i: any) => i < 10)
            .map((item: any, index: number) => (
              <LongCards
                key={item.title}
                title={item.title || item.name}
                img={item.poster_path}
                media={item.media_type}
                date={
                  item.release_date ? item.release_date : item.first_air_date
                }
                vote={item.vote_average}
                id={item.id}
                index={null}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default page;
