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
app.get("/api/users", (req, res) => {
  const users = [
    {
      id: 2,
      name: "test user 2",
    },
    {
      id: 3,
      name: "test user 3",
      email: "test3@test.com",
    },
    {
      id: 4,
      name: "test user 4",
      email: "test4@test.com",
    },
  ];
  return res.status(200).json({ users });
});

export default app;
