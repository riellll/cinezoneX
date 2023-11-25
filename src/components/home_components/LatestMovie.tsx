import Link from "next/link";
import MainCards from "../cards/MainCards";
import { BsArrowUpRight } from "react-icons/bs";
import { IoIosPlay } from "react-icons/io";

const LatestMovie = () => {
            const list = [
      {
        title: "Orange",
        img: "/error.png",
        price: "$5.50",
      },
      {
        title: "Tangerine",
        img: "/error.png",
        price: "$3.00",
      },
      {
        title: "Raspberry",
        img: "/error.png",
        price: "$10.00",
      },
      {
        title: "Lemon",
        img: "/error.png",
        price: "$5.30",
      },
      {
        title: "Avocado",
        img: "/error.png",
        price: "$15.70",
      },
      {
        title: "Lemon 2",
        img: "/error.png",
        price: "$8.00",
      },
      {
        title: "Banana",
        img: "/error.png",
        price: "$7.50",
      },
      {
        title: "Watermelon",
        img: "/error.png",
        price: "$12.20",
      },
    ];
  return (
            <>
      <div className="flex w-full flex-col mt-10">
        <div className="flex flex-col sm:flex-row justify-between gap-5 mx-5 items-center">
            <div className="flex justify-center items-center">
              <p className="bg-green-700 py-1.5 px-1 rounded mr-1"><IoIosPlay /></p>
            <p className="text-3xl font-bold text-gray-200">LATEST MOVIES</p>
            </div>
            <div>
          <Link
            href={"#"}
            className={`flex justify-center items-center gap-1 text-gray-500 border-gray-500 hover:text-green-700 hover:border-green-700 border rounded-full text-xs px-3 py-1 text-center me-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600`}
          >
            <p>view more</p>
            <p><BsArrowUpRight /></p>
          </Link>
          </div>
        </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 sm:gap-5 items-center justify-between min-[320px]:grid-cols-2 min-[320px]:gap-3 min-[320px]:mb-10 min-[320px]:mt-10">
                {list.map((item: any) => (
                <MainCards key={item.title} title={item.title} img={item.img} price={item.price} />
                ))}
               </div> 
      </div>
    </>
  )
}

export default LatestMovie