
import Image from "next/image";
import Link from "next/link";
import { IoMdStar } from "react-icons/io";

interface Props {
  title: string;
  img: string;
  price: string;
}

const MainCards = ({title,img,price}: Props) => {

  return (
        //   const path = item.title ? `/movie/${item.id}` : `/tv-show/${item.id}`;
            <div
              className="group max-w-full min-h-full rounded-lg dark:bg-gray-800 dark:border-gray-700"
              key={title}
            >
              <Link href={'#'}>
                <Image
                  className="rounded-lg w-full h-auto shadow-inner"
                 src={img}
                  alt=""
                  width={500}
                  height={500}
                />
              </Link>
              <div className="sm:p-1 min-[320px]:p-2">
                <div className="flex justify-between text-gray-400 text-xs">
                <p className="mb-3 font-norma dark:text-gray-400">
                  {price}
                </p>
                <p className="transition ease-in-out delay-150 duration-700 mb-3 font-norma dark:text-gray-400 border border-gray-400 px-1.5 rounded-full group-hover:text-green-600 group-hover:border-green-600">
                  {"MOVIE"}
                </p>
                <div className="flex items-center mb-3 font-norma dark:text-gray-400">
                  <p className="mt-1"><IoMdStar /></p>
                  <p>{price}</p>
                </div>
                </div>
                <Link href={'#'}>
                  <h5 className="mb-2 sm:text-xl font-semibold text-gray-100 dark:text-gray-300 min-[320px]:text-md group-hover:text-green-600 transition ease-in-out delay-150 duration-700">
                    {title}
                  </h5>
                </Link>
              </div>
            </div>

  )
}

export default MainCards