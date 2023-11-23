import LongCards from "@/components/cards/LongCards";
// import MainCards from "@/components/cards/MainCards";
import Recommended from "@/components/home_components/Recommended";
import TopShow from "@/components/home_components/TopShow";
// import HeroSwiper from "@/components/shared/HeroSwiper";
// import Image from "next/image";

export default function Home() {
  return (
    <>
   {/* <main className=""> */}
   <div className="flex flex-col lg:flex-row">
    <Recommended/>
    <div className="flex">
      <TopShow/>
    </div>
   </div>
    {/* </main> */}
    </>
  );
}
