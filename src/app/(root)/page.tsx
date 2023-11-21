import LongCards from "@/components/cards/LongCards";
import MainCards from "@/components/cards/MainCards";
// import HeroSwiper from "@/components/shared/HeroSwiper";
// import Image from "next/image";

export default function Home() {
  return (
    <>
   {/* <main className=""> */}
   <div className="flex">
    <MainCards/>
    <div className="grow">
      <div>
        <h1>TOP 9</h1>
      </div>
      <LongCards/>
    </div>
   </div>
    {/* </main> */}
    </>
  );
}
