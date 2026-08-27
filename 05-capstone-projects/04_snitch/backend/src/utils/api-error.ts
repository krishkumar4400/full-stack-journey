class ApiError extends Error {

  constructor(statusCode, message, error = [], stack = "") {
    super(error);
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
    this.data = null;
    this.success = false;

    if (!stack) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
