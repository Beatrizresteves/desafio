import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; // Importe o arquivo de estilos CSS

const Dashboard = () => {
  const [devices, setDevices] = useState([]);
  const [selectedDevices, setSelectedDevices] = useState([]);
  const [selectedCommands, setSelectedCommands] = useState([]);
  const [deviceData, setDeviceData] = useState([]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responses = await Promise.all(selectedDevices.map(device => {
        return axios.post(`http://localhost:3000/api/devices/${device._id}/commands`, { commands: selectedCommands });
      }));
      setDeviceData(responses.map(response => response.data));
    } catch (error) {
      console.error('Error fetching device data:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="device-selection">
        <h2>Selecione os dispositivos:</h2>
        <ul>
          {devices.map(device => (
            <li key={device._id}>
              <label>
                <input
                  type="checkbox"
                  value={device._id}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedDevices([...selectedDevices, device]);
                    } else {
                      setSelectedDevices(selectedDevices.filter(selected => selected._id !== device._id));
                    }
                  }}
                />
                {device.identifier}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <form className="command-selection" onSubmit={handleSubmit}>
        <h2>Selecione os comandos:</h2>
        <ul>
          {selectedDevices.map(device => (
            <li key={device._id}>
              <label>
                {device.identifier}:
                <input
                  type="text"
                  value={selectedCommands[device._id] || ''}
                  onChange={(e) => setSelectedCommands({ ...selectedCommands, [device._id]: e.target.value })}
                />
              </label>
            </li>
          ))}
        </ul>
        <button type="submit">Consultar Dados</button>
      </form>
      <div className="device-data">
        <h2>Dados dos Dispositivos:</h2>
        <ul>
          {deviceData.map((data, index) => (
            <li key={index}>{JSON.stringify(data)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
