const mongoose = require('mongoose');

const parameterSchema = new mongoose.Schema({
  param: { type: String }
});

const commandSchema = new mongoose.Schema({
  operation: { type: String, required: true },
  description: { type: String, required: true },
  command: {
    command: { type: String, required: true },
    parameters: [parameterSchema]
  },
  result: { type: String, required: true },
  format: { type: String, required: true }
});

const deviceSchema = new mongoose.Schema({
  identifier: { type: String, required: true },
  description: { type: String, required: true },
  manufacturer: { type: String, required: true },
  url: { type: String, required: true },
  commands: [commandSchema]
});

module.exports = mongoose.model('Device', deviceSchema);
