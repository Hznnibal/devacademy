import Link from "next/link";

export default function CssExercises() {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-bold text-center mb-10">تمارين CSS</h1>

            {/* مقدمة في CSS */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">1. مقدمة في CSS</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    CSS (ورقة الأنماط المتسلسلة) تُستخدم لتنسيق HTML وإدارة مظهر العناصر.
                    تسمح لك بتحديد الألوان، الأحجام، الخطوط، وأكثر من ذلك.
                </p>
                <pre className="bg-black text-white p-4 rounded text-sm">
                    {`التمرين:
- أضف ورقة أنماط CSS إلى مستند HTML معين.
- غيّر لون النص إلى الأزرق وأسلوب الخط إلى Arial.`}
                </pre>
            </section>

            {/* المحددات */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">2. المحددات</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يتم استخدام محددات CSS لاستهداف عناصر HTML معينة لتطبيق الأنماط.
                    يمكنك استخدام المحددات البسيطة مثل <code className="bg-gray-100 text-black px-1 rounded">.class</code> أو
                    <code className="bg-gray-100 text-black px-1 rounded">#id</code>، أو المحددات المتقدمة مثل
                    <code className="bg-gray-100 text-black px-1 rounded">:hover</code>.
                </p>
                <pre className="bg-black text-white p-4 rounded text-sm">
                    {`التمرين:
- استهدف جميع عناوين h1 وأضف لها حدود حمراء.
- ضع لون خلفية أصفر للفقرات التي تحتوي على الفئة .highlight.`}
                </pre>
            </section>

            {/* الألوان والخطوط */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">3. الألوان والخطوط</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يمكن تحديد الألوان باستخدام الكلمات المفتاحية، الأكواد السداسية، أو الدوال مثل
                    <code className="bg-gray-100 text-black px-1 rounded">rgb()</code>. يمكن استيراد الخطوط من Google Fonts.
                </p>
                <pre className="bg-black text-white p-4 rounded text-sm">
                    {`التمرين:
- غيّر لون خلفية الصفحة باستخدام لون rgba().
- استخدم خط مخصص للنص الرئيسي.`}
                </pre>
            </section>

            {/* نموذج الصندوق */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">4. نموذج الصندوق</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    في CSS، كل عنصر هو صندوق. يتم تحديد الأبعاد بواسطة الخصائص
                    <code className="bg-gray-100 text-black px-1 rounded">width</code>، <code className="bg-gray-100 text-black px-1 rounded">height</code>,
                    <code className="bg-gray-100 text-black px-1 rounded">padding</code>، <code className="bg-gray-100 text-black px-1 rounded">margin</code>، و
                    <code className="bg-gray-100 text-black px-1 rounded">border</code>.
                </p>
                <pre className="bg-black text-white p-4 rounded text-sm">
                    {`التمرين:
- أنشئ صندوقًا بحدود سوداء، 10 بكسل من الحشو، و 20 بكسل من الهامش.
- جرب خاصية overflow لإدارة المحتوى الطويل.`}
                </pre>
            </section>

            {/* التموقع */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">5. التموقع</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يمكن تموقع العناصر باستخدام خاصية <code className="bg-gray-100 text-black px-1 rounded">position</code>:
                    <code className="bg-gray-100 text-black px-1 rounded">static</code>، <code className="bg-gray-100 text-black px-1 rounded">relative</code>،
                    <code className="bg-gray-100 text-black px-1 rounded">absolute</code>، <code className="bg-gray-100 text-black px-1 rounded">fixed</code>، أو
                    <code className="bg-gray-100 text-black px-1 rounded">sticky</code>.
                </p>
                <pre className="bg-black text-white p-4 rounded text-sm">
                    {`التمرين:
- ضع صندوقًا في الزاوية العليا اليمنى من الصفحة باستخدام absolute.
- استخدم sticky لإنشاء شريط تنقل يبقى مرئيًا أثناء التمرير.`}
                </pre>
            </section>

            {/* التصميم المتجاوب */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">6. التصميم المتجاوب</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يسمح التصميم المتجاوب لصفحات الويب بالتكيف مع أحجام الشاشات المختلفة. استخدم
                    <code className="bg-gray-100 text-black px-1 rounded">media queries</code> لتطبيق أنماط محددة لأجهزة مختلفة.
                </p>
                <pre className="bg-black text-white p-4 rounded text-sm">
                    {`التمرين:
- أنشئ تخطيطًا يحتوي على ثلاثة أعمدة يتحول إلى عمود واحد في الأجهزة المحمولة.
- غيّر لون الخلفية اعتمادًا على عرض الشاشة.`}
                </pre>
            </section>

            <div className="text-center mt-8">
                <Link href="css07_exercices/solutions" className="text-blue-600 underline text-lg">
                    عرض الحلول
                </Link>
            </div>
        </div>
    );
}
