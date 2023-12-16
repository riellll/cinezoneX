import {Card, CardFooter, Image, Button} from "@nextui-org/react";

import Link from "next/link";
import { Suspense } from "react";
interface Props {
    img: string;
    name: string;
    id: number;
    character: string | undefined;
  }
const PeopleCards = ({img,name,id, character}: Props) => {
    const image = img ? `https://image.tmdb.org/t/p/w220_and_h330_face${img}` : `/error.png`
  return (
    <Card
    key={id}
    isFooterBlurred
    radius="lg"
    className="border-none bg-transparent"
  >
 <Suspense fallback=
     {<Image
      alt="Woman listing to music"
      className="object-cover w-full h-full"
      height={500}
      width={500}
      src={'/error.png'}
    />}>
    <Image
      alt="Woman listing to music"
      src={image}
      className="object-cover"
      height={200}
      width={300}
    />
    </Suspense>
    <CardFooter className="justify-start before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
      <div className="flex flex-col items-start justify-start">
      <Link href={`/people/${id}`} className="text-sm text-white/80 hover:text-white/40">{name}</Link>
      <p className="text-xs text-white/80">{character}</p>
      </div>
      {/* <Button className="text-tiny text-white bg-black/20 hover:text-green-600" variant="flat" color="default" radius="lg" size="sm">
        more
      </Button> */}
    </CardFooter>
  </Card>
          

  )
}

export default PeopleCards