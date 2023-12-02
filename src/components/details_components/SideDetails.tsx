import { FaLink } from "react-icons/fa6";
import {Tooltip, Button} from "@nextui-org/react";
const SideDetails = () => {
  return (
   <div>
      <Tooltip showArrow={true} content="Visit Homepage" classNames={{
        base: [
          // arrow color
          "before:bg-gray-950 dark:before:bg-white",
        ],
        content: [
          "py-2 px-4 shadow-xl",
          "text-gray-300 bg-gray-950",
        ],
      }}>
      <Button isIconOnly className="text-2xl mb-3"><FaLink /></Button>
    </Tooltip>
   <h1 className="text-base font-semibold leading-none tracking-tight text-gray-300 md:text-base lg:text-lg dark:text-white">Status</h1>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-3">Here at Flowbite</p>
      
      <h1 className="text-base font-semibold leading-none tracking-tight text-gray-300 md:text-base lg:text-lg dark:text-white">Original Language</h1>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-3">Here at Flowbite</p>
      
      <h1 className="text-base font-semibold leading-none tracking-tight text-gray-300 md:text-base lg:text-lg dark:text-white">Budget</h1>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-3">Here at Flowbite</p>
      
      <h1 className="text-base font-semibold leading-none tracking-tight text-gray-300 md:text-base lg:text-lg dark:text-white">Revenue</h1>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-3">Here at Flowbite</p>
      
      <h1 className="text-base font-semibold leading-none tracking-tight text-gray-300 md:text-base lg:text-lg dark:text-white mb-2">Keywords</h1>
      <div className="flex flex-wrap gap-3">
      <p className="text-base font-normal p-1 rounded-md hover:text-gray-300 cursor-pointer border text-gray-500 dark:text-gray-400">Here at Flowbite</p>
      <p className="text-base font-normal p-1 rounded-md hover:text-gray-300 cursor-pointer border text-gray-500 dark:text-gray-400">Here at Flowbite</p>
      <p className="text-base font-normal p-1 rounded-md hover:text-gray-300 cursor-pointer border text-gray-500 dark:text-gray-400">Here at Flowbite</p>
      <button className="text-base font-normal p-1 rounded-md hover:text-gray-300 cursor-pointer border text-gray-500 dark:text-gray-400">Here at Flowbite</button>    
   </div>
   </div>

  )
}

export default SideDetails