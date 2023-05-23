
import  EnglishArticles  from '@/components/EnglishArticles';
import HindiArticles from "@/components/HindiArticles";





export default  function Home() {
  return (
    <>
    
    <main className="max-w-[46rem] mx-auto md:max-w-[62rem] md:mx-auto lg:max-w-5xl lg:mx-auto p-2  ">
  
      
      <h1 className='text-2xl text-cyan-300 font-medium'>Top Trending Articles</h1>
    
  {/* @ts-expect-error Async Server Component */}
     <EnglishArticles/>{/* @ts-expect-error Async Server Component */}
   
     <HindiArticles/>
   
    </main>


   
    </>
  )
}
