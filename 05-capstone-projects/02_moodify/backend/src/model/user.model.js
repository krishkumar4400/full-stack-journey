import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      index: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

// task
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
});

// userSchema.post("save", async () => {});

const userModel = mongoose.models.User || mongoose.model("User", userSchema);
export default userModel;
