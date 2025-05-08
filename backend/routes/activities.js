const express = require('express');
const { listActivities, createActivity } = require('../controllers/activityController');
const router = express.Router();

// Public Route
router.get('/', listActivities);

// (Optional) Admin-only route to create activities
router.post('/', createActivity);

module.exports = router;
