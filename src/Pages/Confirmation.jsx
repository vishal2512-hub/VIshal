import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Confirmation.css';


const Confirmation = () => {
  const { state } = useLocation()
  const navigate = useNavigate();
  
  if(!state) {
    return (
       <div className="confirmation">
        <h2>No booking data found.</h2>
        <button onClick={() => navigate("/")}>Go to Home</button>
      </div>
    )
  }
  return (
    <div className='confirmation'>
      <h1>Booking confirmation</h1>
      <h2>Movie:{state.movieTitle}</h2>
       <p>Seats No: {state.seats.join(", ")}</p>
      <p>Total Paid: ₹{state.total}</p>
      <button onClick={() => navigate("/")}>Book Another</button>      
    </div>
  )
}

export default Confirmation
