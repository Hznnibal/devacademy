import React from "react";

const Page: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">HTML - 03 - التنسيق</h1>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">تنسيق النصوص</h2>
                <div className="border-b border-gray-300 mb-6" />
                <section className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">التنسيق المنطقي</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        باستخدام هذه العلامات، يفسر المتصفح تنسيق النصوص. وغالبًا ما تستخدم هذه العلامات في بيئات غير رسومية (مثل DOS) وأصبحت أقل شيوعًا.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;blockquote&gt;</code>: تشير إلى اقتباس
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;code&gt;</code>: تشير إلى الشيفرة البرمجية
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;em&gt;</code>: التأكيد (يعرض بخط مائل ولكن له دلالة دلالية)
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;strong&gt;</code>: يبرز النص بالخط العريض
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;samp&gt;</code>: يعرض الأحرف حرفيًا
                        </li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">التنسيق الفيزيائي</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        باستخدام هذه العلامات، تتحكم فيما يعرضه المتصفح.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;b&gt;</code>: يعرض النص بالخط العريض
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;i&gt;</code>: يعرض النص بالخط المائل
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;u&gt;</code>: يضع خطًا تحت النص
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;small&gt;</code>: يعرض النص بخط أصغر
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;sup&gt;</code>: يعرض النص كأعلى النص
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;sub&gt;</code>: يعرض النص كجزء من النص السفلي
                        </li>
                    </ul>
                </section>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">الخطوط</h2>
                <div className="border-b border-gray-300 mb-6" />

                <section className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">استخدام CSS</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        قامت HTML5 بإزالة معظم العلامات المستخدمة لإدارة الخطوط (<code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;font&gt;</code>، <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;color&gt;</code>، <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;size&gt;</code>...)، والتي يجب أن تتم إدارتها الآن حصريًا من خلال CSS، الذي سندرسه لاحقًا.
                    </p>
                </section>

                <section className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">الحروف المائلة والحروف الخاصة</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        سابقًا، لكي يتم التعرف على الحروف المائلة والحروف الخاصة بشكل صحيح، كان يجب استبدالها في النص برمز يسمى كيان HTML:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            رمز رقمي (رمز ISO)، يبدأ بـ <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&#38;#</code> ويليه فاصلة منقوطة. على سبيل المثال، لرمز حقوق الطبع والنشر ©: <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&#38;#169;</code>، أو للحرف è: <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&#38;#232;</code>
                        </li>
                        <li>
                            بعض الرموز يمكن أن تحتوي على اسم: لحقوق الطبع والنشر، يمكنك كتابة <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&#38;copy;</code>، أو لـ è، <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&#38;egrave;</code>
                        </li>
                    </ul>
                </section>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-2">تمرين عملي</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    خذ صفحة HTML التي أنشأتها سابقًا واختبر العلامات المختلفة التي تم مناقشتها في هذا الفصل.
                </p>
            </section>
        </div>
    );
};

export default Page;
