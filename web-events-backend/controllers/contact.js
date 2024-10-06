// controllers/contact.js
const Contact = require('../models/contact'); // Import your Contact model

// Handle the contact form submission
const submitContactForm = async (req, res) => {
  try {
    const { email, message } = req.body;

    // Create a new contact record
    const newContact = new Contact({
      email,
      message,
    });

    // Save the contact record in the database
    await newContact.save();

    // Respond with success message
    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};

module.exports = { submitContactForm };
