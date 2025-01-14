import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const SymfonyFixtures: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">البيانات الوهمية في Symfony</h1>

            <h2 className="text-2xl font-semibold mt-4 mb-2">مقدمة عن البيانات الوهمية</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                توفر البيانات الوهمية في Symfony طريقة سهلة لإدخال البيانات في الكيانات الخاصة بك. هذه مفيدة للاختبار والتطوير عندما تحتاج إلى بيانات مسبقة التعريف.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">إنشاء بيانات وهمية</h2>
            <p className="text-base mb-4">
                يمكنك استخدام الأداة Maker لإنشاء هيكل البيانات الوهمية:
            </p>

            <CodeBlock code={`php bin/console make:fixture Jeu1`} />

            <p className="text-base mb-4">
                ستقوم هذه التعليمة بإنشاء ملف جديد <code className="bg-gray-200 text-red-600 px-1 rounded">src/DataFixtures/Jeu1.php</code> الذي سيبدو كما يلي:
            </p>

            <CodeBlock code={`<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class Jeu1 extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);

        $manager->flush();
    }
}`} />

            <p className="text-base mb-4">
                عندما تشغل البيانات الوهمية الخاصة بك، سيتم استدعاء الطريقة <code className="bg-gray-200 text-red-600 px-1 rounded">load</code>. لاحظ أن المعامل <code className="bg-gray-200 text-red-600 px-1 rounded">$manager</code> هو مثيل لـ <code className="bg-gray-200 text-red-600 px-1 rounded">ObjectManager</code>، الذي يتيح لك حفظ الكيانات الخاصة بك في قاعدة البيانات.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">طريقتان مفيدتان لـ $manager</h3>
            <ul className="list-disc pl-5 mb-4">
                <li><strong>persist</strong> – هذه الطريقة تخبر Doctrine أنه يجب حفظ كائن جديد.</li>
                <li><strong>flush</strong> – هذه الطريقة تأمر Doctrine بتوليد SQL اللازم لتحديث قاعدة البيانات.</li>
            </ul>

            <h3 className="text-xl font-medium mt-3 mb-2">إنشاء أول فنان</h3>
            <p className="text-base mb-4">
                لإدخال أول فنان في قاعدة البيانات، أضف الكود التالي:
            </p>

            <CodeBlock code={`$artist1 = new Artist();
$artist1->setName("Queens Of The Stone Age");
$artist1->setUrl("https://qotsa.com/");

$manager->persist($artist1);
$manager->flush();`} />

            <h3 className="text-xl font-medium mt-3 mb-2">تشغيل البيانات الوهمية</h3>
            <p className="text-base mb-4">
                لتشغيل البيانات الوهمية، نفذ الأمر التالي:
            </p>

            <CodeBlock code={`php bin/console doctrine:fixtures:load`} />

            <p className="text-base mb-4">
                بدلاً من ذلك، يمكنك استخدام الاختصار:
            </p>

            <CodeBlock code={`php bin/console d:f:l`} />

            <p className="text-base mb-4">
                سيطلب منك Symfony تأكيد العملية قبل مسح قاعدة البيانات الخاصة بك. بعد تحميل البيانات الوهمية، تحقق من أن البيانات قد تم إدخالها بشكل صحيح في قاعدة البيانات.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">إضافة قرص وربطه بالفنان</h3>
            <p className="text-base mb-4">
                الآن، دعنا نضيف قرصًا ونربطه بالفنان. يمكنك توسيع كود البيانات الوهمية كما يلي:
            </p>

            <CodeBlock code={`$artist1 = new Artist();
$artist1->setName("Queens Of The Stone Age");
$artist1->setUrl("https://qotsa.com/");

$manager->persist($artist1);

$disc1 = new Disc();
$disc1->setTitle("Songs for the Deaf");
$disc1->setPicture("https://en.wikipedia.org/wiki/Songs_for_the_Deaf#/media/File:Queens_of_the_Stone_Age_-_Songs_for_the_Deaf.png");
$disc1->setLabel("Interscope Records");

$manager->persist($disc1);

// ربط القرص بالفنان
$disc1->setArtist($artist1);
// أو 
$artist1->addDisc($disc1);

$manager->flush();`} />

            <h3 className="text-xl font-medium mt-3 mb-2">ربط الكيانات</h3>
            <p className="text-base mb-4">
                لاحظ الأسطر الأخيرة من الكود حيث نربط كيان <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code> و <code className="bg-gray-200 text-red-600 px-1 rounded">Artist</code>:
            </p>
            <ul className="list-disc pl-5 mb-4">
                <li>لتحديد <strong>الفنان</strong> للـ <strong>القرص</strong>، استخدم <code className="bg-gray-200 text-red-600 px-1 rounded">$disc1-{`>`}setArtist($artist1);</code></li>
                <li>لإضافة <strong>قرص</strong> إلى <strong>الفنان</strong>، استخدم <code className="bg-gray-200 text-red-600 px-1 rounded">$artist1-{`>`}addDisc($disc1);</code></li>
            </ul>

            <p className="text-base mb-4">
                هاتان الطريقتان تعادلان وتحققان نفس النتيجة. بما أن العلاقة هي OneToMany، يمكنك اختيار إدارتها من جانب "الواحد" أو جانب "العديد".
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">الخطوة الأخيرة</h3>
            <p className="text-base mb-4">
                شغل البيانات الوهمية مرة أخرى وتحقق في قاعدة البيانات من أن العلاقة بين كياني <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code> و <code className="bg-gray-200 text-red-600 px-1 rounded">Artist</code> قد تم إنشاؤها بشكل صحيح.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">الخاتمة</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                لقد قمت بإنشاء بيانات وهمية بنجاح وأدخلت البيانات في الكيانات الخاصة بك باستخدام Symfony و Doctrine. البيانات الوهمية هي أداة ممتازة للاختبار وملء قاعدة البيانات بالبيانات النموذجية. استمر في استكشاف دعم Doctrine في Symfony لبناء علاقات أكثر تعقيدًا وتعزيز تطبيقك.
            </p>
        </div>
    );
};

export default SymfonyFixtures;
