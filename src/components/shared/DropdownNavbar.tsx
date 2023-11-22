"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
// import { FaBarsStaggered } from "react-icons/fa6";
import { HiMiniBars3 } from "react-icons/hi2";

const DropdownNavbar = () => {
  // const category = ["Home", "Movies", "TV Show", "Country", "Trending"];
  // ['Popular','Airing Today', 'On TV']
  // ['Popular','Now Playing', 'Upcoming']
  const category = [
    {name: 'Home'},
    {name: 'Movies',tool:[{name:'Popular',link:'movie/popular'},{name:'Now Playing',link:'movie/now-playing'},{name:'Upcoming',link:'movie/upcoming'}]},
    {name: 'TV Show',tool:[{name:'Popular',link:'tv/popular'},{name:'Airing Today',link:'tv/airing-today'},{name:'On TV',link:'tv/on-tv'}]},
    {name: 'Trending'},
    {name: 'People', tool:[{name:'Popular People', link:'/person'}]},
  ];
  return (
    <Dropdown className="bg-green-700">
      <DropdownTrigger>
        {/* <Button 
      isIconOnly
    //   color={"default"}
        variant="light"
      > */}
        <span className="text-4xl font-thin text-gray-100 mr-3 hover:text-green-700">
          <HiMiniBars3 />
        </span>
        {/* </Button> */}
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        className="bg-green-700 border-green-700 rounded-xl font-semibold"
      >
        {category.map((item) => (
          <DropdownItem key={item.name}>
           {item.tool && <Tooltip 
            content={(
              <>
              {item.tool?.map((tip) => (
            <Link key={tip.name} href={tip.link} className="grow p-2 hover:bg-slate-600 text-start">{tip.name}</Link>
              ))}
              </>
            )}
            classNames={{
              content: [
                "py-2 px-4 shadow-xl",
                "flex text-gray-300 bg-[#141412]",
              ],
            }}
            offset={15}
            placement={"right"}>
              <p className="text-base font-bold">{item.name}</p>
            </Tooltip>}
            {item.tool == undefined && (<p key={item.name} className="text-base font-bold">{item.name}</p>)}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownNavbar;
