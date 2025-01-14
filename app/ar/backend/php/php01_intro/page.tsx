import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const IntroPHP: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">مقدمة إلى PHP</h1>

            {/* قسم المقدمة */}
            <p className="mb-4 leading-relaxed">
                PHP، والمعروفة أيضًا باسم <strong>معالج النصوص الفائق PHP</strong>، هي لغة برمجة من جانب الخادم تم تصميمها خصيصًا لإنشاء صفحات HTML ديناميكية.
            </p>

            <ul className="list-disc list-inside space-y-3 mb-6 pl-4 text-lg">
                <li>
                    <span className="font-semibold">متعددة الأنظمة:</span> متاحة على أنظمة Unix و Windows و Linux.
                </li>
                <li>
                    <span className="font-semibold">دمج قواعد البيانات:</span> تدير قواعد البيانات مثل MySQL بسهولة.
                </li>
                <li>
                    <span className="font-semibold">كفاءة وسرعة:</span> تدير الحركة المرورية العالية مع الحد الأدنى من بطء الخادم.
                </li>
            </ul>

            <p className="mb-4 leading-relaxed">
                تم تطوير PHP في البداية بواسطة <strong>راسموس ليردورف</strong> في عام 1994 تحت اسم PHP/FI.
                وكان الهدف من تطويرها إضافة قدرات معالجة بسيطة لصفحات HTML.
            </p>

            <p className="mb-4 leading-relaxed">
                مع مرور الوقت، أصبحت PHP لغة برمجة مستخدمة على نطاق واسع بسبب توازنها بين <span className="font-semibold">البساطة</span> و <span className="font-semibold">القوة</span>.
                كما أنها مفتوحة المصدر، مما يجعلها مجانية ومتاحة للجميع.
            </p>

            <p className="mb-6 leading-relaxed">
                ساهمت شركات مثل <strong>تكنولوجيا Zend</strong> بشكل كبير في تطوير PHP،
                خاصة من خلال إنشاء <strong>محرك Zend</strong>، وهو محرك تنفيذ PHP.
            </p>

            {/* هيكل البرنامج */}
            <h2 className="text-2xl font-semibold mb-4 ">هيكل البرنامج</h2>
            <div className="border-b border-gray-300 mb-6" />

            <p className="mb-4 leading-relaxed">
                لإعلام الخادم أنه يجب عليه تفسير كود PHP، نحيط السكربت
                بعلامات خاصة، مشابهة لتلك التي في JavaScript.
            </p>

            <CodeBlock code={`<html>
  <body>
    <?php
        // ...
        // السكربت الذي يجب تنفيذه
        // ...
    ?>
  </body>
</html>`} />

            <p className="mb-4 leading-relaxed">
                يجب أن يكون للملف الامتداد <code className=" px-1 rounded">.php</code>.
            </p>

            <p className="mb-4 leading-relaxed">
                ملف PHP هو في الأساس ملف HTML يحتوي على أجزاء يتم معالجتها بواسطة
                مفسر PHP. يتم إحاطتها ضمن
                <code className=" px-1 rounded">{`<?php … ?>`}</code>.
            </p>

            <p className="leading-relaxed">
                ببساطة، الناتج من تنفيذ سكربت PHP هو مستند HTML.
            </p>
        </div >
    );
};

export default IntroPHP;
