import Link from 'next/link';
import React from 'react';

const MvcWithSymfony: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">معمارية MVC باستخدام Symfony (إطار عمل PHP)</h1>

            <h2 className="text-2xl font-semibold mt-4 mb-2">الأهداف:</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                بنهاية هذه الجلسة، ستكون قادرًا على تعريف مبادئ معمارية MVC وتنفيذها في مشروع ويب.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">التقدم:</h2>
            <div className="border-b border-gray-300 mb-6" />
            <h3 className="text-xl font-bold mt-3 mb-2">المرحلة 1:</h3>
            <p className="text-base mb-4">ابدأ بقراءة هذه المقدمة عن  <Link href="/courses/ar/MVC/symfony/symfony01_intro/mvcarchitecture" className="text-blue-500">معمارية MVC.</Link></p>

            <h3 className="text-xl font-bold mt-3 mb-2">المرحلة 2:</h3>
            <h4 className="text-lg font-medium mt-3 mb-2">اكتشاف Symfony:</h4>
            <p className="text-base mb-4">
                تم إنشاء إطار العمل المفتوح المصدر Symfony في عام 2005 من قبل وكالة الويب الفرنسية SensioLabs، التي أسسها فابيان بوتنسير وغريغوري باسكال.
                كان نجاح Symfony فوريًا، خاصة عندما أعلنت Yahoo! عن نيتها نقل بعض الأدوات إلى هذا الإطار.
                منذ ذلك الحين، أصبح Symfony أحد الإطارات الرائدة في PHP عالميًا، جنبًا إلى جنب مع Zend.
            </p>

            <p className="text-base mb-4">
                العديد من الشركات تستخدم Symfony، بما في ذلك Dailymotion، Joomla، Drupal، Magento، PrestaShop، Le Parisien، FranceTV، BBC، وAuchan.fr.
            </p>

            <p className="text-base mb-4">
                يوفر Symfony بنية أساسية لتطوير مشاريع الويب باستخدام PHP، متبعًا مبادئ معمارية MVC.
                في مشروع Symfony، ستجد النماذج (التي تسمى الكيانات)، والعروض (التي يتم تطويرها باستخدام HTML/TWIG)، ووحدات التحكم.
            </p>

            <p className="text-base mb-4">
                باعتباره إطارًا موجهًا للكائنات، يتكون Symfony من فئات أساسية يمكن توسيعها وتخصيصها من خلال الوراثة، وفقًا لاحتياجات التطبيق المحددة.
            </p>

            <p className="text-base mb-4">
                يتيح لك استخدام Symfony تركيز المطورين على منطق الأعمال في التطبيق بدلاً من تفاصيل التنفيذ. يمكن إضافة وحدات إضافية مع نمو المشروع.
            </p>

            <h4 className="text-lg font-medium mt-3 mb-2">الإصدارات الحالية:</h4>
            <p className="text-base mb-4">
                الإصدار الحالي طويل الأجل (LTS) هو 6.4، وأحدث إصدار مستقر هو 7.2. ومع ذلك، تتغير هذه الإصدارات بشكل متكرر.
                للحصول على أحدث التحديثات، تحقق من صفحة إصدارات Symfony.
            </p>

            <h4 className="text-lg font-medium mt-3 mb-2">المتطلبات المسبقة:</h4>
            <ul className="list-disc list-inside mb-4">
                <li className="text-base mb-2">إصدار حديث من PHP (والمتطلبات اللازمة).</li>
                <li className="text-base mb-2">تحقق من إصدار PHP باستخدام: <code className="bg-gray-200 text-red-600 px-1 rounded">php -v</code></li>
                <li className="text-base mb-2">Composer (مدير الاعتمادات).</li>
                <li className="text-base mb-2">تحقق من إصدار Composer باستخدام: <code className="bg-gray-200 text-red-600 px-1 rounded">composer -v</code></li>
                <li className="text-base mb-2">Symfony CLI.</li>
                <li className="text-base mb-2">تحقق من إصدار Symfony CLI باستخدام: <code className="bg-gray-200 text-red-600 px-1 rounded">symfony -v</code></li>
            </ul>

            <p className="text-base mb-4">
                لتثبيت Symfony، اتبع دليل التثبيت <a className="text-blue-500" href='https://symfony.com/download'>وثائق Symfony.</a>
            </p>
        </div>
    );
};

export default MvcWithSymfony;
