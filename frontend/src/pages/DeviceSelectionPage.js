// src/pages/DeviceSelectionPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeviceSelectionPage = () => {
  const [devices, setDevices] = useState([]);
  const [selectedDevices, setSelectedDevices] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axios.get('/api/devices');
        setDevices(response.data);
      } catch (error) {
        console.error('Error fetching devices:', error);
      }
    };

    fetchDevices();
  }, []);

  const handleDeviceChange = (deviceId, command, isChecked) => {
    setSelectedDevices((prevSelectedDevices) => {
      const deviceCommands = prevSelectedDevices[deviceId] || [];
      if (isChecked) {
        return { ...prevSelectedDevices, [deviceId]: [...deviceCommands, command] };
      } else {
        return {
          ...prevSelectedDevices,
          [deviceId]: deviceCommands.filter((cmd) => cmd !== command)
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('selectedDevices', JSON.stringify(selectedDevices));
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Select Devices and Commands</h1>
      <form onSubmit={handleSubmit}>
        {devices.map((device) => (
          <div key={device._id}>
            <h3>{device.name}</h3>
            {device.commands.map((command) => (
              <div key={command}>
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleDeviceChange(device._id, command, e.target.checked)
                    }
                  />
                  {command}
                </label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit">Save Selection</button>
      </form>
    </div>
  );
};

export default DeviceSelectionPage;
