import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  title: string;
  img: string;
  price: string;
  index: number;
}


const LongCards = ({title,img,price,index}: Props) => {

  return (
        <Link key={price} href={"#"} className="group grow flex items-center gap-4 bg-[#070706] rounded-lg hover:bg-green-700 transition ease-in-out delay-150 duration-700">
          <Image
            className="w-12 h-auto rounded-l-lg"
            src={img}
            width={500}
            height={500}
            alt="image"
          />
          <div className="font-medium text-gray-200 group-hover:text-gray-950 transition ease-in-out delay-150 duration-700">
            <div>{title}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-800 transition ease-in-out delay-150 duration-700">
              {price}
            </div>
          </div>
          {index + 1 && <span className="absolute left-0 text-green-700 bg-gray-950 text-base font-bold px-2 border-2 border-green-700 rounded-full mr-3">{index + 1}</span>}
        </Link>
  );
};

export default LongCards;
