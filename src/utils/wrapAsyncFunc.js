/** @module wrapAsyncFunc */

/**
 * My Wrapping Asynchronous Function Middleware
 * @function
 * @param {Function} func Function as param.
 * @returns {Function} A function that takes three parameters (req, res, next)
 */

const wrapAsyncFunc = (func) => async (req, res, next) => {
  await func(req, res, next).catch(next);
};

module.exports = wrapAsyncFunc;
