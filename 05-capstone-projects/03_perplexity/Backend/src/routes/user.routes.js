import { Router } from "express";
import {
  loginValidator,
  registerValidator,
} from "../validators/userValidator.js";
import {
  getMe,
  loginController,
  registerController,
  resendEmail,
  verifyEmail,
} from "../controllers/user.controller.js";
import {
  authenticationMiddleware,
  isAuthenticated,
} from "../middlewares/auth.middleware.js";

const userRouter = Router();

/**
 * @route POST /api/user/register
 * @desc Register a new user
 * @access Public
 * @body {username, email, password}
 */
userRouter.post("/register", registerValidator, registerController);

/**
 * @route GET /api/user/verify-email
 * @desc Verify user email
 * @access Public
 * @query {token}
 */
userRouter.get("/verify-email", verifyEmail);

/**
 * @route POST /api/user/verify-email
 * @desc Resend verification email
 * @access Public
 * @body {username. email}
 */
userRouter.post("/resend-email", resendEmail);

/**
 * @route POST /api/user/login
 * @desc Login a user
 * @access Public
 * @body {username || email, password}
 */
userRouter.post("/login", loginValidator, loginController);

/**
 * @route POST /api/user/me
 * @desc Get current logged in user's information or details
 * @access Private
 * @req {userId}
 * @cookie {token}
 */
userRouter.get("/me", authenticationMiddleware, isAuthenticated, getMe);

export default userRouter;
