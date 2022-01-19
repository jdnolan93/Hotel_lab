import React from 'react';

 const BookingForm = () => {

  


  return( 
          <form onSubmit={onSubmit} id="bookings-form" >
            <h2>Add a Booking</h2>
            <div>
                <label htmlFor="name">Guest:</label>
                <input onChange={onChange} type="text" id="name"  />
            </div>
            <div className="formWrap">
                <label htmlFor="email">Email address:</label>
                <input onChange={onChange} type="email" id="email"  />
            </div>

            <input type="submit" value="Save" id="save"/>
	    </form>
  )
};

export default BookingForm;