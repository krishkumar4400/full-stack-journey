import "dotenv/config";
import { createServer } from "http";
import app from "./src/app.js";
import { Server } from "socket.io";

const httpServer = createServer(app);

const io = new Server(httpServer, {});

io.on("connection", (socket) => {
  console.log("new connection created");

  socket.on("message", (m) => {
    console.log("user fired message event");
    console.log(m);
    
    io.emit("abc")
  });

});

const port = process.env.PORT || 4000;

httpServer.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// WARNING !!! app.listen(3000); will not work here, as it creates a new HTTP server
