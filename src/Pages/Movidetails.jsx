import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './MovieDetails.css';
import movies from './movies';

const Movidetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id))
  const handleBooking = () => {
     navigate(`/book/${movie.id}`)
  }

  if (!movie) {
    return <h2>Movie not found </h2>
  }
  return (
    <div className='movie-details'>
      <img src={movie.poster} alt="" />
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <button onClick={handleBooking} className='book-now'>Book now </button>
      </div>
    </div>
  )
}

export default Movidetails
