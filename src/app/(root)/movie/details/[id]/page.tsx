import React from "react";
import Image from "next/image";
import Link from "next/link";

import { GetLatestMovie } from "@/lib/fetchData";

import Recom from "@/components/details_components/Recom";
import Cast from "@/components/details_components/Cast";
import ReviewCard from "@/components/details_components/ReviewCard";
import SideDetails from "@/components/details_components/SideDetails";
import HeroDetails from "@/components/details_components/HeroDetails";
import { GetMovieCredits, GetMovieDetails, GetMovieKeywords, GetMovieReviews } from "@/lib/fetchMovieDetails";

const page = async ({ params }: { params: { id: string } }) => {
  const { results: latestMovie, total_pages } = await GetLatestMovie('1');
  const movieDetails = await GetMovieDetails(params.id);
  const {keywords} = await GetMovieKeywords(params.id);
  const {cast} = await GetMovieCredits(params.id);
  const {results: reviews} = await GetMovieReviews(params.id);
  const image = movieDetails.backdrop_path ? `https://image.tmdb.org/t/p/w220_and_h330_face${movieDetails.backdrop_path}` : `/error.png`;
  return (
    <>
    <div className="pt-28">
        <div className="mb-10">
      <div className="relative flex w-full h-screen">
        <Image
          src={image}
          alt="image"
          width={500}
          height={500}
          className="absolute w-full h-screen z-10 saturate-50 blur-sm"
          />
           <div className="flex lg:flex-row flex-col items-center justify-center z-20 p-5 lg:p-20 gap-10">
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
        <Cast cast={cast}/>
        </li>
        <li className="py-3 sm:py-4">
        <ReviewCard
        img={reviews[4].author_details.avatar_path}
        name={reviews[4].author}
        created={reviews[4].created_at}
        id={params.id}
        rating={reviews[4].author_details.rating}
        allResults={reviews.length}
        content={reviews[4].content}
        />
        </li>
        <li className="py-3 sm:py-4">
       <Recom latestMovie={latestMovie}/>
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
