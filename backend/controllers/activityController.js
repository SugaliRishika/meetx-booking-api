const Activity = require('../models/Activity');

exports.listActivities = async (req, res) => {
    try {
        const activities = await Activity.find();
        res.json(activities);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createActivity = async (req, res) => {
    const { title, description, location, dateTime } = req.body;

    try {
        const newActivity = new Activity({ title, description, location, dateTime });
        await newActivity.save();
        res.status(201).json(newActivity);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
