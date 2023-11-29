"use client";
import { Pagination } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
interface Props {
  currentPage: string | undefined;
  totalPage: number;
}

const Paginations = ({currentPage,totalPage}: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  
  console.log(currentPage);
  return (
    <Pagination
      showControls
      onChange={(page: number) => router.push(`${pathname}?page=${page}`)}
      total={totalPage > 500 ? 500 : totalPage}
      // page={3}
      initialPage={Number(currentPage )|| 1}
      variant={"flat"}
      color={"success"}
    />
  );
};

export default Paginations;
