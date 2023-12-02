import Image from 'next/image'
import Link from 'next/link'
import { FaHeart } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const HeroDetails = () => {
  return (
   <>
    <Image
    src={"/error.png"}
    alt="image"
    width={500}
    height={500}
    className="w-auto lg:w-80 h-auto z-10"
    />
    <div>
    <h2 className="text-4xl font-extrabold dark:text-white">Payments tool for companies <span className="font-normal">{`(2000)`}</span></h2>
    <div className="flex gap-1 pt-1">
      <p className="px-1 border border-gray-900">{`PG `}</p>
      <p>{` Crime,`}</p>
      <p>{`Drama`}</p>
    </div>
    <div className="flex gap-3 pt-5">
      <p className="bg-gray-950 text-gray-200 p-4 rounded-full">70%</p>
      <p className="bg-gray-950 text-gray-200 p-5 rounded-full"><FaListUl /></p>
      <p className="bg-gray-950 text-gray-200 p-5 rounded-full"><FaHeart /></p>
      <p className="bg-gray-950 text-gray-200 p-5 rounded-full"><FaBookmark /></p>
      <p className="bg-gray-950 text-gray-200 p-5 rounded-full"><FaStar /></p>
    </div>
<p className="my-4 text-lg text-gray-500">Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.</p>
<div>
<h1 className="font-semibold text-lg">Overview</h1>
<p className="mb-4 text-base font-normal text-gray-900 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
</div>
<Link href="#" className="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline">
Read more
<svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</Link>
    </div>
   </>
  )
}

export default HeroDetails