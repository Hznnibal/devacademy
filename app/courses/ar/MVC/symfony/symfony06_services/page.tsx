import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const SymfonyServicesCourse: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">خدمات Symfony</h1>

            <h2 className="text-2xl font-semibold mt-4">مقدمة</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                الخدمة هي فئة PHP توفر وظيفة محددة (مهمة واحدة ومحددة!) ويمكن استدعاؤها واستخدامها في جميع أنحاء تطبيقك.
                يأتي تطبيق Symfony، بعد التثبيت مباشرة، مع عدد من الخدمات، مثل <strong>Mailer</strong> التي ناقشناها سابقًا.
                هناك خدمات لكتابة السجلات إلى النظام (<strong>Logger</strong>)، وحل المسارات، والتحقق من البيانات، وترميز كلمات المرور، والوصول إلى قاعدة البيانات، إلخ.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                في كل مرة تقوم فيها بتثبيت حزمة، يمكنك الوصول إلى كائنات إضافية من هذا النوع...
            </p>

            <h2 className="text-2xl font-semibold mt-4">حاوية الخدمة</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                للوصول إلى هذه الأدوات في Symfony، تحتاج إلى "طلب" هذه الأدوات من كائن خاص يسمى حاوية الخدمة.
                تتيح لنا حاوية الخدمة حقن الخدمات في وحدات التحكم الخاصة بنا، مما يضمن أنها تم تهيئتها بشكل صحيح (مع المعلمات الصحيحة، إلخ).
            </p>
            <p className="text-lg leading-relaxed mb-4">
                إذا كنت تريد سرد جميع الخدمات التي تديرها حاوية الخدمة في تطبيقك، يمكنك تشغيل الأمر التالي:
            </p>
            <pre className="command-text">
                bin/console debug:container
            </pre>
            <p className="text-lg leading-relaxed mb-4">
                أو استخدم هذا الأمر لاستكشاف الأخطاء في الربط التلقائي:
            </p>
            <pre className="command-text">
                bin/console debug:autowiring
            </pre>

            <h2 className="text-2xl font-semibold mt-4">إنشاء واستخدام خدمة في Symfony</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                كما قد تكون قد خمنت، يأتي Symfony مع العديد من الخدمات المبنية مسبقًا في حاويته. لكن لا يوجد شيء يمنعك من إنشاء خدماتك الخاصة!
                على سبيل المثال، لنقل أننا نريد إنشاء خدمة خاصة بنا للتعامل مع إرسال البريد الإلكتروني.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                أولاً، أنشئ دليلًا يسمى <code className="code-text">Service</code> في دليل <code className="code-text">src</code>.
                داخل هذا الدليل، أنشئ فئة <code className="code-text">MailService.php</code>. في هذه الفئة، عرّف طريقة <code className="code-text">sendMail()</code> التي سترسل بريدًا إلكترونيًا إلى عنوان محدد مسبقًا كلما قام المستخدم بإرسال نموذج الاتصال.
                يجب أن تأخذ الطريقة البريد الإلكتروني للمستخدم، والعنوان، ومحتوى الرسالة كمعاملات. سيكون المستلم هو عنوان بريدك الإلكتروني (يمكنك استخدام عنوان بريدك الشخصي).
            </p>
            <p className="text-lg leading-relaxed mb-4">
                بعد ذلك، سنقوم بتحديث <code className="code-text">ContactController</code>. بدلاً من إنشاء بريد إلكتروني مباشرة في وحدة التحكم بعد إرسال النموذج والتحقق من صحته، سنحقن خدمة <code className="code-text">MailService</code> الخاصة بنا وندعو طريقة <code className="code-text">sendMail()</code>.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                لا تقلل هذه الطريقة من عدد أسطر الشيفرة في وحدة التحكم فحسب، بل تعزل أيضًا منطق إرسال البريد الإلكتروني، مما يجعله قابلاً لإعادة الاستخدام في أماكن أخرى في المشروع.
            </p>

            <CodeBlock code={`<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactFormType;
use App\Service\MailService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact')]
    public function index(Request $request, EntityManagerInterface $entityManager, MailService $ms): Response
    {
        $form = $this->createForm(ContactFormType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // إنشاء مثيل جديد من Contact
            $message = new Contact();
            // معالجة بيانات النموذج
            //...
            // حفظ البيانات
            $entityManager->persist($message);
            $entityManager->flush();

            // إرسال البريد الإلكتروني باستخدام MailService
            $ms->sendMail('hello@example.com', $message->getEmail(), $message->getobject(), $message->getMessage());
        }
    }
}
`} />

            <h2 className="text-2xl font-semibold mt-4">حقن الاعتماديات في Symfony</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                لاستخدام خدمة داخل خدمة أخرى، يعتمد Symfony على تقنية تسمى <strong>حقن الاعتماديات</strong>.
                يعني هذا أنك تقوم بحقن الخدمات التي تحتاج إليها في طريقة <code className="code-text">__construct()</code>، وهذا كل شيء! تتولى الحاوية تقديم هذه الفئات.
            </p>

            <h2 className="text-2xl font-semibold mt-4">حقن الخدمات</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                إليك مثال حيث نقوم بحقن <strong>MailerInterface</strong> في منشئ خدمة:
            </p>
            <CodeBlock code={`use Symfony\Component\Mailer\MailerInterface;

class MailService
{
private $mailer;

// حقن MailerInterface في المنشئ
public function __construct(MailerInterface $mailer) {
  $this->mailer = $mailer;
}

// طرق أخرى هنا...
}
`} />

            <h2 className="text-2xl font-semibold mt-4">التكوين في services.yaml</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                يتم تعريف التكوين الافتراضي للخدمات في تطبيق Symfony في ملف <code className="code-text">config/services.yaml</code>. هذا الملف هو نقطة الدخول لتكوين خدماتك الخاصة.
            </p>
            <CodeBlock code={`# هذا الملف هو نقطة الدخول لتكوين خدماتك الخاصة.
# الملفات في الدليل الفرعي packages/ تقوم بتكوين اعتماداتك.

parameters:

services:
_defaults:
  autowire: true      # يقوم تلقائيًا بحقن الاعتماديات في خدماتك.
  autoconfigure: true # يقوم تلقائيًا بتسجيل خدماتك كأوامر، مشتركين في الأحداث، إلخ.

# يجعل الفئات في src/ متاحة للاستخدام كخدمات
# هذا ينشئ خدمة لكل فئة يكون معرّفها هو الاسم الكامل للفئة
App\:
  resource: '../src/'
  exclude:
      - '../src/DependencyInjection/'
      - '../src/Entity/'
      - '../src/Kernel.php'

# تعريفات خدمات إضافية عندما يكون التكوين الصريح مطلوبًا
`} />

            <h2 className="text-2xl font-semibold mt-4">استخدام المعلمات في services.yaml</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                بجانب الخدمات نفسها، يحتوي ملف <code className="code-text">services.yaml</code> أيضًا على "معلمات" تكوين. هذه هي المتغيرات التي تُستخدم قيمها في أماكن متعددة عبر المشروع.
                إحدى المعلمات المهمة هي <code className="code-text">kernel.project_dir</code>، التي تشير إلى دليل مشروع Symfony. إذا كنت بحاجة للوصول إلى هذا الدليل داخل الوحدات أو الخدمات، يمكنك استدعاء هذه المعلمة.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                على سبيل المثال، إذا كنت بحاجة للوصول إلى دليل <code className="code-text">/public/assets/images</code> في أماكن متعددة (على سبيل المثال، في خدمة تتعامل مع تحميل الملفات)، يمكنك تعريف معلمة مثل هذه في <code className="code-text">services.yaml</code>:
            </p>
            <CodeBlock code={`# config/services.yaml
parameters:
images_directory: '%kernel.project_dir%/public/assets/images'
`} />
            <p className="text-lg leading-relaxed mb-4">
                ثم، حقن <code className="code-text">ParameterBagInterface</code> للوصول إلى مسار هذا الدليل في خدمة:
            </p>
            <CodeBlock code={`<?php

namespace App\Service;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class MailService
{
private $paramBag;

// حقن ParameterBagInterface
public function __construct(ParameterBagInterface $paramBag){
  $this->paramBag = $paramBag;
}

public function sendMail($expediteur, $destinataire, $sujet, $message) {
  // استخدم حقيبة المعلمات للحصول على معلمة 'images_directory'
  $dossiers_images = $this->paramBag->get('images_directory');
  // منطق آخر...
}
}
`} />

            <h2 className="text-2xl font-semibold mt-4">مهمة عملية</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                أنشئ فئة <code className="code-text">MailService.php</code> داخل <code className="code-text">src/Service</code> وانقل منطق إرسال البريد الإلكتروني من <code className="code-text">ContactController</code> إلى هذه الخدمة.
                ثم، استدعِ هذه الوظيفة من وحدة التحكم بعد التحقق من صحة نموذج الاتصال. تأكد من أن رسائل البريد الإلكتروني لا تزال تُرسل كما هو متوقع!
            </p>

            <h2 className="text-2xl font-semibold mt-4">المزيد من التعلم</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                لتعميق فهمك للخدمات وحاوية الخدمة، تحقق من الوثائق الرسمية لـ Symfony حول هذا الموضوع.
            </p>

        </div>
    );
};

export default SymfonyServicesCourse;
