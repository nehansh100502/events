const mongoose = require('mongoose');

// Define the Ticket Schema
const ticketSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  event: { type: String, required: true },
  ticketQuantity: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
});

// Create and export the Ticket model
const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;
