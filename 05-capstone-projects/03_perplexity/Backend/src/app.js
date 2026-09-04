import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.routes.js";
import chatRouter from "./routes/chat.routes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);
app.use(morgan("dev"));

// Health Check
app.get("/", (req, res) => {
  return res.status(200).json({ message: "Server is running" });
});

/**
 * @route POST /api/auth/register
 * @desc auth routes
 * @access Public
 * @body {user}
 * @returns {user: {id, username, email}, token}
 */

app.use("/api/v1/auth", userRouter);
app.use("/api/v1/chats", chatRouter);

export default app;
