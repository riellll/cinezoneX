import Image from "next/image";
import Link from "next/link";
import React from "react";

const LongCards = () => {
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
    <div className="flex flex-col pr-5 gap-5 w-full lg:w-80">
      {list.map((item) => (
        <Link key={item.price} href={"#"} className="group grow flex items-center gap-4 bg-[#070706] rounded-lg hover:bg-green-700 transition ease-in-out delay-150 duration-700">
          <Image
            className="w-12 h-auto rounded-l-lg"
            src={item.img}
            width={500}
            height={500}
            alt="image"
          />
          <div className="font-medium text-gray-200 group-hover:text-gray-950 transition ease-in-out delay-150 duration-700">
            <div>{item.title}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-800 transition ease-in-out delay-150 duration-700">
              {item.price}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LongCards;
