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
            available: false,
            questions: []
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
