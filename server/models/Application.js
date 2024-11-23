const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  deadline: { type: Date, required: true },
  status: { type: String, enum: ['Applied', 'Interview', 'Rejected', 'Accepted'], default: 'Applied' },
  contactInfo: { type: String },
});

module.exports = mongoose.model('Application', ApplicationSchema);
