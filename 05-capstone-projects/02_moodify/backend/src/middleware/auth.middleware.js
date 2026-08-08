import jwt from "jsonwebtoken";
import userModel from "../model/user.model.js";
import blackListedTokenModel from "../model/blackListedToken.model.js";
import redis from "../config/redis.js";

async function authenticationMiddleware(req, res, next) {
  const { token } = await req.cookies;
  if (!token) {
    return res.status(401).json({
      message: "You are not logged in",
      success: false,
    });
  }

  // const blackListedToken = await blackListedTokenModel.findOne({ token });
  const blackListedToken = await redis.get(token);

  if (blackListedToken) {
    return res.status(401).json({
      message: "Unauthorized access",
      success: false,
    });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decodedToken.userId);
    if (!user) {
      return res.status(401).json({
        message: "Unauthorized access",
        success: false,
      });
    }
    req.userId = decodedToken.userId;
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized access",
      success: false,
    });
  }
}

function isAuthenticated(req, res, next) {
  if (!req.userId || !req.user) {
    return res.status(401).json({
      message: "Unauthorized access",
      success: false,
    });
  }
  next();
}

export { authenticationMiddleware, isAuthenticated };
