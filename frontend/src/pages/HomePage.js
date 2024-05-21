import React, { useState, useEffect } from 'react';
import MapComponent from '../components/MapComponent';
import axios from 'axios';

const HomePage = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetchDevices();
  }, []);

  const fetchDevices = async () => {
    try {
      const response = await axios.get('/api/devices');
      setDevices(response.data);
    } catch (error) {
      console.error('Error fetching devices:', error);
    }
  };

  return (
    <div>
      <h1>Interactive Map with IoT Devices</h1>
      <MapComponent devices={devices} />
      <div>
        <h2>Device List</h2>
        <ul>
          {devices.map(device => (
            <li key={device.id}>{device.name}: {device.metrics}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
