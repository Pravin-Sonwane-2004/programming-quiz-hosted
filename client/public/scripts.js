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

async function loadQuestions(language) {
    try {
        const response = await fetch('/questions.json'); // Adjust if file path differs
        if (!response.ok) throw new Error('Failed to load questions');
        
        const data = await response.json();
        console.log("Loaded questions data:", data); // Debugging log

        if (Array.isArray(data)) {
            console.log("Received an array of questions.");
        } else if (typeof data === 'object') {
            console.log("Received an object of questions by language.");
        }

        questions = groupQuestionsByLanguage(data); // Group questions by language
        console.log("Grouped questions:", questions); // Debugging log

        const languageQuestions = questions[language];
        console.log(`Questions for ${language}:`, languageQuestions); // Debugging log
        
        if (!languageQuestions || languageQuestions.length === 0) {
            throw new Error('No questions found for this language');
        }

        startQuizWithQuestions(languageQuestions);
    } catch (error) {
        console.error('Error loading questions:', error.message);
        document.getElementById('response').textContent = 'Unable to load questions. Please try again later.';
    }
}

// Helper function to group questions by language
function groupQuestionsByLanguage(questionsArray) {
    const grouped = {};
    questionsArray.forEach(q => {
        if (!grouped[q.language]) grouped[q.language] = [];
        grouped[q.language].push(q);
    });
    console.log("Grouped questions:", grouped); // Debugging log
    return grouped;
}

// Shuffle Questions Function
function shuffleQuestions(language) {
    if (!questions[language]) {
        console.error(`No questions available for language: ${language}`);
        return [];  // Return an empty array if no questions exist for the language
    }

    const shuffled = questions[language].sort(() => Math.random() - 0.5); // Shuffle the questions
    return shuffled.slice(0, totalQuestions); // Return a random set of questions up to totalQuestions (default 30)
}

// Function to start the quiz based on the selected language
function startQuiz(language) {
    console.log("Starting quiz for language:", language); // Debugging log

    currentLanguage = language;
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers = [];
    incorrectAnswers = [];

    // Shuffle questions for the selected language
    questionsShuffled = shuffleQuestions(language);

    if (questionsShuffled.length === 0) {
        alert(`No questions available for ${currentLanguage}`);
        return;
    }

    // Hide the intro text and language buttons
    document.getElementById('intro-text').style.display = 'none';
    document.getElementById('language-buttons').style.display = 'none';

    // Show the first question
    showQuestion();
}

// Function to display the quiz question
function showQuestion() {
    const quizSection = document.getElementById('quizSection');
    quizSection.innerHTML = ''; // Clear previous content

    const question = questionsShuffled[currentQuestionIndex];

    if (!question) {
        showFinalPerformance();
        return;
    }

    // Display question and options
    quizSection.innerHTML = `
        <div class="quiz-question">
            <h3>${currentQuestionIndex + 1}. ${question.question}</h3>
            ${question.options.map(option => `
                <div class="option" onclick="selectOption('${option}', '${question.answer}')">${option}</div>
            `).join('')}
        </div>
    `;
}

// Other functions like selectOption(), showFinalPerformance() etc.


// Function to handle selecting an option
function selectOption(selectedOption, correctAnswer) {
    if (isOptionSelected) return; // Prevent multiple selections

    isOptionSelected = true;
    selectedAnswers.push(selectedOption);

    // Check if the selected answer is correct
    if (selectedOption === correctAnswer) {
        score++;
    } else {
        incorrectAnswers.push({ question: questionsShuffled[currentQuestionIndex], selectedOption, correctAnswer });
    }

    // Move to the next question after a short delay
    setTimeout(() => {
        isOptionSelected = false;
        currentQuestionIndex++;
        showQuestion();
    }, 1000);
}

// Function to go to the next question
function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

// Function to display performance at the end of the quiz
function showFinalPerformance() {
    const performanceSection = document.getElementById('performanceSection');
    performanceSection.style.display = 'block';
    const performanceText = document.getElementById('performanceText');

    performanceText.innerHTML = `
        <p>You completed the quiz!</p>
        <p>Your score: ${score} / ${totalQuestions}</p>
        <p>Incorrect answers:</p>
        <ul>
            ${incorrectAnswers.map(incorrect => `
                <li>
                    <strong>Question:</strong> ${incorrect.question.question} <br>
                    <strong>Your Answer:</strong> ${incorrect.selectedOption} <br>
                    <strong>Correct Answer:</strong> ${incorrect.correctAnswer}
                </li>
            `).join('')}
        </ul>
    `;
}

// Define the logout function
function logout() {
    console.log("Logging out...");  // For debugging
    window.location.href = 'login.html';  // Redirect to the login page after logging out
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Loaded"); // Debugging log
    loadQuestions('Java'); // Load questions for Java initially (or dynamically based on user selection)
});
