import ReviewCard from '@/components/details_components/ReviewCard';
import { GetTvDetails, GetTvReviews } from '@/lib/fechTvDetails';
// import { GetMovieDetails, GetMovieReviews } from '@/lib/fetchMovieDetails';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Metadata, ResolvingMetadata } from 'next'
 

 
export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const tvDetails = await GetTvDetails(params.id);
 
 
  return {
    title: `${tvDetails.name}(${tvDetails.first_air_date.split('-')[0]}) - Reviews - The Cinizone Collection`,
    description: 'https://cinezone-x.vercel.app/',
  }
}

const page = async ({ params }: { params: { id: string } }) => {
    const tvDetails = await GetTvDetails(params.id);
    const {results: reviews} = await GetTvReviews(params.id);
    const image = tvDetails.poster_path ? `https://image.tmdb.org/t/p/w220_and_h330_face${tvDetails.poster_path}` : `/error.png`
  return (
    <div className='pt-28'>
        <div className='flex bg-[#B1B5AB] px-5 py-5 gap-5'>
        <Image
    src={image}
    alt="image"
    width={500}
    height={500}
    className="w-16 h-auto z-10"
    />
    <div className="flex flex-col items-start gap-1 pt-1">
     <h2 className="text-4xl font-extrabold dark:text-white">{tvDetails.original_name}<span className="font-normal">{`(${tvDetails.first_air_date.split('-')[0]})`}</span></h2>
      <Link href={`/tv/details/${params.id}`} className="flex items-center hover:text-gray-700 gap-1 px-1 text-gray-900 font-semibold"><span><FaArrowLeftLong /></span><span>Back to main</span></Link>
       </div>
        </div>
        <div className='flex flex-col gap-10 p-5 sm:p-9 lg:p-14'>
        {reviews.map((item:any) => (
               <ReviewCard
                key={item.id}
                img={item.author_details.avatar_path}
                name={item.author}
                created={item.created_at}
                id={item.id}
                rating={item.author_details.rating}
                allResults={0}
                content={item.content}
                link={''}
                /> 
        ))}
        </div>
    </div>
  )
}

export default page