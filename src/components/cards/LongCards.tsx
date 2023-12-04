import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdStar } from "react-icons/io";
interface Props {
  title: string;
  img: string;
  media: string;
  date: string;
  vote: number;
  id: number;
  index: number | null;
}


const LongCards = ({title,img,media,date,vote,id,index}: Props) => {
  const image = img ? `https://image.tmdb.org/t/p/w220_and_h330_face${img}` : `/error.png`
  const votee = `${String(vote).split('.')[0]}${String(vote).split('.')[1] ? '.'+ String(vote).split('.')[1][0] : ''}`;
  const datee = date?.split('-')[0];
  const link = media === 'tv' ? `/tv/details/${id}` : `/movie/details/${id}`
  return (
        <Link key={id} href={link} className="group grow flex items-center gap-4 bg-[#070706] rounded-lg hover:bg-green-700 transition ease-in-out delay-150 duration-700">
          <Image
            className="w-12 h-auto rounded-l-lg"
            src={image}
            width={500}
            height={500}
            alt="image"
          />
          <div className="font-medium text-gray-200 group-hover:text-gray-950 transition ease-in-out delay-150 duration-700">
            <div className="flex gap-1 md:text-xs font-normal text-gray-500 dark:text-gray-400 group-hover:text-gray-800 transition ease-in-out delay-150 duration-700">
                    <p>{`${media ? media.toUpperCase() : '-'}`}</p>
                    <p>{`/`}</p>
                    <p>{` ${datee}`}</p>
                    <p>{`/`}</p>
            <div className="flex items-center dark:text-gray-400">
                  <p className="text-sm"><IoMdStar /></p>
                  <p>{votee}</p>
                    </div>
            </div>
            <div>{title}</div>
          </div>
          {index && <span className="absolute left-0 transition ease-in-out delay-150 duration-700 text-green-700 group-hover:bg-green-700 group-hover:text-gray-950 bg-gray-950 text-base font-bold px-2 border-2 border-green-700 rounded-full mr-3">{index}</span>}
        </Link>
  );
};

export default LongCards;
