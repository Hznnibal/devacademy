import { CodeBlock } from "@/components/CodeBlock/code-block";

export default function ResponsiveWebDesign() {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">CSS المرحلة 6: تصميم الويب المتجاوب</h1>

            {/* قسم الأهداف */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">الأهداف</h2> <div className="border-b border-gray-300 mb-6" />

                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>فهم قيود تصميم الويب المتجاوب.</li>
                    <li>إتقان استعلامات الوسائط CSS.</li>
                    <li>تكييف صفحة HTML لتكون متجاوبة.</li>
                </ul>
            </section>

            {/* مبادئ التصميم المتجاوب */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">فكر بطريقة متجاوبة</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    يجب أن يتم تغيير حجم كل عنصر في صفحة الويب تلقائيًا. لا تنسَ:
                </p>
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>أحجام الخطوط</li>
                    <li>الصور</li>
                    <li>الوسائط الأخرى (مثل الفيديوهات، الرسوم المتحركة)</li>
                    <li>جداول HTML</li>
                </ul>
            </section>

            {/* قسم العرض */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">عرض الصفحة</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    لجعل الصفحة متجاوبة، أضف علامة <code className="bg-gray-200 text-red-600">&lt;meta&gt;</code> التالية في
                    قسم <code className="bg-gray-200 text-red-600">&lt;head&gt;</code>:
                </p>
                <CodeBlock code={`<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">`} />
                <p className="text-lg leading-relaxed mb-4">
                    شرح قيم <code>content</code>:
                </p>
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li><code>width=device-width</code>: يحدد عرض العرض إلى عرض الجهاز.</li>
                    <li><code>initial-scale=1.0</code>: يحدد مستوى التكبير الأولي إلى 100%.</li>
                    <li>
                        <code>shrink-to-fit=no</code>: يصلح خطأ خاص بـ Safari على الأجهزة المحمولة
                        (iOS 9).
                    </li>
                </ul>
            </section >

            {/* قسم استعلامات الوسائط */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">استعلامات الوسائط</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    تطبق استعلامات الوسائط قواعد CSS بناءً على الجهاز والمعايير الأخرى.
                </p>
                <CodeBlock code={`/* مثال: تعديل حجم الخط لأحجام شاشات مختلفة */
@media screen and (max-width: 576px) {
  h1 {
    font-size: 20px;
  }
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 40px;
  }
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    يعرض هذا الكود نص <code>h1</code> بحجم 20 بكسل للشاشات التي تقل عرضها عن 576 بكسل،
                    وحجم 40 بكسل للشاشات بين 577 بكسل و 768 بكسل. بعد 768 بكسل، يتم استخدام الحجم الافتراضي.
                </p>
            </section >

            {/* المعايير الشائعة */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">المعايير الشائعة لاستعلامات الوسائط</h2> <div className="border-b border-gray-300 mb-6" />

                <ul className="list-disc list-inside text-lg space-y-2">
                    <li><strong>أنواع الأجهزة:</strong> <code>screen</code>، <code>print</code>، <code>tv</code>، وغيرها.</li>
                    <li><strong>الميزات:</strong> <code>width</code>، <code>height</code>، <code>orientation</code>، <code>resolution</code>، وغيرها.</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    يمكن دمج المعايير باستخدام عوامل التشغيل مثل <code>and</code>،{" "}
                    <code>not</code>، و <code>only</code>.
                </p>
            </section >

            {/* قسم الأمثلة */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">أمثلة</h2> <div className="border-b border-gray-300 mb-6" />

                <CodeBlock code={`/* تعديل لون الخلفية للأجهزة المحمولة */
@media screen and (max-width: 480px) {
  body {
    background-color: lightblue;
  }
}

/* تخطيط عمودين للشاشات الأكبر */
.container {
  display: flex;
  flex-wrap: wrap;
}

.column {
  flex: 1;
  min-width: 300px;
}

@media (max-width: 768px) {
  .column {
    flex: 100%;
  }
}`} />
            </section >

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">دمج استعلامات الوسائط</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    يمكن دمج استعلامات الوسائط في صفحة الويب الخاصة بك بطريقتين رئيسيتين:
                </p>
                <ol className="list-decimal list-inside text-lg space-y-2">
                    <li>استخدام ملف CSS واحد يحتوي على جميع استعلامات الوسائط.</li>
                    <li>
                        استخدام عدة ملفات CSS خارجية، يتم استهداف كل منها إلى استعلام/جهاز/نقطة انقطاع معينة عبر سمة <code>media</code> في وسم <code>&lt;link&gt;</code>:
                    </li>
                </ol>
                <CodeBlock code={`<link rel="stylesheet" media="screen and (max-width: 575px)" href="mobile.css">
<link rel="stylesheet" media="screen and (min-width: 576px)" href="tablet.css">
<link rel="stylesheet" media="screen and (min-width: 992px)" href="desktop.css">`} />
            </section >

            {/* أحجام الخطوط */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">أحجام الخطوط في التصميم المتجاوب</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    إدارة أحجام الخطوط في التصميم المتجاوب قد تكون صعبة. لضمان المرونة، تجنب استخدام الوحدات المطلقة مثل <code>pt</code> أو <code>cm</code>، واستخدم الوحدات النسبية بدلاً من ذلك.
                </p>

                <h3 className="text-xl font-semibold">الحالة الخاصة للبكسلات</h3>
                <p className="text-lg leading-relaxed mb-4">
                    بينما تُستخدم البكسلات بشكل شائع وقابلة للتغيير، فإنها تعتمد على دقة الشاشة وحجمها، مما قد يكون محدودًا.
                </p>

                <h3 className="text-xl font-semibold">وحدات نسبية أخرى: %، em، و rem</h3>
                <p className="text-lg leading-relaxed mb-4">
                    الوحدات مثل <code>%</code> و <code>em</code> هي نسبية إلى العنصر الأب، مما قد يعقد التصميم المتجاوب. وحدة <code>rem</code> المستندة إلى العنصر الجذري (<code>&lt;html&gt;</code>) هي خيار أفضل للحصول على أحجام ثابتة.
                </p>
                <CodeBlock code={`html {
  font-size: 100%;
}

h1 {
  font-size: 2rem;
}`} />

                <h3 className="text-xl font-semibold">الوحدات المستندة إلى العرض: vw و vh</h3>
                <p className="text-lg leading-relaxed mb-4">
                    قدمت CSS3 وحدات مثل <code>vw</code> (عرض العرض) و <code>vh</code> (ارتفاع العرض) لتصميم متجاوب. هذه الوحدات ممتازة لإنشاء أحجام خطوط متجاوبة ولكن قد تحتاج إلى تعديلات لقراءة أفضل على الأجهزة الأصغر.
                </p>
            </section >

            {/* الصور المتجاوبة */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">الصور المتجاوبة</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    لجعل الصور متجاوبة، قم بتطبيق القواعد CSS التالية وأزل أي سمات <code>width</code> أو <code>height</code> من HTML:
                </p>
                <CodeBlock code={`img {
  max-width: 100%;
  height: auto;
}`} />
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li><code>max-width: 100%:</code> يضمن أن الصورة لا تتجاوز عرض الحاوية الخاصة بها.</li>
                    <li><code>height: auto:</code> يضبط الارتفاع تلقائيًا بناءً على العرض لتجنب التشوه.</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    هذه هي الحلول القياسية. بالنسبة للخيارات الأكثر تقدمًا، يمكنك النظر في تقنيات بديلة.
                </p>
            </section >

        </div >
    );
}
