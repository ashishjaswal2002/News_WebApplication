'use client'
import Link from "next/link"
import Search from "./SearchNews"
import { useState } from 'react';


export default function NavBar (){
  const [show,setShow] = useState(false);
 
    function showButtonHandler (){
      setShow(prev=>!prev)   

    }
      
   const content = <div className='w-[50%] bg-[#0f172a] text-white text-center min-h-screen relative C11'>
      
    <nav className=' sticky top-0 flex flex-col gap-5 '>
     <div className="mt-4 ">
     <Link href='/'>
      <h1 className="text-center text-2xl "><span className="text-2xl underline text-rose-600 ">News</span> Bulletin</h1>
     
     </Link>
    
     </div>
     <div className="bg-cyan-400 hover:bg-cyan-500 rounded-md p-[5px]">
      <Link href='/'>Home 🏠</Link>
      </div>

     <div className="bg-pink-400 hover:bg-pink-500 rounded-md p-[5px]">
      <Link href='entertainment'>Entertainment</Link>
      </div>

      <div className="bg-teal-400 hover:bg-teal-500 rounded-md p-[5px]">
      <Link href='sports'>Sports</Link>
      </div>

      <div className="bg-red-400 hover:bg-red-500 rounded-md p-[5px]">
      <Link href='technology'>Technology</Link>
      </div>

    <div className='absolute top-0 right-[2%] C33  'onClick={showButtonHandler} >❌ </div>
    </nav>
    </div>
    

    const navigation = (
   
      <div className='w-[50%] bg-[#0f172a] text-white text-center min-h-screen  '>
        
       
        <span className='text-3xl sticky inset-0 float-right C66' onClick={showButtonHandler} >🍔
        
        
        <div className='flex flex-col mt-10 gap-10 text-red-500 C55'>

          <div>N</div>
          <div>E</div>
          <div>W</div>
          <div>S</div>
        


        </div>
        <div className='flex flex-col mt-10 gap-4 text-cyan-400 C55'>

<div>B</div>
<div>U</div>
<div>L</div>
<div>L</div>
<div>E</div>
<div>T</div>
<div>I</div>
<div>N</div>



</div>
        </span>

     
        
    
      </div>
    


    )

    

      return show ? content : navigation;

     
  
}