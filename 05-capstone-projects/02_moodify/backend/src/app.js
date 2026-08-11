import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import morgan from 'morgan';
import songRouter from "./routes/song.route.js";

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/songs", songRouter);

export default app;
