import jwt from "jsonwebtoken";

export async function isAdmin(req, res, next) {
  try {
    const role = req.user.role;
    console.log(req.user);
    console.log(req.user.role);

    if (role !== "admin") {
      return res.status(401).json({
        message: "You are not authorized to access this resource",
        success: false,
      });
    }
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}
