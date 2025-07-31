// path - ./config/db
const mongoose = require("mongoose");

function monogoDBConnection() {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = monogoDBConnection;