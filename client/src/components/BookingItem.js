import React from 'react';
import {deleteBooking} from "../services/BookingService"

const BookingItem = ({booking, removeBooking}) => {

  const handleDelete = () => {
    deleteBooking(booking._id).then(() => {
      removeBooking(booking._id)
    })
  }

  return (
    <ul>
      <li>Guest: {booking.name}</li>
      <li>Email address: {booking.email}</li>
      <li>Checked in: {booking.status?<span>&#10003;</span>:<span>&#10060;</span>}</li>
      <button onClick={handleDelete}>🗑 </button>
    </ul>

  )
};

export  default BookingItem;
