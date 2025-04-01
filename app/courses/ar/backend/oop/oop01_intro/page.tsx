import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const OOPExplanation: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">مقدمة في البرمجة الشيئية (OOP)</h1>

            {/* القسم 1: نظرة عامة على OOP */}
            <h2 className="text-2xl font-semibold mb-4">ما هي البرمجة الشيئية (OOP)؟</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                البرمجة الشيئية (OOP) هي نمط برمجي ينظم الكود عن طريق إنشاء كائنات تمثل الكيانات الواقعية أو المفاهيم المجردة.
                الكائن هو مثيل من فئة ويحتوي على السمات (الخصائص) والسلوكيات (الطرق).
                تساعد هذه الطريقة في جعل الكود أكثر تنظيمًا وفهمًا وسهولة في الصيانة.
            </p>

            {/* القسم 2: المفاهيم الأساسية لـ OOP */}
            <h2 className="text-2xl font-semibold mb-4">المفاهيم الأساسية للبرمجة الشيئية</h2>
            <div className="border-b border-gray-300 mb-6" />
            <h3 className="text-xl font-bold ">الفئات</h3>
            <p className="mb-4 leading-relaxed">
                الفئة هي نموذج أو قالب لإنشاء الكائنات. تحدد السمات (المتغيرات) والطرق (الدوال) التي ستشترك فيها جميع الكائنات من هذه الفئة.
            </p>

            <h3 className="text-xl font-bold ">الكائنات</h3>
            <p className="mb-4 leading-relaxed">
                الكائن هو مثيل من فئة. يمكن لكل كائن الاحتفاظ ببياناته الخاصة في شكل سمات ويمكنه تنفيذ إجراءات باستخدام الطرق المعرفة في فئته.
            </p>

            <h3 className="text-xl font-bold ">الوراثة</h3>
            <p className="mb-4 leading-relaxed">
                الوراثة تسمح للفئة أن ترث السمات والطرق من فئة أخرى. هذا يعزز إعادة استخدام الكود ويساعد في إنشاء هيكل هرمي للفئات.
            </p>

            <h3 className="text-xl font-bold ">التغليف</h3>
            <p className="mb-4 leading-relaxed">
                التغليف يشير إلى تجميع البيانات (السمات) والطرق التي تعمل على البيانات في وحدة واحدة أو فئة. كما يساعد في تقييد الوصول إلى بعض مكونات الكائن، مما يجعل الكود أكثر أمانًا وأسهل في الصيانة.
            </p>

            <h3 className="text-xl font-bold ">تعدد الأشكال</h3>
            <p className="mb-4 leading-relaxed">
                تعدد الأشكال يسمح للكائنات من فئات مختلفة أن تُعامل ككائنات من فئة أساسية مشتركة. كما يسمح بإعادة تعريف الطرق في الفئات المشتقة.
            </p>

            {/* القسم 3: مثال على OOP في العمل */}
            <h2 className="text-2xl font-semibold mb-4">مثال على OOP في العمل</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                إليك مثال بسيط يوضح فئة تحتوي على سمات وطرق:
            </p>

            <CodeBlock code={`class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(\`\${this.year} \${this.make} \${this.model}\`);
    }
}

const myCar = new Car('Toyota', 'Corolla', 2020);
myCar.displayInfo();  // Outputs: 2020 Toyota Corolla`} />

            <p className="mb-4 leading-relaxed">
                في هذا المثال، تحتوي فئة <code>Car</code> على ثلاث سمات: <code>make</code>، <code>model</code>، و <code>year</code>، وطريقة واحدة: <code>displayInfo()</code>.
                نقوم بإنشاء مثيل من فئة <code>Car</code>، وهو <code>myCar</code>، ونستدعي طريقة <code>displayInfo</code> لعرض معلومات السيارة.
            </p>

            {/* القسم 4: لماذا نستخدم OOP؟ */}
            <h2 className="text-2xl font-semibold mb-4">لماذا نستخدم OOP؟</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                تجعل OOP الكود أكثر تنظيمًا وأسهل في الصيانة. تسمح بإعادة استخدام الكود من خلال الوراثة، وتساعد في تنظيم الكود باستخدام التغليف، وتسمح بتعريف الطرق عبر فئات مختلفة باستخدام تعدد الأشكال.
            </p>

            <p className="mb-4 leading-relaxed">
                هذه المفاهيم تجعل التطبيقات الكبيرة أسهل في الإدارة والنمو مع مرور الوقت.
            </p>

            {/* القسم 5: الوراثة مقابل التجميع */}
            <h2 className="text-2xl font-semibold mb-4">الوراثة مقابل التجميع</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                الوراثة والتجميع هما مفهومان رئيسيان في البرمجة الشيئية (OOP) يُستخدمان لإنشاء علاقات بين الفئات. ومع ذلك، يتعامل كل منهما مع هذه العلاقات بطرق مختلفة.
            </p>

            <h3 className="text-xl font-semibold mb-4">1. الوراثة</h3>
            <p className="mb-4 leading-relaxed">
                الوراثة تمثل علاقة "هو" بين الفئة الأم والفئة الفرعية. تقوم الفئة الفرعية بوراثة السمات والطرق من الفئة الأم. بمعنى آخر، تستخدم الفئة الفرعية هيكل وسلوك الفئة الأم لإنشاء سماتها وطرقها الخاصة. تُستخدم الوراثة في كثير من الأحيان لإنشاء فئات أكثر تخصصًا من فئة عامة.
            </p>
            <p className="mb-4 leading-relaxed">
                على سبيل المثال، إذا كان لدينا فئة <code>PlatSpecial</code> التي ترث من الفئة <code>dish</code>، يمكننا إضافة خصائص وطرق إضافية إلى <code>PlatSpecial</code>.
            </p>

            <h3 className="text-xl font-semibold mb-4">2. التجميع</h3>
            <p className="mb-4 leading-relaxed">
                التجميع تمثل علاقة "يحتوي" بين فئتين، حيث تحتوي إحدى الفئات على فئة أخرى كأحد خصائصها. بمعنى آخر، تستخدم الفئة الحاوية الفئة المحتواة لتحقيق جزء من وظيفتها. غالبًا ما يُستخدم التجميع لإنشاء علاقات مثل "يحتوي على" أو "يحتوي العديد".
            </p>
            <p className="mb-4 leading-relaxed">
                على سبيل المثال، في مشروع "The District"، أضفنا خاصية "category" في فئة "dish" التي تحتوي على كائن من فئة "category". يمكننا بعد ذلك الوصول إلى خاصية "name" من فئة "category" باستخدام ذلك الكائن.
            </p>
            <CodeBlock code={`$calzone->display(); // عرض الطبق
$calzone->category->display(); // عرض فئة الطبق`} />


            {/* القسم 2: التغليف، getter و setter */}
            <h2 className="text-2xl font-semibold mb-4">التغليف، getter و setter</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                يتم استخدام التغليف لحماية تفاصيل تنفيذ الفئة. يمكن إعلان بعض الخصائص كـ private أو protected، مما يجعل الوصول إليها غير ممكن بشكل مباشر. للوصول إليها، نقوم بإنشاء طرق getter و setter.
            </p>
            <p className="mb-4 leading-relaxed">
                إليك مثالًا حيث تم إعلان خاصية <code>name</code> كـ private، ونستخدم طرق getter و setter للوصول إليها وتعديلها.
            </p>

            <CodeBlock code={`class category {
public $id;
private $name;
public $description;

public function __construct($id=0, $name="", $description="") {
$this->id = $id;
$this->name = $name;
$this->description = $description;
}

public function getname() {
return $this->name;
}

public function setname($name) {
$this->name = $name;
return $this;
}

public function display() {
echo $this->name . " : " . $this->description;
}
}`} />
            <p className="mb-4 leading-relaxed">
                تم إعلان خاصية <code>name</code> كـ private، وتسمح طرق <code>getname</code> و <code>setname</code> بالوصول إليها وتعديلها. الطريقة الوحيدة لاستخدام خاصية <code>name</code> هي من خلال هذه الطرق.
            </p>

            <h3 className="text-xl font-semibold mb-4">مثال على الاستخدام</h3>
            <CodeBlock code={`$cat = new category(2, "Pasta", "All kinds of pasta...");
echo $cat->name; // لا يعمل، الخاصية private
echo $cat->getname(); // يعمل، يستخدم getter
$cat->setname("Pasta Italian");`} />

            {/* القسم 3: مثال باستخدام PDO */}
            <h2 className="text-2xl font-semibold mb-4">مثال باستخدام PDO</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                يمكن لطرق <code>fetch</code> و <code>fetchAll</code> من PDO إنشاء مثيلات من الفئات الخاصة بك استنادًا إلى نتائج الاستعلام.
            </p>
            <CodeBlock code={`$db = new PDO(...);

$request = $db->query("SELECT * FROM category");
$categorys = $request->fetchAll(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, "category");

foreach ($categorys as $category) {
$category->display(); // عرض معلومات الفئة
}`} />
            <p className="mb-4 leading-relaxed">
                باستخدام وضع <code>PDO::FETCH_CLASS</code>، ستقوم طريقة <code>fetchAll</code> بإعادة بناء كائنات من فئة <code>category</code> من نتيجة الاستعلام. المتغير <code>$categorys</code> سيحتوي على قائمة من كائنات <code>category</code>.
                لاحظ أنه في مُنشئ فئة <code>category</code>، يتم تهيئة الخصائص بالقيم الافتراضية. يقوم <code>PDO::FETCH_PROPS_LATE</code> باستدعاء المُنشئ قبل تعيين قيم الأعمدة من الجدول إلى خصائص الكائن.
            </p>
            <CodeBlock code={`foreach ($categorys as $category) {
$category->display();
}`} />

        </div >
    );
};

export default OOPExplanation;
