const mongoose = require('mongoose');

const parameterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const commandSchema = new mongoose.Schema({
  command: { type: String, required: true },
  parameters: [parameterSchema],
});

const commandDescriptionSchema = new mongoose.Schema({
  operation: { type: String, required: true },
  description: { type: String, required: true },
  command: commandSchema,
  result: { type: String, required: true },
  format: { type: String, required: true },
});

const deviceSchema = new mongoose.Schema({
  identifier: { type: String, required: true },
  description: { type: String, required: true },
  manufacturer: { type: String, required: true },
  url: { type: String, required: true },
  commands: [commandDescriptionSchema],
});

module.exports = mongoose.model('Device', deviceSchema);
