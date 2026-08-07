require("dotenv").config();
const app = require("./src/app.js");
const http = require("http");
const connectToDB = require("./src/config/database.js");

const server = http.createServer(app);

const port = process.env.PORT || 4000;

connectToDB().catch((error) => console.error(error));

server.listen(port, () => {
  console.log(`Server is up and running on http://localhost:${port}`);
});
