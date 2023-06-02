
export default async function getNewsHindiResults(){
    const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=general&'&lang=hi&country=in&max=30&apikey=${process.env.Global}`,{next:{revalidate:60}})

    return response.json();
}

