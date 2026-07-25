import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/api/data", (req, res) => {
  return res.status(200).json({
    data: {
      id: 1,
      name: "Sample Data",
      description: "This is a sample data response from the API",
    },
  });
});

app.get("/api/health", (req, res) => {
  return res.status(200).json({
    status: "OK",
    timestamp: new Date(),
  });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
