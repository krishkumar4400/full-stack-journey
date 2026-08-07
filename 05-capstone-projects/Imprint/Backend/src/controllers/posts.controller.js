const imagekit = require("../config/imagekit.js");
const postModel = require("../Model/posts.model.js");
const { v4: uuidv4 } = require("uuid");
const { sanitizeFileName } = require("../utils/sanitizeFileName.js");
const mongoose = require("mongoose");
const likesModel = require("../Model/likes.model.js");
const commentsModel = require("../Model/comments.model.js");

async function createPost(req, res) {
  try {
    const { caption } = req.body;
    const file = req.file;

    // sanitize original name
    const safeName = sanitizeFileName(file.originalname);

    // Generate a custom unique name
    const uniqueName = `${Date.now()}-${uuidv4()}-${safeName}`;

    const uploadResult = await imagekit.upload({
      file: file.buffer, // file buffer from multer
      fileName: uniqueName, // name of the file
      folder: "/insta/posts", // specified folder path
    });

    const post = await postModel.create({
      mediaUrl: uploadResult.url,
      mediaType: uploadResult.fileType,
      thumbnailUrl: uploadResult.thumbnailUrl,
      caption,
      userId: req.userId,
    });

    return res.status(201).json({
      message: "Post created successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}

async function getAllPosts(req, res) {
  try {
    const posts = await postModel.find();
    console.log(posts);

    return res.status(200).json({
      success: true,
      posts,
    });
  } catch (error) {
    console.error(error);
    return res.status.json({
      message: "Internal server error",
      success: false,
    });
  }
}

async function getPostById(req, res) {
  try {
    const { postId } = req.params;
    if (!postId) {
      return res.status(400).json({
        message: "Post id is missing",
        success: false,
      });
    }

    // validate ObjectId format
    if (
      !mongoose.Types.ObjectId.isValid(postId) ||
      !mongoose.Types.ObjectId.isValid(req.userId)
    ) {
      return res.status(400).json({
        message: "Invalid post id format",
        success: false,
      });
    }

    const post = await postModel.findOne({ _id: postId, userId: req.userId });
    console.log(post);

    if (!post) {
      return res.status(404).json({
        message: "Post is not found or not authorized",
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}

async function getPostsByUserId(req, res) {
  try {
    const userId = req.userId;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid user id" });
    }

    const posts = await postModel.find({ userId }).sort({ createdAt: -1 });
    console.log(posts);
    return res.status(200).json({
      success: true,
      posts,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}

async function likePost(req, res) {
  try {
    const { postId } = req.params;
    const userId = req.userId;

    if (!postId) {
      return res.status(400).json({
        message: "Post id is missing",
        success: false,
      });
    }

    const post = await postModel.findById(postId);
    if (!post) {
      return res.status(404).json({
        message: "Post not found",
        success: false,
      });
    }

    const isAlreadyLiked = await likesModel.findOne({
      postId,
      userId,
    });

    if (isAlreadyLiked) {
      return res.status(409).json({
        message: "You have already liked the post",
        success: false,
      });
    }

    const like = await likesModel.create({
      userId,
      postId,
    });

    if (!like) {
      return res.status(400).json({
        message: "Unable to like the post",
        success: false,
      });
    }

    return res.status(200).json({
      message: "You liked the post successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error,
    });
  }
}

async function unLikePost(req, res) {
  try {
    const { postId } = req.params;
    const userId = req.userId;

    if (!postId) {
      return res.status(400).json({
        message: "Post id is missing",
        success: false,
      });
    }

    const post = await postModel.findById(postId);
    if (!post) {
      return res.status(404).json({
        message: "Post not found",
        success: false,
      });
    }

    const isAlreadyLiked = await likesModel.findOne({
      postId,
      userId,
    });

    if (!isAlreadyLiked) {
      return res.status(409).json({
        message: "You have't liked the post",
        success: false,
      });
    }

    const like = await likesModel.findByIdAndDelete(isAlreadyLiked._id);

    if (!like) {
      return res.status(400).json({
        message: "Unable to unlike the post",
        success: false,
      });
    }

    return res.status(200).json({
      message: "You unliked the post successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error,
    });
  }
}

async function commentPost(req, res) {
  try {
    const { postId } = req.params;
    const userId = req.userId;
    const { content } = req.body;

    if (!postId) {
      return res.status(400).json({
        message: "Post id is missing",
        success: false,
      });
    }

    if (!content) {
      return res.status(400).json({
        message: "Content is missing",
        success: false,
      });
    }

    const post = await postModel.findById(postId);
    if (!post) {
      return res.status(404).json({
        message: "Post not found",
        success: false,
      });
    }

    const comment = await commentsModel.create({
      userId,
      postId,
      content,
    });

    return res.status(200).json({
      message: "Your comment added on this post successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error,
    });
  }
}

async function deleteComment(req, res) {
  try {
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error,
    });
  }
}

async function getFeedPosts(req, res) {
  try {
    const userId = req.userId;
    console.log(userId);
    const posts = await Promise.all(
      (
        await postModel.find().sort({ createdAt: -1 }).populate("userId").lean()
      ).map(async (post) => {
        const isLiked = await likesModel.findOne({
          userId: userId,
          postId: post._id,
        });
        // post.isLiked = Boolean(isLiked);
        post.isLiked = !!isLiked;
        return post;
      }),
    );
    console.log(posts);
    return res.status(200).json({
      success: true,
      posts,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error,
    });
  }
}

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  getPostsByUserId,
  likePost,
  unLikePost,
  commentPost,
  deleteComment,
  getFeedPosts,
};
