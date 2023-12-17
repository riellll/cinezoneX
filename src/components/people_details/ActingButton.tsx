'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { redirect , useRouter} from "next/navigation"

const ActingButton = () => {
    const router = useRouter() 

  return (
    <>
    <Select onValueChange={(str) => router.push(`?media=${str}`)}>
  <SelectTrigger className="border-none focus:ring-0 focus:ring-offset-0">
    <SelectValue placeholder="all" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="all">All</SelectItem>
    <SelectItem value="movie">Movies</SelectItem>
    <SelectItem value="tv">TV</SelectItem>
  </SelectContent>
    </Select>
{/*     <Select onValueChange={(str) => router.push(`/people/1234?media=${str}`)}>
  <SelectTrigger className="border-none focus:ring-0 focus:ring-offset-0">
    <SelectValue placeholder="Acting" />
  </SelectTrigger>
  <SelectContent>
  <SelectItem value="Acting">Acting</SelectItem>
    <SelectItem value="Production">Production</SelectItem>
  </SelectContent>
    </Select> */}
</>
  )
}

export default ActingButton