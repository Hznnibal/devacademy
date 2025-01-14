import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const LoopsPage: React.FC = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold mb-6 text-center">الحلقات في JavaScript</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">حلقة for</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg mt-2">
                    حلقة <code>for</code> مشابهة لحلقة <code>while</code>، ولكنها أكثر اختصاراً في الكتابة.
                </p>
                <CodeBlock code={`for (let a = 1; a < 10; a++) {
  console.log(a);
}`} />

                <p className="text-lg leading-relaxed mb-4">هذه الحلقة تطبع الأرقام من 1 إلى 9.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">حلقة foreach</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg mt-2">
                    حلقة <code>foreach</code> تستخدم للتكرار عبر مصفوفة.
                </p>
                <CodeBlock code={`const array = [1, 2, 3, 4];
array.forEach(element => {
  console.log(element);
});`} />

                <p className="text-lg leading-relaxed mb-4">هذه الحلقة تتكرر عبر كل عنصر في المصفوفة وتطبعه.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">حلقة while</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg mt-2">
                    حلقة <code>while</code> تنفذ طالما أن الشرط صحيح.
                </p>
                <CodeBlock code={`let a = 1;
while (a < 10) {
  console.log(a);
  a++;
}`} />

                <p className="text-lg leading-relaxed mb-4">هذه الحلقة تطبع الأرقام من 1 إلى 9 أيضاً.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">حلقة do ... while</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg mt-2">
                    حلقة <code>do ... while</code> مشابهة لحلقة <code>while</code>، ولكن يتم التحقق من الشرط بعد تنفيذ الحلقة.
                </p>
                <CodeBlock code={`let a = 0;
do {
  console.log(a);
} while (a > 0);`} />

                <p className="text-lg leading-relaxed mb-4">هذه الحلقة لن تنفذ لأن الشرط غير صحيح في البداية.</p>
                <p className="text-lg leading-relaxed mb-4">
                    استخدام آخر لحلقة <code>do ... while</code> هو إنشاء الحلقات اللانهائية:
                </p>
                <CodeBlock code={`let a = 0;
do {
  if (a < 5) {
    console.log("a أقل من 5");
    break;
  }
} while (true);`} />

                <p className="text-lg leading-relaxed mb-4">تستمر هذه الحلقة في التنفيذ حتى يتم كسر الشرط.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">تمارين</h2>
                <div className="border-b border-gray-300 mb-6" />

                <ul className="list-disc pl-5 mt-4">
                    <li>
                        اكتب سكربت يعرض جميع الأرقام الفردية بين 0 و 150 بترتيب تصاعدي: 1، 3، 5، 7...
                    </li>
                    <li>
                        اكتب برنامجاً يطبع الجملة "أحتاج إلى نسخ ملفاتى احتياطيًا بانتظام" 500 مرة.
                    </li>
                    <li>
                        اكتب سكربت يعرض جدول ضرب الأرقام من 1 إلى 9 في جدول HTML.
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default LoopsPage;
