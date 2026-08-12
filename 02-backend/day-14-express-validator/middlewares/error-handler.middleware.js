import 'dotenv/config';

export const handleError = (err, req, res, next) => {
  res.status(err.status).json({
    message: err.message,
    success: false,
    status: err.status,
    stack:
      process.env.NODE_ENVIRONMENT === "development"
        ? err.stack
        : "stack empty",
  });
};
