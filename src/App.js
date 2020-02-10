import React, {useState} from 'react';

import './App.css';
import { render } from '@testing-library/react';

function App() {
  const [movies, setMovies] = useState([
    {
      name: 'The Matrix',
      year: 1999,
    },
    {
      name: 'Toy Story',
      year: 1995,
    },
    {
      name: 'The Hobit',
      year: 2012,
    }
      
  ]);
  
  const [filteredMovies, setFiltered] = useState([]);
  
  //the first is the name of the state and the second is the name that will be used to update the state, the value of movies is inside the useState//
  // const changeMovie = () =>{
  //   //you must use const when you create a function that is inside a function//
  //   const newState = [...movies]; //...spread operator lets you copy the array
  //   newState[1].name = 'Gladiator'
  //   newState[1].year = 2000
   
  //   setMovies(newState)
  // }
  const searchMovies = (event) =>{
    const getState = [...movies];
    
    const myFilter = getState.filter((movie)=>{
      return movie.name.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0
      

      
    });
    setFiltered(myFilter)
    console.log(myFilter)
    // const animal = "camel";
    // console.log(animal.indexOf(event.target.value));
  }
  
  return (
    <div className="container">
      <h1>Search for movies</h1>
      <input type="text" onChange={searchMovies}></input>
      <h1>Movies:</h1>
      
      
      
      
      
      {movies.map((movie) => { //.map loops through arrays 
        return <h1>{movie.name} was released on {movie.year}</h1>
      } )}
      {filteredMovies.map( (myMovie) => {
        return <h1>{myMovie.name}</h1>
      })}
      {/* <button onClick={changeMovie}>Change Movie</button> */}
      {/*there is no need to use this.changeMovie */}
      </div>
  );
}

export default App;
