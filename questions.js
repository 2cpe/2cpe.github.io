// Define questions array in a way that works in both browser and module environments
(function (global) {
    // PL/SQL Questions - All unique questions from 1.txt and 2.txt with correct answers
    const questions = [
        // ==================== Questions from 1.txt ====================

        // سؤال 1 من 1.txt
        {
            question: "تعريف المتغير صحيح ؟",
            code: "V_x                 varchar2(25);",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح - تعريف صحيح
            score: 1.00
        },

        // سؤال 2 من 1.txt
        {
            question: "أوجد مخرجات الوحدة البرمجيه التاليه:",
            code: `Begin 

for i in 5..5 loop

Dbms_output.put_line(i); 

end loop; 

end;`,
            options: ["i", "Error", "loop", "5"],
            correctAnswer: 4, // 5 - الحلقة تعمل مرة واحدة فقط لأن البداية والنهاية نفس القيمة
            score: 1.00
        },

        // سؤال 3 من 1.txt
        {
            question: "جمل التعامل والإستعلام الخاصة بلغة الـ SQL يتم إدراجها داخل أكواد لغة الـ PL/SQL",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح
            score: 1.00
        },

        // سؤال 4 من 1.txt
        {
            question: "تستخدم المتغيرات لإضافة وتعديل البيانات الموجودة في قواعد البيانات ويمكن إستخدامها أكثر من مرة",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح
            score: 1.00
        },

        // سؤال 5 من 1.txt
        {
            question: "في الوحدة البرمجية يتم كتابة قسم الإستثناءات في منطقة التنفيذ",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح - قسم EXCEPTION يكون داخل BEGIN..END
            score: 1.00
        },

        // سؤال 6 من 1.txt
        {
            question: "أوجد مخرجات الوحدة البرمجيه التاليه:",
            code: `Declare    

v_ename     char(20) := 'Ahmed';

Begin

V_name := 'Abdul';

Dbms_output.put_line(v_ename);

End if;   End;`,
            options: ["NULL", "يوجد خطأ في الكود", "Abdul", "Ahmed"],
            correctAnswer: 2, // يوجد خطأ في الكود - V_name غير معرف و End if بدون If
            score: 1.00
        },

        // سؤال 7 من 1.txt
        {
            question: "هل تم كتابة جملة الشرط التالية بشكل صحيح:",
            code: `IF condition THEN

     code ;

END IF;`,
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح
            score: 1.00
        },

        // سؤال 8 من 1.txt
        {
            question: "لإضافة تعليق بسطر واحد نستخدم الطريقة التالية:",
            options: ["جميع ما سبق", "-- هنا التعليق", "/* هنا التعليق", "// هنا التعليق"],
            correctAnswer: 2, // -- هنا التعليق
            score: 1.00
        },

        // سؤال 9 من 1.txt
        {
            question: "تعريف المتغير صحيح ؟",
            code: "V_y, v_x              number(4);",
            options: ["صح", "خطأ"],
            correctAnswer: 2, // خطأ - لا يمكن تعريف متغيرين في نفس السطر في PL/SQL
            score: 1.00
        },

        // سؤال 10 من 1.txt
        {
            question: "تعريف المتغير صحيح ؟",
            code: "v_date  DATE   NOT   NULL  :=  SYSDATE",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح - تعريف صحيح مع NOT NULL ويجب إعطاء قيمة
            score: 1.00
        },

        // سؤال 11 من 1.txt
        {
            question: "المتغير الثابت constant متغير يحتفظ بقيمته اثناء تنفيذ الوحدة البرمجية",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح
            score: 1.00
        },

        // سؤال 12 من 1.txt
        {
            question: "في تعريف المتغيرات يمكن تعريف متغير بالأعتماد على متغير أخر.",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح - باستخدام %TYPE
            score: 1.00
        },

        // سؤال 13 من 1.txt
        {
            question: "اوجد مخرجات الوحدة البرمجية التالية:",
            code: `DECLARE 

 a number(3) := 100;

BEGIN 

 IF (a = 50 ) THEN   

  dbms_output.put_line('Value of a is 50' ); 

 ELSIF ( a = 75 ) THEN

    dbms_output.put_line('Value of a is 75' );   

ELSE     

   dbms_output.put_line('None of the values is matching:  '|| a ); 

 END IF; 

END;`,
            options: ["Value of a is 50", "None of the values is matching: 100", "Value of a is 75", "None of the values is matching:"],
            correctAnswer: 2, // None of the values is matching: 100
            score: 1.00
        },

        // سؤال 14 من 1.txt
        {
            question: "لغة PL/SQL هي إمتداد للغة الـ SQL بإضافة مميزات لغة البرمجة الإجرائية",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح
            score: 1.00
        },

        // سؤال 15 من 1.txt
        {
            question: "أي من العلامات التالية تستخدم لإعطاء المتغير قيمة معينة:",
            options: [":=", "=", "==", "=:"],
            correctAnswer: 1, // :=
            score: 1.00
        },

        // سؤال 16 من 1.txt
        {
            question: "اوجد مخرجات الوحدة البرمجية التالية:",
            code: `DECLARE   

x    number := 10;

BEGIN   

LOOP         

 x := x + 1;       

   IF x >= 11 THEN   

         dbms_output.put_line(x); 

           exit;         

  END IF;    

 dbms_output.put_line('After Exit x is: ' || x); 

End loop;

END;`,
            options: ["11", "20", "10", "X"],
            correctAnswer: 1, // 11
            score: 1.00
        },

        // سؤال 17 من 1.txt
        {
            question: "تعتبر منطقة الجزء التنفيذي الـ Begin منطقة اختياريه في الوحدة البرمجيه",
            options: ["صح", "خطأ"],
            correctAnswer: 2, // خطأ - BEGIN إجبارية
            score: 1.00
        },

        // سؤال 18 من 1.txt
        {
            question: "تعريف المتغير صحيح ؟",
            code: "v_empno            employee_id.employees%type;",
            options: ["صح", "خطأ"],
            correctAnswer: 2, // خطأ - الترتيب خاطئ، يجب أن يكون employees.employee_id%TYPE
            score: 1.00
        },

        // سؤال 19 من 1.txt
        {
            question: "يتم تعريف المتغير في منطقه ال Declare وهو عبارة عن مكان بالذاكرة المؤقتة لحفظ قيمة معينة.",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح
            score: 1.00
        },

        // سؤال 20 من 1.txt
        {
            question: "أوجد مخرجات الوحدة البرمجيه التاليه:",
            code: `Declare

V_num1      number  :=  10 ;    
V_num2       number  := 100 ;    
V_result      number := 0 ;

Begin
V_num1 :=  V_num2  *   2 ;   
V_num2 :=  V_num1 +  2 ;       
V_result := V_num1 + V_num2;
Dbms_output.put_line(V_num1 ||  '       '  || V_num2 ||  '      '  || v_result);
End ;`,
            options: ["10          202                 400", "400         200          20", "10      100       10", "200              202              402"],
            correctAnswer: 4, // 200, 202, 402
            score: 1.00
        },

        // ==================== Unique Questions from 2.txt ====================

        // سؤال 1 من 2.txt (فريد)
        {
            question: "تعريف المتغير صحيح ؟",
            code: "v_valid        Boolean      :=  false;",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح - تعريف صحيح لمتغير Boolean
            score: 1.00
        },

        // سؤال 15 من 2.txt (فريد)
        {
            question: "أي من المتغيرات التالية تم تعريفه بشكل صحيح:",
            options: ["3v_num  VARCHAR2(20);", "v_num  VARCHAR2(20);", "v num  VARCHAR2(20);", "begin  VARCHAR2(20);"],
            correctAnswer: 2, // v_num VARCHAR2(20); - الاسم يبدأ بحرف ولا يحتوي مسافات وليس كلمة محجوزة
            score: 1.00
        },

        // سؤال 16 من 2.txt (فريد)
        {
            question: "متغير حلقة التكرار for loop يتم تعريفه ضمنياً:",
            options: ["صح", "خطأ"],
            correctAnswer: 1, // صح - متغير الحلقة يُعرّف تلقائياً
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
    global.getQuestion = function (index) {
        const loadedQuestions = loadQuestions();
        return loadedQuestions[index];
    };

    global.getTotalQuestions = function () {
        const loadedQuestions = loadQuestions();
        return loadedQuestions.length;
    };

    global.getMaxScore = function () {
        const loadedQuestions = loadQuestions();
        return loadedQuestions.reduce((total, q) => total + q.score, 0);
    };

    // Save questions to localStorage on load
    saveQuestions();

    // Log questions loaded for debugging
    console.log(`Loaded ${questions.length} unique questions (duplicates removed)`);

})(typeof window !== 'undefined' ? window : this);