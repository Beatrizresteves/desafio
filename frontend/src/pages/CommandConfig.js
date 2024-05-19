import React, { useState } from 'react';
import axios from 'axios';

const CommandConfig = ({ device }) => {
  const [selectedCommands, setSelectedCommands] = useState([]);

  const handleCommandSelect = (command) => {
    setSelectedCommands([...selectedCommands, command]);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('/api/devices/select', {
        deviceId: device._id,
        commands: selectedCommands
      });
      // Redirecionar ou exibir mensagem de sucesso
    } catch (err) {
      console.error('Error selecting commands', err);
    }
  };

  return (
    <div>
      <h1>Select Commands for {device.name}</h1>
      <ul>
        {device.commands.map((command) => (
          <li key={command}>
            {command} <button onClick={() => handleCommandSelect(command)}>Select</button>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Save Commands</button>
    </div>
  );
};

export default CommandConfig;
