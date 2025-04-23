// Define questions array in a way that works in both browser and module environments
(function(global) {
    // Original questions array
    const questions = [
        {
            question: "في Word يمكن تقسيم الصفحة الى عدة أعمدة من قائمة ....",
            options: ["تخطيط", "إدراج", "تصميم", "عرض"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Word يمكنك برنامج Word من اختيار الحد المناسب للصفحة",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Access مكونات قاعدة البيانات الجداول – الاستعلامات – النماذج – التقارير",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel استخدم الدالة .... لتعيين الأخطاء الموجودة في صيغة ومعالجتها",
            options: ["IFERROR", "SUMIF", "COUNTIF", "AVERAGEIF"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Access كيف يمكنك فرز الاستعلام عن طريق أكثر من حقل واحد في طريقة عرض التصميم؟",
            options: [
                "ترتيب الحقول في شبكة تصميم الاستعلام ثم انقر على الصف فرز",
                "ترتيب من اليسار الى اليمين في الصف فرز تصاعدي",
                "كل ما سبق"
            ],
            correctAnswer: 2,
            score: 1.00
        },
        {
            question: "في Excel المخطط التالي, الى أي شيء تشير التسمية في C؟",
            options: ["تسميات البيانات", "عنوان المخطط", "علامات البيانات", "محور البيانات"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Access في أي صورة يتم تخزين البيانات في Access?",
            options: ["الجداول", "النماذج", "التقارير", "الاستعلامات"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel عندما حددت البيانات وانشات مخططا دائريا, تم وضع هذا المخطط على ورقة العمل, تتم الإشارة الى هذا المخطط كمخطط مضمن (داخل ورقة العمل)",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel يمكن ان يصبح المخطط الفقاعي مفيدا اذا كنت بحاجة الى مقارنة ثلاث مجموعات من القيم",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel أي مما يلي من الصيغ يعمل على تلخيص البيانات شرطيا؟",
            options: ["COUNTIFS", "SUM", "AVERAGE", "MAX"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Access بواسطة الاستعلامات تقوم بعملية البحث واستخراج البيانات",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Access بعد انشاء قاعدة بيانات من قالب موجود في office يمكنك تعديل بنية تخزين البيانات",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel تعتبر الصيغة الشرطية IF صيغة يتم فيها تحديد النتيجة من خلال وجود شرط معين او عدم وجوده",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Access يمكنك تغيير المفتاح الأساسي الذي تم الوصول اليه",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Access برنامج اكسيس 2013 يمكن فتح وحفظ ملفات قاعدة البيانات متوافق مع أي من الإصدارات التالية من الوصول",
            options: ["Access 2007", "Access 2010", "Access 2013", "كل الإجابات"],
            correctAnswer: 4,
            score: 1.00
        },
        {
            question: "في Word تعد عمليات دمج المراسلات مفيدة لانشاء مستندات متعددة ذات المحتوى الأساسي نفسه",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Word خيار الجداول السريعه يستخدم لاختيار تصاميم جاهزة للجداول",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Word يمكن انشاء جدول فقط من قائمة ادراج جدول",
            options: ["صواب", "خطأ"],
            correctAnswer: 2,
            score: 1.00
        },
        {
            question: "في برنامج Word تعد عمليات دمج المراسلات مفيدة لانشاء",
            options: ["رسائل بريدية", "مغلفات", "بطاقات بريدية", "كل الأجوبة أعلاه صحيحة"],
            correctAnswer: 4,
            score: 1.00
        },
        {
            question: "في Access أي من التالي من أنواع العلاقات؟",
            options: ["علاقة راس بأطراف", "علاقة واحد لواحد", "علاقة متعدد لمتعدد", "كل ما سبق"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Word عند تحديد مستلمي لمستند دمج المراسلات يمكنك التحديد فقط من ملف قاعدة بيانات موجودة",
            options: ["صواب", "خطأ"],
            correctAnswer: 2,
            score: 1.00
        },
        {
            question: "في Word يمكن تقسيم الخليه الى عدة اعمده متساوية",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel ان ..... هو تمثيل رسومي للبيانات",
            options: ["المخطط", "الجدول", "الصيغة", "الدالة"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel يرجع المعيار الذي يحتوي على عامل التشغيل or دائما قيمة true او false",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Access برنامج Access يقوم تلقائيا بحفظ جداول جديدة كما أنشائته بدون اسم.",
            options: ["صواب", "خطأ"],
            correctAnswer: 2,
            score: 1.00
        },
        {
            question: "في Access ماهو الغرض الرئيسي من فرض التكامل المرجعي في علاقة؟",
            options: ["لمنع السجلات الفريدة", "لمنع تكرار البيانات", "لمنع البيانات اليتيمة", "كل ما سبق"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Word أي عنصر من العناصر التالية يقودك خطوة بخطوة عبر تنفيذ عملية دمج المراسلات؟",
            options: ["معالج دمج المراسالت خطوة بخطوة", "مستند رئيسي", "مصدر بيانات", "حقول الدمج"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel يمكنك انشاء احد أنواع ..... الشائعة عن طريق النقر فوق صورته ضمن علامة التبويب ادراج",
            options: ["المخططات", "الجداول", "الصيغ", "الدوال"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Word ..... عبارة عن مجموعة من التنسيقات المحفوظة باسم معين",
            options: ["النمط", "القالب", "التخطيط", "التصميم"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel ان نتيجة الدالة NOT ............",
            options: ["يمكن ان تكون اما TRUE او FALSE", "دائماً TRUE", "دائماً FALSE", "لا شيء مما سبق"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Access ما هي طرق يمكنك استخدامها لاضافة جدول الى صفحات العلاقات؟",
            options: [
                "مربع الحوار إظهار جدول + اسحب الجدول من جزء التنقل",
                "حدد الجدول في جزء التنقل",
                "كل ما سبق"
            ],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel عند استخدام الدالة AVERAGEIFS لايتم استخدام الخلايا التي لا تفي بالمعايير المحددة في حساب المتوسط",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Word يمكن ادراج صفحة غلاف للمستند من قائمة",
            options: ["ادراج – صفحة غلاف", "تصميم – صفحة غلاف", "تخطيط – صفحة غلاف", "عرض – صفحة غلاف"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel إذا تم استخدام الدالة SUMIF مع القيم 100 و110 و120 و130 وكان المعيار هو >=100 ، فما تكون نتيجة الصيغة؟",
            options: ["100", "460", "360", "0"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel عند انشاء صيغة شرطية, يمكنك الإشارة الى نطاق من الخلايا الموجودة في ورقة عمل أخرى في المصنف نفسه",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Access ماهو امتداد ملفات القوالب اكسيس",
            options: ["accdb", "accdt", "accde", "mdb"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel ماذا يظهر داخل الخلايا التي تحتوي على تعليقات؟",
            options: ["مثلث احمر", "مثلث اخضر", "مثلث ازرق", "دائرة حمراء"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Access تعد النماذج لعرض البيانات وادخالها وتغيرها بطريقة سهلة",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Word يمكنك تنسيق جدول المحتويات بعد انشائه",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel عندما يظهر المخطط داخل ورقة العمل التي تحتوي على البيانات المطلوب استخدامها لانشاء هذا المخطط, تتم الإشارة اليه كمخطط مضمن",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Access تستخدم الجداول لتخزين البيانات",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في برنامج Word من المستحسن التحقق من الأخطاء قبل طباعة الرسائل",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel تتضمن الدالات المنطقية الشرطية NOT و IF و OR.",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Access استخدام الامر التراجع لا يقوم باسترداد البيانات المخزنة في الحقل المحذوف",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel إذا أردت حساب متوسط المرتبات سنوياً لجميع الموظفين الذين يعملون في قسم الموظفين بالشركة منذ أكثر من 50 سنة، فما هي الدالة التي قد تكون الأكثر إفادة؟",
            options: ["AVERAGEIFS", "SUMIFS", "COUNTIFS", "SUMIF"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Access يجب ان يكون المفتاح الأساسي والمفتاح الخارجي الذي يحمل نفس الاسم",
            options: ["صواب", "خطأ"],
            correctAnswer: 2,
            score: 1.00
        },
        {
            question: "في Word لإدراج علامة مائية تستخدم قائمة",
            options: ["تصميم", "إدراج", "تخطيط", "عرض"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel تقوم الدالة ______ بتطبيق حالة الكتابة بأحرف كبيرة على الحرف الأول في سلسة نصية وأي أحرف أخرى في النص تتبع أي رمز ليس حرفاً.",
            options: ["PROPER", "UPPER", "LOWER", "TEXT"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel تسمح لك الدالة UPPER بتحويل أحرف النص إلى أحرف كبيرة (تتم كتابة كل الأحرف كأحرف كبيرة).",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel يعد هذا المخطط من نوع مخطط",
            options: ["خطي", "عمودي", "دائري", "شريطي"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel المخطط التالي, الى أي شيء تشير التسمية في B?",
            options: ["علامات البيانات", "عنوان المخطط", "تسميات البيانات", "محور البيانات"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Word يمكن إضافة نص إضافي الى جدول محتويات موجود",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel ترجع الدالة AVERAGEIF ....... للخلايا التي تفي بمعيار محدد",
            options: ["الوسط", "المجموع", "العدد", "الحد الأقصى"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Access بواسطة الاستعلامات تقوم بعملية البحث واستخراج البيانات",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Word عند تحديد مستلمي لمستند دمج المراسلات، يمكنك التحديد فقط من ملف قاعدة بيانات موجودة.",
            options: ["صواب", "خطأ"],
            correctAnswer: 2,
            score: 1.00
        },
        {
            question: "في Access حدد مكونات قاعدة البيانات",
            options: [
                "الجداول النماذج الاستعلامات التقارير",
                "الجداول فقط",
                "النماذج والتقارير فقط",
                "الاستعلامات فقط"
            ],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Word يمكنك تغيير لون خلفية الصفحة من قائمة تخطيط",
            options: ["صواب", "خطأ"],
            correctAnswer: 2,
            score: 1.00
        },
        {
            question: "في Access ماذا يحدث عند محاولة إنشاء قاعدة البيانات ولكن لا يتوفر اسم للملف؟",
            options: [
                "البرنامج يقوم بإنشاء قاعدة بيانات في الموقع الافتراضي، مع اضافة أسم قاعدة البيانات متبوعا برقم تسلسلي.",
                "يظهر خطأ ويطلب اسم للملف",
                "لا يمكن إنشاء قاعدة البيانات",
                "يتم إنشاء قاعدة بيانات بدون اسم"
            ],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Access في حقل رقم، كيف يتم عرض 123456 في شكل علمي؟",
            options: ["1.234E+05", "1.23456E+5", "123.456E+3", "12.3456E+4"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel تُرجع صيغة IF إحدى القيم إذا كان الشرط الذي تحدده قد تم تحقيقه وتُرجع قيمة أخرى إذا لم يتم تحقيق هذا الشرط.",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel يمكنك فتح مربع الحوار \"إدراج مخطط\" عن طريق النقر فوق \"مخططات أخرى\" ثم فوق \"كافة أنواع المخططات\" في أسفل القائمة المنسدلة.",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel المخطط التالي، إلى أي شيء تشير التسمية في A",
            options: ["عنوان المخطط", "تسميات البيانات", "علامات البيانات", "محور البيانات"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel تُرجع الدالة AND دائماً النتيجة العكسية للدالة OR.",
            options: ["صواب", "خطأ"],
            correctAnswer: 2,
            score: 1.00
        },
        {
            question: "في Word من أي عنصر من العناصر التالية يمكنك تحديد مستلمي دمج المراسلات؟",
            options: ["قائمة موجودة", "جهات اتصال Outlook", "قاعدة بيانات جديدة", "كل الأجوبة أعلاه صحيحة"],
            correctAnswer: 4,
            score: 1.00
        },
        {
            question: "في Access ماذا يحدث عندما ينقر المستخدم الأمر جديد على شريط الادوات؟",
            options: [
                "يتم عرض صفحة انشاء قاعدة بيانات فارغة جديدة وعرض قوالب جديدة",
                "يتم فتح قاعدة بيانات موجودة",
                "يتم إنشاء جدول جديد",
                "يتم إنشاء استعلام جديد"
            ],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Access إذا قمت بإجراء تغييرات إلى سجل من سجلات الجدول، يتم حفظ التغييرات قبل إغلاق الجدول.",
            options: ["صواب", "خطأ"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel أي من الدالات التالية ليست دالة منطقية؟",
            options: ["sum", "AND", "OR", "NOT"],
            correctAnswer: 1,
            score: 1.00
        },
        {
            question: "في Excel يمكنك إنشاء معظم ______, مثل المخططات العمودية والمخططات الشريطية، من البيانات التي يتم ترتيبها في صفوف أو أعمدة في ورقة العمل.",
            options: ["المخططات", "الجداول", "الصيغ", "الدوال"],
            correctAnswer: 1,
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