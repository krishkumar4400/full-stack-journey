import 'dotenv/config';
import express from "express";
import router from './routes/user.routes.js';
import adminRouter from './routes/admin.routes.js';
import isAuth from './middleware/auth.js';

const app = express();

const port = process.env.PORT ?? 8001;

app.get("/", (req, res) => {
  res.send("Hello Express");
});

// middlewares
app.use(express.json());
app.use(isAuth);
app.use('/api/auth', router);
app.use('/api/admin', adminRouter);

app.listen(port, () => {
  console.log(`server is up and running on http://localhost:${port}`);
});
