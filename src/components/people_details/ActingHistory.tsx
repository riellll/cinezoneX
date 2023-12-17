import { GetCreditsDetails } from "@/lib/fetchPersonDetails";
import ActingButton from "./ActingButton"
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
interface Props {
    id: string,
    media: string
  }

const ActingHistory = async ({id,media}: Props) => {

    const {cast,crew} = await GetCreditsDetails(id)
    const acting = [...cast,...crew].filter((item: any) => {
        if(media === 'all'){
            return item
        }else{
            return item.media_type === media
        }
    }).sort((a, b) => {
       const dateA: any = new Date(b.first_air_date).getTime() || new Date(b.release_date).getTime()
       const dateB: any = new Date(a.first_air_date).getTime() || new Date(a.release_date).getTime()

       return dateA - dateB;
    });
 
  return (
    <>
<div className='flex justify-between mb-2'>
    <h1 className="py-2 text-2xl">Acting</h1>
    <div className='flex gap-5'>
    <ActingButton/>
    </div>
</div>
<div className="w-full  px-4 py-2 bg-[#242924] shadow sm:px-8 sm:py-4 dark:bg-gray-800 dark:border-gray-700">

   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {acting.map((item: any) => {
                const date = item.first_air_date || item.release_date
                const link = item.media_type === 'tv' ? `/tv/details/${item.id}` : `/movie/details/${item.id}`
                return(
            <li key={item.id} className="py-3 sm:py-4">
                <div className="flex items-center gap-5">
                    <div className={`flex-shrink-0 ${!date && 'mx-2.5'}`}>
                        {date?.split('-')[0] || <span><MdOutlineHorizontalRule /></span>}
                    </div>
                    <p className="text-xs"><FaCircle /></p>
                    <div className="flex-1 min-w-0">
                        <Link href={link} className="text-sm font-medium text-gray-200 hover:text-green-600 text-ellipsis dark:text-white">
                            {item.title || item.name}
                        </Link>
                        <p className="text-sm text-gray-400 truncate dark:text-gray-400 ml-4">
                            <span>{item.episode_count && `(${item.episode_count} episode${item.episode_count === 1 ? '' : 's'})`}</span>{` as ${item.character}`}
                        </p>
                    </div>
                </div>
            </li>
            )})}
        </ul>
   </div>
</div>
</>
  )
}

export default ActingHistory