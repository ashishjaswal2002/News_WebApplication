export default async function getEntertainmentNews(){
    const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=entertainment&'&lang=en&country=in&max=30&apikey=bb4984e470468da6c24fb9583bf54eab`,{next:{revalidate:60}})

    return response.json();
}