const Telnet = require('telnet-client');

const getDeviceData = async (device, command) => {
  let connection = new Telnet();
  const params = {
    host: device.url,
    port: 23,
    timeout: 1500,
  };

  try {
    await connection.connect(params);
    const res = await connection.exec(command);
    return res;
  } catch (error) {
    console.error('Error connecting to device', error);
    return null;
  } finally {
    connection.end();
  }
};

module.exports = { getDeviceData };
