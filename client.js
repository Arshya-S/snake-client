const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: '50541'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // console log user that they're dead from idling
  conn.on('data', () => {
    console.log('you ded cuz you idled');
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server.');
    conn.write('Name: AS');

    
  });

  
  return conn;
};



module.exports = {connect};