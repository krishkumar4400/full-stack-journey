import jwt from "jsonwebtoken";

async function authenticationMiddleware(req, res, next) {
  const { token } = await req.cookies;
  if (!token) {
    return res.status(401).json({
      message: "You are not logged in",
      success: false,
    });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized access",
      success: false,
    });
  }
}

function isAuthenticated(req, res, next) {
  if (!req.userId) {
    return res.status(401).json({
      message: "Unauthorized access",
      success: false,
    });
  }
  next();
}
