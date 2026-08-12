import "dotenv/config";
import express from "express";
import userRouter from "./routes/user.route.js";
import { handleError } from "./middlewares/error-handler.middleware.js";

const app = express();

const port = process.env.PORT || 4000;

app.use("/api/user", userRouter);

app.use(handleError);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
