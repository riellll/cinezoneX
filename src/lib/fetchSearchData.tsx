export async function GetSearchMovie(page: string = "1", search: string): Promise<any> {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { next: { revalidate: 10 } }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
export async function GetSearchTv(page: string = "1", search: string): Promise<any> {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/tv?query=${search}&include_adult=false&language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { next: { revalidate: 10 } }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
export async function GetSearchPerson(page: string = "1", search: string): Promise<any> {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/person?query=${search}&include_adult=false&language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { next: { revalidate: 10 } }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
export async function GetSearchCollection(page: string = "1", search: string): Promise<any> {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/collection?query=${search}&include_adult=false&language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { next: { revalidate: 10 } }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
export async function GetSearchKeyword(page: string = "1", search: string): Promise<any> {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/keyword?query=${search}&include_adult=false&language=en-US&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { next: { revalidate: 10 } }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }