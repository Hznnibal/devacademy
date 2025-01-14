import React from 'react';

const IntroPHP: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <section className="mb-6">
                <h2 className="text-2xl font-semibold">التواريخ والأوقات</h2>

                <h3 className="text-xl font-medium mt-4">1. العمل مع التواريخ</h3>
                <p className="text-lg leading-relaxed mb-4">كأحد المطورين، أنت تعمل مع التواريخ بانتظام (مثل تاريخ فاتورة العميل، تسجيل العضو في الموقع، أو حسابات وقت التسليم). يوفر PHP أدوات للتعامل مع التواريخ بشكل فعال.</p>

                <h3 className="text-xl font-medium mt-4">2. المنطقة الزمنية المحلية</h3>
                <p className="text-lg leading-relaxed mb-4">تختلف التواريخ والأوقات حسب المنطقة الزمنية للموقع. من المهم تحديد المنطقة الزمنية لتطبيقك بناءً على الموقع الجغرافي للمستخدم. تعرف هذه الفكرة باسم المنطقة الزمنية.</p>
                <p className="text-lg leading-relaxed mb-4">على سبيل المثال، إذا زرت موقعًا كنديًا أثناء تواجدك في فرنسا (مستضاف على خادم في كندا)، فإن الوقت المعروض سيعكس المنطقة الزمنية الكندية.</p>
                <p className="text-lg leading-relaxed mb-4">بشكل افتراضي، يتم تكوين WAMP على توقيت GMT (توقيت غرينيتش)، لذلك قد يكون هناك فرق في الوقت (من ساعة إلى ساعتين حسب التوقيت الصيفي). لضمان الوقت الصحيح، يمكنك تحديد المنطقة الزمنية باستخدام:</p>
                <ul className="list-disc ml-6">
                    <li>استخدم `date_default_timezone_set("Europe/Paris");` في السكربتات الخاصة بك قبل العمل مع التواريخ لتعيين المنطقة الزمنية لتطبيقك فقط.</li>
                    <li>حدد المنطقة الزمنية مباشرة في ملف تكوين `php.ini` لجميع المشاريع على الخادم (استشر مدربًا للحصول على مزيد من التفاصيل).</li>
                </ul>

                <h3 className="text-xl font-medium mt-4">3. مفهوم الطابع الزمني (Timestamp)</h3>
                <p className="text-lg leading-relaxed mb-4">يتعامل PHP مع التواريخ كعدد صحيح يمثل عدد الثواني التي انقضت منذ 1 يناير 1970، الساعة 00:00:00 بتوقيت GMT (بداية عصر Unix).</p>
                <p className="text-lg leading-relaxed mb-4">يُسمى هذا الرقم <strong>الطابع الزمني</strong>.</p>
                <p className="text-lg leading-relaxed mb-4">على سبيل المثال، عند استدعاء `echo time();` قد يتم إخراج:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"1562225602"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">يشير هذا الطابع الزمني إلى 4 يوليو 2019، الساعة 09:32:22.</p>
                <p className="text-lg leading-relaxed mb-4">لحساب مدة زمنية، يمكنك طرح الطابع الزمني للبداية من الطابع الزمني للنهاية. النتيجة ستكون عدد الثواني، والذي يمكن تحويله إلى شهور، أيام، ساعات، إلخ.</p>
                <p className="text-lg leading-relaxed mb-4">يمكن أيضًا تخزين الطابع الزمني في قاعدة بيانات باستخدام نوع عمود الطابع الزمني.</p>

                <h3 className="text-xl font-medium mt-4">4. تاريخ اليوم</h3>
                <p className="text-lg leading-relaxed mb-4">في PHP، الوظيفة الأساسية للتعامل مع التواريخ هي `date()`. إليك مثال:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"echo 'We are on ' . date('d/m/Y');"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">ستعرض هذه الوظيفة تاريخ اليوم بالتنسيق:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"12/11/2018"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">يتم تحديد التنسيق من خلال المعلمات التالية:</p>
                <ul className="list-disc ml-6">
                    <li><strong>d:</strong> اليوم، رقمان</li>
                    <li><strong>m:</strong> الشهر، رقمان</li>
                    <li><strong>Y:</strong> السنة، أربعة أرقام</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">يمكن استبدال الفواصل (مثل /) برموز أخرى مثل الشرطتين أو النقطتين.</p>

                <h3 className="text-xl font-medium mt-4">5. الحصول على الوقت</h3>
                <p className="text-lg leading-relaxed mb-4">للحصول على الوقت الحالي، يمكنك أيضًا استخدام وظيفة `date()` مع خيارات تنسيق الوقت:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"echo date('H:i:s');"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">سيتم إخراج الوقت بالتنسيق:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"09:32:22"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">حيث:</p>
                <ul className="list-disc ml-6">
                    <li><strong>H:</strong> الساعة (بتنسيق 24 ساعة مع الأصفار المبدئية)</li>
                    <li><strong>i:</strong> الدقائق (مع الأصفار المبدئية)</li>
                    <li><strong>s:</strong> الثواني (مع الأصفار المبدئية)</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">كائن DateTime</h2>

                <h3 className="text-xl font-medium mt-4">1. مقدمة في كائن DateTime</h3>
                <p className="text-lg leading-relaxed mb-4">من الآن فصاعدًا، يوصى بالعمل مع التواريخ باستخدام الأسلوب الموجه للكائنات، وتحديدًا الكائن <strong>DateTime</strong> المدمج. يقدم هذا الكائن مجموعة من الطرق (الدوال) لتبسيط التعامل مع التواريخ (التنسيق، الحسابات، الفواصل الزمنية). في الإصدارات الحديثة من PHP تم إزالة بعض دوال التاريخ التقليدية، مما يجعل من الضروري استخدام <strong>DateTime</strong> لبعض العمليات.</p>

                <h3 className="text-xl font-medium mt-4">2. الصياغة</h3>
                <p className="text-lg leading-relaxed mb-4">الصياغة لإنشاء كائن جديد من <strong>DateTime</strong> هي كما يلي:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$oDate = new DateTime();"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">سيعيد هذا الكود التاريخ والوقت لحظة تنفيذه. على سبيل المثال، إذا قمت بتنفيذ الكود التالي (لعرض محتوى المتغير $oDate):</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"var_dump($oDate);"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">سيكون الناتج كما يلي:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {`object(DateTime)[1]
  public 'date' => string '2018-07-03 07:12:27.043812' (length=26)
  public 'timezone_type' => int 3
  public 'timezone' => string 'UTC' (length=3)
`}
                </pre>

                <h3 className="text-xl font-medium mt-4">3. العمل مع تاريخ مختلف</h3>
                <p className="text-lg leading-relaxed mb-4">إذا كنت ترغب في العمل مع تاريخ غير تاريخ اليوم، مثل تاريخ تم استرجاعه من قاعدة بيانات، يجب عليك تمرير تلك القيمة كوسيط:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$oDate = new DateTime('01-01-2018');"}
                </pre>

                <h3 className="text-xl font-medium mt-4">4. تنسيق تاريخ موجود</h3>
                <p className="text-lg leading-relaxed mb-4">غالبًا ما نحتاج إلى عرض تاريخ غير تاريخ اليوم، على سبيل المثال، تاريخ تم استرجاعه من قاعدة البيانات، والذي قد يكون بتنسيق MySQL:</p>
                <ul className="list-disc ml-6">
                    <li><strong>التاريخ:</strong> 2018-11-16</li>
                    <li><strong>التاريخ والوقت:</strong> 2018-11-16 11:26:51</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">لتنسيق هذا التاريخ، نستخدم مرة أخرى كائن DateTime في PHP:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$oDate = new DateTime($macolonne_sql);"}
                    {"echo $oDate->format('d/m/Y H:h:i');"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">سيتم عرض: <strong>16/11/2018 11h26</strong> (تم حذف الثواني عمدًا).</p>

                <h3 className="text-xl font-medium mt-4">5. التعامل مع أخطاء DateTime</h3>
                <p className="text-lg leading-relaxed mb-4">يسمح لك كائن <strong>DateTime</strong> بالحصول على الأخطاء باستخدام <strong>DateTime::getLastErrors</strong>:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$dateTime = DateTime::createFromFormat('m/d/Y', $date);"}
                    {"$errors = DateTime::getLastErrors();"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">إذا كانت هناك أي أخطاء أو تحذيرات، يمكنك التحقق منها على النحو التالي:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"if (!empty($errors['warning_count'])) { return FALSE; }"}
                </pre>

                <h3 className="text-xl font-medium mt-4">6. التحقق من صحة تاريخ</h3>
                <p className="text-lg leading-relaxed mb-4">يمكنك محاولة التحقق من صحة تاريخ باستخدام تعبير منتظم، مثل هذا:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$datePattern = '/^[0-9]{4}-[0-1][0-9]-[0-3][0-9]$/';"}
                    {"$date = '2015-12-06';"}
                    {"if (preg_match($datePattern, $date)) { echo 'Date ' . $date . ' is valid.<br>'; }"}
                    {"else { echo 'Date ' . $date . ' is invalid.<br>'; }"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">سيتأكد هذا من أن التاريخ صالح. ومع ذلك، إذا جربت تاريخًا مثل "32/13/2019"، سيشير التعبير المنتظم إلى أنه صالح لأنه يتحقق فقط من التنسيق، وليس القيم.</p>
                <p className="text-lg leading-relaxed mb-4">للتحقق من صحة التاريخ، يمكنك استخدام كائن <strong>DateTime</strong>:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$d = DateTime::createFromFormat('Y-m-d', '2019-13-32');"}
                    {"if ($d && $d->format('Y-m-d') === '2019-13-32') { echo 'Valid date'; } else { echo 'Invalid date'; }"}
                </pre>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">دوال أخرى</h2>

                <h3 className="text-xl font-medium mt-4">دالة strtotime()</h3>
                <p className="text-lg leading-relaxed mb-4">تعد دالة <strong>strtotime()</strong> واحدة من الأدوات القوية في PHP لتحويل التواريخ المكتوبة إلى طوابع زمنية. على سبيل المثال، يمكنك استخدامها لتحويل النصوص مثل "next Friday" إلى طابع زمني مناسب:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"echo strtotime('next Friday');"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">أو لتنفيذ عمليات رياضية مع التواريخ:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"echo strtotime('next Monday');"}
                </pre>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">الوثائق</h2>

                <h3 className="text-xl font-medium mt-4">1. قائمة الدوال الخاصة بالتواريخ والأوقات</h3>
                <p className="text-lg leading-relaxed mb-4">كائن <strong>DateTime</strong> والكائنات المرتبطة به مثل <strong>DateInterval</strong> و <strong>DateTimeZone</strong> توفر مجموعة غنية من الدوال لمعالجة التواريخ والأوقات. فيما يلي بعض الدوال المهمة:</p>
                <ul className="list-disc ml-6">
                    <li><strong>date()</strong> — تنسيق الوقت/التاريخ المحلي.</li>
                    <li><strong>time()</strong> — يعيد الطابع الزمني Unix الحالي.</li>
                    <li><strong>strtotime()</strong> — يحول تمثيل نصي للتاريخ إلى طابع زمني Unix.</li>
                    <li><strong>getTimestamp()</strong> — يعيد الطابع الزمني Unix لكائن <strong>DateTime</strong>.</li>
                    <li><strong>format()</strong> — تنسيق كائن <strong>DateTime</strong> إلى سلسلة نصية.</li>
                    <li><strong>add()</strong> — إضافة فترة زمنية إلى كائن <strong>DateTime</strong>.</li>
                    <li><strong>sub()</strong> — طرح فترة زمنية من كائن <strong>DateTime</strong>.</li>
                    <li><strong>diff()</strong> — يعيد الفرق بين كائنين من <strong>DateTime</strong>.</li>
                </ul>

                <h3 className="text-xl font-medium mt-4">2. كائن DateTime والفئات المرتبطة به</h3>
                <p className="text-lg leading-relaxed mb-4">يعمل كائن <strong>DateTime</strong> في PHP مع الكائنات الأخرى المرتبطة به لتنفيذ التعديلات المتقدمة على التواريخ:</p>
                <ul className="list-disc ml-6">
                    <li><strong>DateInterval</strong> — يمثل فترة زمنية، مثل شهر واحد أو 5 أيام.</li>
                    <li><strong>DateTimeZone</strong> — يمثل منطقة زمنية ويسمح بالتلاعب في المنطقة الزمنية.</li>
                </ul>

                <h3 className="text-xl font-medium mt-4">3. التمارين</h3>
                <p className="text-lg leading-relaxed mb-4">استخدم كائن <strong>DateTime</strong> إلا إذا تم تحديد خلاف ذلك. فيما يلي بعض التمارين:</p>

                <h4 className="text-lg font-medium mt-4">1. العثور على رقم الأسبوع للتاريخ التالي: 14/07/2019</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$oDate = new DateTime('14/07/2019');"}
                    {"echo $oDate->format('W'); // يعرض رقم الأسبوع"}
                </pre>

                <h4 className="text-lg font-medium mt-4">2. كم عدد الأيام المتبقية حتى نهاية دورتك التدريبية؟</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$endDate = new DateTime('2024-12-31');"}
                    {"$currentDate = new DateTime();"}
                    {"$interval = $currentDate->diff($endDate);"}
                    {"echo $interval->days . ' أيام متبقية';"}
                </pre>

                <h4 className="text-lg font-medium mt-4">3. كيفية تحديد إذا كان العام سنة كبيسة؟</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$year = 2024;"}
                    {"if ((($year % 4 == 0) && ($year % 100 != 0)) || ($year % 400 == 0)) {"}
                    {"    echo '$year هو سنة كبيسة.';"}
                    {"} else {"}
                    {"    echo '$year ليس سنة كبيسة.';"}
                    {"}"}
                </pre>

                <h4 className="text-lg font-medium mt-4">4. إظهار أن التاريخ 32/17/2019 غير صالح</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$oDate = DateTime::createFromFormat('d/m/Y', '32/17/2019');"}
                    {"$errors = DateTime::getLastErrors();"}
                    {"if ($errors['error_count'] > 0) { echo 'تاريخ غير صالح'; }"}
                </pre>

                <h4 className="text-lg font-medium mt-4">5. عرض الوقت الحالي بالتنسيق: 11h25</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"echo date('H\h:i');"}
                </pre>

                <h4 className="text-lg font-medium mt-4">6. إضافة شهر واحد إلى التاريخ الحالي</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$oDate = new DateTime();"}
                    {"$oDate->add(new DateInterval('P1M'));"}
                    {"echo $oDate->format('d/m/Y');"}
                </pre>

                <h4 className="text-lg font-medium mt-4">7. ماذا حدث عند الطابع الزمني 1000200000؟</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$oDate = new DateTime('@1000200000');"}
                    {"echo $oDate->format('d/m/Y H:i:s');"}
                </pre>
            </section>
        </div>
    );
};

export default IntroPHP;
