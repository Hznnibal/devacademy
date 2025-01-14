import { CodeBlock } from "@/components/CodeBlock/code-block";

const CoursePage = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Sending Emails in a Symfony Project</h1>

            <section>
                <h2 className="text-2xl font-semibold mt-4">Installing Mailer</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    To use the Mailer library in a Symfony project, you must install it by running the following command:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md"><code>composer require symfony/mailer</code></pre>
                <p className="text-lg leading-relaxed mb-4">
                    Note: If you created your Symfony project with the "webapp" template (as you did in previous lessons), this command is not necessary! The library is already installed in your project. You can check your composer.json file for the following line:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md"><code>{` "require": { "symfony/mailer": "6.1.*" } `}</code></pre>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mt-4">Configuring the Transport Layer in .env.local</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Once Mailer is installed, you need to configure the mail server that will be used. To do this, open the <code>.env.local</code> file and modify the following line:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md"><code>MAILER_DSN=smtp://your_username:your_password@smtp.example.com:port</code></pre>
                <p className="text-lg leading-relaxed mb-4">
                    If you have installed MailHog, you can modify the line as follows:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md"><code>MAILER_DSN=smtp://localhost:1025</code></pre>
                <p className="text-lg leading-relaxed mb-4">
                    Tools like Mailtrap, which simulate an SMTP server, can also be used to capture emails sent by Symfony.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mt-4">Creating and Sending a Message with Mailer</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    If you've used the PHPMailer library before, you'll find many similarities between Symfony Mailer and PHPMailer. For example, methods like <code>send()</code> are common to both.
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
                    In this example, we have a route (#[Route('/email')]) that points to a method (sendEmail()) in the MailerController. The MailerInterface is injected into the method. The email is sent in both text and HTML formats.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mt-4">Using TemplatedEmail for Richer Emails</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    While the basic Email class works, it's not ideal if you need to send variables, for instance. The Mailer library offers a <code>TemplatedEmail</code> class that allows you to construct a more sophisticated email using Twig templates.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Before using <code>TemplatedEmail</code>, make sure the Twig bundle is installed by running:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md"><code>composer require symfony/twig-bundle</code></pre>
                <p className="text-lg leading-relaxed mb-4">
                    Here's an example with <code>{`TemplatedEmail`}</code>:
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
                    In this example, we replaced the <code>Email</code> class with <code>TemplatedEmail</code>, which extends the first class but adds extra features, such as using a Twig template for the email body and passing variables to the template via the <code>context()</code> method.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mt-4">Adding Attachments</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    To attach files to an email, use the <code>addPart()</code> method along with the <code>DataPart</code> and <code>File</code> classes:
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
                <h2 className="text-2xl font-semibold mt-4">Embedding Images</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    It's better to embed images in your email rather than attaching them. For <code>TemplatedEmail</code>, images are automatically embedded. Otherwise, you need to manually integrate them using <code>addPart()</code> and <code>asInline()</code>.
                </p>
                <CodeBlock code={`$email = (new Email())
    //...
    ->addPart((new DataPart(fopen('/path/to/images/logo.png', 'r'), 'logo', 'image/png'))->asInline())
    ->addPart((new DataPart(new File('/path/to/images/signature.gif'), 'footer-signature', 'image/gif'))->asInline())
    ->html('<img src="cid:logo"> ... <img src="cid:footer-signature"> ...');`} />
            </section>

            <section>
                <h2 className="text-2xl font-semibold mt-4">Using Inline CSS</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Many email clients remove <code>&lt;style&gt;</code> tags, so it's common to write CSS inline. Symfony's Twig extension <code>CssInlinerExtension</code> can automate this process. To use it, install the package by running:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md"><code>composer require twig/extra-bundle twig/cssinliner-extra</code></pre>
                <p className="text-lg leading-relaxed mb-4">
                    Here's how you can apply inline CSS in your email template:
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
                <h2 className="text-2xl font-semibold mt-4">Sending Emails Asynchronously</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    By default, when you call the <code>send($email)</code> method, the email is sent immediately. However, you can store emails in a queue and send them later. The Symfony Messenger component allows this.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Since Symfony 5.4, Messenger is enabled by default, and it stores emails in the <code>messenger_messages</code> table. To process the queued messages, you need to start a worker:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md"><code>php bin/console messenger:consume -vv</code></pre>
            </section>
        </div>
    );
};

export default CoursePage;
