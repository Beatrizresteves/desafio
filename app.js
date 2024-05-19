const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const deviceRoutes = require('./routes/devices');
const app = express();

mongoose.connect('mongodb://localhost:27017/iot-platform', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/devices', deviceRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
