import LongCards from "@/components/cards/LongCards";
import LatestMovie from "@/components/home_components/LatestMovie";
import LatestTvShow from "@/components/home_components/LatestTvShow";
// import MainCards from "@/components/cards/MainCards";
import Recommended from "@/components/home_components/Recommended";
import TopShow from "@/components/home_components/TopShow";
import HeroSwiper from "@/components/shared/HeroSwiper";
import TrendingSwiper from "@/components/shared/TrendingSwiper";
import { heroSwiperData } from "@/lib";
import GetTrending from "@/lib/FetchTrending";

// import Image from "next/image";

export default async function Home() {

  const trendingDay = await GetTrending('day')
  const trendingWeek = await GetTrending('week')
  const [day, week] = await Promise.all([trendingDay, trendingWeek])
  return (
    <>
   {/* <main className=""> */}
    <div className="relative pb-48">
    <HeroSwiper trendWeek={heroSwiperData}/>
      <div className="absolute w-full bottom-0"> 
        <TrendingSwiper trendDay={day}/>
      </div>
    </div>

   <div className="flex flex-col lg:flex-row px-5 pt-24 gap-5">
    <div>
    <Recommended/>
    <LatestMovie/>
    <LatestTvShow/>
    </div>
    <div className="flex">
      <TopShow/>
    </div>
   </div>
    {/* </main> */}
    </>
  );
}
