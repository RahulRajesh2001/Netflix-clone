import React,{useEffect, useState}from 'react'
import "./RowPost.css"
import axios from "../../Constants/axios"
import { imageUrl } from '../../Constants/constans'


const RowPost = (props) => {
  const [original, setOriginal] = useState([])

  useEffect(() => {
    axios.get(props.url).then(response=>{
      setOriginal(response.data.results)
    })
  }, [])
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {original.map((obj)=>
           <img  className={props.isSmall ? "smallPoster":"poster" } src={`${imageUrl+obj.backdrop_path}`} alt='poster'/>
          )}
           
        </div>
    </div>
  )
}

export default RowPost