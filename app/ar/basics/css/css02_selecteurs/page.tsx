import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const CSSPage: React.FC = () => {
    return (

        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">CSS: المحددات</h1>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">المحددات الأساسية</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    النظر في إعلان CSS التالي:
                </p>
                <CodeBlock code={`body {
    background-color: #FFFFCC;
    margin-left: 100px;
}

h1 {
    font-size: 48pt;
    color: #FF0000;
    font-style: italic;
    border-bottom: solid thin black;
}

p {
    font-size: 12pt;
    line-height: 14pt;
    font-family: Arial;
    letter-spacing: 0.2mm;
    word-spacing: 0.8mm;
    color: blue;
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    في هذا المثال، <code>body</code>، <code>h1</code>، و <code>p</code> هي محددات.
                    "المحدد" يشير إلى الجزء الذي يأتي قبل الأقواس المعقوفة. وهو يحدد العناصر HTML التي ستتأثر بالخصائص المعروفة.
                </p>

                <h4 className="text-xl font-semibold mb-3">أنواع المحددات</h4>
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-6">
                    <li><strong>وسم HTML:</strong> يستهدف العناصر حسب اسم الوسم، مثل <code>body</code>، <code>h1</code>، أو <code>p</code>.</li>
                    <li><strong>الفئة:</strong> يبدأ بنقطة (مثل <code>.className</code>). يُطبق على العناصر التي تحتوي على سمة <code>class</code> المحددة.</li>
                    <li><strong>المعرف:</strong> يبدأ بعلامة الهاش (مثل <code>#idName</code>). يستهدف العنصر الذي يحتوي على سمة <code>id</code> فريدة.</li>
                    <li><strong>العام:</strong> النجمة <code>*</code> تختار جميع العناصر.</li>
                </ul>

                <h4 className="text-xl font-semibold mb-3">مثال على محدد الفئة</h4>
                <CodeBlock code={`<html>
<head>
    <style>
        .one {
            color: red;
        }
    </style>
</head>
<body>
    <h3 class="one">عنوان أحمر</h3>
    <h3>عنوان عادي</h3>
    <p class="one">نص باللون الأحمر</p>
</body>
</html>`} />
                <p className="text-lg leading-relaxed mb-4">
                    في هذا المثال، يتم تطبيق النمط <code>.one</code> على العناصر التي تحتوي على السمة <code>class="one"</code>.
                </p>

                <h4 className="text-xl font-semibold mb-3">مثال على محدد المعرف</h4>
                <CodeBlock code={`<html>
<head>
    <style>
        #one {
            background-color: silver;
        }
    </style>
</head>
<body>
    <h3 id="one">خلفية فضية</h3>
    <h3>عنوان عادي</h3>
</body>
</html>`} />
                <p className="text-lg leading-relaxed mb-4">
                    في هذه الحالة، ينطبق النمط <code>#one</code> على العنصر الذي يحتوي على <code>id="one"</code>. ملاحظة: يجب أن يكون <code>id</code> فريدًا في صفحة الويب.
                </p>

                <h4 className="text-xl font-semibold mb-3">المحدد العام</h4>
                <CodeBlock code={`* {
    color: red;
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    يطبق المحدد العام <code>*</code> الأنماط على جميع العناصر.
                </p>

            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">محددات متعددة</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    من الممكن دمج عدة محددات، مما يتيح تطبيق نفس القواعد CSS على عناصر مختلفة تم اختيارها.
                </p>
                <CodeBlock code={`p, h1, div {
    color: red;
    font-size: 12%;
    border-bottom: solid thin black;
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    في هذا المثال، ستطبق الأنماط على جميع العناصر <code>p</code>، <code>h1</code>، و <code>div</code>.
                </p>

                <h4 className="text-xl font-semibold mb-3">الفئات المتعددة</h4>
                <CodeBlock code={`.class1, .class2, .class3 {
    color: red;
    font-size: 12%;
    border-bottom: solid thin black;
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    في هذا المثال، ستطبق الأنماط على العناصر التي تحتوي على الفئات <code>.class1</code>، <code>.class2</code>، و <code>.class3</code>.
                </p>

                <h4 className="text-xl font-semibold mb-3">المعرفات المتعددة</h4>
                <CodeBlock code={`#one, #two, #three {
    color: red;
    font-size: 12%;
    border-bottom: solid thin black;
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    هنا، ستطبق الأنماط على العناصر التي تحتوي على المعرفات <code>#one</code>، <code>#two</code>، و <code>#three</code>.
                </p>

                <h4 className="text-xl font-semibold mb-3">دمج المحددات من أنواع مختلفة</h4>
                <CodeBlock code={`h1, .class1, #one {
    color: red;
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    يمكنك أيضًا دمج أنواع مختلفة من المحددات، مثل الوسوم HTML والفئات والمعرفات في قاعدة واحدة.
                </p>

                <h3 className="text-xl font-semibold mb-4">محددات أخرى</h3>
                <p className="text-lg leading-relaxed mb-4">
                    بالإضافة إلى المحددات الأساسية، هناك أيضًا محددات أخرى متاحة:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-6">
                    <li><strong>محددات الأطفال:</strong> استخدم الرمز الأكبر من (<code>&gt;</code>) لاستهداف العناصر الفرعية.</li>
                    <li><strong>محددات الأشقاء المتجاورين:</strong> استخدم علامة الجمع (<code>+</code>) لاستهداف العناصر المتجاورة.</li>
                    <li><strong>محددات السمات:</strong> استخدم الأقواس المربعة (<code>[]</code>) لاستهداف عناصر HTML بناءً على وجود أو قيمة السمة.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">الفئات الوهمية</h3>
                <p className="text-lg leading-relaxed mb-4">
                    الفئة الوهمية هي كلمة مفتاحية تضاف إلى محدد لتحديد حالة خاصة للعنصر لتطبيق الأنماط.
                    الفئات الوهمية تبدأ بنقطتين (<code>:</code>).
                </p>
                <CodeBlock code={`a:hover {
    color: red;
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    في هذا المثال، سيتحول نص الروابط إلى اللون الأحمر عند مرور المؤشر عليها.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    بعض الفئات الوهمية محددة لعناصر معينة مثل الروابط أو المؤشر. على سبيل المثال:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-6">
                    <li><strong>:active</strong> - يستهدف الرابط عندما يتم النقر عليه.</li>
                    <li><strong>:focus</strong> - يستهدف الرابط عندما يصبح نشطًا (مركّزًا).</li>
                    <li><strong>:hover</strong> - يستهدف الرابط عندما يتم التمرير عليه.</li>
                    <li><strong>:link</strong> - يستهدف الرابط قبل أن يتم زيارته.</li>
                    <li><strong>:visited</strong> - يستهدف الرابط بعد أن يتم زيارته.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">الفئات الوهمية الشائعة الأخرى</h3>
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-6">
                    <li><strong>:not(balise)</strong> - يحدد جميع العناصر ما عدا تلك التي تم تمريرها كوسائط.</li>
                    <li><strong>:first-child</strong> - يحدد أول طفل من العنصر.</li>
                    <li><strong>:last-child</strong> - يحدد آخر طفل من العنصر.</li>
                    <li><strong>:nth-child(number)</strong> - يحدد الطفل رقم (n) من العنصر.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">العناصر الوهمية</h3>
                <p className="text-lg leading-relaxed mb-4">
                    يسمح العنصر الوهمي بتنسيق جزء معين من العنصر، ويبدأ مع نقطتين مزدوجتين (<code>::</code>).
                </p>
                <CodeBlock code={`a::before {
    content: "*";
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    في هذا المثال، يتم إضافة نجمة (<code>*</code>) قبل كل رابط.
                </p>

                <h4 className="text-xl font-semibold mb-3">النقاط الرئيسية</h4>
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
                    <li>المحددات في CSS تستهدف العناصر لتطبيق الأنماط.</li>
                    <li>يمكنك دمج عدة محددات، بما في ذلك وسوم HTML والفئات والمعرفات.</li>
                    <li>تسمح المحددات المتقدمة مثل الفئات الوهمية والعناصر الوهمية بالتحكم الأكثر دقة في التنسيق بناءً على حالة العنصر أو أجزاء معينة من العنصر.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">تمارين: دورك الآن!</h2> <div className="border-b border-gray-300 mb-6" />
                <a href="https://flukeout.github.io/" className="text-blue-600">CSS Dinner</a>
                <br /><br />
                <p className="text-lg leading-relaxed mb-4">
                    في هذا التمرين، ستتدرب على تطبيق محددات CSS على عناصر HTML متنوعة. حاول استهداف العناصر بناءً على وسومها وفئاتها ومعرفاتها. ستجرب أيضًا المحددات المتقدمة مثل الفئات الوهمية والعناصر الوهمية للحصول على تنسيق أكثر تحديدًا.
                </p>

                <h4 className="text-xl font-semibold mb-3">تعليمات التمرين</h4>
                <p className="text-lg leading-relaxed mb-4">
                    اتبع التعليمات لممارسة استخدام المحددات وتطبيق الأنماط على عناصر HTML. ابدأ بالمحددات الأساسية ثم انتقل تدريجيًا إلى المحددات الأكثر تقدمًا.
                </p>
            </section>

        </div >
    );
};

export default CSSPage;
