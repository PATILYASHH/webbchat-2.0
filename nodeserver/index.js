const io = require('socket.io')(8000);

const users = {}; // Use 'users' for clarity

io.on('connection', socket => {
  // Handle new user joining
  socket.on('new-user-joined', name => {
    console.log("New user joined:", name);
    users[socket.id] = name;
    socket.broadcast.emit('user-joined', name); // Broadcast the new user joined event
  });

  // Handle sending messages
  socket.on('send', message => {
    socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    socket.broadcast.emit('user-left', users[socket.id]);
    delete users[socket.id];
  });
});
