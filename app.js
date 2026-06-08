(() => {
    'use strict';

    /* ============================================================
       DOM REFERENCES
       ============================================================ */
    const $ = (id) => document.getElementById(id);

    const themeBtn = $('theme-toggle');
    const examThemeBtn = $('exam-theme-toggle');
    const subjectScreen = $('subject-screen');
    const examScreen = $('exam-screen');
    const subjectGrid = $('subject-grid');
    const skeleton = $('skeleton-grid');
    const subjectLoading = $('subject-loading');
    const modal = $('unavailable-modal');
    const modalMsg = $('unavailable-message');
    const modalClose = $('modal-close-btn');
    const resultModal = $('result-modal');
    const resultClose = $('result-close-btn');
    const confirmModal = $('confirm-modal');
    const confirmYes = $('confirm-yes-btn');
    const confirmNo = $('confirm-no-btn');
    const toast = $('toast');
    const backBtn = $('back-to-subjects-btn');
    const examSubjectDisplay = $('exam-subject-display');
    const examSubjectSide = $('exam-subject-side');
    const questionGrid = $('exam-question-grid');
    const progressBar = $('progress-bar');
    const progressText = $('exam-progress-text');
    const currentQSpan = $('current-question');
    const questionText = $('question-text');
    const optionsContainer = $('options-container');
    const prevBtn = $('prev-btn');
    const nextBtn = $('next-btn');
    const submitBtn = $('submit-btn');
    const statusIndicator = $('status-indicator');
    const scoreSpan = $('score');
    const sideScore = $('side-score');
    const examDate = $('exam-date');

    /* ============================================================
       STATE MANAGEMENT
       ============================================================ */
    const state = {
        questions: [],
        currentIndex: 0,
        answers: {},    // { index: selectedOptionIndex }
        subjectId: '',
        subjectName: '',
        icon: '',
        totalScore: 0,
        totalPossible: 0
    };

    /* ============================================================
       THEME CONTROLLER
       ============================================================ */
    const getTheme = () => localStorage.getItem('theme') || 'light';

    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    const toggleTheme = () => {
        const current = getTheme();
        setTheme(current === 'light' ? 'dark' : 'light');
    };

    const initTheme = () => {
        setTheme(getTheme());
    };

    themeBtn.addEventListener('click', toggleTheme);
    examThemeBtn.addEventListener('click', toggleTheme);

    /* ============================================================
       TOAST NOTIFICATIONS
       ============================================================ */
    let toastTimer = null;

    const showToast = (message) => {
        toast.textContent = message;
        toast.classList.remove('hidden');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toast.classList.add('hidden');
        }, 3500);
    };

    /* ============================================================
       MODAL CONTROLLERS
       ============================================================ */
    const showModal = (message) => {
        modalMsg.textContent = message;
        modal.classList.remove('hidden');
    };

    const hideModal = () => {
        modal.classList.add('hidden');
    };

    /* ============================================================
       CUSTOM DIALOG PROMISE (Replacement for blocking window.confirm)
       ============================================================ */
    const customConfirm = (message) => {
        return new Promise((resolve) => {
            $('confirm-message').textContent = message;

            const cleanup = (result) => {
                confirmModal.classList.add('hidden');
                confirmYes.removeEventListener('click', onYes);
                confirmNo.removeEventListener('click', onNo);
                confirmModal.removeEventListener('click', onBackdrop);
                document.removeEventListener('keydown', onKey);
                resolve(result);
            };

            const onYes = () => cleanup(true);
            const onNo = () => cleanup(false);
            const onBackdrop = (e) => { if (e.target === confirmModal) cleanup(false); };
            const onKey = (e) => {
                if (e.key === 'Escape') cleanup(false);
                if (e.key === 'Enter') cleanup(true);
            };

            confirmYes.addEventListener('click', onYes);
            confirmNo.addEventListener('click', onNo);
            confirmModal.addEventListener('click', onBackdrop);
            document.addEventListener('keydown', onKey);

            confirmModal.classList.remove('hidden');
            setTimeout(() => { confirmYes.focus(); }, 50);
        });
    };

    modalClose.addEventListener('click', hideModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) hideModal();
    });

    /* ============================================================
       SUBJECT SELECTION PAGE
       ============================================================ */
    const renderSubjects = () => {
        const subjects = getSubjectList();
        skeleton.classList.add('hidden');
        subjectGrid.innerHTML = '';

        subjects.forEach((s) => {
            const card = document.createElement('div');
            card.className = 'subject-card';
            card.dataset.id = s.id;
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');

            const badgeStatus = s.available ? 'متاح' : 'غير متاح';
            const badgeClass = s.available ? 'status-available' : 'status-unavailable';

            card.innerHTML = `
                <div class="subject-icon">${s.icon}</div>
                <div class="subject-name">${s.name}</div>
                <div class="subject-name-en">${s.nameEn}</div>
                <div class="subject-status-badge ${badgeClass}">${badgeStatus}</div>
            `;

            card.addEventListener('click', () => handleSubjectClick(s.id));

            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSubjectClick(s.id);
                }
            });

            subjectGrid.appendChild(card);
        });
    };

    const handleSubjectClick = (id) => {
        showLoading(id);

        getSubjectAvailability(id).then((result) => {
            hideLoading(id);
            if (result.available) {
                startExam(result.examData);
            } else {
                showModal(result.message);
            }
        }).catch(() => {
            hideLoading(id);
            showToast('حدث خطأ غير متوقع. حاول مرة أخرى.');
        });
    };

    const showLoading = (id) => {
        const cards = document.querySelectorAll('.subject-card');
        cards.forEach((c) => {
            if (c.dataset.id === id) {
                c.classList.add('loading');
                if (c.querySelector('.spinner')) return;
                const spinner = document.createElement('div');
                spinner.className = 'spinner';
                spinner.style.cssText = 'width:20px;height:20px;margin-top:8px;border-width:2px;';
                c.appendChild(spinner);
            }
        });
    };

    const hideLoading = (id) => {
        const cards = document.querySelectorAll('.subject-card');
        cards.forEach((c) => {
            if (c.dataset.id === id) {
                c.classList.remove('loading');
                const sp = c.querySelector('.spinner');
                if (sp) sp.remove();
            }
        });
    };

    /* ============================================================
       EXAM INITIALIZATION
       ============================================================ */
    const startExam = (data) => {
        state.questions = data.questions;
        state.subjectId = data.subjectId;
        state.subjectName = data.subjectName;
        state.icon = data.icon || '';
        state.currentIndex = 0;
        state.answers = {};
        state.totalScore = 0;
        state.totalPossible = 0;

        state.questions.forEach((q) => {
            state.totalPossible += q.score || 1;
        });

        examSubjectDisplay.textContent = `${state.icon} ${state.subjectName}`;
        examSubjectSide.textContent = state.subjectName;

        const now = new Date();
        const d = now.toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
        examDate.textContent = d;

        subjectScreen.classList.add('hidden');
        examScreen.classList.remove('hidden');
        document.body.classList.add('exam-active');

        renderQuestionGrid();
        showQuestion(0);
        updateProgress();
        updateScore();
    };

    /* ============================================================
       QUESTION RENDERING & OPTIONS SELECT
       ============================================================ */
    const showQuestion = (index) => {
        const q = state.questions[index];
        if (!q) return;

        state.currentIndex = index;

        if (q.code && q.code.length > 0) {
            let codeHtml = '';
            q.code.forEach((c) => {
                codeHtml += `
                    <div class="code-block-container">
                        <div class="code-block-header">
                            <span class="code-lang">${c.lang || 'Code'}</span>
                        </div>
                        <pre class="code-block"><code>${escapeHtml(c.content)}</code></pre>
                    </div>
                `;
            });
            questionText.innerHTML = q.question + codeHtml;
        } else {
            questionText.innerHTML = q.question;
        }

        currentQSpan.textContent = index + 1;

        const isLast = index === state.questions.length - 1;
        nextBtn.classList.toggle('hidden', isLast);
        submitBtn.classList.toggle('hidden', !isLast);

        renderOptions(q, index);
        updateStatus(index);
        updateQuestionGrid();
        updateProgress();
        updateScore();
    };

    const renderOptions = (q, index) => {
        optionsContainer.innerHTML = '';
        const selected = state.answers[index];

        q.options.forEach((opt, i) => {
            const div = document.createElement('div');
            div.className = `option${selected === i ? ' selected' : ''}`;
            div.innerHTML = `
                <span class="radio-dot"></span>
                <span class="option-text">${escapeHtml(opt)}</span>
            `;
            div.addEventListener('click', () => selectOption(index, i));
            optionsContainer.appendChild(div);
        });
    };

    const selectOption = (qIndex, optIndex) => {
        state.answers[qIndex] = optIndex;
        renderOptions(state.questions[qIndex], qIndex);
        updateStatus(qIndex);
        updateScore();
        updateQuestionGrid();
    };

    const updateStatus = (index) => {
        const answered = state.answers[index] !== undefined;
        statusIndicator.textContent = answered ? 'تمت الإجابة ✓' : 'لم تتم الإجابة';
        statusIndicator.style.color = answered ? 'var(--success)' : 'var(--text-muted)';
    };

    const updateProgress = () => {
        const total = state.questions.length;
        const answered = Object.keys(state.answers).length;
        const pct = total > 0 ? Math.round((answered / total) * 100) : 0;
        progressBar.style.width = `${pct}%`;
        progressText.textContent = `${state.currentIndex + 1} / ${total}`;
    };

    const updateScore = () => {
        let earned = 0;
        let possible = 0;
        state.questions.forEach((q, i) => {
            possible += q.score || 1;
            if (state.answers[i] !== undefined && state.answers[i] === (q.correctAnswer - 1)) {
                earned += q.score || 1;
            }
        });
        state.totalScore = earned;
        state.totalPossible = possible;

        const pct = possible > 0 ? ((earned / possible) * 100).toFixed(2) : '0.00';
        scoreSpan.textContent = `${earned.toFixed(2)} من ${possible.toFixed(2)} (${pct}%)`;
        sideScore.textContent = earned.toFixed(2);
    };

    /* ============================================================
       SIDE PANEL INTERACTION
       ============================================================ */
    const renderQuestionGrid = () => {
        questionGrid.innerHTML = '';
        state.questions.forEach((_, i) => {
            const btn = document.createElement('button');
            btn.className = 'question-number-btn';
            btn.textContent = i + 1;
            btn.dataset.index = i;
            btn.addEventListener('click', () => showQuestion(i));
            questionGrid.appendChild(btn);
        });
    };

    const updateQuestionGrid = () => {
        const btns = questionGrid.querySelectorAll('.question-number-btn');
        btns.forEach((btn) => {
            const i = parseInt(btn.dataset.index);
            btn.className = 'question-number-btn';
            if (i === state.currentIndex) {
                btn.classList.add('current');
            }
            if (state.answers[i] !== undefined) {
                const q = state.questions[i];
                const correct = state.answers[i] === (q.correctAnswer - 1);
                btn.classList.add(correct ? 'correct' : 'wrong');
            }
        });
    };

    /* ============================================================
       EXAM CONTROLS & NAVIGATION
       ============================================================ */
    const goToPrev = () => {
        if (state.currentIndex > 0) {
            showQuestion(state.currentIndex - 1);
        }
    };

    const goToNext = () => {
        if (state.currentIndex < state.questions.length - 1) {
            showQuestion(state.currentIndex + 1);
        }
    };

    const confirmSubmit = () => {
        let unanswered = 0;
        state.questions.forEach((_, i) => {
            if (state.answers[i] === undefined) unanswered++;
        });

        const msg = unanswered > 0
            ? `لديك ${unanswered} سؤال لم تتم الإجابة عليه.\nهل أنت متأكد من إنهاء الاختبار؟`
            : 'هل أنت متأكد من إنهاء الاختبار؟';

        customConfirm(msg).then((ok) => {
            if (ok) finishExam();
        });
    };

    const finishExam = () => {
        const earned = state.totalScore;
        const possible = state.totalPossible;
        const pct = possible > 0 ? ((earned / possible) * 100) : 0;
        const pctStr = pct.toFixed(2);

        $('result-earned').textContent = earned.toFixed(2);
        $('result-possible').textContent = possible.toFixed(2);
        $('result-percent').textContent = `${pctStr}%`;
        $('result-subject').textContent = state.subjectName;

        const gradeEl = $('result-grade');
        const iconEl = $('result-icon');
        const titleEl = $('result-title');
        gradeEl.className = 'result-grade';

        if (pct >= 90) {
            gradeEl.textContent = 'ممتاز';
            gradeEl.classList.add('grade-excellent');
            iconEl.textContent = '✓';
            titleEl.textContent = 'أداء رائع!';
        } else if (pct >= 75) {
            gradeEl.textContent = 'جيد جداً';
            gradeEl.classList.add('grade-good');
            iconEl.textContent = '✓';
            titleEl.textContent = 'تم إنهاء الاختبار!';
        } else if (pct >= 50) {
            gradeEl.textContent = 'مقبول';
            gradeEl.classList.add('grade-okay');
            iconEl.textContent = '✓';
            titleEl.textContent = 'تم إنهاء الاختبار!';
        } else {
            gradeEl.textContent = 'يحتاج إلى مراجعة';
            gradeEl.classList.add('grade-fail');
            iconEl.textContent = '⚠';
            titleEl.textContent = 'تم إنهاء الاختبار!';
        }

        resultModal.classList.remove('hidden');
    };

    resultClose.addEventListener('click', () => {
        resultModal.classList.add('hidden');
        goBackToSubjects();
    });

    prevBtn.addEventListener('click', goToPrev);
    nextBtn.addEventListener('click', goToNext);
    submitBtn.addEventListener('click', confirmSubmit);

    document.addEventListener('keydown', (e) => {
        if (examScreen.classList.contains('hidden')) return;
        if (e.key === 'ArrowRight') goToNext();
        if (e.key === 'ArrowLeft') goToPrev();
    });

    /* ============================================================
       BACK TO DASHBOARD
       ============================================================ */
    const goBackToSubjects = () => {
        examScreen.classList.add('hidden');
        subjectScreen.classList.remove('hidden');
        document.body.classList.remove('exam-active');
        renderSubjects();
    };

    backBtn.addEventListener('click', () => {
        customConfirm('سيتم فقدان التقدم في الاختبار الحالي. هل أنت متأكد؟').then((ok) => {
            if (ok) goBackToSubjects();
        });
    });

    /* ============================================================
       HTML SANITIZER HELPERS
       ============================================================ */
    const escapeHtml = (str) => {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    };

    /* ============================================================
       INIT SYSTEM
       ============================================================ */
    initTheme();
    renderSubjects();

})();
