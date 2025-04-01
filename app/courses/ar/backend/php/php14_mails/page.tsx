import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const PHP_Mail: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">PHP - Email</h1>

            {/* القسم 1: نظرة عامة على البريد الإلكتروني في التطبيقات الويب */}
            <h2 className="text-2xl font-semibold mb-4">نظرة عامة على البريد الإلكتروني في التطبيقات الويب</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                إرسال الرسائل الإلكترونية هو ميزة شائعة في التطبيقات الويب. يعمل هذا الوظيفة في كلا الاتجاهين:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>
                    يتواصل المستخدمون مع مالك الموقع عبر نموذج الاتصال (أو نموذج التسجيل).
                </li>
                <li>
                    يرسل مالك الموقع رسائل إلكترونية للمستخدمين، مثل:
                    <ul className="list-disc pl-6">
                        <li>تأكيد التسجيل</li>
                        <li>تأكيد الطلب لعملية شراء عبر الإنترنت</li>
                        <li>النشرات الإخبارية</li>
                        <li>إعادة تعيين كلمة المرور أو التذكير بها</li>
                        <li>المرفقات مثل الفواتير، الوثائق...</li>
                    </ul>
                </li>
            </ul>
            <p className="mb-4 leading-relaxed">
                يتكون البريد الإلكتروني من جزئين:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>
                    الجزء العلوي (الرؤوس) يحتوي على معلومات تقنية. هذا الجزء غير مرئي للمستلم ولكن يمكن مشاهدته في الكود المصدري.
                </li>
                <li>
                    الجزء الخاص بالجسم يحتوي على محتوى الرسالة وهو الجزء المرئي الذي يظهر في عملاء البريد الإلكتروني.
                </li>
            </ul>
            <p className="mb-4 leading-relaxed">
                من المهم أن نلاحظ أن إرسال الرسائل الإلكترونية لا يتعلق فقط باللغة البرمجية المستخدمة، بل يشمل أيضًا العديد من المعايير (RFC 2822، RFC 2047...)، وبرامج الخوادم، وبروتوكولات الاتصال (SMTP، IMAP، إلخ)، وتكوينات الخوادم، ومزودي البريد الإلكتروني (مثل Gmail، Yahoo، إلخ). هذه العوامل تجعل ضمان استلام البريد الإلكتروني بشكل صحيح أمرًا معقدًا.
            </p>

            {/* القسم 2: المتطلبات الأساسية */}
            <h2 className="text-2xl font-semibold mb-4">المتطلبات الأساسية: إعداد خادم البريد الإلكتروني</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                بشكل افتراضي، يجب ألا يكون النظام لديك قادرًا على إرسال الرسائل الإلكترونية. لاختبار ما إذا كان موقعك يمكنه إرسال الرسائل الإلكترونية، تحتاج إلى إعداد خادم بريد وهمي.
            </p>
            <h3 className="text-xl font-semibold mb-4">تثبيت MailHog</h3>
            <p className="mb-4 leading-relaxed">
                MailHog هو أداة تعترض وتعرض الرسائل الإلكترونية على خادم SMTP محلي دون إرسالها فعليًا. هذه الأداة مفيدة أثناء التطوير لاختبار وظيفة البريد الإلكتروني.
            </p>
            <CodeBlock code={`# تثبيت Go
sudo apt-get -y install golang-go

# تثبيت MailHog
go install github.com/mailhog/MailHog@latest
sudo cp go/bin/MailHog /usr/local/bin/mailhog

# إذا واجهت الخطأ التالي، استخدم الأمر أدناه:
# can't load package: package github.com/mailhog/MailHog@latest: cannot use path@version syntax in GOPATH mode
$ export GO111MODULE=on

# ثم قم بتشغيل الأمر التالي للتثبيت:
go get github.com/mailhog/MailHog@latest`} language="php" />

            {/* القسم 3: تكوين PHP */}
            <h2 className="text-2xl font-semibold mb-4">تكوين PHP</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                بعد تثبيت MailHog، تحتاج إلى تكوين PHP لاستخدامه كخادم بريد لإرسال الرسائل الإلكترونية.
            </p>
            <CodeBlock code={`# افتح ملف تكوين PHP
sudo nano /etc/php/8.2/cli/php.ini

# تعديل sendmail_path لاستخدام MailHog
sendmail_path = /usr/local/bin/mailhog sendmail`} language="php" />

            {/* القسم 4: تشغيل MailHog */}
            <h2 className="text-2xl font-semibold mb-4">تشغيل MailHog</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                لبدء تشغيل MailHog، افتح الطرفية وقم بتشغيل الأمر التالي:
            </p>
            <CodeBlock code={`# بدء تشغيل MailHog
mailhog`} language="php" />
            <p className="mb-4 leading-relaxed">
                ثم افتح <code className="px-1 rounded">http://localhost:8025</code> في متصفحك لعرض الرسائل المعترضة.
            </p>
            <p className="mb-4 leading-relaxed">
                لاحظ أن MailHog هو مجرد محاكي يعترض ويعرض الرسائل الإلكترونية محليًا. لا يرسل الرسائل الفعلية. إنها أداة تطوير تُستخدم لاختبار وظيفة البريد الإلكتروني دون إرسال رسائل حقيقية.
            </p>

            {/* القسم 1: نظرة عامة على دالة mail() */}
            <h2 className="text-2xl font-semibold mb-4">إرسال الرسائل الإلكترونية باستخدام دالة mail()</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                يوفر PHP دالة <code className="px-1 rounded">mail()</code> لإرسال الرسائل الإلكترونية.
                تتطلب هذه الدالة المعلمات التالية:
            </p>
            <CodeBlock code={`mail(recipient, subject, message, headers, parameters);`} language="php" />
            <p className="mb-4 leading-relaxed">
                دالة <code className="px-1 rounded">mail()</code> تُرجع قيمة منطقية: <strong>TRUE</strong> إذا تم تنفيذها بنجاح، و <strong>FALSE</strong> إذا فشلت.
            </p>


            {/* القسم 2: معلمات دالة mail() */}
            <h2 className="text-2xl font-semibold mb-4">معلمات دالة mail()</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>
                    <strong>المستلم</strong>: عنوان البريد الإلكتروني للشخص الذي ترغب في إرسال الرسالة إليه.
                </li>
                <li>
                    <strong>الموضوع</strong>: موضوع البريد الإلكتروني كما سيظهر في عميل البريد الإلكتروني.
                </li>
                <li>
                    <strong>الرسالة</strong>: محتوى البريد الإلكتروني الرئيسي كما سيظهر في عميل البريد الإلكتروني.
                </li>
                <li>
                    <strong>الرؤوس</strong>: معلومات فنية اختيارية (مثل إصدار MIME، نوع المحتوى).
                </li>
                <li>
                    <strong>المعلمات</strong>: معلومات فنية اختيارية إضافية.
                </li>
            </ul>

            {/* القسم 3: مثال للاستخدام */}
            <h2 className="text-2xl font-semibold mb-4">مثال</h2><div className="border-b border-gray-300 mb-6" />
            <CodeBlock code={`<?php
mail('dave.loper@outlook.com',
'تأكيد التسجيل',
'مرحبًا بك في Gardenly! يمكنك شراء الطماطم الكرز لتناول المقبلات وعربة يدوية لنقلها. احصل بسرعة على بطاقتك الأمريكية إكسبريس!',
array('From' => 'contact@gardenly.com',
    'Reply-To' => 'commercial@gardenly.com',
    'X-Mailer' => 'PHP/' . phpversion()
    )
);
?>`} language="php" />

            <p className="mb-4 leading-relaxed">
                ملاحظة: العديد من مزودي الاستضافة يعطلون دالة <code className="px-1 rounded">mail()</code> لتجنب البريد المزعج. قد يحدون من استخدامها (مثلًا، تحديد عدد الرسائل المسموح بها في فترة زمنية معينة). البعض يوفر بدائل مع معلمات محدودة أو من خلال دوال مخصصة.
            </p>

            {/* القسم 4: تنسيق المستلم */}
            <h2 className="text-2xl font-semibold mb-4">تنسيق المستلم</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                يمكن كتابة بريد المستلم بتنسيقات مختلفة، ولكن يجب أن يتوافق مع معيار RFC 2822.
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>
                    <code>dave.loper@outlook.com</code>
                </li>
                <li>
                    <code>Dave Loper &lt;dave.loper@outlook.com&gt;</code>
                </li>
            </ul>
            <p className="mb-4 leading-relaxed">
                يمكنك أيضًا تحديد مستلمين متعددين، مفصولين بفواصل (لاحظ أن مرشحات البريد المزعج لا تحب ذلك):
            </p>
            <CodeBlock code={`<?php
$recipient = 'Dave Loper <dave.loper@outlook.com>,
      jessica.young@outlook.com,
      alex.thomson@gmail.com';
?>`} language="php" />

            {/* القسم 5: الموضوع */}
            <h2 className="text-2xl font-semibold mb-4">الموضوع (الدرس)</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                الموضوع هو موضوع البريد الإلكتروني. يجب أن يتبع أيضًا معيار RFC 2822 ويتماشى مع الممارسات الجيدة، حيث قد يتم تصنيف المواضيع المكتوبة بشكل سيئ على أنها بريد مزعج.
            </p>
            <p className="mb-4 leading-relaxed">
                يجب أن يكون الموضوع موجزًا لتجنب قصه من قبل عملاء البريد الإلكتروني.
            </p>

            {/* القسم 6: محتوى النص */}
            <h2 className="text-2xl font-semibold mb-4">محتوى النص</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                يحتوي الجسم على محتوى البريد الإلكتروني الذي سيتم عرضه. يمكن أن يكون بتنسيق نص عادي أو HTML، ويمكنك تكوين البريد الإلكتروني لمعالجة كلا التنسيقات.
            </p>

            {/* القسم 7: الرؤوس */}
            <h2 className="text-2xl font-semibold mb-4">الرؤوس</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                الرؤوس اختيارية ولكن يمكن أن تشمل معلومات فنية مثل التنسيق (نص/HTML)، الترميز (UTF-8)، المستلمون في نسخة كربونية (CC)، أو المرفقات.
            </p>
            <p className="mb-4 leading-relaxed">
                تتطلب بعض خدمات البريد الإلكتروني رؤوسًا محددة، أو قد يتم تصنيف البريد الإلكتروني كرسالة مزعجة. الرؤوس غير مرئية في البريد الإلكتروني نفسه ولكن يمكن عرضها في شفرة المصدر لعميل البريد الإلكتروني.
            </p>

            <h3 className="text-xl font-semibold mb-4">إعلان الرؤوس</h3>
            <p className="mb-4 leading-relaxed">
                يمكن تعيين الرؤوس باستخدام دمج السلاسل أو باستخدام مصفوفة ترابطية. يُوصى بالطريقة الثانية من أجل قراءة أفضل وأمان أعلى.
            </p>
            <CodeBlock code={`# مثال 1: دمج السلاسل للرؤوس
$sHeaders  = 'MIME-Version: 1.0' . '\\r\\n';
$sHeaders .= 'Content-Type: text/html; charset=utf-8' . '\\r\\n';
$sHeaders .= 'From: Dave Loper <dave.loper@outlook.com>' . '\\r\\n';
$sHeaders .= 'Reply-to: Sales department <commercial@gardenly.com>' . '\\r\\n';
$sHeaders .= 'X-Mailer: PHP/' . phpversion() . '\\r\\n';

# مثال 2: استخدام مصفوفة PHP للرؤوس
$aHeaders[] = 'MIME-Version: 1.0';
$aHeaders[] = 'Content-Type: text/html; charset=utf-8';
$aHeaders[] = 'From: Dave Loper <dave.loper@outlook.com>';
$aHeaders[] = 'Reply-to: Sales department <commercial@gardenly.com>';
$aHeaders[] = 'X-Mailer: PHP/' . phpversion();

# صيغة بديلة باستخدام المصفوفات الترابطية
$aHeaders = array(
'MIME-Version' => '1.0',
'Content-Type' => 'text/html; charset=utf-8',
'From' => 'Dave Loper <dave.loper@outlook.com>',
'Reply-To' => 'Sales department <commercial@gardenly.com>',
'X-Mailer' => 'PHP/' . phpversion()
);`} language="php" />


            {/* Section 1: Overview */}
            <h2 className="text-2xl font-semibold mb-4">احترام حالة أسماء رؤوس الرسائل</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                يجب أن تحترم رؤوس الرسائل الإلكترونية حالة أسماء الرؤوس. فيما يلي قائمة بالرؤوس الشائعة المستخدمة في الرسائل الإلكترونية:
            </p>

            <table className="table-auto w-full mb-4">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">القيمة</th>
                        <th className="px-4 py-2 border">الوصف</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2 border">BCC</td>
                        <td className="px-4 py-2 border">نسخة كربونية مخفية. يتم إخفاء عناوين البريد الإلكتروني عن المستلمين الآخرين.</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border">CC</td>
                        <td className="px-4 py-2 border">نسخة كربونية. يتم عرض عناوين البريد الإلكتروني لجميع المستلمين.</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border">Content-Type</td>
                        <td className="px-4 py-2 border">يحدد تنسيق البريد الإلكتروني (مثل النص العادي أو HTML).</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border">From</td>
                        <td className="px-4 py-2 border">مرسل البريد الإلكتروني.</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border">MIME-Version</td>
                        <td className="px-4 py-2 border">إصدار MIME (دائمًا 1.0).</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border">Reply-To</td>
                        <td className="px-4 py-2 border">عنوان الرد، يختلف عن عنوان "من".</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border">X-Mailer</td>
                        <td className="px-4 py-2 border">البرنامج المستخدم لإرسال البريد الإلكتروني.</td>
                    </tr>
                </tbody>
            </table>

            {/* Section 2: Text and HTML Formats */}
            <h2 className="text-2xl font-semibold mb-4">تنسيقات النص و HTML</h2>

            <h3 className="text-xl font-semibold mb-4">تنسيق النص</h3>
            <p className="mb-4 leading-relaxed">
                تنسيق النص (النص العادي) هو التنسيق الافتراضي للبريد الإلكتروني. إنه قابل للقراءة على جميع الأجهزة دون أي تنسيق.
            </p>
            <CodeBlock code={`$aHeaders[] = 'Content-Type: text/plain; charset=utf-8';`} language="php" />

            <h3 className="text-xl font-semibold mb-4">تنسيق HTML</h3>
            <p className="mb-4 leading-relaxed">
                يتيح لك تنسيق HTML إرسال رسائل بريد إلكتروني كصفحات ويب حقيقية مع هيكل HTML، وتنسيق CSS، وصور، وحتى تفاعلات Javascript.
            </p>
            <CodeBlock code={`$aHeaders[] = 'MIME-Version: 1.0';`} language="php" />
            <CodeBlock code={`$aHeaders[] = 'Content-Type: text/html; charset=utf-8';`} language="php" />
            <p className="mb-4 leading-relaxed">
                سيتم تشفير محتوى الرسالة بعد ذلك بتنسيق HTML. فيما يلي مثال باستخدام Bootstrap:
            </p>

            <CodeBlock code={`$message = '<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>أول بريد HTML لي</title>   
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h1>أول بريد HTML لي</h1>
        <p className="text-lg leading-relaxed mb-4">واو، هذا رائع! يمكننا حتى إضافة صورة.</p>
        <img src="image.jpg" alt="الشعار" class="img-fluid">
    </div>
</body>
</html>'`} language="php" />

            <h3 className="text-xl font-semibold mb-4">التنسيقات المشتركة</h3>
            <p className="mb-4 leading-relaxed">
                من الممارسات الجيدة إرسال بريد إلكتروني بتنسيق النص و HTML معًا. يتم فصل الكود بواسطة سطر "الحدود"، مما يسمح لعملاء البريد الإلكتروني باختيار التنسيق الذي يجب عرضه استنادًا إلى إمكانياتهم.
            </p>

            <CodeBlock code={`$boundary = '----=_Part_0_1234567_8901234';
$headers = "MIME-Version: 1.0" . "\\r\\n";
$headers .= "Content-Type: multipart/alternative; boundary=\"$boundary\"" . "\\r\\n";

$message = "--$boundary\\r\\n";
$message .= "Content-Type: text/plain; charset=utf-8\\r\\n";
$message .= "\\r\\n" . $plainTextContent . "\\r\\n";
$message .= "--$boundary\\r\\n";
$message .= "Content-Type: text/html; charset=utf-8\\r\\n";
$message .= "\\r\\n" . $htmlContent . "\\r\\n";
$message .= "--$boundary--";`} language="php" />

            {/* Section 3: Headers */}
            <h2 className="text-2xl font-semibold mb-4">الرؤوس</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                توفر الرؤوس معلومات فنية عن البريد الإلكتروني، مثل نوع المحتوى، الترميز، المستلمين في CC، أو المرفقات.
            </p>
            <p className="mb-4 leading-relaxed">
                تتطلب بعض خدمات البريد الإلكتروني رؤوسًا معينة، أو قد يتم تصنيف البريد الإلكتروني كرسالة غير مرغوب فيها. هذه الرؤوس غير مرئية للمستلم ولكن يمكن مشاهدتها في شفرة المصدر لعميل البريد الإلكتروني.
            </p>

            <h3 className="text-xl font-semibold mb-4">إعلان الرؤوس</h3>
            <p className="mb-4 leading-relaxed">
                يمكن تعيين الرؤوس باستخدام دمج السلاسل النصية أو مصفوفة مرتبطة. يُوصى بالطريقة الأخيرة من أجل تحسين القراءة والأمان.
            </p>
            <CodeBlock code={`# Example 1: دمج السلاسل النصية للرؤوس
$sHeaders  = 'MIME-Version: 1.0' . '\\r\\n';
$sHeaders .= 'Content-Type: text/html; charset=utf-8' . '\\r\\n';
$sHeaders .= 'From: Dave Loper <dave.loper@outlook.com>' . '\\r\\n';
$sHeaders .= 'Reply-to: Sales department <commercial@gardenly.com>' . '\\r\\n';
$sHeaders .= 'X-Mailer: PHP/' . phpversion() . '\\r\\n';

# Example 2: استخدام مصفوفة PHP للرؤوس
$aHeaders[] = 'MIME-Version: 1.0';
$aHeaders[] = 'Content-Type: text/html; charset=utf-8';
$aHeaders[] = 'From: Dave Loper <dave.loper@outlook.com>';
$aHeaders[] = 'Reply-to: Sales department <commercial@gardenly.com>';
$aHeaders[] = 'X-Mailer: PHP/' . phpversion();

# بناء الجملة البديل باستخدام المصفوفات المرتبطة
$aHeaders = array(
'MIME-Version' => '1.0',
'Content-Type' => 'text/html; charset=utf-8',
'From' => 'Dave Loper <dave.loper@outlook.com>',
'Reply-To' => 'Sales department <commercial@gardenly.com>',
'X-Mailer' => 'PHP/' . phpversion()
);`} language="php" />

            {/* Section 1: إرسال بريد إلكتروني مع مرفق */}
            <h2 className="text-2xl font-semibold mb-4">كيفية إرسال بريد إلكتروني مع مرفق باستخدام PHP</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                لإرسال بريد إلكتروني مع مرفق باستخدام PHP، يجب عليك تعيين نوع MIME الصحيح وترميز الملف باستخدام base64.
                فيما يلي مثال على الكود يوضح كيفية القيام بذلك.
            </p>

            <CodeBlock code={`<?php
// المستلمين 
$recipients = 'contact@outlook.com'; 

// الموضوع
$object = 'تأكيد التسجيل';  

// رؤوس إضافية 
$headers  = ''; 
$headers .= 'From: \'Dave Loper\' <dave.loper@outlook.com>\r\n';  
$headers .= 'MIME-Version: 1.0\r\n'; 
$headers .= 'Content-Type: multipart/mixed; ';
$headers .= 'boundary=\'ligne\'\r\n'; 

// الرسالة. 
$message  = ''; 
// الجزء الأول من الرسالة (نص)
$message .= '--ligne\r\n'; 
$message .= 'Content-Type: text/plain; '; 
$message .= 'charset=iso-8859-1\r\n '; 
$message .= 'Content-Transfer-Encoding: 8bit\r\n'; 
$message .= '\r\n';  
$message .= 'راجع المرفق.\r\n'; 
$message .= '\r\n';  

// الجزء الثاني من الرسالة (المرفق)
$message .= '--ligne\r\n'; 
$message .= 'Content-Type: application/octet-stream; '; 
$message .= 'name=\'print.php\'\r\n'; 
$message .= 'Content-Transfer-Encoding: base64\r\n'; 
$message .= 'Content-Disposition: attachment; '; 
$message .= 'filename=\'print.php\'\r\n'; 
$message .= '\r\n'; 

// قراءة الملف المرفق
$sFileAdd = file_get_contents('print.php'); 

// ترميز البيانات و تقسيمها
$sFileAdd = chunk_split(base64_encode($sFileAdd)); 

// جزء المرفق (دمج في الرسالة)
$message .= '$sFileAdd\r\n'; 
$message .= '\r\n'; 

// محدد نهاية الرسالة.
$message .= '--ligne--\r\n'; 

// الإرسال 
$Sending = mail($recipients, $object, $message, $headers); 

echo 'تم إرسال البريد الإلكتروني بنجاح إلى ' . $recipients;
?>`} language="php" />

            <p className="mb-4 leading-relaxed">
                تُستخدم دالة PHP `mail()` هنا مع الرؤوس التي تحدد نوع MIME لرسالة متعددة الأجزاء، التي تشمل كلًا من النص والمرفق. يتم قراءة الملف وترميزه باستخدام base64 قبل إضافته إلى البريد الإلكتروني.
            </p>

            {/* Section 2: المكتبات، الأطر، وخدمات البريد الإلكتروني */}
            <h2 className="text-2xl font-semibold mb-4">المكتبات، الأطر، وخدمات البريد الإلكتروني</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                لتبسيط عملية إرسال البريد الإلكتروني في مشروع PHP، يمكنك استخدام العديد من الأدوات. إحدى المكتبات الشهيرة مفتوحة المصدر هي <a href="https://github.com/PHPMailer/PHPMailer" target="_blank" className="text-blue-600">PHPMailer</a>.
            </p>

            لتثبيت وبدء استخدام PHPMailer، قم بمراجعة هذه <a href='php14_mails/phpmailer' target='_blank' className='text-blue-600'>المورد</a>

            <p className="mb-4 leading-relaxed">
                توفر الأطر الأخرى، مثل Symfony، أدوات أو إضافات أصلية، مثل مكتبة Mailer، لإدارة إرسال البريد الإلكتروني.
            </p>
            <p className="mb-4 leading-relaxed">
                بالنسبة لحملات البريد الإلكتروني الجماعية (مثل النشرات الإخبارية)، تقدم خدمات مثل Mailchimp و Sendinblue و Mailgun و SendGrid و MailJet أدوات قوية لضمان تسليم البريد الإلكتروني بشكل مثالي وتتبع (معدلات الفتح، الإلغاءات، إلخ). غالبًا ما تكون هذه الخدمات مدمجة في منصات إدارة المحتوى مثل WordPress.
            </p>

            {/* Section 3: أفضل الممارسات لإرسال البريد الإلكتروني */}
            <h2 className="text-2xl font-semibold mb-4">أفضل الممارسات لإرسال البريد الإلكتروني</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                لتجنب تصنيفك كمرسل بريد غير مرغوب فيه وضمان وصول رسائل البريد الإلكتروني إلى صندوق الوارد لدى المستلم، يجب اتباع أفضل الممارسات التالية:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>تأكد من أن تنسيق HTML صحيح.</li>
                <li>استخدم ترميز UTF-8 لبريدك الإلكتروني.</li>
                <li>جعل بريد HTML مستجيبًا بحيث يظهر بشكل جيد على كل من أجهزة الكمبيوتر والأجهزة المحمولة.</li>
                <li>تضمين رابط لإلغاء الاشتراك للمستخدم.</li>
                <li>توفير رابط لعرض البريد الإلكتروني بشكل صحيح في حال لم يتمكن عميل البريد الإلكتروني من عرضه بشكل جيد.</li>
            </ul>

            <p className="mb-4 leading-relaxed">
                يجب أن تكون على دراية بأن عنوان الـ IP الخاص بالخادم قد يتم إدراجه في القائمة السوداء كمرسل بريد غير مرغوب فيه إذا لم تتبع الممارسات الصحيحة. ومع ذلك، حتى الخادم المُعد بشكل صحيح يمكن أن يتم تصنيف رسائله كرسائل غير مرغوب فيها إذا لم يتم تفسير المحتوى بشكل جيد من قبل مرشحات البريد الإلكتروني.
            </p>

        </div >
    );
};

export default PHP_Mail;
