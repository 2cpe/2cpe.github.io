// Define questions array in a way that works in both browser and module environments
(function(global) {
    // Original questions array
    const questions = [
        // Set 1
        {
            question: "لا يعد اضطراب الأفكار من مشكلات الكتابة .",
            options: ["صح", "خطأ"],
            correctAnswer: 2, // خطأ
            score: 1.00
        },
        {
            question: "يمكن اكتساب المهارة اللغوية بالتدرّب و الممارسة .",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح
            score: 1.00
        },
        {
            question: "القراءة في اللغة :",
            options: [
                "تتبع الكلمات نظراً و الاستمتاع بها",
                "تتبع الكلمات نظراً و نطقها",
                "تتبع الكلمات نظراً و نقدها",
                "تتبع الكلمات نظراً و الإفادة منها"
            ],
            correctAnswer: 2, // تتبع الكلمات نظراً و نطقها
            score: 1.00
        },
        {
            question: "المهارة في اللغة : الحذق و الإجادة .",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح
            score: 1.00
        },
        {
            question: "واحدة مما يلي ليست دليلاً على أهمية الكتابة :",
            options: [
                "أنها ذاكرة للحضارات و الأمم",
                "أنها قوام المعاملات في تنظيم الدول و المجتمعات",
                "أنها عملية ذاتية فقط",
                "أنها أداة من أدوات التعلم و المعرفة"
            ],
            correctAnswer: 3, // أنها عملية ذاتية فقط
            score: 1.00
        },
        {
            question: "من مستويات الاتصال بين المرسل و المتلقي : الاتصال النسبي ، وفيه يكون فهم الرسالة تاماً .",
            options: ["صح", "خطأ"],
            correctAnswer: 2, // خطأ
            score: 1.00
        },
        {
            question: "يجب على من يكتب كتابة وظيفية أن يختار الكلمات ذات المعنى المحدد الواضح .",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح
            score: 1.00
        },
        {
            question: "للغة و ظائف فردية فقط .",
            options: ["صح", "خطأ"],
            correctAnswer: 2, // خطأ
            score: 1.00
        },
        {
            question: "تؤدي اللغة وظيفة مرجعية .",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح
            score: 1.00
        },
        {
            question: "الكتابة في مجال الشِعر ، دليل على أهمية الكتابة ، فهي :",
            options: [
                "أداة الإبداع الأدبي",
                "وسيلة للتوثيق و الحفظ",
                "قوام المعاملات التي تنظم شؤون المجتمهات و الدول",
                "وسيلة للتنفيس"
            ],
            correctAnswer: 1, // أداة الإبداع الأدبي
            score: 1.00
        },
        {
            question: "العلاقة بين التعريف اللغوى و التعريف الاصطلاحي للكتابة أنهما :",
            options: [
                "متضادان",
                "مترابطان",
                "لا جامع بينهما",
                "متباعدان"
            ],
            correctAnswer: 2, // مترابطان
            score: 1.00
        },
        {
            question: "الكتابة الإبداعية لا تختلف فيها أساليب الكتّاب.",
            options: ["صح", "خطأ"],
            correctAnswer: 2, // خطأ
            score: 1.00
        },
        {
            question: "ذكر إدوارد سابير في تعريفه للغة أنها : ( غير غريزية ) ، وهذا يعني عدم قدرة الفرد على تعلمها من المحيط الاجتماعي .",
            options: ["صح", "خطأ"],
            correctAnswer: 2, // خطأ
            score: 1.00
        },
        {
            question: "وظيفة اللغة التواصلية من أهم الوظائف الأساسية .",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح
            score: 1.00
        },
        {
            question: "بواسطة اللغة يتداول الناس الفكر .",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح
            score: 1.00
        },
        {
            question: "( الرواية ) من أمثلة الكتابة الإبداعية .",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح
            score: 1.00
        },
        {
            question: "من خصائص القراءة الصامتة أنها : تبدد الوقت بلا فائدة.",
            options: ["صح", "خطأ"],
            correctAnswer: 2, // خطأ
            score: 1.00
        },
        {
            question: "في كتابة التاريخ دليل على أهمية الكتابة إذ هي :",
            options: [
                "ذاكرة الأمة",
                "وسيلة تنفيس",
                "أداة لتنظيم الدولة و المجتمع",
                "أداة الإبداع الأدبي"
            ],
            correctAnswer: 1, // ذاكرة الأمة
            score: 1.00
        },
        {
            question: "للغة وظائف اجتماعية .",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح
            score: 1.00
        },
        {
            question: "من معاني ( الكتابة ) في اللغة :",
            options: [
                "الحاجة و العون",
                "القضاء و الإلزام",
                "التقليل و التكثير",
                "الحل و البسط"
            ],
            correctAnswer: 2, // القضاء و الإلزام
            score: 1.00
        },
        // Set 2
        {
            question: "بواسطة اللغة يتداول الناس الفكر .",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح
            score: 1.00
        },
        {
            question: "المهارة اللغوة : أداء لغوي يتميز بالوضوح و الدقة و الترابط و المرونة بأسلوب جميل وصياغة حسنة .",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح
            score: 1.00
        },
        {
            question: "المهارة في الاصطلاح : قدرة الإنسان على القيام بعمل ما بسرعة بلا إتقان .",
            options: ["صح", "خطأ"],
            correctAnswer: 2, // خطأ
            score: 1.00
        },
        {
            question: "واحد مما يلي ليست من أركان الموقف اللغوي :",
            options: [
                "المرسل",
                "المستقبل",
                "القراءة",
                "الوسيلة أو الأداة"
            ],
            correctAnswer: 3, // القراءة
            score: 1.00
        },
        {
            question: "من خصائص القراءة الصامتة أنها : عالية التركيز .",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح
            score: 1.00
        },
        {
            question: "لا يجب على الكاتب تحديد نوع كتابته و أسلوبها قبل البدء في عملية الكتابة .",
            options: ["صح", "خطأ"],
            correctAnswer: 2, // خطأ
            score: 1.00
        },
        {
            question: "تعتمد الكتابة الإبداعية علي الخيال و التصوير البياني .",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح
            score: 1.00
        },
        {
            question: "من مستويات الاتصال بين المرسل و المتلقي : الاتصال النسبي ، وفيه يكون فهم الرسالة جزئياً .",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح
            score: 1.00
        },
        {
            question: "واحدة مما يلي من طبيعة عملية القراءة :",
            options: [
                "عملية نقدية",
                "عملية نامية و متطورة",
                "عملية مؤقتة",
                "عملية تقنية"
            ],
            correctAnswer: 2, // عملية نامية و متطورة
            score: 1.00
        },
        {
            question: "واحدة مما يلي من طبيعة عملية القراءة :", // Note: Same question as above, different option order / correct answer
            options: [
                "عملية مؤقتة",
                "عملية نقدية",
                "عملية تقنية",
                "عملية نامية و متطورة"
            ],
            correctAnswer: 4, // عملية نامية و متطورة
            score: 1.00
        },
        {
            question: "من معاني ( الكتابة ) في اللغة :", // Note: Similar to Q20 Set 1, different option order / correct answer
            options: [
                "الحل و البسط",
                "الحاجة و العون",
                "التقليل و التكثير",
                "القضاء و الإلزام"
            ],
            correctAnswer: 4, // القضاء و الإلزام
            score: 1.00
        },
        {
            question: "من خصائص القراءة الجهرية أنها : تعتمد على طبقة صوتية واحدة لا تتغير .",
            options: ["صح", "خطأ"],
            correctAnswer: 2, // خطأ
            score: 1.00
        },
        {
            question: "لا يجب على الكاتب تحديد نوع كتابته و أسلوبها قبل البدء في عملية الكتابة .", // Note: Identical to Q6 Set 2
            options: ["صح", "خطأ"],
            correctAnswer: 2, // خطأ
            score: 1.00
        },
        {
            question: "الوظيفة التوجيهية للغة تعني : عدم قدرة اللغة على التأثير في سلوك الفرد و الجماعات .",
            options: ["صح", "خطأ"],
            correctAnswer: 2, // خطأ
            score: 1.00
        },
        {
            question: "واحدة من الفقرات التالية ليست من أهداف القراءة :",
            options: [
                "تبديد الوقت",
                "الترويح عن النفس",
                "التعلم",
                "التثقيف"
            ],
            correctAnswer: 1, // تبديد الوقت
            score: 1.00
        },
        {
            question: "من مستويات الاتصال بين المرسل و المتلقي : تمام الانقطاع ، وفيه يكون فهم الرسالة كلياً .",
            options: ["صح", "خطأ"],
            correctAnswer: 2, // خطأ
            score: 1.00
        },
        {
            question: "ينبغي للمرسل في العملية التواصلية ألّا يكون :",
            options: [
                "حسن التعبير",
                "ملماً بتفاصيل الرسالة",
                "متجاهلاً لحالة المستقبل",
                "واضحاً"
            ],
            correctAnswer: 3, // متجاهلاً لحالة المستقبل
            score: 1.00
        },
        {
            question: "من تعاريف اللغة أنها : ( وسيلة غير إنسانية ، غريزية ، تمكن الفرد من تبادل الأفكار و العواطف و الرغبات ).",
            options: ["صح", "خطأ"],
            correctAnswer: 2, // خطأ
            score: 1.00
        },
        {
            question: "يجب على من يكتب كتابة وظيفية أن يختار الكلمات ذات المعنى المحدد الواضح .", // Note: Identical to Q7 Set 1
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح
            score: 1.00
        },
        {
            question: "في قوله تعالى : [ يا أيها الذين آمنوا إذا تداينتم بدين إلى أجل مسمى فاكتبوه ] ، دليل على أهمية الكتابة إذ هي :",
            options: [
                "وسيلة لحفظ الحقوق و التوثيق",
                "وسيلة للتواصل مع الطرف الآخر",
                "وسيلة للتسلية",
                "أداة للإبداع الأدبي"
            ],
            correctAnswer: 1, // وسيلة لحفظ الحقوق و التوثيق
            score: 1.00
        }
    ];
    // Make questions available globally
    global.questions = questions;

    // For localStorage fallback
    function saveQuestions() {
        try {
            localStorage.setItem('examQuestions', JSON.stringify(questions));
            console.log("Questions saved to localStorage");
        } catch (e) {
            console.error("Failed to save questions to localStorage:", e);
        }
    }

    function loadQuestions() {
        const savedQuestions = localStorage.getItem('examQuestions');
        if (savedQuestions) {
            try {
                const parsedQuestions = JSON.parse(savedQuestions);
                // Only overwrite if we have valid questions
                if (Array.isArray(parsedQuestions) && parsedQuestions.length > 0) {
                    return parsedQuestions;
                }
            } catch (e) {
                console.error("Error parsing questions from localStorage:", e);
            }
        }
        return questions; // Return original questions if localStorage failed
    }

    // Backwards compatibility with existing code
    global.getQuestion = function(index) {
        const loadedQuestions = loadQuestions();
        return loadedQuestions[index];
    };

    global.getTotalQuestions = function() {
        const loadedQuestions = loadQuestions();
        return loadedQuestions.length;
    };

    global.getMaxScore = function() {
        const loadedQuestions = loadQuestions();
        return loadedQuestions.reduce((total, q) => total + q.score, 0);
    };

    // Save questions to localStorage on load
    saveQuestions();

    // Log questions loaded for debugging
    console.log(`Loaded ${questions.length} questions`);

})(typeof window !== 'undefined' ? window : this); // This works in both browser and Node.js 