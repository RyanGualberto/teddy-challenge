function startTimeMiddleware(req, res, next) {
  req.startTime = new Date();
  next();
}

module.exports = {
  startTimeMiddleware,
};
