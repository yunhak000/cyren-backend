const socketio = require("socket.io");

const safetyDevice = {};

module.exports = (server) => {
  const io = socketio(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log("connected");

    socket.on("logged-in", (email, device) => {
      if (device === "desktop") {
        safetyDevice.email = socket.id;
      }

      socket.join(email);

      safetyDevice.email && socket.broadcast.to(safetyDevice.email).emit("request-monitoring-state");
    });

    socket.on("response-monitoring-state", (isMonitoring, email, isAlert) => {
      socket.broadcast.to(email).emit("setting-monitoring", isMonitoring, isAlert);
    });

    socket.on("request-alert-sounding", (email) => {
      socket.broadcast.to(email).emit("response-alert-sounding");
    });

    socket.on("request-alert-off", (email) => {
      socket.broadcast.to(email).emit("response-alert-off");
    });

    socket.on("change-photos", (email) => {
      socket.broadcast.to(email).emit("call-photo-list");
    });

    socket.on("disconnect", () => {
      console.log("disconnected");

      for (let key in safetyDevice) {
        if (socket.id === safetyDevice[key]) {
          delete safetyDevice[key];
        }
      }
    });
  });
};
