const express = require("express");
const Question = require("../models/questionModel");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: "Error fetching questions" });
    }
});

module.exports = router; // Ensure router is exported correctly
