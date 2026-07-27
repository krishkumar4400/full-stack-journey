import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("public"));

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
    data,
  });
});

app.get("*name", (req, res) => {
  return res.sendFile("public/index.html", {root: __dirname});
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
