const jwt = require("jsonwebtoken");
const userModel = require("../Model/User.Model.js");

const authenticationMiddleware = async (req, res, next) => {
  try {
    const token =
      req?.cookies?.token || req?.headers?.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "You are not logged in",
        success: false,
      });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decodedToken._id);
    if (!user) {
      return res.status(400).json({
        message: "Token is not valid",
        success: false,
      });
    }

    req.userId = user._id;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      message: "You are not authorized",
      success: false,
    });
  }
};

const isAuthenticated = (req, res, next) => {
  if (!req.userId) {
    return res.status(401).json({
      message: "you are not authorized",
      success: false,
    });
  }

  next();
};

module.exports = {
  authenticationMiddleware,
  isAuthenticated,
};
