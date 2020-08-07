import React , {useState} from 'react'
import MovieCard from './MovieCard';
import Popup from './Popup';
import {Switch} from 'antd';

export default function SearchMovies() {

  const [query, setQuery] = useState('');

  const [state, setState] = useState({
    s:"",
    results:[],
    selected:{}
  });

  const [toggle , setToggle ] = useState(false);

  const toggler = () =>{
      toggle ? setToggle(false) : setToggle(true);
      
  }

  const apiurl = "https://www.omdbapi.com/?apikey=98f3c491";
  const searchMovies = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch(apiurl + "&s=" + query);
        const data = await res.json();
        let results = data.Search
        console.log(results);
        setState(prevState => {
          return {...prevState , results:results}
        });
      } catch (error) {
        console.log(error);
      }

      
  }
  
  const openPopup = async (id) => {
    const url = `https://www.omdbapi.com/?apikey=98f3c491&i=${id}`

    try {
      const res = await fetch(url);
      let result = await res.json();
      console.log(result);
      setState(prevState => {
        return {...prevState , selected:result}
      });
    } catch (error) {
      console.log(error);
    }
  }

  const closePopup = () =>{
    setState(prevState => {
      return {...prevState , selected:{}}
    });
  }

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">Movie Name</label>
        <input className="input" type="text" name="query"
            placeholder="Seacrh your movies here" 
            value={query} onChange={(e) => setQuery(e.target.value)} 
        />
        <button className="button" type="submit">Search</button>
      </form>
      <div className="card-list">
        {state.results.filter(movie => movie.Poster).map(movie => (
          <>
            <div className="card">
              <MovieCard movie={movie} key={movie.imdbID} openPopup={openPopup}/>
              <div className="App">
                <Switch onClick={toggler}/>
                {toggle? <span>Favourite</span>:<span>UnFavourite</span>}
              </div>
            </div>
          </>
        ))}
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup}/>:false}
      </div>
    </>
    
  )
}
