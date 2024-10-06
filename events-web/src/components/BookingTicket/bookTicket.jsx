import React, { useState } from 'react';
import './ticketBooking.css'; // Create this file for styling if needed

function TicketBooking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: '',
    ticketQuantity: 1,
    paymentMethod: 'credit-card',
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate form submission
    try {
      const response = await fetch('http://localhost:4001/api/v1/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('Your ticket has been booked successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          event: '',
          ticketQuantity: 1,
          paymentMethod: 'credit-card',
        });
      } else {
        setSubmitStatus('Failed to book your ticket. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting ticket:', error);
      setSubmitStatus('An error occurred while booking the ticket.');
    }
  };

  return (
    <div className="ticket-booking-container bg-white py-12 px-8 md:w-2/3 mx-auto rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-8 mt-16">Book Your Ticket Now</h2>
      <form onSubmit={handleSubmit} className="ticket-booking-form space-y-6">

        {/* Name */}
        <div className="form-group">
          <label className="block text-gray-700 text-lg" htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-100 h-10 px-4 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label className="block text-gray-700 text-lg" htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-100 h-10 px-4 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label className="block text-gray-700 text-lg" htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-gray-100 h-10 px-4 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            required
            pattern="^\+?[0-9]{10,13}$" // Simple phone validation pattern
            placeholder="+1234567890"
          />
        </div>

        {/* Select Event */}
        <div className="form-group">
          <label className="block text-gray-700 text-lg" htmlFor="event">Select Event</label>
          <select
            id="event"
            name="event"
            value={formData.event}
            onChange={handleChange}
            className="w-full bg-gray-100 h-10 px-4 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            required
          >
            <option value="">-- Choose an Event --</option>
            <option value="Tech Innovators Conference">Tech Innovators Conference</option>
            <option value="Design Thinking Workshop">Design Thinking Workshop</option>
            <option value="Art & Technology Expo">Art & Technology Expo</option>
          </select>
        </div>

        {/* Ticket Quantity */}
        <div className="form-group">
          <label className="block text-gray-700 text-lg" htmlFor="ticketQuantity">Number of Tickets</label>
          <input
            type="number"
            id="ticketQuantity"
            name="ticketQuantity"
            value={formData.ticketQuantity}
            onChange={handleChange}
            min="1"
            className="w-full bg-gray-100 h-10 px-4 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        {/* Payment Method */}
        <div className="form-group">
          <label className="block text-gray-700 text-lg" htmlFor="paymentMethod">Payment Method</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                id="credit-card"
                name="paymentMethod"
                value="credit-card"
                checked={formData.paymentMethod === 'credit-card'}
                onChange={handleChange}
                className="mr-2"
              />
              Credit Card
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                id="paypal"
                name="paymentMethod"
                value="paypal"
                checked={formData.paymentMethod === 'paypal'}
                onChange={handleChange}
                className="mr-2"
              />
              PayPal
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Book Now
          </button>
        </div>

        {/* Submission Status */}
        {submitStatus && (
          <div className="text-center mt-4">
            <p className={submitStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'}>
              {submitStatus}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default TicketBooking;
