import LongCards from "@/components/cards/LongCards";
import LatestMovie from "@/components/home_components/LatestMovie";
import LatestTvShow from "@/components/home_components/LatestTvShow";
// import MainCards from "@/components/cards/MainCards";
import Recommended from "@/components/home_components/Recommended";
import TopShow from "@/components/home_components/TopShow";
import GetTrending from "@/lib/FetchTrending";
// import HeroSwiper from "@/components/shared/HeroSwiper";
// import Image from "next/image";

export default async function Home() {
  // const trending = await GetTrending('week')
  return (
    <>
   {/* <main className=""> */}
   <div className="flex flex-col lg:flex-row px-5 gap-5">
    <div>
    <Recommended/>
    {/* <LatestMovie/> */}
    {/* <LatestTvShow/> */}
    </div>
    <div className="flex">
      <TopShow/>
    </div>
   </div>
    {/* </main> */}
    </>
  );
}
