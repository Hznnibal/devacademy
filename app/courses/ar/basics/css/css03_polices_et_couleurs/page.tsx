import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const FontsPage: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">الخطوط والألوان</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">الخطوط الافتراضية</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    بشكل افتراضي، أي في غياب ورقة الأنماط (CSS)، سيتم عرض النص (عائلة الخط والحجم) وفقًا لإعدادات المتصفح.
                    كل متصفح له إعدادات افتراضية خاصة به، وقد تختلف بين المتصفحات.
                    يمكن للمستخدمين تعديل هذه الخطوط الافتراضية، ويمكن تجاوزها بواسطة ورقات الأنماط التي يكتبها المطورون أو أطر العمل (مثل Bootstrap، Foundation، إلخ).
                </p>

                <h4 className="text-xl font-semibold mb-3">خصائص الخط</h4>
                <table className="table-auto w-full text-lg mb-6 border  border-gray-500">
                    <thead className="border rounded border-gray-500">
                        <tr >
                            <th className="px-4 py-2">الخاصية</th>
                            <th className="px-4 py-2">الوظيفة</th>
                            <th className="px-4 py-2">مثال</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2">font-family</td>
                            <td className="px-4 py-2">قائمة من عائلات الخطوط للاستخدام</td>
                            <td className="px-4 py-2"><code>#text &#123;font-family: Verdana, sans-serif;&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">font-size</td>
                            <td className="px-4 py-2">حجم الخط، يمكن تحديده بوحدات مختلفة: px، pt، em، rem، %، vw/vh</td>
                            <td className="px-4 py-2"><code>#text &#123;font-size: 14pt;&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">font-style</td>
                            <td className="px-4 py-2">أسلوب الخط: عادي، مائل، مائل بشكل مائل</td>
                            <td className="px-4 py-2"><code>#text &#123;font-style: italic;&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">font-variant</td>
                            <td className="px-4 py-2">متغير الخط: عرض الحروف الكبيرة أو الحروف الصغيرة</td>
                            <td className="px-4 py-2"><code>#text &#123;font-variant: small-caps;&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">font-weight</td>
                            <td className="px-4 py-2">وزن الخط (سمكه) مع قيم مختلفة مثل bold، lighter، semi-bold، إلخ.</td>
                            <td className="px-4 py-2"><code>#text &#123;font-weight: semi-bold;&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">font</td>
                            <td className="px-4 py-2">اختصار لدمج جميع خصائص الخط</td>
                            <td className="px-4 py-2"><code>#text &#123;font: 14pt semi-bold italic small-caps Verdana, sans-serif;&#125;</code></td>
                        </tr>
                    </tbody>
                </table>

            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">عائلات الخطوط</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يتم تحديد اسم الخط عبر الخاصية <code>font-family</code>. يمكن أن تحتوي على عدة أسماء خطوط، مفصولة بفواصل، وعادةً ما تتضمن خطوطًا قياسية لضمان توفر واحد على الأقل في جهاز المستخدم.
                    سيتحقق المتصفح مما إذا كان الخط الأول في القائمة متاحًا، وإذا لم يكن كذلك، سيتحقق من الخط التالي، ويستمر في ذلك حتى يجد تطابقًا. إذا لم يتم العثور على أي شيء، سيتم استخدام الخط الافتراضي للمتصفح.
                    إذا كان اسم الخط يحتوي على مسافات (مثل "Times New Roman")، يجب أن يكون محاطًا بعلامات اقتباس (إما مفردة أو مزدوجة).
                </p>
                <CodeBlock code={`#text {
    font-family: Arial, "Times New Roman", sans-serif;
}`} />
            </section >

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">أنواع الخطوط</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يمكن الإشارة إلى الخطوط إما بواسطة اسم عائلتها أو نوعها (الاسم العام)، الذي يجمع الخطوط بناءً على أنماطها الرسومية (serif، sans-serif، monospace، cursive، إلخ).
                    سيختار المتصفح خطًا مناسبًا من هذه المجموعات العامة إذا لم يكن الخط المحدد متاحًا.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    بعض الخطوط مثل Arial وVerdana وTimes New Roman هي شائعة لأنها موجودة على معظم الأنظمة. ومع ذلك، قد لا تكون الخطوط المتاحة على جهاز متاحة على جهاز آخر، حيث يمكن للمستخدمين تثبيت أو إزالة الخطوط على أنظمتهم.
                    يمكن للمطورين ضمان توفر الخطوط على جميع الأجهزة من خلال استضافة الخطوط مباشرة على الموقع عبر قاعدة <code>@font-face</code>.
                </p>
                <CodeBlock code={` @font-face {
    font-family: "Open Sans";
    src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2");
}`} />
            </section >

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">وحدات حجم الخط</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    تنقسم وحدات حجم الخط إلى نوعين: الوحدات الثابتة (المطلقة) والوحدات النسبية.
                </p>

                <h5 className="text-lg font-semibold mb-3">الوحدات الثابتة</h5>
                <table className="table-auto w-full text-lg mb-6">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">الوحدة</th>
                            <th className="px-4 py-2">الاختصار</th>
                            <th className="px-4 py-2">مثال</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2">النقطة</td>
                            <td className="px-4 py-2">pt</td>
                            <td className="px-4 py-2"><code>#text &#123;font-size: 14pt;&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">بيكا</td>
                            <td className="px-4 py-2">pc</td>
                            <td className="px-4 py-2"><code>#text &#123;font-size: 14pc;&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">السنتيمتر، الميليمتر</td>
                            <td className="px-4 py-2">cm، mm</td>
                            <td className="px-4 py-2"><code>#text &#123;font-size: 14cm;&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">البوصة</td>
                            <td className="px-4 py-2">in</td>
                            <td className="px-4 py-2"><code>#text &#123;font-size: 14in;&#125;</code></td>
                        </tr>
                    </tbody>
                </table>

                <h5 className="text-lg font-semibold mb-3">الوحدات النسبية</h5>
                <table className="table-auto w-full text-lg mb-6">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">الوحدة</th>
                            <th className="px-4 py-2">الاختصار</th>
                            <th className="px-4 py-2">التوسيع</th>
                            <th className="px-4 py-2">مثال</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2">بكسل</td>
                            <td className="px-4 py-2">px</td>
                            <td className="px-4 py-2">نسبياً لجهاز العرض</td>
                            <td className="px-4 py-2"><code>#text &#123;font-size: 14px;&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">نسبة مئوية</td>
                            <td className="px-4 py-2">%</td>
                            <td className="px-4 py-2">نسبياً لحجم الخط للعنصر الأب</td>
                            <td className="px-4 py-2"><code>#text &#123;font-size: 14%;&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">كادراتين</td>
                            <td className="px-4 py-2">em</td>
                            <td className="px-4 py-2">نسبياً لحجم الخط للعنصر الأب</td>
                            <td className="px-4 py-2"><code>#text &#123;font-size: 14em;&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">الجذر em</td>
                            <td className="px-4 py-2">rem</td>
                            <td className="px-4 py-2">نسبياً لحجم الخط لعنصر <code>&lt;html&gt;</code></td>
                            <td className="px-4 py-2"><code>#text &#123;font-size: 0.8rem;&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">عرض نافذة العرض</td>
                            <td className="px-4 py-2">vw</td>
                            <td className="px-4 py-2">نسبياً لعرض جهاز العرض</td>
                            <td className="px-4 py-2"><code>#text &#123;font-size: 14vw;&#125;</code></td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">ارتفاع السطر</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    ارتفاع السطر هو عامل آخر مهم في الطباعة على الويب، يتم تعيينه باستخدام خاصية <code>line-height</code>. مثل خصائص الخط، تعرف المتصفحات ارتفاع سطر افتراضي.
                </p>
                <CodeBlock code={`p {
    line-height: 3em;
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    لاستعادة ارتفاع السطر الافتراضي (الأساسي)، استخدم القيمة <code>normal</code>:
                </p>
                <CodeBlock code={`p {
    line-height: normal;
}`} />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">محاذاة النص</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يمكن محاذاة النص تماماً مثل برامج معالجة النصوص باستخدام خاصية <code>text-align</code>:
                </p>
                <CodeBlock code={`div {
    text-align: center;
}`} />
                <p className="text-lg leading-relaxed mb-4">خيارات المحاذاة:</p>
                <ul className="list-disc pl-8">
                    <li>يسار</li>
                    <li>يمين</li>
                    <li>مركز</li>
                    <li>توزيع</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    ومع ذلك، يُنصح بشكل عام بعدم استخدام محاذاة النص المبرمجة في ممارسات قابلية الاستخدام على الويب.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">خصائص اللون</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    هناك ثلاث خصائص للألوان: لون النص، لون الحدود، ولون خلفية العنصر.
                </p>

                <table className="table-auto w-full text-lg mb-6">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">الخاصية</th>
                            <th className="px-4 py-2">الوظيفة</th>
                            <th className="px-4 py-2">المثال</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2">color</td>
                            <td className="px-4 py-2">لون النص (المقدمة)</td>
                            <td className="px-4 py-2"><code>{`#text {color: #000000;}`}</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">background-color</td>
                            <td className="px-4 py-2">لون الخلفية</td>
                            <td className="px-4 py-2"><code>{`#text {background-color: #000000;}`}</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">border-color</td>
                            <td className="px-4 py-2">لون الحدود</td>
                            <td className="px-4 py-2"><code>{`#text {border-color: #000000;}`}</code></td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">أسماء الألوان والأكواد</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يمكن التعبير عن الألوان إما باسمها باللغة الإنجليزية (مثل الأسود، الأبيض، الأحمر، الأصفر، الفوشيا...)، أو باستخدام الأكواد الست عشرية أو أكواد RGB و HSL.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                    أسماء الألوان مثل "أسود"، "أبيض"، "أحمر"، "فوشيا"، إلخ، تستخدم على نطاق واسع. ومع ذلك، فإن 16 اسمًا فقط للألوان معترف بها رسميًا من قبل W3C.
                </p>
                <CodeBlock code={`#text {
    color: #FF0000; /* أحمر */
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    بالنسبة للألوان الأقل شيوعًا، يوصى باستخدام الأكواد الست عشرية مثل <code>#FF0000</code> للأحمر أو <code>#FFFFFF</code> للأبيض.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">أمثلة على أكواد الألوان</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    إليك بعض الأمثلة على الألوان باستخدام طرق تعريف الألوان المختلفة:
                </p>
                <ul className="list-disc pl-8">
                    <li><code>#FF0000</code> (ست عشري، أحمر)</li>
                    <li><code>rgb(255, 0, 0)</code> (RGB، أحمر)</li>
                    <li><code>hsl(0, 100%, 50%)</code> (HSL، أحمر)</li>
                    <li><code>black</code> (اسم اللون، أسود)</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">الحدود</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يمكن تحديد الحدود بدقة لكل جانب من جوانب العنصر. يمكنك أيضًا تطبيق زوايا دائرية على الحدود باستخدام خاصية <code>border-radius</code>.
                </p>
                <CodeBlock code={`div {
    border: 2px solid red;
    border-radius: 5px;
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    منذ HTML5، أصبح من الممكن إنشاء حدود دائرية باستخدام خاصية <code>border-radius</code>. يمكن التعبير عن درجة الاستدارة بالبكسل أو النسب المئوية.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">تدرجات اللون</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يمكن إنشاء التدرجات باستخدام خاصية CSS <code>background-image</code> باستخدام وظائف <code>linear-gradient</code> أو <code>radial-gradient</code>.
                </p>
                <CodeBlock code={`div {
    background-image: linear-gradient(to right, red, yellow);
}`} />
            </section>
        </div >
    );
};

export default FontsPage;
