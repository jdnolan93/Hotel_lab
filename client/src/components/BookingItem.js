import React from 'react';

const BookingItem = ({booking}) => {
  return (
    <ul>
      <li>Guest: {booking.name}</li>
      <li>Email address: {booking.email}</li>
      <li>Checked in: {booking.status?<span>&#10003;</span>:<span>&#10060;</span>}</li>
    </ul>

  )
};

export  default BookingItem;
