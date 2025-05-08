const jwt = require('jsonwebtoken');

// Replace 'user_id_here' with the actual user ID you want to encode in the token
const payload = { id: 'user_id_here' };

// Use the JWT_SECRET from your .env file
const secret = 'b7e3b154f2949a4b7c1e5f3a5b8d8e3c3e6f5f4b7e2c1a5b9e4a3b7d6f1a2e9';

// Generate the token
const token = jwt.sign(payload, secret, { expiresIn: '1h' }); // Token expires in 1 hour

console.log('Generated Token:', token);