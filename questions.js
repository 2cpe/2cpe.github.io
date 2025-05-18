// Define questions array in a way that works in both browser and module environments
(function(global) {
    // Original questions array
    const questions = [
        {
            question: "العلامة التجارية عادة ما تكون كلمة، أو اسما ، أو عبارة، أو شعارا ، أو رمزا ، أو تصميما ، أو صورة أو بعض هذه العناصر مجتمعة",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "حضور المعارض التجارية ذات العلاقة بمشروعك أو فكرتك سيمكنك من الاتصال بالأشخاص الذين يشبهونك في التفكير",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "أحد هذه العناصر ليس من سمات رائد الأعمال:",
            options: ["التمتع بالثقة", "الإقناع", "تعدد الاهتمامات", "الحماس"],
            correctAnswer: 3,
            score: 1.00
        },
        {
            question: "المهارات الرئيسة لرائد الأعمال هي المهارات الإدراكية، والإنسانية، والفنية.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 1.00
        },
        {
            question: "تعتبر خدمات الصيرفة الإلكترونية نوع ا من أنواع الابتكار في مجال:",
            options: ["نموذج الأعمال", "المنتجات", "الخدمات", "العمليات"],
            correctAnswer: 3,
            score: 1.00
        },
        {
            question: "صل بين المصطلحات ومايقابلها من تعريفات:",
            options: [
                "الطلاقة: هي القدرة على الانتاج عدد كبير من الافكار هي فترة زمنية محددة وبطرق مختلفة.",
                "الابداع هو: عملية فكرية ذهنية تؤدي إلى انتاج الحلول أو الأفكار أو الطرق العملية والنظرية التي تكون جديدة وفريدة",
                "التمويل الجماعي: هي منصات على الانترنت لجمع مبالغ صغيرة من رأس المال من عدد كبير من الأفراد لتمويل مشروع تجاري جديد.",
                "شركات رأس المال الجريء: هي شركات تقوم بتمويل المشروع بمبدأ المشاركة وليس الإقراض، وبذلك فهي تخاطر بأموالها، وتتوقع من المشاركة عوائد مستقبلية أكبر عند بيع حصصها في الشركة.",
                "حاضنات الاعمال: هي مؤسسات تهدف إلى توفير احتياجات المشروعات الصغيره والمتوسطة في ايامها الأولى عن طريق استضافة المشروع في مراحلة التاسيسية إلى أن يصل المشروع إلى مرحلة النضج.",
                "منظومة ريادة الأعمال: هي الأفراد والمنظمات و الجهات المحيطة برائد الأعمال والتي تعين أو تعيق توجه الفرد نحو ريادة الأعمال."
            ],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "هو عبارة عن أسلوب يقوم بتمويل المشروع بمبدأ المشاركة وليس الإقراض ويقبل المخاطرة.",
            options: ["رأس المال الجريء", "رأس المال التنظيمي", "رأس المال التقليدي", "رأس المال البشرى"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "خطوات تحويل الفكرة إلى فرصة هي: توليد الفكرة، صياغة الفكرة، تسويق الفكرة، تمويل الفكرة.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "…. عباره عن أسلوب يقوم بتمويل المشروع بمبدأ المشاركة و ليس الإقتراص و يقبل المخاطرة:",
            options: ["رأس المال التقليدي", "رأس المال الجرئ", "رأس المال التنظيمي"],
            correctAnswer: 2,
            score: 1.00
        },
        {
            question: "حتى تستطيع أن تكون رائد أعما ل ناجح فيجب أن تكون لديك القدرة على:",
            options: ["البحث عن الأفكار الجديدة", "التفكير بطريقة تقليدية", "تكرار الأعمال نفسها", "تقليد الآخرين"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "هو عبارة عن أسلوب يقوم بتمويل المشروع بمبدأ المشاركة وليس الإقراض ويقبل المخاطرة.",
            options: ["رأس المال التقليدي", "رأس المال البشرى", "رأس المال الجريء", "رأس المال التنظيمي"],
            correctAnswer: 3,
            score: 1.00
        },
        {
            question: "هو عبارة عن أسلوب يقوم بتمويل المشروع بمبدأ المشاركة وليس الإقراض ويقبل المخاطرة.",
            options: ["رأس المال الجريء", "رأس المال البشرى", "رأس المال التقليدي", "رأس المال التنظيمي"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "الفرق بين الاختراع والابتكار أ ن الاختراع هو الإتيان بشيء جديد لم يُسبق إليه، أما الابتكار فهو تحويل ذلك الشيء أو تلك الفكرة إلى عمليات أو منتجات جديدة لها تأثير اقتصادي",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "يقتصر الإبداع على الأذكياء فقط.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 1.00
        },
        {
            question: "العقلية الريادية هي القدرة على تحديد الفرص وتحويلها إلى مشاريع تخلق قيمة للعملاء.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "المشروعات الصغيرة تركز على الابتكار أكثر من ريادة الأعمال",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 1.00
        },
        {
            question: "من بين السمات التي يجب أن تتوافر في رائد الأعمال:",
            options: ["عدم القدرة على الإقناع", "عدم الثقة بالنفس", "الخوف من الفشل", "أ ن لا يخشى الفشل"],
            correctAnswer: 4,
            score: 1.00
        },
        {
            question: "منظومة ريادة الأعمال: هي الأفراد، والمنظمات، والجهات المحيطة برائد الأعمال، والتي تعين أو تعيق توجه الفرد نحو ريادة الأعمال.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "إذا كنت ترغب في نجاح مشروعك الريادي وتقليل احتمالية فشله فيجب عليك أن تعمل:",
            options: ["وفقا لخطة أعمال جيدة خاصة بمشروعك", "وفقا لخطة مشروع آخر مماثل", "أن تعمل بطريقة غير مخططة", "تقليد الآخرين في طريقة عملهم"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "…… من عوامل نجاح العروض المرئية :",
            options: ["اختيار أحدث البرامج", "أختبار احدث برامج العرض المعقده", "اختيار برنامج العرض المناسب لما تقدمه،و ان تجيد التعامل معه"],
            correctAnswer: 3,
            score: 1.00
        },
        {
            question: "لا يعتبر مستقبل ريادة الأعمال مشرقا ومليئا بالفرص.",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 1.00
        },
        {
            question: "تهدف حاضنات الأعمال إلى تذليل المصاعب أمام مشروعات الشباب المتوسطة والصغيرة من خلال استضافة تلك المشروعات في :",
            options: ["مرحلة التميز والتفوق", "مراحلها التأسيسية وترعاها حتى مرحلة النضج", "مرحلة النجاح والاستقرار", "مرحلة النضج والإنتاج"],
            correctAnswer: 2,
            score: 1.00
        },
        {
            question: "من سمات الشخص المبدع أ نه دائما ما ينظر للأمور من وجهة نظر مختلفة عن الطريقة العادية التي يفكر بها الآخرون",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "….. هي النشاط الذي ينصب على إنشاء عمل مبدع و يقدم فعالية اقتصاديه مضافة :",
            options: ["تنظيم الاعمال", "ريادة الاعمال", "إدارة الاعمال"],
            correctAnswer: 2,
            score: 1.00
        },
        {
            question: "…… من النصائح التي يجب العمل بها لتقديم عرض ناجح :",
            options: ["السماح لمخاوفك بالتأثير عليك أثناء العرض", "التحضير و التدريب الجيد على العرض", "استخدام لغة و ألفاظ جديده"],
            correctAnswer: 2,
            score: 1.00
        },
        {
            question: "تعتبر خدمات الصيرفة الإلكترونية نوع ا من أنواع الابتكار في مجال:",
            options: ["الخدمات", "نموذج الأعمال", "المنتجات", "العمليات"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "عتمد نجاح العرض على شخصية العارض، و التي تتمثل فيما يلي :",
            options: ["نبرة الصوت المناسبة", "المظهر و لغة الجسد", "لغة الجسد و نبرة الصوت و لغة التحدث"],
            correctAnswer: 3,
            score: 1.00
        },
        {
            question: "منظومة ريادة الأعمال: هي الأفراد، والمنظمات، والجهات المحيطة برائد الأعمال، والتي تعين أو تعيق توجه الفرد نحو ريادة الأعمال.",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "المهارات الإدراكية هي القدرة على إنجاز العمل مع الآخرين كأفراد وكمجموعات. ويتضمن ذلك مهارات التعاون مع الآخرين والتعامل معهم",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
            score: 1.00
        },
        {
            question: "…. عباره عن أسلوب يقوم بتمويل المشروع بمبدأ المشاركة و ليس الإقتراص و يقبل المخاطرة:",
            options: ["رأس المال التنظيمي", "رأس المال التقليدي", "رأس المال الجرئ"],
            correctAnswer: 3,
            score: 1.00
        },
        {
            question: "تعتبر مرحلة .................... هي آخر مرحلة من مراحل العملية الابتكارية.",
            options: ["الإعداد والتحفيز", "التحقق من صحة الفكرة", "تطوير الفكرة", "التعايش مع الفكرة"],
            correctAnswer: 2,
            score: 1.00
        },
        {
            question: "الذكاء الاصطناعي هو سلوك وخصائص معينة تتسم بها البرامج الحاسوبية، تجعلها تحاكي القدرات الذهنية البشرية",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "تحديد الغرض من العرض التقديمي هو أولى خطوات تصميم و كتابة العرض التقديمي:",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "هناك طرق عديدة تقود رائد الأعمال لتحويل الفكرة إلى فرصة",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "من عوامل النجاح لريادة الأعمال: تمكين الخريجين من امتلاك أفكار مشروعات أعمال تجارية ذات التقنية الحديثة",
            options: ["صح", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "الأستعجال و السرعه في العرض، تؤدي إلى جذب الانتباه و قدرة الحضور على الاستيعاب الكافي للعرض:",
            options: ["صح", "خطأ"],
            correctAnswer: 2,
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