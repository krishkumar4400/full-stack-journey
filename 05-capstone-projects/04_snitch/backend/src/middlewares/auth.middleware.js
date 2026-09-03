import jwt from "jsonwebtoken";
import ApiError from "../utils/api-error.js";
import env from "../config/env.js";

const authenticationMiddleware = async (req, res, next) => {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    throw new ApiError(401, "You are not logged in");
  }

  try {
    const decoded = jwt.verify(accessToken, env.ACCESS_TOKEN_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error(error);
    throw new ApiError(401, "Access token is invalid or expired", error);
  }
};

const isAuthenticated = (req, res, next) => {
  if (!req.userId) {
    throw new ApiError(401, "unauthorized");
  }
  next();
};

export { authenticationMiddleware, isAuthenticated };
