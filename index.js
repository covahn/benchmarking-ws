const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
  console.log('ws connection');
});

server.listen(3005);
