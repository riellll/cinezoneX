import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
interface Props {
    facebook_id: string | undefined
    twitter_id: string | undefined
    instagram_id: string | undefined
    tiktok_id: string | undefined
  }
const SocialIcons = ({
    facebook_id,
twitter_id,
instagram_id,
tiktok_id
}: Props) => {
    {/* <FaTwitterSquare />
    <FaInstagram />
    <FaTiktok /> */}
  return (
    <>
    <TooltipProvider delayDuration={0}>
  <Tooltip>
    <TooltipTrigger><FaInstagram /></TooltipTrigger>
    <TooltipContent className="bg-[#242924] text-gray-200 border-[#242924]">
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
        {facebook_id && <Link href={`https://www.facebook.com/${facebook_id}`} target="_blank"><FaFacebook /></Link>}
        {twitter_id && <Link href={`https://www.twitter.com/${twitter_id}`} target="_blank"><FaTwitterSquare /></Link>}
        {instagram_id && <Link href={`https://www.instagram.com/${instagram_id}`} target="_blank"><FaInstagram /></Link>}
        {tiktok_id && <Link href={`https://www.tiktok.com/${tiktok_id}`} target="_blank"><FaTiktok /></Link>}

        </>
  )
}

export default SocialIcons