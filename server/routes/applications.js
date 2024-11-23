const express = require('express');
const Application = require('../models/Application');

const router = express.Router();

// Get all applications
router.get('/', async (req, res) => {
  try {
    const applications = await Application.find();
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new application
router.post('/', async (req, res) => {
  try {
    const newApplication = new Application(req.body);
    const savedApplication = await newApplication.save();
    res.json(savedApplication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
