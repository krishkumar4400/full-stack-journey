import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: `http://localhost:5173`,
    credentials: true
}));

export default app;
