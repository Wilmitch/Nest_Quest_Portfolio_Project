const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");

const User = require("../models/User");

/* multer configuration for file uploads */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads/") // Store uploaded files in the uploads folder
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) // Use the original file name
    }
});

const upload = multer({ storage });

/* User registration */
router.post("/register", upload.single('profileImage'), async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body // Take all information from the form

        const profileImage = req.file // The file uploaded is available as req.file

        if (!profileImage) {
            return res.status(400).send("No file uploaded")
        };

        const profileImagePath = profileImage.path // Path to the uploaded image

        /* check if user exists */
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(409).json({ message: "User already exists!" })
        };

        /* Hash that password */
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)

        /* Create a new user */
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            profileImagePath,
        });

        await newUser.save(); //save the new user

        /* notify them that registration was successful */
        res.status(200).json({ message: "User registered successfully!", user: newUser});
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: "Registration failed!", error: err.message});
    }
});

module.exports = router