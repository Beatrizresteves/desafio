const express = require('express');
const router = express.Router();
const Device = require('../models/Device');

// GET all devices
router.get('/devices', async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (error) {
    console.error('Error fetching devices:', error);
    res.status(500).json({ message: 'Error fetching devices' });
  }
});

module.exports = router;
