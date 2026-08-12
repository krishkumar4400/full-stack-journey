export const handleError = (err, req, res, next) => {
  res.status(err.status).json({
    message: err.message,
    success: false,
    status: err.status,
  });
};
