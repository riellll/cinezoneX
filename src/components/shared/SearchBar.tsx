"use client";

import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault();
        router.push(`/search/${e.target[0].value}`);
        e.target.reset();
      }}
      className="relative w-full"
    >
      <input
        type="text"
        className="transition ease-in-out delay-300 duration-700 block p-2.5 w-full z-20 text-sm text-center text-gray-400 bg-black bg-opacity-40 rounded-full hover:bg-opacity-75 focus:bg-opacity-70 shadow-lg
      focus:shadow-black hover:shadow-black
        focus:outline-none dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder="Search..."
        required
      />
      <button
        type="submit"
        className="absolute top-0 right-0 h-full p-2.5 text-sm font-medium text-green-700 rounded-r-full dark:bg-blue-600 dark:hover:bg-blue-700"
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
    </form>
  );
};

export default SearchBar;
