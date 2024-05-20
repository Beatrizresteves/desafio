const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  commands: { type: [String], required: true }
});

module.exports = mongoose.model('Device', DeviceSchema);