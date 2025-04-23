let currentQuestionIndex = 0;
let score = 0;
let answers = [];
let startTime = new Date();

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQuestionSpan = document.getElementById('current-question');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const examDate = document.getElementById('exam-date');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const statusIndicator = document.getElementById('status-indicator');

function initializeQuestionGrid() {
    const grid = document.querySelector('.question-grid');
    if (!grid) return; // Guard clause for missing elements
    
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
            if (answers[index] + 1 === question.correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });
}

function displayQuestion() {
    if (!questionText || !optionsContainer || !currentQuestionSpan) return; // Guard clause for missing elements
    
    const question = getQuestion(currentQuestionIndex);
    if (!question) return; // Guard clause for missing question
    
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
    if (!prevBtn || !nextBtn) return; // Guard clause for missing elements
    
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === getTotalQuestions() - 1;
}

function updateStatus() {
    if (!statusIndicator) return; // Guard clause for missing element
    
    const question = getQuestion(currentQuestionIndex);
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
    if (!scoreElement) return; // Guard clause for missing element
    
    let currentScore = 0;
    const maxScore = getMaxScore();
    
    answers.forEach((answer, index) => {
        const question = getQuestion(index);
        if (answer !== null && answer !== undefined && answer + 1 === question.correctAnswer) {
            currentScore += question.score;
        }
    });
    
    score = currentScore;
    const percentage = (currentScore / maxScore * 100).toFixed(2);
    scoreElement.textContent = `${currentScore.toFixed(2)} من ${maxScore.toFixed(2)} (${percentage}%)`;
}

function updateTimer() {
    if (!timerElement) return; // Guard clause for missing element
    
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

function initializeExam() {
    // Initialize the answers array with the correct length
    answers = new Array(getTotalQuestions()).fill(null);
    
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
}

// Make sure the DOM is fully loaded before initializing
document.addEventListener('DOMContentLoaded', initializeExam); 