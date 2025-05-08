const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Activity = require('./models/Activity');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected. Seeding data...');
    return Activity.insertMany([
      {
        title: 'Cricket Match',
        description: 'Local tournament finals',
        location: 'Stadium A',
        dateTime: new Date('2025-05-10T15:00:00')
      },
      {
        title: 'Football Match',
        description: 'Inter-school friendly match',
        location: 'Ground B',
        dateTime: new Date('2025-05-12T18:00:00')
      },
      {
        title: 'Movie Screening',
        description: 'Special premiere of an upcoming film',
        location: 'Cinema Hall C',
        dateTime: new Date('2025-05-15T20:00:00')
      }
    ]);
  })
  .then((activities) => {
    console.log('Activities seeded successfully. IDs:');
    activities.forEach(activity => console.log(activity._id.toString())); // Log only the IDs
    mongoose.disconnect();
  })
  .catch((err) => {q
    console.error('Seeding error:', err);
    mongoose.disconnect();
  });