import React from "react";
import {Image} from "@nextui-org/react";
import Link from "next/link";


import Recom from "@/components/details_components/Recom";
import Cast from "@/components/details_components/Cast";
import ReviewCard from "@/components/details_components/ReviewCard";
import SideDetails from "@/components/details_components/SideDetails";
import HeroDetails from "@/components/details_components/HeroDetails";
import { GetMovieCredits, GetMovieDetails, GetMovieKeywords, GetMovieRecommendation, GetMovieReviews } from "@/lib/fetchMovieDetails";
import { Metadata, ResolvingMetadata } from 'next'
 

 
export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const movieDetails = await GetMovieDetails(params.id);
 
 
  return {
    title: `${movieDetails.title}(${movieDetails.release_date.split('-')[0]}) - The Cinizone Collection`,
    description: 'https://cinezone-x.vercel.app/',
  }
}

const page = async ({ params }: { params: { id: string } }) => {
  const { results: recoMovie } = await GetMovieRecommendation(params.id);
  const movieDetails = await GetMovieDetails(params.id);
  const {keywords} = await GetMovieKeywords(params.id);
  const {cast} = await GetMovieCredits(params.id);
  const {results: reviews} = await GetMovieReviews(params.id);
  const image = movieDetails.backdrop_path ? `https://www.themoviedb.org/t/p/original${movieDetails.backdrop_path}` : `/error.png`;
  return (
    <>
    <div className="pt-28 pb-20">
        <div className="mb-10">
      <div className="relative flex w-full h-screen">
        <img
          src={image}
          alt="image"
          className="absolute w-full h-screen z-10 saturate-50 blur-sm"
          />
           <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-items-center z-20 p-5 lg:p-20 gap-10">
   <HeroDetails 
   title={movieDetails.title}
   img={movieDetails.poster_path}
   overview={movieDetails.overview}
   genres={movieDetails.genres}
   vote={movieDetails.vote_average}
   tagline={movieDetails.tagline}
   runtime={movieDetails.runtime}
   date={movieDetails.release_date}
   countries={movieDetails.production_countries[0].iso_3166_1}
  />
    </div>
      </div>
      </div>
      <div className="flex xl:flex-row flex-col gap-10 px-5">
      <ul className="divide-y divide-gray-700">
      <li className="py-3 sm:py-4">
        <Cast cast={cast} link={`/movie/details/cast/${params.id}`}/>
        </li>
        <li className="py-3 sm:py-4">
        <div className='max-w-[200rem]'>
        <div className='mb-4'>
        <ul className="flex flex-wrap -mb-px items-center  text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
        <li className="me-2 mr-10" role="presentation">
        <h1 className="text-xl font-bold leading-none tracking-tight text-gray-300 md:text-lg lg:text-2xl dark:text-white">Social</h1>
        </li>
        <li className="me-2" role="presentation">
            <button className="inline-block p-4 border-b-2 rounded-t-lg text-gray-200 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Reviews <span className='pl-1 text-gray-300'>{reviews.length}</span></button>
        </li>
        </ul>
        </div>
        {reviews[0] ? <ReviewCard
        img={reviews[0].author_details.avatar_path}
        name={reviews[0].author}
        created={reviews[0].created_at}
        id={params.id}
        rating={reviews[0].author_details.rating}
        allResults={reviews.length}
        content={reviews[0].content}
        link={`/movie/details/review/${params.id}`}
        /> : <h1 className="text-white">No Reviews</h1>}
        </div>
        </li>
        <li className="py-3 sm:py-4">
       {recoMovie[0] ? <Recom recommendations={recoMovie} media={'movie'}/> : <h1 className="text-white">No Recommendations</h1>}
        </li>
      </ul>
      <div className="mt-10 max-w-md">
      <SideDetails
         revenue={movieDetails.revenue}
         budget={movieDetails.budget}
         homepage={movieDetails.homepage}
         languages={movieDetails.spoken_languages[0].english_name}
         status={movieDetails.status}
         keywords={keywords}
      />
      </div>
      </div>
    </div>
      </>
  );
};

export default page;
