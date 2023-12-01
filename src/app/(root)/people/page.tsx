
import PeopleCards from "@/components/cards/PeopleCards";
import Paginations from "@/components/shared/Paginations";
import { peopleImg } from "@/lib";
import { GetPopularPeople } from "@/lib/fetchData";

import { IoIosPlay } from "react-icons/io";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { results: people, total_pages } = await GetPopularPeople(searchParams.page);
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
        {people.map((item: any,index: number) => (
          <PeopleCards key={item.id} img={item.profile_path} name={item.name} id={item.id}/>
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