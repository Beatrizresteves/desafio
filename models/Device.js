const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  metrics: { type: String, required: true }
});

module.exports = mongoose.model('Device', deviceSchema);
