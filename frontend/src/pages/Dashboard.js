import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; 

const Dashboard = () => {
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null); 
  const [rainMeasurement, setRainMeasurement] = useState(null); 
  useEffect(() => {
    fetchDevices();
  }, []);

  const fetchDevices = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/devices');
      setDevices(response.data);
    } catch (error) {
      console.error('Error fetching devices:', error);
    }
  };

  const handleDeviceSelect = async (deviceId) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/devices/${deviceId}`);
      setSelectedDevice(response.data);
      if (response.data.rainMeasurement) {
        setRainMeasurement(response.data.rainMeasurement);
      } else {
        setRainMeasurement(null);
      }
    } catch (error) {
      console.error('Error fetching device data:', error);
    }
  };

  return (
    <div className="dashboard-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10vh',  height: '800vh' }}>
      <div className="device-selection">
        <h2>Selecione um dispositivo:</h2>
        <ul>
          {devices.map(device => (
            <li key={device._id}>
              <label>
                <input
                  type="radio"
                  name="device"
                  value={device._id}
                  onChange={(e) => handleDeviceSelect(e.target.value)} 
                />
                {device.identifier}
              </label>
            </li>
          ))}
        </ul>
      </div>
      {selectedDevice && (
        <div className="device-data">
          <h2>Dados do Dispositivo:</h2>
          <ul>
            <li><strong>Identifier:</strong> {selectedDevice.identifier}</li>
            <li><strong>Description:</strong> {selectedDevice.description}</li>
            <li><strong>Manufacturer:</strong> {selectedDevice.manufacturer}</li>
            <li><strong>URL:</strong> {selectedDevice.url}</li>
            {/* Exibição da medição de chuva se disponível */}
            {rainMeasurement && (
              <li><strong>Rain Measurement:</strong> {rainMeasurement}</li>
            )}
            <li>
              <strong>Commands:</strong>
              <ul>
                {selectedDevice.commands.map((command, index) => (
                  <li key={index}>
                    <strong>Command:</strong> {command.command.command}<br />
                    <strong>Operation:</strong> {command.operation}<br />
                    <strong>Description:</strong> {command.description}<br />
                    <strong>Result:</strong> {command.result}<br />
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
