import React, { useEffect, useState } from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';
import { getBookings } from '../services/BookingService'


const BookingContainer = () => {

  const [bookings, setBooking] = useState([])

  useEffect(() => {
    getBookings()
      .then(bookings => setBooking(bookings))
  }, [])

  const addBooking = (booking) => {
    const temp = bookings.map(booking => booking);
    temp.push(booking);
    setBooking(temp);
  }

  return (
    <div>
      <BookingForm addBooking={addBooking} />
      <BookingList bookings={bookings} />
    </div>
  );
};


export default BookingContainer;

