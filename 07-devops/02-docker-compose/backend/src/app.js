import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/api/data", (req, res) => {
  const data = {
    message: "This is some sample data from the API",
    timestamp: new Date(),
  };

  res.json(data);
});

app.get("/api/health", (req, res) => {
  return res.status(200).json({
    status: "OK",
    timestamp: new Date(),
  });
});

export default app;
