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

// Helper function to detect if text is primarily Arabic
function isArabicText(text) {
    if (!text) return false;
    // Arabic Unicode range: \u0600-\u06FF (Arabic), \u0750-\u077F (Arabic Supplement)
    const arabicPattern = /[\u0600-\u06FF\u0750-\u077F]/;
    // Check if text contains Arabic characters
    return arabicPattern.test(text);
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

    // Clear previous question content
    questionText.innerHTML = '';

    // Add the question text
    const questionTextElement = document.createElement('div');
    questionTextElement.className = 'question-title';
    questionTextElement.textContent = question.question;
    questionText.appendChild(questionTextElement);

    // Add code block if exists
    if (question.code) {
        const codeContainer = document.createElement('div');
        codeContainer.className = 'code-block-container';

        const codeHeader = document.createElement('div');
        codeHeader.className = 'code-block-header';
        codeHeader.innerHTML = '<span class="code-lang">PL/SQL</span>';
        codeContainer.appendChild(codeHeader);

        const codeBlock = document.createElement('pre');
        codeBlock.className = 'code-block';

        const codeElement = document.createElement('code');
        codeElement.className = 'language-plsql';
        codeElement.textContent = question.code;

        codeBlock.appendChild(codeElement);
        codeContainer.appendChild(codeBlock);
        questionText.appendChild(codeContainer);
    }

    // Add image if it exists
    if (question.image) {
        const imageElement = document.createElement('img');
        imageElement.src = question.image;
        imageElement.alt = "Chart image for question";
        imageElement.style.maxWidth = "100%";
        imageElement.style.display = "block";
        imageElement.style.margin = "15px auto";
        imageElement.style.borderRadius = "4px";
        imageElement.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
        questionText.appendChild(imageElement);
    }

    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    optionsContainer.innerHTML = '';

    // Check if this is the matching question (question with صل بين المصطلحات)
    if (question.question.includes('صل بين المصطلحات')) {
        // Special handling for matching question
        displayMatchingQuestion(question);
    } else {
        // Regular question display
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            if (answers[currentQuestionIndex] === index) {
                optionElement.classList.add('selected');
            }

            // Detect if text is primarily Arabic or English/Code
            const isArabic = isArabicText(option);
            if (isArabic) {
                optionElement.style.direction = 'rtl';
                optionElement.style.textAlign = 'right';
            } else {
                optionElement.style.direction = 'ltr';
                optionElement.style.textAlign = 'left';
            }

            optionElement.textContent = option;
            optionElement.addEventListener('click', () => selectOption(index));
            optionsContainer.appendChild(optionElement);
        });
    }

    updateNavButtons();
    updateQuestionGrid();
    updateStatus();
}

function displayMatchingQuestion(question) {
    // Create a matching interface
    const matchingContainer = document.createElement('div');
    matchingContainer.className = 'matching-container';

    // Extract terms and definitions from the options
    const options = question.options;

    // Create arrays to store terms and definitions
    const terms = [];
    const definitions = [];

    // Parse options to extract terms and definitions
    options.forEach(option => {
        // Split at the colon to separate term from definition
        const colonIndex = option.indexOf(':');
        if (colonIndex !== -1) {
            const term = option.substring(0, colonIndex).trim();
            const definition = option.substring(colonIndex + 1).trim();
            terms.push(term);
            definitions.push(definition);
        }
    });

    // Create table layout for matching
    const table = document.createElement('table');
    table.className = 'matching-table';
    table.style.width = '100%';
    table.style.borderCollapse = 'separate';
    table.style.borderSpacing = '0 10px';

    // Create header row
    const headerRow = document.createElement('tr');

    const defHeader = document.createElement('th');
    defHeader.textContent = 'التعريف';
    defHeader.style.padding = '10px';
    defHeader.style.textAlign = 'right';
    defHeader.style.color = '#43a047';
    defHeader.style.fontWeight = 'bold';
    defHeader.style.fontSize = '1.1rem';
    defHeader.style.width = '40%';

    const matchHeader = document.createElement('th');
    matchHeader.textContent = 'اختر';
    matchHeader.style.padding = '10px';
    matchHeader.style.textAlign = 'center';
    matchHeader.style.color = '#d32f2f';
    matchHeader.style.fontWeight = 'bold';
    matchHeader.style.fontSize = '1.1rem';
    matchHeader.style.width = '20%';

    const termHeader = document.createElement('th');
    termHeader.textContent = 'المصطلح';
    termHeader.style.padding = '10px';
    termHeader.style.textAlign = 'right';
    termHeader.style.color = '#1976d2';
    termHeader.style.fontWeight = 'bold';
    termHeader.style.fontSize = '1.1rem';
    termHeader.style.width = '40%';

    headerRow.appendChild(defHeader);
    headerRow.appendChild(matchHeader);
    headerRow.appendChild(termHeader);
    table.appendChild(headerRow);

    // Create rows for each term-definition pair
    terms.forEach((term, termIndex) => {
        const row = document.createElement('tr');
        row.style.backgroundColor = '#f8f9fa';
        row.style.borderRadius = '8px';
        row.style.marginBottom = '10px';

        const termCell = document.createElement('td');
        termCell.className = 'term-cell';
        termCell.textContent = term;
        termCell.style.padding = '15px';
        termCell.style.backgroundColor = '#f0f8ff';
        termCell.style.borderRadius = '0 8px 8px 0';
        termCell.style.borderRight = '4px solid #1976d2';
        termCell.style.fontWeight = '600';
        termCell.style.color = '#1976d2';

        const matchCell = document.createElement('td');
        matchCell.style.textAlign = 'center';
        matchCell.style.padding = '10px';
        matchCell.style.backgroundColor = '#fff';

        const defCell = document.createElement('td');
        defCell.className = 'definition-cell';
        defCell.style.padding = '15px';
        defCell.style.backgroundColor = '#f5f5f5';
        defCell.style.borderRadius = '8px 0 0 8px';
        defCell.style.borderRight = '4px solid #43a047';

        // Get the correct definition for this term
        if (termIndex < definitions.length) {
            defCell.textContent = definitions[termIndex];
        }

        // Create dropdown select menu
        const selectElement = document.createElement('select');
        selectElement.className = 'select-definition custom-select';
        selectElement.id = `match-select-${termIndex}`;
        selectElement.name = `match-select-${termIndex}`;
        selectElement.style.width = '100%';
        selectElement.style.padding = '8px';
        selectElement.style.borderRadius = '4px';
        selectElement.style.border = '1px solid #ddd';
        selectElement.style.backgroundColor = '#fff';
        selectElement.style.cursor = 'pointer';

        // Add default option
        const defaultOption = document.createElement('option');
        defaultOption.value = "";
        defaultOption.textContent = "إختر...";
        selectElement.appendChild(defaultOption);

        // Add all definitions as options
        definitions.forEach((definition, defIndex) => {
            const option = document.createElement('option');
            option.value = defIndex.toString();
            option.textContent = definition;
            selectElement.appendChild(option);

            // If there's a saved answer for this matching question
            if (answers[currentQuestionIndex] &&
                answers[currentQuestionIndex][termIndex] === defIndex) {
                option.selected = true;
            }
        });

        // Add change event listener
        selectElement.addEventListener('change', (e) => {
            const defIndex = parseInt(e.target.value);

            // Save the match in the answers object
            if (!answers[currentQuestionIndex]) {
                answers[currentQuestionIndex] = {};
            }

            if (e.target.value === "") {
                // If default "choose" option is selected, remove the answer
                delete answers[currentQuestionIndex][termIndex];
            } else {
                // Save the selection
                answers[currentQuestionIndex][termIndex] = defIndex;
            }

            updateQuestionGrid();
            updateScore();
            updateStatus();
        });

        matchCell.appendChild(selectElement);

        row.appendChild(defCell);
        row.appendChild(matchCell);
        row.appendChild(termCell);
        table.appendChild(row);
    });

    matchingContainer.appendChild(table);
    optionsContainer.appendChild(matchingContainer);

    // Add a special class to the options container for styling
    optionsContainer.classList.add('matching-question');
}

function selectOption(index) {
    const question = getQuestion(currentQuestionIndex);

    // Handle matching question differently
    if (question.question.includes('صل بين المصطلحات')) {
        // Don't do standard option selection for matching questions
        // The selection is handled in the displayMatchingQuestion function
        return;
    }

    // Regular option selection for standard questions
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

    if (question.question.includes('صل بين المصطلحات')) {
        // For matching question
        if (!answer || Object.keys(answer).length === 0) {
            statusIndicator.textContent = 'لم تتم الإجابة';
        } else {
            let allCorrect = true;

            // Check if all matches are correct
            for (const termIndex in answer) {
                const defIndex = answer[termIndex];
                if (parseInt(termIndex) !== defIndex) {
                    allCorrect = false;
                    break;
                }
            }

            // Check if all terms have a match
            const expectedTerms = question.options.length;
            const matchedTerms = Object.keys(answer).length;

            if (allCorrect && expectedTerms === matchedTerms) {
                statusIndicator.textContent = 'إجابة صحيحة';
            } else if (matchedTerms < expectedTerms) {
                statusIndicator.textContent = 'إجابة غير مكتملة';
            } else {
                statusIndicator.textContent = 'إجابة خاطئة';
            }
        }
    } else {
        // Regular question status
        if (answer === null || answer === undefined) {
            statusIndicator.textContent = 'لم تتم الإجابة';
        } else if (answer + 1 === question.correctAnswer) {
            statusIndicator.textContent = 'إجابة صحيحة';
        } else {
            statusIndicator.textContent = 'إجابة خاطئة';
        }
    }
}

function updateScore() {
    if (!scoreElement) return;

    let currentScore = 0;
    const maxScore = getMaxScore();

    answers.forEach((answer, index) => {
        const question = getQuestion(index);
        if (!question) return;

        if (question.question.includes('صل بين المصطلحات')) {
            // For matching question
            if (answer && typeof answer === 'object') {
                let allCorrect = true;

                // Check if all matches are correct
                for (const termIndex in answer) {
                    const defIndex = answer[termIndex];
                    if (parseInt(termIndex) !== defIndex) {
                        allCorrect = false;
                        break;
                    }
                }

                // Check if all terms have a match
                const expectedTerms = question.options.length;
                const matchedTerms = Object.keys(answer).length;

                if (allCorrect && expectedTerms === matchedTerms) {
                    currentScore += question.score;
                }
            }
        } else {
            // Regular question scoring
            if (answer !== null && answer !== undefined && answer + 1 === question.correctAnswer) {
                currentScore += question.score;
            }
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