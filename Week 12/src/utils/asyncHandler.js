const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) => {
      next(error);
    });
  };
};

export { asyncHandler };

// const asyncHandler = () => {};
// const asyncHandler = (fn) => {};
// const asyncHandler = (fn) => {
//   async () => {};
// };
// const asyncHandler = (fn) => async () => {};

/*
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(error.code || 400).json({
      success: false,
      message: error.message,
    });
  }
};
*/ 
