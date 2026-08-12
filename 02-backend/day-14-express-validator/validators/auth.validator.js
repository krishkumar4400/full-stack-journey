import { body, validationResult } from "express-validator";

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  res.status(400).json({ errors: errors.array() });
};

export const loginRequestValidator = [
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .isLength({ min: 5 })
    .isString(),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 6, max: 12 }),
  validate,
];
