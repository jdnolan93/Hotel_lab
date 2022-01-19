import React, { useState } from 'react';
import { postBooking } from '../services/BookingService';

const BookingForm = ({ addBooking }) => {

  const [formData, setFormData] = useState({})

  const onChange = (e) => {
    formData[e.target.id] = e.target.value
    setFormData = formData
  }

  const onSubmit = (e) => {
    e.preventDefault();
    formData.status = false;
    postBooking(formData).then((data) => {
      addBooking(data)
    });
  }


  return (
    <form onSubmit={onSubmit} id="bookings-form" >
      <h2>Add a Booking</h2>
      <div>
        <label htmlFor="name">Guest:</label>
        <input onChange={onChange} type="text" id="name" />
      </div>
      <div className="formWrap">
        <label htmlFor="email">Email address:</label>
        <input onChange={onChange} type="email" id="email" />
      </div>

      <input type="submit" value="Save" id="save" />
    </form>
  )
};

export default BookingForm;