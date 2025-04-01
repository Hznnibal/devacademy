import { CodeBlock } from '@/components/CodeBlock/code-block';
import Image from 'next/image';
import React from "react";


const Page: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">HTML - 02 - العلامات</h1>
            <section>{/* مقدمة */}
                <h2 className="text-2xl font-semibold mb-2">مقدمة</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="mb-8">
                    تتكون صفحة الويب، كما رأينا في الفصل السابق، من قسم الرأس (<em>البيانات الوصفية</em>)
                    وجسم الوثيقة للمحتوى، المحاط بعلامة{" "}
                    <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;body&gt;</code>.

                    يحتوي هذا الجزء الأخير على علامات هيكلية، التي تعرف هيكل صفحة الويب (الرأس، الصفوف، الأعمدة، إلخ)،
                    وعلامات التنسيق التي تقوم بتنسيق المحتوى (النصوص، إلخ).

                    تشكل العلامات الهيكلية تخطيط الصفحة؛ فهي غالبًا من النوع الكتلي، على عكس علامات التنسيق،
                    التي غالبًا ما تكون من النوع المضمن.
                </p>
            </section>

            <section>{/* أنواع العلامات */}
                <h2 className="text-2xl font-semibold mb-2">أنواع العلامات</h2> <div className="border-b border-gray-300 mb-6" />

                {/* علامات من نوع "Blocs" */}
                <div>
                    <h3 className="text-xl font-medium mb-3">علامات من نوع "Blocs"</h3>
                    <p className="mb-3">
                        العلامات من النوع "Blocs" تشغل العرض الكامل المتاح، مما يخلق كتلة من المحتوى.
                        في الوضع الافتراضي، تمتد بنسبة 100٪ من عرض العنصر الأب.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;address&gt;</code>: معلومات الاتصال
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;article&gt;</code>: محتوى المقالة
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;aside&gt;</code>: محتوى جانبي
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;audio&gt;</code>: مشغل الصوت
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;blockquote&gt;</code>: اقتباس طويل
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;canvas&gt;</code>: لوحة رسم
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;div&gt;</code>: تقسيم وثيقة
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;fieldset&gt;</code>: مجموعة من الحقول
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;footer&gt;</code>: تذييل الصفحة أو القسم
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;form&gt;</code>: نموذج
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;h1&gt;</code> - <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;h6&gt;</code>: مستويات العناوين من 1 إلى 6
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;header&gt;</code>: رأس الصفحة أو القسم
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;hr&gt;</code>: خط تقسيم أفقي
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;nav&gt;</code>: تحتوي على روابط التنقل
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;ol&gt;</code>: قائمة مرقمة
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;p&gt;</code>: فقرة
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;pre&gt;</code>: نص منسق مسبقًا
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;section&gt;</code>: قسم من صفحة ويب
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;table&gt;</code>: جدول
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;ul&gt;</code>: قائمة غير مرقمة
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;video&gt;</code>: مشغل الفيديو
                        </li>
                    </ul>
                </div>

                {/* علامات من نوع "Inline" */}
                <div>
                    <h3 className="text-xl font-semibold mt-6 mb-3">علامات من نوع "Inline"</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        على عكس العناصر الخاصة بالكتل، تأخذ العناصر المتجاورة فقط المساحة المطلوبة لمحتواها دون كسر تدفق النص.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;a&gt;</code>: رابط
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;abbr&gt;</code>: اختصار
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;acronym&gt;</code>: اختصار للمصطلح
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;b&gt;</code>: نص غامق
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;br&gt;</code>: سطر جديد
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;button&gt;</code>: زر
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;cite&gt;</code>: عنوان عمل
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;code&gt;</code>: شريحة تعليمية
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;em&gt;</code>: تأكيد
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;i&gt;</code>: مائل
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;img&gt;</code>: صورة
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;input&gt;</code>: حقل نموذج
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;label&gt;</code>: تسمية حقل نموذج
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;select&gt;</code>: قائمة منسدلة
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;small&gt;</code>: نص صغير
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;span&gt;</code>: حاوية متجاورة عامة
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;strong&gt;</code>: نص مهم (يظهر غامقًا ولكن يختلف في المعنى الدلالي)
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;sub&gt;</code>: نص فرعي
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;sup&gt;</code>: نص علوي
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;textarea&gt;</code>: منطقة نصية (النماذج)
                        </li>
                    </ul>
                </div>
            </section>

            <section>{/* الرابط إلى W3Schools */}
                <p className="text-lg leading-relaxed mt-6 mb-6">
                    هذه القوائم ليست شاملة. يمكنك الرجوع إلى{" "}
                    <a
                        href="https://www.w3schools.com/tags"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline hover:text-blue-600"
                    >
                        توثيق W3Schools
                    </a>{" "}
                    للعثور على القائمة الكاملة لجميع العلامات.
                </p>
            </section>
            <section>{/* قسم يعرض رؤوس الأقسام */}
                <h2 className="text-2xl font-semibold mb-2">التقسيم</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    كما رأينا، تساعد العناصر الكتلية في هيكلة صفحة الويب داخل جسم الصفحة{" "}
                    <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;body&gt;</code>.
                </p>
                <br />
                <p className="text-lg leading-relaxed mb-4">أدخلت HTML5 علامات جديدة:</p>
                <br />
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;header&gt;</code>: تشير إلى الرأس (مثل الشعار)
                    </li>
                    <li>
                        <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;nav&gt;</code>: تشير إلى كتلة التنقل، مثل القائمة
                    </li>
                    <li>
                        <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;section&gt;</code>: تشير إلى قسم المحتوى
                    </li>
                    <li>
                        <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;article&gt;</code>: تشير إلى مقال من المحتوى؛ يجب أن تكون هذه العلامة محاطة بقسم (يمكن أن يحتوي على عدة مقالات)
                    </li>
                    <li>
                        <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;aside&gt;</code>: توضع بجانب مقال (أو قسم) لتقديم نصوص تكميلية (ملاحظة، مرجع، إلخ) ذات صلة مباشرة بالمقال. يجب عدم استخدام هذه العلامة لإنشاء أعمدة جانبية غير متعلقة بالمحتوى الرئيسي.
                    </li>
                </ul>
                <br />
                <h3 className="text-xl font-semibold mb-2">مثال على التقسيم باستخدام العلامات الجديدة:</h3>
                <Image
                    src="/HTML_02_sectionnement.png"
                    alt="مثال على التقسيم باستخدام HTML5"
                    width={480}
                    height={360}
                    className="mb-4"
                />
                <p className="text-lg leading-relaxed mb-4">
                    علامة <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;div&gt;</code> اختصار لكلمة "division"، هي حاوية عامة تساعد في تنظيم المحتوى دون تمثيل أي شيء دلالي. يجب استخدامها عندما لا توجد علامة مناسبة دلالياً.
                </p>
                <br />
                <p className="text-lg leading-relaxed mb-4">مثال لاستخدام <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;div&gt;</code>:</p>
                <br />
                <CodeBlock code=
                    {`<div>Hello world!</div>
<div>
   <div>Hello world!</div>
</div>
<div>
    <div>
        <p>Hello world!</p>
    </div>
</div>`} />

                <br />
                <p className="text-lg leading-relaxed mb-4">
                    من أجل تحسين القراءة والبنية، يجب تقسيم الوثائق إلى فقرات باستخدام علامة <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;p&gt;</code>، التي تبدأ فقرة جديدة. بينما تستخدم علامة <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;br&gt;</code> من أجل فاصل بسيط.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2 mt-6">علامات أخرى</h2> <div className="border-b border-gray-300 mb-6" />
                {/* الرؤوس الهيكلية */}
                <h3 className="text-xl font-semibold mb-3">الرؤوس الهيكلية</h3>
                <p className="mb-1">
                    تسلط علامات الرأس الضوء على أقسام النص. توجد أنماط رأسية متعددة معرفة بواسطة العلامات{" "}
                    <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;h1&gt;</code> (الأكبر) إلى{" "}
                    <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;h6&gt;</code> (الأصغر)، مما يوفر ستة مستويات مختلفة من الرؤوس.
                    يتم احتواء نص الرأس بين العلامات الافتتاحية والإغلاق التي تختارها.
                </p>
                <br />
                <p className="">
                    <strong>نصيحة SEO:</strong> تأكد من وجود عنصر <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">H1</code> واحد على الأقل في كل صفحة. يجب أن تحتوي كل صفحة على رأس قسم واحد <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">H1</code>.
                </p>
                <br />
                <h4 className="text-xl font-semibold mb-2">مثال على كل علامة رأس:</h4>
                <CodeBlock code=
                    {`<h1>رأس H1 - الأكثر أهمية</h1>
<h2>رأس H2 - أقل أهمية من H1</h2>
<h3>رأس H3 - أقل أهمية من H2</h3>
<h4>رأس H4 - أقل أهمية من H3</h4>
<h5>رأس H5 - أقل أهمية من H4</h5>
<h6>رأس H6 - الأقل أهمية</h6>`} />

                <br />
                <h4 className="text-xl font-semibold mb-2">الناتج المتوقع:</h4>
                <div className="rounded space-y-2 p-4">
                    <h1 className="text-3xl font-bold">رأس H1 - الأكثر أهمية</h1>
                    <h2 className="text-2xl font-semibold mb-2">رأس H2 - أقل أهمية من H1</h2>
                    <h3 className="text-2xl font-medium">رأس H3 - أقل أهمية من H2</h3>
                    <h4 className="text-xl">رأس H4 - أقل أهمية من H3</h4>
                    <h5 className="text-lg">رأس H5 - أقل أهمية من H4</h5>
                    <h6 className="text-base">رأس H6 - الأقل أهمية</h6>
                </div>
                <br />

                {/* علامة الفاصل السطر */}
                <h3 className="text-xl font-semibold mb-3">علامة فاصل السطر &lt;br&gt;</h3>
                <p className="text-lg leading-relaxed mb-4">
                    يمكنك إدراج فاصل سطر باستخدام علامة <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;br&gt;</code>.
                    يجب استخدام هذه العلامة لفواصل الأسطر داخل منطقة النص (مثل <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;div&gt;</code> أو الفقرة أو المقال أو الاقتباس) وليس لتنظيم الصفحة.
                </p>
                <br />

                {/* علامة الخط الأفقي */}
                <h3 className="text-xl font-semibold mb-3">علامة الخط الأفقي &lt;hr&gt;</h3>
                <p className="text-lg leading-relaxed mb-4">
                    يمكنك استخدام علامة الخط الأفقي <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;hr&gt;</code> لفصل أجزاء من مستند HTML.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    في HTML4، كانت العلامات <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;br&gt;</code> و{" "}
                    <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;hr&gt;</code> تتضمن شرطة إغلاق (<code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;br/&gt;</code>،{" "}
                    <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;hr/&gt;</code>) وهذا لم يعد مطلوبًا في HTML5.
                </p>
                <br />

                {/* الخاتمة */}
                <h2 className="text-2xl font-semibold mb-2 mt-6">الخاتمة</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    السؤال الرئيسي الذي يجب أن تطرحه هو: أي علامة يجب أن أستخدمها لإنشاء عمود أو فقرة أو رأس الموقع؟
                    إليك مخطط تدفق للمساعدة في ذلك:
                </p>
                <Image
                    src="/h5d-sectioning-flowchart.png"
                    alt="مثال على التقسيم باستخدام HTML5"
                    width={1110}
                    height={580}
                    className="mb-4"
                />
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-2 mt-6">المهمة لإكمالها</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    صمم صفحة HTML جديدة. يجب أن تحتوي هذه الصفحة على:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>
                        عنوان (باستخدام علامة <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;h1&gt;</code>)
                    </li>
                    <li>
                        فقرة نصية <em>(لوريم إيبسوم)</em> (باستخدام علامة <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;p&gt;</code>)
                    </li>
                    <li>
                        صورة (باستخدام علامة <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;img&gt;</code>)
                    </li>
                </ul>
                <br />
                <h2 className="text-2xl font-semibold mb-2 mt-6">مثال على هيكل HTML:</h2> <div className="border-b border-gray-300 mb-6" />
                <CodeBlock code=
                    {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>صفحتي الجديدة</title>
</head>
<body>
    <h1>مرحبًا بكم في صفحتي</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
    <img src="path-to-your-image.jpg" alt="وصف الصورة">
</body>
</html>`} />

                <br />
                <h3 className="text-lg font-semibold mb-2">التعليمات:</h3>
                <p className="text-lg leading-relaxed mb-4">
                    اتبع هذا الهيكل الأساسي لإنشاء صفحة ويب بسيطة. استبدل النص والصورة بمحتوياتك الخاصة.
                </p>
            </section>

        </div >
    );
};

export default Page;
