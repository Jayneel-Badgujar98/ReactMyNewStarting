// file path - ./routes/index.routes
const express = require("express")
const authMiddleware = require("../middlewares/auth")
const userModel = require("../models/user.model")


const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const path = require("path");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const app = express.Router()


app.get("/", authMiddleware, async (req, res) => {
    const userId = req.thisIsUser.userId;

    const loggedInUser = await userModel.findById(userId);
    const allUsers = await userModel.find();

    res.render("home", {
        allUsers,
        imageUrl: null,
        user: loggedInUser, // ✅ Now user is defined in EJS
    });
});


// Multer Setup (memory storage, no local save)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const streamifier = require("streamifier");

// app.post("/upload-file", authMiddleware, upload.single("image"), async (req, res) => {
//     try {
//         const streamUpload = (buffer) => {
//             return new Promise((resolve, reject) => {
//                 const stream = cloudinary.uploader.upload_stream(
//                     { resource_type: "image" },
//                     (error, result) => {
//                         if (error) reject(error);
//                         else resolve(result);
//                     }
//                 );
//                 streamifier.createReadStream(buffer).pipe(stream);
//             });
//         };

//         const result = await streamUpload(req.file.buffer);
//         res.render("home", {
//             imageUrl: result.secure_url,
//             allUsers: await userModel.find()
//         });

//     } catch (err) {
//         console.error("Upload Error:", err);
//         res.send("Error uploading image");
//     }
// });
app.get('/logout',authMiddleware, (req, res) => {
    // Clear the token cookie, assuming your token cookie name is 'token'
    res.clearCookie('token');
    // Redirect to login page
    // res.render('login');
    res.redirect('/user/login')
});

app.post("/delete-image",authMiddleware,async (req, res) => {
    const { public_id } = req.body;
    // const userId = req.session.user._id; // assuming session-based auth
    const userId = req.thisIsUser.userId

    try {
        // Delete from Cloudinary
        await cloudinary.uploader.destroy(public_id);

        // Remove from MongoDB user images array
        await userModel.findByIdAndUpdate(userId, {
            $pull: { images: { public_id: public_id } },
        });

        // res.redirect("/home");
        res.render("home", {
            imageUrl: null,
            allUsers: await userModel.find(),
            user: await userModel.findOne({ _id: userId }),
        });
    } catch (err) {
        console.error("Error deleting image:", err);
        res.status(500).send("Failed to delete image");
    }
});

app.post("/upload-file", authMiddleware, upload.single("image"), async (req, res) => {
    try {
        const streamUpload = (buffer) => {
            return new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    { resource_type: "image" },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                );
                streamifier.createReadStream(buffer).pipe(stream);
            });
        };

        const result = await streamUpload(req.file.buffer);

        // ✅ Save URL and public_id to DB under logged-in user
        const userId = req.thisIsUser.userId;
        await userModel.findByIdAndUpdate(userId, {
            $push: {
                images: {
                    url: result.secure_url,
                    public_id: result.public_id,
                },
            },
        });

        const updatedUser = await userModel.findById(userId);
        const allUsers = await userModel.find();

        res.render("home", {
            imageUrl: result.secure_url,
            allUsers,
            user: updatedUser,
        });

    } catch (err) {
        console.error("Upload Error:", err);
        res.send("Error uploading image");
    }
});


module.exports = app;