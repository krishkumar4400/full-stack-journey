import mongoose, { model, models, Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    unique: [true, "username must be unique"],
    index: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email must be unique"],
    index: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    select: false,
  },
});

// task
userSchema.pre("save", async () => {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

// userSchema.post("save", async () => {});

const userModel = models.User || model("User", userSchema);
export default userModel;
