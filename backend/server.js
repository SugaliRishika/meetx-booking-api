// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// // Import Routes
// const authRoutes = require('./routes/auth');
// const activityRoutes = require('./routes/activities');
// const bookingRoutes = require('./routes/bookings');

// dotenv.config();

// // Default Route
// app.get('/', (req, res) => {
//     res.send('Welcome to the Basic Activity Booking App API!');
// });

// // Fallback Route for Undefined Endpoints
// app.use((req, res) => {
//     res.status(404).send('Endpoint not found');
// });

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch((err) => console.error('Database connection error:', err));

// // Routes Middleware
// app.use('/api/auth', authRoutes);
// app.use('/api/activities', activityRoutes);
// app.use('/api/bookings', bookingRoutes);

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

// Routes Middleware
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express(); // ✅ Move this up

// Import Routes
const authRoutes = require('./routes/auth');
const activityRoutes = require('./routes/activities');
const bookingRoutes = require('./routes/bookings');

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes Middleware
app.use('/api/auth', authRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/bookings', bookingRoutes);

// Default Route
app.get('/', (req, res) => {
    res.send('Welcome to the Basic Activity Booking App API!');
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Database connection error:', err));

// Fallback Route
app.use((req, res) => {
    res.status(404).send('Endpoint not found');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
