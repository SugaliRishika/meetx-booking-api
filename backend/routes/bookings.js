// routes/bookings.js
const express = require('express');
const router = express.Router();
const { bookActivity, getMyBookings } = require('../controllers/bookingController');
const authMiddleware = require('../middlewares/auth'); // Ensure you have this
const Booking = require('../models/Booking');

// Book an activity (Protected)
router.post('/', authMiddleware, bookActivity);

// Get user's bookings (Protected)
// router.get('/my', authMiddleware, getMyBookings);

router.get('/', authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;
        const bookings = await Booking.find({ user: userId }).populate('activity');
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;
