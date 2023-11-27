
import Image from "next/image";
import Link from "next/link";
import { IoMdStar } from "react-icons/io";
import { MdOutlinePlayCircleFilled } from "react-icons/md";

interface Props {
  title: string;
  img: string;
  media: string;
  date: string;
  vote: number;
  id: number;
}

const MainCards = ({title,img,media,date,vote,id}: Props) => {
  const votee = `${String(vote).split('.')[0]}${String(vote).split('.')[1] ? '.'+ String(vote).split('.')[1][0] : ''}`;
  const datee = date?.split('-')[0];
  return (
        //   const path = item.title ? `/movie/${item.id}` : `/tv-show/${item.id}`;
            <div
              className="card group max-w-full min-h-full rounded-lg dark:bg-gray-800 dark:border-gray-700"
              key={title}
            >
              <Link href={'#'} className="relative">
                <Image
                  className="rounded-lg w-full h-auto shadow-inner"
                 src={`https://image.tmdb.org/t/p/w220_and_h330_face${img}`}
                  alt=""
                  width={500}
                  height={500}
                />
                <span className="hidden transition ease-in-out delay-150 duration-700 bgcard absolute text-6xl rounded-md top-0 bottom-0 left-0 right-0 group-hover:flex justify-center items-center"><MdOutlinePlayCircleFilled /></span>
              </Link>
              <div className="sm:p-1 min-[320px]:p-2">
                <div className="flex justify-between text-gray-400 text-xs">
                <p className=" font-norma dark:text-gray-400">
                  {datee}
                </p>
                <p className="transition ease-in-out delay-150 duration-700 font-norma dark:text-gray-400 border text-center border-gray-400 px-1.5 rounded-full group-hover:text-green-600 group-hover:border-green-600">
                  {media === 'tv'? 'SS 1' : 'MOVIE'}
                </p>
                <div className="flex items-center font-norma dark:text-gray-400">
                  <p><IoMdStar /></p>
                  <p>{votee}</p>
                </div>
                </div>
                <Link href={'#'}>
                  <h5 className="mb-2 sm:text-base font-semibold text-gray-100 dark:text-gray-300 min-[320px]:text-md group-hover:text-green-600 transition ease-in-out delay-150 duration-700">
                    {title}
                  </h5>
                </Link>
              </div>
            </div>

  )
}

export default MainCards