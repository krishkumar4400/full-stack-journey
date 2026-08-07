import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';


const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());


// routes



export default app;
