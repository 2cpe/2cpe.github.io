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
                { question: "ما هو الاسم الذي تم إدخاله للتطبيق الذي تم إنشاؤه من الصفر (من الجداول الموجودة مسبقًا) في المختبر العملي 3-1؟", options: ["Budget App", "Project Management", "Team Members App", "Demo Projects"], correctAnswer: 4, score: 1.00 },
                { question: "عند إنشاء تطبيق \"Demo Projects\" في المختبر العملي 3-1، ما هو المصدر الذي تم اختياره لبدء عملية الإنشاء في معالج \"إنشاء تطبيق\"؟", options: ["من RESTful Service", "من تطبيق موجود", "من قاعدة بيانات (From Scratch/Database)", "من ملف (From a File)"], correctAnswer: 3, score: 1.00 },
                { question: "خلال الخطوات الأولية لإنشاء تطبيق \"Demo Projects\" (HOL 3-1)، تم توجيه المطور إلى عدم تحديد أي ميزات اختيارية (Features) والاكتفاء بالصفحات الافتراضية التي تم إنشاؤها.", options: ["T", "F"], correctAnswer: 1, score: 1.00 },
                { question: "تم إنشاء تطبيق \"Budget App\" في المختبر العملي 3-2 باستخدام أي طريقة إنشاء تطبيق؟", options: ["باستخدام REST Data Source", "من ملف (From a File)", "عبر متصفح الكائنات", "من قاعدة بيانات (From Scratch)"], correctAnswer: 2, score: 1.00 },
                { question: "الملف الذي تم استخدامه كمصدر لإنشاء تطبيق \"Budget App\" في المختبر العملي 3-2 كان اسمه projects_and_budgets.csv.", options: ["F", "T"], correctAnswer: 1, score: 1.00 },
                { question: "بعد تحميل البيانات في المختبر العملي 3-2، تم إنشاء جدول PROJECT_BUDGET بنجاح. كم عدد الصفوف التي تم إدراجها فيه؟", options: ["0 صفًا", "105 صفوف", "12 صفًا", "73 صفًا"], correctAnswer: 4, score: 1.00 },
                { question: "أثناء إنشاء تطبيق \"Budget App\" (HOL 3-2)، تم توجيه المطور إلى تحديد خيار \"Check All\" (تحديد الكل) في قسم الميزات (Features).", options: ["T", "F"], correctAnswer: 1, score: 1.00 },
                { question: "أي من الصفحات التالية ليست من الصفحات الافتراضية التي يقوم معالج \"إنشاء تطبيق\" بتوليدها بشكل قياسي في كلا المختبرين (HOL 3-1 و HOL 3-2)؟", options: ["تقرير كلاسيكي (Classic Report)", "تقويم (Calendar)", "لوحة القيادة (Dashboard)", "بحث واجهي (Faceted Search)"], correctAnswer: 1, score: 1.00 },
                { question: "ما هو رقم الصفحة الافتراضي لتطبيق \"Demo Projects\" التي يتم تعديلها في المختبر العملي 4؟", options: ["999", "2", "5", "1"], correctAnswer: 4, score: 1.00 },
                { question: "ما هي الخطوة التي يتم اتخاذها من شريط أدوات المطور (Developer Toolbar) لفتح مصمم الصفحة (Page Designer) لتعديل الصفحة الرئيسية؟", options: ["النقر على Quick Edit", "النقر على View Debug", "النقر على Theme Roller", "النقر على Edit Page 1"], correctAnswer: 4, score: 1.00 },
                { question: "يتكون مصمم الصفحة (Page Designer) من ثلاثة أجزاء رئيسية: الجزء الأيسر، الجزء الأوسط، والجزء الأيمن (Left Pane, Central Pane, and Right Pane).", options: ["T", "F"], correctAnswer: 1, score: 1.00 },
                { question: "ما هو نوع المكون (Region Component) الذي تم إضافته إلى الصفحة الرئيسية لإنشاء لوحة القيادة في المختبر العملي 4؟", options: ["تقرير تفاعلي (Interactive Report)", "نموذج (Form)", "قائمة بطاقات (Cards)", "مخطط بياني (Chart)"], correctAnswer: 4, score: 1.00 },
                { question: "ما هو نوع المصدر (Source Type) الذي تم اختياره لمنطقة المخطط البياني الجديدة في مصمم الصفحة؟", options: ["استعلام SQL (SQL Query)", "إجراء مخزن (Stored Procedure)", "جدول (Table)", "REST Data Source"], correctAnswer: 1, score: 1.00 },
                { question: "تم تسمية منطقة المخطط البياني الجديدة في قسم 'Identification > Name' باسم \"Completed Tasks\" (المهام المكتملة).", options: ["F", "T"], correctAnswer: 1, score: 1.00 },
                { question: "ما هي التقنية الأساسية في عبارة SQL المُقدمة للمخطط البياني والتي تتيح تجميع النتائج لإنشاء سلسلتي بيانات مختلفتين ('Completed Tasks' و 'Incomplete Tasks')؟", options: ["GROUP BY", "UNION ALL", "Subquery (استعلام فرعي)", "JOIN"], correctAnswer: 2, score: 1.00 },
                { question: "في قسم تعيين الأعمدة (Column Mapping)، ما هو اسم العمود في الاستعلام الذي تم تعيينه لخاصية القيمة (Value) للمخطط؟", options: ["SERIES", "VALUE", "LABEL", "ID"], correctAnswer: 2, score: 1.00 },
                { question: "إذا لم يكن المطور على الصفحة الرئيسية (Page 1) عند النقر على \"Edit Page xx\" في شريط أدوات المطور، فسيتم دائمًا توجيهه إلى الصفحة رقم 1.", options: ["T", "F"], correctAnswer: 2, score: 1.00 },
                { question: "ما هو نوع المنطقة (Region) التي تم إضافتها إلى صفحة لوحة القيادة (Dashboard) في المختبر العملي 5-1 لعرض المهام المعلقة؟", options: ["شبكة تفاعلية (Interactive Grid)", "تقارير البطاقات (Cards Report)", "تقرير كلاسيكي (Classic Report)", "تقرير تفاعلي (Interactive Report)"], correctAnswer: 3, score: 1.00 },
                { question: "تم إضافة التقرير الكلاسيكي في المختبر العملي 5-1 إلى الصفحة الرئيسية (Home Page) لتطبيق \"Demo Projects\".", options: ["F", "T"], correctAnswer: 1, score: 1.00 },
                { question: "في المختبر العملي 5-4 (إنشاء صفحة بحث واجهي)، ما هو رقم الصفحة الذي تم تعديله لتكوين الواجهات (Facets)؟", options: ["الصفحة 2", "الصفحة 1 (Home)", "الصفحة 4", "الصفحة 3"], correctAnswer: 4, score: 1.00 },
                { question: "عند إدخال قيمة في مربع نص التصفية لأي واجهة (Facet Filter) في صفحة البحث الواجهي، يتم تحديث قيم الواجهات الأخرى تلقائيًا لعكس البيانات المتبقية.", options: ["F", "T"], correctAnswer: 2, score: 1.00 },
                { question: "لتحديد نطاقات رواتب محددة مثل \"900 - 1500\" للواجهة P3_SAL في صفحة البحث الواجهي، ما هي الخاصية التي تم ضبطها في محرر الخصائص (Property Editor)؟", options: ["نوع المصدر (Source Type)", "التخطيط (Layout)", "التعريف (Identification)", "قائمة القيم (List of Values)"], correctAnswer: 4, score: 1.00 },
                { question: "ما هو اسم الواجهة (Facet) التي تم تكوينها لعرض نطاقات الرواتب في المختبر العملي 5-4؟", options: ["P3_MANAGER", "P3_SAL", "P3_DEPARTMENT", "P3_STATUS"], correctAnswer: 2, score: 1.00 },
                { question: "ركز المختبر العملي 5-3 على إضافة صفحة شبكة تفاعلية (Interactive Grid) إلى تطبيق \"Demo Projects\".", options: ["T", "F"], correctAnswer: 2, score: 1.00 },
                { question: "لنطاق العرض \"900 - 1500\" في واجهة الرواتب، ما هو التنسيق الصحيح لقيمة الإرجاع (Return Value) التي تم تحديدها في المختبر؟", options: ["900-1500", "900|1500", "900,1500", "900 TO 1500"], correctAnswer: 2, score: 1.00 },
                { question: "ما هو الهدف المحدد من التقرير الكلاسيكي الذي تم إنشاؤه في HOL 5-1 على صفحة لوحة القيادة؟", options: ["إنشاء تقرير للمدراء فقط", "عرض جميع المهام في التطبيق", "عرض ميزانية المشاريع", "عرض المهام المعلقة الخاصة بكل عضو فريق (Team Member)"], correctAnswer: 4, score: 1.00 },
                { question: "أي تطبيق يتم استخدامه في المختبر العملي 6-1 (استخدام تقرير تفاعلي)؟", options: ["Hardware App", "Demo Projects", "Team Members App", "Budget App"], correctAnswer: 1, score: 1.00 },
                { question: "عند تخصيص تقرير تفاعلي وحفظ التغييرات (Actions > Report > Save Report)، إذا تم اختيار \"As Default Report Settings\" و \"Primary\"، فسيتم حفظ هذا التقرير كإعداد افتراضي لجميع المستخدمين.", options: ["F", "T"], correctAnswer: 2, score: 1.00 },
                { question: "في المختبر العملي 6-6 (تخصيص تقرير المهام)، ما هي الأعمدة التي تم تجميع السجلات بها (Control Break)؟", options: ["Project و Milestone", "Is Complete و Project", "Assignee و Name", "Start Date و End Date"], correctAnswer: 1, score: 1.00 },
                { question: "في المختبر العملي 6-4، تم توجيه المطور لتعديل استعلام مصدر تقرير المشاريع (Projects Report) لإعادة تسمية العمود BUDGET إلى PROJECT_BUDGET.", options: ["T", "F"], correctAnswer: 1, score: 1.00 },
                { question: "في المختبر العملي 6-3، لحفظ تقرير \"Team Members\" المخصص كبديل للتقرير الرئيسي، ما هو خيار \"Default Report Type\" الذي تم تحديده؟", options: ["Public", "Primary", "Alternate", "Private"], correctAnswer: 3, score: 1.00 },
                { question: "في المختبر العملي 6-6، بعد التجميع (Control Break)، بأي عمود تم فرز (Sort) السجلات؟", options: ["Project", "Milestone", "Start Date", "End Date"], correctAnswer: 3, score: 1.00 },
                { question: "في المختبر العملي 6-4، كان الغرض من تعديل استعلام مصدر تقرير المشاريع هو إضافة عمود يحتوي على الميزانية (Budget) من جدول آخر.", options: ["F", "T"], correctAnswer: 2, score: 1.00 },
                { question: "بعد إضافة عمود الميزانية (PROJECT_BUDGET) إلى تقرير المشاريع في المختبر 6-4، ما هو التنسيق الذي تم تطبيقه عليه؟", options: ["العملة (Currency)", "رقم صحيح (Integer)", "التاريخ (Date)", "نص (Text)"], correctAnswer: 1, score: 1.00 },
                { question: "في المختبر العملي 6-6 (تخصيص تقرير المهام)، تم توجيه المطور لإخفاء عمود الوصف (Description) من العرض الافتراضي للتقرير.", options: ["T", "F"], correctAnswer: 1, score: 1.00 },
                { question: "ما هو التطبيق الذي تم استخدامه في المختبر العملي 7 لتخصيص الشبكة التفاعلية (Interactive Grid)؟", options: ["Demo Projects", "Budget App", "Hardware App", "Team Members App"], correctAnswer: 2, score: 1.00 },
                { question: "إحدى المهام التي قام بها المطور في المختبر العملي 7-1 هي تحويل الشبكة التفاعلية من وضع قابل للتحرير (Editable) إلى وضع للقراءة فقط (Read Only) لتقييد المستخدمين.", options: ["T", "F"], correctAnswer: 2, score: 1.00 },
                { question: "عند إنشاء مجموعات الأعمدة (Column Groups) في المختبر العملي 7-1، ما هو الهدف من إنشاء مجموعة \"Dates\"؟", options: ["فرز الأعمدة معًا", "تطبيق تنسيق واحد على الأعمدة", "إخفاء الأعمدة", "تجميع أعمدة Start Date و End Date تحت رأس واحد"], correctAnswer: 4, score: 1.00 },
                { question: "تم تمكين خيار \"Public Reports\" (التقارير العامة) في خصائص الشبكة التفاعلية (Interactive Grid) للسماح للمستخدمين بحفظ تخصيصاتهم كإعداد افتراضي لجميع المستخدمين.", options: ["F", "T"], correctAnswer: 2, score: 1.00 },
                { question: "أي تنسيق تنزيل (Download Format) تم إزالته من قائمة الخيارات المتاحة للمستخدمين النهائيين في الشبكة التفاعلية؟", options: ["HTML", "PDF", "CSV", "Excel"], correctAnswer: 1, score: 1.00 },
                { question: "في المختبر العملي 7-2 (تخصيص المستخدم النهائي)، ما هو نوع المخطط (Chart Type) الذي تم اختياره لعرض الميزانية حسب المشروع؟", options: ["Line", "Pie", "Area", "Bar"], correctAnswer: 4, score: 1.00 },
                { question: "لحفظ التخصيص الشخصي (مثل المخطط الجديد) الذي تم إجراؤه من قبل المستخدم النهائي في HOL 7-2، يجب على المستخدم اختيار \"Public\" لـ \"Report Type\" في مربع حوار الحفظ.", options: ["T", "F"], correctAnswer: 2, score: 1.00 },
                { question: "عند إنشاء المخطط في الشبكة التفاعلية في HOL 7-2 لعرض التكلفة (Cost) حسب المشروع، ما هي دالة التجميع (Aggregation) التي تم تطبيقها على عمود القيمة (Value Column)؟", options: ["Average", "Count", "Minimum", "Sum"], correctAnswer: 4, score: 1.00 },
                { question: "عند إنشاء مجموعات الأعمدة (Column Groups) للمطور في HOL 7-1، ما هو عمود المجموعة الذي تم وضعه في المجموعة المسماة \"Identification\"؟", options: ["Start Date", "Cost", "Assigned To", "Project"], correctAnswer: 4, score: 1.00 },
                { question: "عند النقر على أيقونة التعديل (القلم الرصاص) بجوار سجل في تقرير \"Demo Proj Team Members\" في HOL 8-1، يتم عرض صفحة النموذج في أي نوع من النوافذ؟", options: ["نافذة منبثقة (Popup Window)", "نموذج مشروط (Modal Form Page)", "صفحة عادية (Normal Page)", "صفحة تقرير (Report Page)"], correctAnswer: 2, score: 1.00 },
                { question: "في HOL 8-1، تم تغيير نوع عنصر P7_USERNAME من \"Text Field\" إلى \"Display Only\" لجعل اسم المستخدم غير قابل للتعديل.", options: ["F", "T"], correctAnswer: 1, score: 1.00 },
                { question: "في المختبر العملي 8-2، ما هي الأداة التي تم استخدامها لإنشاء نموذج جديد (Form on a Table) لجدول PROJECT_BUDGET؟", options: ["معالج إنشاء صفحة (Create Page Wizard)", "منشئ التطبيقات (App Builder) > إنشاء تطبيق", "مصمم الصفحة (Page Designer) > زر إنشاء", "ورشة عمل SQL > أوامر SQL"], correctAnswer: 1, score: 1.00 },
                { question: "الصفحة التي تم إنشاؤها في HOL 8-2 لجدول PROJECT_BUDGET كانت من نوع \"Interactive Grid\" (شبكة تفاعلية) مع نموذج.", options: ["T", "F"], correctAnswer: 2, score: 1.00 },
                { question: "ما هو الاسم الذي تم إطلاقه على صفحة النموذج التي تم إنشاؤها على جدول PROJECT_BUDGET في المختبر العملي 8-2؟", options: ["Project Budget Classic Details", "Project Budget Details", "Budget Entry", "Budget Form"], correctAnswer: 1, score: 1.00 },
                { question: "عند إنشاء صفحة النموذج في HOL 8-2، ما هو العنصر الذي تم اختياره لتمثيل المفتاح الرئيسي (Primary Key) في النموذج؟", options: ["P9_COST", "P9_NAME", "P9_ID", "P9_PROJECT"], correctAnswer: 3, score: 1.00 },
                { question: "في HOL 8-2، تم تعديل عمود المفتاح الرئيسي (ID) في التقرير الكلاسيكي ليتحول إلى رابط (Link) بدلاً من عمود نصي.", options: ["F", "T"], correctAnswer: 2, score: 1.00 },
                { question: "في التقرير الكلاسيكي الذي تم ربطه بالنموذج في HOL 8-2، ما هي أيقونة APEX الجاهزة التي تم استخدامها كنص رابط (Link Text) لعمود التعديل؟", options: ["apex-plus.png", "apex-edit-pencil.png", "apex-action.png", "apex-delete.png"], correctAnswer: 2, score: 1.00 },
                { question: "عند إعداد الرابط (Link) في عمود التقرير الكلاسيكي، أي عنصر في صفحة النموذج (Project Budget Classic Details) تم تعيين قيمة #ID# إليه؟", options: ["P9_NAME", "P9_ID", "P8_ID", "P9_PROJECT"], correctAnswer: 2, score: 1.00 }
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
