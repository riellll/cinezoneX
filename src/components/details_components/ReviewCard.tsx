import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { FaStar } from "react-icons/fa";
interface Props {
  img: string | undefined;
  name: string;
  created: string;
  id: string;
  rating: number | undefined;
  allResults: number | undefined;
  content: string | undefined;
}
const ReviewCard = ({
img,
name,
created,
id,
rating,
allResults,
content
}: Props) => {
  const image = img ? `https://image.tmdb.org/t/p/w220_and_h330_face${img}` : `/error.png`
  function formatDate(inputDate: string): string {
    const date = new Date(inputDate);
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  return (
     <div className='max-w-[200rem]'>
        <div className='mb-4'>
        <ul className="flex flex-wrap -mb-px items-center  text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
        <li className="me-2 mr-10" role="presentation">
        <h1 className="text-xl font-bold leading-none tracking-tight text-gray-300 md:text-lg lg:text-2xl dark:text-white">Social</h1>
        </li>
        <li className="me-2" role="presentation">
            <button className="inline-block p-4 border-b-2 rounded-t-lg text-gray-200 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Reviews <span className='pl-1 text-gray-300'>{allResults}</span></button>
        </li>
    </ul>
        </div>
    <Card className="max-w-full bg-[#242924] text-gray-200">
    <CardHeader className="flex gap-3">
      <Image
        alt="nextui logo"
        height={40}
        radius="sm"
        src={image}
        width={40}
      />
      <div className="flex flex-col">
        <p className="text-md font-semibold">{name}</p>
        <div className='flex gap-2'>
        <p className="flex gap-1 px-1 items-center justify-start rounded-lg bg-black text-small text-default-200"><span className='text-xs'><FaStar /></span>{String(rating)}</p>
        <p className="text-small font-normal">Written by <span>{name}</span> on <span>{formatDate(created)}</span></p>
        </div>
      </div>
    </CardHeader>
    <Divider/>
    <CardBody>
      <p>{content}</p>
    </CardBody>
    <Divider/>
    <CardFooter>
      <Link
        isExternal
        showAnchorIcon
        href="https://github.com/nextui-org/nextui"
        className='text-default-300'
      >
       Read All Reviews
      </Link>
    </CardFooter>
  </Card>
   </div>
  )
}

export default ReviewCard