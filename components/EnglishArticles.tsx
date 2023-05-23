import EnglishResults from "@/lib/getEnglistResult";
Image
import Link from 'next/link'
import  Image  from 'next/image';


export default async function  EnglishArticles(){

    const newsData =EnglishResults();
    const results = await newsData

    await new Promise((resolve)=>setTimeout(resolve,100))
    const newArr:articles[] = results.articles

    
    return (
        <>
        
       <section>
        
           <ul className="p-2 flex flex-col gap-10">
        {newArr.map((result:any)=>(
                <li key={result.source.title} className=' pb-2 border-cyan-200 border-b-[1px] '>

<Image src={result.image} className='rounded' alt="News image" placeholder="blur"/>
               
                <h1 className='text-[1.3rem] text-white  font-medium mt-2 '>{result.title}</h1>
                <p className='font-extralight text-white mt-2 '>{result.description}</p>

                <br/>
                 <Link href={result.source.url} >
 <span className='text-cyan-300 hover:text-cyan-500  cursor-pointer'>
Read Full Article here
    </span> </Link>
                
                </li>
        ))}

        </ul>

       
        
        </section>   

     
        </>
    )


  
}