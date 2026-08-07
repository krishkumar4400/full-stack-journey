const { Router } = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} = require("../controllers/auth.controller.js");
const {
  authenticationMiddleware,
  isAuthenticated,
} = require("../middleware/auth.middleware.js");

const authRouter = Router();

/**
 * Register route
 * POST /api/v1/auth/register
 * req.body => {name,email,password}
 */
authRouter.route("/register").post(registerUser);

/**
 * Login route
 * POST /api/v1/auth/login
 * req.body => {username | email,password}
 */
authRouter.route("/login").post(loginUser);

/**
 * Logout route
 * POST /api/v1/auth/logout
 * req.body => {}
 */
authRouter
  .route("/logout")
  .post(authenticationMiddleware, isAuthenticated, logoutUser);

/**
 * @route GET /api/v1/auth/user
 * @desc Get the currently logged in user's infromation
 * @access Private
 */
authRouter.route("/user").get(authenticationMiddleware, isAuthenticated, getCurrentUser);

module.exports = authRouter;
