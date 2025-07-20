// const jwt = require("jsonwebtoken");

// function protect(req, res, next) {
//   const authHeader = req.headers.authorization;

//   // Check if token is there
//   if (authHeader && authHeader.startsWith("Bearer ")) {
//     const token = authHeader.split(" ")[1];

//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = decoded; // attach user info to req
//       next();
//     } catch (err) {
//       return res.status(401).json({ message: "Invalid token" });
//     }
//   } else {
//     return res.status(401).json({ message: "Not authorized, token missing" });
//   }
// }

// module.exports = protect;

// file path - middlewares/authMiddleware
const jwt = require("jsonwebtoken");

function protect(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  }

  else {
    return res.status(401).json({ message: "Not authorized, token missing" });
  }
}

module.exports = protect;