const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure the 'uploads' directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true }); // Ensure the directory is created if it doesn't exist
}

// Configure storage for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir); // Use the absolute path to the uploads directory
  },
  filename: (req, file, cb) => {
    // Generate a unique filename with timestamp and file extension
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Initialize Multer with the configured storage
const upload = multer({ storage: storage });

module.exports = upload;
