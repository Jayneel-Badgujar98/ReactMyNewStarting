// file path - middlewares/errorHandler
function errorHandler(err, req, res, next) {
    console.error(err.message);
    const statusCode = res.statusCode == 200 ? 500 : res.statusCode
    const errorToDisplay = {
        message: err.message || "Server Error",
        stack: process.env.NODE_ENV === "production" ? "Production Mode" : err.stack
    }
    res.status(statusCode).json(errorToDisplay);

}
module.exports = errorHandler