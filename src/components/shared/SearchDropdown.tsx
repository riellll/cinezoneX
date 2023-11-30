'use client'
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import SearchBar from "./SearchBar";

const SearchDropdown = () => {
  return (
    <Popover className="bg-opacity-0" placement="bottom-end">
      <PopoverTrigger>
        <Button 
        isIconOnly 
         variant="light" 
         className=" text-gray-100 hover:text-green-700"
        >
         <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        // variant="light"
        className="w-screen pr-10 bg-opacity-0 items-stretch"
      >
          <div className="grow flex">
            <SearchBar/>
          </div>
      </PopoverContent>
    </Popover>
  )
}

export default SearchDropdown