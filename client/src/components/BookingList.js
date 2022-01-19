import React from 'react';
import BookingItem from './BookingItem';

const BookingList = ({ bookings, removeBooking }) => {

  const bookingNodes = bookings.map(booking => {
    return <BookingItem removeBooking={removeBooking} booking={booking} key={booking._id} />
  })


  return (
    <div>
      {bookingNodes}
    </div>
  );
};


export default BookingList;
