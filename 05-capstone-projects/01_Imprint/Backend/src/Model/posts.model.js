const { Schema, model, models } = require("mongoose");

const postsSchema = new Schema(
  {
    mediaUrl: {
      type: String,
      required: [true, "Post media url is missing"],
    },
    mediaType: {
      type: String,
      required: [true, "Media type is missing"],
    },
    thumbnailUrl: {
      type: String,
    },
    caption: {
      type: String,
      default: "",
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: [true, "user id is required"],
      ref: "User",
      index: true,
    },
  },
  {
    timestamps: true,
  },
);

const postModel = models.Posts || model("Posts", postsSchema);
module.exports = postModel;
