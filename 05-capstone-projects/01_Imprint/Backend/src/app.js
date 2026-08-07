const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth.routes.js");
const postRouter = require("./routes/posts.routes.js");
const userRouter = require("./routes/user.routes.js");

const app = express();

// middlewares
app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: `http://localhost:5173`,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "PATCH"],
    credentials: true,
  }),
);

// routes
// auth route
app.use("/api/v1/auth", authRouter);

// post route
app.use("/api/v1/posts", postRouter);

// user route
app.use("/api/v1/users", userRouter);

module.exports = app;
