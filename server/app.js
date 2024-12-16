// server/app.js

require('dotenv').config({ path: './config/.env' });

const express = require('express');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const { getDb, connectToDatabase } = require("./database/connection");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Global variables
let questions = {};
let currentLanguage = '';
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 30; // Adjust this to match the number of questions you're using
let questionsShuffled = [];
let selectedAnswers = [];
let incorrectAnswers = []; // Array to store incorrectly answered questions
let isOptionSelected = false; // Track if an option is selected
let isCountdownActive = false; // Track if countdown is active
let userDefinedTime = 3; // Countdown time in seconds

// Fetch questions from questions.json
async function loadQuestions() {
  try {
      const response = await fetch('/questions.json'); // Adjust path if necessary
      if (!response.ok) throw new Error('Failed to load questions');
      questions = await response.json();

      // Check if questions are loaded for each language
      if (!Object.keys(questions).length) {
          alert('No questions available for any language.');
      } else {
          console.log('Questions loaded successfully:', questions);
      }
  } catch (error) {
      console.error('Error loading questions:', error);
      alert('Unable to load questions. Please try again later.');
  }
}


// Shuffle Questions Function
function shuffleQuestions(language) {
  const shuffled = questions[language].sort(() => Math.random() - 0.5); // Shuffle the questions
  return shuffled.slice(0, totalQuestions); // Return a random set of questions up to totalQuestions (default 30)
}

// Function to start the quiz based on the selected languagegit push origin main

function startQuiz(language) {
  currentLanguage = language;
  currentQuestionIndex = 0;
  score = 0;

  if (!questions[currentLanguage] || questions[currentLanguage].length === 0) {
      alert(`No questions available for ${currentLanguage}`);
      return;
  }

  // Shuffle questions for the selected language
  questionsShuffled = shuffleQuestions(language);

  // Reset selected answers
  selectedAnswers = [];

  // Hide the intro text and language buttons
  document.getElementById('intro-text').style.display = 'none';
  document.getElementById('language-buttons').style.display = 'none';

  // Clear previous performance section
  document.getElementById('performanceSection').style.display = 'none';

  // Show the first question
  showQuestion();
}



// Show the current question with a countdown
function showQuestion() {
  const quizSection = document.getElementById('quizSection');
  quizSection.innerHTML = ''; // Clear previous content

  const question = questionsShuffled[currentQuestionIndex];

  if (!question) {
      showFinalPerformance(); // Show performance when no more questions are available
      return;
  }

  if (isCountdownActive) return; // Prevent multiple countdowns

  // Countdown logic before showing the question
  let countdown = userDefinedTime;
  isCountdownActive = true;

  // Display countdown message
  quizSection.innerHTML = `
      <div class="countdown-timer">
          <h3>Get ready! The next question will appear in <span id="countdown">${countdown}</span> seconds...</h3>
      </div>
  `;

  // Countdown interval
  const countdownInterval = setInterval(function() {
      countdown--;
      document.getElementById('countdown').textContent = countdown;

      if (countdown === 0) {
          clearInterval(countdownInterval);
          isCountdownActive = false; // Countdown ends, reset active state
          showQuizQuestion(question); // Show the question after countdown
      }
  }, 100); // Fixed 1-second countdown interval
}




// Call connectToDatabase inside an async function to establish the MongoDB connection
(async () => {
  try {
    await connectToDatabase();
    console.log("✅ MongoDB connection established.");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  }
})();

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'client', 'public')));

// API route for quiz questions
const questionRoutes = require('./routes/questionsRoutes');
app.use('/api/questions', questionRoutes);

// Your other route handlers (registration, login, etc.)
/**
 * Serve static files (HTML, CSS, JS, JSON)
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
    const postData = require('querystring').parse(body);

    try {
      const db = getDb();
      const users = db.collection("users");

      const existingUser = await users.findOne({ email: postData.email });
      if (existingUser) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("\u274c User already exists.");
      }

      const bcrypt = require('bcrypt');
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
    const postData = require('querystring').parse(body);

    try {
      const db = getDb();
      const users = db.collection("users");

      const user = await users.findOne({ email: postData.email });
      if (!user || !(await bcrypt.compare(postData.password, user.password))) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("\u274c Invalid email or password.");
      }

      res.writeHead(302, { Location: "/index.html" });
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
const http = require("http");

const server = http.createServer(async (req, res) => {
  const parsedUrl = require('url').parse(req.url);
  const pathname = parsedUrl.pathname;

  if (req.method === "GET") {
    // Serve HTML pages
    if (pathname === "/" || pathname === "/login.html") {
      return serveStaticFile(res, path.join(__dirname, "client", "public", "login.html"), "text/html");
    }
    if (pathname === "/register.html") {
      return serveStaticFile(res, path.join(__dirname, "client", "public", "register.html"), "text/html");
    }
    if (pathname === "/index.html") {
      return serveStaticFile(res, path.join(__dirname, "client", "public", "index.html"), "text/html");
    }
    if (pathname === "/quiz.html") {
      return serveStaticFile(res, path.join(__dirname, "client", "public", "quiz.html"), "text/html");
    }


    // Serve CSS, JS, and JSON files
    if (pathname.endsWith(".css")) {
      return serveStaticFile(res, path.join(__dirname, "client", "public", pathname), "text/css");
    }
    if (pathname.endsWith(".js")) {
      return serveStaticFile(res, path.join(__dirname, "client", "public", pathname), "application/javascript");
    }
    if (pathname === "/questions.json") {
      return serveStaticFile(res, path.join(__dirname, "client", "public", "questions.json"), "application/json");
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
  res.end("\u274c Not Found");
});
const PORT = process.env.PORT || 3000;  // Fallback to 3000 if PORT is not set


(async () => {
  await connectToDatabase();
  server.listen(PORT, () => {
    console.log(`\u2705 Server running at http://localhost:${PORT}`);
  });
})();
