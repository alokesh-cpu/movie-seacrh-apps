import React,{useState} from 'react'
import {Switch} from 'antd';

export default function MovieCard({movie,openPopup}) {

  const [toggle , setToggle ] = useState(false);

  const toggler = () =>{
      toggle ? setToggle(false) : setToggle(true);
  }

  return (
      <>
        <div className="card" onClick={()=>openPopup(movie.imdbID)} >
            <img className="card--image"
                src={movie.Poster}
                alt={movie.Title + ' poster'} >
            </img>
            <div className="card--content">
                <h3 className="card--title">{movie.Title}</h3>
                <p><small>RELEASED YEAR:{movie.Year}</small></p>
            </div> 
        </div>
        
      </>
    
  )
}
