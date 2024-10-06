const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticket'); 

// POST route to book tickets
router.post('/tickets', async (req, res) => {
  const { name, email, phone, event, ticketQuantity, paymentMethod } = req.body;

  if (!name || !email || !phone || !event || !ticketQuantity || !paymentMethod) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Create a new ticket instance
    const ticket = new Ticket({
      name,
      email,
      phone,
      event,
      ticketQuantity,
      paymentMethod
    });

    // Save the ticket to the database
    await ticket.save();
    
    res.status(201).json({ message: 'Ticket booked successfully!', ticket });
  } catch (error) {
    console.error('Error booking ticket:', error);
    res.status(500).json({ error: 'Failed to book the ticket. Please try again.' });
  }
});

module.exports = router;
