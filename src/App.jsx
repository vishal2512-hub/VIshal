import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Movidetails from './Pages/Movidetails';
import SeatBooking from './Pages/SeatBooking';
import Confirmation from './Pages/Confirmation'
import './App.css'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movie/:id' element={<Movidetails/>} />
      <Route path='/book/:id' element={<SeatBooking/>}/>
      <Route path='/confirm' element ={<Confirmation/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App