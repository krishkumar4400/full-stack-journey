const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    profilePicture: {
      type: String,
      default: `https://ik.imagekit.io/xvni7jpsb/OIP.webp?updatedAt=1772777496829`,
    },
    username: {
      type: String,
      required: [true, "username is required"],
      trim: true,
      lowercase: true,
      index: true,
      unique: [true, "username already exists"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      index: true,
      unique: [true, "Email already exists"],
    },
    fullname: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      select: false,
    },
    bio: {
      type: String,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
      select: false
    },
  },
  {
    timestamps: true,
  },
);

const userModel = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = userModel;
