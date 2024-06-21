const io = require('socket.io')(3000);

const user = {};

io.on('connection', socket => {
  // Handle new user joined
  socket.on('new-user-joined', name => {
    console.log("new-user", name);
    user[socket.id] = name;
    socket.broadcast.emit('user-joined', name);
  });

  // Handle user sending a message
  socket.on('send', message => {
    socket.broadcast.emit('receive', { message: message, name: user[socket.id] });
  });

  // Handle user disconnect
  socket.on('disconnect', () => {
    const name = user[socket.id];
    delete user[socket.id];
    if (name) {
      socket.broadcast.emit('user-left', name);
    }
  });
});
