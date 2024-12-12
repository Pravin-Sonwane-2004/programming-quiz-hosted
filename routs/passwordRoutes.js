const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // Ensure this points to your user model
const nodemailer = require('nodemailer');

// POST /forget - Handle forgot password requests
router.post('/forget', async (req, res) => {
    const { email } = req.body;

    try {
        // Check if the email exists in the database
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send('Email not found.');
        }

        // Generate a reset token (this can be a random string or a JWT)
        const resetToken = Math.random().toString(36).substring(2, 15);

        // (Optional) Save the reset token in the database with an expiration time
        user.resetToken = resetToken;
        user.resetTokenExpiration = Date.now() + 3600000; // 1 hour
        await user.save();

        // Set up email transport
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // You can use any email provider
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS, // Your email password
            },
        });

        // Send email with reset instructions
        const resetLink = `http://localhost:3000/reset?token=${resetToken}`;
        await transporter.sendMail({
            to: email,
            subject: 'Password Reset Request',
            html: `<p>You requested a password reset. Click the link below to reset your password:</p>
                   <a href="${resetLink}">Reset Password</a>`,
        });

        res.status(200).send('Password reset instructions have been sent to your email.');
    } catch (error) {
        console.error('Error during password reset:', error.message);
        res.status(500).send('An error occurred. Please try again later.');
    }
});

module.exports = router;
