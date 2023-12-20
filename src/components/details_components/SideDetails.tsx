import { FaLink } from "react-icons/fa6";
import { Tooltip, Button } from "@nextui-org/react";
import Link from "next/link";
interface Props {
  revenue: number;
  budget: number;
  homepage: string;
  languages: string;
  status: string;
  keywords: any[];
}
const SideDetails = ({
  revenue,
  budget,
  homepage,
  languages,
  status,
  keywords,
}: Props) => {
  function formatCurrency(number: number): string {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

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
        Budget
      </h1>
      <p className="text-base font-normal text-gray-400 dark:text-gray-400 mb-3">
        {formatCurrency(budget)}
      </p>

      <h1 className="text-base font-semibold leading-none tracking-tight text-gray-300 md:text-base lg:text-lg dark:text-white">
        Revenue
      </h1>
      <p className="text-base font-normal text-gray-400 dark:text-gray-400 mb-3">
        {formatCurrency(revenue)}
      </p>

      <h1 className="text-base font-semibold leading-none tracking-tight text-gray-300 md:text-base lg:text-lg dark:text-white mb-2">
        Keywords
      </h1>
      <div className="flex flex-wrap gap-3">
        {keywords.map(item => (
        <Link key={item.name} href={`/keyword/${item.id}-${item.name}`} className="text-base bg-[#242924] font-normal p-1 rounded-md hover:text-gray-500 cursor-pointer border border-[#242924] text-gray-300 dark:text-gray-400">
          {item.name}
        </Link>
        ))}
      </div>
    </div>
  );
};

export default SideDetails;
