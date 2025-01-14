import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const IntroPHP: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <section className="mb-6">
                <h2 className="text-2xl font-semibold">رفع الملفات في PHP</h2>
                <p className="text-lg leading-relaxed mb-4">
                    تتيح لك النماذج HTML رفع ملف، مثل صورة، أو دليل منتج، أو سيرة ذاتية على موقع توظيف (بتنسيق Word أو PDF). دعونا نوضح أولاً مصطلح "الرفع"، الذي يمكن أن يشير إلى العمليات التالية:
                </p>
                <ul>
                    <li>تنزيل ملف من خادم بعيد إلى جهاز كمبيوتر محلي (هذا هو <strong>التنزيل</strong>).</li>
                    <li>رفع ملف من جهاز كمبيوتر إلى خادم بعيد (هذا هو <strong>الرفع</strong>). هذا ما سنركز عليه هنا.</li>
                </ul>

                <h3 className="text-lg font-medium mt-4">نموذج HTML لرفع الملفات</h3>
                <p className="text-lg leading-relaxed mb-4">
                    للسماح برفع الملفات، يجب عليك إضافة سمة <code>enctype</code> إلى علامة <code>form</code>. يجب أن تكون القيمة <code>multipart/form-data</code>:
                </p>
                <CodeBlock code={`<form action="post.php" method="post" enctype="multipart/form-data">`} />

                <p className="text-lg leading-relaxed mb-4">
                    بعد ذلك، تحتاج إلى حقل إدخال ملف، والذي سيعرض زرًا يسمح للمستخدم باختيار ملف من جهاز الكمبيوتر الخاص به:
                </p>
                <CodeBlock code={`<input type="file" name="fichier">`} />

                <h3 className="text-lg font-medium mt-4">معالجة رفع الملف في PHP</h3>
                <p className="text-lg leading-relaxed mb-4">
                    في ملف PHP المحدد في سمة <code>action</code> للنموذج (في هذه الحالة، <code>post.php</code>)، يمكنك الوصول إلى معلومات حول الملف الذي تم رفعه باستخدام المتغير الفائق <code>$_FILES</code>. مثل المتغيرات الفائقة الأخرى، يتصرف <code>$_FILES</code> مثل مصفوفة.
                </p>
                <h4 className="mt-2">تمرين:</h4>
                <p className="text-lg leading-relaxed mb-4">
                    أنشئ نموذج رفع والسكريبت المقابل في PHP. في السكريبت PHP، اكتب فقط <code>var_dump($_FILES);</code> ولاحظ النتيجة.
                </p>

                <p className="text-lg leading-relaxed mb-4">سيبدو الإخراج كما يلي:</p>
                <CodeBlock code={`'name' => string 'monfichier.jpg' (length=10)
'type' => string 'image/jpeg' (length=10)
'tmp_name' => string 'C:\\wamp\\tmp\\phpC1CD.tmp' (length=23)
'error' => int 0
'size' => int 100813`} />

                <h3 className="text-lg font-medium mt-4">معالجة الأخطاء</h3>
                <p className="text-lg leading-relaxed mb-4">
                    إذا فشل الرفع، تُعاد الأخطاء في <code>$_FILES["fichier"]["error"]</code>. الحالات الخاطئة محددة مسبقًا في جدول، يمكن العثور عليها في الوثائق.
                </p>
                <p className="text-lg leading-relaxed mb-4">إليك كيفية التحقق من الأخطاء:</p>
                <CodeBlock code={`if ($_FILES["fichier"]["error"] !== UPLOAD_ERR_OK) {
    echo "فشل رفع الملف!";
    exit;
}`} />

                <h3 className="text-lg font-medium mt-4">الاعتبارات الأمنية</h3>
                <p className="text-lg leading-relaxed mb-4">
                    المشكلة الرئيسية في رفع الملفات هي الأمان: يرسل المستخدم ملفًا من جهاز الكمبيوتر الخاص به، وبما أنه لا يجب أبدًا الوثوق في أفعال المستخدمين، يجب عليك التأكد من أن الملف هو من النوع المتوقع ولا يحتوي على أي كود خبيث (مثل البرامج القابلة للتنفيذ أو الفيروسات أو البرمجيات التجسسية).
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    قبل تخزين الملف، يجب عليك التحقق من نوع الملف، والأذونات، وتخزينه بشكل صحيح على الخادم.
                </p>

                <h4 className="mt-2">التحقق من نوع الملف</h4>
                <p className="text-lg leading-relaxed mb-4">
                    يجب عليك أولاً التحقق مما إذا كان الملف الذي تم رفعه هو من النوع المتوقع (صورة، مستند Word، PDF، إلخ).
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    الخطأ الشائع هو اختبار امتداد الملف فقط أو نوع MIME الذي يعيده المتصفح، ولكن يمكن تزوير هذه الأشياء.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    يوفر PHP امتداد <code>fileinfo</code> للتحقق من أنواع الملفات بشكل آمن. إليك كيفية استخدامه:
                </p>
                <CodeBlock code={`$allowedMimeTypes = ["image/gif", "image/jpeg", "image/png"];
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mimetype = finfo_file($finfo, $_FILES["fichier"]["tmp_name"]);
finfo_close($finfo);

if (in_array($mimetype, $allowedMimeTypes)) {
    // النوع مسموح به، تابع في نقل وإعادة تسمية الملف
} else {
    // النوع غير مسموح به، عرض خطأ
    echo "نوع الملف غير مصرح به!";
    exit;
}`} />

                <h4 className="mt-2">نقل وإعادة تسمية الملف</h4>
                <p className="text-lg leading-relaxed mb-4">
                    بشكل افتراضي، يتم تخزين الملف الذي تم رفعه في دليل <code>tmp</code> على الخادم الخاص بك. ستحتاج إلى نقله إلى دليل مطلوب في مشروعك وإعادة تسميته لتجنب الوصول المحتمل من خلال الرابط.
                </p>
                <CodeBlock code={`move_uploaded_file($_FILES["fichier"]["tmp_name"], "images/photo.jpg");`} />

                <h4 className="mt-2">تعيين أذونات الملفات</h4>
                <p className="text-lg leading-relaxed mb-4">
                    تحتوي الملفات على أنظمة التشغيل (مثل Windows و Linux) على أذونات للقراءة والكتابة والتنفيذ. هذا أمر مهم للأمان. يجب عليك التأكد من تعيين الأذونات بشكل صحيح عند التعامل مع الملفات المرفوعة.
                </p>
            </section>
        </div>
    );
};

export default IntroPHP;
