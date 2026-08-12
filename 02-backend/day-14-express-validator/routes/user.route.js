import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";
import { body, validationResult } from "express-validator";
import { loginRequestValidator } from "../validators/auth.validator.js";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginRequestValidator, loginUser);

export default userRouter;
