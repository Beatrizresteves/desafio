import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [deviceData, setDeviceData] = useState([]);

  useEffect(() => {
    const fetchDeviceData = async () => {
      try {
        const res = await axios.get('/api/devices');
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
        {deviceData.map((device, index) => (
          <li key={index}>
            {device.identifier}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
