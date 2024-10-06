const { format } = require('date-fns'); // Import date-fns for formatting dates
const Event = require('../models/event');

exports.addEvent = async (req, res) => {
  try {
    const { title, date, city, state, description, eventType } = req.body;

    // Parse the date and format it to exclude the time zone
    const eventDate = new Date(date); // Assuming the frontend sends the date in ISO format or YYYY-MM-DD

    // Format the date to show day name (like "Monday") and the date (e.g., September 15, 2024)
    const formattedDate = format(eventDate, 'EEEE, MMMM d, yyyy'); // e.g., "Monday, September 15, 2024"

    // Create a new event document
    const newEvent = new Event({
      title,
      date: formattedDate, // Store formatted date
      description,
      city,
      state,
      eventType,
      image: req.file ? req.file.filename : null, // Store image file name
    });

    // Save event to database
    await newEvent.save();

    // Return success response
    res.status(201).json({ message: "Event created successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating event", error });
  }
};
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();

    // Format the dates before sending them back to the client
    const formattedEvents = events.map(event => ({
      ...event._doc, // Spread the existing event data
      date: format(new Date(event.date), 'EEEE, MMMM d, yyyy') // Format the date
    }));

    res.status(200).json(formattedEvents);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Format the date before sending the response
    const formattedEvent = {
      ...event._doc, // Spread the event properties
      date: format(new Date(event.date), 'EEEE, MMMM d, yyyy') // Format the date
    };

    res.status(200).json(formattedEvent);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Add the delete event function
exports.deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.id;

    // Find the event by ID and delete it
    const deletedEvent = await Event.findByIdAndDelete(eventId);

    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json({ message: 'Event deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event', error: error.message });
  }
};
