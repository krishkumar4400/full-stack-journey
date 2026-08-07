const mongoose = require("mongoose");

const followSchema = new mongoose.Schema(
  {
    follower: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Follower id is missing"],
    },
    followee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Followee id is missing"],
    },
    status: {
      type: String,
      default: "pending",
      enum: {
        values: ["pending", "accepted", "rejected"],
        message: "status can only be pending, accepted or rejected",
      },
    },
  },
  {
    timestamps: true,
  },
);

followSchema.index({ follower: 1, followee: 1 }, { unique: true });
followSchema.index({ followee: 1, follower: 1 }, { unique: true });

const followModel =
  mongoose.models.Follow || mongoose.model("Follow", followSchema);
module.exports = followModel;

0;
