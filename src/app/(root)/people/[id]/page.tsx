import ActingHistory from "@/components/people_details/ActingHistory";
import KnwnCards from "@/components/people_details/KnwnCards";
import Personal_Info from "@/components/people_details/Personal_Info";
import SocialIcons from "@/components/people_details/SocialIcons";
import { GetPersonDetails, GetSocialDetails } from "@/lib/fetchPersonDetails";


type Props = {
    params: { id: string }
    searchParams: { [page: string]: string } 
  }


const page = async ({ params, searchParams }: Props) => {
const id = params.id
const personDetails = await GetPersonDetails(id)
const socialDetails = await GetSocialDetails(id)
const image = personDetails.profile_path ? `https://image.tmdb.org/t/p/w300_and_h450_face${personDetails.profile_path}` : `/error.png`

  return (
    <div className='flex flex-col lg:flex-row pt-28 px-5 text-gray-200 gap-7'>
        <div className="flex flex-col items-center lg:items-start">
        <img src={image} alt={personDetails.name} className='max-w-max max-h-52 md:max-h-64 lg:max-h-none rounded-lg'/>
        <h1 className='lg:hidden text-4xl mt-8'>{personDetails.name}</h1>
        <div className="flex gap-4 text-2xl mt-4 lg:mt-8">
            <SocialIcons 
            facebook_id={socialDetails.facebook_id}
            twitter_id={socialDetails.twitter_id}
            instagram_id={socialDetails.instagram_id}
            tiktok_id={socialDetails.tiktok_id}
            />
        </div>
        <div className=" mt-8">
            <Personal_Info
            KnownFor={personDetails.known_for_department}
            Credits={2}
            Gender={personDetails.gender}
            Birthday={personDetails.birthday}
            P_Birth={personDetails.place_of_birth}
            KnownAs={personDetails.also_known_as}
            />
        </div>
        </div>
        <div className='flex flex-col gap-10'>
            <h1 className='hidden lg:block text-4xl'>{personDetails.name}</h1>
            <div className='flex flex-col gap-3 max-w-[950px] xl:max-w-[950px] lg:max-w-[700px]'>
                <h1 className='text-xl'>Biography</h1>
                <div className="whitespace-pre-line ...">
                {personDetails.biography}
                </div>
            </div>
            <div className="flex flex-col">
            <KnwnCards id={id}/>
            </div>
            <div>
                <ActingHistory/>
            </div>
        </div>
    </div>
  )
}

export default page