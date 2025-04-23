let currentQuestionIndex = 0;
let score = 0;
let answers = [];
let startTime = new Date();
let questions = []; // Initialize questions array

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQuestionSpan = document.getElementById('current-question');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const examDate = document.getElementById('exam-date');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const statusIndicator = document.getElementById('status-indicator');
const loadingIndicator = document.getElementById('loading-indicator');

// Log for debugging
function logDebug(message) {
    console.log(`[Debug] ${message}`);
}

function initializeQuestionGrid() {
    const grid = document.querySelector('.question-grid');
    if (!grid) {
        logDebug('Question grid not found');
        return;
    }
    
    logDebug(`Initializing grid with ${getTotalQuestions()} questions`);
    for (let i = 0; i < getTotalQuestions(); i++) {
        const btn = document.createElement('button');
        btn.className = 'question-number-btn';
        btn.textContent = i + 1;
        btn.addEventListener('click', () => navigateToQuestion(i));
        grid.appendChild(btn);
    }
    updateQuestionGrid();
}

function updateQuestionGrid() {
    const buttons = document.querySelectorAll('.question-number-btn');
    buttons.forEach((btn, index) => {
        btn.classList.remove('current', 'correct', 'wrong');
        if (index === currentQuestionIndex) {
            btn.classList.add('current');
        }
        if (answers[index] !== null && answers[index] !== undefined) {
            const question = getQuestion(index);
            if (question && answers[index] + 1 === question.correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });
}

function displayQuestion() {
    if (!questionText || !optionsContainer || !currentQuestionSpan) {
        logDebug('Missing DOM elements for question display');
        return;
    }
    
    const question = getQuestion(currentQuestionIndex);
    if (!question) {
        logDebug(`Question not found for index ${currentQuestionIndex}`);
        questionText.textContent = "خطأ في تحميل السؤال";
        return;
    }
    
    logDebug(`Displaying question ${currentQuestionIndex + 1}: ${question.question.substring(0, 20)}...`);
    
    questionText.textContent = question.question;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (answers[currentQuestionIndex] === index) {
            optionElement.classList.add('selected');
        }
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    updateNavButtons();
    updateQuestionGrid();
    updateStatus();
}

function selectOption(index) {
    answers[currentQuestionIndex] = index;
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    options[index].classList.add('selected');
    updateQuestionGrid();
    updateScore();
    updateStatus();
}

function navigateToQuestion(index) {
    currentQuestionIndex = index;
    displayQuestion();
}

function updateNavButtons() {
    if (!prevBtn || !nextBtn) return;
    
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === getTotalQuestions() - 1;
}

function updateStatus() {
    if (!statusIndicator) return;
    
    const question = getQuestion(currentQuestionIndex);
    if (!question) return;
    
    const answer = answers[currentQuestionIndex];
    
    if (answer === null || answer === undefined) {
        statusIndicator.textContent = 'لم تتم الإجابة';
    } else if (answer + 1 === question.correctAnswer) {
        statusIndicator.textContent = 'إجابة صحيحة';
    } else {
        statusIndicator.textContent = 'إجابة خاطئة';
    }
}

function updateScore() {
    if (!scoreElement) return;
    
    let currentScore = 0;
    const maxScore = getMaxScore();
    
    answers.forEach((answer, index) => {
        const question = getQuestion(index);
        if (question && answer !== null && answer !== undefined && answer + 1 === question.correctAnswer) {
            currentScore += question.score;
        }
    });
    
    score = currentScore;
    const percentage = (currentScore / maxScore * 100).toFixed(2);
    scoreElement.textContent = `${currentScore.toFixed(2)} من ${maxScore.toFixed(2)} (${percentage}%)`;
}

function updateTimer() {
    if (!timerElement) return;
    
    const now = new Date();
    const diff = Math.floor((now - startTime) / 1000);
    const minutes = Math.floor(diff / 60);
    timerElement.textContent = `${minutes} دقائق`;
}

prevBtn?.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
});

nextBtn?.addEventListener('click', () => {
    if (currentQuestionIndex < getTotalQuestions() - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
});

// Initialize questions from external file
function loadQuestionsFromExternalFile() {
    logDebug('Loading questions from external file');
    
    // Check if questions are already loaded from the external file
    if (typeof window.questions !== 'undefined' && window.questions.length > 0) {
        questions = window.questions;
        logDebug(`Loaded ${questions.length} questions from global scope`);
        return true;
    }
    
    // If not in global scope, try to load via localStorage as fallback
    const savedQuestions = localStorage.getItem('examQuestions');
    if (savedQuestions) {
        try {
            questions = JSON.parse(savedQuestions);
            logDebug(`Loaded ${questions.length} questions from localStorage`);
            return true;
        } catch (e) {
            logDebug(`Error parsing questions from localStorage: ${e.message}`);
        }
    }
    
    logDebug('Failed to load questions');
    return false;
}

function getQuestion(index) {
    if (!questions || questions.length === 0) {
        loadQuestionsFromExternalFile();
    }
    
    if (!questions || !questions[index]) {
        logDebug(`Question not found at index ${index}`);
        return null;
    }
    
    return questions[index];
}

function getTotalQuestions() {
    if (!questions || questions.length === 0) {
        loadQuestionsFromExternalFile();
    }
    
    return questions ? questions.length : 0;
}

function getMaxScore() {
    if (!questions || questions.length === 0) {
        loadQuestionsFromExternalFile();
    }
    
    return questions ? questions.reduce((total, q) => total + (q.score || 1), 0) : 0;
}

function initializeExam() {
    logDebug('Initializing exam');
    
    // Load questions first
    if (!loadQuestionsFromExternalFile()) {
        logDebug('Failed to load questions, displaying error message');
        if (questionText) {
            questionText.textContent = "خطأ في تحميل الأسئلة. يرجى تحديث الصفحة.";
        }
        return;
    }
    
    // Initialize the answers array with the correct length
    answers = new Array(getTotalQuestions()).fill(null);
    logDebug(`Initialized answers array with ${answers.length} slots`);
    
    const now = new Date();
    if (examDate) {
        examDate.textContent = now.toLocaleDateString('ar-SA');
    }
    
    // Update timer once and then set interval
    if (timerElement) {
        timerElement.textContent = "0 دقائق";
        setInterval(updateTimer, 60000);
    }
    
    // Initialize exam UI
    initializeQuestionGrid();
    displayQuestion();
    updateScore();
    
    // Hide loading indicator
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
    }
    
    logDebug('Exam initialization complete');
}

// Make sure the DOM is fully loaded before initializing
document.addEventListener('DOMContentLoaded', initializeExam); 