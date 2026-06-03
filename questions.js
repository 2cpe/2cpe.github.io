// Subject-based exam system - الاجهزة الذكية
(function (global) {

    const subjectQuestions = {
        "internet-programming": {
            id: "internet-programming",
            name: "برمجه الإنترنت",
            nameEn: "Internet Programming",
            icon: "\uD83C\uDF10",
            available: false,
            questions: []
        },
        "advanced-internet-tech": {
            id: "advanced-internet-tech",
            name: "تقنيات الإنترنت المتقدمة",
            nameEn: "Advanced Internet Technologies",
            icon: "\uD83D\uDCE1",
            available: true,
            questions: [
                { question: "بعد تثبيت التطبيق بنجاح، أي زر يجب النقر عليه لتشغيل وعرض التطبيق المثبت؟", options: ["Manage.", "زر التشغيل (Run button - الأيقونة التي تشبه المثلث).", "Cancel.", "Install App."], correctAnswer: 2, score: 1.00 },
                { question: "توفر صفحة معرض التطبيقات (App Gallery) خيار تصفح للتطبيقات المثبتة مسبقًا (Installed).", options: ["FALSE", "TRUE"], correctAnswer: 2, score: 1.00 },
                { question: "عند تثبيت تطبيق (Sample Reporting)، يجب تغيير اسم مساحة العمل (Workspace Name) والمخطط (Schema) يدوياً قبل النقر على (Next).", options: ["TRUE", "FALSE"], correctAnswer: 2, score: 1.00 },
                { question: "في سياق دليل المختبر العملي، ما هو التطبيق النموذجي (Sample Application) الذي تم اختياره للتثبيت؟", options: ["APEX Application Archive.", "Customer Tracker.", "Sample Reporting.", "Sample Calendar."], correctAnswer: 3, score: 1.00 },
                { question: "في قسم SQL Workshop، تشمل المكونات المتاحة: Object Browser، وSQL Commands، وSQL Scripts، وRESTful Services.", options: ["TRUE", "FALSE"], correctAnswer: 1, score: 1.00 },
                { question: "للوصول إلى بيئة تطوير Oracle Application Express مجانًا، يمكن استخدام الرابط http://apex.oracle.com والتسجيل للحصول على مساحة عمل مجانية.", options: ["TRUE", "FALSE"], correctAnswer: 1, score: 1.00 },
                { question: "ما هو الخيار الذي يمكن استخدامه في الصفحة الرئيسية لمساحة العمل (Workspace Home Page) لتثبيت تطبيق جاهز للاستخدام؟", options: ["Team Development.", "Install a Productivity or Sample App.", "Create a New App.", "SQL Workshop."], correctAnswer: 2, score: 1.00 },
                { question: "ما هو المكوّن الرئيسي في شريط التنقل (Navigation Bar) المسؤول عن تصميم وتطوير التطبيقات في APEX؟", options: ["App Builder.", "Team Development.", "SQL Workshop.", "App Gallery."], correctAnswer: 1, score: 1.00 },
                { question: "ما هي المعلومات المطلوبة لتسجيل الدخول إلى بيئة عمل Oracle Application Express (APEX)؟", options: ["عنوان URL ونوع المتصفح.", "اسم مساحة العمل (Workspace)، واسم المستخدم، وكلمة المرور.", "اسم قاعدة البيانات ورقم المنفذ.", "رقم التطبيق ونوع المخطط (Schema)."], correctAnswer: 2, score: 1.00 },
                { question: "ما هي الخطوة الأولى عند بدء المختبر العملي 2-1 لتحميل الجداول والبيانات لتطبيق Demo Projects؟", options: ["الانتقال إلى منشئ التطبيقات واختيار إنشاء تطبيق.", "الانتقال إلى تطوير الفريق والنقر على تحميل.", "الانتقال إلى ورشة عمل SQL واختيار نصوص SQL البرمجية (SQL Scripts) لتحميل نص إنشاء الجداول.", "الانتقال إلى ورشة عمل SQL واختيار أوامر SQL لكتابة عبارة CREATE TABLE."], correctAnswer: 3, score: 1.00 },
                { question: "يقوم النص البرمجي Project_Data.sql بإنشاء كائن قاعدة بيانات يمكن تنفيذه لإدراج أو إعادة تعيين البيانات النموذجية في الجداول. ما هو نوع هذا الكائن الذي تم إنشاؤه؟", options: ["مُشغِّل (Trigger)", "حزمة (Package)", "فهرس (Index)", "مُعامِل (View)"], correctAnswer: 2, score: 1.00 },
                { question: "ما هو أمر PL/SQL الصحيح المستخدم في أداة أوامر SQL لتنفيذ إجراء تحميل البيانات داخل الحزمة؟", options: ["CALL demo_projects_data_pkg.load_sample_data;", "BEGIN demo_projects_data_pkg.load_sample_data; END;", "RUN PROJECT_DATA.SQL;", "EXEC DEMO_PROJECTS_DATA_PKG.LOAD_SAMPLE_DATA;"], correctAnswer: 2, score: 1.00 },
                { question: "ما هي الميزة في ورشة عمل SQL التي يتم استخدامها لمراجعة كائنات قاعدة البيانات التي تم إنشاؤها حديثًا (مثل الجداول والحزم) وعرض البيانات داخل جدول معين مثل DEMO_PROJ_TEAM_MEMBERS؟", options: ["أوامر SQL (SQL Commands)", "نصوص SQL البرمجية (SQL Scripts)", "ورشة عمل البيانات (Data Workshop)", "متصفح الكائنات (Object Browser)"], correctAnswer: 4, score: 1.00 },
                { question: "في المختبر العملي 2-2، ما هي الأداة المساعدة داخل ورشة عمل SQL التي يتم استخدامها لإنشاء جدول جديد وملئه بالبيانات من ملف hardware.csv؟", options: ["نصوص SQL البرمجية (SQL Scripts)", "متصفح الكائنات (Object Browser)", "ورشة عمل البيانات (Data Workshop)", "أوامر SQL (SQL Commands)"], correctAnswer: 3, score: 1.00 },
                { question: "لإنشاء جدول البحث (Lookup Table)، أي عمود من جدول HARDWARE الذي تم إنشاؤه حديثًا تم اختياره للتطبيع؟", options: ["DEPARTMENT (القسم)", "SERIAL", "CPU_TYPE", "MODEL"], correctAnswer: 1, score: 1.00 },
                { question: "النص البرمجي المستخدم في المختبر العملي 2-1 لإنشاء جداول قاعدة البيانات الأساسية لتطبيق Demo Projects كان اسمه Project_Data.sql.", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "لتنفيذ حزمة تحميل البيانات النموذجية (DEMO_PROJECTS_DATA_PKG) بعد تحميلها، يجب على المطور العودة إلى أداة نصوص SQL البرمجية (SQL Scripts) والنقر على 'تشغيل الآن' (Run Now).", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "عند تحميل البيانات من ملف hardware.csv في المختبر العملي 2-2، تم تسمية الجدول الجديد الناتج باسم HARDWARE_DEVICES افتراضيًا.", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "عند إنشاء جدول بحث (Lookup Table) لقسم DEPARTMENT، ما هو الحقل الذي تم اختياره ليكون المعرف (ID) في جدول البحث؟", options: ["DEPARTMENT_ID", "DEPT_ID", "ID", "DEPT_NO"], correctAnswer: 1, score: 1.00 },
                { question: "ما هو شرط الربط (Join Condition) الذي تم استخدامه لربط الجدول الأصلي (HARDWARE) بجدول البحث (HARDWARE_DEPARTMENTS) في المختبر العملي 2-2؟ (علماً أنه قد تم تعديل المفتاح الأساسي إلى DEPARTMENT_ID)", options: ["ON HARDWARE.DEPARTMENT = HARDWARE_DEPARTMENTS.DEPARTMENT_ID", "ON HARDWARE.DEPARTMENT_ID = HARDWARE_DEPARTMENTS.ID", "ON HARDWARE.DEPARTMENT = HARDWARE_DEPARTMENTS.DEPT_NAME", "ON HARDWARE.DEPT_NO = HARDWARE_DEPARTMENTS.DEPT_NO"], correctAnswer: 1, score: 1.00 },
                { question: "بعد تحميل البيانات من ملف hardware.csv واعتماد التنسيق (Format)، ما هي الحالة (Status) التي يجب أن تكون موجودة قبل النقر على 'تحميل البيانات' (Load Data) لضمان نجاح عملية التحميل؟", options: ["Skipped", "Unloaded", "Loaded", "Ready"], correctAnswer: 3, score: 1.00 },
                { question: "في عملية التطبيع، تم إنشاء جدول بحث جديد (Lookup Table). ما هو اسم هذا الجدول الجديد في المختبر العملي 2-2؟", options: ["HARDWARE_DEPT", "HARDWARE_DEPARTMENTS", "DEPT_LOOKUP", "HARDWARE_NORMALIZED"], correctAnswer: 2, score: 1.00 },
                { question: "ما هي وظيفة دالة SUBSTR في SQL؟", options: ["تُستخدم لحساب طول سلسلة نصية.", "تُستخدم لاستبدال جزء من سلسلة نصية.", "تُستخدم لاستخراج جزء من سلسلة نصية.", "تُستخدم لتحويل حالة الأحرف."], correctAnswer: 3, score: 1.00 },
                { question: "ما هي وظيفة دالة UPPER في SQL؟", options: ["تحويل النص إلى أحرف صغيرة", "تحويل النص إلى أحرف كبيرة", "إزالة المسافات", "حساب الطول"], correctAnswer: 2, score: 1.00 },
                { question: "ما هي وظيفة دالة CONCAT في SQL؟", options: ["تقسيم النص", "دمج نصين", "حساب الطول", "بحث"], correctAnswer: 2, score: 1.00 },
                { question: "ما هي وظيفة دالة LENGTH في SQL؟", options: ["استخراج نص", "حساب طول النص", "تنسيق التاريخ", "تحويل العملة"], correctAnswer: 2, score: 1.00 },
                { question: "ما هي وظيفة دالة NVL في SQL؟", options: ["إرجاع أول قيمة غير فارغة", "حساب المتوسط", "تنسيق الأرقام", "تحويل النص"], correctAnswer: 1, score: 1.00 },
                { question: "ما هي وظيفة دالة COALESCE في SQL؟", options: ["إرجاع أول قيمة غير فارغة", "إرجاع آخر قيمة غير فارغة", "دمج القيم", "تحويل العملة"], correctAnswer: 1, score: 1.00 },
                { question: "ما هي وظيفة دالة TO_CHAR في SQL؟", options: ["تحويل قيمة إلى سلسلة نصية", "تحويل قيمة إلى رقم", "تحويل قيمة إلى تاريخ", "تنسيق التاريخ"], correctAnswer: 1, score: 1.00 },
                { question: "ما هي وظيفة دالة TO_DATE في SQL؟", options: ["تحويل قيمة إلى تاريخ", "تحويل قيمة إلى رقم", "تحويل قيمة إلى نص", "تنسيق التاريخ"], correctAnswer: 1, score: 1.00 },
                { question: "ما هي وظيفة دالة ROUND في SQL؟", options: ["تقريب رقم", "حساب الجذر", "حساب القيمة المطلقة", "تحويل النص"], correctAnswer: 1, score: 1.00 },
                { question: "ما هي وظيفة دالة SYSDATE في SQL؟", options: ["إرجاع التاريخ والوقت الحاليين", "إرجاع الوقت فقط", "إرجاع التاريخ فقط", "إرجاع السنة الحالية"], correctAnswer: 1, score: 1.00 },
                { question: "أي من العبارات التالية هي عبارة صحيحة لاستخدام دالة SUBSTR في SQL؟", options: ['SUBSTR("Hello World", 1, 5) ينتج "World"', 'SUBSTR("Hello World", 1, 5) ينتج "Hello"', 'SUBSTR("Hello World", 1, 5) ينتج "Hello World"', 'SUBSTR("Hello World", 1, 5) ينتج "ello "'], correctAnswer: 2, score: 1.00 },
                { question: "أي من العبارات التالية حول استخدام دالة UPPER صحيحة؟", options: ['UPPER("Hello") ينتج "hello"', 'UPPER("Hello") ينتج "HELLO"', 'UPPER("Hello") ينتج "H"', 'UPPER("Hello") ينتج "h"'], correctAnswer: 2, score: 1.00 },
                { question: "أي من العبارات التالية حول استخدام دالة LENGTH صحيحة؟", options: ['LENGTH("Oracle") ينتج 4', 'LENGTH("Oracle") ينتج 5', 'LENGTH("Oracle") ينتج 6', 'LENGTH("Oracle") ينتج 7'], correctAnswer: 3, score: 1.00 },
                { question: "أي من العبارات التالية حول استخدام دالة TO_CHAR مع التاريخ (Date) صحيحة؟", options: ['TO_CHAR(SYSDATE, \'YYYY\') ينتج الشهر الحالي', 'TO_CHAR(SYSDATE, \'YYYY\') ينتج السنة الحالية بأربعة أرقام', 'TO_CHAR(SYSDATE, \'YYYY\') ينتج "YYYY"', 'TO_CHAR(SYSDATE, \'YYYY\') ينتج الوقت الحالي'], correctAnswer: 2, score: 1.00 },
                { question: "ما هي وظيفة أداة Migrate Google Spreadsheet في Oracle APEX؟", options: ["إنشاء رسوم بيانية متقدمة", "تحويل جداول بيانات Google إلى تطبيق APEX", "إرسال إشعارات البريد الإلكتروني", "إنشاء نماذج ويب متقدمة"], correctAnswer: 2, score: 1.00 },
                { question: "ما هي وظيفة أداة Copy from Amazon S3 في Oracle APEX؟", options: ["نسخ الملفات من خادم محلي إلى S3", "إنشاء تطبيق لتخزين الملفات", "نسخ البيانات من Amazon S3 إلى جدول في قاعدة بيانات Oracle", "مزامنة مجلدين في Amazon S3"], correctAnswer: 3, score: 1.00 },
                { question: "ما اسم الميزة التي تمنح المدخلات (Input) مظهرًا أكثر حداثة وجاذبية، وتتوفر في إصدار APEX 24.1؟", options: ["Enhanced Input", "Modern Input", "Floating Template", "Template Directive"], correctAnswer: 4, score: 1.00 },
                { question: "ما هو خيار الدخول المجاني إلى Oracle APEX عبر السحابة؟", options: ["Oracle APEX Cloud Service", "Oracle APEX Application Development", "Oracle APEX Free Tier", "APEX Hosted"], correctAnswer: 3, score: 1.00 },
                { question: "ما هي أداة APEX التي تٌستخدم لإنشاء صفحات التطبيق وإضافة المكونات ومعالجتها وتحديثها؟", options: ["Page Designer", "App Builder", "SQL Workshop", "Team Development"], correctAnswer: 1, score: 1.00 },
                { question: "ما هو نوع التقرير الذي يتضمن ميزة التصفية (Filter) بشكل افتراضي؟", options: ["Classic Report", "Interactive Report", "Static Report", "Grid Report"], correctAnswer: 2, score: 1.00 },
                { question: "ماذا يعني اختصار REST في RESTful Services؟", options: ["Representational State Transfer", "Remote State Transfer", "Representational Simple Transfer", "Remote System Transfer"], correctAnswer: 1, score: 1.00 },
                { question: "ما هي أداة APEX التي تٌستخدم لإدارة جلسات التطبيق (Session) ومشاهدتها؟", options: ["App Builder", "Session Manager", "SQL Workshop", "Page Designer"], correctAnswer: 2, score: 1.00 },
                { question: "ما هي وظيفة Shared Components في APEX؟", options: ["إدارة المكونات المشتركة", "إنشاء الصفحات", "إدارة قواعد البيانات", "إنشاء التقارير"], correctAnswer: 1, score: 1.00 },
                { question: "ما اسم العنصر (Component) في APEX الذي يستخدم لإنشاء قوائم التنقل (Navigation)?", options: ["Dynamic Action", "List", "Region", "Item"], correctAnswer: 2, score: 1.00 },
                { question: "ما نوع القائمة (List) المثالية لعرض تنقل متسلسل يوضح مسار الصفحة الحالية (مثل: الرئيسية > المنتجات > الهواتف)؟", options: ["Navigation List", "Breadcrumb List", "Sidebar List", "Footer List"], correctAnswer: 2, score: 1.00 },
                { question: "ما هي أداة APEX التي تٌستخدم لإدارة بيئات النشر (Development, Testing, Production) وإعداداتها؟", options: ["App Builder", "SQL Workshop", "Team Development", "Workspace Utilities"], correctAnswer: 4, score: 1.00 },
                { question: "ماذا تعني عبارة 'Applies to' في Shared Components > Application Items؟", options: ["جميع الصفحات في التطبيق", "صفحة محددة فقط", "جميع التطبيقات في مساحة العمل", "جميع مستخدمي التطبيق"], correctAnswer: 2, score: 1.00 },
                { question: "ما هو الحد الأقصى لعدد الأحرف المسموح به لاسم عنصر التطبيق (Application Item Name) وما هي الأحرف المسموحة؟", options: ["100 حرفاً، والأحرف الكبيرة فقط", "50 حرفاً، أحرف وأرقام وشرطة سفلية", "255 حرفاً، جميع الأحرف مسموحة", "30 حرفاً، الأحرف الكبيرة والصغيرة والأرقام"], correctAnswer: 2, score: 1.00 },
                { question: "ما هو نوع بيانات عناصر التطبيق (Application Items)؟", options: ["VARCHAR2", "NUMBER", "DATE", "BLOB"], correctAnswer: 1, score: 1.00 },
                { question: "ما هو نوع بيانات Application Items في APEX؟", options: ["VARCHAR2", "NUMBER", "DATE", "BLOB"], correctAnswer: 1, score: 1.00 },
                { question: "ما هو نطاق (Scope) APPLICATION LEVEL في Application Items؟", options: ["متاح فقط في الصفحة التي تم إنشاؤه فيها", "متاح لجميع صفحات التطبيق", "متاح فقط لمستخدم معين", "متاح فقط في جلسة واحدة"], correctAnswer: 2, score: 1.00 },
                { question: "ما هو نطاق (Scope) PAGE LEVEL في Application Items؟", options: ["متاح فقط في الصفحة التي تم إنشاؤه فيها", "متاح لجميع الصفحات", "متاح فقط لمستخدم معين", "متاح لجميع التطبيقات"], correctAnswer: 1, score: 1.00 },
                { question: "إلى ماذا يشير مصطلح 'Build Option' في Oracle APEX؟", options: ["إعدادات قاعدة البيانات", "إعدادات التطبيق العامة", "إعدادات تتحكم في تضمين أو استبعاد أجزاء من التطبيق", "إعدادات الأمان"], correctAnswer: 3, score: 1.00 },
                { question: "أي العبارات التالية حول Build Options صحيحة؟", options: ["يمكن تغيير Build Option Status من 'Include' إلى 'Exclude' دون الحاجة إلى إعادة نشر التطبيق", "تغيير Build Option Status من 'Include' إلى 'Exclude' يتطلب إعادة نشر التطبيق", "لا يمكن تغيير Build Option Status", "Build Option Status ليس له أي تأثير"], correctAnswer: 1, score: 1.00 },
                { question: "ماذا تعني حالة (Status) 'Include' في build options؟", options: ["يتم تضمين (تضمين) المكون المشروط في بناء التطبيق", "يتم استبعاد (استثناء) المكون المشروط من بناء التطبيق", "يتم اختبار المكون فقط", "يتم تعطيل المكون نهائياً"], correctAnswer: 1, score: 1.00 },
                { question: "ماذا تعني حالة (Status) 'Exclude' في build options؟", options: ["يتم تضمين المكون", "يتم استبعاد المكون من تطبيق التشغيل (Runtime)", "يتم تعطيل المكون مؤقتاً", "يتم نسخ المكون احتياطياً"], correctAnswer: 2, score: 1.00 },
                { question: "ما هي فائدة أداة Dynamic Actions في Oracle APEX؟", options: ["إنشاء قواعد بيانات", "إضافة سلوك ديناميكي للصفحات بدون كتابة كود JavaScript معقد", "إنشاء تقارير معقدة", "إدارة المستخدمين"], correctAnswer: 2, score: 1.00 },
                { question: "أي من المكونات التالية يعتبر حدثاً (Event) قياسياً يمكن استخدامه في Dynamic Actions؟", options: ["Click", "Load", "Value Change", "جميع ما سبق"], correctAnswer: 4, score: 1.00 },
                { question: "ما هو العنصر الأساسي في Dynamic Action الذي يحدد متى يحدث الإجراء؟", options: ["True Action", "Event", "When", "Condition"], correctAnswer: 2, score: 1.00 },
                { question: "في عملية إنشاء Dynamic Action، ما هو العنصر الذي يقوم بتحديد وقت التنفيذ (When)؟", options: ["الحدث (Event)", "الشرط (Condition)", "الإجراء الصحيح (True Action)", "الإجراء الخاطئ (False Action)"], correctAnswer: 1, score: 1.00 },
                { question: "ماذا يحدث عند تعيين Condition على أنها 'False' في Dynamic Action؟", options: ["يتم تنفيذ True Action", "يتم تنفيذ False Action", "يتم تجاهل الإجراء بالكامل", "يتم تنفيذ كلا الإجراءين"], correctAnswer: 2, score: 1.00 },
                { question: "ما هي أداة APEX المستخدمة لمراقبة أداء التطبيق وتحليلها؟", options: ["Session Manager", "Page Designer", "Monitor Performance", "Team Development"], correctAnswer: 3, score: 1.00 },
                { question: "ما هو الإجراء الصحيح لإنشاء Dynamic Action يتغير لون خلفية حقل بناءً على قيمة معينة؟", options: ["إنشاء حدث Focus بدلاً من Change", "إنشاء Dynamic Action لحدث Change يستهدف الحقل ويقوم بتعيين النمط (Style)", "استخدام Server-side Condition فقط", "لا يمكن تنفيذ هذا الإجراء"], correctAnswer: 2, score: 1.00 },
                { question: "في أي تبويب (Tab) في Page Designer يتم تعريف Dynamic Actions؟", options: ["Rendering", "Dynamic Actions", "Processing", "Page Shared"], correctAnswer: 2, score: 1.00 },
                { question: "في أي تبويب (Tab) في Page Designer يتم تعريف Authorization Schemes؟", options: ["Rendering", "Dynamic Actions", "Processing", "Page Shared"], correctAnswer: 4, score: 1.00 },
                { question: "من فوائد استخدام Dynamic Actions بدلاً من كتابة كود JavaScript مباشرة:", options: ["تحسين الأداء فقط", "سهولة الصيانة والفصل بين المنطق والعرض", "تقليل عدد الصفحات", "زيادة قاعدة البيانات"], correctAnswer: 2, score: 1.00 },
                { question: "أي من أنواع العناصر (Items) التالية يُستخدم لإنشاء قائمة منسدلة (Dropdown) وحيدة الاختيار في APEX؟", options: ["Text Field", "Select List", "Radio Group", "Checkbox"], correctAnswer: 2, score: 1.00 },
                { question: "ما نوع العنصر (Item) المستخدم لإنشاء حقل إدخال نص عادي في نموذج APEX؟", options: ["Text Field", "Display Only", "Textarea", "Number Field"], correctAnswer: 1, score: 1.00 },
                { question: "أي من أنواع العناصر (Items) التالية يُستخدم لإنشاء مجموعة خيارات يمكن للمستخدم اختيار أكثر من خيار منها؟", options: ["Select List", "Radio Group", "Checkbox", "Text Field"], correctAnswer: 3, score: 1.00 }
            ]
        },
        "english-4": {
            id: "english-4",
            name: "انجليزي 4",
            nameEn: "English 4",
            icon: "\uD83C\uDFF0",
            available: false,
            questions: []
        },
        "professional-behavior-1": {
            id: "professional-behavior-1",
            name: "سلوك وظيفي دكتور رقم 1",
            nameEn: "Professional Behavior Dr. 1",
            icon: "\uD83D\uDCBC",
            available: false,
            questions: []
        },
        "professional-behavior-2": {
            id: "professional-behavior-2",
            name: "سلوك وظيفي دكتور رقم 2",
            nameEn: "Professional Behavior Dr. 2",
            icon: "\uD83D\uDC65",
            available: false,
            questions: []
        },
        "smart-devices-programming": {
            id: "smart-devices-programming",
            name: "برمجه الاجهزه الذكية",
            nameEn: "Smart Devices Programming",
            icon: "\uD83D\uDCF1",
            available: true,
            questions: [
                { question: "Android هو:", options: ["مغلق المصدر", "مفتوح المصدر", "خاص بشركة Apple", "لا يدعم التطبيقات"], correctAnswer: 2, score: 1.00 },
                { question: "نظام الأندرويد هو نظام تم انشاءه على نواة:", options: ["Windows", "Linux", "Mac", "DOS"], correctAnswer: 2, score: 1.00 },
                { question: "واحدة ليست من الطبقات الرئيسية لنظام الأندرويد:", options: ["Shell", "Linux Kernel", "Libraries", "Applications"], correctAnswer: 1, score: 1.00 },
                { question: "الشركة المطورة لنظام Android:", options: ["Microsoft", "Apple", "Google", "IBM"], correctAnswer: 3, score: 1.00 },
                { question: "Android يسيطر على:", options: ["أقل من 20%", "50%", "أكثر من 85%", "10%"], correctAnswer: 3, score: 1.00 },
                { question: "لغة البرمجة الأساسية للأندرويد:", options: ["Python", "Java", "C++", "Swift"], correctAnswer: 2, score: 1.00 },
                { question: "من مميزات Android:", options: ["مغلق المصدر", "لا يدعم الإنترنت", "مفتوح المصدر", "محدود"], correctAnswer: 3, score: 1.00 },
                { question: "SQLite تستخدم لـ:", options: ["التصميم", "التخزين", "الرسم", "الصوت"], correctAnswer: 2, score: 1.00 },
                { question: "Linux Kernel مسؤولة عن:", options: ["UI", "إدارة الموارد", "التصميم", "البيانات"], correctAnswer: 2, score: 1.00 },
                { question: "Application Framework مسؤولة عن:", options: ["تشغيل النظام", "إدارة التطبيقات", "النواة", "التخزين"], correctAnswer: 2, score: 1.00 },
                { question: "من طبقات Android:", options: ["Kernel", "Libraries", "Applications", "جميع ما سبق"], correctAnswer: 4, score: 1.00 },
                { question: "WebKit يستخدم لـ:", options: ["الصوت", "الإنترنت", "الكاميرا", "التخزين"], correctAnswer: 2, score: 1.00 },
                { question: "Multi-tasking تعني:", options: ["تطبيق واحد", "تطبيقين فقط", "تشغيل عدة تطبيقات", "إغلاق التطبيقات"], correctAnswer: 3, score: 1.00 },
                { question: "Android يعمل على:", options: ["الهواتف فقط", "الحاسب فقط", "أجهزة متعددة", "لا شيء"], correctAnswer: 3, score: 1.00 },
                { question: "GPS يستخدم لـ:", options: ["لتحديد الصوت", "لتحديد الموقع", "لتحديد الفيديو", "لتحديد النص"], correctAnswer: 2, score: 1.00 },
                { question: "Bluetooth يستخدم لـ:", options: ["الإنترنت فقط", "الاتصال", "التخزين", "التصميم"], correctAnswer: 2, score: 1.00 },
                { question: "ART هو:", options: ["قاعدة بيانات", "آلة افتراضية", "لغة", "واجهة"], correctAnswer: 2, score: 1.00 },
                { question: "Dalvik:", options: ["نظام تشغيل", "آلة افتراضية", "تطبيق", "مكتبة"], correctAnswer: 2, score: 1.00 },
                { question: "API تستخدم لـ:", options: ["الألعاب", "التفاعل مع النظام", "الصوت", "الصور"], correctAnswer: 2, score: 1.00 },
                { question: "Android Studio هو:", options: ["لغة برمجة", "بيئة تطوير", "نظام", "تطبيق"], correctAnswer: 2, score: 1.00 },
                { question: "Emulator يستخدم لـ:", options: ["التصميم", "محاكاة الجهاز", "تخزين البيانات", "الشبكة"], correctAnswer: 2, score: 1.00 },
                { question: "Broadcast Receiver:", options: ["واجهة", "استقبال الأحداث", "تخزين", "رسم"], correctAnswer: 2, score: 1.00 },
                { question: "Content Provider:", options: ["عرض البيانات", "مشاركة البيانات", "الصوت", "التصميم"], correctAnswer: 2, score: 1.00 },
                { question: "Application Layer:", options: ["أدنى طبقة", "أعلى طبقة", "وسط", "غير موجودة"], correctAnswer: 2, score: 1.00 },
                { question: "Hardware layer:", options: ["واجهة", "عتاد", "تطبيق", "قاعدة بيانات"], correctAnswer: 2, score: 1.00 },
                { question: "Android SDK:", options: ["برنامج", "أدوات تطوير", "نظام", "تطبيق"], correctAnswer: 2, score: 1.00 },
                { question: "هو عبارة عن اي شاشة تراها في تطبيقك:", options: ["Activity", "Intent", "Service", "Content Provider"], correctAnswer: 1, score: 1.00 },
                { question: "هو المسافة بين محتوى العنصر وحدوده:", options: ["Margin", "Padding", "Orientation", "drawable"], correctAnswer: 2, score: 1.00 },
                { question: "عند ادراج صورة الى التطبيق فإننا نتعامل مع مجلد:", options: ["drawable", "Values", "XML", "JAVA"], correctAnswer: 1, score: 1.00 },
                { question: "ينقسم نظام الاندرويد الى ...... طبقات:", options: ["7", "6", "5", "4"], correctAnswer: 3, score: 1.00 },
                { question: "Android مفتوح المصدر", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "يعتمد على Linux", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "لا يمكن تعديله", options: ["صح", "خطأ"], correctAnswer: 2, score: 1.00 },
                { question: "يدعم Bluetooth", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "لا يدعم GPS", options: ["صح", "خطأ"], correctAnswer: 2, score: 1.00 },
                { question: "يستخدم SQLite", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "ART أسرع من Dalvik", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "لا يدعم Multi-tasking", options: ["صح", "خطأ"], correctAnswer: 2, score: 1.00 },
                { question: "يعمل على أجهزة متعددة", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "Application Framework غير مهم", options: ["صح", "خطأ"], correctAnswer: 2, score: 1.00 },
                { question: "Kernel تدير الموارد", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "يمكن تشغيل أكثر من تطبيق", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "لا يدعم الإنترنت", options: ["صح", "خطأ"], correctAnswer: 2, score: 1.00 },
                { question: "WebKit للمتصفح", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "Android Studio IDE", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "Emulator جهاز حقيقي", options: ["صح", "خطأ"], correctAnswer: 2, score: 1.00 },
                { question: "APIs مهمة للتطوير", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "SQLite قاعدة بيانات", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "Content Provider لمشاركة البيانات", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "Broadcast Receiver يستقبل أحداث", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "Android يعمل على التلفاز", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "Kernel مسؤولة عن UI", options: ["صح", "خطأ"], correctAnswer: 2, score: 1.00 },
                { question: "Java لغة أساسية", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "Android مغلق المصدر", options: ["صح", "خطأ"], correctAnswer: 2, score: 1.00 },
                { question: "Google طورت Android", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "يتم إنشاء الواجهة باستخدام:", options: ["XML و Java", "HTML و XML", "Java و HTML", "HTML و C"], correctAnswer: 1, score: 1.00 },
                { question: 'معنى android:layout_width="match_parent":', options: ["يقوم بتكبير العنصر بحجم العنصر", "يقوم بتكبير العنصر بعرض الشاشة", "يقوم بتكبير العنصر بطول الشاشة"], correctAnswer: 2, score: 1.00 },
                { question: "LinearLayout:", options: ["نسبي", "خطي", "جدولي", "ثابت"], correctAnswer: 2, score: 1.00 },
                { question: "الكلاس المسؤول عن إنشاء قواعد البيانات في الأندرويد ستوديو:", options: ["DatabaseManger", "SQLBuilder", "SQLiteOpenHelper", "RoomHelper"], correctAnswer: 3, score: 1.00 },
                { question: "TextView:", options: ["إدخال", "عرض نص", "زر", "صورة"], correctAnswer: 2, score: 1.00 },
                { question: "EditText:", options: ["عرض", "إدخال", "زر", "صورة"], correctAnswer: 2, score: 1.00 },
                { question: "Button:", options: ["عرض نص", "إدخال", "تنفيذ أمر", "صورة"], correctAnswer: 3, score: 1.00 },
                { question: "ImageButton:", options: ["نص", "صورة", "إدخال", "صوت"], correctAnswer: 2, score: 1.00 },
                { question: "CheckBox:", options: ["اختيار واحد", "اختيار متعدد", "إدخال", "عرض"], correctAnswer: 2, score: 1.00 },
                { question: "RadioButton:", options: ["متعدد", "واحد", "نص", "صورة"], correctAnswer: 2, score: 1.00 },
                { question: "ListView:", options: ["صورة", "قائمة", "نص", "زر"], correctAnswer: 2, score: 1.00 },
                { question: "wrap_content:", options: ["كامل الشاشة", "حسب المحتوى", "ثابت", "مخفي"], correctAnswer: 2, score: 1.00 },
                { question: "match_parent:", options: ["حسب المحتوى", "كامل الشاشة", "مخفي", "صغير"], correctAnswer: 2, score: 1.00 },
                { question: "layout_width:", options: ["الطول", "العرض", "اللون", "النص"], correctAnswer: 2, score: 1.00 },
                { question: "layout_height:", options: ["العرض", "الطول", "النص", "اللون"], correctAnswer: 2, score: 1.00 },
                { question: "id:", options: ["لون", "تعريف", "حجم", "نص"], correctAnswer: 2, score: 1.00 },
                { question: "hint:", options: ["نص ثابت", "نص مؤقت", "لون", "صورة"], correctAnswer: 2, score: 1.00 },
                { question: "orientation:", options: ["لون", "اتجاه", "حجم", "نص"], correctAnswer: 2, score: 1.00 },
                { question: "gravity:", options: ["مكان العنصر", "محتوى العنصر", "لون", "حجم"], correctAnswer: 1, score: 1.00 },
                { question: "layout_gravity:", options: ["محتوى", "موقع العنصر", "لون", "نص"], correctAnswer: 2, score: 1.00 },
                { question: "XML:", options: ["لغة برمجة", "لغة وصف", "قاعدة بيانات", "نظام"], correctAnswer: 2, score: 1.00 },
                { question: "Java تستخدم لـ:", options: ["التصميم", "المنطق", "التخزين", "الرسم"], correctAnswer: 2, score: 1.00 },
                { question: "Event:", options: ["نص", "تفاعل", "صورة", "لون"], correctAnswer: 2, score: 1.00 },
                { question: "Button click:", options: ["حدث", "نص", "صورة", "لون"], correctAnswer: 1, score: 1.00 },
                { question: "Layout:", options: ["عنصر", "ترتيب", "نص", "صورة"], correctAnswer: 2, score: 1.00 },
                { question: "View:", options: ["مخطط", "عنصر", "قاعدة بيانات", "نظام"], correctAnswer: 2, score: 1.00 },
                { question: "الخطوط في الاندرويد نعرفها بـ:", options: ["dp", "px", "sp", "mm"], correctAnswer: 3, score: 1.00 },
                { question: "المفقود ما بداخل الأقواس: findViewById(R.----.btn)", options: ["id", "Name", "Type", "Size"], correctAnswer: 1, score: 1.00 },
                { question: "وظيفة setContentView():", options: ["تحديد لون الخلفية", "إضافة رسالة", "إنشاء نشاط جديد", "تحديد التخطيط الرئيسي"], correctAnswer: 4, score: 1.00 },
                { question: "أي من الأكواد التالية يُستخدم لإنشاء AlertDialog بسيط:", options: ["AlertDialog.Builder(context);", 'AlertDialog.show(context, "Title", "Message");', "AlertDialog.create(context);", "AlertDialog.newInstance(context);"], correctAnswer: 1, score: 1.00 },
                { question: "أي من الأسطر التالية يستخدم لإنشاء Explicit Intent للإنتقال من Activity1 الى Activity2:", options: ['Intent intent = new Intent("Activity2");', "Intent intent = new Intent(); intent.setAction(\"Activity2\");", "Intent intent = new Intent();", "Intent intent = new Intent(Activity1.this, Activity2.class);"], correctAnswer: 4, score: 1.00 },
                { question: "هي دالة تستدعى مره واحده فقط عند انشاء قاعدة البيانات ويتم من خلالها انشاء الجدول هي:", options: ["onCreate", "onStart", "onUpgrade", "onConstructor"], correctAnswer: 1, score: 1.00 },
                { question: "يستخدم ............ لإدخال البيانات للجدول:", options: ["db.rawQuery", "db.setText", "db.getVersion", "db.execSQL"], correctAnswer: 4, score: 1.00 },
                { question: "الشكل المعروض هو وهو احد عناصر القوائم والمزودات:", options: ["Spinner", "ListView", "GridView", "ScrollView"], correctAnswer: 1, score: 1.00 },
                { question: "يمكن إنشاء UI بـ XML", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "يمكن استخدام Java للتفاعل", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "LinearLayout أفقي فقط", options: ["صح", "خطأ"], correctAnswer: 2, score: 1.00 },
                { question: "RelativeLayout يعتمد على العناصر", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "TextView للإدخال", options: ["صح", "خطأ"], correctAnswer: 2, score: 1.00 },
                { question: "EditText للإدخال", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "Button ينفذ أمر", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "ListView قائمة", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "wrap_content يملأ الشاشة", options: ["صح", "خطأ"], correctAnswer: 2, score: 1.00 },
                { question: "match_parent يملأ الشاشة", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "id معرف العنصر", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "hint نص مؤقت", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "XML لغة برمجة", options: ["صح", "خطأ"], correctAnswer: 2, score: 1.00 },
                { question: "Java تتحكم في الأحداث", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "orientation تحدد الاتجاه", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "gravity تحدد موقع العنصر", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "layout_gravity تحدد موقع العنصر", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "يمكن دمج XML و Java", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "Checkbox اختيار واحد", options: ["صح", "خطأ"], correctAnswer: 2, score: 1.00 },
                { question: "RadioButton اختيار واحد", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "ImageButton يعرض صورة", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "Layout يمكن أن يحتوي Layout آخر", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "View عنصر واجهة", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 },
                { question: "لا يمكن تغيير الخصائص", options: ["صح", "خطأ"], correctAnswer: 2, score: 1.00 },
                { question: "الأحداث مهمة للتفاعل", options: ["صح", "خطأ"], correctAnswer: 1, score: 1.00 }
            ]
        },
        "entrepreneurship": {
            id: "entrepreneurship",
            name: "ريادة الاعمال",
            nameEn: "Entrepreneurship",
            icon: "\uD83D\uDE80",
            available: false,
            questions: []
        }
    };

    function getSubjectList() {
        const subjects = [];
        for (const key in subjectQuestions) {
            const subj = subjectQuestions[key];
            subjects.push({
                id: subj.id,
                name: subj.name,
                nameEn: subj.nameEn,
                icon: subj.icon,
                available: subj.available
            });
        }
        return subjects;
    }

    function getSubjectAvailability(subjectId) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                const subject = subjectQuestions[subjectId];
                if (!subject) {
                    resolve({ available: false, message: "عذرا لايوجد اختبار متاح بالوقت الحالي" });
                    return;
                }
                if (subject.available && subject.questions.length > 0) {
                    resolve({ available: true, examData: { subjectId: subject.id, subjectName: subject.name, icon: subject.icon, questions: subject.questions } });
                } else {
                    resolve({ available: false, message: "عذرا لايوجد اختبار متاح بالوقت الحالي" });
                }
            }, 600);
        });
    }

    global.subjectQuestions = subjectQuestions;
    global.getSubjectList = getSubjectList;
    global.getSubjectAvailability = getSubjectAvailability;
    global.questions = [];

    console.log("Subject exam system loaded. " + Object.keys(subjectQuestions).length + " subjects registered.");

})(typeof window !== 'undefined' ? window : this);
