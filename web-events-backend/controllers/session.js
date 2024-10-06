

const Session = require('./models/Session');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create a new session (Login)
exports.createSession = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Validate password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });

    // Create or update session
    let session = await Session.findOne({ userId: user._id });
    if (!session) {
      session = new Session({ userId: user._id, tokens: [{ token }] });
    } else {
      session.tokens.push({ token });
    }
    await session.save();

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Invalidate a session (Logout)
exports.invalidateSession = async (req, res) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');

    // Find the session containing the token
    const session = await Session.findOne({ 'tokens.token': token });
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    // Filter out the token to invalidate
    session.tokens = session.tokens.filter(t => t.token !== token);
    
    // Save the updated session
    await session.save();

    res.json({ message: 'Session invalidated' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Middleware to validate session (JWT Token)
exports.validateSession = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');

    // Verify the token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const session = await Session.findOne({ 'tokens.token': token, userId: decoded.userId });

    if (!session) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    // Attach user to the request
    req.user = await User.findById(session.userId);

    next();
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
