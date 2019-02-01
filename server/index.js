/*
 * Require
 */
let express = require('express');
let join = require('path').join;
let Server = require('http').Server;
let socket = require('socket.io');


/*
 * Vars
 */
let app = express();
let server = Server(app);
let io = socket(server);



/*
 * Express
 */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


/*
 * Socket.io
 */
let id = 0;
io.on('connection', (socket) => {
  console.log('>> socket.io - connected');
  socket.on('send_message', function(message) {
    message.id = ++id;
    io.emit('send_message', message);
  });
});

/*
 * Server
 */
server.listen(3001, () => {
  console.log('listening on *:3001');
});
