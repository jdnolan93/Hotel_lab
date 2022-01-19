import React, { useEffect, useState } from 'react';
import BookingList from '../components/BookingList';
import {getBookings} from '../services/BookingService'


const BookingContainer = () => {

  const [bookings, setBooking] = useState([])
  useEffect(() => {
    getBookings()
    .then(bookings => setBooking(bookings))
  }, [])

  return (
  <div>
    <BookingList bookings={bookings}/>
  </div>
  );
};


export default BookingContainer;

