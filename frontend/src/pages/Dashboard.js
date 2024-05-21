// src/pages/DashboardPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [deviceData, setDeviceData] = useState([]);
  const selectedDevices = JSON.parse(localStorage.getItem('selectedDevices')) || {};

  useEffect(() => {
    const fetchData = async () => {
      const deviceResponses = await Promise.all(
        Object.entries(selectedDevices).map(async ([deviceId, commands]) => {
          const responses = await Promise.all(
            commands.map(async (command) => {
              const response = await axios.post(`http://localhost:3001/api/device/${deviceId}/execute`, { command });
              return { command, response: response.data.response };
            })
          );
          return { deviceId, responses };
        })
      );
      setDeviceData(deviceResponses);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {deviceData.map((device) => (
        <div key={device.deviceId}>
          <h3>Device ID: {device.deviceId}</h3>
          {device.responses.map((response) => (
            <div key={response.command}>
              <strong>Command:</strong> {response.command}
              <br />
              <strong>Response:</strong> {response.response}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
