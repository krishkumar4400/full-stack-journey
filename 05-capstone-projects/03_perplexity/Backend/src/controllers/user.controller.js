import userModel from "../Models/User.Model.js";
import { sendMail } from "../services/mail.service.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

/** @type {import("express").RequestHandler} */

/**
 * @description Register a new user and send verification email
 * @route POST /api/user/register
 * @access Public
 * @body {username, email, password}
 */
export async function registerController(req, res) {
  try {
    const { username, email, password } = req.body;

    let user = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (user) {
      return res.status(409).json({
        message:
          user.username === username
            ? "username already exists"
            : "email already exists",
        success: false,
      });
    }

    user = await userModel.create({
      username,
      email,
      password,
    });

    const emailVerificationToken = jwt.sign(
      {
        email,
      },
      process.env.JWT_SECRET,
    );

    await sendMail({
      to: user.email,
      subject: "Welcome to perplexity",
      // text: `Hi ${username}, \n\nThank you for registering at Perplexity. We're excited to have you on board!\n\nBest regards, \nThe Perplexity Team`,
      html: `
                <p>Hi ${username},</p>
                <p>Thank you for registering at <strong>Perplexity</strong>. We're excited to have you on board!</p>
                <p>Please verify your email address by clicking the link below</p>
                <a href="http://localhost:3000/api/user/verify-email?token=${emailVerificationToken}">Verify Email</a>
                <p>If you did not create an account, please ignore this email.</p>
                <p>Best regards,<br>The Perplexity Team</p>
        `,
    });

    return res.json({
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}

/**
 * @description Verify user's email address
 * @route GET /api/user/verify-email
 * @access Public
 * @query {token}
 */
export async function verifyEmail(req, res) {
  try {
    const { token } = req.query;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    let user = await userModel.findOne({ email: decoded.email });
    console.log(user);

    if (user.isVerified) {
      return res.send(`
        <h1>warning</h1>
        <p>You are already verified</p>`);
    }

    user.isVerified = true;
    await user.save();
    const html = `
    <h1>Email Verified Successfully</h1>
    <p>Your email has been verified. You can now log in to your account</p>
    <p>Hello world</p>
    `;
    return res.send(html);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}

/**
 * @description Resend verification email
 * @route POST /api/user/resend-email
 * @access Public
 * @body {username, email}
 */
export async function resendEmail(req, res) {
  try {
    const { email, username } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ message: "You are not registered", success: false });
    }

    const emailVerificationToken = jwt.sign(
      {
        email,
      },
      process.env.JWT_SECRET,
    );
    await sendMail({
      to: user.email,
      subject: "Welcome to perplexity",
      // text: `Hi ${username}, \n\nThank you for registering at Perplexity. We're excited to have you on board!\n\nBest regards, \nThe Perplexity Team`,
      html: `
                <p>Hi ${username},</p>
                <p>Thank you for registering at <strong>Perplexity</strong>. We're excited to have you on board!</p>
                <p>Please verify your email address by clicking the link below</p>
                <a href="http://localhost:3000/api/user/verify-email?token=${emailVerificationToken}">Verify Email</a>
                <p>If you did not create an account, please ignore this email.</p>
                <p>Best regards,<br>The Perplexity Team</p>
        `,
    });

    return res.status(200).json({
      message: "Verification Email is sent to your Email address",
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

/**
 * @description Login a user
 * @route POST /api/user/login
 * @access Public
 * @body {email, password}
 */
export async function loginController(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel
      .findOne({
        email,
      })
      .select("+password");
    console.log(user);

    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    if (!user.isVerified) {
      return res.status(401).json({
        message: "Please verify your email before logging in",
        success: false,
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );
    res.cookie("token", token);

    return res.status(200).json({
      message: "Login successful",
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

/**
 * @description Get current logged in user's details
 * @route GET /api/user/register
 * @access Private
 * @req {userId}
 * @cookie {token}
 */
export async function getMe(req, res) {
  try {
    const userId = req.userId;
    const user = await userModel.findById(userId);
    console.log(user);
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}


export async function logoutController(req, res) {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      message: "You are logged out",
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
