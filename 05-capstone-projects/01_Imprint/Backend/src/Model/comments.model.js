const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "userId is required"],
      index: true,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Posts",
      required: [true, "postId is required"],
      index: true,
    },
    content: {
      type: String,
      required: [true, "Comment text is required"],
    },
  },
  {
    timestamps: true,
  },
);

const commentsModel =
  mongoose.models.Comments || mongoose.model("Comments", commentSchema);
module.exports = commentsModel;
