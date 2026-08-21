import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    const tokenHeader = req.headers["authorization"];

    // Header authorization: Bearer <TOKEN>
    if (!tokenHeader) {
      return next();
    }

    if (!tokenHeader.startsWith("Bearer")) {
      // it is a standard
      return res.status(400).json({
        message: "Authorization header must start with Bearer",
        success: false,
      });
    }

    const token = tokenHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    next();
  }
};

export const ensureAuthenticated = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      message: "You must be authenticated",
      success: false,
    });
  }
  next();
};

export default isAuth;
