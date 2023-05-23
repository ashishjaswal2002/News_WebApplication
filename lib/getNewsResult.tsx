
export default async function getNewsHindiResults(){
    const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=general&'&lang=hi&country=in&max=30&apikey=bb4984e470468da6c24fb9583bf54eab`,{next:{revalidate:60}})

    return response.json();
}

