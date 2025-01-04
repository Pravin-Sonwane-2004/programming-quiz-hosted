const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// Register User
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }
    // Generate JWT
    const token = jwt.sign({ userId: user._id }, process.env.SESSION_SECRET, { expiresIn: "1h" });
    res.status(200).json({ message: "Login successful!", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Export the controllers
module.exports = { registerUser, loginUser };
