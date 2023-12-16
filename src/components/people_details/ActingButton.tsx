'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Link from "next/link"
import { redirect , useRouter} from "next/navigation"

const ActingButton = () => {
    const router = useRouter() 
    const select1 = ['All', ]
  return (
    <>
    <Select onValueChange={(str) => router.push(`/people/1234?media=${str}`)}>
  <SelectTrigger className="border-none focus:ring-0 focus:ring-offset-0">
    <SelectValue placeholder="All" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">All</SelectItem>
    <SelectItem value="dark">Movies</SelectItem>
    <SelectItem value="system">TV</SelectItem>
  </SelectContent>
    </Select>

    <Select onValueChange={(str) => router.push(`/people/1234?media=${str}`)}>
  <SelectTrigger className="border-none focus:ring-0 focus:ring-offset-0">
    <SelectValue placeholder="Acting" />
  </SelectTrigger>
  <SelectContent>
  <SelectItem value="Acting">Acting</SelectItem>
    <SelectItem value="Production">Production</SelectItem>
  </SelectContent>
    </Select>
</>
  )
}

export default ActingButton