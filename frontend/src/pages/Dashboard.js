import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [deviceData, setDeviceData] = useState([]);

  useEffect(() => {
    const fetchDeviceData = async () => {
      try {
        const res = await axios.post('/api/devices/data', {
          // Passar dispositivos e comandos selecionados
        });
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

export default Dashboard;
