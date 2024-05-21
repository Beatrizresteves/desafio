// src/pages/DashboardPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardPage = () => {
  const [deviceData, setDeviceData] = useState([]);
  const selectedDevices = JSON.parse(localStorage.getItem('selectedDevices')) || {};

  useEffect(() => {
    const fetchDeviceData = async () => {
      try {
        const res = await axios.post('/api/devices/data', { selectedDevices });
        setDeviceData(res.data);
      } catch (err) {
        console.error('Error fetching device data', err);
      }
    };
    fetchDeviceData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {deviceData.map((data, index) => (
          <li key={index}>
            {data.device.name}: {data.response}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
