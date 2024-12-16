require('dotenv').config({ path: './config/.env' });

const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const querystring = require("querystring");
const bcrypt = require("bcrypt");
const { connectToDatabase, getDb } = require("./database/connection");

const PORT = process.env.PORT || 3000;

/**
 * Serve static files (HTML, CSS, JS, JSON)
 * @param {object} res - HTTP response object.
 * @param {string} filePath - Path to the file.
 * @param {string} contentType - MIME type of the content.
 */
const serveStaticFile = (res, filePath, contentType) => {
  const fullPath = path.join(__dirname, "..", "client", "public", filePath); // Adjusted path to `client/public`
  
  fs.readFile(fullPath, (err, data) => {
    if (err) {
      console.error(`❌ Error serving ${filePath}:`, err.message);
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
      console.error("❌ Registration error:", err.message);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("❌ Internal Server Error.");
    }
  });
};
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

      res.writeHead(302, { Location: "/index.html" });
      res.end();
    } catch (err) {
      console.error("❌ Login error:", err.message);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("❌ Internal Server Error.");
    }
  });
};

/**
 * Main server logic.
 */
const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url);
  const pathname = parsedUrl.pathname;

  // Paths for HTML pages
  const htmlPaths = {
    "/": "login.html",
    "/login.html": "login.html",
    "/register.html": "register.html",
    "/index.html": "index.html",
    "/quiz.html": "quiz.html", // Adjusted path for quiz.html
  };

  if (req.method === "GET") {
    // Serve HTML pages
    if (htmlPaths[pathname]) {
      return serveStaticFile(res, htmlPaths[pathname], "text/html");
    }

    // Serve CSS files
    if (pathname.endsWith(".css")) {
      return serveStaticFile(res, pathname, "text/css");
    }

    // Serve JS files
    if (pathname.endsWith(".js")) {
      return serveStaticFile(res, pathname, "application/javascript");
    }

    // Serve JSON files (e.g., questions.json)
    if (pathname === "/questions.json") {
      return serveStaticFile(res, "questions.json", "application/json");
    }
  } else if (req.method === "POST") {
    if (pathname === "/register") {
      return handleRegistration(req, res);
    }
    if (pathname === "/login") {
      return handleLogin(req, res);
    }
  }

  // If no route matches
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("❌ Not Found");
});

// Start the server and connect to the database
(async () => {
  try {
    await connectToDatabase();
    console.log("✅ MongoDB connected successfully!");
    server.listen(PORT, () => {
      console.log(`✅ Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error.message);
  }
})();
