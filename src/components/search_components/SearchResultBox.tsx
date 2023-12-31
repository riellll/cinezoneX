import Link from 'next/link'
import React from 'react'
interface Props {
    searchQuery: string | undefined
    totalResult: number[]
}

const SearchResultBox = ({searchQuery,totalResult}: Props) => {

    const data = [
        {searchName: 'Movies', resultNum: totalResult[0], query: 'movie'},
        {searchName: 'Tv Shows', resultNum: totalResult[1], query: 'tv'},
        {searchName: 'People', resultNum: totalResult[2], query: 'people'},
        {searchName: 'Collections', resultNum: totalResult[3], query: 'collection'},
        {searchName: 'Keywords', resultNum: totalResult[4], query: 'keyword'},
    ];

  return (
<div className="w-full max-w-full lg:max-w-sm bg-none border h-fit border-green-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
  
<h5 className="mb-3 p-4 text-base font-semibold bg-green-700 rounded-t text-gray-200 md:text-xl dark:text-white">
Search Result
</h5>

<ul className="my-4 lg:block flex lg:overflow-hidden overflow-x-auto">
{data.map((item,index) => {
    // const navigate = page ? `?page=${page}&query=${item.query}` : `?query=${item.query}`
    return(
<li key={index}>
<Link href={`?media=${item.query}`} 
className={`flex items-center mb-2 p-3 text-base font-bold text-gray-300 ${!searchQuery && item.query === 'movie' && 'bg-[#242924]'} ${item.query === searchQuery && 'bg-[#242924]'} hover:bg-[#242924] group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white`}>
<span className="flex-1 ms-3 whitespace-nowrap">{item.searchName}</span>
<span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-300 bg-gray-600 rounded dark:bg-gray-700 dark:text-gray-400">{item.resultNum}</span>
</Link>
</li>
    )})}

</ul>
</div>
  )
}

export default SearchResultBox