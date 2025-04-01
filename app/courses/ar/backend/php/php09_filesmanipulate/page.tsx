import React from 'react';

const IntroPHP: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <section className="mb-6">
                <h2 className="text-2xl font-semibold">الملفات</h2>

                <h3 className="text-xl font-medium mt-4">فتح ملف</h3>
                <p className="text-lg leading-relaxed mb-4">قبل الغوص في أمثلة التعامل مع الملفات في PHP، دعونا نلقي نظرة على الطرق المختلفة لفتح ملف.</p>

                <p className="text-lg leading-relaxed mb-4">إليك الأوضاع الرئيسية لفتح ملف في PHP:</p>
                <ul className="list-disc ml-6">
                    <li><strong>قراءة فقط من بداية الملف ("r")</strong>: $fp = fopen(string file, "r");</li>
                    <li><strong>كتابة فقط من بداية الملف ("w")</strong>: $fp = fopen(string file, "w");</li>
                    <li><strong>كتابة فقط من نهاية الملف ("a")</strong>: $fp = fopen(string file, "a");</li>
                </ul>

                <h4 className="text-lg font-medium mt-4">أمثلة:</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$fp = fopen('/home/rasmus/file.txt', 'r');"}
                    {"$fp = fopen('../exemple.txt', 'a');"}
                    {"$fp = fopen('http://www.php.net/', 'r');"}
                    {"$fp = fopen('ftp://user:password@example.com/', 'w');"}
                </pre>

                <p className="text-lg leading-relaxed mb-4">لاحظ أن الملفات يمكن أن تكون من أي نوع (HTML، TXT، PHP، إلخ)، ويمكن استخدام هذه الأوامر للتلاعب بها.</p>

                <h3 className="text-xl font-medium mt-4">الأوامر الرئيسية</h3>

                <h4 className="text-lg font-medium mt-4">الكتابة في ملف</h4>
                <p className="text-lg leading-relaxed mb-4">دالة <strong>fputs()</strong> تسمح بالكتابة في ملف. تتطلب الدالة معلمين أساسيين، ومعلم ثالث اختياري:</p>
                <ul className="list-disc ml-6">
                    <li><strong>$fp</strong>: متغير يمثل المورد الخاص بالملف الذي تم إرجاعه بواسطة <strong>fopen()</strong></li>
                    <li><strong>$str</strong>: السلسلة النصية (المحتوى) التي سيتم كتابتها في الملف</li>
                    <li><strong>الطول</strong>: معلم اختياري يحدد طول السلسلة النصية</li>
                </ul>

                <h4 className="text-lg font-medium mt-4">مثال:</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"// إعلان متغير سيتم كتابة قيمته في الملف"}
                    {"$myVar = 'Hello World';"}
                    {"// فتح الملف للكتابة فقط"}
                    {"$fp = fopen('test.txt', 'a');"}
                    {"// كتابة محتوى $myVar"}
                    {"fputs($fp, $myVar);"}
                    {"// إغلاق الملف"}
                    {"fclose($fp);"}
                </pre>

                <p className="text-lg leading-relaxed mb-4">افتح الملف <code>test.txt</code> وتحقق من أن العبارة "Hello World" قد تم كتابتها فيه.</p>

                <h4 className="text-lg font-medium mt-4">القراءة من ملف</h4>
                <p className="text-lg leading-relaxed mb-4">دالة <strong>fgets()</strong> تسمح بالقراءة من ملف. تتطلب الدالة معلمين:</p>
                <ul className="list-disc ml-6">
                    <li><strong>$fp</strong>: المورد الخاص بالملف الذي تم إرجاعه بواسطة <strong>fopen()</strong></li>
                    <li><strong>الطول</strong>: طول البيانات التي سيتم قراءتها (بالبايت)</li>
                </ul>

                <h4 className="text-lg font-medium mt-4">مثال:</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"// فتح الملف للقراءة فقط"}
                    {"$fp = fopen('test.txt', 'r');"}
                    {"// التكرار حتى نهاية الملف"}
                    {"while (!feof($fp)) {"}
                    {"    // قراءة سطر، وتعيينه إلى المتغير $line"}
                    {"    $line = fgets($fp, 4096);"}
                    {"    echo $line . '<br>'; "}
                    {"}"}
                </pre>

                <p className="text-lg leading-relaxed mb-4">في هذا المثال، تقوم <strong>fgets()</strong> بقراءة كل سطر حتى تجد حرف السطر الجديد (<code>\n</code>). من الأفضل تعيين معلمة الطول إلى 4096 بايت لضمان قراءة السطر بالكامل. بدلاً من ذلك، يمكنك استخدام دالة <strong>file()</strong> لقراءة الملف بالكامل دفعة واحدة.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">وظائف إدارة الملفات الأخرى</h2>

                <h3 className="text-xl font-medium mt-4">دالة basename()</h3>
                <p className="text-lg leading-relaxed mb-4">تُرجع هذه الدالة اسم الملف من عنوان URL أو مسار الملف.</p>

                <h4 className="text-lg font-medium mt-4">مثال:</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$path = '/home/httpd/html/index.php';"}
                    {"$file = basename($path); // $file ترجع 'index.php'"}
                </pre>

                <h3 className="text-xl font-medium mt-4">دالة copy()</h3>
                <p className="text-lg leading-relaxed mb-4">تقوم هذه الدالة بنسخ ملف إلى مكان آخر.</p>

                <h4 className="text-lg font-medium mt-4">مثال:</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$file = 'toto.txt';"}
                    {"// إنشاء نسخة احتياطية من toto.txt كـ toto.txt.bak"}
                    {"copy($file, $file . '.bak');"}
                </pre>

                <h3 className="text-xl font-medium mt-4">دالة dirname()</h3>
                <p className="text-lg leading-relaxed mb-4">تُرجع هذه الدالة مسار الدليل الخاص بالملف.</p>

                <h4 className="text-lg font-medium mt-4">مثال:</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$path = '/etc/passwd';"}
                    {"$dir = dirname($path); // $dir ترجع '/etc'"}
                </pre>

                <h3 className="text-xl font-medium mt-4">دالة file()</h3>
                <p className="text-lg leading-relaxed mb-4">دالة <strong>file()</strong> تقرأ الملف بالكامل وتُرجعه كمصفوفة، حيث يمثل كل عنصر سطرًا في الملف.</p>

                <h3 className="text-xl font-medium mt-4">دالة file_exists()</h3>
                <p className="text-lg leading-relaxed mb-4">تُرجع هذه الدالة true إذا كان الملف موجودًا.</p>

                <h3 className="text-xl font-medium mt-4">دالة is_dir()</h3>
                <p className="text-lg leading-relaxed mb-4">تُرجع هذه الدالة true إذا كان الملف هو مجلد.</p>

                <h3 className="text-xl font-medium mt-4">دالة is_file()</h3>
                <p className="text-lg leading-relaxed mb-4">تُرجع هذه الدالة true إذا كان الملف هو ملف عادي.</p>

                <h3 className="text-xl font-medium mt-4">عداد الزوار البسيط في PHP</h3>
                <p className="text-lg leading-relaxed mb-4">إذا كنت ترغب في الحصول على عداد زوار فريد لكل صفحة من صفحات موقعك، إليك سكربت PHP بسيط يقوم بهذه المهمة:</p>

                <pre className="bg-gray-200 p-4 rounded">
                    {"// فتح الملف mycounter.txt"}
                    {"$file = fopen('mycounter.txt', 'r+');"}
                    {"// قراءة السطر الأول من الملف وتخزينه في المتغير $visitors"}
                    {"$visitors = fgets($file);"}
                    {"// زيادة عدد الزوار بمقدار 1"}
                    {"$visitors++;"}
                    {"// إعادة مؤشر الملف إلى بداية الملف"}
                    {"fseek($file, 0);"}
                    {"// كتابة عدد الزوار الجديد في الملف"}
                    {"fputs($file, $visitors);"}
                    {"// إغلاق الملف"}
                    {"fclose($file);"}
                    {"// عرض عدد الزوار"}
                    {"echo \"$visitors people have visited this page\";"}
                </pre>

                <p className="text-lg leading-relaxed mb-4">بعض الملاحظات المهمة:</p>
                <ul className="list-disc ml-6">
                    <li>ستحتاج إلى وضع ملف باسم <code>mycounter.txt</code> يحتوي على القيمة الأولية 0 على موقعك. يمكنك تعيينه إلى أي رقم إذا كنت تريد أن يبدأ العداد من قيمة معينة (على سبيل المثال، 1254).</li>
                    <li>تقوم دالة <strong>fopen()</strong> بفتح الملف بوضع "r+" للقراءة والكتابة.</li>
                    <li><strong>fgets()</strong> تقرأ السطر الأول من الملف.</li>
                    <li><strong>fseek()</strong> تعيد تعيين مؤشر الملف إلى البداية، مما يضمن أن يتم الكتابة فوق العدد القديم للزوار.</li>
                    <li><strong>fputs()</strong> تكتب العدد الجديد للزوار في الملف.</li>
                    <li><strong>fclose()</strong> تغلق الملف عندما تنتهي.</li>
                </ul>

                <p className="text-lg leading-relaxed mb-4">إليك نسخة أكثر اختصارًا من السكربت باستخدام <strong>file_get_contents()</strong> و <strong>file_put_contents()</strong>:</p>

                <pre className="bg-gray-200 p-4 rounded">
                    {"$visitors = file_get_contents('mycounter.txt');"}
                    {"$visitors++;"}
                    {"file_put_contents('mycounter.txt', $visitors);"}
                    {"print(\"$visitors people have visited this page\");"}
                </pre>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">تمارين</h2>

                <h3 className="text-xl font-medium mt-4">قراءة ملف</h3>
                <p className="text-lg leading-relaxed mb-4">قم بتحميل الملف الذي يحتوي على قائمة من المواقع الإلكترونية الأساسية لفهم العالم الحديث.</p>
                <p className="text-lg leading-relaxed mb-4">اكتب برنامجًا يقرأ هذا الملف ويولد صفحة ويب تحتوي على قائمة من الروابط.</p>

                <h4 className="text-lg font-medium mt-4">التعليمات:</h4>
                <ul className="list-disc ml-6">
                    <li>استخدم دالة <code>file()</code> التي تقرأ الملف وتعيد محتوياته كمصفوفة.</li>
                </ul>

                <h3 className="text-xl font-medium mt-4">استرجاع ملف بعيد</h3>
                <p className="text-lg leading-relaxed mb-4">يوفر موقع شريك قائمة بالمستخدمين المسجلين حديثًا في الرابط التالي: <a href="https://ncode.amorce.org/customers.csv" target="_blank" rel="noopener noreferrer">https://ncode.amorce.org/customers.csv</a>.</p>
                <p className="text-lg leading-relaxed mb-4">هذا الملف هو ملف CSV، حيث يمثل كل سطر مستخدمًا جديدًا، والفئات هي: اللقب، الاسم الأول، البريد الإلكتروني، الهاتف، المدينة، الولاية، مفصولة بفواصل.</p>

                <h4 className="text-lg font-medium mt-4">التعليمات:</h4>
                <ul className="list-disc ml-6">
                    <li>استخدم دالة <code>file()</code> لاسترجاع محتوى هذا الملف.</li>
                    <li>قم بتقسيم كل سطر باستخدام إحدى الدوال التالية: <code>explode()</code> أو <code>preg_split()</code>.</li>
                    <li>عرض النتيجة في جدول HTML (استخدم Bootstrap إذا أمكن)، مع التأكد من تسمية الأعمدة بشكل صحيح.</li>
                </ul>
            </section>


        </div>
    );
};

export default IntroPHP;
