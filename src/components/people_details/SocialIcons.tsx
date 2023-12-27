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
} from "@/components/ui/tooltip";
interface Props {
  facebook_id: string | undefined;
  twitter_id: string | undefined;
  instagram_id: string | undefined;
  tiktok_id: string | undefined;
}
const SocialIcons = ({
  facebook_id,
  twitter_id,
  instagram_id,
  tiktok_id,
}: Props) => {
  const social = [
    {
      icons: facebook_id && <FaFacebook />,
      link: `https://www.facebook.com/${facebook_id}`,
      content: "Visit Facebook",
    },
    {
      icons: twitter_id && <FaTwitterSquare />,
      link: `https://www.twitter.com/${twitter_id}`,
      content: "Visit Twitter",
    },
    {
      icons: instagram_id && <FaInstagram />,
      link: `https://www.instagram.com/${instagram_id}`,
      content: "Visit Instagram",
    },
    {
      icons: tiktok_id && <FaTiktok />,
      link: `https://www.tiktok.com/@${tiktok_id}`,
      content: "Visit Tiktok",
    },
  ];
  return (
    <>
      <TooltipProvider delayDuration={0}>
        {social.map((item: any, index: number) => {
            if(!item.icons) return;
            return(
          <Tooltip key={index}>
            <TooltipTrigger>
              <Link href={item.link} target="_blank">
                {item.icons}
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-[#242924] text-gray-200 border-[#242924]">
              <p>{item.content}</p>
            </TooltipContent>
          </Tooltip>
        )})}
      </TooltipProvider>
    </>
  );
};

export default SocialIcons;
