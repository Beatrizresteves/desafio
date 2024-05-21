import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DeviceSelection = () => {
  const [devices, setDevices] = useState([]);
  const [selectedDevices, setSelectedDevices] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const res = await axios.get('/api/devices');
        setDevices(res.data);
      } catch (err) {
        console.error('Error fetching devices', err);
      }
    };
    fetchDevices();
  }, []);

  const handleSelect = (device) => {
    setSelectedDevices([...selectedDevices, device]);
  };

  return (
    <div>
      <h1>Select Devices</h1>
      <ul>
        {devices.map((device) => (
          <li key={device._id}>
            {device.identifier} <button onClick={() => handleSelect(device)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceSelection;
