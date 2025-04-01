import { CodeBlock } from "@/components/CodeBlock/code-block";

const CoursePage = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Sending Emails in a Symfony Project</h1>

            <h1 className="text-3xl font-semibold mb-6 text-center">إرسال رسائل البريد الإلكتروني في مشروع Symfony</h1>

            <section>
                <h2 className="text-2xl font-semibold mt-4">تثبيت Mailer</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    لاستخدام مكتبة Mailer في مشروع Symfony، يجب عليك تثبيتها عبر تشغيل الأمر التالي:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md"><code>composer require symfony/mailer</code></pre>
                <p className="text-lg leading-relaxed mb-4">
                    ملاحظة: إذا قمت بإنشاء مشروع Symfony باستخدام القالب "webapp" (كما فعلت في الدروس السابقة)، فإن هذا الأمر غير ضروري! المكتبة مثبتة بالفعل في مشروعك. يمكنك التحقق من ملف <code>composer.json</code> للبحث عن السطر التالي:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md"><code>{` "require": { "symfony/mailer": "6.1.*" } `}</code></pre>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mt-4">تكوين طبقة النقل في .env.local</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    بعد تثبيت Mailer، يجب عليك تكوين خادم البريد الإلكتروني الذي سيتم استخدامه. للقيام بذلك، افتح ملف <code>.env.local</code> وقم بتعديل السطر التالي:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md"><code>MAILER_DSN=smtp://your_username:your_password@smtp.example.com:port</code></pre>
                <p className="text-lg leading-relaxed mb-4">
                    إذا كنت قد قمت بتثبيت MailHog، يمكنك تعديل السطر على النحو التالي:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md"><code>MAILER_DSN=smtp://localhost:1025</code></pre>
                <p className="text-lg leading-relaxed mb-4">
                    يمكن أيضًا استخدام أدوات مثل Mailtrap، التي تحاكي خادم SMTP، لالتقاط الرسائل المرسلة بواسطة Symfony.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mt-4">إنشاء وإرسال رسالة باستخدام Mailer</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    إذا كنت قد استخدمت مكتبة PHPMailer من قبل، فستجد العديد من أوجه التشابه بين Symfony Mailer و PHPMailer. على سبيل المثال، الأساليب مثل <code>send()</code> شائعة بين الاثنين.
                </p>
                <CodeBlock code={`// src/Controller/MailerController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;

class MailerController extends AbstractController
{
    #[Route('/email')]
    public function sendEmail(MailerInterface $mailer): Response
    {
        $email = (new Email())
            ->from('hello@example.com')
            ->to('you@example.com')
            ->subject('Time for Symfony Mailer!')
            ->text('Sending emails is fun again!')
            ->html('<p className="text-lg leading-relaxed mb-4">See Twig integration for better HTML integration!</p>');

        $mailer->send($email);
    }
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    في هذا المثال، لدينا مسار (#[Route('/email')]) الذي يشير إلى طريقة (sendEmail()) في MailerController. يتم حقن MailerInterface في الطريقة. يتم إرسال الرسالة بكل من التنسيقات النصية وHTML.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mt-4">استخدام TemplatedEmail لرسائل بريد إلكتروني أكثر ثراءً</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    في حين أن فئة Email الأساسية تعمل، إلا أنها ليست مثالية إذا كنت بحاجة إلى إرسال متغيرات، على سبيل المثال. تقدم مكتبة Mailer فئة <code>TemplatedEmail</code> التي تتيح لك إنشاء بريد إلكتروني أكثر تطورًا باستخدام قوالب Twig.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    قبل استخدام <code>TemplatedEmail</code>، تأكد من تثبيت حزمة Twig عبر تشغيل:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md"><code>composer require symfony/twig-bundle</code></pre>
                <p className="text-lg leading-relaxed mb-4">
                    إليك مثالًا باستخدام <code>{`TemplatedEmail`}</code>:
                </p>
                <CodeBlock code={`// src/Controller/MailerController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mime\Address;
use Symfony\Component\Routing\Annotation\Route;

class MailerController extends AbstractController
{
    #[Route('/email')]
    public function sendEmail(MailerInterface $mailer): Response
    {
        $email = (new TemplatedEmail())
            ->from('hello@example.com')
            ->to(new Address('ryan@example.com'))
            ->subject('Time for Symfony Mailer!')
            ->htmlTemplate('emails/signup.html.twig')
            ->context([
                'expiration_date' => new \DateTime('+7 days'),
                'username' => 'foo',
            ]);

        $mailer->send($email);
    }
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    في هذا المثال، استبدلنا فئة <code>Email</code> بـ <code>TemplatedEmail</code>، التي تمد الفئة الأولى ولكنها تضيف ميزات إضافية، مثل استخدام قالب Twig لجسم الرسالة وتمرير المتغيرات إلى القالب عبر طريقة <code>context()</code>.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mt-4">إضافة مرفقات</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    لإرفاق ملفات برسالة البريد الإلكتروني، استخدم طريقة <code>addPart()</code> مع فئات <code>DataPart</code> و <code>File</code>:
                </p>
                <CodeBlock code={`use Symfony\Component\Mime\Part\DataPart;
use Symfony\Component\Mime\Part\File;

//...

$email = (new Email())
    //...
    ->addPart(new DataPart(new File('/path/to/documents/terms-of-use.pdf')))
    ->addPart(new DataPart(new File('/path/to/documents/privacy.pdf'), 'Privacy Policy'))
    ->addPart(new DataPart(new File('/path/to/documents/contract.doc'), 'Contract', 'application/msword'))
;`} />
            </section>

            <section>
                <h2 className="text-2xl font-semibold mt-4">دمج الصور</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    من الأفضل دمج الصور في بريدك الإلكتروني بدلاً من إرفاقها. بالنسبة لـ <code>TemplatedEmail</code>، يتم دمج الصور تلقائيًا. بخلاف ذلك، يجب عليك دمجها يدويًا باستخدام <code>addPart()</code> و <code>asInline()</code>.
                </p>
                <CodeBlock code={`$email = (new Email())
    //...
    ->addPart((new DataPart(fopen('/path/to/images/logo.png', 'r'), 'logo', 'image/png'))->asInline())
    ->addPart((new DataPart(new File('/path/to/images/signature.gif'), 'footer-signature', 'image/gif'))->asInline())
    ->html('<img src="cid:logo"> ... <img src="cid:footer-signature"> ...');`} />
            </section>

            <section>
                <h2 className="text-2xl font-semibold mt-4">استخدام CSS مدمج</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    العديد من عملاء البريد الإلكتروني يقومون بإزالة وسوم <code>&lt;style&gt;</code>، لذا من الشائع كتابة CSS مدمج. يمكن لإضافة Twig الخاصة بـ Symfony <code>CssInlinerExtension</code> أتمتة هذه العملية. لاستخدامها، قم بتثبيت الحزمة عبر تشغيل:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md"><code>composer require twig/extra-bundle twig/cssinliner-extra</code></pre>
                <p className="text-lg leading-relaxed mb-4">
                    إليك كيف يمكنك تطبيق CSS مدمج في قالب بريدك الإلكتروني:
                </p>
                <CodeBlock code={`{% apply inline_css %}
    <style>
        h1 {
            color: #333;
        }
    </style>
    <h1>Welcome {{ email.toName }}!</h1>
{% endapply %}`} />
            </section>

            <section>
                <h2 className="text-2xl font-semibold mt-4">إرسال الرسائل إلكترونيًا بشكل غير متزامن</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    بشكل افتراضي، عند استدعاء طريقة <code>send($email)</code>، يتم إرسال البريد الإلكتروني فورًا. ومع ذلك، يمكنك تخزين الرسائل في طابور وإرسالها لاحقًا. يتيح لك مكون Symfony Messenger القيام بذلك.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    منذ Symfony 5.4، تم تمكين Messenger بشكل افتراضي، وهو يخزن الرسائل في جدول <code>messenger_messages</code>. لمعالجة الرسائل في الطابور، تحتاج إلى بدء عامل:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md"><code>php bin/console messenger:consume -vv</code></pre>
            </section>

        </div>
    );
};

export default CoursePage;
