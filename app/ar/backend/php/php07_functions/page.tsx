import { CodeBlock } from "@/components/CodeBlock/code-block";

const FunctionsPage = () => {
    return (
        <div className="container mx-auto p-6">

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">الدوال</h2>
                <p className="text-lg mt-2">
                    الدالة هي كتلة من الشيفرة في PHP يمكنها أداء أي مهمة. يمكن أن تتضمن هذه الشيفرة أي بيان PHP صالح. تم تصميم الدالة لأداء مهمة محددة مسبقًا.
                </p>

                <h3 className="text-xl font-semibold mt-4">أنواع الدوال</h3>
                <p className="text-lg mt-2">
                    هناك نوعان من الدوال:
                </p>
                <ul className="list-disc pl-6">
                    <li><strong>الدوال المدمجة:</strong> هذه توفرها اللغة بشكل افتراضي. يحتوي PHP على المئات منها.</li>
                    <li><strong>الدوال التي يعرفها المستخدم:</strong> هذه مكتوبة بواسطة المطور ويمكن أن تشمل بالطبع الدوال المدمجة.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">استخدام دالة مدمجة</h3>
                <p className="text-lg mt-2">
                    في المثال أدناه، نستخدم دالة `ucfirst()`. هذه الدالة تحوّل أول حرف في السلسلة إلى حرف كبير:
                </p>
                <CodeBlock code={`<?php
$texte = ucfirst("Hello World");

echo $texte; // Output: Hello world
?>`} language="php" />

                <p className="mt-4">
                    ستحتوي المتغير `$texte` على القيمة: `Hello world`، مع تحويل أول حرف إلى حرف كبير. استخدام الدوال له العديد من المزايا، بما في ذلك تجنب تكرار تسلسل من الشيفرة، مما يسبب غالبًا مشاكل كبيرة.
                </p>
                <p className="mt-4">
                    كما أن الدوال تحسن من قابلية قراءة الشيفرة المصدرية، وتزيد من الإنتاجية، وتسهّل الصيانة.
                </p>

                <h3 className="text-xl font-semibold mt-4">تعريف دالة</h3>
                <p className="text-lg mt-2">
                    لتعريف دالة، نستخدم الكلمة المفتاحية `function` تليها اسم الدالة (يمكنك اختيار الاسم)، وأقواس (مطلوبة حتى وإن كانت فارغة) لحفظ أي معلمات محتملة. مثال على دالة بسيطة:
                </p>
                <CodeBlock code={`<?php
function hello() {
    echo "Hello";
}

hello(); // Output: Hello
?>`} language="php" />

                <h3 className="text-xl font-semibold mt-4">استخدام المعلمات في الدوال</h3>
                <p className="text-lg mt-2">
                    يمكننا أيضًا تمرير معلمة إلى الدالة. إليك مثال:
                </p>
                <CodeBlock code={`<?php
function hello($firstName) {
    echo "Hello " . $firstName;
}

hello("Dave"); // Output: Hello Dave
?>`} language="php" />

                <h3 className="text-xl font-semibold mt-4">استخدام معلمات متعددة</h3>
                <p className="text-lg mt-2">
                    يمكنك أيضًا استخدام معلمات متعددة داخل الأقواس. إليك مثال:
                </p>
                <CodeBlock code={`<?php
function hello($firstName, $lastName) {
    echo "Hello " . $firstName . " " . $lastName;
}

hello("Dave", "LOPER"); // Output: Hello Dave LOPER
?>`} language="php" />

                <p className="mt-4">
                    ستعرض الدالة `Hello Dave LOPER`. في الممارسة العملية، القيم داخل الأقواس هي معلمات الدالة.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">نطاق المتغيرات</h2>
                <p className="text-lg mt-2">
                    المتغير الذي يتم تعريفه داخل دالة لا يمكن الوصول إليه خارجها. بالمثل، المتغير الذي يتم تعريفه خارج دالة لا يمكن الوصول إليه داخل الدالة. يُطلق على هذا المفهوم نطاق المتغيرات.
                </p>

                <h3 className="text-xl font-semibold mt-4">المتغيرات العالمية والثابتة</h3>
                <p className="text-lg mt-2">
                    يوفر PHP تصريحين للوصول إلى المتغيرات خارج نطاقها المحلي: `global` و `static`.
                </p>

                <h4 className="text-lg font-semibold mt-4">المثال 1: المتغيرات العالمية</h4>
                <CodeBlock code={`<?php
$a = $b = 2;

function sum() {
$c = $a + $b;
echo "$c";
}

sum(); // النتيجة ستكون 0، لأن $a و $b غير معروفيين داخل الدالة.
?>`} language="php" />

                <p className="mt-4">
                    في المثال أعلاه، ستكون النتيجة 0 لأن المتغيرات `$a` و `$b` غير معروفة داخل دالة `sum()`.
                </p>
                <p className="mt-4">
                    لاستخدام هذه المتغيرات داخل الدالة، يجب الإعلان عنها كمتغيرات عالمية:
                </p>

                <CodeBlock code={`<?php
$a = $b = 2;

function sum() {
global $a, $b;
$b = $a + $b;
}

sum();

echo $b . "<br>"; // النتيجة ستكون 4
?>`} language="php" />

                <p className="mt-4">
                    هذه المرة، يمكن للدالة الوصول إلى المتغيرات العالمية `$a` و `$b`، وستكون النتيجة `4`.
                </p>

                <h4 className="text-lg font-semibold mt-4">المثال 2: المتغيرات الثابتة</h4>
                <p className="text-lg mt-2">
                    يتم استخدام الكلمة المفتاحية `static` داخل دالة للاحتفاظ بقيمة المتغير عبر العديد من استدعاءات الدالة.
                </p>
                <CodeBlock code={`<?php
function Test() {
$a = 0;
echo $a . "<br>";
$a++;
}

Test(); // النتيجة: 0
Test(); // النتيجة: 0، لأن $a يتم إعادة تهيئته إلى 0 في كل استدعاء
?>`} language="php" />

                <p className="mt-4">
                    في المثال أعلاه، في كل مرة يتم فيها استدعاء الدالة، يتم إعادة تهيئة المتغير `$a` إلى 0، لذلك ستكون النتيجة دائمًا 0.
                </p>

                <p className="mt-4">
                    للاحتفاظ بقيمة المتغير بين الاستدعاءات، نستخدم الكلمة المفتاحية `static`:
                </p>

                <CodeBlock code={`<?php
function Test1() {
static $a = 0;
echo "$a<br />";
$a++;
}

Test1(); // النتيجة: 0
Test1(); // النتيجة: 1
Test1(); // النتيجة: 2
?>`} language="php" />

                <p className="mt-4">
                    هذه المرة، سيحتفظ المتغير `$a` بقيمته بين الاستدعاءات، مما ينتج عنه النتيجة: `0`, `1`, `2`، وهكذا.
                </p>

                <h3 className="text-xl font-semibold mt-4">مكتبات الدوال</h3>
                <p className="text-lg mt-2">
                    مكتبة الدوال هي مجموعة من الدوال التي تم تجميعها في ملف واحد. بشكل افتراضي، الدوال التي ننشئها تكون متاحة فقط في الملف الذي تم تعريفها فيه. لاستخدامها في برنامج آخر، ستحتاج إلى نسخها. ومع ذلك، هناك طريقة لجعل الدوال متاحة عبر جميع برامجك عن طريق تجميعها في ملف خارجي وإدراج ذلك الملف في السكربت الرئيسي.
                </p>
                <h4 className="text-lg font-semibold mt-4">إنشاء مكتبة دوال</h4>
                <p className="text-lg mt-2">
                    إليك كيفية إنشاء مكتبة دوال:
                </p>
                <CodeBlock code={`<?php
function function1() {
// الشيفرة
}

function function2() {
// الشيفرة
}
?>`} language="php" />

                <p className="mt-4">
                    احفظ هذا الملف باسم، على سبيل المثال، `myFunctions.php`. يمكنك إضافة أي عدد من الدوال التي تحتاجها لتطبيقاتك.
                </p>

                <h4 className="text-lg font-semibold mt-4">استخدام مكتبة الدوال</h4>
                <p className="text-lg mt-2">
                    لاستخدام الدوال من هذه المكتبة في السكربت الرئيسي، استخدم عبارة `require` أو `include`:
                </p>
                <CodeBlock code={`<?php
require('myFunctions.php');

// الآن يمكنك استخدام الدوال من myFunctions.php
?>`} language="php" />

                <p className="mt-4">
                    من خلال تضمين `myFunctions.php`، ستكون جميع الدوال المعرفة فيها متاحة للاستخدام في السكربت الخاص بك.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">المجموعات الرئيسية للدوال في PHP</h2>

                <h3 className="text-xl font-semibold mt-4">الدوال الرياضية</h3>
                <p className="text-lg mt-2">
                    يوفر PHP مجموعة شاملة من الدوال الرياضية التي تغطي معظم الاحتياجات لإنشاء التطبيقات. تشمل هذه الدوال:
                </p>
                <ul className="list-disc pl-6 text-lg mt-2">
                    <li>المعاملات الرياضية (الجمع، الطرح، الضرب، القسمة، الأسس...)</li>
                    <li>التقريب، القيمة المطلقة، الحد الأدنى، الحد الأقصى...</li>
                    <li>الدوال المثلثية (جيب، جيب التمام، ظل) ، اللوغاريتمات...</li>
                    <li>توليد الأرقام العشوائية</li>
                    <li>التحويلات (ثنائي، عشري، سداسي عشري...)</li>
                    <li>تنسيق الأرقام (كسلاسل نصية، إلخ)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">دوال إدارة السلاسل النصية</h3>
                <p className="text-lg mt-2">
                    يوفر PHP مجموعة كاملة من الدوال للتعامل مع السلاسل النصية. تشمل هذه الدوال:
                </p>
                <ul className="list-disc pl-6 text-lg mt-2">
                    <li>مقارنة السلاسل النصية</li>
                    <li>تحديد طول السلسلة النصية</li>
                    <li>تقسيم السلسلة النصية، استخراج أجزاء منها</li>
                    <li>تشفير السلاسل النصية/البيانات</li>
                    <li>استبدال أجزاء من السلاسل النصية</li>
                    <li>البحث عن مكونات في السلسلة النصية</li>
                    <li>تحويل الحروف المحددة إلى رموز HTML</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">دوال إدارة الملفات والدلائل</h3>
                <p className="text-lg mt-2">
                    تتيح لك دوال إدارة الملفات والدلائل في PHP:
                </p>
                <ul className="list-disc pl-6 text-lg mt-2">
                    <li>إنشاء وتعديل وحذف وإعادة تسمية ونقل الملفات من أي نوع (نصية، CSV، صور، PDFs...)</li>
                    <li>إنشاء وإعادة تسمية وحذف ونقل الدلائل</li>
                    <li>قراءة وإضافة وتعديل وحذف محتويات الملفات</li>
                    <li>قراءة وتعديل البيانات الوصفية للملفات أو الدلائل (تواريخ الإنشاء/التعديل/الوصول، الاسم، النوع، الحجم، الأذونات...)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">دوال إنشاء الصور الديناميكية</h3>
                <p className="text-lg mt-2">
                    يتضمن PHP مكتبة من الدوال لإنشاء الصور ومعالجتها تسمى GD ("Gif Draw"). توفر GD العديد من الميزات:
                </p>
                <ul className="list-disc pl-6 text-lg mt-2">
                    <li>إنشاء الصور الديناميكية (الأشكال الهندسية، الصور المصغرة، الرسوم البيانية...)</li>
                    <li>إدارة الألوان داخل الصورة</li>
                    <li>تمرير معلومات عن الصورة (العرض × الارتفاع)</li>
                    <li>قص وتدوير الصور (التدوير بزاوية دقيقة)</li>
                    <li>إضافة نصوص، دمج/تراكب الصور (على سبيل المثال، إضافة شعار إلى صورة لإظهار أنها من موقع معين)</li>
                    <li>التعامل مع صيغ الصور المختلفة (GIF، PNG، JPEG، TIFF، RAW...)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">الدوال الخاصة بالإنترنت</h3>
                <p className="text-lg mt-2">
                    تم تصميم PHP للويب، ويوفر مجموعة من الدوال المخصصة للاستخدام على الإنترنت، بما في ذلك:
                </p>
                <ul className="list-disc pl-6 text-lg mt-2">
                    <li>دوال معالجة URL</li>
                    <li>قراءة صفحات HTML (باستخدام مكتبة CURL، على سبيل المثال)</li>
                    <li>حماية الوصول إلى صفحات الويب: الجلسات، تشفير كلمات المرور (والتي سنتناولها لاحقًا في الدورة)</li>
                    <li>إرسال البريد الإلكتروني (السلسلة الكاملة)</li>
                    <li>دوال إدارة الكوكيز</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">بعض الدوال المفيدة</h2>
                <table className="min-w-full mt-4 border-collapse">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2 text-left">الدالة</th>
                            <th className="border px-4 py-2 text-left">الوصف</th>
                            <th className="border px-4 py-2 text-left">كود PHP</th>
                            <th className="border px-4 py-2 text-left">النتيجة</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">substr()</td>
                            <td className="border px-4 py-2">تُرجع جزءًا من السلسلة النصية</td>
                            <td className="border px-4 py-2">$s = substr("QOTSA", 2, 3);</td>
                            <td className="border px-4 py-2">TSA</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">addslashes()</td>
                            <td className="border px-4 py-2">تضيف شرطات مائلة قبل الحروف الخاصة</td>
                            <td className="border px-4 py-2">$s = addslashes("L'a");</td>
                            <td className="border px-4 py-2">L\'a</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">stripslashes()</td>
                            <td className="border px-4 py-2">تزيل الشرطات المائلة قبل الحروف الخاصة</td>
                            <td className="border px-4 py-2">$s = stripslashes("L\'a");</td>
                            <td className="border px-4 py-2">L'a</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">ceil()</td>
                            <td className="border px-4 py-2">ترجع أقرب عدد صحيح أكبر من العدد المدخل (مثلًا، للعدد 12.1)</td>
                            <td className="border px-4 py-2">$s = ceil("12.1");</td>
                            <td className="border px-4 py-2">13</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">htmlentities()</td>
                            <td className="border px-4 py-2">تستبدل الحروف مع ما يعادلها في HTML (إذا كانت موجودة)</td>
                            <td className="border px-4 py-2">$s = htmlentities("{`<`}");</td>
                            <td className="border px-4 py-2">&lt;</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">strstr()</td>
                            <td className="border px-4 py-2">يبحث عن أول حرف 'p' في السلسلة النصية ويعرض بقية السلسلة، بما في ذلك 'p'</td>
                            <td className="border px-4 py-2">$s = strstr ("webmas-ter@php.cdsi.fr.st", "p");</td>
                            <td className="border px-4 py-2">php.cdsi.fr.st</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">strlen()</td>
                            <td className="border px-4 py-2">ترجع طول السلسلة النصية</td>
                            <td className="border px-4 py-2">$s = strlen("lachainedecaracteres");</td>
                            <td className="border px-4 py-2">20</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">strtolower()</td>
                            <td className="border px-4 py-2">تحول جميع الحروف إلى أحرف صغيرة</td>
                            <td className="border px-4 py-2">$s = strtolower("LA CHAINE dE caRActERes");</td>
                            <td className="border px-4 py-2">la chaine de caracteres</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">strtoupper()</td>
                            <td className="border px-4 py-2">تحول جميع الحروف إلى أحرف كبيرة</td>
                            <td className="border px-4 py-2">$s = strtoupper("LA CHAINE dE caRActERes")</td>
                            <td className="border px-4 py-2">LA CHAINE DE CARACTERES</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">str_replace()</td>
                            <td className="border px-4 py-2">تستبدل حرفًا بآخر في السلسلة النصية (حساس لحالة الأحرف)</td>
                            <td className="border px-4 py-2">$s = str_replace("a","o","Lalala");</td>
                            <td className="border px-4 py-2">Lololo</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">trim()</td>
                            <td className="border px-4 py-2">تزيل المسافات البيضاء (المسافات، الأسطر الجديدة، عودة المحارف) من بداية ونهاية السلسلة النصية</td>
                            <td className="border px-4 py-2">$s = trim(" Hello world ");</td>
                            <td className="border px-4 py-2">Hello world</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">ucfirst()</td>
                            <td className="border px-4 py-2">تحول الحرف الأول من السلسلة النصية إلى حرف كبير</td>
                            <td className="border px-4 py-2">$s = ucfirst("Hello world");</td>
                            <td className="border px-4 py-2">Hello world</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">ucwords()</td>
                            <td className="border px-4 py-2">تحول أول حرف من كل كلمة في السلسلة النصية إلى حرف كبير</td>
                            <td className="border px-4 py-2">$s = ucwords("Hello world");</td>
                            <td className="border px-4 py-2">Hello world</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">strpos()</td>
                            <td className="border px-4 py-2">يحدد موقع أول ظهور لحرف. يعيد عدد المحارف التي تسبق هذا الحرف (هنا 4)</td>
                            <td className="border px-4 py-2">$s = strpos("abcdef","e");</td>
                            <td className="border px-4 py-2">4</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">join()</td>
                            <td className="border px-4 py-2">يربط عناصر المصفوفة إلى سلسلة نصية</td>
                            <td className="border px-4 py-2">$arr = array("john", "paul", "georges", "ringo"); echo join(",",$arr);</td>
                            <td className="border px-4 py-2">"john,paul,georges,ringo"</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">preg_match()</td>
                            <td className="border px-4 py-2">يتحقق إذا كانت السلسلة تحتوي على أخرى (مثلًا، يتحقق مما إذا كانت "ABCDE" تحتوي على "BCD"). يمكن البحث باستخدام التعابير النمطية</td>
                            <td className="border px-4 py-2">preg_match ("BCD","ABCDEF")</td>
                            <td className="border px-4 py-2">ترجع 1 (TRUE) إذا تم العثور عليها، 0 (FALSE) خلاف ذلك</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">التمارين</h2>

                <h3 className="text-xl font-medium mt-4">1. دالة إنشاء رابط</h3>
                <p className="text-lg leading-relaxed mb-4">اكتب دالة تقوم بإنشاء رابط.</p>
                <p className="text-lg leading-relaxed mb-4">يجب أن تأخذ الدالة معطيين: الرابط والعنوان.</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {`function lien(url, title) {
    return \`<a href="\${url}">\${title}</a>\`;
}

// مثال
lien("https://www.reddit.com/", "Reddit Hug");`}
                </pre>
                <p className="text-lg leading-relaxed mb-4">عند استدعاء هذه الدالة بهذه الطريقة، يجب أن تقوم بإنشاء:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"<a href=\"https://www.reddit.com/\">Reddit Hug</a>"}
                </pre>

                <h3 className="text-xl font-medium mt-4">2. مجموع القيم في مصفوفة</h3>
                <p className="text-lg leading-relaxed mb-4">اكتب دالة لحساب مجموع القيم في مصفوفة.</p>
                <p className="text-lg leading-relaxed mb-4">يجب أن تأخذ الدالة معطى مصفوفة.</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {`function somme(tab) {
    return tab.reduce((acc, val) => acc + val, 0);
}

// مثال
const tab = [4, 3, 8, 2];
const resultat = somme(tab);`}
                </pre>
                <p className="text-lg leading-relaxed mb-4">يجب أن يكون النتيجة:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"17"}
                </pre>

                <h3 className="text-xl font-medium mt-4">3. التحقق من تعقيد كلمة المرور</h3>
                <p className="text-lg leading-relaxed mb-4">اكتب دالة للتحقق من تعقيد كلمة المرور.</p>
                <p className="text-lg leading-relaxed mb-4">يجب أن تأخذ الدالة معطى من النوع سلسلة نصية. وسوف تعيد قيمة منطقية صحيحة إذا كانت كلمة المرور تستوفي القواعد التالية:</p>
                <ul className="list-disc ml-6">
                    <li>طولها على الأقل 8 أحرف</li>
                    <li>تحتوي على رقم واحد على الأقل</li>
                    <li>تحتوي على حرف كبير وآخر صغير على الأقل</li>
                </ul>
                <pre className="bg-gray-200 p-4 rounded">
                    {`function complex_password(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
}

// مثال
const resultat = complex_password("TopSecret42");`}
                </pre>
                <p className="text-lg leading-relaxed mb-4">يجب أن تكون النتيجة:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"true"}
                </pre>
            </section>

        </div>
    );
};


export default FunctionsPage;
