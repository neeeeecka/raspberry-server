var socket = io();

const button = document.getElementById("btn");
button.addEventListener("click", () => {
  socket.emit("message", true);
  console.log("emit");
});

socket.on("response", (message) => {
  console.log(message);
});
