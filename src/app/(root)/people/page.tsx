
import PeopleCards from "@/components/cards/PeopleCards";
import Paginations from "@/components/shared/Paginations";
import { peopleImg } from "@/lib";

import { IoIosPlay } from "react-icons/io";

const page = () => {
  return (
    <div className="flex flex-col lg:flex-row px-5 gap-5 pt-16">
    <div className="flex w-full flex-col mt-10">
      <div className="flex flex-col sm:flex-row justify-start gap-5 items-center">
        <div className="flex justify-center items-center">
          <p className="bg-green-700 py-1 md:py-1.5 px-1 rounded mr-1">
            <IoIosPlay />
          </p>
          <p className="text-xl md:text-3xl font-bold text-gray-200">
          Popular People
          </p>
        </div>
      </div>
      <div className="gap-5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 mt-10 pb-5">
        {peopleImg.map((item,index) => (
       <PeopleCards image={item.img}/>
        ))}
      </div>
      <div className="flex justify-center items-center py-5 text-center">
        {/* <Paginations currentPage={searchParams.page} totalPage={total_pages} /> */}
      </div> 
  </div>
  </div>
  )
}

export default page