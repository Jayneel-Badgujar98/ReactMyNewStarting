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
require("dotenv").config();

const app = express();
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

app.use(errorHandler);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error("DB Connection Error:", err.message));

app.listen(5000, () => console.log("Server running on port 5000"));
