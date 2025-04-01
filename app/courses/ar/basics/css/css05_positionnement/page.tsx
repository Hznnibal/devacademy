import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const FontsPage: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">CSS: التموقع</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">نظرة عامة</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    خاصية <code className="bg-gray-200 text-red-600 px-1 rounded">position</code> تحدد كيفية تموقع العنصر في المستند.
                    بشكل افتراضي، تعرض المتصفحات:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li><strong>الصناديق الكتلية</strong> تتراكم عموديًا.</li>
                    <li><strong>الصناديق المضمنة</strong> مرتبة أفقيًا.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">تموقع: ثابت</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    السلوك الافتراضي للعناصر. يتم تموقع العنصر وفقًا لتدفق المستند الطبيعي.
                    خصائص <code className="bg-gray-200 text-red-600 px-1 rounded">top</code>، <code className="bg-gray-200 text-red-600 px-1 rounded">right</code>,
                    <code className="bg-gray-200 text-red-600 px-1 rounded">bottom</code>، <code className="bg-gray-200 text-red-600 px-1 rounded">left</code>,
                    و <code className="bg-gray-200 text-red-600 px-1 rounded">z-index</code> لا تنطبق.
                </p>
                <CodeBlock code=
                    {`<div class="parent">
    <div class="box" id="one">One</div>
    <div class="box" id="two">Two</div>
    <div class="box" id="three">Three</div>
    <div class="box" id="four">Four</div>
</div>

.parent {
    border: 5px solid black;
    display: inline-block;
}
.box {
    display: inline-block;
    background: rgb(113,113,133);
    width: 100px;
    height: 100px;
}
#two {
    background: #74CC42;
}`} />

            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">تموقع: نسبي</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    يتم تموقع العنصر بالنسبة إلى موقعه الحالي دون التأثير على التخطيط المحيط به.
                    على سبيل المثال، إذا تم تحريك الصندوق الأخضر بمقدار 20 بكسل للأسفل ولليمين، فسيظل مكانه الأصلي كما هو.
                </p>
                <CodeBlock code=
                    {`#two {
    top: 20px;
    left: 20px;
    background: #74CC42;
    position: relative;
}`} />

            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">تموقع: مطلق</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    يتم تموقع العنصر بالنسبة لأقرب سلف تم تموقعه. على عكس
                    <code className="bg-gray-200 text-red-600 px-1 rounded">relative</code>، فإنه لا يترك مساحة حيث كان من المفترض أن يكون العنصر.
                </p>
                <CodeBlock code={`#two {
    top: 20px;
    left: 20px;
    background: #74CC42;
    position: absolute;
}`} />

                <p className="text-lg leading-relaxed mb-4">
                    في هذا المثال، تم تحريك الصندوق الأخضر بمقدار 20 بكسل من الزاوية العليا اليسرى لحاويته.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">استكشاف المزيد</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    تعلم المزيد عن أنواع التموقع الأخرى:
                    <code className="bg-gray-200 text-red-600 px-1 rounded">static</code>,
                    <code className="bg-gray-200 text-red-600 px-1 rounded">relative</code>,
                    <code className="bg-gray-200 text-red-600 px-1 rounded">absolute</code>,
                    <code className="bg-gray-200 text-red-600 px-1 rounded">sticky</code>، و
                    <code className="bg-gray-200 text-red-600 px-1 rounded">fixed</code>.
                </p>
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/position"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline mt-4 block"
                >
                    تعلم المزيد عن التموقع في CSS
                </a>
            </section>
        </div >
    );
};

export default FontsPage;
