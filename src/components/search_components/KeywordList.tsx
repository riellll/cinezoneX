import React from 'react'
import {Chip} from "@nextui-org/react";
import Link from 'next/link';

const KeywordList = ({keyword}:any) => {
  return (
    <div className="flex flex-wrap gap-4 mt-10">
        {keyword.map((item:any) => (
   <Link key={item.id} href={'#'}>
    <Chip color="default" className='text-gray-200 hover:border-green-700 hover:text-green-700' variant="bordered">{item.name}</Chip>
    </Link>
        ))}
  </div> 
  )
}

export default KeywordList