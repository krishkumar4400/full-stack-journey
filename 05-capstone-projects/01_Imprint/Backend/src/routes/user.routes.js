const { Router } = require("express");
const {
  followUser,
  unFollowUser,
} = require("../controllers/user.controller.js");
const {
  authenticationMiddleware,
  isAuthenticated,
} = require("../middleware/auth.middleware.js");

const userRouter = Router();

/**
 * @route POST /api/v1/users/follow/:userId
 * @description Follow a user
 * @access Private
 */
userRouter.post(
  "follow/:userId",
  authenticationMiddleware,
  isAuthenticated,
  followUser,
);

/**
 * @route POST /api/v1/users/unfollow/:userId
 * @description Un Follow a user
 * @access Private
 */
userRouter.post(
  "unfollow/:userId",
  authenticationMiddleware,
  isAuthenticated,
  unFollowUser,
);

module.exports = userRouter;
