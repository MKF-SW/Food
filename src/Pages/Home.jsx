import React from 'react'
import { useState,useEffect } from 'react';
import axios, { Axios } from 'axios';
const Home = () => {

  //  Enter the APP_ID AND APP_KEY
const APP_ID=''
const APP_KEY=''



const [value, setValue] =useState();
const [what,setWhat]=useState();
const [api,setApi]=useState();
useEffect(()=>{

  axios(`https://api.edamam.com/search?q=${what? what:'Burger'}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  .then(function (response) {
    setApi(response.data.hits)
    console.log(response.data.hits)
  })




},[what])







  return (
    <>
    
    
    <form>
      <input value={value} onChange={(e)=>{e.preventDefault(); setValue(e.target.value)} } className='bg-orange-300 text-center text-lg ml-80 text-red-800  rounded-xl ' />
      <button onClick={(e)=>{e.preventDefault();setWhat(value)}} className='bg-red-400 w-7 rounded-2xl' >Go</button>
    </form>
    
    
    
    
    
    
    {
      api?.map((meal,i)=>{
        return(
          <>
            <section className='text-green-100 bg-yellow-600 m-4 inline-block rounded-3xl w-4/5 py-28 my-28 ' key={i} >
              <img src={meal.recipe.image} className='w-4/5 px-20 ' />
              <p className='text-3xl text-red-200 '>{meal.recipe.label}</p>
                      {meal.recipe.ingredientLines?.map((line)=>{
                          console.log(line)
                          return ( <p>{line}</p>) 
                      })}
            </section>
          </>
        )
      
      })}
    </>
 )
}

export default Home


