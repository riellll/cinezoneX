export default async function GetTrending(time: string): Promise<any> {
    const res = await fetch(`https://api.themoviedb.org/3/trending/all/${time}?language=en-US&api_key=${process.env.API_KEY}`,  { next: { revalidate: 10 } })
 
    if (!res.ok) {

      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}
