import {Card, CardFooter, Button} from "@nextui-org/react";
import Image from "next/image";
interface Props {
    image: string;
  }
const PeopleCards = ({image}: Props) => {
  return (
 
    <Card
    isFooterBlurred
    radius="lg"
    className="border-none max-w-full h-60"
  >
    <Image
      alt="Woman listing to music"
      className="object-cover w-auto h-full"
      height={500}
      width={500}
      src={image}
    />
    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
      <p className="text-tiny text-white/80">Available soonasdad asdad.</p>
      <Button className="text-tiny text-white bg-black/20 hover:text-green-600" variant="flat" color="default" radius="lg" size="sm">
        more
      </Button>
    </CardFooter>
  </Card>
          

  )
}

export default PeopleCards