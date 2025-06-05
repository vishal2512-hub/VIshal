import React from 'react'
import Navbar from '../component/Navbar'
import Moviecard from '../component/Moviecard'
import movies from './movies'
import './home.css'



const Home = () => {
  
  return (
    <div>
      <Navbar/>
      <h1>Now Showing</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <Moviecard key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  )
}


// list of movie 
// city 
// search bar 

export default Home