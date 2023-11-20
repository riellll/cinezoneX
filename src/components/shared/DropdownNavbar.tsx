'use client'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { FaBarsStaggered } from "react-icons/fa6";
import { HiMiniBars3 } from "react-icons/hi2";

const DropdownNavbar = () => {
    const category = ['Home', 'Movies', 'TV Show', 'Country' ,'Trending']
  return (
    <Dropdown className="bg-green-700">
    <DropdownTrigger>
      {/* <Button 
      isIconOnly
    //   color={"default"}
        variant="light"
      > */}
        <span className="text-4xl font-thin text-gray-100 mr-3 hover:text-green-700"><HiMiniBars3  /></span>
      {/* </Button> */}
    </DropdownTrigger>
    <DropdownMenu aria-label="Static Actions" className="bg-green-700 border-green-700 rounded-xl">
        {category.map(item => (
      <DropdownItem key={item}>{item}</DropdownItem>
        ))}
    </DropdownMenu>
  </Dropdown>
  )
}

export default DropdownNavbar