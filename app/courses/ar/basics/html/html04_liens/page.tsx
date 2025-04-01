import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const Page: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">HTML - 04 - الروابط</h1>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">علامة &lt;a&gt;</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    علامة <code>&lt;a&gt;</code> (اختصار لـ "anchor") تُستخدم لإنشاء الروابط التشعبية.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    الروابط تتيح التنقل ضمن موقع ويب إلى صفحة أخرى ولكن أيضًا:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>إلى جزء محدد من الصفحة الحالية</li>
                    <li>إلى موقع آخر (صفحة على موقع آخر)</li>
                    <li>إلى مورد (ملف، صورة، فيديو، إلخ)</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4 mt-2">
                    مثال:
                </p>

                <CodeBlock code=
                    {`<a href="page2.html" title="الصفحة التالية">انقر هنا</a>`} />

                <p className="text-lg leading-relaxed mb-4">الرابط يتكون من أجزاء وصفات مختلفة:</p>
                <ul className="list-disc ml-8">
                    <li>
                        <code className="bg-gray-200 text-red-600 list-disc">href</code>: هذه الصفة الإلزامية تحدد وجهة الرابط.
                    </li>
                    <li>
                        <code className="bg-gray-200 text-red-600 list-disc">title</code>: هذه الصفة الإلزامية توفر نصًا توضيحيًا يظهر عند التمرير فوق الرابط.
                    </li>
                    <li>
                        نص مرئي يُعرض على الصفحة (مثل <em>"انقر هنا"</em>)، وهو ما يراه المستخدم.
                    </li>
                </ul>

            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">الربط بين الصفحات</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يمكنك التنقل بين صفحات HTML المختلفة. إليك بعض الأمثلة:
                </p>
                <ul className="list-disc list-inside space-y-6">
                    <li>
                        <strong>الصفحة في نفس الدليل:</strong>{" "}<br />
                        <code className="bg-gray-200 text-red-600 list-disc">&lt;a href="page2.html"&gt;انقر هنا للذهاب إلى الصفحة 2&lt;/a&gt;</code>
                    </li>
                    <li>
                        <strong>الصفحة في دليل فرعي:</strong>{" "}<br />
                        <code className="bg-gray-200 text-red-600 list-disc">&lt;a href="subdirectory/page2.html" title="الصفحة في دليل فرعي"&gt;انقر هنا&lt;/a&gt;</code>
                    </li>
                    <li>
                        <strong>الصفحة في دليل آخر:</strong>{" "}<br />
                        <code className="bg-gray-200 text-red-600 list-disc">&lt;a href="../directory/page2.html" title="الصفحة في دليل خارجي"&gt;انقر هنا&lt;/a&gt;</code>
                    </li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">الروابط الداخلية</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    الروابط الداخلية تسمح بالتنقل ضمن نفس صفحة HTML. إليك مثالًا:
                </p>
                <CodeBlock code=
                    {`<p id="target">لوريم إيبسوم...</p>
<a href="#target" title="اذهب إلى الهدف">اذهب إلى الفقرة</a>`} />

                <p className="text-lg leading-relaxed mb-4">
                    للربط إلى هدف في صفحة أخرى:{" "}<br />
                </p>
                <CodeBlock code=
                    {`<a href="page2.html#target" title="الهدف في صفحة أخرى">انقر هنا</a>`} />

            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">الروابط الخارجية</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    مثال:{" "}<br />
                </p>

                <CodeBlock code=
                    {`<a href="https://www.w3schools.com/" title="موقع W3Schools">زيارة W3S</a>`} />

            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">الروابط المطلقة والنسبية</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    هناك طريقتان لتحديد المسار في صفة <code>href</code>:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>رابط مطلق:</strong> يتم تحديد المسار بالكامل من جذر هيكل الدليل.
                    </li>
                    <li>
                        <strong>رابط نسبي:</strong> يتم استخدام <code>../</code> للتنقل عبر هيكل الدليل.
                    </li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">صفة target</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    تحدد صفة <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">target</code> أين سيفتح الرابط:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">_blank</code>: يفتح في نافذة جديدة
                    </li>
                    <li>
                        <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">_self</code>: يفتح في النافذة الحالية
                    </li>
                    <li>
                        <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">_parent</code>: يفتح في النافذة الأم
                    </li>
                    <li>
                        <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">_top</code>: يفتح في النافذة الرئيسية
                    </li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">الروابط إلى الموارد</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    مثال لعرض أو تحميل ملف:
                </p>
                <CodeBlock code=
                    {`<a href="docs/manual.pdf" title="الدليل">تحميل الدليل (PDF)</a>
<a href="manual.pdf" download="manual.pdf" title="الدليل">تحميل الدليل</a>`} />
            </section >
            <section>
                <h2 className="text-2xl font-semibold mb-2">روابط البريد الإلكتروني</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    مثال:
                </p>

                <CodeBlock code=
                    {`<a href="mailto:contact@example.com?subject=طلب تواصل" title="اتصل بنا">اكتب لنا</a>`} />
                <p className="text-lg leading-relaxed mb-4">
                    تحذير: تجنب كشف عناوين البريد الإلكتروني العادية في الكود لمنع الرسائل غير المرغوب فيها.
                </p>
            </section >
        </div >
    );
};

export default Page;
