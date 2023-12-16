

export async function GetPersonDetails(id: string): Promise<any> {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${id}?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  //  const person = JSON.stringify(res)
  //  const person2 = JSON.parse(person)
  //  console.log(person2)
  return res.json();
}
export async function GetSocialDetails(id: string): Promise<any> {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${id}/external_ids?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function GetCreditsDetails(id: string): Promise<any> {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${id}/combined_credits?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
