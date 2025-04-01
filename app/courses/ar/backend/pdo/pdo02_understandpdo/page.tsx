import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const PDOConnectionExplanation: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">العمل مع MySQL باستخدام PDO</h1>

            {/* القسم 1: مقدمة إلى PDO */}
            <h2 className="text-2xl font-semibold mb-4">ما هو PDO؟</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                PDO (PHP Data Objects) هو امتداد لـ PHP يوفر واجهة للتفاعل مع قواعد البيانات العلائقية، بما في ذلك MySQL.
                يعمل كطبقة تجريدية تسمح للمطورين بالتفاعل مع قاعدة البيانات دون كتابة استعلامات مخصصة لقواعد البيانات.
                هذا يجعل الشيفرة أكثر قابلية للنقل وأسهل في الصيانة.
            </p>

            <h3 className="text-xl font-semibold mb-4">فوائد PDO</h3>
            <ul className="list-disc pl-6 mb-4">
                <li>يُجري التفاعل مع أنواع مختلفة من قواعد البيانات (MySQL، PostgreSQL، إلخ).</li>
                <li>يوفر معالجة أخطاء أفضل باستخدام الاستثناءات.</li>
                <li>يمنع هجمات حقن SQL من خلال الاستعلامات المُعدة.</li>
            </ul>

            {/* القسم 2: التأكد من تثبيت PDO */}
            <h2 className="text-2xl font-semibold mb-4">تأكد من تثبيت PDO</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                قبل البدء، تأكد من أن PDO مثبت على خادم PHP الخاص بك وأن لديك قاعدة بيانات MySQL معدة وجاهزة للاستخدام.
            </p>

            {/* القسم 3: الاتصال بقاعدة البيانات */}
            <h2 className="text-2xl font-semibold mb-4">الاتصال بقاعدة بيانات MySQL</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                الخطوة الأولى هي إنشاء اتصال بقاعدة بيانات MySQL باستخدام PDO. إليك مثال:
            </p>
            <CodeBlock code={`$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "تم الاتصال بقاعدة البيانات بنجاح";
} catch(PDOException $e) {
    echo "خطأ في الاتصال بقاعدة البيانات: " . $e->getMessage();
}`} />

            <h3 className="text-xl font-semibold mb-4">استخدام دالة للاتصال</h3>
            <p className="mb-4 leading-relaxed">
                بدلاً من ذلك، يمكنك استخدام دالة لإنشاء الاتصال:
            </p>
            <CodeBlock code={`function connect_database() {
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "تم الاتصال بقاعدة البيانات بنجاح";
        return $conn;
    } catch(PDOException $e) {
        echo "خطأ في الاتصال بقاعدة البيانات: " . $e->getMessage();
    }
}`} />

            <p className="mb-4 leading-relaxed">
                المتغير <code>$conn</code> يمثل مثيل PDO الذي تم إنشاؤه بتمرير معلمات الاتصال إلى المُنشئ (اسم قاعدة البيانات، نوع قاعدة البيانات - MySQL في هذه الحالة، اسم المستخدم، وكلمة المرور).
                كما قمنا بتكوين PDO لرمي الاستثناءات عند حدوث أخطاء، مما يسمح لك بالتعامل معها بشكل صحيح بدلاً من تلقي قيمة منطقية عند الفشل.
            </p>

            {/* القسم 4: تنفيذ الاستعلامات */}
            <h2 className="text-2xl font-semibold mb-4">تنفيذ استعلامات SQL</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                بمجرد الاتصال بقاعدة البيانات، يمكنك تنفيذ استعلامات SQL باستخدام PDO. على سبيل المثال، لاختيار جميع الأطباق من جدول "dish"، يمكنك استخدام:
            </p>
            <CodeBlock code={`$stmt = $conn->query("SELECT * FROM dish");

while ($row = $stmt->fetch()) {
    echo $row['name'] . "<br>";
}`} />

            <h3 className="text-xl font-semibold mb-4">جلب جميع النتائج</h3>
            <p className="mb-4 leading-relaxed">
                يمكنك جلب جميع النتائج دفعة واحدة والتكرار من خلالها مثل هذا:
            </p>
            <CodeBlock code={`$plats = $stmt->fetchAll(PDO::FETCH_OBJ);
foreach($plats as $dish) {
    echo $dish->name . "<br>";
}`} />

            {/* القسم 5: الاستعلامات المعدة */}
            <h2 className="text-2xl font-semibold mb-4">استخدام الاستعلامات المعدة</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                الاستعلامات المعدة هي استعلامات SQL حيث يتم استبدال المعلمات بالمواضع المخصصة، والتي يتم استبدالها بالقيم الفعلية عند تنفيذ الاستعلام.
                الاستعلامات المعدة أكثر أمانًا من الاستعلامات غير المعدة لأنها تحمي من هجمات حقن SQL.
            </p>
            <p className="mb-4 leading-relaxed">
                لمنع هجمات حقن SQL، يسمح لك PDO بربط المتغيرات بالمواضع المخصصة في الاستعلام. إليك مثالاً على إعداد استعلام لاختيار الأطباق من فئة معينة:
            </p>
            <CodeBlock code={`$id_category = 1;
$stmt = $conn->prepare("SELECT * FROM dish WHERE id_category = :id_category");
$stmt->bindValue(':id_category', $id_category);
$stmt->execute();

while ($row = $stmt->fetch()) {
    echo $row['name'] . "<br>";
}`} />

            <p className="mb-4 leading-relaxed">
                في هذه الحالة، استخدمنا <code>bindValue()</code> لربط معلمة <code>:id_category</code> بقيمة <code>$id_category</code>. هذا يضمن أن الموضع المخصص سيتم استبداله بالقيمة الفعلية عند تنفيذ الاستعلام.
            </p>

            {/* Section 1: Introduction to Bind Methods */}
            <h2 className="text-2xl font-semibold mb-4">ما هي `bindParam()` و `bindValue()`؟</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                في PDO (PHP Data Objects)، تُستخدم الدوال `bindParam()` و `bindValue()` لربط القيم بالعناصر النائبة في استعلامات SQL المحضرة. كلا الدالتين لهما وظيفة مشابهة، لكنهما تختلفان في كيفية التعامل مع القيم.
            </p>

            <h3 className="text-xl font-semibold mb-4">الاختلافات بين `bindParam()` و `bindValue()`</h3>
            <p className="mb-4 leading-relaxed">
                - <strong>`bindValue()`</strong> يربط قيمة بمعامل في وقت استدعاء الدالة. يتم تقييم هذه القيمة فوراً وتمريرها إلى الاستعلام.
                - <strong>`bindParam()`</strong> يربط متغيراً بمعامل، لكن قيمته تُقيم عند تنفيذ الاستعلام، وليس عندما يتم ربطه. وهذا يعني أنه إذا تغير المتغير قبل التنفيذ، سيتم استخدام القيمة الجديدة في الاستعلام.
            </p>

            {/* Section 2: Example of `bindValue()` */}
            <h2 className="text-2xl font-semibold mb-4">استخدام `bindValue()`</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                إليك مثالاً على استخدام `bindValue()` لربط معامل في استعلام:
            </p>
            <CodeBlock code={`$name = 'pizza';
$stmt = $pdo->prepare("SELECT * FROM dish WHERE name = :name");
$stmt->bindValue(':name', $name, PDO::PARAM_STR);
$stmt->execute();`} />
            <p className="mb-4 leading-relaxed">
                في هذا المثال، يتم تمرير قيمة المتغير <code>$name</code> فوراً إلى الاستعلام كسلسلة نصية. إذا تغيرت قيمة <code>$name</code> لاحقاً، فلن تؤثر على الاستعلام، لأن القيمة تم تمريرها عندما تم استدعاء الدالة.
            </p>

            {/* Section 3: Example of `bindParam()` */}
            <h2 className="text-2xl font-semibold mb-4">استخدام `bindParam()`</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                الآن، دعونا نرى مثالاً باستخدام `bindParam()`. هنا، يتم تمرير قيمة المتغير إلى الاستعلام عند تنفيذه، وليس عند ربطه:
            </p>
            <CodeBlock code={`$name = 'pizza';
$stmt = $pdo->prepare("SELECT * FROM dish WHERE name = :name");
$stmt->bindParam(':name', $name, PDO::PARAM_STR);
$name = 'pasta';  // تغيير قيمة المتغير
$stmt->execute();`} />
            <p className="mb-4 leading-relaxed">
                في هذه الحالة، بما أننا استخدمنا `bindParam()`، سيتم استخدام القيمة المحدثة لـ <code>$name</code> (والتي هي الآن 'pasta') عند تنفيذ الاستعلام، وليس القيمة الأصلية 'pizza'.
            </p>

            {/* Section 4: Choosing Between `bindParam()` and `bindValue()` */}
            <h2 className="text-2xl font-semibold mb-4">متى تستخدم `bindParam()` مقابل `bindValue()`</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                - استخدم <strong>`bindValue()`</strong> عندما تعرف أن القيمة لن تتغير قبل التنفيذ (مثل القيم الثابتة).
                - استخدم <strong>`bindParam()`</strong> عندما تتوقع أن المتغير سيتغير قبل التنفيذ، وترغب في استخدام القيمة النهائية في الاستعلام.
            </p>

            {/* Section 5: Working with Different Data Types */}
            <h2 className="text-2xl font-semibold mb-4">ربط أنواع البيانات المختلفة</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                يمكنك تحديد نوع البيانات عند استخدام `bindParam()`. يمكن أن يساعد ذلك في التأكد من استخدام نوع البيانات الصحيح في الاستعلام، خاصة عند التعامل مع الأعداد الصحيحة أو السلاسل النصية أو الأنواع الأخرى:
            </p>
            <CodeBlock code={`$qty = 2;
$stmt = $pdo->prepare("SELECT * FROM order WHERE quantity > :qty");
$stmt->bindParam(':qty', $qty, PDO::PARAM_INT);
$stmt->execute();`} />
            <p className="mb-4 leading-relaxed">
                في هذا المثال، نقوم بربط القيمة الصحيحة <code>$qty</code> إلى العنصر النائب <code>:qty</code> باستخدام <code>PDO::PARAM_INT</code> للإشارة إلى أنه عدد صحيح.
            </p>

            {/* Section 6: Conclusion */}
            <h2 className="text-2xl font-semibold mb-4">الخاتمة</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                كل من `bindValue()` و `bindParam()` مفيدان لمنع حقن SQL وضمان معالجة مدخلات المستخدم بشكل آمن في استعلاماتك. يعتمد الاختيار بينهما على ما إذا كانت القيمة ستتغير أثناء التنفيذ وكيف ترغب في التعامل مع الربط.
            </p>

            {/* Section 1: Introduction to Transactions */}
            <h2 className="text-2xl font-semibold mb-4">ما هي المعاملة؟</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                تسمح المعاملة بتجميع عمليات قاعدة بيانات متعددة في وحدة منطقية واحدة.
                يضمن ذلك أن جميع العمليات يتم تنفيذها ذرياً، مما يعني أنه يجب أن تنجح جميعها أو لا يتم تنفيذ أي منها.
            </p>

            <h3 className="text-xl font-semibold mb-4">فوائد المعاملات</h3>
            <ul className="list-disc pl-6 mb-4">
                <li>يضمن اتساق البيانات في حالة حدوث خطأ.</li>
                <li>يسمح بإدارة العمليات المعقدة التي تتضمن استعلامات متعددة.</li>
                <li>يمنع حدوث أخطاء جزئية في البيانات في قاعدة البيانات.</li>
            </ul>

            {/* Section 2: Example of Using Transactions */}
            <h2 className="text-2xl font-semibold mb-4">مثال لاستخدام المعاملات</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                إليك مثالاً على معاملة حيث نضيف فئة جديدة وعدد من الأطباق المرتبطة بتلك الفئة:
            </p>


            <CodeBlock code={`try {
    // بدء المعاملة
    $conn->beginTransaction();

    // إضافة فئة جديدة
    $stmt = $conn->prepare("INSERT INTO category (name, image, active) VALUES (:name, :image, :active)");
    $stmt->bindValue(':name', 'المأكولات الفرنسية');
    $stmt->bindValue(':image', 'new_cat.jpg');
    $stmt->bindValue(':active', 'نعم');
    $stmt->execute();
    $id_category = $conn->lastInsertId();

    // إضافة عدة أطباق جديدة
    $stmt = $conn->prepare("INSERT INTO dish (name, description, price, image, active, id_category) VALUES (:name, :description, :price, :image, :active, :id_category)");
    $stmt->bindValue(':name', 'غراتان دوفينو');
    $stmt->bindValue(':description', 'طبق تقليدي في الشتاء مصنوع من البطاطا المطهية بالكريمة، الحليب، وجوزة الطيب.');
    $stmt->bindValue(':price', 13.50);
    $stmt->bindValue(':image', 'plat1.jpg');
    $stmt->bindValue(':active', 'نعم');
    $stmt->bindValue(':id_category', $id_category);
    $stmt->execute();

    $stmt = $conn->prepare("INSERT INTO dish (name, description, price, image, active, id_category) VALUES (:name, :description, :price, :image, :active, :id_category)");
    $stmt->bindValue(':name', 'راتاتوي');
    $stmt->bindValue(':description', 'طاجن متوسطي مصنوع من الخضار الشمسية وزيت الزيتون.');
    $stmt->bindValue(':price', 10.00);
    $stmt->bindValue(':image', 'plat2.jpg');
    $stmt->bindValue(':active', 'نعم');
    $stmt->bindValue(':id_category', $id_category);
    $stmt->execute();

    // تأكيد المعاملة
    $conn->commit();
} catch (PDOException $e) {
    // في حالة حدوث خطأ، التراجع عن المعاملة
    $conn->rollback();
    echo "خطأ: " . $e->getMessage();
}`} />

            <h3 className="text-xl font-semibold mb-4">الشرح</h3>
            <p className="mb-4 leading-relaxed">
                في هذا المثال، تقوم المعاملة بإضافة فئة جديدة "المأكولات الفرنسية" إلى جدول "category"، ثم تضيف طبقين ("غراتان دوفينو" و"راتاتوي") إلى جدول "dish"، مع ربطهما بتلك الفئة.
                المعاملة مغطاة في كتلة try/catch للتعامل مع استثناءات PDO.
            </p>
            <p className="mb-4 leading-relaxed">
                تبدأ كتلة try بالاتصال بأسلوب <code>beginTransaction()</code> على كائن PDO لبدء المعاملة. جميع الاستعلامات التالية التي يتم تنفيذها على كائن PDO ستكون جزءًا من هذه المعاملة حتى يتم إما تأكيدها أو التراجع عنها.
            </p>
            <p className="mb-4 leading-relaxed">
                يتم إدخال فئة جديدة في جدول "category" مع القيم "المأكولات الفرنسية"، "new_cat.jpg"، و"نعم" للأعمدة <code>name</code>، <code>image</code>، و<code>active</code>.
                يتم استخدام أسلوب <code>bindValue()</code> لربط القيم بالمعلمات الفعلية، ويتم تنفيذ الاستعلام باستخدام <code>execute()</code>.
                يعيد أسلوب <code>lastInsertId()</code> ID الفئة المدخلة حديثًا، والذي سيتم استخدامه كمفتاح أجنبي لربط الأطباق في جدول "dish".
            </p>
            <p className="mb-4 leading-relaxed">
                يتم إدخال طبقين ("غراتان دوفينو" و"راتاتوي") في جدول "dish" مع تفاصيل مثل الاسم، الوصف، السعر، الصورة، وID الفئة.
                مرة أخرى، يتم استخدام <code>bindValue()</code> لربط القيم بالمعلمات المسماة، ويتم تنفيذ الاستعلامات باستخدام <code>execute()</code>.
            </p>
            <p className="mb-4 leading-relaxed">
                أخيرًا، إذا لم يتم رمي أي استثناءات، يتم استدعاء أسلوب <code>commit()</code> لتأكيد المعاملة. وإلا، في كتلة catch، يتم استدعاء <code>rollback()</code> للتراجع عن المعاملة ويتم عرض رسالة الخطأ.
            </p>

            {/* القسم 3: التعامل مع الأخطاء باستخدام PDO */}
            <h2 className="text-2xl font-semibold mb-4">التعامل مع الأخطاء باستخدام PDO</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                قد تتسبب العمليات والمعاملات باستخدام PDO في حدوث أخطاء. من الضروري التعامل مع هذه الأخطاء بشكل صحيح لضمان استقرار وأمان تطبيقك.
            </p>

            <h3 className="text-xl font-semibold mb-4">استخدام Try/Catch للتعامل مع الأخطاء</h3>
            <p className="mb-4 leading-relaxed">
                إليك كيفية استخدام try/catch للتعامل مع أخطاء PDO:
            </p>

            <CodeBlock code={`try {
    $conn = new PDO("mysql:host=localhost;dbname=the_district", "username", "password");

    // تنفيذ عملية قاعدة البيانات
} catch(PDOException $e) {
    echo "خطأ: " . $e->getMessage();
}`} />

            <p className="mb-4 leading-relaxed">
                يستخدم الكود أعلاه كتلة try/catch لاحتواء أي عملية قاعدة بيانات. إذا تم رمي استثناء PDO، يتم التقاطه بواسطة كتلة catch، ويتم عرض رسالة الخطأ.
            </p>

            <h3 className="text-xl font-semibold mb-4">إعداد وضع الأخطاء</h3>
            <p className="mb-4 leading-relaxed">
                يحدد الثابت <code>PDO::ATTR_ERRMODE</code> وضع الخطأ لاتصال PDO.
                هناك ثلاث قيم ممكنة لهذا الثابت: <code>PDO::ERRMODE_SILENT</code>، <code>PDO::ERRMODE_WARNING</code>، و<code>PDO::ERRMODE_EXCEPTION</code>.
            </p>
            <p className="mb-4 leading-relaxed">
                <code>PDO::ERRMODE_SILENT</code> هو وضع الخطأ الافتراضي ولا يولد أي خطأ أو تحذير، مما يجعل من الصعب اكتشاف الأخطاء.
                <code>PDO::ERRMODE_WARNING</code> يولد تحذيرًا من PHP لكل خطأ، بينما <code>PDO::ERRMODE_EXCEPTION</code> يولد استثناءً لكل خطأ، مما يسمح بمعالجة الأخطاء بشكل أكثر تنظيمًا في الكود.
            </p>
            <p className="mb-4 leading-relaxed">
                السطر <code>$conn-{`>`}setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION)</code> يضمن أنه يتم رمي استثناءات لأي خطأ يحدث أثناء التفاعل مع قاعدة البيانات.
            </p>

        </div >
    );
};

export default PDOConnectionExplanation;
