import React, { useState } from 'react';

// ReservationForm component for handling reservation submissions
const ReservationForm = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission (e.g., send data to server)
    console.log('Reservation submitted:', { name, email, date, time, guests });
  };

  return (
    <section className="reservation-form">
      <h2>Make a Reservation</h2>
      
      {/* Reservation form */}
      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Email input */}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Date input */}
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        {/* Time input */}
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        {/* Guests input */}
        <label htmlFor="guests">Number of Guests:</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />

        {/* Submit button */}
        <button type="submit">Submit Reservation</button>
      </form>
    </section>
  );
};

export default ReservationForm;
