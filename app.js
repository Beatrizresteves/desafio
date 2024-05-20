const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const deviceRoutes = require('./routes/devices');
const app = express();

app.use(cors());

mongoose.connect('mongodb://0.0.0.0:27017/iot-platform', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/devices', deviceRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
