import { Router } from "express";
import {
  getUser,
  isAuth,
  loginUser,
  logoutUser,
  registerUser,
} from "../controller/auth.controller.js";
import {
  authenticationMiddleware,
  isAuthenticated,
} from "../middleware/auth.middleware.js";

const authRouter = Router();

authRouter.post("/login", loginUser);
authRouter.post("/register", registerUser);
authRouter.post(
  "/logout",
  authenticationMiddleware,
  isAuthenticated,
  logoutUser,
);
authRouter.get("/user", authenticationMiddleware, isAuthenticated, getUser);
authRouter.get("/is-auth", authenticationMiddleware, isAuthenticated, isAuth);

export default authRouter;
