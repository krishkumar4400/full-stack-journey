import cookieParser from 'cookie-parser';
import express from 'express';
import userRouter from './routes/user.routes.js';

const app =express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));


// Health Check
app.get('/', (req,res) => {
    res.send("Server is running"); 
});

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 * @body {username, email, password}
 * @returns {user: {id, username, email}, token}
 */

app.use('/api/user', userRouter);

export default app;