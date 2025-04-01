import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const CSSPage: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">CSS: مقدمة وأساسيّات</h1>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">أهداف CSS</h2><div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    CSS (أوراق الأنماط المتتالية) تكمل HTML من خلال توفير لغة لتعريف الخصائص الرسومية للعناصر.
                </p>
                <p className="text-lg leading-relaxed mb-4">CSS تدير ثلاثة جوانب رئيسية:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>تخطيط عناصر HTML على صفحتك (التحديد المكاني)</li>
                    <li>الطباعة: أنماط الخط وحجم النص</li>
                    <li>التنسيق الرسومي: الألوان، الحدود، والخلفيات</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    يمكن تطبيق الأنماط على عنصر واحد أو عدة عناصر، مما يسمح بتعريف النمط مرة واحدة وإعادة استخدامه أينما لزم الأمر دون الحاجة لإعادة التعريف.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    يتكون كود CSS من محدد متبوعًا بكتلة من التعليمات المحاطة بالأقواس المعقوفة:
                </p>
                <CodeBlock code={`selector {
    تعليمات CSS;
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    المثال:
                </p>
                <CodeBlock code={`h1 {
    color: red;
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    هذا المثال البسيط يطبق اللون الأحمر على النص داخل عنصر <code>&lt;h1&gt;</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    كما هو موضح، تنتهي تعليمات CSS بفاصلة منقوطة. يمكن تضمين تعليمات متعددة في كتلة واحدة:
                </p>
                <CodeBlock code={`/* CSS */
h1 {
    color: red;
    border: 2px solid blue;
    background-color: yellow;
    font-family: Verdana;
}`} />
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">التسلسل والوراثة</h2><div className="border-b border-gray-300 mb-6" />
                <h3 className="text-xl font-semibold mb-4">مبدأ التسلسل</h3>
                <p className="text-lg leading-relaxed mb-4">
                    تعمل CSS (أوراق الأنماط المتتالية) على مبدئين أساسيين: التسلسل والوراثة.
                    يحدد التسلسل النمط النهائي للعناصر عندما تنطبق عدة قواعد من مصادر مختلفة.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    بينما تجعل هذه التعقيدات CSS قوية، فإنها يمكن أن تكون مصدرًا للارتباك عند استكشاف المشاكل.
                    يعتمد التسلسل على المصادر التالية للمعلومات:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>أنماط المتصفح الافتراضية للغة التوسيم</li>
                    <li>الأنماط التي يحددها المستخدم في إعدادات المتصفح</li>
                    <li>الأنماط الخارجية المرتبطة من قبل المؤلف باستخدام عنصر <code>&lt;link&gt;</code></li>
                    <li>الأنماط الداخلية داخل عنصر <code>&lt;style&gt;</code> في <code>&lt;head&gt;</code> المستند</li>
                    <li>الأنماط الداخلية المطبقة مباشرة على العناصر عبر خاصية <code>style</code></li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    كل مصدر يتجاوز المصدر السابق له، بهذا الترتيب. وغالبًا ما يشار إلى هذا الترتيب في التسلسل بـ "وزن" القواعد الأنماط.
                </p>

                <h3 className="text-xl font-semibold mb-4">الوراثة</h3>

                <h4 className="text-xl font-medium mb-3">خلط القواعد</h4>
                <p className="text-lg leading-relaxed mb-4">
                    عندما تنطبق عدة قواعد على نفس العنصر، يتم دمج كل القواعد غير المتضاربة.
                    يتعامل التسلسل مع التعارضات، ولكن القواعد الأخرى تبقى سارية.
                </p>
                <CodeBlock code={`<!-- HTML -->
<p className="text-lg leading-relaxed mb-4">أحب <strong>CSS</strong></p>

/* CSS */
p strong {
    background-color: khaki;
    color: green;
}

strong {
    text-decoration: underline;
    color: red;
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    نظرًا لأن القاعدة الأولى لديها خصوصية أعلى، فإنها تتجاوز خاصية <code>color</code> من القاعدة الثانية.
                    ومع ذلك، تطبق كل من خاصية خلفية اللون من القاعدة الأولى وزخرفة النص من القاعدة الثانية على العنصر <code>&lt;strong&gt;</code>.
                </p>

                <h4 className="text-xl font-medium mb-3">وراثة الخصائص</h4>
                <p className="text-lg leading-relaxed mb-4">
                    بعض الخصائص يمكن أن ترث قيمًا من العنصر الأب.
                    يسمح هذا الميكانيزم للعناصر بتبني الأنماط من أسلافها دون الحاجة إلى تعريف نفس القواعد بشكل متكرر.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    على سبيل المثال، خصائص مثل <code>color</code> أو <code>font-family</code> ترث بشكل طبيعي.
                    إذا لم يتم توفير قيمة، يتم استخدام النمط الافتراضي للمتصفح لهذه الخصائص.
                    توفر CSS ثلاث قيم خاصة لإدارة الوراثة:
                </p>
                <table className="table-auto border-collapse border border-gray-400 mb-6">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">القيمة</th>
                            <th className="border border-gray-300 px-4 py-2">الدور</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">inherit</td>
                            <td className="border border-gray-300 px-4 py-2">
                                يجبر الخاصية على وراثة قيمتها من العنصر الأب.
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">initial</td>
                            <td className="border border-gray-300 px-4 py-2">
                                يعيد الخاصية إلى قيمتها الافتراضية في المتصفح.
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">unset</td>
                            <td className="border border-gray-300 px-4 py-2">
                                يعيد الخاصية: يتصرف كما في <code>inherit</code> للخصائص القابلة للوراثة، وكما في <code>initial</code> للخصائص الأخرى.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">إعلان ورقة الأنماط</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    هناك عدة طرق لدمج أوراق الأنماط CSS في صفحة ويب.
                    ومع ذلك، يجب أخذ ترتيب الأولوية الذي يحدده مبدأ الشلال في الاعتبار.
                </p>

                <h3 className="text-xl font-semibold mb-4">تعريف الأنماط في وسم HTML</h3>
                <p className="text-lg leading-relaxed mb-4">
                    يمكن إعلان الأنماط CSS مباشرة داخل وسم HTML باستخدام سمة <code>style</code>.
                    ومع ذلك، لم يعد من المستحسن استخدام هذه الطريقة.
                    تشير أفضل الممارسات إلى أنه يجب وضع جميع الأنماط في ملفات خارجية لتحسين الصيانة والتنظيم.
                </p>
                <CodeBlock code={`<!-- HTML Code -->
<html>
<head>   
    <title>عنوان الملف</title> 
</head> 
<body>    
    <h1 style="color:blue;">...</h1> 
</body> 
</html>`} />

                <h3 className="text-xl font-semibold mb-4">تعريف الأنماط في قسم <code className="bg-gray-200 text-red-600">&lt;head&gt;</code></h3>
                <p className="text-lg leading-relaxed mb-4">
                    يمكن أيضًا إعلان الأنماط في قسم <code className="bg-gray-200 text-red-600">&lt;head&gt;</code> باستخدام وسم <code>&lt;style&gt;</code>.
                </p>
                <CodeBlock code={`<!-- HTML Code -->
<html>
<head> 
    <style type="text/css">  /* هذه هي الأنماط CSS */
    /* يتم تعريف الأنماط هنا */
    </style>
</head>
<body>
    ...
</body>
</html>`} />
                <p className="text-lg leading-relaxed mb-4">
                    ملاحظة: القيمة الافتراضية لسمة <code>type</code> هي <code>type/css</code>، لذلك فإن السمة اختيارية.
                    المثال التالي هو مثال مبسط:
                </p>
                <CodeBlock code={`<style>
/* يتم تعريف الأنماط هنا */
</style>`} />
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">تعريف الأنماط العالمية في ملف CSS منفصل</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يمكن تعريف الأنماط في ملف نصي منفصل (.css) يمكن ربطه بملفات HTML حيثما كان ذلك مطلوبًا.
                    أي تحديث لملف .css سينعكس تلقائيًا عبر جميع صفحات HTML التي تستخدم هذه الورقة.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    هذه هي أفضل ممارسة موصى بها (فصل المحتوى عن العرض) ويجب دائمًا تطبيقها.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    يتم ربط ملف .css باستخدام وسم <code>&lt;link&gt;</code> في قسم <code>&lt;head&gt;</code> من صفحة الويب:
                </p>
                <CodeBlock code={`<!-- HTML Code -->
<html>
<head>
    <title>عنوان الملف</title> 
    <link rel="stylesheet" href="file.css"> 
</head> 
<body> 
… 
</body> 
</html>`} />
                <p className="text-lg leading-relaxed mb-4">
                    من الممكن دمج رابط إلى ملف .css خارجي مع أنماط محلية تم تعريفها باستخدام وسم <code>&lt;style&gt;</code>.
                    في هذه الحالة، الأنماط المعرفة في كتلة <code>&lt;style&gt;</code> تأخذ الأولوية.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    ملاحظة: منذ HTML5، لم يعد وسم <code>&lt;link&gt;</code> يستخدم الشرطة المائلة الذاتية <code>/&gt;</code>، وأصبحت سمة <code>type</code> غير ضرورية.
                    لذلك، لا حاجة لاستخدام <code>type='text/css'</code>.
                </p>
                <CodeBlock code={`<!-- HTML Code -->
<html>
<head>   
    <title>عنوان الملف</title>    
    <link rel="stylesheet" href="styles/file.css">  
</head>
<body>
 …
</body>
</html>`} />
                <p className="text-lg leading-relaxed mb-4">
                    يجب أن تحتوي سمة <code>href</code> على المسار الكامل إلى ملف CSS. يمكن أن يكون هذا حتى عنوان URL إلى ملف CSS مستضاف على خادم آخر:
                </p>
                <CodeBlock code={`<!-- HTML Code -->
<html>
<head>   
    <title>عنوان الملف</title>
    <link rel="stylesheet" href="http://www.example.com/styles/file.css">   
</head>
<body>
 …
</body>
</html>`} />
                <p className="text-lg leading-relaxed mb-4">
                    يمكن ربط عدة ملفات .css بصفحة ويب واحدة.
                    على الرغم من أنه لا يوجد حد لعدد أوراق الأنماط المرتبطة، إلا أن المزيد من الملفات قد يبطئ من أوقات تحميل الصفحة.
                </p>
                <CodeBlock code={`<!-- HTML Code -->
<html>
<head>   
    <title>عنوان الملف</title>
    <link rel="stylesheet" href="file1.css">
    <link rel="stylesheet" href="styles/file2.css">
    <link rel="stylesheet" href="http://www.anotherexample.com/assets/file3.css">
</head>
<body>
…
</body>
</html>`} />
                <h3 className="text-xl font-semibold mb-4">النقاط الرئيسية</h3>
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
                    <li>تستخدم CSS لتنظيم وتنسيق محتوى HTML في صفحة الويب.</li>
                    <li>تتبع CSS مبدأ الشلال والميراث.</li>
                    <li>
                        يتم تطبيق CSS عبر محددات تليها تعليمات داخل كتلة محاطة بالأقواس المعقوفة.
                    </li>
                    <li>
                        هناك ثلاث طرق لإعلان الأنماط CSS في صفحة الويب (داخل الوسوم، في الرأس، أو في ملف CSS خارجي).
                        أفضل ممارسة هي وضع جميع الأنماط في ملف خارجي (أو عدة ملفات إذا لزم الأمر).
                    </li>
                </ul>
            </section>
        </div >
    );
};

export default CSSPage;
