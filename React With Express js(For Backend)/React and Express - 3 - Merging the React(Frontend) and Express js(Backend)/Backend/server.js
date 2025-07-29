// // file path - server.js
// const express = require("express");
// const app = express();
// const userRoutes = require("./routes/userRoutes");
// const errorHandler = require("./middleware/errorHandler");
// require('dotenv').config();

// app.use(express.json());
// app.use("/userRoutes", userRoutes);

// app.use(errorHandler);

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });

const express = require("express");
const mongoose = require("mongoose");
const errorHandler = require("./middleware/errorHandler");
const cors = require('cors');
const morgan = require("morgan");

require("dotenv").config();

const app = express();

app.use(morgan("dev")); // Logging middleware for development
// Allow all origins:
app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

app.use(errorHandler);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error("DB Connection Error:", err.message));

app.listen(5000, () => console.log("Server running on port 5000"));

// const http = require("http");

// const server = http.createServer((req, res) => {
//   // Set a simple response header for all responses
//   res.setHeader("Content-Type", "text/plain");

//   if (req.url === "/") {
//     // Route for "/"
//     res.statusCode = 200;
//     res.end("hello");
//   } else if (req.url === "/about") {
//     // Another example route
//     res.statusCode = 200;
//     res.end("This is the about page");
//   } else {
//     // 404 for any other route
//     res.statusCode = 404;
//     res.end("Page not found");
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

