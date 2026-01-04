// Define questions array in a way that works in both browser and module environments
(function(global) {
    // Updated PL/SQL Questions from uploaded files
    const questions = [
        {
            question: "تعريف المتغير التالي صحيح: v_valid Boolean := false",
            options: ["صح", "خطأ"],
            correctAnswer: 0, // صح
            score: 1.00
        },
        {
            question: "أوجد مخرجات الوحدة البرمجية التالية:\nDeclare\nV_num1 number := 10;\nV_num2 number := 100;\nV_result number := 0;\nBegin\nV_num1 := V_num2 * 2;\nV_num2 := V_num1 + 2;\nV_result := V_num1 + V_num2;\nDbms_output.put_line(V_num1 || ' ' || V_num2 || ' ' || v_result);\nEnd;",
            options: [
                "10 202 400",
                "200 202 402",
                "400 200 20",
                "10 100 10"
            ],
            correctAnswer: 1, // 200 202 402
            score: 1.00
        },
        {
            question: "أوجد مخرجات الوحدة البرمجية التالية:\nDECLARE\na number(3) := 100;\nBEGIN\nIF (a == 50 ) THEN\ndbms_output.put_line('Value of a is 50' );\nELSIF ( a == 75 )\ndbms_output.put_line('Value of a is 75' );\nELSE\ndbms_output.put_line('None of the values is matching: '|| a );\nEND IF;\nEND;",
            options: [
                "None of the values is matching: 100",
                "None of the values is matching:",
                "Value of a is 50",
                "Value of a is 75"
            ],
            correctAnswer: 0, // None of the values is matching: 100
            score: 1.00
        },
        {
            question: "تعريف المتغير التالي صحيح: v_date DATE NOT NULL := SYSDATE",
            options: ["صح", "خطأ"],
            correctAnswer: 0, // صح
            score: 1.00
        },
        {
            question: "أوجد مخرجات الوحدة البرمجية التالية:\nBegin\nfor i in 5..5 loop\nDbms_output.put_line(i);\nend loop;\nend;",
            options: [
                "loop",
                "i",
                "Error",
                "5"
            ],
            correctAnswer: 3, // 5
            score: 1.00
        },
        {
            question: "أوجد مخرجات الوحدة البرمجية التالية:\nDeclare\nv_ename char(20) := 'Ahmed';\nBegin\nV_name := 'Abdul';\nDbms_output.put_line(v_ename);\nEnd if; End;",
            options: [
                "NULL",
                "يوجد خطأ في الكود",
                "Abdul",
                "Ahmed"
            ],
            correctAnswer: 1, // يوجد خطأ في الكود (بسبب وجود End if بدون If وعدم تعريف V_name)
            score: 1.00
        },
        {
            question: "أي من العلامات التالية تستخدم لإعطاء المتغير قيمة معينة (Assignment):",
            options: [
                ":=",
                "=",
                "==",
                "=:"
            ],
            correctAnswer: 0, // :=
            score: 1.00
        },
        {
            question: "لإضافة تعليق بسطر واحد نستخدم الطريقة التالية:",
            options: [
                "/* هنا التعليق",
                "جميع ما سبق",
                "// هنا التعليق",
                "-- هنا التعليق"
            ],
            correctAnswer: 3, // -- هنا التعليق
            score: 1.00
        },
        {
            question: "المتغير الثابت constant متغير يحتفظ بقيمته أثناء تنفيذ الوحدة البرمجية.",
            options: ["صح", "خطأ"],
            correctAnswer: 0, // صح
            score: 1.00
        },
        {
            question: "في تعريف المتغيرات يمكن تعريف متغير بالاعتماد على متغير آخر (مثل استخدام %TYPE).",
            options: ["صح", "خطأ"],
            correctAnswer: 0, // صح
            score: 1.00
        },
        {
            question: "في الوحدة البرمجية يتم كتابة قسم الإستثناءات في منطقة التنفيذ (Begin block).",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // خطأ (يُكتب بعد منطقة التنفيذ وقبل End)
            score: 1.00
        },
        {
            question: "لغة PL/SQL هي امتداد للغة الـ SQL بإضافة مميزات لغة البرمجة الإجرائية.",
            options: ["صح", "خطأ"],
            correctAnswer: 0, // صح
            score: 1.00
        },
        {
            question: "يتم تعريف المتغير في منطقة الـ Declare وهو عبارة عن مكان بالذاكرة المؤقتة لحفظ قيمة معينة.",
            options: ["صح", "خطأ"],
            correctAnswer: 0, // صح
            score: 1.00
        },
        {
            question: "تعتبر منطقة الجزء التنفيذي الـ Begin منطقة اختيارية في الوحدة البرمجية.",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // خطأ (هي المنطقة الإلزامية الوحيدة)
            score: 1.00
        },
        {
            question: "أي من المتغيرات التالية تم تعريفه بشكل صحيح؟",
            options: [
                "3v_num VARCHAR2(20);",
                "v_num VARCHAR2(20);",
                "v num VARCHAR2(20);",
                "begin VARCHAR2(20);"
            ],
            correctAnswer: 1, // v_num
            score: 1.00
        },
        {
            question: "متغير حلقة التكرار for loop يتم تعريفه ضمنياً.",
            options: ["صح", "خطأ"],
            correctAnswer: 0, // صح
            score: 1.00
        },
        {
            question: "تستخدم المتغيرات لإضافة وتعديل البيانات الموجودة في قواعد البيانات ويمكن استخدامها أكثر من مرة.",
            options: ["صح", "خطأ"],
            correctAnswer: 0, // صح
            score: 1.00
        },
        {
            question: "أوجد مخرجات الوحدة البرمجية التالية:\nDECLARE\nx number := 10;\nBEGIN\nLOOP\nx := x + 1;\nIF x >= 11 THEN\ndbms_output.put_line(x);\nexit;\nEND IF;\ndbms_output.put_line('After Exit x is: ' || x);\nEnd loop;\nEND;",
            options: [
                "20",
                "X",
                "10",
                "11"
            ],
            correctAnswer: 3, // 11
            score: 1.00
        },
        {
            question: "هل تم كتابة جملة الشرط التالية بشكل صحيح:\nIF condition THEN\ncode ;\nEND IF;",
            options: ["صح", "خطأ"],
            correctAnswer: 0, // صح
            score: 1.00
        },
        {
            question: "تعريف المتغير صحيح: v_x, V_y number(4);",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // خطأ (لا يمكن تعريف متغيرين بفاصلة في سطر واحد في PL/SQL)
            score: 1.00
        },
        {
            question: "تعريف المتغير صحيح: V_x varchar2(25);",
            options: ["صح", "خطأ"],
            correctAnswer: 0, // صح
            score: 1.00
        },
        {
            question: "جمل التعامل والاستعلام الخاصة بلغة الـ SQL يتم إدراجها داخل أكواد لغة الـ PL/SQL.",
            options: ["صح", "خطأ"],
            correctAnswer: 0, // صح
            score: 1.00
        },
        {
            question: "تعريف المتغير صحيح: v_empno employee_id.employees%type",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // خطأ (الصيغة الصحيحة: table_name.column_name%type أي employees.employee_id%type)
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
