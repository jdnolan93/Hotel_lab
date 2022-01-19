import React, { useEffect, useState } from 'react';
import BookingForm from '../components/BookingForm';
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
    <BookingForm/>
    <BookingList bookings={bookings}/>
  </div>
  );
};


export default BookingContainer;

