import { CodeBlock } from '@/components/CodeBlock/code-block';
import Link from 'next/link';
import React from 'react';

const OOPConceptsIntro: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Thinking in Terms of Objects</h1>

            {/* Section 1: مقدمة إلى OOP */}
            <p className="mb-4 leading-relaxed">
                هناك عدة طرق لتصور البرنامج الحاسوبي. الطريقة التقليدية تعتبر البرنامج على أنه سلسلة من التعليمات المنفذة بشكل متسلسل، والمعروفة بـ "البرمجة الإجرائية".
            </p>
            <p className="mb-4 leading-relaxed">
                PHP، مثل اللغات البرمجية الأخرى، هي لغة "موجهة للكائنات". وهذا ليس مجرد مفهوم عصري؛ بل هو فلسفة حقيقية للبرمجة. البرمجة الموجهة للكائنات (OOP) هي طريقة لتطوير البرمجيات التي تعكس كيفية تفاعل وتجميع الكائنات في العالم الحقيقي. على سبيل المثال، السيارة هي مجموعة معقدة من المكونات التي تتفاعل مع بعضها البعض، ولكنها تشكل وحدة متكاملة قادرة على أداء الأفعال (البدء، التوقف، إلخ) وامتلاك خصائصها الخاصة (اللون، رقم اللوحة، السرعة، إلخ).
            </p>
            <p className="mb-4 leading-relaxed">
                لتمثيل العالم الحقيقي بهذه الطريقة، يعتمد منطق OOP على مبادئ يجب فهمها قبل تطبيقها. بالطبع، مثل أي تقنية، يقدم OOP مفردات جديدة تتوافق مع مفاهيمه الأساسية، والتي يجب أن تتعرف عليها. سنغطي المواضيع التالية:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>تنظيم البرامج إلى عناصر تسمى الفئات (classes)، وكيفية استخدام هذه الفئات لتعريف الكائنات التي يمكن التعامل معها في البرمجة.</li>
                <li>تعريف الفئة من حيث هيكلها: الطرق (السلوكيات) والسمات (البيانات) التي تميزها.</li>
                <li>العلاقات بين الفئات، مثل الوراثة، التي تسمح لفئة بالاستفادة من وظائف فئة أخرى.</li>
                <li>أنواع مختلفة من العلاقات بين الكائنات.</li>
            </ul>

            {/* Section 2: فئة لإنشاء كائنات يمكن التعامل معها */}
            <h2 className="text-2xl font-semibold mb-4">فئة لإنشاء كائنات يمكن التعامل معها</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                الكائن هو وحدة متكاملة تجمع البيانات (التي تميزها) والكود (الذي يتعامل معها). المفهوم الأساسي للـ OOP هو أن "كل شيء كائن" (أو يُعتبر كذلك): المنتج، العميل، وأيضًا الملف، الاتصال، إلخ.
            </p>
            <p className="mb-4 leading-relaxed">
                الفئة هي مجموعة متكاملة من الكود، تحتوي عادةً على متغيرات (تسمى السمات) ودوال (تسمى الطرق). الفئة تعمل كقالب لإنشاء الكائنات. الهدف من الفئة هو توليد الكائنات التي يمكننا التعامل معها في مشروع أو أكثر.
            </p>
            <p className="mb-4 leading-relaxed">
                يمكن التفكير في الفئة على أنها قالب يتم إنشاء الكائنات منه، حيث يمثل كل كائن عنصرًا من العالم الحقيقي يجب على البرنامج التعامل معه. الفئة تصف الهيكل الداخلي للكائن: البيانات التي تجمعها والإجراءات التي يمكن أن تقوم بها على بياناتها.
            </p>
            <p className="mb-4 leading-relaxed">
                على سبيل المثال، في مشروع موقع ويب، قد تصف فئة <code>User</code> البيانات والإجراءات التي يمكن لجميع العملاء تنفيذها. من جهة أخرى، سيكون كل عميل يُدار هو مثيل (نسخة) من فئة <code>User</code>.
            </p>
            <p className="mb-4 leading-relaxed">
                من المهم ملاحظة: بينما يكتب المطور كود الفئة، أثناء التنفيذ، سيكون الكود الذي يقوم بإنشاء الكائنات والتعامل معها هو الذي يقوم بالعمليات الفعلية.
            </p>
            <p className="mb-4 leading-relaxed">
                على سبيل المثال، في مشروع "Gardenly"، قد ننشئ ملف فئة <code>User</code>، الذي يمكن دمجه في مشروع الموقع. عندما يقوم العميل بإنشاء حساب، سيقوم كود التحقق من النموذج بإنشاء كائن <code>$client</code> باستخدام فئة <code>User</code>، حيث نقوم بتخزين اسم العميل، ورقم SIRET، والعنوان، وأداء بعض الإجراءات مثل تشفير كلمة المرور قبل حفظها في قاعدة البيانات.
            </p>

            {/* Section 3: إعلان الفئة */}
            <h2 className="text-2xl font-semibold mb-4">إعلان الفئة</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                هناك بعض القواعد التي يجب معرفتها واتباعها عند تعريف فئة جديدة في PHP.
            </p>
            <h3 className="text-xl font-semibold mb-4">قواعد التسمية</h3>
            <ul className="list-disc pl-6 mb-4">
                <li>لا يمكن أن يكون اسم الفئة كلمة محجوزة في PHP (مثل Date، Clone، إلخ).</li>
                <li>يجب أن يبدأ اسم الفئة بحرف كبير أو بشرطة سفلية (_).</li>
                <li>يمكن أن يحتوي اسم الفئة فقط على الأحرف الأبجدية الرقمية والشرطات السفلية.</li>
            </ul>
            <p className="mb-4 leading-relaxed">
                يجب أيضًا تعريف كل فئة في ملفها الخاص، الذي يجب أن يُسمى وفقًا للفئة متبوعًا بالامتداد (مثل <code>ClassName.class.php</code>).
            </p>

            <h3 className="text-xl font-semibold mb-4">تعريف الفئة</h3>
            <CodeBlock code={`<?php
class Animal 
{
    // Code for the content of the class
}
?>`} language='php' />
            <p className="mb-4 leading-relaxed">
                في هذا المثال، قمنا بتعريف فئة <code>Animal</code> (تعريف بسيط ولكن أساسي).
            </p>

            <h3 className="text-xl font-semibold mb-4">تعريف الفئة: السمات والطرق</h3>
            <p className="mb-4 leading-relaxed">
                فئة <code>Animal</code> هي القالب لإنشاء حيوان. يمكننا تعريف خصائصه (مثل النوع، الحجم، الوزن، النظام الغذائي، عدد الأرجل، إلخ) وكذلك الإجراءات التي يمكن أن يقوم بها (مثل الأكل، النوم، التكاثر، التحرك، إلخ).
            </p>

            <CodeBlock code={`<?php
class Animal 
{
    public $species;
    private $size;
    private $weight;
    private $numLegs;

    public function eat() {
        // Eating behavior
    }

    public function move(int $nbpas) {
        // Moving behavior
    }
}
?>`} language='php' />
            <p className="mb-4 leading-relaxed">
                في هذا المثال، قمنا بتعريف سمات فئة <code>Animal</code> (مثل <code>$species</code>، <code>$size</code>، <code>$weight</code>، و<code>$numLegs</code>) وطريقتين، <code>eat()</code> (للأكل) و<code>move()</code> (للحركة).
            </p>

            <h2 className="text-2xl font-semibold mb-4">إنشاء كائن من الفئة</h2>


            {/* Section 1: Instantiation of a Class */}
            <p className="mb-4 leading-relaxed">
                إنشاء مثيل من الفئة يشير إلى عملية إنشاء كائن من الفئة. ويطلق على هذه العملية أيضًا اسم إنشاء مثيل.
            </p>
            <p className="mb-4 leading-relaxed">
                يتم تنفيذ هذه العملية في السكربتات التي تحتاج لاستخدام الفئة، ويتم ذلك باستخدام الكلمة المفتاحية <code>new</code>:
            </p>
            <CodeBlock code={`$ADog = new Animal();`} />
            <p className="mb-4 leading-relaxed">
                المثيل هو "مثال" للفئة. عندما نقوم بإنشاء مثيل من فئة، فإننا ننشئ كائنًا. الإنشاء هو العملية التي "تعطي الحياة" للكائن.
            </p>
            <p className="mb-4 leading-relaxed">
                للتعامل مع الكائن واستخدامه، يجب تخزين الكائن الذي تم إنشاؤه في متغير (ويشار إلى هذا المتغير بعد ذلك ككائننا). وهذا يتيح لنا إنشاء العديد من الكائنات كما نريد من نفس الفئة:
            </p>
            <CodeBlock code={`$ADog = new Animal();
$AnotherDog = new Animal();
$ACat = new Animal();
$ARabbit = new Animal();`} />
            <p className="mb-4 leading-relaxed">
                الميزة الكبيرة هنا هي أنه يمكننا أداء عمليات مختلفة على كل مثيل من الفئة (مثال) دون التأثير على باقي المثيلات (الكائنات الأخرى).
            </p>
            <p className="mb-4 leading-relaxed">
                عندما ننشئ حيوانات من فئة <code>Animal</code> (أو ننشئ مثيلًا لهذه الفئة)، فإن كل حيوان تم إنشاؤه يتم تحديده بواسطة خصائص فئته: جميع الحيوانات سيكون لها نوع ووزن ونظام غذائي، على سبيل المثال. ومع ذلك، ستكون قيم هذه الخصائص والإجراءات خاصة بكل حيوان. النوع سيكون مختلفًا من حيوان لآخر، ولن تكون جميع الحيوانات لها نفس الوزن، ولن يكون لجميعها نفس النظام الغذائي.
            </p>
            <p className="mb-4 leading-relaxed">
                بالمثل، ستظل الإجراءات المحددة للفئة نفسها لجميع الحيوانات، ولكن سيكون لهذه الإجراءات تأثيرات مختلفة اعتمادًا على الحيوان (الكائن) الذي ينفذها. على سبيل المثال، فإن الحيوان الأكبر حجمًا سيغطي مسافة أكبر عند التحرك مقارنة بحيوان أصغر.
            </p>

            {/* Section 2: Class Attributes and Methods */}
            <h2 className="text-2xl font-semibold mb-4">خصائص الفئة والأساليب</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                دعنا الآن نأخذ مثالًا على فئة <code>Vehicule</code>:
            </p>

            <CodeBlock code={`class Vehicule
{
public $_brand;
public $_maxSpeed;
protected $_currentSpeed;
private $_numPassengers;

public function start() {
// كود لتشغيل المركبة
}
public function accelerate(int $nbKm) {
// كود لتسريع المركبة
}
public function move(int $nbKm) {
// كود لتحريك المركبة
}
public function addPasssenger() {
// كود لإضافة راكب
}
}`} />

            <p className="mb-4 leading-relaxed">
                تتميز فئة <code>Vehicule</code> بـ 4 خصائص:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li><code>$_brand</code>: علامة المركبة التجارية.</li>
                <li><code>$_maxSpeed</code>: السرعة القصوى للمركبة.</li>
                <li><code>$_currentSpeed</code>: السرعة الحالية للمركبة.</li>
                <li><code>$_numPassengers</code>: عدد الركاب في المركبة.</li>
            </ul>
            <p className="mb-4 leading-relaxed">
                جميع البيانات، التي تسمى الخصائص، ستكون تمثيلية لمركبة معينة. بمعنى آخر، سيكون لكل كائن من فئة <code>Vehicule</code> نسخته الخاصة من هذه البيانات، التي تسمى خصائص المثيل.
            </p>

            <h2 className="text-2xl font-semibold mb-4"></h2>
            <div className="text-center mt-8">
                <Link href="oop02_preamble/attributes" className="text-blue-600 underline text-lg">
                    فهم الخصائص في البرمجة الشيئية
                </Link>
            </div>

            <p className="mb-4 leading-relaxed">
                نفس المنطق ينطبق مباشرة على الأساليب.
                فئة <code>Vehicule</code> الخاصة بنا تحتوي على 4 إجراءات:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>القدرة على <code>start()</code></li>
                <li>القدرة على <code>accelerate()</code></li>
                <li>القدرة على <code>move()</code></li>
                <li>القدرة على <code>addPassenger()</code></li>
            </ul>
            <p className="mb-4 leading-relaxed">
                من الواضح أن طريقة <code>start()</code> تنطبق بشكل فردي على كل مركبة. لن تبدأ جميع كائنات <code>Vehicule</code> التي تم إنشاؤها في المشروع في نفس الوقت؛ سنحتاج إلى تحديد أي مثيل من الفئة نريد تشغيله.
            </p>
            <p className="mb-4 leading-relaxed">
                علاوة على ذلك، فإن طريقة <code>move()</code> ستستخدم أو تعدل خصائص المثيل للكائن الذي تم تطبيقها عليه، على سبيل المثال، <code>vitesseCourante</code> للمركبة المعنية. هذه هي أساليب المثيل.
            </p>

            <h2 className="text-2xl font-semibold mb-4"></h2>
            <div className="text-center mt-8">
                <Link href="oop02_preamble/methods" className="text-blue-600 underline text-lg">
                    فهم كيفية عمل أساليب المثيل في البرمجة الشيئية
                </Link>
            </div>

            {/* Section 1: Visibility and Security */}
            <h2 className="text-2xl font-semibold mb-4">الرؤية والأمان</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                في البرمجة الشيئية (OOP)، من المهم تحديد رؤية أساليب وخصائص الفئة.
                يمكنك اختيار الرؤية المناسبة لكل عنصر: <code>عام</code>، <code>محمي</code>، أو <code>خاص</code>.
            </p>

            <div className="text-center mt-8">
                <Link href="oop02_preamble/visibility" className="text-xl font-semibold text-blue-600 underline">
                    اختيار الرؤية المناسبة
                </Link>
            </div>
            <p className="mb-4 leading-relaxed">
                الأساليب والخصائص <code>عام</code> متاحة في كل مكان.
                العناصر <code>محمي</code> متاحة داخل الفئة وفئاتها الفرعية،
                في حين أن العناصر <code>خاص</code> متاحة فقط داخل الفئة المعرفة.
            </p>

            <div className="text-center mt-8">
                <Link href="oop02_preamble/mutatorsaccessors" className="text-xl font-semibold text-blue-600 underline">
                    إعلان الوصول والتعديل
                </Link>
            </div>

            <p className="mb-4 leading-relaxed">
                يُستخدم الوصول والتعديل (getters و setters) بشكل شائع لإدارة الوصول إلى خصائص الكائنات الخاصة.
                يسمحان بالوصول والتحكم في تعديل الخصائص من خارج الفئة.
                <br />
                مثال: <code>getNameAttribut()</code> للوصول، و <code>setNameAttribut()</code> للتعديل.
            </p>

            {/* Section 2: Constructor */}
            <h2 className="text-2xl font-semibold mb-4">المنشئ</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                على جانب الخادم، يتضمن إنشاء أو تهيئة كائن جديد مرحلتين رئيسيتين:
            </p>

            <ul className="list-disc pl-6 mb-4">
                <li>تخصيص الذاكرة للكائن وتوفير سياق التنفيذ (يتولى ذلك الفئة ونظام التشغيل).</li>
                <li>تهيئة خصائص مثيل الكائن (يتولى ذلك الكائن نفسه).</li>
            </ul>

            <p className="text-lg leading-relaxed mb-4">في PHP، يتم إدارة هذه العمليات بواسطة طريقة خاصة: المنشئ.
                يتم استدعاء المنشئ تلقائيًا عندما تقوم بتهيئة فئة باستخدام الكلمة المفتاحية <code>new</code>، ويتم تنفيذ الكود داخل المنشئ على الكائن الذي تم تهيئته فورًا.
            </p>

            <p className="mb-4 leading-relaxed">
                إعلان المنشئ اختياري في PHP (على الرغم من أنه إلزامي في بعض اللغات الأخرى). يتم إعلان المنشئ باستخدام طريقة <code>__construct()</code>، ويمكن أن يستقبل معلمات لتهيئة الكائن.
            </p>

            <div className="text-center mt-8">
                <Link href="oop02_preamble/constructors" className="text-xl font-semibold text-blue-600 underline">
                    استخدام المنشئ
                </Link>
            </div>
            <p className="mb-4 leading-relaxed">
                في هذا المثال، نضيف منشئًا إلى فئة <code>Vehicule</code> لتهيئة مركبة بعلامة تجارية إلزامية وبعض الخصائص الافتراضية:
            </p>

            <CodeBlock code={`class Vehicule {
public $_brand;
public $_maxSpeed;
protected $_currentSpeed;
private $_numPassengers;

public function __construct($brand, $vMax = 200, $numPassengers = 0) {
$this->_brand = $brand;
$this->_speedMax = $vMax;
$this->_currentSpeed = 0;
$this->_numPassengers = $numPassengers;
}

public function start() {
// كود لتشغيل المركبة
}

// طرق أخرى...
}`} />
            <p className="mb-4 leading-relaxed">
                مثال على تهيئة مركبة بعلامة تجارية، سرعة قصوى، وعدد الركاب:
            </p>
            <CodeBlock code={`// تهيئة مركبة
$myCompanyCar = new Vehicule("Lotus", 220, 1);`} />

            {/* Section 3: Naming Conventions */}
            <h2 className="text-2xl font-semibold mb-4">اتفاقيات التسمية</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                بعض أفضل الممارسات للتسمية في البرمجة الشيئية:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>تقديم أسماء الأساليب والخصائص الخاصة بعلامة التحتية (<code>_name</code>) لتمييزها بسهولة.</li>
                <li>وضع الخصائص والأساليب التي لها وصول خاص أو محمي إذا كنت تخطط لتمديد الفئة.</li>
                <li>استخدام اتفاقيات التسمية للوصول والتعديل (على سبيل المثال، <code>getNameAttribut()</code> و <code>setNameAttribut()</code>).</li>
            </ul>

            {/* القسم 4: التغليف */}
            <h2 className="text-2xl font-semibold mb-4">التغليف</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                المبدأ الأول في البرمجة الكائنية هو التغليف، والذي يشير إلى أن الكائن هو حزمة متماسكة من البيانات (الخصائص) والطرق التي تعمل على تلك البيانات.
                <br />
                يتم تغليف الخصائص والطرق داخل الفصل: المتغيرات مرئية داخل الفصل، وللوصول إليها، يجب استخدام الفصل نفسه — الوصول المباشر غير مسموح به.
            </p>

            {/* القسم 5: الوراثة */}
            <h2 className="text-2xl font-semibold mb-4">الوراثة وتسلسل الفصول</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                المبدأ الثاني في البرمجة الكائنية هو الوراثة. تسمح لفصل واحد بوراثة الخصائص والطرق من فصل آخر، مما يقلل من التكرار.
                <br />
                تساعد الوراثة في تحديد العلاقات بين الفصول العامة والمتخصصة. على سبيل المثال، يمكن لكل من <code>dog</code> و <code>Chat</code> و <code>Canari</code> أن يرثوا من الفصل العام <code>Animal</code>.
            </p>
            <p className="mb-4 leading-relaxed">
                مثال على الوراثة: الكلب هو نوع محدد من الحيوانات، لذا يقوم فصل <code>dog</code> بتمديد أو وراثة الفصل <code>Animal</code>. الفصل <code>Animal</code> هو تعميم لـ <code>dog</code> و <code>Chat</code> و <code>Canari</code>.
            </p>
            <p className="mb-4 leading-relaxed">
                كل فصل متخصص سيرث الخصائص والطرق المشتركة من الفصل الأب. فقط الطرق الفريدة، مثل <code>ronronner()</code> للقط، ستتم إضافتها في الفصل الفرعي.
            </p>

            {/* القسم 6: التعددية الشكلية */}
            <h2 className="text-2xl font-semibold mb-4">التعددية الشكلية</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                التعددية الشكلية تسمح للفصول المختلفة بتعريف طرق مشابهة ولكن بسلوكيات مختلفة.
                على سبيل المثال، قد يكون لكل من الكلب والعصفور طريقة <code>move()</code>، ولكن الكلب سيستخدم أطرافه بينما العصفور سيطير.
            </p>
            <p className="mb-4 leading-relaxed">
                التعددية الشكلية تسمح لنا باستدعاء نفس الطريقة <code>move()</code> على كلا الكائنين، لكن التنفيذ سيختلف حسب الفصل.
            </p>

            <h3 className="text-xl font-semibold mt-4">إتقان التعددية الشكلية</h3>
            <p className="mb-4 leading-relaxed">
                إذا كانت طريقة قد تم إعلانها بالفعل في الفصل الأب (مثل <code>Animal</code>)، فإن أي طريقة بنفس الاسم تم إعلانها في الفصل الفرعي ستتجاوز السلوك الموروث.
            </p>

            <h2 className="text-2xl font-semibold mb-4">تمارين البرمجة الكائنية</h2>

            {/* التمرين 1: إنشاء شخصية */}
            <h2 className="text-2xl font-semibold mb-4">التمرين 1: إنشاء شخصية</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                في هذا التمرين، يجب عليك إنشاء فصل <code>Character</code> مع الخصائص التالية:
                الاسم، الاسم الأول، العمر، والجنس. يجب أن تقوم بتغليف هذه الخصائص باستخدام الخصائص الخاصة واستخدام الوصوليات للسماح بالوصول إليها.
            </p>

            <h3 className="text-xl font-semibold mt-4">الكود الأساسي لإنشاء فصل Character</h3>
            <CodeBlock code={`class Character {
private $_name;
private $_firstName;
private $_age;
private $_gender;

// الدوال لإعداد والوصول إلى الخصائص
public function setName($name) {
$this->_name = $name;
}

public function getName() {
return $this->_name;
}

public function setfirstName($firstName) {
$this->_firstName = $firstName;
}

public function getfirstName() {
return $this->_firstName;
}

// إضافات للوصول إلى العمر والجنس...
}`} />

            <p className="mb-4 leading-relaxed">
                لاختبار فصلك، يمكنك استخدام الكود التالي في ملف <code>MonPerso.php</code>:
            </p>

            <CodeBlock code={`$p = new Character();
$p->setName("Lebowski");
$p->setfirstName("Jeff");

echo ($p->getName());`} />


            {/* التمرين 2: إدارة الموظفين */}
            <h2 className="text-2xl font-semibold mb-4">التمرين 2: إدارة الموظفين</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                في هذا التمرين، يجب عليك إنشاء فصل <code>Employe</code> لإدارة معلومات الموظفين لشركة *Gardenly*.
            </p>

            <h3 className="text-xl font-semibold mt-4">خصائص فصل Employe</h3>
            <ul className="list-disc pl-6 mb-4">
                <li>الاسم</li>
                <li>الاسم الأول</li>
                <li>تاريخ التوظيف في الشركة</li>
                <li>الوظيفة في الشركة</li>
                <li>الراتب (الراتب السنوي الإجمالي بالآلاف من اليوروهات)</li>
                <li>القسم الذي يعمل فيه الموظف (المحاسبة، المبيعات، إلخ)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">طرق الفصل</h3>
            <p className="mb-4 leading-relaxed">
                1. اكتب دالة لتحديد عدد السنوات التي قضاها الموظف في الشركة.
            </p>
            <p className="mb-4 leading-relaxed">
                2. في كل عام، يتلقى الموظف مكافأة بناءً على الراتب السنوي (5% من الراتب الإجمالي) والأقدمية (2% من الراتب الإجمالي عن كل سنة من الأقدمية). يتم دفع المكافأة في 30 نوفمبر من كل عام. اكتب دوال لحساب المكافأة وإصدار أمر تحويل إلى البنك بالمبلغ.
            </p>

            <h3 className="text-xl font-semibold mt-4">اختبار فصل الموظف</h3>
            <p className="mb-4 leading-relaxed">
                قم بإنشاء خمسة كائنات موظفين على الأقل بمعلومات مختلفة. في البرنامج الرئيسي، اعرض مبلغ المكافأة لكل موظف.
            </p>

            {/* تمارين إضافية */}
            <h2 className="text-2xl font-semibold mb-4">الميزات الإضافية</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>تعديل فصل <code>Magasins</code> لإدارة معلومات المتاجر (الاسم، العنوان، الرمز البريدي، المدينة) وربط كل موظف بالمتجر.</li>
                <li>إدارة خطط الوجبات في المتاجر. الموظفون في المتاجر التي ليس بها مطعم سيحصلون على تذاكر وجبات.</li>
                <li>إدارة قسائم الإجازات والهدايا لعيد الميلاد لأطفال الموظفين، بناءً على أقدميتهم وأعمار أطفالهم.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">الخاتمة</h2>

            <p className="mb-4 leading-relaxed">
                من المهم أن نلاحظ أنه في هذه السلسلة، قمنا بتغطية أساسيات البرمجة الكائنية فقط.
                البرمجة الكائنية تقدم بالفعل مفاهيم متقدمة مثل النسخ، التكرارات، الفصول المجردة، الواجهات، الصفات،
                أنماط التصميم، الاستكشاف، الوراثة المتعددة في بعض اللغات، وأكثر.
            </p>

            <p className="mb-4 leading-relaxed">
                للذهاب أبعد من ذلك، يمكنك قراءة المزيد عن بعض مفاهيم البرمجة الكائنية المتقدمة:
            </p>

            <ul className="list-disc pl-6 mb-4">
                <li>نسخ الكائنات</li>
                <li>استخدام التكرارات للتنقل عبر المجموعات</li>
                <li>الفصول المجردة والواجهات</li>
                <li>الصفات لإعادة استخدام الكود</li>
                <li>أنماط التصميم وتطبيقاتها</li>
                <li>الاستكشاف لفحص الفصول أثناء وقت التشغيل</li>
                <li>الوراثة المتعددة في بعض اللغات</li>
            </ul>

            <p className="mb-4 leading-relaxed">
                ستوفر لك هذه المواضيع المتقدمة فهماً أعمق للبرمجة الكائنية وكيفية تطبيقها في الأنظمة الأكثر تعقيداً.
            </p>

        </div >
    );
};

export default OOPConceptsIntro;
