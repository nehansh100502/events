// routes/contact.js
const express = require('express');
const { submitContactForm } = require('../controllers/contact');

const router = express.Router();

// POST route for contact form submission
router.post('/contact', submitContactForm);

module.exports = router;
