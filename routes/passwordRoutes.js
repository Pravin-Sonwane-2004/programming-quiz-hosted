const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

// POST /reset - Handle password reset completion
router.post('/reset', async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        // Validate inputs
        if (!token || !newPassword) {
            return res.status(400).json({ success: false, message: '❌ Token and new password are required.' });
        }

        // Hash the token to match the database entry
        const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

        // Find user with the token and ensure it's not expired
        const user = await User.findOne({
            resetToken: hashedToken,
            resetTokenExpiration: { $gt: Date.now() }, // Check if token is still valid
        });

        if (!user) {
            return res.status(400).json({ success: false, message: '❌ Invalid or expired token.' });
        }

        // Password validation (e.g., length, complexity) can be added here
        if (newPassword.length < 8) {
            return res.status(400).json({ success: false, message: '❌ Password must be at least 8 characters long.' });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 12);

        // Update the user's password and clear the reset token fields
        user.password = hashedPassword;
        user.resetToken = undefined;
        user.resetTokenExpiration = undefined;
        await user.save();

        // Optionally, send a confirmation email here

        res.status(200).json({ success: true, message: '✅ Password has been reset successfully.' });
    } catch (error) {
        console.error(`[${new Date().toISOString()}] ❌ Error resetting password:`, error.message);
        res.status(500).json({
            success: false,
            message: '❌ An error occurred while resetting your password. Please try again later.',
        });
    }
});

module.exports = router;
