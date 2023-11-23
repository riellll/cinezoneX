"use client";
import { category } from "@/lib";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import {Tooltip} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
// import { FaBarsStaggered } from "react-icons/fa6";
import { HiMiniBars3 } from "react-icons/hi2";


const DropdownNavbar = () => {
  const [isOpen, setIsOpen] = useState('');


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
        variant={"light"}
        aria-label="Link Actions"
        className="bg-green-700 border-green-700 rounded-xl font-semibold"
      >
        {category.map((item) => (
          <DropdownItem key={item.name} href={item.link} color={'default'} className={`group ${isOpen === item.name + 'true' && 'bg-gray-950 text-green-700'} hover:bg-gray-950`}>
            {item.tool && (
              <Tooltip
                delay={0}
                closeDelay={0}
                onOpenChange={(open) => setIsOpen(item.name + open)}
                content={
                  <>
                  <div className="flex flex-col">
                    {item.tool?.map((tip) => (
                      <Link
                        key={tip.name}
                        href={tip.link}
                        className="grow p-2 hover:bg-green-600 hover:text-gray-950 text-start rounded-md"
                      >
                        {tip.name}
                      </Link>
                    ))}
                  </div>
                  </>
                }
                classNames={{
                  content: [
                    "py-2 px-4 shadow-xl",
                    "text-gray-300 bg-[#141412]",
                  ],
                }}
                offset={15}
                placement={"right"}
              >
                <p className={`${isOpen === item.name + 'true' ? 'text-green-700' : 'text-gray-950'}  group-hover:text-green-700 text-base font-bold`}>{item.name}</p>
              </Tooltip>
            )}
            {item.tool == undefined && (
              <p key={item.name} className="group-hover:text-green-700 text-base font-bold">
                {item.name}
              </p>
            )}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownNavbar;

{
  /* <Tooltip 
delay={0}
closeDelay={0}
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
 </Tooltip> */
}
