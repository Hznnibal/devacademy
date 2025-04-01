import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const PDOConnectionMySQL: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">الاتصال بقاعدة بيانات MySQL باستخدام PDO</h1>

            <h2 className="text-2xl font-semibold mb-4 mt-8">مقدمة</h2><div className="border-b border-gray-300 mb-6" />

            <p className="text-xl font-bold mb-3 ml-6">- في الدروس القادمة، سوف تستخدم قاعدة البيانات
                <a
                    href="/SCRIPT/record.sql"
                    download="record.sql"
                    className="text-primary hover:underline font-medium text-blue-600"
                > record </a>
            </p>

            <p className="text-xl font-bold mb-3 ml-6">- من المحتمل أن تحتاج أيضًا إلى
                <a
                    href="/DISC_PICTURES.zip"
                    download="DISC_PICTURES.zip"
                    className="text-primary hover:underline font-medium text-blue-600"
                > الصور </a> كذلك.
            </p>

            {/* القسم 1: مقدمة عن PDO */}
            <h2 className="text-2xl font-semibold mb-4 mt-6">ما هو PDO؟</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                PDO (PHP Data Objects) هو امتداد PHP يتيح لك التفاعل مع قواعد البيانات بطريقة آمنة ومجردة.
                يتيح لك تنفيذ استعلامات SQL واسترجاع البيانات مع توفير التوافق مع أنواع مختلفة من قواعد البيانات،
                مثل MySQL و Oracle وغيرها.
            </p>

            <h3 className="text-xl font-semibold mb-4">فوائد PDO</h3>
            <ul className="list-disc pl-6 mb-4">
                <li>تجريد قاعدة البيانات (يعمل مع MySQL و PostgreSQL وما إلى ذلك).</li>
                <li>تحسين معالجة الأخطاء باستخدام الاستثناءات.</li>
                <li>دعم الجمل المحضرة لمنع هجمات SQL injection.</li>
            </ul>

            {/* القسم 2: الاتصال بـ MySQL باستخدام PDO */}
            <h2 className="text-2xl font-semibold mb-4">الاتصال بخادم MySQL</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                للاتصال بقاعدة بيانات MySQL، ما عليك سوى إنشاء مثيل من فئة <code>PDO</code> مع DSN (اسم مصدر البيانات)، اسم المستخدم، وكلمة المرور.
            </p>
            <CodeBlock code={`$db = new PDO('mysql:host=localhost;dbname=record;charset=utf8', 'root', '');`} />

            {/* القسم 3: معالجة أخطاء الاتصال */}
            <h2 className="text-2xl font-semibold mb-4">معالجة أخطاء الاتصال</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                إذا كان هناك أي أخطاء في الاتصال، سيتم طرح <code>PDOException</code>. يمكنك التقاط هذا الاستثناء لمعالجة الخطأ أو ترك معالج الأخطاء العالمي يتعامل معه.
                بشكل افتراضي، يعمل PDO في وضع الأخطاء الصامتة، مما يعني أنه لا يعرض رسائل الخطأ. تحتاج إلى استدعاء <code>errorCode()</code> و <code>errorInfo()</code> للتحقق من الأخطاء.
            </p>
            <CodeBlock code={`try {
    $db = new PDO('mysql:host=localhost;dbname=record;charset=utf8', 'root', '');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    echo 'Error: ' . $e->getMessage() . '<br />';
    echo 'Code: ' . $e->getCode();
    die('End of script');
}`} />

            {/* القسم 4: إنشاء استعلام SQL بسيط */}
            <h2 className="text-2xl font-semibold mb-4">إنشاء استعلام SQL بسيط</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                بمجرد الاتصال بقاعدة البيانات، يمكننا إنشاء استعلام بسيط لاسترجاع البيانات. في هذا المثال، سوف نعرض قائمة بالفنانين من قاعدة البيانات.
            </p>
            <CodeBlock code={`$query = $db->query("SELECT * FROM artist");
$table = $query->fetchAll(PDO::FETCH_OBJ);
$query->closeCursor();`} />
            <p className="mb-4 leading-relaxed">
                ستكون المتغيرات <code>$table</code> تحمل نتيجة الاستعلام، والتي هي مصفوفة من كائنات الفنانين. للوصول إلى البيانات، نستخدم تدوين الكائنات (مثل <code>$artist-{`>`}artist_name</code>).
            </p>

            {/* القسم 5: عرض البيانات */}
            <h2 className="text-2xl font-semibold mb-4">عرض البيانات</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                إليك كيفية عرض النتائج في هيكل HTML أساسي:
            </p>
            <CodeBlock code={`<body>
    <?php foreach ($table as $artist): ?>
        <div>
            <?= $artist->artist_name ?>
        </div>
    <?php endforeach; ?>
</body>`} />

            {/* القسم 6: استعلام مع معلمات */}
            <h2 className="text-2xl font-semibold mb-4">استعلام مع معلمات</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                إذا كنت ترغب في عرض تفاصيل ألبوم معين، يمكنك تمرير معلمة (مثل معرف الألبوم) إلى استعلامك. إليك مثال على كيفية القيام بذلك باستخدام الجمل المحضرة:
            </p>
            <CodeBlock code={`$query = $db->prepare("SELECT * FROM disc WHERE disc_id = ?");
$query->execute([$_GET["disc_id"]]);
$disc = $query->fetch(PDO::FETCH_OBJ);`} />

            <h3 className="text-xl font-semibold mb-4">عرض تفاصيل القرص</h3>
            <p className="mb-4 leading-relaxed">
                بعد تنفيذ الاستعلام، يمكنك عرض تفاصيل الألبوم في HTML مثل هذا:
            </p>
            <CodeBlock code={`<body>
    <p className="text-lg leading-relaxed mb-4">Disc N° <?= $disc->disc_id ?></p>
    <p className="text-lg leading-relaxed mb-4">Disc Name: <?= $disc->disc_name ?></p>
    <p className="text-lg leading-relaxed mb-4">Disc Year: <?= $disc->disc_year ?></p>
</body>`} />

            {/* القسم 7: التعامل مع السجلات غير الموجودة */}
            <h2 className="text-2xl font-semibold mb-4">معالجة السجلات غير الموجودة</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                إذا لم يكن القرص موجودًا في قاعدة البيانات، فإن المتغير <code>$disc</code> سيكون <code>null</code>. يجب عليك التعامل مع هذه الحالة عن طريق التحقق مما إذا كانت النتيجة null وعرض رسالة مخصصة.
            </p>
        </div>
    );
};

export default PDOConnectionMySQL;
