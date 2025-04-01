import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const HTMLIntroduction: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">HTML - 01 - المقدمة وهيكل الوثيقة</h1>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">ما هو الشبكة العنكبوتية العالمية؟</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    الشبكة العنكبوتية العالمية (الويب) هي شبكة من الموارد والمعلومات. تعتمد على ثلاث آليات رئيسية لجعل البيانات متاحة على نطاق واسع:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>نظام تسمية موحد لتحديد مواقع الموارد على الويب (مثل عناوين URL).</li>
                    <li>البروتوكولات للوصول إلى الموارد المسماة عبر عنوانها (مثل HTTP).</li>
                    <li>الهايبرنصوص للتنقل بين الموارد (مثل HTML).</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">ما هو HTML؟</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    نشر المعلومات للتوزيع العالمي يتطلب لغة مفهومة عالميًا، وهي "اللغة الأم" التي تقبلها جميع أجهزة الكمبيوتر. اللغة المستخدمة في النشر على الويب هي HTML (لغة ترميز النص الفائق).
                </p>
                <p className="text-lg leading-relaxed mb-4">يتيح HTML للمؤلفين:</p>
                <ul className="list-disc list-inside mb-4">
                    <li>نشر مستندات تتضمن عناوين، نصوص، جداول، قوائم، صور، إلخ.</li>
                    <li>الوصول إلى المعلومات عبر الإنترنت من خلال الروابط بنقرة واحدة.</li>
                    <li>تصميم نماذج للمعاملات مثل البحث، والحجز، والطلب.</li>
                    <li>دمج جداول البيانات، مقاطع الفيديو، الصوت، وتطبيقات أخرى مباشرة في المستندات.</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    HTML هي لغة ترميز تمثل المعلومات. يتم تفسير وسومها بواسطة المتصفحات (مثل Chrome و Firefox و Safari) لعرض المعلومات المطلوبة.
                </p>
                <p className="text-lg leading-relaxed mb-4">تاريخ HTML :</p>
                <ul className="list-disc list-inside mb-4">
                    <li>1993: HTML (1.0)</li>
                    <li>1995: HTML 2.0</li>
                    <li>1997: HTML 3.2 و 4.0</li>
                    <li>2000: XHTML</li>
                    <li>2009: HTML 5</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">HTML 5</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    HTML 5، الذي تم تقديمه في 2009، هو الإصدار الحالي من HTML. يقدم ميزات جديدة ويزيل الوسوم القديمة.
                </p>
                <h3 className="text-xl font-semibold mb-2">القواعد الأساسية لـ HTML 5:</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>إغلاق جميع الوسوم.</li>
                    <li>الوسوم والسمات دائمًا بحروف صغيرة.</li>
                    <li>قيم السمات تكون محاطة بعلامات اقتباس.</li>
                    <li>جميع السمات لها قيم صريحة.</li>
                    <li>
                        تشير الوسوم إلى هيكل المستند بدلاً من تقديمه. تم استبدال الوسوم والسمات المتعلقة بالتقديم بأساليب CSS.
                    </li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    كما هو الحال مع كل تطور في HTML، يقدم HTML 5 ميزات جديدة بينما يتخلى عن بعض الوسوم القديمة. هذا يضمن بقاء اللغة حديثة وفعالة.
                </p>
                <p className="mt-2">
                    <a className="text-blue-600" href="https://www.w3schools.com/tags" target="_blank" rel="noopener noreferrer">
                        هذه الصفحة
                    </a>{" "}
                    تعرض جميع وسوم HTML5، مع تسليط الضوء على الوسوم الجديدة وتلك التي أصبحت قديمة.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">هيكل HTML</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    HTML هي لغة ترميز دلالية تتكون من وسوم مرتبة لتحديد هيكل الصفحة أو المستند.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    لكل وسم اسم يصف محتواه، مما يجعل HTML لغة دلالية. على سبيل المثال، استخدام الوسم <code className="bg-gray-200 text-red-600">&lt;article&gt;</code> يعني أن النص بداخله هو مقال.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    يتم إغلاق أسماء الوسوم بين <code className="bg-gray-200 text-red-600">&lt;</code> و <code className="bg-gray-200 text-red-600">&gt;</code>، والمعروفة بالأقواس الزاوية. الأمثلة تشمل <code className="bg-gray-200 text-red-600">&lt;p&gt;</code>، <code className="bg-gray-200 text-red-600">&lt;div&gt;</code>، <code className="bg-gray-200 text-red-600">&lt;article&gt;</code>، و <code className="bg-gray-200 text-red-600">&lt;meta&gt;</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    بعض الوسوم يجب أن تفتح وتغلق بنفس اسم الوسم (مسبقًا بعلامة <code className="bg-gray-200 text-red-600">/</code> للوسم المغلق)، مثل:
                </p>

                <CodeBlock code={`<p>نص</p>
<header>وسوم أخرى</header>`} />

                <p className="text-lg leading-relaxed mb-4">
                    بعض الوسوم أخرى هي وسوم ذات إغلاق ذاتي، وتحتاج فقط إلى قوس زاوي مغلق دون تكرار اسم الوسم، مثل:
                </p>
                <CodeBlock code={`<br>
<hr>
<img>`} />

                <p className="text-lg leading-relaxed mb-4">
                    اعتمادًا على الوسم، قد تكون السمات إلزامية أو اختيارية. بعض السمات تقبل القيم المخصصة التي يحددها المطور، بينما تتطلب الأخرى قيمًا محددة وفقًا لمواصفات HTML.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    يمكن تداخل الوسوم، مما ينشئ هيكلًا هرميًا يُسمى الترميز. هذا يسمح للوسوم الفرعية ضمن الوسوم الأب، مما يكوّن تسلسلات متعددة المستويات مع أنواع مختلفة من الوسوم.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    المثال 1: قائمة غير مرتبة تحتوي على وسوم <code className="bg-gray-200 text-red-600">&lt;li&gt;</code> (عنصر قائمة) متداخلة ضمن وسم <code className="bg-gray-200 text-red-600">&lt;ul&gt;</code>:
                </p>
                <CodeBlock code={`<ul>
  <li>العنصر الأول</li>
  <li>العنصر الثاني</li>
  <li>العنصر الثالث</li>
</ul>`} />

                <p className="text-lg leading-relaxed mb-4">
                    المثال 2: الفقرات ووسم <code>&lt;div&gt;</code> داخل <code>&lt;div&gt;</code> آخر:
                </p>
                <CodeBlock code={`<div>
  <p>الفقرة الأولى</p>
  <p>الفقرة الثانية</p>
  <div>محتوى div المتداخل</div>
</div>`} />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">هيكل وثيقة HTML</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    تتكون وثيقة HTML 5 من عدة أجزاء يجب أن تتبع ترتيباً معيناً.
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        إعلان doctype يحدد إصدار HTML للصفحة: في HTML 5، هذا الإعلان هو <code>&lt;!DOCTYPE html&gt;</code>.
                    </li>
                    <li>
                        عنصر <code>&lt;html&gt;</code> يحتوي على:
                        <ul className="list-disc list-inside ml-6">
                            <li>قسم الرأس التعريفي المحاط بعنصر <code>&lt;head&gt;</code>.</li>
                            <li>جسم الوثيقة الذي يحتوي على المحتوى الفعلي، وعادةً ما يكون محاطاً بعنصر <code>&lt;body&gt;</code>.</li>
                        </ul>
                    </li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    يمكن لكل من علامتي <code>&lt;head&gt;</code> و <code>&lt;body&gt;</code> احتواء علامات متداخلة.
                </p>
                <p className="text-lg leading-relaxed mb-4">مثال على وثيقة HTML 5 أساسية:</p>
                <CodeBlock code={`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>My First HTML 5 Page</title>
  </head>
  <body>
    <h1>HTML 5</h1>
    <p>HTML هو رائع.</p>
  </body>
</html>`} />
                <p className="mt-4">
                    <strong>ملاحظة:</strong> في HTML 5، يجب أن تكون جميع العلامات والخصائص بحروف صغيرة (باستثناء DOCTYPE). بالإضافة إلى ذلك، يجب تضمين سمة <code>lang</code> في عنصر <code>&lt;html&gt;</code> للإشارة إلى لغة الصفحة.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">رأس الوثيقة: <code>&lt;head&gt;</code></h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يحتوي قسم <code>&lt;head&gt;</code> على البيانات الوصفية للوثيقة الحالية، مثل العنوان، الكلمات الرئيسية لمحركات البحث، وبيانات أخرى لا تعتبر جزءاً من محتوى الوثيقة.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    يتم إغلاق البيانات الوصفية غالباً في علامات <code>&lt;meta&gt;</code> ولا تكون مرئية للمستخدمين، باستثناء علامة <code>&lt;title&gt;</code> التي تظهر في علامات التبويب في المتصفح ونتائج محركات البحث.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    مثال:
                </p>
                <CodeBlock code={`
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First HTML Page</title>
  <link href="style.css" rel="stylesheet">
</head>`} />
                <p className="mt-4">
                    <strong>ملاحظة:</strong> تحدد علامة <code>meta charset</code> الترميز المستخدم في الصفحة (عادةً <code>UTF-8</code>) لمنع المشاكل مع الحروف الخاصة أو التشكيلات. يجب أن تظهر قبل علامة <code>&lt;title&gt;</code>.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">جسم الوثيقة: <code>&lt;body&gt;</code></h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يحتوي قسم <code>&lt;body&gt;</code> على المحتوى الفعلي الذي يتم عرضه للمستخدم، مثل النصوص والصور والجداول والعناصر المتعددة الوسائط.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    مثال:
                </p>
                <CodeBlock code={`
<body>
  <h1>محتواي</h1>
  <p>HTML 5 رائع.</p>
</body>`} />
                <p className="mt-4">
                    تشمل علامة <code>&lt;body&gt;</code> كلاً من العناصر الهيكلية (مثل الأعمدة والفقرات والعناوين) والعناصر التنسيقية (مثل النص الغامق والمائل والوسائط).
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">التعليقات: <code>&lt;!-- تعليق --&gt;</code></h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يمكنك تعليق شفرة المصدر الخاصة بك، ولن يرى المستخدم هذا التعليق.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    مثال:
                </p>
                <CodeBlock code={`
<!-- هذا تعليق -->`} />
                <p className="mt-4">
                    ستظهر التعليقات في شفرة المصدر لصفحتك (عرض الصفحة في المتصفح واضغط Ctrl + U). لذلك، تجنب إضافة تفاصيل كثيرة قد تؤثر على الأمان.
                </p>
                <p className="mt-4">
                    لعرض شفرة المصدر لصفحة، اعرض الصفحة في متصفح ويب، ثم اضغط Ctrl + U أو، إذا كنت مألوفًا، استخدم أدوات المطور في المتصفح لفحص الصفحة (كما سيتم تغطيته لاحقاً في الدورة).
                </p>
            </section>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">هيكل وثيقة HTML: <code>&lt;html&gt;</code></h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    إليك ملخص لهيكل صفحة HTML أساسية:
                </p>
                <CodeBlock code={`
<!DOCTYPE html>
<html lang="en">

<!-- بداية علامة الرأس -->
<head>

  <!-- الترميز UTF-8 لجميع الحروف -->
  <meta charset="UTF-8">

  <!-- يخبر المتصفح كيفية عرض الصفحة على الأجهزة المختلفة -->
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta http-equiv="X-UA-Compatible" content="IE=7">

  <!-- مهم لتحسين محركات البحث: يجب أن تكون الوصف مميزاً وجذاباً ومقنعاً -->
  <meta name="description" content="وصف موقعي" />

  <!-- عنصر العنوان، ضروري ومطلوب -->
  <title>عنوان علامتي</title>

  <!-- أيقونة التبويب، لاحظ أن الامتداد يجب أن يكون .ico -->
  <link rel="icon" href="Logo.ico" />

  <!-- رابط إلى ورقة الأنماط (CSS) الخاصة بنا -->
  <link rel="stylesheet" href="assets/css/style.css">

  <!-- إضافة خط 'Concert One' من Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Concert+One&display=swap" rel="stylesheet">

</head>
<!-- نهاية علامة الرأس -->

<!-- --------------------------------------------------------------------------------------------------------- -->
<!-- تذكر أن تعلق شفرتك! مفيد للمشاريع الصغيرة والكبيرة، سواء كنت تعمل بمفردك أو مع فريق! -->
<!-- --------------------------------------------------------------------------------------------------------- -->

<!-- بداية علامة الجسم -->
<body>

<!-- --------------------------------------------------------------------------------------------------------- -->
<!-- كل محتوى صفحتك سيذهب داخل علامة الجسم -->
<!-- --------------------------------------------------------------------------------------------------------- -->

</body>
<!-- نهاية وثيقة HTML -->
</html>`} />
            </section>

        </div >
    );
};

export default HTMLIntroduction;
