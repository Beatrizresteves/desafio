const express = require('express');
const { getDeviceData } = require('../services/telnetService');
const router = express.Router();

router.post('/data', async (req, res) => {
  const { device, command } = req.body;
  try {
    const data = await getDeviceData(device, command);
    res.json({ data });
  } catch (error) {
    res.status(500).send('Error fetching device data');
  }
});

module.exports = router;
