const express = require('express');
const router = express.Router();
const User = require('../models/user');  // Correct import for the User model
const { authMiddleware } = require('../middleware/auth');
const { Logout, ForgotPassword, ResetPassword } = require('../middleware/auth');
const { GetUserProfile } = require('../controllers/user');

// POST route for signup
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });

        await user.save();

        const token = await user.generateAuthToken();

        res.status(201).send({ user, token });
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});


// POST route for login
router.post('/login', async (req, res) => {
    try {
        console.log('Login request body:', req.body);  // Debugging

        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.status(200).json({ message: 'Login successful', user, token });
    } catch (error) {
        console.error('Login error:', error);  // Debugging
        res.status(400).json({ message: 'Login failed', error: error.message });
    }
});

// POST route for logout
router.post('/logout', (req, res) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Please authenticate' });
    }
  
    const token = authHeader.split(' ')[1];
    // Verify token here
  
    // If valid, proceed with logout logic
    // Example: Remove token from the database or blacklist it
  
    res.status(200).json({ message: 'Logout successful' });
  });
  

// POST route for forgot password
router.post('/forgot-password', (req, res, next) => {
    ForgotPassword(req, res, next);
});

// POST route for reset password
router.post('/reset-password/:resetToken', (req, res, next) => {
    ResetPassword(req, res, next);
});
router.get('/profile',authMiddleware,GetUserProfile);

module.exports = router;
