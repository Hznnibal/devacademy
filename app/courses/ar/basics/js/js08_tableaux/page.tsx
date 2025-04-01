import { CodeBlock } from "@/components/CodeBlock/code-block";

export default function ArraysPage() {
  return (
    <div className="px-5 py-8 font-sans">

      <h1 className="text-3xl font-bold text-center mb-10">JS 10: Arrays</h1>

      {/* أهداف */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">الأهداف</h2> <div className="border-b border-gray-300 mb-6" />
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>اكتشاف وفهم مفهوم المصفوفات.</li>
          <li>إنشاء المصفوفات والتلاعب بالبيانات التي تحتوي عليها.</li>
          <li>تعلم الوظائف الشائعة للتلاعب بالمصفوفات.</li>
        </ul>
      </section>

      {/* التعريف */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">التعريف</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          تخيل في برنامج أنه يجب علينا تخزين 12 قيمة في وقت واحد، على سبيل المثال، الدرجات لحساب المتوسط.
          من الواضح أن الحل الوحيد المتاح لدينا الآن هو إعلان اثني عشر متغيرًا منفصلًا، بأسماء مثل N1 وN2 وN3، إلخ.
          ولكن هذا لا يحل المشكلة من الناحية الأساسية، لأنه عندما يتعلق الأمر بالحساب، بعد اثني عشر أمرًا قراءة منفصلًا،
          سيبدو الأمر كالتالي:
        </p>
        <CodeBlock code={`Avg = (N1 + N2 + N3 + N4 + N5 + N6 + N7 + N8 + N9 + N10 + N11 + N12) / 12`} />
        <p className="text-lg leading-relaxed mb-4">
          يصبح هذا أمرًا معقدًا. وإذا كنا نعمل مع برنامج يدير مئات أو آلاف القيم، فإنه يصبح مشكلة حقيقية.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          وإذا لم نكن نعرف مسبقًا عدد القيم التي يجب علينا التعامل معها، فإننا نواجه مشكلة أكبر.
          لهذا السبب يسمح لنا البرمجة بجمع كل هذه المتغيرات في كائن واحد،
          حيث يتم الإشارة إلى كل قيمة بواسطة رقم.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          المصفوفة هي تسلسل من العناصر (قائمة) من المتغيرات. يمكننا الوصول إلى عنصر في المصفوفة من خلال موقعه:
          الفهرس، أو "المفتاح".
        </p>
        <p className="text-lg leading-relaxed mb-4">
          المصفوفة تُستخدم مثل المتغير ويمكن تمريرها كوسيط إلى دالة (بما في ذلك طريقة من فئة) أو إرجاعها كنتيجة لدالة.
        </p>
      </section>

      {/* الإعلان والتكوين */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">الإعلان والتكوين</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          في JavaScript، يمكن إعلان المصفوفة بعدة طرق:
        </p>
        <h3 className="text-xl font-semibold">تهيئة مصفوفة فارغة (دون بيانات):</h3>
        <CodeBlock code={`var myArray = [];`} />

        <h3 className="text-xl font-semibold">تهيئة مصفوفة تحتوي على بيانات نصية:</h3>
        <CodeBlock code={`var myArray = ["تفاح", "كمثرى", "موز"]; // بيانات نصية`} />

        <h3 className="text-xl font-semibold">تهيئة مصفوفة تحتوي على بيانات عددية:</h3>
        <CodeBlock code={`var myArray = [123, 456, 789]; // بيانات عددية`} />

        <h3 className="text-xl font-semibold">ملاحظة:</h3>
        <p className="text-lg leading-relaxed mb-4">
          يمكن أن تحتوي المصفوفة في JavaScript على عناصر من أنواع مختلفة (نصوص، أرقام، إلخ)، على عكس بعض اللغات الأخرى (مثل C#).
          على سبيل المثال:
        </p>
        <CodeBlock code={`var myArray = ["تفاح", 123, "كمثرى", 456];`} />

        <h3 className="text-xl font-semibold">تهيئة مصفوفة باستخدام كائن Array:</h3>
        <CodeBlock code={`var myArray = new Array(); // مصفوفة فارغة`} />
        <CodeBlock code={`var myArray = new Array(5); // مصفوفة فارغة تحتوي على 5 عناصر`} />
        <CodeBlock code={`var myArray = new Array("تفاح", "كمثرى", "موز"); // مصفوفة تحتوي على بيانات`} />
      </section>

      {/* استخدام المصفوفات */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">استخدام المصفوفات</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          للوصول إلى عنصر في المصفوفة، نستدعي المصفوفة متبوعًا بأقواس مربعة [] تحتوي على موقع العنصر المطلوب.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          ملاحظة أنه في JavaScript (كما في العديد من اللغات الأخرى)، العنصر الأول في المصفوفة يكون عند الفهرس 0.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          لذا، العنصر الثاني يكون عند الموقع 1، والثالث عند الموقع 2، وهكذا. على سبيل المثال:
        </p>
        <CodeBlock code={`var myArray = ["تفاح", "كمثرى", "موز", "فراولة", "مشمش"];
console.log(myArray[0]); // "تفاح"
console.log(myArray[3]); // "فراولة"`} />
      </section>

      {/* ملء المصفوفة */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">ملء المصفوفة</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          عندما تعلن عن مصفوفة فارغة، يمكنك ملؤها عن طريق تعيين قيمة للموقع المطلوب:
        </p>
        <CodeBlock code={`var myArray = [];
myArray[0] = "تفاح";
myArray[1] = "كمثرى";`} />
      </section>

      {/* الوظائف الشائعة للمصفوفات */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">الوظائف الشائعة على المصفوفات</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          في لغات البرمجة، تتوفر العديد من الوظائف المدمجة للتعامل مع المصفوفات وبياناتها، مثل الترتيب، الحسابات، استخراج البيانات، وتحديد الطول (عدد العناصر في المصفوفة)، إلخ.
        </p>

        <h3 className="text-xl font-semibold">معرفة عدد العناصر في المصفوفة:</h3>
        <CodeBlock code={`var myArray = ["تفاح", "كمثرى", "موز", "فراولة", "مشمش"];
var length = myArray.length;
console.log("المصفوفة تحتوي على " + length + " عناصر");`} />

        <h3 className="text-xl font-semibold">التكرار عبر المصفوفة:</h3>
        <p className="text-lg leading-relaxed mb-4">
          يمكن استخدام حلقة `for` و `forEach` للتكرار عبر المصفوفة، باستخدام وظيفة `length()` لتحديد عدد المرات التي يجب أن تعمل فيها الحلقة:
        </p>
        <CodeBlock code={`var myArray = ["تفاح", "كمثرى", "موز", "فراولة", "مشمش"];
for (var i = 0; i < myArray.length; i++) {
  console.log("الفاكهة: " + myArray[i]);
}`} />

        <h3 className="text-xl font-semibold">استخدام حلقة `for...in`:</h3>
        <CodeBlock code={`var myArray = ["تفاح", "كمثرى", "موز", "فراولة", "مشمش"];
for (var index in myArray) {
  console.log(myArray[index]);
}`} />
      </section>

      {/* المقدمة */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">المقدمة</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          بعض دوال المصفوفات المذكورة هنا تحمل أسماء قد تكون مألوفة لديك من لغات برمجة أخرى
          (مثل PHP) حيث تؤدي نفس الغرض، ولكن أحيانًا مع بناء جملة أو وسائط مختلفة.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          الأمثلة المقدمة أدناه تعتمد على المصفوفة التالية:
        </p>
        <CodeBlock code={`var fruits = ["تفاحة", "كمثرى", "موز", "فراولة", "مشمش"];`} />
      </section>

      {/* دوال المصفوفات */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">دوال المصفوفات</h2>
        <div className="border-b border-gray-300 mb-6" />

        <h3 className="text-xl font-semibold">concat</h3>
        <p className="text-lg leading-relaxed mb-4">
          دمج مصفوفتين في واحدة.
          مثال:
        </p>
        <CodeBlock code={`var fruits = ["تفاحة", "كمثرى", "موز", "فراولة", "مشمش"];
var others = ["سكر", "دقيق", "بيض"];
var ingredients = fruits.concat(others);`} />

        <h3 className="text-xl font-semibold">indexOf</h3>
        <p className="text-lg leading-relaxed mb-4">
          يُرجع أول فهرس حيث تم العثور على العنصر في المصفوفة (التكرار).
          مثال:
        </p>
        <CodeBlock code={`fruits.indexOf('موز'); // يُرجع 2`} />

        <h3 className="text-xl font-semibold">lastIndexOf</h3>
        <p className="text-lg leading-relaxed mb-4">
          يُرجع آخر فهرس حيث تم العثور على العنصر في المصفوفة.
          مثال:
        </p>
        <CodeBlock code={`var fruits = ["تفاحة", "كمثرى", "موز", "فراولة", "موز", "مشمش"];
fruits.lastIndexOf("موز"); // يُرجع 4`} />

        <h3 className="text-xl font-semibold">pop</h3>
        <p className="text-lg leading-relaxed mb-4">
          يزيل العنصر الأخير من المصفوفة ويُرجعه. هذه الطريقة تعدل طول المصفوفة.
          مثال:
        </p>
        <CodeBlock code={`last = fruits.pop();
console.log(last); // يُرجع "مشمش" ويزيله من المصفوفة`} />

        <h3 className="text-xl font-semibold">push</h3>
        <p className="text-lg leading-relaxed mb-4">
          يضيف عنصرًا أو أكثر إلى نهاية المصفوفة ويُرجع الطول الجديد للمصفوفة.
          مثال:
        </p>
        <CodeBlock code={`var nb = fruits.push('مانجو', 'برقوق');`} />
        <p className="text-lg leading-relaxed mb-4">
          ستكون المصفوفة الجديدة:
        </p>
        <CodeBlock code={`fruits = ["تفاحة", "كمثرى", "موز", "فراولة", "مشمش", 'مانجو', 'برقوق'];`} />
        <p className="text-lg leading-relaxed mb-4">
          ستكون المتغير `nb` الآن 7.
        </p>

        <h3 className="text-xl font-semibold">shift</h3>
        <p className="text-lg leading-relaxed mb-4">
          يزيل العنصر الأول من المصفوفة ويُرجعه.
          مثال:
        </p>
        <CodeBlock code={`fruits.shift(); // يُرجع "تفاحة"`} />

        <h3 className="text-xl font-semibold">sort</h3>
        <p className="text-lg leading-relaxed mb-4">
          يقوم بترتيب المصفوفة بترتيب تصاعدي.
          مثال:
        </p>
        <CodeBlock code={`fruits.sort(); // يُرجع "مشمش"، "موز"، "فراولة"، "كمثرى"، "تفاحة"`} />

        <h3 className="text-xl font-semibold">split</h3>
        <p className="text-lg leading-relaxed mb-4">
          يقوم بتقسيم سلسلة إلى مصفوفة باستخدام محدد معين.
          مثال:
        </p>
        <CodeBlock code={`var date = '15/05/2018';
var myArray = date.split('/');`} />
        <p className="text-lg leading-relaxed mb-4">
          ستحتوي `myArray` على القيم "15"، "05"، و "2018".
        </p>

        <p className="text-lg leading-relaxed mb-4">
          لاحظ أن هذه الدوال يمكن استخدامها دون ضرورة تعيين نتيجتها إلى متغير.
        </p>
      </section>

      {/* المصفوفات متعددة الأبعاد */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">المصفوفات متعددة الأبعاد</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          كما ذكرنا، يمكن للمصفوفة أن تحتوي على سلاسل نصية، أرقام صحيحة، أو كليهما، ويمكنها أيضًا أن تحتوي على مصفوفات أخرى،
          مما ينتج عنه "مصفوفات من المصفوفات". وهذه تسمى المصفوفات متعددة الأبعاد.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          دعنا نعلن عن مصفوفة فارغة:
        </p>
        <CodeBlock code={`var tab1 = [];`} />
        <p className="text-lg leading-relaxed mb-4">
          ثم، قم بإضافة بعض العناصر إليها:
        </p>
        <CodeBlock code={`tab1[0] = ["كراث", "طماطم", "جزر"];
tab1[1] = ["تفاحة", "كمثرى", "موز"];`} />
        <p className="text-lg leading-relaxed mb-4">
          لاحظ أن العناصر المضافة هي نفسها مصفوفات! الآن، يمكننا الوصول إلى عنصر مثل هذا:
        </p>
        <CodeBlock code={`console.log(tab1[1][2]);`} />
        <p className="text-lg leading-relaxed mb-4">
          في هذا المثال، هناك مستويان فقط من المصفوفات، ولكن يمكنك أن يكون لديك 3، 4، 5 مستويات أو أكثر.
          ومع ذلك، قد يصبح إدارة المصفوفات المتداخلة بشكل عميق معقدًا للغاية (تخيل الوصول إلى البيانات في المصفوفة المتداخلة الخامسة!).
        </p>
        <p className="text-lg leading-relaxed mb-4">
          يمكنك أيضًا إعلان المصفوفات مثل هذا:
        </p>
        <CodeBlock code={`var vegetables = ["كراث", "طماطم", "جزر"];
var fruits = ["تفاحة", "كمثرى", "موز"];
tab1[0] = vegetables;
tab1[1] = fruits;`} />
      </section>

      {/* العمليات على مصفوفة غير مرتبة */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">العمليات على مصفوفة غير مرتبة</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          على بنية بيانات مثل المصفوفة، يمكنك إجراء عمليات متنوعة مثل إيجاد القيم الدنيا أو العليا، جمع أو ضرب العناصر، أو حساب متوسط العناصر في المصفوفة.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          دعنا نفترض أن لدينا مصفوفة تحتوي على 35 قيمة عددية وننفذ العمليات التالية:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>حساب مجموع العناصر في المصفوفة.</li>
          <li>إيجاد العنصر الأصغر.</li>
        </ul>
        <p className="text-lg leading-relaxed mb-4">
          لحساب المجموع، سنضيف محتوى عناصر المصفوفة واحدًا تلو الآخر من الأول إلى الأخير.
        </p>
      </section>

      {/* ترتيب المصفوفة */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">ترتيب المصفوفة</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          يتم اعتبار المصفوفة مرتبة إذا كان هناك علاقة بين العناصر:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><b>ترتيب تصاعدي:</b> إذا كان محتوى العنصر i أقل من أو يساوي محتوى العنصر i + 1.</li>
          <li><b>ترتيب تنازلي:</b> إذا كان محتوى العنصر i أكبر من أو يساوي محتوى العنصر i + 1.</li>
        </ul>
        <p className="text-lg leading-relaxed mb-4">
          فيما يلي طريقتان لترتيب مصفوفة مكونة من 30 قيمة عددية تسمى `VALNUM`:
        </p>

        <h3 className="text-xl font-semibold">الترتيب التصاعدي باستخدام البحث المتتالي للحد الأدنى</h3>
        <p className="text-lg leading-relaxed mb-4">
          المبدأ كالتالي:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>البحث عن الحد الأدنى في المصفوفة وتبديله مع العنصر الأول.</li>
          <li>تكرار العملية مع العناصر المتبقية مع تقليص البحث حتى يتم ترتيب جميع القيم.</li>
        </ul>
        <p className="text-lg leading-relaxed mb-4">
          تصوّر العملية على 4 قيم:
        </p>
        <CodeBlock code={`المصفوفة الأولية:  8  1  7  5
بعد المرور الأول: 1  8  7  5
بعد المرور الثاني: 1  5  7  8
بعد المرور الثالث: 1  5  7  8`} />

        <h3 className="text-xl font-semibold">ترتيب الفقاعات</h3>
        <p className="text-lg leading-relaxed mb-4">
          المبدأ كالتالي:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>مقارنة العناصر المجاورة في المصفوفة. إذا كانت غير مرتبة، يتم تبديلها.</li>
          <li>تكرار العملية حتى لا يتم تبديل أي شيء، مما يشير إلى أن المصفوفة قد تم ترتيبها.</li>
        </ul>
        <p className="text-lg leading-relaxed mb-4">
          تصوّر العملية على 5 قيم:
        </p>
        <CodeBlock code={`المصفوفة الأولية: 5  18  14  4  26
المرور الأول:      5  14  18  4  26
    5  14  4  18  26
المرور الثاني:     5  4  14  18  26
المرور الثالث:      4  5  14  18  26
المرور الرابع:     4  5  14  18  26`} />
      </section>

      {/* البحث عن عنصر في مصفوفة مرتبة */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">البحث عن عنصر في مصفوفة مرتبة</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          طريقة بسيطة للتحقق مما إذا كانت كلمة موجودة في القاموس هي فحص كل كلمة واحدة تلو الأخرى من البداية إلى النهاية. تعمل هذه الطريقة، لكنها قد تكون بطيئة إذا لم يتم العثور على الكلمة بعد العديد من التكرارات.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          طريقة أكثر كفاءة هي الاستفادة من حقيقة أن الكلمات في القاموس مرتبة أبجديًا. بدلاً من فحص كل كلمة بشكل متسلسل، نقارن الكلمة المستهدفة بالكلمة في منتصف القاموس:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>إذا كانت الكلمة المستهدفة أبكر في الأبجدية، استمر في البحث في النصف الأول من القاموس.</li>
          <li>إذا كانت الكلمة المستهدفة لاحقة، ابحث في النصف الثاني.</li>
        </ul>
        <p className="text-lg leading-relaxed mb-4">
          من خلال تقسيم مساحة البحث بشكل متكرر، يمكننا العثور على الكلمة المستهدفة بسرعة أكبر من البحث المتسلسل.
        </p>
      </section>

      {/* التمرين */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">التمرين</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          اكتب برنامجًا يقوم بإنشاء مصفوفة بالحجم الذي يحدده المستخدم. ثم، يجب على المستخدم إدخال القيم للمصفوفة. أخيرًا، يجب أن يعرض البرنامج محتويات المصفوفة.
        </p>
      </section>

    </div >
  );
}
