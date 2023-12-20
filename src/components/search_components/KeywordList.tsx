import React from 'react'
import {Chip} from "@nextui-org/react";
import Link from 'next/link';

const KeywordList = ({keyword}:any) => {
  return (
    <div className="flex flex-wrap gap-4 mt-10">
        {keyword.map((item:any) => (
   <Link key={item.id} href={`/keyword/${item.id}-${item.name}`}>
    <Chip color="default" className='text-base bg-[#242924] font-normal p-1 rounded-md hover:text-gray-400 cursor-pointer border border-[#242924] text-gray-300 dark:text-gray-400' variant="bordered">{item.name}</Chip>
    </Link>
        ))}
  </div> 
  )
}

export default KeywordList