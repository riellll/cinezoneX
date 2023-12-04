import PeopleCards from '@/components/cards/PeopleCards';
import ReviewCard from '@/components/details_components/ReviewCard';
import { GetMovieCredits, GetMovieDetails, GetMovieReviews } from '@/lib/fetchMovieDetails';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeftLong } from "react-icons/fa6";


const page = async ({ params }: { params: { id: string } }) => {
    const movieDetails = await GetMovieDetails(params.id);
    const {cast,crew} = await GetMovieCredits(params.id);
    const image = movieDetails.poster_path ? `https://image.tmdb.org/t/p/w220_and_h330_face${movieDetails.poster_path}` : `/error.png`
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
     <h2 className="text-4xl font-extrabold dark:text-white">{movieDetails.original_title}<span className="font-normal">{`(${movieDetails.release_date.split('-')[0]})`}</span></h2>
      <Link href={`/movie/details/${params.id}`} className="flex items-center hover:text-gray-700 gap-1 px-1 text-gray-900 font-semibold"><span><FaArrowLeftLong /></span><span>Back to main</span></Link>
       </div>
        </div>
        <div className='p-5 sm:p-9 lg:p-12'>
        <h1 className="mb-5 2text-xl font-bold leading-none tracking-tight text-gray-300 md:text-lg lg:text-2xl dark:text-white">{`Cast ${cast.length}`}</h1>
        <div className="gap-5 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 mt-5">
        {cast.map((item: any,index: number) => (
          <PeopleCards key={item.id} img={item.profile_path} name={item.name} id={item.id} character={item.character}/>
          ))}
      </div>
        <h1 className="my-5 text-2xl font-bold leading-none tracking-tight text-gray-300 md:text-lg lg:text-2xl dark:text-white">{`Crew ${crew.length}`}</h1>
        <div className="gap-5 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 mt-5">
        {crew.map((item: any,index: number) => (
          <PeopleCards key={item.id} img={item.profile_path} name={item.name} id={item.id} character={item.character}/>
          ))}
      </div>
      </div>
    </div>
  )
}

export default page