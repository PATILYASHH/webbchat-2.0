document.addEventListener('DOMContentLoaded', () => {
  const socket = io('https://localhost:3000'); // Replace with your server URL

  const form = document.getElementById('send-container');
  const messageInput = document.getElementById('messageInp');
  const messageContainer = document.querySelector('.container');

  const name = prompt("Enter your name to join"); 
  if (name) {
    socket.emit('new-user-joined', name); // Send the prompt to the server
  }


  

  socket.on('user-joined', name => {
    appendMessage(`${name} joined the chat`, 'right'); // Handle the prompt received from the server
  });


});