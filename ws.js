import { Server } from "socket.io";

function init(server) {
  const io = new Server(server);
  console.log("ws init");
  io.on("connection", (ws) => {
    console.log("connection", ws.id);

    ws.on("message", (message) => {
      console.log(message);
    });
  });
}

export default init;
