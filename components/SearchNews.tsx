'use client';
import React from "react";
import {FormEvent, useState } from "react";
export default function SearchNews(){
    const [search,setSearch] = useState('');

    const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      setSearch('');

    }

    return (
        <form className="" onSubmit={handleSubmit} >

            <input type='text' placeholder="Enter the text to search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
          

          <button className="p-2 text-xl rounded-xl bg-teal-300 ">Search</button>

        </form>
    )
    
}