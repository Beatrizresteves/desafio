const express = require('express');
const router = express.Router();
const Device = require('../models/Device');
const { getDeviceData } = require('../services/telnetService');

// GET all devices
router.get('/', async (req, res) => {
  try {
    const devices = await Device.find({}, 'identifier');
    res.status(200).json(devices);
  } catch (error) {
    console.error('Error fetching devices:', error);
    res.status(500).json({ message: 'Error fetching devices' });
  }
});

// POST a new device
router.post('/', async (req, res) => {
  const device = new Device(req.body);
  try {
    const savedDevice = await device.save();
    res.status(201).header('Location', `/api/devices/${savedDevice._id}`).json(savedDevice);
  } catch (error) {
    console.error('Error saving device:', error);
    res.status(500).json({ message: 'Error saving device' });
  }
});

// GET device details by ID
router.get('/:id', async (req, res) => {
  try {
    const device = await Device.findById(req.params.id);
    if (device) {
      res.status(200).json(device);
    } else {
      res.status(404).json({ message: 'Device not found' });
    }
  } catch (error) {
    console.error('Error fetching device details:', error);
    res.status(500).json({ message: 'Error fetching device details' });
  }
});

// PUT update device details by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedDevice = await Device.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedDevice) {
      res.status(200).json(updatedDevice);
    } else {
      res.status(404).json({ message: 'Device not found' });
    }
  } catch (error) {
    console.error('Error updating device:', error);
    res.status(500).json({ message: 'Error updating device' });
  }
});

// DELETE device by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedDevice = await Device.findByIdAndRemove(req.params.id);
    if (deletedDevice) {
      res.status(200).json(deletedDevice);
    } else {
      res.status(404).json({ message: 'Device not found' });
    }
  } catch (error) {
    console.error('Error deleting device:', error);
    res.status(500).json({ message: 'Error deleting device' });
  }
});

// POST fetch device data
router.post('/data', async (req, res) => {
  const { devices } = req.body;

  try {
    const results = await Promise.all(
      devices.map(async (device) => {
        const responses = await Promise.all(
          device.commands.map(async (command) => {
            const response = await getDeviceData(device, command.command);
            return { command: command.command, response };
          })
        );
        return { device: device.identifier, responses };
      })
    );

    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching device data', error);
    res.status(500).json({ message: 'Error fetching device data' });
  }
});

module.exports = router;
