require("dotenv").config(); 
const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const querystring = require("querystring");
const bcrypt = require("bcrypt"); // For hashing passwords
const { connectToDatabase, getDb } = require("./database/connection"); // Import connection utilities
const crypto = require("crypto"); // For token generation
const nodemailer = require("nodemailer"); // For sending emails

const PORT = process.env.PORT || 3000;

/**
 * Serve static files (HTML, CSS, etc.)
 * @param {object} res - HTTP response object.
 * @param {string} filePath - Path to the file.
 * @param {string} contentType - MIME type of the content.
 */
const serveStaticFile = (res, filePath, contentType) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      const statusCode = err.code === "ENOENT" ? 404 : 500;
      const message = err.code === "ENOENT" ? "File Not Found" : "Internal Server Error";
      res.writeHead(statusCode, { "Content-Type": "text/plain" });
      return res.end(message);
    }
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
};

/**
 * Handle registration logic.
 * @param {object} req - HTTP request object.
 * @param {object} res - HTTP response object.
 */
const handleRegistration = async (req, res) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk));

  req.on("end", async () => {
    const postData = querystring.parse(body);

    try {
      const db = getDb();
      const users = db.collection("users");

      const existingUser = await users.findOne({ email: postData.email });
      if (existingUser) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("❌ User already exists.");
      }

      const hashedPassword = await bcrypt.hash(postData.password, 12);

      await users.insertOne({
        username: postData.username,
        email: postData.email,
        password: hashedPassword,
      });

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("✅ Registration successful.");
    } catch (err) {
      console.error("❌ Registration error:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("❌ Internal Server Error");
    }
  });
};

/**
 * Handle login logic.
 * @param {object} req - HTTP request object.
 * @param {object} res - HTTP response object.
 */
const handleLogin = async (req, res) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk));

  req.on("end", async () => {
    const postData = querystring.parse(body);

    try {
      const db = getDb();
      const users = db.collection("users");

      const user = await users.findOne({ email: postData.email });
      if (!user || !(await bcrypt.compare(postData.password, user.password))) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("❌ Invalid email or password.");
      }

      // Redirect to main.html after successful login
      res.writeHead(302, { Location: "/main.html" });
      res.end();
    } catch (err) {
      console.error("❌ Login error:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("❌ Internal Server Error");
    }
  });
};

/**
 * Handle forgot password logic.
 * @param {object} req - HTTP request object.
 * @param {object} res - HTTP response object.
 */
const handleForgotPassword = async (req, res) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk));

  req.on("end", async () => {
    const postData = querystring.parse(body);

    try {
      const db = getDb();
      const users = db.collection("users");

      const user = await users.findOne({ email: postData.email });
      if (!user) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("❌ Email not found.");
      }

      const resetToken = crypto.randomBytes(32).toString("hex");
      const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");
      const tokenExpiration = Date.now() + 3600000; // 1 hour validity

      await users.updateOne(
        { email: postData.email },
        { $set: { resetToken: hashedToken, resetTokenExpiration: tokenExpiration } }
      );

      const resetLink = `http://localhost:${PORT}/reset.html?token=${resetToken}`;

      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        to: postData.email,
        subject: "Password Reset Request",
        html: `<p>Click the link below to reset your password:</p>
               <a href="${resetLink}">Reset Password</a>
               <p>This link will expire in 1 hour.</p>`,
      });

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("✅ Password reset instructions sent to your email.");
    } catch (err) {
      console.error("❌ Forgot password error:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("❌ Internal Server Error");
    }
  });
};

/**
 * Handle password reset logic.
 * @param {object} req - HTTP request object.
 * @param {object} res - HTTP response object.
 */
const handleResetPassword = async (req, res) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk));

  req.on("end", async () => {
    const postData = querystring.parse(body);

    try {
      const db = getDb();
      const users = db.collection("users");

      const hashedToken = crypto.createHash("sha256").update(postData.token).digest("hex");
      const user = await users.findOne({
        resetToken: hashedToken,
        resetTokenExpiration: { $gt: Date.now() },
      });

      if (!user) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("❌ Invalid or expired token.");
      }

      const hashedPassword = await bcrypt.hash(postData.newPassword, 12);

      await users.updateOne(
        { email: user.email },
        { $set: { password: hashedPassword, resetToken: null, resetTokenExpiration: null } }
      );

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("✅ Password has been reset successfully.");
    } catch (err) {
      console.error("❌ Reset password error:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("❌ Internal Server Error");
    }
  });
};

/**
 * Main server logic.
 */
const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url);
  const pathname = parsedUrl.pathname;

  if (req.method === "GET") {
    if (pathname === "/" || pathname === "/register.html") {
      return serveStaticFile(res, path.join(__dirname, "public", "register.html"), "text/html");
    }
    if (pathname === "/login.html") {
      return serveStaticFile(res, path.join(__dirname, "public", "login.html"), "text/html");
    }
    if (pathname === "/main.html") {
      return serveStaticFile(res, path.join(__dirname, "public", "main.html"), "text/html");
    }
  } else if (req.method === "POST") {
    if (pathname === "/register") {
      return handleRegistration(req, res);
    }
    if (pathname === "/login") {
      return handleLogin(req, res);
    }
    if (pathname === "/forgot-password") {
      return handleForgotPassword(req, res);
    }
    if (pathname === "/reset-password") {
      return handleResetPassword(req, res);
    }
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("❌ Not Found");
});

(async () => {
  await connectToDatabase();
  server.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
  });
})();
