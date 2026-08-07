const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "userId is required"],
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Posts",
      required: [true, "postId is required"],
    },
  },
  {
    timestamps: true,
  },
);

likeSchema.index({userId: 1, postId: 1}, {unique: true});
likeSchema.index({postId: 1, userId: 1}, {unique: true});

const likesModel = mongoose.models.Likes || mongoose.model("Likes", likeSchema);
module.exports = likesModel;
