import { CodeBlock } from '@/components/CodeBlock/code-block';
import Image from 'next/image';
import React from 'react';

const UnitTestsWithPHPUnitAndSymfony: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">اختبارات الوحدة باستخدام PHPUnit و Symfony</h1>

            <h2 className="text-2xl font-semibold mb-2">مقدمة</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                تعتبر اختبارات الوحدة أمرًا أساسيًا عند كتابة الكود. فهي تتيح لك اختبار كل أو جزء من الكود بسرعة دون الحاجة للمرور من خلال واجهة المستخدم الرسومية للموقع أو التطبيق.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                لتنفيذها في Symfony، نحتاج إلى تثبيت PHPUnit وكتابة جزء صغير من الكود.
            </p>

            <h2 className="text-2xl font-semibold mb-2">تثبيت PHPUnit</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                لتثبيت PHPUnit في مشروعك، افتح نافذة الأوامر (مثل Git Bash) في جذر المشروع ثم قم بتشغيل الأمر التالي:
            </p>
            <CodeBlock code={`php bin/phpunit`} />
            <p className="text-lg leading-relaxed mb-4">
                هذا الأمر هو الأساس لتشغيل PHPUnit. ومع ذلك، إذا لم يكن PHPUnit مثبتًا في مشروعك بعد، فسيبدأ تلقائيًا عملية التثبيت.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                إذا قمت بإعادة تشغيل هذا الأمر، سيظهر لك رسالة تقول أنه لم يتم تنفيذ أي اختبارات. هذا أمر طبيعي؛ نحن الآن بحاجة لكتابة هذه الاختبارات!
            </p>

            <h3 className="text-lg font-semibold mb-4">اختبار نظام التحقق من صحة الكيان Products</h3>
            <p className="text-lg leading-relaxed mb-4">
                في هذا المثال، سنختبر نظام التحقق من صحة الكيان <code className="code-word">Products</code>. لجعل هذا المثال عمليًا ولنفهم بشكل صحيح نظام اختبار الوحدة، تأكد من إزالة أي قيود تحقق من هذا الكيان (سواء في الكيان نفسه أو في <code className="code-word">ProductsType.php</code>).
            </p>
            <p className="text-lg leading-relaxed mb-4">
                لكتابة هذه الاختبارات، سنضع الاختبار في مجلد <code className="code-word">test</code>، في جذر المشروع:
            </p>
            <Image
                src="/test5.png"
                alt="Validation error screenshot"
                className="screenshot"
                width={260}
                height={260}
            />

            <p className="text-lg leading-relaxed mb-4">
                من أفضل الممارسات لإعداد اختبارات الوحدة هو الحفاظ على نفس هيكل مشروعنا (في مجلد <code className="code-word">src</code>). المسار إلى الكيان <code className="code-word">Products</code> هو <code className="code-word">src/Entity/Products.php</code>، والمسار إلى اختبار الوحدة الخاص به سيكون <code className="code-word">test/Entity/ProductsTest.php</code>.
            </p>

            <h3 className="text-lg font-semibold mb-4">إنشاء الفئة ProductsTest.php</h3>
            <p className="text-lg leading-relaxed mb-4">
                الآن، دعنا ننشئ فئة <code className="code-word">ProductsTest.php</code> كما يلي (تأكد من استيراد الفئات اللازمة):
            </p>
            <CodeBlock code={`<?php

namespace App\Tests\Entity;

use App\Entity\Products;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class ProductsTest extends KernelTestCase
{
    // اكتب اختباراتك هنا
}`} />

            <p className="text-lg leading-relaxed mb-4">
                بالنسبة لفئات الاختبار، يمكنك توسيعها باستخدام عدة فئات أخرى:
            </p>
            <ul className="list">
                <li className="list-item"><strong>TestCase</strong>: لأداء الاختبارات الأساسية.</li>
                <li className="list-item"><strong>KernelTestCase</strong>: يتيح لك كتابة اختبارات في سياق النواة، ويستخدم للاختبارات الوظيفية، وسياق التطبيق، وما إلى ذلك.</li>
                <li className="list-item"><strong>WebTestCase</strong>: يتيح لك اختبار وحدات التحكم والتطبيق ككل.</li>
            </ul>

            <p className="text-lg leading-relaxed mb-4">
                عند إجراء الاختبارات، يتغير البيئة. بشكل افتراضي، عند تشغيل PHPUnit، يقوم Symfony بتعطيل بعض الميزات (مثل إرسال البريد الإلكتروني، وما إلى ذلك). يمكنك إعداد تكوينات لبيئة الاختبار هذه، بما في ذلك تحديد قاعدة بيانات اختبار. للقيام بذلك، افتح ملف <code className="code-word">.env.test</code> وحدد قاعدة بيانات الاختبار بنفس الطريقة التي حددت بها قاعدة البيانات الرئيسية للمشروع. في النهاية، يمكن تعيين نفس التكوينات كما في ملف <code className="code-word">.env</code> هنا.
            </p>

            <h2 className="text-2xl font-semibold mb-2">اختبار كيان Products</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                دعونا نكتب أول اختبار لنا للتحقق من قيود التحقق من الصحة الخاصة بالكيان <code className="code-word">Products</code>.
            </p>

            <h3 className="text-lg font-semibold mb-4">إنشاء طريقة testValid()</h3>
            <p className="text-lg leading-relaxed mb-4">
                نبدأ بإنشاء طريقة تسمى <code className="code-word">testValid()</code>. داخلها، أولاً نحدد خصائص الكيان الذي نريد اختباره. ثم، نقوم بتفعيل التحقق (<code className="code-word">self::bootKernel();</code>)، ونسترجع المدقق من الحاوية (<code className="code-word">{`$error = self::$container->get('validator')->validate($product);`}</code>). أخيرًا، نتوقع عدم وجود أخطاء (يجب أن تنجح الإدخال بما أن البيانات متوافقة مع قاعدة بياناتنا)، ونسترجع الأخطاء.
            </p>

            <CodeBlock code={`<?php

namespace App\Tests\Entity;

use App\Entity\Products;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class ProductsTest extends KernelTestCase
{
    public function testValid()
    {
        // تحديد المنتج لإدخاله في قاعدة البيانات
        $product = (new Products())->setProductName('Product')
            ->setCategoryId(1)
            ->setUnitPrice(183)
            ->setQuantityPerUnit(8)
            ->setUnitsInStock(56)
            ->setUnitsOnOrder(32)
            ->setRedorderLevel(5)
            ->setDiscontinued(0)
            ->setDescription('اختبار وحدة PHP');
        
        // التحقق
        self::bootKernel();
        
        // الحصول على المدقق من الحاوية
        $error = self::$container->get('validator')->validate($product);
        
        // نتوقع عدم وجود أخطاء
        $this->assertCount(0, $error);
    }
}`} />

            <p className="text-lg leading-relaxed mb-4">
                الآن بعد أن كتبنا اختبارنا الأول، يمكننا الانتقال إلى الطرفية وتشغيل PHPUnit باستخدام الأمر التالي:
            </p>
            <CodeBlock code={`php bin/phpunit`} />

            <p className="text-lg leading-relaxed mb-4">
                يمكننا تصفية الاختبارات حسب الفئات المحددة. بدلاً من تشغيل جميع الاختبارات، يمكننا تشغيل اختبار واحد فقط كما يلي:
            </p>
            <CodeBlock code={`php bin/phpunit --filter <testClassName>`} />

            <p className="text-lg leading-relaxed mb-4">
                إذا اجتاز الاختبار، يجب أن ترى نتيجة مشابهة للتي تظهر أدناه:
            </p>
            <Image
                src="/test1.png"
                alt="Validation error screenshot"
                className="screenshot"
                width={960}
                height={300}
            />
            <p className="text-lg leading-relaxed mb-4">
                لا تهتم برسالة الإلغاء.
            </p>

            <h3 className="text-lg font-semibold mb-4">إنشاء دالة testInvalid()</h3>
            <p className="text-lg leading-relaxed mb-4">
                بالمثل، سنقوم بإنشاء دالة لاختبار قيود التحقق عندما يتم توفير بيانات غير صحيحة:
            </p>
            <CodeBlock code={`public function testInvalid()
{
    $product = (new Products())->setProductName('Pro213duit')
        ->setCategoryId(1)
        ->setUnitPrice(183)
        ->setQuantityPerUnit(8)
        ->setUnitsInStock(56)
        ->setUnitsOnOrder(32)
        ->setRedorderLevel(5)
        ->setDiscontinued(0)
        ->setDescription('PHP unit test');
    
    // التحقق
    self::bootKernel();
    
    // الحصول على المُحقق من الحاوية
    $error = self::$container->get('validator')->validate($product);
    
    // نتوقع خطأ واحد
    $this->assertCount(1, $error);
}`} />

            <p className="text-lg leading-relaxed mb-4">
                الفرق الوحيد هنا هو أننا نتوقع خطأ واحد (خطأ تحقق): <code className="code-word">{`$this->assertCount(1, $error);`}</code>.
            </p>

            <p className="text-lg leading-relaxed mb-4">
                إذا لم تكن هناك أي قيود تحقق على الكيان الخاص بك، يجب أن تحصل على النتيجة التالية:
            </p>
            <Image
                src="/test2.png"
                alt="Validation error screenshot"
                className="screenshot"
                width={960}
                height={300}
            />

            <p className="text-lg leading-relaxed mb-4">
                يتم الإبلاغ عن خطأ، مع ذكر الطريقة التي وقع فيها.
            </p>

            <p className="text-lg leading-relaxed mb-4">
                <strong>تحذير:</strong> لا تخلط بين الخطأ الذي نتوقعه (هنا يجب أن يعيد قيد التحقق خطأ) والخطأ الذي أبلغه PHPUnit. الأخير يشير إلى أن الاختبار غير صحيح.
            </p>

            <h3 className="text-lg font-semibold mb-4">إضافة قيود التحقق</h3>
            <p className="text-lg leading-relaxed mb-4">
                فشل الاختبار لأن قيد تحقق لم يتم تعريفه على خاصية <code className="code-word">$ProductName</code> في الكيان الخاص بنا. دعونا نضيف قيد تحقق إليها يسمح فقط بالحروف الكبيرة والصغيرة، بالإضافة إلى المسافات:
            </p>
            <CodeBlock code={`/**
 * @ORM\Column(type="float")
 * @Assert\Regex("/^[a-zA-Z\s]+$/")
 */
private $ProductName;`} />

            <p className="text-lg leading-relaxed mb-4">
                الآن، دعونا نعيد تشغيل الاختبار:
            </p>
            <Image
                src="/test3.png"
                alt="Validation error screenshot"
                className="screenshot"
                width={960}
                height={300}
            />

            <p className="text-lg leading-relaxed mb-4">
                الآن أصبح الاختبار ناجحًا. تم أخذ قيد التحقق في الاعتبار ولا يسمح بالأرقام. لقد فشلت الإدخال بالفعل بسبب خطأ التحقق.
            </p>

            <h2 className="text-2xl font-semibold mb-2">تحليل الكود في اختبارات الوحدة</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                حتى داخل اختبارات الوحدة، من المهم الحفاظ على هيكل جيد للكود وتجنب التكرار. في حالتنا، لدينا دالتان مع نفس الكود تقريبًا، مع بعض الاختلافات فقط. يمكننا تحليل الكود كما يلي:
            </p>

            <h3 className="text-lg font-semibold mb-4">إنشاء دالة لاسترجاع الكيان</h3>
            <CodeBlock code={`public function getEntity(): Products {
    return (new Products())->setProductName('test Product')
        ->setCategoryId(1)
        ->setUnitPrice(183)
        ->setQuantityPerUnit(8)
        ->setUnitsInStock(56)
        ->setUnitsOnOrder(32)
        ->setRedorderLevel(5)
        ->setDiscontinued(0)
        ->setDescription('PHP unit test');
}`} />

            <h3 className="text-lg font-semibold mb-4">إنشاء دالة للتحقق من الأخطاء واسترجاعها</h3>
            <CodeBlock code={`public function assertHasError(Products $products, $number = 0)
{
    // التحقق
    self::bootKernel();
    
    // الحصول على المُحقق من الحاوية
    $error = self::$container->get('validator')->validate($products);
    
    // نتوقع العدد المحدد من الأخطاء
    $this->assertCount($number, $error);
}`} />

            <h3 className="text-lg font-semibold mb-4">استدعاء الدوال في دوال testValid و testInvalid</h3>
            <CodeBlock code={`public function testValid()
{
    $this->assertHasError($this->getEntity(), 0);
}

public function testInvalid()
{
    $this->assertHasError($this->getEntity()->setProductName('t23est Product'), 1);
}`} />

            <h3 className="text-lg font-semibold mb-4">الاختبار لسلاسل فارغة</h3>
            <p className="text-lg leading-relaxed mb-4">
                في استمرار مع مثالنا، دعونا نضيف دالة لاختبار السلسلة الفارغة:
            </p>
            <CodeBlock code={`public function testInvalid()
{
    // اختبار للسلسلة غير الصحيحة التي تحتوي على أرقام
    $this->assertHasError($this->getEntity()->setProductName('t23est Product'), 1);
    
    // اختبار للسلسلة الفارغة
    $this->assertHasError($this->getEntity()->setProductName(''), 1);
}`} />

            <p className="text-lg leading-relaxed mb-4">
                نواجه خطأ لأن هناك قيد تحقق غير موجود يشير إلى أن السلاسل الفارغة غير مقبولة.
            </p>

            <h3 className="text-lg font-semibold mb-4">إضافة قيد تحقق</h3>
            <p className="text-lg leading-relaxed mb-4">
                دعونا نضيف قيد تحقق جديد لمنع السلاسل الفارغة ثم نعيد تشغيل الاختبار:
            </p>
            <CodeBlock code={`/**
 * @ORM\Column(type="string")
 * @Assert\NotBlank()
 */
private $ProductName;`} />

            <h3 className="text-lg font-semibold mb-4">الاختبار باستخدام دوال منفصلة لكل حالة</h3>
            <p className="text-lg leading-relaxed mb-4">
                ليس دائمًا من العملي وضع جميع الاختبارات في دالة واحدة، خاصة عند محاولة تحديد المشكلة. من الأفضل إنشاء دوال منفصلة لكل حالة اختبار:
            </p>
            <CodeBlock code={`public function testValid()
{
    $this->assertHasError($this->getEntity(), 0);
}

public function testDigitInvalid()
{
    $this->assertHasError($this->getEntity()->setProductName('t23est Product'), 1);
}

public function testBlankInvalid()
{
    $this->assertHasError($this->getEntity()->setProductName(''), 1);
}`} />

            <h3 className="text-lg font-semibold mb-4">إزالة قيد السلسلة الفارغة</h3>
            <p className="text-lg leading-relaxed mb-4">
                إذا قمنا بإزالة قيد السلاسل الفارغة، فسنواجه خطأ من PHPUnit. سيبلغ أنه تم توقع خطأ ولكن لم يتم العثور عليه، وسيدل على الطريقة التي حدث فيها المشكلة:
            </p>
            <Image
                src="/test4.png"
                alt="Error without empty string constraint"
                className="screenshot"
                width={500}
                height={300}
                priority
            />

            <p className="text-lg leading-relaxed mb-4">
                يظهر هذا الخطأ أن PHPUnit كان يتوقع خطأ في التحقق للسلسلة الفارغة، لكن لم يتم العثور عليه لأن القيد كان مفقودًا. بعد إضافة القيد، يجب أن يمر الاختبار بنجاح.
            </p>

            <h2 className="text-2xl font-semibold mb-2">استرجاع الأخطاء في PHPUnit</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                يمكن أن يكون من المفيد استرجاع أخطاء PHPUnit للحصول على رؤى إضافية في حالة حدوث مشكلات أثناء الاختبارات. يمكنك القيام بذلك عن طريق تعديل دالة <code>assertHasError()</code> كما يلي:
            </p>

            <h3 className="text-lg font-semibold mb-4">تعديل دالة assertHasError</h3>
            <CodeBlock code={`public function assertHasError(Products $products, $number = 0)
{
    // التحقق
    self::bootKernel();
    
    // الحصول على المُحقق من الحاوية
    $errors = self::$container->get('validator')->validate($products);
    $messages = [];
    
    // التكرار عبر الأخطاء وجمع الرسائل
    /**
     * @var ConstraintViolation $error
     */
    foreach ($errors as $error) {
        $messages[] = $error->getPropertyPath() + ' => ' + $error->getMessage();
    }
    
    // التأكد من أن لدينا العدد المتوقع من الأخطاء
    $this->assertCount($number, $errors, implode(',', $messages));
}`} />

            <h3 className="text-xl font-semibold mb-4">
                في هذا الإصدار المُعدل، نقوم بجمع جميع رسائل خطأ التحقق ونضمّنها في رسالة فشل التأكيد. سيوفر هذا تعليقات أكثر تفصيلًا في حالة فشل الاختبار.
            </h3>

            <h2 className="text-2xl font-semibold mb-2">الخاتمة</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                اختبارات الوحدة لا تستخدم فقط للتحقق من القيود ولكن أيضًا لاختبار الوحدات مثل وحدات التحكم والمنطق التجاري وأجزاء معينة من الكود. إنها أداة أساسية لضمان أن تطبيقك يعمل كما هو متوقع في مختلف السيناريوهات.
            </p>
        </div>
    );
};

export default UnitTestsWithPHPUnitAndSymfony;
