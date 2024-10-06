const jwt = require('jsonwebtoken');
const User = require('../models/user');
const sendEmail = require('../utils/sendEmail'); // Assuming you have a sendEmail utility

// Middleware for authentication
const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Unauthorized: No token provided or incorrect format' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded || !decoded._id) {
            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }

        const user = await User.findById(decoded._id).select('username');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('Error in authMiddleware:', error.message);
        res.status(401).json({ error: 'Unauthorized' });
    }
};



// Refresh Token Endpoint
const RefreshToken = async (req, res) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET, { ignoreExpiration: true });
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

        if (!user) {
            throw new Error('User not found');
        }

        const newToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        user.tokens = user.tokens.filter((tokenObj) => tokenObj.token !== token);
        user.tokens.push({ token: newToken });
        await user.save();

        res.send({ token: newToken });
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
};

// Logout Endpoint
const Logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((tokenObj) => tokenObj.token !== req.token);
        await req.user.save();

        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Forgot Password Endpoint
const ForgotPassword = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        await user.save();

        const resetUrl = `http://localhost:3000/reset-password/${token}`;
        await sendEmail({
            to: req.body.email,
            subject: 'Password Reset',
            text: `Click this link to reset your password: ${resetUrl}`,
        });

        res.send({ message: 'Password reset email sent' });
    } catch (error) {
        res.status(500).send({ error: 'Server error' });
    }
};

// Reset Password Endpoint
const ResetPassword = async (req, res) => {
    try {
        const user = await User.findOne({
            resetPasswordToken: req.params.token,
            resetPasswordExpires: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(404).send({ error: 'Invalid reset token' });
        }

        user.password = req.body.password;
        user.resetPasswordToken = null;
        user.resetPasswordExpires = null;
        await user.save();

        res.send({ message: 'Password reset successfully' });
    } catch (error) {
        res.status(500).send({ error: 'Server error' });
    }
};

module.exports = { RefreshToken, authMiddleware, Logout, ForgotPassword, ResetPassword };
