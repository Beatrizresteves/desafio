// src/services/telnetService.js
const Telnet = require('telnet-client');

async function getDeviceData(url, command) {
  let connection = new Telnet();

  const params = {
    host: url,
    port: 23,
    negotiationMandatory: false,
    timeout: 1500,
    shellPrompt: '',
  };

  try {
    await connection.connect(params);
    let response = await connection.send(command);
    return response;
  } catch (error) {
    console.error('Error connecting to device:', error);
    throw new Error('Error connecting to device');
  } finally {
    connection.end();
  }
}

module.exports = {
  getDeviceData,
};
