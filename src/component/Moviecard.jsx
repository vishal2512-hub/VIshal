import React from 'react'
import '../Pages/movies';
import { Navigate, useNavigate } from 'react-router-dom';

const Moviecard = ({ movie }) => {
  const navigate = useNavigate();

  const Moving = () =>  {
    navigate(`/movie/${movie.id}`)
  }

  return (
    <div className="movie-card">
      <div onClick={Moving}>

      <img src={movie.poster} alt={movie.title}/>

      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      </div>
    </div>
  )
}

export default Moviecard
