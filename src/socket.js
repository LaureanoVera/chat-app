module.exports = (http) => {
  const io = require("socket.io")(http);
  console.log('Socket connected');

  io.on('connection', (socket) => {
    console.log('User connected.');

    socket.on('chat-message', (msg) => {
        io.emit('chat-message', msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected.');
    });
});
};
