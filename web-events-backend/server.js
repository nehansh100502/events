
const app = require('./app'); // Import the app from app.js
const mongoose = require('mongoose');

// Load environment variables from .env file
require('dotenv').config();

// Set up the environment variables for PORT and DB_URI
const PORT = process.env.PORT || 4001;
const DB_URI = process.env.DB_URI;

if (!DB_URI) {
    console.error("Error: The DB_URI environment variable is not defined.");
    process.exit(1); 
}

// Connect to the MongoDB database using mongoose
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000 // Optional timeout
})
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((err) => {
        console.error('Database connection error: ', err);
    });

// Start the server on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
