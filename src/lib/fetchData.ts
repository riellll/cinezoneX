export async function GetLatestMovie(page: string = '1'): Promise<any> {
    const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,  { next: { revalidate: 10 } })
 
    if (!res.ok) {

      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}
export async function GetMovieRecommendations(id: number): Promise<any> {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,  { next: { revalidate: 10 } })
 
    if (!res.ok) {

      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}
export async function GetTopRatedMovie(page: string = '1'): Promise<any> {
    const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,  { next: { revalidate: 10 } })
 
    if (!res.ok) {

      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}
export async function GetUpcomingMovie(page: string = '1'): Promise<any> {
    const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,  { next: { revalidate: 10 } })
 
    if (!res.ok) {

      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}
export async function GetPopularMovie(page: string = '1'): Promise<any> {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,  { next: { revalidate: 10 } })
 
    if (!res.ok) {

      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}





export async function GetLatestTvShow(page: string = '1'): Promise<any> {
    const res = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,  { next: { revalidate: 10 } })
 
    if (!res.ok) {

      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

export async function GetTvRecommendations(id: number): Promise<any> {
  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,  { next: { revalidate: 10 } })

  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export async function GetAiringTodayShow(page: string = '1'): Promise<any> {
    const res = await fetch(`https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,  { next: { revalidate: 10 } })
 
    if (!res.ok) {

      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}
export async function GetPopularShow(page: string = '1'): Promise<any> {
    const res = await fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,  { next: { revalidate: 10 } })
 
    if (!res.ok) {

      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}
export async function GetOnTvShow(page: string = '1'): Promise<any> {
    const res = await fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,  { next: { revalidate: 10 } })
 
    if (!res.ok) {

      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}