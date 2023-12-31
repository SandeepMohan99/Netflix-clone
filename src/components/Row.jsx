import instance from '../instance';
import './Row.css';
import React, { useEffect, useState } from 'react'

function Row({title,fetchURL,isPoster}) {
  
  const [allMovies,setAllMovies]=useState()
  const base_url = "https://image.tmdb.org/t/p/original/";
  
  const fetchData = async()=>{
   const {data} =  await instance.get(fetchURL)
     
     setAllMovies(data.results)
  }

   console.log(allMovies);


  useEffect(()=>{
    fetchData()
  },[])


  return (
    <div className='row'>
        
        <h1>{title}</h1>
        <div className="movie_row">
         {
          allMovies?.map(item=>(
            <img className={`movies ${isPoster && 'movie-poster'} `} src={`${base_url}/${isPoster?item?.poster_path:item?.backdrop_path}`} alt="no image" />
          ))
         }
        </div>
    </div>
  )
}

export default Row