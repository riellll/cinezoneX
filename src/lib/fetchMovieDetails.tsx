export async function GetMovieDetails(id: string): Promise<any> {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { next: { revalidate: 10 } }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
export async function GetMovieKeywords(id: string): Promise<any> {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGQ1ZWE4ZjZiZjI5ZWYwNGRkYjRhNWE5YmY2ZjYxMSIsInN1YiI6IjY1NWQ3M2IzNGNiZTEyMDEzYzNjZjBhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HRELAB0QhccWzVEMNeAeMHYx9Uh4yWrhkCCraeWYxug'
    }
  };
  
  
  return fetch(`https://api.themoviedb.org/3/movie/${id}/keywords`, options)
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.error(err));
  }

  export async function GetMovieCredits(id: string): Promise<any> {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { next: { revalidate: 10 } }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
  export async function GetMovieReviews(id: string): Promise<any> {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { next: { revalidate: 10 } }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }