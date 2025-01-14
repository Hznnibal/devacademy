import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const PHPBasics: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">أساسيات والأخطاء الشائعة</h1>

            <h2 className="text-2xl font-semibold mb-4">ملاحظة مهمة:</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                تذكر أن جملة PHP يجب أن تنتهي دائمًا (باستثناء بعض الحالات الخاصة) بفاصلة منقوطة.
            </p>

            <h2 className="text-2xl font-semibold mb-4">جملة echo</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                أول تعليمة ستستخدمها على الأرجح هي <code className="bg-gray-200 text-red-600 px-1 rounded">echo</code>. إنها تقوم بعرض البيانات (توليد مخرجات HTML) بين علامات الاقتباس.
            </p>

            <CodeBlock code={`<html>
<body>
  <?php 
    echo "Hello World"; 
  ?> 
</body>
</html>`} />

            <h3 className="text-xl font-semibold mb-4">تمرين</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>أنشئ ملفًا باسم <code className="bg-gray-200 text-red-600 px-1 rounded">hello.php</code></li>
                <li>ضع الملف في المجلد: <code className="bg-gray-200 text-red-600 px-1 rounded">C:/wamp/www</code></li>
                <li>شغّل الملف في المتصفح: <code className="bg-gray-200 text-red-600 px-1 rounded">http://127.0.0.1/hello.php</code></li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">استخدام المتغيرات في echo</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                تتيح لك علامات الاقتباس المزدوجة تضمين المتغيرات وعلامات HTML مباشرة:
            </p>

            <CodeBlock code={`<?php
$hello = "Hello World";
echo "<b>$hello</b>";
?>`} language="php" />


            <p className="mb-4 leading-relaxed">
                لتضمين علامات الاقتباس المزدوجة داخل جملة echo باستخدام علامات اقتباس مزدوجة، يجب الهروب منها باستخدام الشرطة المائلة العكسية:
            </p>

            <CodeBlock code={`<?php
echo "Displaying a \" ";
?>`} language="php" />


            <h2 className="text-2xl font-semibold mb-4">الحروف الخاصة</h2>
            <div className="border-b border-gray-300 mb-6" />
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li><code className="bg-gray-200 text-red-600 px-1 rounded">\n</code>: سطر جديد</li>
                <li><code className="bg-gray-200 text-red-600 px-1 rounded">\r</code>: عودة السطر</li>
                <li><code className="bg-gray-200 text-red-600 px-1 rounded">\t</code>: تبويب</li>
            </ul>

            <CodeBlock code={`<?php
echo "Hello World\n";
?>`} language="php" />

            <h2 className="text-2xl font-semibold mb-4">التعليقات في PHP</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                يتم كتابة التعليقات في PHP بطريقة مشابهة لـ JavaScript:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li><code className="bg-gray-200 text-red-600 px-1 rounded">//</code> للتعليقات ذات السطر الواحد</li>
                <li><code className="bg-gray-200 text-red-600 px-1 rounded">/* */</code> للتعليقات متعددة الأسطر</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">دوال printf و sprintf</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                تُستخدم هذه الدوال لتنسيق السلاسل النصية.
            </p>

            <CodeBlock code={`<?php
$euro = 6.55957;
printf("%.2f FF<br />", $euro);

$money1 = 68.75;
$money2 = 54.35;
$money = $money1 + $money2;

echo "بدون printf: " . $money . "<br />";
$formatted = sprintf("%01.2f", $money);
echo "مع printf: " . $formatted . "<br />";

$year = "2002";
$month = "4";
$day = "5";
$date = sprintf("%04d-%02d-%02d", $year, $month, $day);
echo "التاريخ المنسق: " . $date;
?>`} language="php" />

            <p className="mb-4 leading-relaxed">
                استخدم <code className="bg-gray-200 text-red-600 px-1 rounded">printf</code> و <code className="bg-gray-200 text-red-600 px-1 rounded">sprintf</code> للحصول على تنسيق أفضل ووضوح أعلى في المخرجات.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-4">أنواع البيانات</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">يدعم PHP أنواع البيانات التالية:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>int (عدد صحيح)</strong>: للأرقام الصحيحة.</li>
                <li><strong>float, double, real</strong>: للأرقام العشرية.</li>
                <li><strong>string</strong>: للنصوص أو سلاسل الأحرف.</li>
                <li><strong>boolean</strong>: للقيم الصحيحة (true) أو الخاطئة (false).</li>
                <li><strong>array</strong>: للمصفوفات أو مجموعات القيم.</li>
                <li><strong>object</strong>: للكائنات.</li>
            </ul>
            <p className="text-lg leading-relaxed mb-4">أنواع المتغيرات في PHP تحدد أثناء التهيئة، وليس الإعلان:</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$a = 12;       // عدد صحيح
$b = "Hello"; // سلسلة نصية`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-4 mt-2">المشغلات</h2>

            <h3 className="text-xl font-semibold mt-4">المشغلات الرياضية</h3>
            <ul className="list-disc list-inside space-y-2">
                <li><code>$a + $b</code>: الجمع</li>
                <li><code>$a - $b</code>: الطرح</li>
                <li><code>$a * $b</code>: الضرب</li>
                <li><code>$a / $b</code>: القسمة</li>
                <li><code>$a % $b</code>: باقي القسمة</li>
                <li><code>$a++</code>: الزيادة</li>
                <li><code>$a--</code>: النقصان</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">مشغلات السلاسل النصية</h3>
            <p className="text-lg leading-relaxed mb-4">المشغل النقطة (<code>.</code>) يربط بين سلسلتين نصيتين:</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$a = "Winter";
echo $a . " is coming!";`}</code>
            </pre>
            <p className="text-lg leading-relaxed mb-4">الناتج: <strong>Winter is coming!</strong></p>

            <h3 className="text-xl font-semibold mt-4">مشغلات التعيين</h3>
            <p className="text-lg leading-relaxed mb-4">المشغل الأساسي للتعيين هو <code>=</code>. يقوم بتعيين القيمة الموجودة على اليمين إلى المتغير الموجود على اليسار.</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$a = 0;        // $a يساوي 0
$a += 4;       // $a يساوي 4
$a -= 2;       // $a يساوي 2`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-4">مشغلات المقارنة</h3>
            <ul className="list-disc list-inside space-y-2">
                <li><code>$a == $b</code>: صحيح إذا كان $a يساوي $b.</li>
                <li><code>$a === $b</code>: صحيح إذا كان $a يساوي $b وكلاهما من نفس النوع.</li>
                <li><code>$a != $b</code>: صحيح إذا كان $a لا يساوي $b.</li>
                <li><code>$a {`<`} $b</code>: صحيح إذا كان $a أقل من $b.</li>
                <li><code>$a {`>`} $b</code>: صحيح إذا كان $a أكبر من $b.</li>
                <li><code>$a {`<=`} $b</code>: صحيح إذا كان $a أقل من أو يساوي $b.</li>
                <li><code>$a {`>=`} $b</code>: صحيح إذا كان $a أكبر من أو يساوي $b.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">المشغلات المنطقية</h3>
            <ul className="list-disc list-inside space-y-2">
                <li><code>$a and $b</code>: صحيح إذا كان كلاهما $a و $b صحيحين (AND).</li>
                <li><code>$a or $b</code>: صحيح إذا كان إما $a أو $b صحيحين (OR).</li>
                <li><code>$a xor $b</code>: صحيح إذا كان إما $a أو $b صحيح، ولكن ليس كلاهما (XOR).</li>
                <li><code>$a && $b</code>: صحيح إذا كان كلاهما $a و $b صحيحين (AND).</li>
                <li><code>$a || $b</code>: صحيح إذا كان إما $a أو $b صحيحين (OR).</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 mt-4">المتغيرات في PHP</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">في PHP، جميع المتغيرات تبدأ بعلامة <code>$</code>، باستثناء الثوابت والمتغيرات الخاصة.</p>
            <p className="text-lg leading-relaxed mb-4">يمكن أن تكون المتغيرات من الأنواع التالية:</p>
            <ul className="list-disc list-inside space-y-2">
                <li>سلاسل نصية (متغيرات أبجدية رقمية)</li>
                <li>أعداد صحيحة (متغيرات عددية)</li>
                <li>مصفوفات</li>
                <li>كائنات</li>
                <li>قيم منطقية</li>
            </ul>


            <h2 className="text-2xl font-semibold mb-4 mt-4">متغيرات النص</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">القيم النصية يمكن أن تحتوي على حروف، أرقام، أو رموز.</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$variable = "Hello";
echo $variable;`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-4 mt-4">المتغيرات الرقمية</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">يمكن للمتغيرات الرقمية تخزين الأعداد الصحيحة أو العشرية.</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$var1 = 123;
$var2 = 14.35;`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-4 mt-4">المصفوفات</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">المصفوفات في PHP تشبه المصفوفات في JavaScript وتخزن مجموعة من القيم.</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$colors[0] = "red";
$colors[1] = "blue";
$colors[2] = "white";
$colors[3] = "black";
echo $colors[2]; // يطبع "white"`}</code>
            </pre>
            <p className="text-lg leading-relaxed mb-4">ملاحظة: تبدأ فهارس المصفوفات من 0.</p>

            <h2 className="text-2xl font-semibold mb-4 mt-4">المتغيرات البولية</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">يمكن أن تحتوي المتغيرات البولية على قيمتين فقط: true أو false.</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$var1 = false;
$var2 = true;`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-4 mt-4">المتغيرات المتغيرة</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">من الممكن إنشاء متغيرات بشكل ديناميكي باستخدام المتغيرات المتغيرة.</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$var1 = "hello";
$$var1 = "world";
echo $hello; // يطبع "world"`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-4 mt-4">المتغيرات الفائقة</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">المتغيرات الفائقة هي متغيرات معرفة مسبقًا ومتاحة في جميع المجالات.</p>
            <ul className="list-disc list-inside space-y-2">
                <li><code>$_SERVER</code>: معلومات عن الرؤوس، المسارات، وأماكن السكربتات.</li>
                <li><code>$_GET</code>: البيانات المرسلة عبر طريقة HTTP GET.</li>
                <li><code>$_POST</code>: البيانات المرسلة عبر طريقة HTTP POST.</li>
                <li><code>$_FILES</code>: تحميل الملفات عبر HTTP POST.</li>
                <li><code>$_COOKIE</code>: ملفات تعريف الارتباط (cookies) في HTTP.</li>
                <li><code>$_SESSION</code>: متغيرات الجلسة.</li>
                <li><code>$_REQUEST</code>: البيانات المرسلة عبر طريقتي HTTP GET أو POST.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 mt-4">تحويل النوع</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">يمكنك إجبار نوع المتغير باستخدام دالة <code>settype()</code>.</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$a = 15.125863;
settype($a, "integer");
echo $a; // يطبع 15`}</code>
            </pre>
            <p className="text-lg leading-relaxed mb-4">الدوال الأخرى تشمل:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><code>intval()</code>: تحويل إلى عدد صحيح.</li>
                <li><code>strval()</code>: تحويل إلى نص.</li>
                <li><code>doubleval()</code>: تحويل إلى عدد عشري.</li>
            </ul>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$a = 6.32172;
$b = intval($a);
$c = doubleval($a);
echo $a - $b - $c;`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-4 mt-4">الثوابت</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">الثابت هو متغير لا يمكن تغيير قيمته خلال تنفيذ التطبيق.</p>
            <p className="text-lg leading-relaxed mb-4">يتم تعريف الثوابت باستخدام دالة <code>define()</code>.</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`define("EURO", 6.55957);
echo EURO; // يطبع 6.55957`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-4 mt-4">الميتاثوابت ودوال تصحيح الأخطاء</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">الميتاثوابت توفر معلومات عن الملف والسطر الذي يتم تنفيذه حاليًا:</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`echo "الملف: " . __FILE__ . ", السطر: " . __LINE__;`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-4">var_dump()</h3>
            <p className="text-lg leading-relaxed mb-4">يعرض معلومات مفصلة عن متغير:</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$myVar = "hello";
var_dump($myVar);`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-4">error_log()</h3>
            <p className="text-lg leading-relaxed mb-4">يسجل رسائل الأخطاء المخصصة:</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$myVar = "KO";
if ($myVar == "OK") {
    echo "كل شيء جيد<br>"
} else {
    echo "ليس جيدًا<br>";
    $message = "ليس جيدًا " . __FILE__ . " " . __LINE__;
    error_log($message);
}`}</code>
            </pre>
            <h2 className="text-2xl font-semibold mb-4 mt-4">المتغيرات النظامية</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">المتغيرات النظامية هي متغيرات قيمها معرفة من قبل الخادم. لا يمكن للمستخدم تعديل هذه القيم.</p>
            <p className="text-lg leading-relaxed mb-4">جميع المتغيرات النظامية موجودة في الـ <code>$_SERVER</code> superglobal.</p>

            <h2 className="text-2xl font-semibold mb-4 mt-4">أمثلة</h2>
            <div className="border-b border-gray-300 mb-6" />
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`echo $_SERVER["SERVER_NAME"]; // يعرض اسم المضيف، localhost في WAMP
var_dump($_SERVER); // يعرض جميع المتغيرات في مصفوفة $_SERVER`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-4 mt-4">المتغيرات المفيدة في $_SERVER</h2>
            <div className="border-b border-gray-300 mb-6" />
            <table className="table-auto w-full text-left">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">المتغير</th>
                        <th className="border px-4 py-2">الوصف</th>
                        <th className="border px-4 py-2">المثال</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">DOCUMENT_ROOT</td>
                        <td className="border px-4 py-2">المسار الفعلي للدليل الجذري.</td>
                        <td className="border px-4 py-2">c:/wamp/www</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">HTTP_ACCEPT_LANGUAGE</td>
                        <td className="border px-4 py-2">رمز لغة الزائر.</td>
                        <td className="border px-4 py-2">fr</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">HTTP_USER_AGENT</td>
                        <td className="border px-4 py-2">المتصفح والإصدار المستخدم.</td>
                        <td className="border px-4 py-2">Mozilla/5.0</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">REMOTE_ADDR</td>
                        <td className="border px-4 py-2">عنوان IP للزائر.</td>
                        <td className="border px-4 py-2">200.10.41.214</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">SERVER_NAME</td>
                        <td className="border px-4 py-2">اسم المضيف للخادم.</td>
                        <td className="border px-4 py-2">localhost</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">SERVER_PORT</td>
                        <td className="border px-4 py-2">منفذ الاتصال بالخادم.</td>
                        <td className="border px-4 py-2">80</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">REQUEST_METHOD</td>
                        <td className="border px-4 py-2">طريقة الطلب المستخدمة.</td>
                        <td className="border px-4 py-2">GET, POST</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">SCRIPT_NAME</td>
                        <td className="border px-4 py-2">اسم السكربت الحالي.</td>
                        <td className="border px-4 py-2">/index.php</td>
                    </tr>
                </tbody>
            </table>

            <h2 className="text-2xl font-semibold mb-4 mt-4">التصحيح باستخدام $_SERVER</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">استخدم الأمثلة التالية لاختبار وتصحيح متغيرات الخادم:</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`echo "عنوان الخادم: " . $_SERVER['SERVER_ADDR'];
echo "وقت الطلب: " . $_SERVER['REQUEST_TIME'];`}</code>
            </pre>

            <p className="mb-4 mt-4">توفر هذه القيم رؤى مفيدة لتصحيح الأخطاء وتتبع نشاط الزوار على الخادم.</p>

            <a className="text-blue-600 text-xl ml-8" href='https://www.php.net/manual/en/reserved.variables.server.php' >التوثيق</a>

        </div >
    );
};

export default PHPBasics;
