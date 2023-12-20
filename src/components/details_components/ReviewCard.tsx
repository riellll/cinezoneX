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
  link: string | undefined;
}
const ReviewCard = ({
img,
name,
created,
id,
rating,
allResults,
content,
link
}: Props) => {
  const image = img ? `https://image.tmdb.org/t/p/w220_and_h330_face${img}` : `/error.png`
  function formatDate(inputDate: string): string {
    const date = new Date(inputDate);
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  return (
     <div key={id} className='max-w-[200rem]'>
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
      <p className='whitespace-pre-line ...'>{content}</p>
    </CardBody>
    <Divider/>
    {allResults ? <CardFooter>
      <Link
        showAnchorIcon
        href={link}
        className='text-default-300'
      >
       Read All Reviews
      </Link>
    </CardFooter> : ''}
  </Card>
   </div>
  )
}

export default ReviewCard