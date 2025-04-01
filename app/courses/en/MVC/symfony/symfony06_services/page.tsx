import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const SymfonyServicesCourse: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Symfony Services</h1>

            <h2 className="text-2xl font-semibold mt-4">Introduction</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                A service is a PHP class that provides a specific functionality (a single, well-defined task!) and can be called and used throughout your application.
                A Symfony application, right after installation, comes with a number of services, such as the <strong>Mailer</strong> we discussed earlier.
                There are services for writing logs to the system (<strong>Logger</strong>), resolving routes, validating data, encoding passwords, accessing the database, etc.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                Every time you install a bundle, you gain access to additional objects of this kind...
            </p>

            <h2 className="text-2xl font-semibold mt-4">The Service Container</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                To access these tools in Symfony, you need to "request" them from a special object called the service container.
                This service container allows us to inject services into our controllers, ensuring they are properly instantiated (with the correct parameters, etc.).
            </p>
            <p className="text-lg leading-relaxed mb-4">
                If you want to list all the services managed by your application&apos;s service container, you can run the following command:
            </p>
            <pre className="command-text">
                bin/console debug:container
            </pre>
            <p className="text-lg leading-relaxed mb-4">
                Or use this command to debug autowiring:
            </p>
            <pre className="command-text">
                bin/console debug:autowiring
            </pre>

            <h2 className="text-2xl font-semibold mt-4">Creating and Using a Service in Symfony</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                As you may have guessed, Symfony comes with many pre-built services in its container. But there&apos;s nothing stopping you from creating your own services!
                For example, let&apos;s say we want to create our own service for handling email sending.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                First, create a directory called <code className="code-text">Service</code> in the <code className="code-text">src</code> directory.
                Inside this directory, create a <code className="code-text">MailService.php</code> class. In this class, define a <code className="code-text">sendMail()</code> method that will send an email to a predefined address whenever a user submits a contact form.
                The method should take the user&apos;s email, subject, and message body as parameters. The recipient will be your website&apos;s email address (feel free to use your own email address).
            </p>
            <p className="text-lg leading-relaxed mb-4">
                Next, we&apos;ll update the <code className="code-text">ContactController</code>. Instead of creating an email directly in the controller after form submission and validation, we&apos;ll inject our <code className="code-text">MailService</code> and call the <code className="code-text">sendMail()</code> method.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                This approach not only reduces the number of lines of code in our controller but also isolates the email-sending logic, making it reusable elsewhere in the project.
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
            // Create a new Contact instance
            $message = new Contact();
            // Process form data
            //...
            // Persist data
            $entityManager->persist($message);
            $entityManager->flush();

            // Send email with our MailService
            $ms->sendMail('hello@example.com', $message->getEmail(), $message->getobject(), $message->getMessage());
        }
    }
}
`} />


            <h2 className="text-2xl font-semibold mt-4">Dependency Injection in Symfony</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                To use a service inside another service, Symfony relies on a technique called <strong>dependency injection</strong>.
                This means that you inject the services you need into the <code className="code-text">__construct()</code> method, and that's it! The container takes care of providing these classes.
            </p>

            <h2 className="text-2xl font-semibold mt-4">Injecting Services</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                Here is an example where we inject the <strong>MailerInterface</strong> into the constructor of a service:
            </p>
            <CodeBlock code={`use Symfony\Component\Mailer\MailerInterface;

class MailService
{
private $mailer;

// Inject MailerInterface into the constructor
public function __construct(MailerInterface $mailer) {
  $this->mailer = $mailer;
}

// Other methods here...
}
`} />

            <h2 className="text-2xl font-semibold mt-4">Configuration in services.yaml</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                The default configuration for services in a Symfony application is defined in the <code className="code-text">config/services.yaml</code> file. This file is the entry point to configure your own services.
            </p>
            <CodeBlock code={`# This file is the entry point to configure your own services.
# Files in the packages/ subdirectory configure your dependencies.

parameters:

services:
_defaults:
  autowire: true      # Automatically injects dependencies into your services.
  autoconfigure: true # Automatically registers your services as commands, event subscribers, etc.

# Makes classes in src/ available to be used as services
# This creates a service per class whose id is the fully-qualified class name
App\:
  resource: '../src/'
  exclude:
      - '../src/DependencyInjection/'
      - '../src/Entity/'
      - '../src/Kernel.php'

# Additional service definitions when explicit configuration is needed
`} />

            <h2 className="text-2xl font-semibold mt-4">Using Parameters in services.yaml</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                Besides the services themselves, the <code className="code-text">services.yaml</code> file also contains configuration "parameters". These are variables whose values are used in multiple places across the project.
                One such important parameter is <code className="code-text">kernel.project_dir</code>, which points to the Symfony project directory. If you need to access this directory within controllers or services, you can call this parameter.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                For example, if you need to access the <code className="code-text">/public/assets/images</code> directory in several places (e.g., in a service that handles file uploads), you can define a parameter like this in <code className="code-text">services.yaml</code>:
            </p>
            <CodeBlock code={`# config/services.yaml
parameters:
images_directory: '%kernel.project_dir%/public/assets/images'
`} />
            <p className="text-lg leading-relaxed mb-4">
                Then, inject the <code className="code-text">ParameterBagInterface</code> to access this directory path in a service:
            </p>
            <CodeBlock code={`<?php

namespace App\Service;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class MailService
{
private $paramBag;

// Inject ParameterBagInterface
public function __construct(ParameterBagInterface $paramBag){
  $this->paramBag = $paramBag;
}

public function sendMail($expediteur, $destinataire, $sujet, $message) {
  // Use the parameter bag to get the 'images_directory' parameter
  $dossiers_images = $this->paramBag->get('images_directory');
  // Further logic...
}
}
`} />

            <h2 className="text-2xl font-semibold mt-4">Practical Task</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                Create the <code className="code-text">MailService.php</code> class inside <code className="code-text">src/Service</code> and move the email-sending logic from the <code className="code-text">ContactController</code> into this service.
                Then, call this function from the controller after validating the contact form. Ensure the emails continue to be sent as expected!
            </p>

            <h2 className="text-2xl font-semibold mt-4">Further Learning</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                To deepen your understanding of Services and the Service Container, check out the official Symfony documentation on this topic.
            </p>
        </div>
    );
};

export default SymfonyServicesCourse;
