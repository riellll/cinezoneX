import LongCards from "@/components/cards/LongCards";
import MainCards from "@/components/cards/MainCards";
import CollectionList from "@/components/search_components/CollectionList";
import KeywordList from "@/components/search_components/KeywordList";
import MovieList from "@/components/search_components/MovieList";
import Peoplelist from "@/components/search_components/Peoplelist";
import SearchResultBox from "@/components/search_components/SearchResultBox";
import TvList from "@/components/search_components/TvList";
import Paginations from "@/components/shared/Paginations";
import { GetSearchCollection, GetSearchKeyword, GetSearchMovie, GetSearchPerson, GetSearchTv } from "@/lib/fetchSearchData";


import { IoIosPlay } from "react-icons/io";
interface data {  
movie: number[] | undefined,
people: number[] | undefined,
tv: number[] | undefined,
collection: number[] | undefined,
keyword: number[] | undefined,
}

const page = async ({ params, searchParams }: { params: { search: string }, searchParams: { [key: string]: string | undefined } }) => {
  const searchMovie = GetSearchMovie(searchParams.page,params.search);
  const searchTv = GetSearchTv(searchParams.page,params.search);
  const searchPerson = GetSearchPerson(searchParams.page,params.search);
  const searchCollection = GetSearchCollection(searchParams.page,params.search);
  const searchKeyword = GetSearchKeyword(searchParams.page,params.search);
  const [{results:movie,total_pages:moviePage,total_results: totalMovie},{results:tv,total_pages:tvPage,total_results: totalTv},{results:people,total_pages:peoplePage,total_results: totalPeople},{results:collection,total_pages:collectionPage,total_results: totalCollection},{results:keyword,total_pages:keywordPage,total_results: totalkeyword}] = await Promise.all([searchMovie, searchTv,searchPerson,searchCollection,searchKeyword])
  // const { results: trend } = await GetTrending('day');
  const listData: data = {
    movie: [moviePage],
    tv: [tvPage],
    people: [peoplePage],
    collection: [collectionPage],
    keyword: [keywordPage],
  }

  const {page, query} = searchParams;
  const list = () => {
    if(query==='movie') return moviePage;
    if(query==='tv') return tvPage;
    if(query==='people') return peoplePage;
    if(query==='collection') return collectionPage;
    if(query==='keyword') return keywordPage;

    return moviePage;
  }
  return (
    <>
          <div className="flex flex-col sm:flex-row justify-start gap-5 items-center px-5 pt-28">
          <div className="flex justify-center items-center">
            <p className="bg-green-700 py-1 md:py-1.5 px-1 rounded mr-1">
              <IoIosPlay />
            </p>
            <p className="text-xl md:text-3xl font-bold text-gray-200">
              {`${params.search.split("%20").join(" ")}`}
            </p>
          </div>
        </div>
    <div className="flex flex-col lg:flex-row px-5 gap-5">
     
     {/* <div> */}
       <SearchResultBox searchQuery={query} totalResult={[totalMovie,totalTv,totalPeople,totalCollection,totalkeyword]}/>
     {/* </div> */}

      <div className="flex w-full flex-col">
        {!query&&<MovieList movie={movie}/>}
        {query==='movie'&&<MovieList movie={movie}/>}
        {query==='tv'&&<TvList tv={tv}/>}
        {query==='people'&&<Peoplelist people={people}/>}
        {query==='collection'&&<CollectionList collection={collection}/>}
        {query==='keyword'&&<KeywordList keyword={keyword}/>}
        <div className="flex justify-center items-center py-5 text-center">
          <Paginations currentPage={page} totalPage={list()} query={query}/>
        </div> 
      </div>
    </div>
          </>
  );
};

export default page;
