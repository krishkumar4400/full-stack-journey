import { body, validationResult } from "express-validator";

function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
      success: false,
    });
  }
  next();
}

export const registerValidator = [
  body("username")
    .trim()
    .isLength({ min: 3 })
    .notEmpty()
    .withMessage("Please enter a valid username")
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage("Username can only contain letters, numbers, and underscore"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Please provide a valid email"),
  body("password")
    .isStrongPassword({
      minLength: 6,
      minNumbers: 1,
      minUppercase: 1,
    })
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  body("confirmPassword")
    .notEmpty()
    .withMessage("Confirm password is required")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),
  validate,
];

export const loginValidator = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email")
    .normalizeEmail(),
  body("password")
    .isStrongPassword({
      minLength: 6,
      minNumbers: 1,
      minUppercase: 1,
    })
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];
