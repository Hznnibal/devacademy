import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const FontsPage: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">نموذج الصندوق في CSS</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">مقدمة</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    في مستند HTML، يتم تمثيل كل عنصر بواسطة صندوق مستطيل.
                    يقوم محرك العرض بحساب الحجم والخصائص (اللون، الخلفية، نمط الحدود)،
                    والموقع لهذه الصناديق. تعرف CSS كل صندوق باستخدام نموذج قياسي
                    يصف المساحة التي يشغلها العنصر.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    نموذج الصندوق في CSS هو أساس تخطيط المحتوى في المستند.
                    قبل الخوض في مبادئ التخطيط، دعونا نستعرض كيفية عمل الصناديق.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">النموذج القياسي للصندوق</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    يتم تمثيل كل عنصر HTML كصندوق يمكن تعديله باستخدام خصائص CSS محددة.
                    تعرف هذه الخصائص هيكل الصندوق على النحو التالي:
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">مربع المحتوى (العرض والارتفاع)</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    مربع المحتوى هو المكان الذي يتم عرض محتوى العنصر فيه.
                    يتضمن ذلك النص أو العناصر الفرعية. يتم تحديد حجم مربع المحتوى
                    باستخدام خصائص <code className="bg-gray-200 text-red-600 px-1 rounded">العرض</code>
                    و <code className="bg-gray-200 text-red-600 px-1 rounded">الارتفاع</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    يمكن للخصائص الإضافية مثل <code className="bg-gray-200 text-red-600 px-1 rounded">الحد الأدنى للعَرْض</code>,
                    <code className="bg-gray-200 text-red-600 px-1 rounded">الحد الأقصى للعَرْض</code>,
                    <code className="bg-gray-200 text-red-600 px-1 rounded">الحد الأدنى للارتفاع</code>,
                    و <code className="bg-gray-200 text-red-600 px-1 rounded">الحد الأقصى للارتفاع</code>
                    تحديد أبعاد مربع المحتوى.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">مربع الحشو</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    الحشو هو المسافة بين المحتوى والحدود.
                    يمكن تحديده باستخدام الخاصية المختصرة
                    <code className="bg-gray-200 text-red-600 px-1 rounded">الحشو</code>
                    أو الخصائص الفردية
                    (<code className="bg-gray-200 text-red-600 px-1 rounded">حشو الأعلى</code>,
                    <code className="bg-gray-200 text-red-600 px-1 rounded">حشو اليمين</code>,
                    <code className="bg-gray-200 text-red-600 px-1 rounded">حشو الأسفل</code>,
                    و <code className="bg-gray-200 text-red-600 px-1 rounded">حشو اليسار</code>).
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">مربع الحدود</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    تحيط الحدود بالحشو والمحتوى. بشكل افتراضي، يكون حجم الحدود 0، مما يجعلها غير مرئية.
                    تسمح الخاصية المختصرة <code className="bg-gray-200 text-red-600 px-1 rounded">الحدود</code>
                    بتحديد العرض والنمط واللون للحدود:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><code className="bg-gray-200 text-red-600 px-1 rounded">عرض الحدود</code></li>
                    <li><code className="bg-gray-200 text-red-600 px-1 rounded">نمط الحدود</code></li>
                    <li><code className="bg-gray-200 text-red-600 px-1 rounded">لون الحدود</code></li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">مربع الهوامش</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    الهامش هو المسافة خارج الحدود، والتي تفصل بين صندوق وآخر.
                    يمكن أن تتداخل الهوامش، مما يعني أن المسافة بين صندوقين متجاورين
                    يتم تحديدها بواسطة الهوامش الأكبر بدلاً من مجموعهما.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">مثال</h2> <div className="border-b border-gray-300 mb-6" />
                <CodeBlock code={`/* مثال على CSS */
p {
    العرض: 100px;
    الارتفاع: تلقائي;
    الحشو: 10px 20px;
    الحدود: 5px صلبة باللون الأسود;
    الهامش: 20px 0;
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    يقوم هذا الكود بتنسيق الفقرات مع عرض محدد، حشو، حدود، وهوامش.
                    افتح أدوات المطور (<kbd>F12</kbd> في Chrome أو <kbd>Ctrl + Shift + C</kbd> في Firefox)
                    لفحص هذه الصناديق أثناء العمل.
                </p>
            </section >

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">نظرة عامة على التفاعلات</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    في CSS، إدارة الصناديق تتجاوز مجرد تحديد حجمها. إنها تتعلق أيضًا بجعلها تفاعلية ومتجاوبة.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">التجاوز (Overflow)</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    عندما يتم تحديد حجم الصندوق بقيم ثابتة، قد لا يتناسب محتواه دائمًا ضمن المساحة المخصصة. هذا يؤدي إلى تجاوز المحتوى.
                    تتحكم خاصية <code className="bg-gray-200 text-red-600 px-1 rounded">التجاوز</code> في كيفية التعامل مع هذه الحالة.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                        <strong>تلقائي:</strong> يحدد المتصفح السلوك، وغالبًا ما يضيف شريط تمرير إذا كان المحتوى يتجاوز صندوق الحشو.
                    </li>
                    <li>
                        <strong>مخفي:</strong> يتم قص المحتوى ليتناسب مع صندوق الحشو، ولا يتم عرض شريط تمرير.
                    </li>
                    <li>
                        <strong>مرئي:</strong> القيمة الافتراضية. يمكن أن يتجاوز المحتوى خارج صندوق الحشو.
                    </li>
                </ul>

                <h4 className="text-xl font mb-2">مثال</h4>
                <CodeBlock code={`<p class="autoscroll">
  لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسكينغ إيليت...
</p>
<p className="clipped">
  لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسكينغ إيليت...
</p>`} />
                <CodeBlock code={`/* مثال على CSS */
p {
    العرض: 400px;
    الارتفاع: 2.5em;
    الحشو: 1em;
    الحدود: 1px صلبة باللون الأسود;
}
.autoscroll { overflow: auto; }
.clipped { overflow: hidden; }`} />
            </section >

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">أنواع الصناديق</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    النموذج الذي استعرضناه حتى الآن ينطبق أساسًا على صناديق الكتل. ومع ذلك، يتضمن CSS أنواعًا أخرى من الصناديق، كل منها له سلوك مختلف.
                    خاصية <code className="bg-gray-200 text-red-600 px-1 rounded">display</code> تحدد نوع الصندوق للعنصر.
                </p>

                <h4 className="text-xl font mb-2">صناديق الكتل</h4>
                <p className="text-lg leading-relaxed mb-4">
                    صناديق الكتل تتراكم عموديًا، مما يكسر الخط البصري قبل وبعد الصندوق. ينطبق نموذج الصندوق القياسي على هذه الصناديق.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li><code className="bg-gray-200 text-red-600 px-1 rounded">&lt;div&gt;</code></li>
                    <li><code className="bg-gray-200 text-red-600 px-1 rounded">&lt;p&gt;</code></li>
                    <li><code className="bg-gray-200 text-red-600 px-1 rounded">&lt;footer&gt;</code></li>
                    <li><code className="bg-gray-200 text-red-600 px-1 rounded">&lt;article&gt;</code></li>
                </ul>

                <h4 className="text-xl font mb-2">صناديق الخط</h4>
                <p className="text-lg leading-relaxed mb-4">
                    صناديق الخط تتدفق مع النص، دون كسر الخط البصري قبل أو بعد الصندوق.
                    ينطبق نموذج الصندوق ولكنه لا يؤثر على الصناديق المحيطة.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li><code className="bg-gray-200 text-red-600 px-1 rounded">&lt;span&gt;</code></li>
                    <li><code className="bg-gray-200 text-red-600 px-1 rounded">&lt;em&gt;</code></li>
                    <li><code className="bg-gray-200 text-red-600 px-1 rounded">&lt;a&gt;</code></li>
                    <li><code className="bg-gray-200 text-red-600 px-1 rounded">&lt;img&gt;</code></li>
                </ul>

                <h4 className="text-xl font mb-2">مثال</h4>
                <CodeBlock code={`<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <span class="inline">Mauris tempus turpis id ante mollis dignissim.</span>
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <span class="block">Mauris tempus turpis id ante mollis dignissim.</span>
</p>`} />
                <CodeBlock code={`/* مثال CSS */
p {
    padding: 1em;
    border: 1px solid black;
}
span {
    padding: 0.5em;
    border: 1px solid green;
    background-color: yellow;
}
.inline { display: inline; }
.block { display: block; }`} />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">CSS: نموذج الصندوق المرن (Flexbox)</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    قدمت CSS3 نموذج صندوق جديد يسمى Flexbox (اختصار لـ *Flexible Box*) لتلبية احتياجات التصميم المتجاوب.
                    يختلف هذا النموذج عن نموذج الصندوق القياسي، حيث يوفر طريقة فعالة لترتيب العناصر والمحاذاة وتوزيع المساحة بينها
                    داخل حاوية حتى عندما تكون أبعادها غير معروفة أو ديناميكية.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    يسمح Flexbox للعناصر الفرعية للحاوية بالتحرك في أي اتجاه ويمكنها تعديل أبعادها لتناسب المساحة المتاحة.
                </p>
                <a
                    href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline mt-4 block"
                >
                    تعلم المزيد عن Flexbox
                </a>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">نشاط التدريب</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    استكشف Flexbox من خلال التمارين التفاعلية. جرب Flexbox Froggy!
                </p>
                <a
                    href="https://flexboxfroggy.com/#fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline mt-4 block"
                >
                    تمرين Flexbox Froggy
                </a>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">النقاط الأساسية</h2>
                <div className="border-b border-gray-300 mb-6" />
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>
                        في CSS، يمكن تعديل تنسيق العنصر المستهدف عن طريق ضبط محتواه
                        (<code className="bg-gray-200 text-red-600 px-1 rounded">height</code> و <code className="bg-gray-200 text-red-600 px-1 rounded">width</code>),
                        الهوامش الداخلية (<code className="bg-gray-200 text-red-600 px-1 rounded">padding</code>), الحدود
                        (<code className="bg-gray-200 text-red-600 px-1 rounded">border</code>), والهوامش الخارجية
                        (<code className="bg-gray-200 text-red-600 px-1 rounded">margin</code>).
                    </li>
                    <li>
                        يمكن إدارة التجاوز باستخدام خاصية <code className="bg-gray-200 text-red-600 px-1 rounded">overflow</code> للتعامل مع المحتوى
                        الذي يتجاوز الحاوية الخاصة به. تشمل الخيارات الشائعة
                        <code className="bg-gray-200 text-red-600 px-1 rounded">auto</code>, <code className="bg-gray-200 text-red-600 px-1 rounded">hidden</code>,
                        <code className="bg-gray-200 text-red-600 px-1 rounded">visible</code>, و <code className="bg-gray-200 text-red-600 px-1 rounded">scroll</code>.
                    </li>
                    <li>
                        يمكن أن تكون أنواع الصناديق <code className="bg-gray-200 text-red-600 px-1 rounded">block</code> أو <code className="bg-gray-200 text-red-600 px-1 rounded">inline</code>.
                        يمكن استخدام خاصية <code className="bg-gray-200 text-red-600 px-1 rounded">display</code> للتبديل بين هذه الأنواع.
                    </li>
                </ul>
            </section>
        </div >

    );
};

export default FontsPage