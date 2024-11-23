const mongoose = require('mongoose');

const UserSkillSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  skills: [
    {
      skill: { type: String },
      proficiency: { type: Number }, // e.g., 1-100 scale
    },
  ],
});

module.exports = mongoose.model('UserSkill', UserSkillSchema);
