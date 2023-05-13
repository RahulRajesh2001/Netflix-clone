import React,{useEffect, useState} from 'react'
import axios from "../../Constants/axios"
import { API_key} from '../../Constants/constans'
import { imageUrl } from '../../Constants/constans'
import "./Banner.css"

const Banner = () => {
  
  const [movie, setMovie]=useState('')
 
  useEffect(() => {
    
    axios.get(`trending/all/week?api_key=${API_key}&language=en-US`).then((response)=>{
     setMovie(response.data.results[0])

    })
  }, [])
  
  return (
    <div  style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie.title}</h1>     
        <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
       <h1 className='description'>{movie.overview}</h1> 
       </div>
       <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner