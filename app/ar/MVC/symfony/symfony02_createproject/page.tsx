import Link from 'next/link';
import React from 'react';

const SymfonyProject: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">إنشاء مشروع Symfony</h1>

            <h2 className="text-2xl font-semibold mt-4 mb-2">مباديء بدء المشروع</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                بعد تثبيت الأدوات المطلوبة، يمكنك بدء مشروع Symfony الخاص بك من خلال اتباع الخطوات في هذا <a className="text-blue-500" href='https://symfony.com/doc/current/setup.html'>الدليل.</a>
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">هيكل مشروع Symfony</h2>
            <ul className="list-disc list-inside mb-4">
                <li><strong>[bin]</strong> - يحتوي على أدوات سطر الأوامر لمسح الذاكرة المؤقتة وتحديث قاعدة البيانات.</li>
                <li><strong>[config]</strong> - يخزن التكوينات للحزم والخدمات والمسارات.</li>
                <li><strong>[src]</strong> - جوهر المشروع (جزئي النموذج ووحدة التحكم من MVC).</li>
                <li><strong>[templates]</strong> - يحتوي على العروض (جزء العرض من MVC).</li>
                <li><strong>[public]</strong> - نقطة الدخول إلى التطبيق مع وحدة التحكم الأمامية (index.php).</li>
            </ul>

            <h3 className="text-xl font-medium mt-3 mb-2">ملاحظة:</h3>
            <p className="text-base mb-4">
                تستخدم ملفات التكوين تنسيق <strong>.yaml</strong> الذي يعتمد على المفاتيح والقيم بشكل بسيط.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">عرض صفحة باستخدام Symfony</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                وحدات التحكم هي فئات PHP مسؤولة عن بناء الصفحات. كل طريقة في وحدة تحكم مرتبطة بمسار. تتعامل الطرق مع الطلبات الواردة وتعيد كائنات استجابة Symfony تحتوي على HTML أو JSON أو ملفات.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">التوجيه</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                تربط المسارات عناوين URL بأساليب وحدة التحكم. يمكن تعريف المسارات باستخدام:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>ملفات XML</li>
                <li>فئات PHP</li>
                <li>ملفات التكوين .yaml</li>
                <li>التعليقات التوضيحية (الأكثر شيوعًا من أجل الرؤية)</li>
            </ul>

            <div className="text-center mt-8">
                <Link href="symfony02_createproject/controller" className="text-blue-600 underline text-lg">
                    دعنا ننشئ وحدة التحكم
                </Link>
            </div>

            <h2 className="text-2xl font-semibold mt-4 mb-2">القوالب</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                يستخدم Symfony Twig، محرك القوالب، للعروض. تدعم قوالب Twig تمرير المتغيرات والوراثة. تحتوي القوالب على الامتداد <strong>.html.twig</strong>.
            </p>

            <div className="text-center mt-8">
                <Link href="symfony02_createproject/templates" className="text-blue-600 underline text-lg">
                    دعنا ننشئ العرض
                </Link>
            </div>
            <p className="text-base mb-4">
                باتباع هذا المورد، ستتعلم كيفية ربط العروض ووحدات التحكم المختلفة في تطبيق Symfony الخاص بك، بالإضافة إلى كيفية تمرير البيانات من وحدة التحكم إلى العرض.
            </p>
            <div className="text-center mt-8">
                <Link href="symfony02_createproject/secondpage" className="text-blue-600 underline text-lg">
                    الصفحة الثانية
                </Link>
            </div>

            <h2 className="text-2xl font-semibold mt-4 mb-2">قاعدة البيانات و Doctrine</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                يستخدم Symfony Doctrine، أداة ربط الكائنات بالعلاقات (ORM)، للتفاعل مع قواعد البيانات. يقوم Doctrine بربط مخططات قاعدة البيانات بفئات التطبيق، مما يتيح للمطورين العمل مع الكائنات بدلاً من SQL.
            </p>
            <div className="text-center mt-8">
                <Link href="symfony02_createproject/orm" className="text-blue-600 underline text-lg">
                    ORM
                </Link>
            </div>

            <p className="text-base mb-4">
                تتيح Fixtures إدخال بيانات اختبار في قاعدة البيانات. راجع الوثائق لإنشاء أول Fixtures لك.
            </p>
            <div className="text-center mt-8">
                <Link href="symfony02_createproject/fixtures" className="text-blue-600 underline text-lg">
                    Fixtures
                </Link>
            </div>

            <h3 className="text-xl font-medium mt-3 mb-2">ملاحظة:</h3>
            <p className="text-base mb-4">
                يدعم Symfony أيضًا ميزات مثل إنشاء النماذج، والمصادقة، والأذونات، ودمج API مع API Platform، والتي ستستكشفها لاحقًا.
            </p>
        </div>
    );
};

export default SymfonyProject;
