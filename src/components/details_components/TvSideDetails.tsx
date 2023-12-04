import { FaLink } from "react-icons/fa6";
import { Tooltip, Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
interface Props {
    network: any[];
    type: string;
    homepage: string;
    languages: string;
    status: string;
    keywords: any[];
  }
const TvSideDetails = ({
network,
type,
homepage,
languages,
status,
keywords
}: Props) => {
    const image = network ? `https://image.tmdb.org/t/p/w220_and_h330_face${network}` : `/error.png`
  return (
    <div>
    <Tooltip
      showArrow={true}
      content="Visit Homepage"
      classNames={{
        base: [
          // arrow color
          "before:bg-gray-950 dark:before:bg-white",
        ],
        content: ["py-2 px-4 shadow-xl", "text-gray-300 bg-gray-950"],
      }}
    >
      <Button isIconOnly className="text-2xl mb-3">
        <Link href={homepage} target='_blank' ><FaLink /></Link>
      </Button>
    </Tooltip>
    <h1 className="text-base font-semibold leading-none tracking-tight text-gray-300 md:text-base lg:text-lg dark:text-white">
      Status
    </h1>
    <p className="text-base font-normal text-gray-400 dark:text-gray-400 mb-3">
      {status}
    </p>

    <h1 className="text-base font-semibold leading-none tracking-tight text-gray-300 md:text-base lg:text-lg dark:text-white">
      Original Language
    </h1>
    <p className="text-base font-normal text-gray-400 dark:text-gray-400 mb-3">
      {languages}
    </p>

    <h1 className="text-base font-semibold leading-none tracking-tight text-gray-300 md:text-base lg:text-lg dark:text-white">
    Network
    </h1>
    <Image src={image} alt="network" width={30} height={40} />

    <h1 className="text-base font-semibold leading-none tracking-tight text-gray-300 md:text-base lg:text-lg dark:text-white">
    Type
    </h1>
    <p className="text-base font-normal text-gray-400 dark:text-gray-400 mb-3">
      {type}
    </p>

    <h1 className="text-base font-semibold leading-none tracking-tight text-gray-300 md:text-base lg:text-lg dark:text-white mb-2">
      Keywords
    </h1>
    <div className="flex flex-wrap gap-3">
      {keywords.map(item => (
      <Link key={item.name} href={`/keyword/${item.name}`} className="text-base bg-[#242924] font-normal p-1 rounded-md hover:text-gray-500 cursor-pointer border border-[#242924] text-gray-300 dark:text-gray-400">
        {item.name}
      </Link>
      ))}
    </div>
  </div>
  )
}

export default TvSideDetails