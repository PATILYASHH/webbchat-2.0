const io = require('socket.io')(3000);

const user = {};

io.on('connection', socket => {
  socket.on('new-user-joined', name => {
    console.log("new-user", name); // Check if the server receives the prompt
    user[socket.id] = name;
    socket.broadcast.emit('user-joined', name); // Broadcast the prompt to all users
  });

  socket.on('send', message => {
    socket.broadcast.emit('receive', { message: message, name: user[socket.id] });
  });
});