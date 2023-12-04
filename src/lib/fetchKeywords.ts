export async function GetKeyword(
  keywords: string,
  page: string = "1",
  media: string = "movie"
): Promise<any> {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/${media}?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_keywords=${keywords}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
