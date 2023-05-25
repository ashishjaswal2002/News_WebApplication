export const metadata = {
    title: 'Sports News',
    description: 'Get latest news articles included Hindi,English,Sports,Entertainment and much more',
    keywords:'Latest News,News,news,hindi news,english news,sports news',
  
  }
import Image from 'next/image'
import getSportsNews from "@/lib/getSports"
import Link from 'next/link';
export default async function SportsNews(){
      
    const newsData =getSportsNews();
    const results = await newsData

    await new Promise((resolve)=>setTimeout(resolve,100))
    const newArr:articles[] = results.articles





    return (
        <main className='mt-4 '>

        <h1 className="text-cyan-400 text-2xl font-medium"> Sports News </h1>
        <ul className="p-2 flex flex-col gap-10">
          
        {newArr && newArr.map((result:any)=>(
                <li key={result.source.title} className=' pb-2 border-cyan-200 border-b-[1px] '>

                
<Image src={result.image} className='rounded' alt={result.title} width={500} height={500} unoptimized />
                <h1 className='text-[1.3rem] text-white  font-medium mt-2 '>{result.title}</h1>
                <p className='font-extralight text-white mt-2 '>{result.description}</p>
                <br/>
                <Link href={result.source.url} >🖇️  
  <span className='text-cyan-300 hover:text-cyan-500  cursor-pointer underline underline-offset-1'>
     Read Full Article here
    </span> </Link>
                </li>
        ))}
        </ul>

       
        </main>
    )
}
