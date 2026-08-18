import "dotenv/config";
import app from "./src/app.js";
import connectToDB from "./src/config/database.js";
// import { testAI } from "./src/services/ai.service.js";
import http from "http";
import { initSocket } from "./src/sockets/server.socket.js";

const httpServer = http.createServer(app);

initSocket(httpServer);

// testAI();

await connectToDB();

const port = process.env.PORT || 8000;

httpServer.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
