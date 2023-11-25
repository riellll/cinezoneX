'use client'
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

const SearchDropdown = () => {
  return (
    <Popover className="bg-opacity-0" placement="bottom-end">
      <PopoverTrigger>
        <Button 
        isIconOnly 
         variant="light" 
        >
         <svg
                  className="w-5 h-5 text-gray-100"
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
        className="w-96 bg-opacity-0"
      >
          <div className="flex">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
        <div className="relative w-96">
              <input
                type="text"
                className="transition ease-in-out delay-150 duration-700 block p-2.5 w-full z-20 text-sm text-center text-gray-300 bg-black bg-opacity-30 rounded-full hover:bg-opacity-60 focus:bg-opacity-60 focus:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]
                focus:outline-none dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Search Movies..."
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 h-full p-2.5 text-sm font-medium text-white rounded-r-full dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                <svg
                  className="w-4 h-4"
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
                <span className="sr-only">Search</span>
              </button>
            </div>
                </div>
      </PopoverContent>
    </Popover>
  )
}

export default SearchDropdown