import { GetCreditsDetails } from "@/lib/fetchPersonDetails";
import ActingButton from "./ActingButton"
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
  

const ActingHistory = async () => {
    const query = ''
    const {cast,crew} = await GetCreditsDetails('974169')
    const acting = [...cast,...crew].filter((item: any) => {
        if(query){
            return item.media_type === query
        }else{
            return item
        }
    }).sort((a, b) => b.first_air_date?.split('-')[0] || b.release_date?.split('-')[0] - a.first_air_date?.split('-')[0] || a.release_date?.split('-')[0]);

 
  return (
    <>
<div className='flex justify-between mb-2'>
    <h1 className="py-2">Acting</h1>
    <div className='flex gap-5'>
    <ActingButton/>
    </div>
</div>
<div className="w-full  p-4 bg-[#879385] shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">

   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {acting.map((item: any) => {
                const date = item.first_air_date || item.release_date
                return(
            <li key={item.id} className="py-3 sm:py-4">
                <div className="flex items-center gap-5">
                    <div className={`flex-shrink-0 ${!date && 'mx-2.5'}`}>
                        {date.split('-')[0] || <span><MdOutlineHorizontalRule /></span>}
                    </div>
                    <p className="text-xs"><FaCircle /></p>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {item.title || item.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400 ml-4">
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