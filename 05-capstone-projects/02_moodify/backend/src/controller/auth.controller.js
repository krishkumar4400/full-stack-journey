import userModel from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;

    let user = await userModel.findOne({ $or: [{ email }, { username }] });
    if (user) {
      return res.status(409).json({
        message: "user already exists with this email address",
        success: false,
      });
    }

    user = await userModel.create({
      username,
      email,
      password,
    });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_SECRET_EXPIRY,
    });

    return res.status(201).cookie("token", token).json({
      message: "user registered successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
      success: false,
      error,
    });
  }
}

async function loginUser(req, res) {
  try {
    const { username, email, password } = req.body;
    const user = await userModel
      .findOne({
        $or: [{ email }, { username }],
      })
      .select("+password");

    if (!user) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_SECRET_EXPIRY,
    });

    return res.status(201).cookie("token", token).json({
      message: "user logged in successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
      success: false,
      error,
    });
  }
}

export { registerUser, loginUser };
