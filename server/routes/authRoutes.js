const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const router = express.Router();

// Register Route
router.post("/register", registerUser);

// Login Route
router.post("/login", loginUser);

module.exports = router;
;
const Question = require('../models/questionModel');  // Model to fetch questions from DB

// GET /api/questions - Fetch all quiz questions from DB
router.get('/', async (req, res) => {
    try {
        const questions = await Question.find(); // MongoDB query to fetch questions
        res.json(questions); // Send back questions as JSON
    } catch (error) {
        res.status(500).json({ message: "Error fetching questions" });
    }
});

module.exports = router;
