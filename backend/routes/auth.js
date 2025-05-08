const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();
const bcrypt = require('bcryptjs'); // or 'bcrypt' if you're using that version

// filepath: c:\Users\rishi\Downloads\MeetX Backend Developer Assignment\backend\middlewares\auth.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the decoded payload to the request
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// if (!authHeader || !authHeader.startsWith('Bearer ')) {
//   return res.status(401).json({ message: 'No token provided' });
// }

// const token = authHeader.split(' ')[1];

// Register Route
router.post('/register', register);

// Login Route
router.post('/login', login);

module.exports = router;
