import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const ORMSetup: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">العمل مع ORM في Symfony</h1>

            <h2 className="text-2xl font-semibold mt-4 mb-2">بعض المنهجيات</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                في مراحل التصميم التقليدية، تبدأ بتصميم قاعدة بياناتك باستخدام أدوات مثل Merise. ثم تقوم بإنشاء وتنفيذ نص قاعدة البيانات، تليها تعبئة الجداول بالبيانات التجريبية.
            </p>
            <p className="text-base mb-4">
                في هذه الطريقة، يكون نص إنشاء قاعدة البيانات ونص تعبئة البيانات ملفين SQL منفصلين.
            </p>
            <p className="text-base mb-4">
                النموذج المرجعي هو نموذج البيانات المفهومية (MCD).
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">النموذج المرجعي</h3>
            <p className="text-base mb-4">
                يفرض MCD أسماء فريدة لكل حقل. يسمح لك النموذج العلاقي بإدارة العلاقات في قاعدة البيانات باستخدام المفاتيح الخارجية.
            </p>
            <p className="text-base mb-4">
                عند استخدام ORM، تكون الطريقة مختلفة قليلاً. بما أنك ستعمل مع الكائنات، فإنك بحاجة إلى نموذج مرجعي جديد: مخطط فئة UML.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">نموذج UML</h3>
            <p className="text-base mb-4">
                في هذا النموذج، لا حاجة لأسماء فريدة للحقول، ولا ضرورة للمفاتيح الخارجية. بدلاً من ذلك، يتم تمثيل العلاقات بواسطة خاصيتين جديدتين:
            </p>
            <ul className="list-disc pl-5 mb-4">
                <li>
                    <strong>الفنان</strong> في فئة <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code> (يحتوي على كائن <code className="bg-gray-200 text-red-600 px-1 rounded">Artist</code> المرتبط).
                </li>
                <li>
                    <strong>الألبومات</strong> في فئة <code className="bg-gray-200 text-red-600 px-1 rounded">Artist</code> (يحتوي على قائمة من كائنات <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code>).
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4 mb-2">إعداد قاعدة البيانات</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                في هذه الخطوة، ستحدد قاعدة البيانات التي ستستخدمها وأين تقع.
            </p>

            <p className="text-base mb-4">
                قم بتعديل ملف <code className="bg-gray-200 text-red-600 px-1 rounded">.env.local</code> وتحديث <code className="bg-gray-200 text-red-600 px-1 rounded">DATABASE_URL</code> باستخدام ما يلي:
            </p>

            <CodeBlock code={`DATABASE_URL="mysql://db_user:db_password@127.0.0.1:3306/db_name?serverVersion=mariadb-10.3.34&charset=utf8mb4"`} />

            <h2 className="text-2xl font-semibold mt-4 mb-2">إنشاء قاعدة البيانات</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                يمكنك إسقاط وإنشاء قاعدة بياناتك باستخدام الأوامر التالية:
            </p>

            <CodeBlock code={`php bin/console doctrine:database:drop --force`} />
            <CodeBlock code={`php bin/console doctrine:database:create`} />

            <h2 className="text-2xl font-semibold mt-4 mb-2">إنشاء الكيانات</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                يمكنك إنشاء الكيانات يدوياً أو استخدام أداة Symfony Maker للمساعدة في إنشائها. دعونا ننشئ أول كائن، <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code>، باستخدام أمر Maker:
            </p>

            <CodeBlock code={`php bin/console make:entity Disc`} />

            <p className="text-base mb-4">
                بعد تشغيل الأمر، سيتم إنشاء ملف <code className="bg-gray-200 text-red-600 px-1 rounded">Disc.php</code>. بشكل افتراضي، سيضيف Doctrine حقل <code className="bg-gray-200 text-red-600 px-1 rounded">id</code> كمفتاح رئيسي.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">إنشاء الجداول</h3>
            <p className="text-base mb-4">
                بمجرد إنشاء الكيانات، يمكنك إنشاء الجداول اللازمة باستخدام الأمر التالي:
            </p>

            <CodeBlock code={`php bin/console doctrine:schema:update --force`} />

            <h2 className="text-2xl font-semibold mt-4 mb-2">إدارة العلاقات</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                هناك عدة أنواع من العلاقات التي يمكنك إنشاؤها في Doctrine، مثل:
            </p>
            <ul className="list-disc pl-5 mb-4">
                <li>OneToOne</li>
                <li>OneToMany</li>
                <li>ManyToOne</li>
                <li>ManyToMany</li>
            </ul>
            <p className="text-base mb-4">
                في حالتنا، لدينا علاقة OneToMany بين <code className="bg-gray-200 text-red-600 px-1 rounded">Artist</code> و <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code>.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">إضافة علاقة</h3>
            <p className="text-base mb-4">
                دعونا نضيف العلاقة بين <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code> و <code className="bg-gray-200 text-red-600 px-1 rounded">Artist</code> عن طريق تعديل كائن <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code>:
            </p>

            <CodeBlock code={`php bin/console make:entity Disc`} />

            <p className="text-base mb-4">
                عندما يُطلب منك، أضف خاصية جديدة <code className="bg-gray-200 text-red-600 px-1 rounded">artist</code> من نوع علاقة <code className="bg-gray-200 text-red-600 px-1 rounded">ManyToOne</code> وحدد الكائن الهدف كـ <code className="bg-gray-200 text-red-600 px-1 rounded">Artist</code>.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">كود الكائن النهائي</h3>
            <CodeBlock code={`// src/Entity/Disc.php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

class Disc
{
    // الحقول الأخرى...

    /**
     * @ORM\ManyToOne(targetEntity=Artist::class, inversedBy="discs")
     * @ORM\JoinColumn(nullable=false)
     */
    private $artist;

    public function getArtist(): ?Artist
    {
        return $this->artist;
    }

    public function setArtist(?Artist $artist): self
    {
        $this->artist = $artist;
        return $this;
    }
}`} />

            <h2 className="text-2xl font-semibold mt-4 mb-2">الخاتمة</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                لقد تعلمت الآن كيفية تكوين قاعدة بياناتك، وإنشاء الكائنات، وإقامة العلاقات باستخدام Doctrine ORM. الخطوات التالية تتضمن العمليات الأكثر تقدمًا على قاعدة البيانات مثل وظائف CRUD والعمل مع الترحيلات. تأكد من الاطلاع على توثيق Symfony لمزيد من التفاصيل العميقة حول استخدام Doctrine.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">إتمام قاعدة البيانات</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                لإتمام الإعداد، قم بتشغيل الأمر التالي لتحديث مخطط قاعدة بياناتك:
            </p>

            <CodeBlock code={`php bin/console doctrine:schema:update --force`} />
            <p className="text-base mb-4">
                بدلاً من ذلك، يمكنك استخدام الاختصار:
            </p>

            <CodeBlock code={`php bin/console d:s:u --force`} />

            <h3 className="text-xl font-medium mt-3 mb-2">التحقق من هيكل قاعدة البيانات</h3>
            <p className="text-base mb-4">
                بعد تشغيل الأمر، تحقق من هيكل قاعدة بياناتك. يجب أن ترى مفتاحًا خارجيًا يربط كائن <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code> بكائن <code className="bg-gray-200 text-red-600 px-1 rounded">Artist</code>.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">الملخص</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                على الرغم من وجود المفاتيح الخارجية في قاعدة البيانات، إلا أنها غير مرئية صراحة في فئات PHP الخاصة بك. يقوم Doctrine بإدارة العلاقات في الخلفية.
            </p>
            <p className="text-base mb-4">
                للتفاعل مع هذه العلاقات، يجب عليك استخدام الخصائص التي أضافها Doctrine:
            </p>
            <ul className="list-disc pl-5 mb-4">
                <li><strong>artist</strong> في <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code></li>
                <li><strong>discs</strong> في <code className="bg-gray-200 text-red-600 px-1 rounded">Artist</code></li>
            </ul>

            <h3 className="text-xl font-medium mt-3 mb-2">التكثير التلقائي للخصائص</h3>
            <p className="text-base mb-4">
                لاحظ أن Doctrine يضيف تلقائيًا جمعًا لأسماء الخصائص عند التعامل مع العلاقات. على سبيل المثال، خاصية <code className="bg-gray-200 text-red-600 px-1 rounded">discs</code> في كائن <code className="bg-gray-200 text-red-600 px-1 rounded">Artist</code> تحتوي على مصفوفة من كائنات <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code>، لهذا السبب يتم جمعها.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">الخاتمة</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                لقد أكملت الآن الإعداد الأساسي للكائنات والعلاقات في Symfony باستخدام Doctrine ORM. الخطوات التالية تتضمن تنفيذ وظائف CRUD لهذه الكائنات واستكشاف ميزات أكثر تقدمًا مثل الترحيلات واستعلامات قاعدة البيانات. استمر في استكشاف التوثيق الرسمي لـ Symfony لتعميق فهمك لقدراته القوية في ORM.
            </p>

        </div>
    );
};

export default ORMSetup;
