// Moview
export async function GetLatestMovie(page: string = "1"): Promise<any> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function GetMovieRecommendations(id: number): Promise<any> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function GetTopRatedMovie(page: string = "1"): Promise<any> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function GetUpcomingMovie(page: string = "1"): Promise<any> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function GetPopularMovie(page: string = "1"): Promise<any> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// tv show
export async function GetLatestTvShow(page: string = "1"): Promise<any> {

  const res = await fetch(
    `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function GetTvRecommendations(id: number): Promise<any> {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function GetAiringTodayShow(page: string = "1"): Promise<any> {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function GetPopularShow(page: string = "1"): Promise<any> {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function GetOnTvShow(page: string = "1"): Promise<any> {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function GetAllTrending(page: string = "1"): Promise<any> {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function GetSearchShow(page: string = "1", search: string): Promise<any> {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=false&language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function GetPopularPeople(page: string = "1"): Promise<any> {
  // await new Promise(resolve => setTimeout(resolve,5000))
  const res = await fetch(
    `https://api.themoviedb.org/3/person/popular?language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 0 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
