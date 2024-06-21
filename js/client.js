const socket = io('https://localhost:3000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');

const name = prompt("Enter your name to join");
  socket.emit('new-user-joined', window.name);
