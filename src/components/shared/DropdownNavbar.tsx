"use client";
import { category } from "@/lib";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";
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
        <span className="text-4xl font-thin text-gray-100 mr-3 hover:text-green-700 cursor-pointer">
          <HiMiniBars3 />
        </span>
      </DropdownTrigger>
      <DropdownMenu
        variant={"light"}
        closeOnSelect={false}
        aria-label="Link Actions"
        className="bg-green-700 border-green-700 rounded-xl font-semibold"
      >
        {category.map((item) => (
          <DropdownItem key={item.name} href={item.link} color={'default'} className={`group ${isOpen === item.name + 'true' && 'bg-gray-950 text-green-700'} hover:bg-gray-950 my-1`}>
            {item.tool && (
              <>
              <div className="hidden lg:block">
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
              </div>
              <div className="lg:hidden">
              <Accordion isCompact hideIndicator itemClasses={{
              title: [
              "py-0 px-0",
             ],
             trigger: [
              "py-0 px-0",
             ],
              }} 
             className="bg-opacity-0 rounded-lg p-0 py-0">
              <AccordionItem key={item.name} aria-label={item.name} className="p-0" title={(<p className={`${isOpen === item.name + 'true' ? 'text-green-700' : 'text-gray-950'}  group-hover:text-green-700 text-base font-bold`}>{item.name}</p>)}>
              <div className="flex flex-col">
                    {item.tool?.map((tip) => (
                      <Link
                        key={tip.name}
                        href={tip.link}
                        className="grow py-2 pl-2 text-gray-300 hover:bg-green-600 hover:text-gray-950 text-start rounded-md"
                      >
                        {tip.name}
                      </Link>
                    ))}
                  </div>
              </AccordionItem>
              </Accordion>
              </div>
              </>
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

          {/* <Popover className="bg-[#141412] rounded-lg" offset={20} placement="right" onOpenChange={(open) => setIsOpen(item.name + open)}>
              <PopoverTrigger>
              <p className={`${isOpen === item.name + 'true' ? 'text-green-700' : 'text-gray-950'}  group-hover:text-green-700 text-base font-bold`}>{item.name}</p>
               </PopoverTrigger>
               <PopoverContent className="bg-opacity-0 py-2 px-4 shadow-xl">
               <div className="flex flex-col">
                    {item.tool?.map((tip) => (
                      <Link
                        key={tip.name}
                        href={tip.link}
                        className="grow p-2 text-gray-300 hover:bg-green-600 hover:text-gray-950 text-start rounded-md"
                      >
                        {tip.name}
                      </Link>
                    ))}
                  </div>
               </PopoverContent>
              </Popover> */}

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
