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
 * Serve static files (HTML, CSS, JS)
 * @param {object} res - HTTP response object.
 * @param {string} filePath - Path to the file.
 * @param {string} contentType - MIME type of the content.
 */
const serveStaticFile = (res, filePath, contentType) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(`\u274c Error serving ${filePath}:`, err);
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
        return res.end("\u274c User already exists.");
      }

      const hashedPassword = await bcrypt.hash(postData.password, 12);

      await users.insertOne({
        username: postData.username,
        email: postData.email,
        password: hashedPassword,
      });

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("\u2705 Registration successful.");
    } catch (err) {
      console.error("\u274c Registration error:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("\u274c Internal Server Error");
    }
  });
};

/**
 * Handle login logic.
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
        return res.end("\u274c Invalid email or password.");
      }

      res.writeHead(302, { Location: "/main.html" });
      res.end();
    } catch (err) {
      console.error("\u274c Login error:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("\u274c Internal Server Error");
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
    if (pathname === "/" || pathname === "/login.html") {
      return serveStaticFile(res, path.join(__dirname, "public", "login.html"), "text/html");
    }
    if (pathname === "/register.html") {
      return serveStaticFile(res, path.join(__dirname, "public", "register.html"), "text/html");
    }
    if (pathname === "/main.html") {
      return serveStaticFile(res, path.join(__dirname, "public", "main.html"), "text/html");
    }
    if (pathname === "/quiz.html") {
      return serveStaticFile(res, path.join(__dirname, "public", "quiz.html"), "text/html");
    }
    // Serve CSS and JS files
    if (pathname.endsWith(".css")) {
      return serveStaticFile(res, path.join(__dirname, "public", pathname), "text/css");
    }
    if (pathname.endsWith(".js")) {
      return serveStaticFile(res, path.join(__dirname, "public", pathname), "application/javascript");
    }
  } else if (req.method === "POST") {
    if (pathname === "/register") {
      return handleRegistration(req, res);
    }
    if (pathname === "/login") {
      return handleLogin(req, res);
    }
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("\u274c Not Found");
});

(async () => {
  await connectToDatabase();
  server.listen(PORT, () => {
    console.log(`\u2705 Server running at http://localhost:${PORT}`);
  });
})();