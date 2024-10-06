
const express = require('express');
const mongoose = require('mongoose');
const upload = require('../middleware/multer'); // Adjust the path to your multer configuration file
const { addEvent,getEvents, getEventById,deleteEvent, } = require('../controllers/event');
const Event = require('../models/event'); // Import your Event model if needed

const router = express.Router();

// Route to add a new event
router.post("/events", upload.single("image"), async (req, res) => {
  try {
   
    // Create and save a new event
    const newEvent = new Event({
        title: req.body.title,
        date: req.body.date,
        city: req.body.city,
        state: req.body.state,
        eventType: req.body.eventType,
        description: req.body.description,
        image: req.file ? req.file.filename : null, // Store filename or URL
    });

    await newEvent.save();
    res.status(201).json({ message: "Event created successfully!" });
  } catch (error) {
    console.error("Error creating event:", error); // Log the error
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

// Route to get all events
router.get('/events', getEvents);

// Route to get a single event by its ID
router.get('/events/:id', getEventById);
// router.delete('/events', deleteEvent);

router.delete('/events/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Event.findByIdAndDelete(id);
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting event' });
  }
});

module.exports = router;
