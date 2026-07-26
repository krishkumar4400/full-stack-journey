import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/api/users", (req, res) => {
  const data = [
    {
      id: 1,
      name: "test user 1",
    },
    {
      id: 2,
      name: "test user 2",
    },
    {
      id: 3,
      name: "test user 3",
    },
    {
      id: 4,
      name: "test user 4",
    },
  ];

  return res.status(200).json({
    success: true,
    data
  });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
