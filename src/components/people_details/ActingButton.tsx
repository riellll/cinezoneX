'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

interface Props {
    value: string,
    onChange: (media: string) => void
  }

// Filters in the browser rather than pushing `?media=` to the URL: reading
// searchParams on the server made /people/[id] render dynamically on every
// request, so the page could never be cached.
const ActingButton = ({ value, onChange }: Props) => {
  return (
    <>
    <Select value={value} onValueChange={onChange}>
  <SelectTrigger className="border-none focus:ring-0 focus:ring-offset-0">
    <SelectValue placeholder="all" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="all">All</SelectItem>
    <SelectItem value="movie">Movies</SelectItem>
    <SelectItem value="tv">TV</SelectItem>
  </SelectContent>
    </Select>
</>
  )
}

export default ActingButton
