module.exports = (http) => {
  const io = require("socket.io")(http);
  io.on("Connection", (socket) => {
    socket.on("chat-msg", (msg) => {
      io.emit("chat-msg", msg);
    });
  });
};
