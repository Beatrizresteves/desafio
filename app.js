const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const deviceRoutes = require('./routes/devices');
const app = express();

app.use(cors());
app.use(bodyParser.json()); // Adiciona bodyParser para parsear JSON

mongoose.connect('mongodb://0.0.0.0:27017/iot-platform', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/devices', deviceRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
