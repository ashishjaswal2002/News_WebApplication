export default async function EnglishResults(){
    const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=general&'&lang=en&country=in&max=30&apikey=${process.env.Global}`,{next:{revalidate:60}})

    return response.json();
}