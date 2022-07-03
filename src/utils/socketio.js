const socketio = require("socket.io");

module.exports = (server) => {
  const io = socketio(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log("connected");

    socket.on("logged-in", (email) => {
      socket.join(email);
    });

    socket.on("mobile-logged-in", (email) => {
      socket.broadcast.to(email).emit("request-monitoring-state");
    });

    socket.on("response-monitoring-state", (isMonitoring, email) => {
      socket.broadcast.to(email).emit("setting-monitoring", isMonitoring);
    });

    socket.on("disconnect", () => {
      console.log("disconnected");
    });
  });
};
