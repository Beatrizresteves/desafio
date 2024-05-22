// src/controllers/deviceController.js
const Device = require('../models/Device');

// Listar todos os dispositivos
exports.getAllDevices = async (req, res) => {
  try {
    const devices = await Device.find().select('identifier');
    res.json(devices);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Cadastrar um novo dispositivo
exports.createDevice = async (req, res) => {
  try {
    const device = new Device(req.body);
    await device.save();
    res.status(201).location(`/device/${device.identifier}`).send();
  } catch (error) {
    res.status(400).send(error);
  }
};

// Obter detalhes de um dispositivo
exports.getDevice = async (req, res) => {
  try {
    const device = await Device.findById(req.params.id);
    if (!device) return res.status(404).send();
    res.json(device);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Atualizar um dispositivo
exports.updateDevice = async (req, res) => {
  try {
    const device = await Device.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!device) return res.status(404).send();
    res.json(device);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Remover um dispositivo
exports.deleteDevice = async (req, res) => {
  try {
    const device = await Device.findByIdAndRemove(req.params.id);
    if (!device) return res.status(404).send();
    res.json(device);
  } catch (error) {
    res.status(500).send(error);
  }
};
