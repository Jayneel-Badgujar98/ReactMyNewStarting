// file path - middleware/authMiddleware
const jwt = require('jsonwebtoken')
function protect(req, res, next) {
    const authHeader = req.headers.authorization;
     let token ;
    if (authHeader && authHeader.startsWith("Bearer ")) {
       token = authHeader.split(" ")[1];
    }
    if(!token){
        next({ status: 401, message: "No token found" });
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();

    } catch (error) {
        next({ status: 401, message: "Invalid Token" });
    }
}  

module.exports = protect;