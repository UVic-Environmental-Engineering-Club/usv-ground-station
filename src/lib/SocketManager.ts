import { io } from "socket.io-client";

export const socket = io("ws://localhost:8080/groundstation");

socket.on("connect", () => {
  console.log("connected to groundstation");
});
