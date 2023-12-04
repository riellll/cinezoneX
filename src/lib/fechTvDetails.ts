export async function GetTvDetails(id: string): Promise<any> {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { next: { revalidate: 10 } }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }

  export async function GetTvCredits(id: string): Promise<any> {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { next: { revalidate: 10 } }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
  export async function GetTvReviews(id: string): Promise<any> {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/reviews?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { next: { revalidate: 10 } }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
  export async function GetTvRecommendation(id: string): Promise<any> {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { next: { revalidate: 10 } }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
  export async function GetTvKeywords(id: string): Promise<any> {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/keywords?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { next: { revalidate: 10 } }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }