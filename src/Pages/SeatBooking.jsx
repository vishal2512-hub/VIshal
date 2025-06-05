// src/pages/SeatBooking.js
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import movies from './movies';
import './SeatBooking.css';

function SeatBooking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  const [selectedSeats, setSelectedSeats] = useState([]);

  const seatNumbers = Array.from({ length: 80 }, (_, i) => i + 1); // 1 to 30

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleConfirm = () => {
    navigate("/confirm", {
      state: {
        movieTitle: movie.title,
        seats: selectedSeats,
        total: selectedSeats.length * 200,
      },
    });
  };

  return (
    <div className="seat-booking">
      <h2>Booking for: {movie.title}</h2>
      <div className="seats">
        {seatNumbers.map((seat) => (
          <button
            key={seat}
            className={`seat ${selectedSeats.includes(seat) ? "selected" : ""}`}
            onClick={() => toggleSeat(seat)}
          >
            {seat}
          </button>
        ))}
      </div>

      <div className="summary">
        <h3>Selected Seats: {selectedSeats.join(", ") || "None"}</h3>
        <h3>Total: ₹{selectedSeats.length * 200}</h3>
        {selectedSeats.length > 0 && (
          <button className="confirm" onClick={handleConfirm}>
            Confirm Booking
          </button>
        )}
      </div>
    </div>
  );
}

export default SeatBooking;
