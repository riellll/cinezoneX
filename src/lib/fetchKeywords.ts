

export async function GetKeyword(
  keywords: string,
  page: string = "1",
  media: string = "movie",
): Promise<any> {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.AUTH_KEY}`,
    },
  };

  return fetch(
    `https://api.themoviedb.org/3/discover/${media}?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_keywords=${keywords}`,
    options
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err));
}
