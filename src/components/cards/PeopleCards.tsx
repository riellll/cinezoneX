import {Card, CardFooter, Button} from "@nextui-org/react";
import Image from "next/image";
import { Suspense } from "react";
interface Props {
    img: string;
    name: string;
    id: number;
  }
const PeopleCards = ({img,name,id}: Props) => {
    const image = img ? `https://image.tmdb.org/t/p/w220_and_h330_face${img}` : `/error.png`
  return (
    <Card
    isFooterBlurred
    radius="lg"
    className="border-none max-w-full h-60 bg-transparent"
  >
 <Suspense fallback=
     {<Image
      alt="Woman listing to music"
      className="object-cover w-auto h-full"
      height={500}
      width={500}
      src={'/error.png'}
    />}>
    <Image
      alt="Woman listing to music"
      className="w-auto h-full"
      height={500}
      width={500}
      src={image}
    />
    </Suspense>
    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
      <p className="text-sm text-white/80">{name}</p>
      <Button className="text-tiny text-white bg-black/20 hover:text-green-600" variant="flat" color="default" radius="lg" size="sm">
        more
      </Button>
    </CardFooter>
  </Card>
          

  )
}

export default PeopleCards