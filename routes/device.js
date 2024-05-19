const express = require('express');
const Device = require('../models/Device');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (error) {
    res.status(500).send('Error fetching devices');
  }
});

module.exports = router;
