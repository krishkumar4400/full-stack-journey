const express = require("express");
const {
  createPost,
  getAllPosts,
  getPostById,
  getPostsByUserId,
  getFeedPosts,
} = require("../controllers/posts.controller.js");
const {
  authenticationMiddleware,
  isAuthenticated,
} = require("../middleware/auth.middleware.js");
const upload = require("../middleware/multer.middleware.js");
const { likePost, unLikePost } = require("../controllers/posts.controller.js");

const postRouter = express.Router();

// protected routes

/**
 * @route GET /api/v1/posts/feed
 * @description get posts for feed
 * @access private
 */
postRouter.get(
  "/feed",
  authenticationMiddleware,
  isAuthenticated,
  getFeedPosts,
);

/**
 * @description Create post
 * @route POST /api/v1/posts/
 * @body req.body = {media, caption}
 * @access Private
 */
postRouter.post(
  "/",
  authenticationMiddleware,
  isAuthenticated,
  upload.single("media"),
  createPost,
);

/**
 * @description Get all post
 * @route GET /api/v1/posts/
 * @body req.body = {}
 * @access Private
 */
postRouter.get("/", authenticationMiddleware, isAuthenticated, getAllPosts);

/**
 * @description Get post by id
 * @route GET /api/v1/posts/postId
 * @body req.body = {}
 * @access Private
 */
postRouter.get(
  "/all",
  authenticationMiddleware,
  isAuthenticated,
  getPostsByUserId,
);

/**
 * @description Get post by id
 * @route GET /api/v1/posts/postId
 * @body req.body = {}
 * @access Private
 */
postRouter.get(
  "/:postId",
  authenticationMiddleware,
  isAuthenticated,
  getPostById,
);

/**
 * @description Like the post
 * @route GET /api/v1/posts/like/:postId
 * @body req.body = {}
 * @access Private
 */
postRouter.get(
  "/like/:postId",
  authenticationMiddleware,
  isAuthenticated,
  likePost,
);

/**
 * @description unlike the post
 * @route GET /api/v1/posts/unlike/postId
 * @body req.body = {}
 * @access Private
 */
postRouter.get(
  "/unlike/:postId",
  authenticationMiddleware,
  isAuthenticated,
  unLikePost,
);



module.exports = postRouter;
