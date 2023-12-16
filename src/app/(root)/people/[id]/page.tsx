import ActingHistory from "@/components/people_details/ActingHistory";
import KnwnCards from "@/components/people_details/KnwnCards";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
const page = () => {

  return (
    <div className='flex flex-col lg:flex-row pt-28 px-5 text-gray-200 gap-7'>
        <div className="flex flex-col items-center lg:items-start">
        <img src="/jenn.jpg" alt="img" className='max-w-max max-h-52 md:max-h-64 lg:max-h-none rounded-lg'/>
        <h1 className='lg:hidden text-4xl mt-8'>Jenna Ortega</h1>
        <div className="flex gap-4 text-2xl mt-4 lg:mt-8">
        <FaFacebook />
        <FaTwitterSquare />
        <FaInstagram />
        <FaTiktok />
        </div>
        <div className=" mt-8">
            <h1 className="text-xl pb-3">Personal Info</h1>
            <div className="flex lg:flex-col flex-wrap gap-6 lg:gap-4">
                <div>
                    <h1 className="font-medium">Known For</h1>
                    <p className="font-light">47</p>
                </div>
                <div>
                    <h1 className="font-medium">Known Credits</h1>
                    <p className="font-light">Acting</p>
                </div>
                <div>
                    <h1 className="font-medium">Gender</h1>
                    <p className="font-light">Female</p>
                </div>
                <div>
                    <h1 className="font-medium">Birthday</h1>
                    <p className="font-light">2002-09-27 (21 years old)</p>
                </div>
                <div>
                    <h1 className="font-medium">Place of Birth</h1>
                    <p className="font-light">Coachella Valley, Palm Desert, California, USA</p>
                </div>
            </div>
        </div>
        </div>
        <div className='flex flex-col gap-10'>
            <h1 className='hidden lg:block text-4xl'>Jenna Ortega</h1>
            <div className='flex flex-col gap-3 max-w-[950px] xl:max-w-[950px] lg:max-w-[700px]'>
                <h1 className='text-xl'>Biography</h1>
                <div className="whitespace-pre-line ...">
                Jenna Marie Ortega  born September 27, 2002  is an American actress. She began her career as a child actress, receiving recognition for her role as young Jane on The CW comedy-drama series Jane the Virgin  2014 2019 . She had her breakthrough for starring as Harley Diaz on the Disney Channel series Stuck in the Middle  2016 2018 , for which she won an Imagen Award. She played Ellie Alves in the second season of the Netflix thriller series You in 2019 and starred in the Netflix family film Yes Day  2021 .<br/><br/>Ortega received critical praise for her performance in the teen drama The Fallout  2021 , and went on to star in the slasher films X  2022 , Scream  2022  and its sequel Scream VI  2023 , establishing herself as a scream queen. She starred as Wednesday Addams in the Netflix horror comedy series Wednesday 2022, for which she received nominations for a Primetime Emmy Award, a Golden Globe Award and a SAG Award.<br/><br/>Description above from the Wikipedia article Jenna Ortega, licensed under CC BY SA, full list of contributors on Wikipedia.
                </div>
            </div>
            <div className="flex flex-col">
            <KnwnCards/>
            </div>
            <div>
                <ActingHistory/>
            </div>
        </div>
    </div>
  )
}

export default page