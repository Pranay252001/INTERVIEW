const express = require('express');
const UserSkill = require('../models/UserSkill');

const router = express.Router();

// Get user skills
router.get('/:userId', async (req, res) => {
  try {
    const skills = await UserSkill.findOne({ userId: req.params.userId });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update skills
router.post('/:userId', async (req, res) => {
  try {
    const updatedSkills = await UserSkill.findOneAndUpdate(
      { userId: req.params.userId },
      { $set: { skills: req.body.skills } },
      { new: true, upsert: true }
    );
    res.json(updatedSkills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
