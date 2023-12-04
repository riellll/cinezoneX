
'use client'
import { useRouter } from "next/navigation"
import { TbHexagonLetterI } from "react-icons/tb";
import { RiErrorWarningFill } from "react-icons/ri";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const SelectKey = () => {

  return (
    <Popover>
    <PopoverTrigger className="text-yellow-600"><RiErrorWarningFill/></PopoverTrigger>
    <PopoverContent>Apologies, but we regret to inform you that our keyword queries may not always accurately fetch show data. We appreciate your understanding and patience as we work to improve this functionality.</PopoverContent>
  </Popover>
  )
}

export default SelectKey