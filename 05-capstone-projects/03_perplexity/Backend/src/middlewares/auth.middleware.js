import jwt from "jsonwebtoken";

/**
 *
 * @type {import("express").RequestHandler}
 * @type {import("express").Request}
 * @type {import("express").Response}
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export const authenticationMiddleware = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return next();
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.userId;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      message: "Unauthorized access",
      success: false,
    });
  }
};

export const isAuthenticated = (req, res, next) => {
  if (!req.userId) {
    return res.status(401).json({
      message: "You are not logged in",
      success: false,
    });
  }
  next();
};
