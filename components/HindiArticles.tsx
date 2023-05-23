import getNewsHindiResults from "@/lib/getNewsResult";

import Link from 'next/link'
import  Image  from 'next/image';

export default  async function  HindiArticles(){
    const newsData: Promise<{ articles: Array<articles> }> = getNewsHindiResults();
    const results = await newsData;
    const articles: Array<articles> = results.articles;
const content=
       <section className="mt-2 ">

        <h1 className="text-2xl ml-2 text-cyan-300 font-bold">Hindi News</h1>
        
        <ul className="p-2 flex flex-col gap-10">
        {articles.map((result:any)=>(
                <li key={result.source.title} className=' pb-2 border-cyan-200 border-b-[1px] '>

<Image src={result.image} className='rounded' alt={result.title} placeholder="blur"/>
                
                <h1 className='text-[1.3rem] text-white  font-medium mt-2 '>{result.title}</h1>
                <p className='font-extralight text-white mt-2'>{result.description}</p>

                <br/>
                <Link href={result.source.url} >🖇️  
  <span className='text-cyan-300 hover:text-cyan-500  cursor-pointer underline underline-offset-1'>
     Read Full Article here
    </span> </Link>
                </li>
        ))}
        </ul>
      
        </section>   

     
     
return content;

  
}