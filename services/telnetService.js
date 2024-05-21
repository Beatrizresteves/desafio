// backend/telnetService.js
const net = require('net');

const executeTelnetCommand = (host, port, command) => {
  return new Promise((resolve, reject) => {
    const client = new net.Socket();
    let response = '';

    client.connect(port, host, () => {
      client.write(command + '\n');
    });

    client.on('data', (data) => {
      response += data.toString();
    });

    client.on('end', () => {
      resolve(response);
    });

    client.on('error', (err) => {
      reject(err);
    });
  });
};

module.exports = { executeTelnetCommand };
