const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sessionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    username: {
        type: String,
        required: true,
    },

    token: {
      type: String,
      required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600, // session expires after 1 hour
    }
});


module.exports = mongoose.model('Session', sessionSchema);

