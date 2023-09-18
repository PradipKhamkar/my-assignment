const sendError = (res, message, error) => {
  res.status(400).json({
    success: false,
    message,
    error,
  });
};

module.exports = sendError;
