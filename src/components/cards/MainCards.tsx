
import Image from "next/image";
import Link from "next/link";

const MainCards = () => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 sm:gap-5 items-center justify-between min-[320px]:grid-cols-2 min-[320px]:gap-3 min-[320px]:px-5 min-[320px]:mb-10 min-[320px]:mt-10">
        {list.map((item) => {
        //   const path = item.title ? `/movie/${item.id}` : `/tv-show/${item.id}`;
          return (
            <div
              className="group max-w-full min-h-full rounded-lg dark:bg-gray-800 dark:border-gray-700"
              key={item.title}
            >
              <Link href={'#'}>
                <Image
                  className="rounded-lg w-full h-auto shadow-inner"
                  src={item.img}
                  alt=""
                  width={500}
                  height={500}
                />
              </Link>
              <div className="sm:p-1 min-[320px]:p-2">
                <div className="flex justify-between text-gray-400 text-xs">
                <p className="mb-3 font-norma dark:text-gray-400">
                  {item.price}
                </p>
                <p className="transition ease-in-out delay-150 duration-700 mb-3 font-norma dark:text-gray-400 border border-gray-400 px-1.5 rounded-full group-hover:text-green-600 group-hover:border-green-600">
                  {"MOVIE"}
                </p>
                <p className="mb-3 font-norma dark:text-gray-400">
                  {item.price}
                </p>
                </div>
                <Link href={'#'}>
                  <h5 className="mb-2 sm:text-xl font-semibold text-gray-100 dark:text-gray-300 min-[320px]:text-md group-hover:text-green-600 transition ease-in-out delay-150 duration-700">
                    {item.title}
                  </h5>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
  )
}

export default MainCards