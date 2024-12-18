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
let userDefinedTime = 2; // Countdown time in seconds

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

// Function to start the quiz based on the selected language
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
    }, 200); // Changed from 100 to 1000 for a 1-second interval
}

// Function to display the quiz question after countdown
function showQuizQuestion(question) {
    const quizSection = document.getElementById('quizSection');
    quizSection.innerHTML = `
        <div class="quiz-question">
            <h3>${currentQuestionIndex + 1}. ${question.question}</h3>
            ${question.options.map(option => `
                <div class="option" id="option-${option}" onclick="selectOption('${option}', '${question.answer}')">${option}</div>
            `).join('')}
            <div id="result-message"></div>
        </div>
    `;
    updateProgressBar(currentQuestionIndex + 1, totalQuestions); // Update progress bar
    quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Progress bar initialization
function updateProgressBar(current, total) {
    const progressBar = document.getElementById('progressBar');
    const progress = (current / total) * 100;
    progressBar.style.width = `${progress}%`;
}

// Function to select an option
function selectOption(selected, correctAnswer) {
    if (isOptionSelected || isCountdownActive) return; // Prevent multiple selections or actions during countdown
    isOptionSelected = true; // Mark that an option is selected

    const resultMessage = document.getElementById('result-message');
    const currentQuestion = questionsShuffled[currentQuestionIndex];

    // Check the selected answer
    if (selected === correctAnswer) {
        score++;
        resultMessage.innerText = "Correct!!! ";
        resultMessage.style.color = "green";
    } else {
        resultMessage.innerText = `Incorrect! The correct answer is: ${correctAnswer}`;
        resultMessage.style.color = "red";
        
        // Add to incorrectAnswers if the answer is wrong
        incorrectAnswers.push({
            question: currentQuestion.question,
            options: currentQuestion.options,
            correctAnswer: currentQuestion.answer,
            selectedAnswer: selected
        });
    }

    // Move to the next question after 2 seconds
    setTimeout(() => {
        currentQuestionIndex++;
        isOptionSelected = false; // Reset option selection flag
        if (currentQuestionIndex % 15 === 0 && currentQuestionIndex < totalQuestions) {
            showIntermediatePerformance(); // Show performance after every 5 questions
        } else if (currentQuestionIndex < totalQuestions) {
            showQuestion(); // Show the next question after countdown
        } else {
            showFinalPerformance(); // Show final performance after all questions
        }
    }, 1000);
}

// Function to evaluate performance based on score
function evaluatePerformance(score, totalAnswered) {
    let performanceMessage;
    const percentage = (score / totalAnswered) * 100;

    if (percentage === 100) {
        performanceMessage = "Excellent! You answered all questions correctly.";
    } else if (percentage >= 80) {
        performanceMessage = "Good job! You answered most questions correctly.";
    } else if (percentage >= 50) {
        performanceMessage = "You're doing better! Keep it up.";
    } else {
        performanceMessage = "Improvement needed. Keep practicing!";
    }
    return performanceMessage;
}

// Function to show intermediate performance after every 5 questions
function showIntermediatePerformance() {
    const quizSection = document.getElementById('quizSection');
    const performanceMessage = evaluatePerformance(score, currentQuestionIndex);  // Display up to the current question number
    const percentage = ((score / currentQuestionIndex) * 100).toFixed(2); // Calculate percentage

    quizSection.innerHTML = `
        <div class="performance-message">
            <h3>Your Performance Till Now</h3>
            <p>${performanceMessage}</p>
            <p>Current Score: ${score} out of ${currentQuestionIndex} (${percentage}%)</p>
            <button class="quiz-button" onclick="showQuestion()">Continue Quiz</button>
        </div>
    `;
}

// Function to show final performance at the end
function showFinalPerformance() {
    const performanceMessage = evaluatePerformance(score, currentQuestionIndex);
    const percentage = ((score / currentQuestionIndex) * 100).toFixed(2); // Calculate final percentage

    const resultSection = document.getElementById('performanceSection');
    resultSection.innerHTML = `
        <div class="performance-message">
            <h3>Your Final Performance</h3>
            <p>${performanceMessage}</p>
            <p>Final Score: ${score} out of ${currentQuestionIndex} (${percentage}%)</p>
            <button class="quiz-button" onclick="enterReviewMode()">Review Incorrect Answers</button>
            <button class="quiz-button" onclick="retakeIncorrectQuestions()">Retake Incorrect Questions</button> <!-- Retake button -->
        </div>
    `;
    resultSection.style.display = 'block'; // Show performance section
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Function to enter review mode for incorrect answers
function enterReviewMode() {
    const quizSection = document.getElementById('quizSection');
    quizSection.innerHTML = ''; // Clear previous content

    const reviewMessage = document.createElement('h3');
    reviewMessage.textContent = "Review Incorrect Answers";
    quizSection.appendChild(reviewMessage);

    // Loop through incorrect answers and display them
    incorrectAnswers.forEach((incorrect, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'review-question';
        questionElement.innerHTML = `
            <h4>${index + 1}. ${incorrect.question}</h4>
            <p>Your Answer: ${incorrect.selectedAnswer}</p>
            <p>Correct Answer: ${incorrect.correctAnswer}</p>
            <p>Options: ${incorrect.options.join(', ')}</p>
        `;
        quizSection.appendChild(questionElement);
    });

    const restartButton = document.createElement('button');
    restartButton.className = 'quiz-button';
    restartButton.textContent = 'Back to Quiz';
    restartButton.onclick = () => showFinalPerformance();  // Go back to final performance
    quizSection.appendChild(restartButton);
}

// Retake incorrect questions
function retakeIncorrectQuestions() {
    currentQuestionIndex = 0; // Reset to the first question
    score = 0; // Reset score

    // Shuffle incorrect answers for retake
    questionsShuffled = incorrectAnswers.sort(() => Math.random() - 0.5);

    // Reset incorrectAnswers array for a fresh start
    incorrectAnswers = [];

    showQuestion(); // Start retaking questions
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadQuestions();
});
