"use client";
import { Pagination } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
interface Props {
  currentPage: string | undefined;
  totalPage: number;
  query: string | undefined;
}

const Paginations = ({currentPage,totalPage,query}: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  

  return (
    <Pagination
      showControls
      onChange={(page: number) => {
        const navigate = query ? `?page=${page}&query=${query}` : `?page=${page}`
        router.push(navigate)
      }}
      total={totalPage > 500 ? 500 : totalPage}
      // page={3}
      initialPage={Number(currentPage )|| 1}
      variant={"flat"}
      color={"success"}
    />
  );
};

export default Paginations;
