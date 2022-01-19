import React, { useEffect, useState } from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';
import { getBookings } from '../services/BookingService'
import { updateBooking } from '../services/BookingService';


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

  const removeBooking = (id) => {
    const temp = bookings.map(booking => booking);
    const filtered = temp.filter(booking => booking._id !== id)
    // const indexToDelete = temp.map(booking => booking._id).indexOf(id)
    // temp.splice(indexToDelete, 1);
    setBooking(filtered)
  }

  const updateBooking = (id) => {
    
  }

  return (
    <div>
      <BookingForm addBooking={addBooking} />
      <BookingList removeBooking={removeBooking} bookings={bookings} />
    </div>
  );
};


export default BookingContainer;

