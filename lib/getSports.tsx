export default async function getSportsNews(){
    const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=sports&'&lang=en&country=in&max=30&apikey=${process.env.Global}`,{next:{revalidate:60}})

    return response.json();
}