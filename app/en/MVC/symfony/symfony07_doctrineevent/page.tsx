import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const DoctrineEventsCourse: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Doctrine Events</h1>

            {/* <section>
                <h2 className="text-2xl font-semibold mt-4">Learning Objectives</h2>
                <div className="border-b border-gray-300 mb-6" />
                <ul>
                    <li>Understand the concept of Events in Symfony, and the notions of listeners and subscribers (Symfony & Doctrine)</li>
                    <li>Create and use Doctrine EventSubscribers to detect changes in the database</li>
                </ul>
            </section> */}

            {/* <section>
                <h2 className="text-2xl font-semibold mt-4">Prerequisites</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">Basic knowledge of Symfony and Doctrine is required.</p>
            </section> */}

            <section>
                <h2 className="text-2xl font-semibold mt-4">Introduction - Understanding EventSubscribers </h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    An EventSubscriber is a class that listens to events and executes actions in response to those events. It is a powerful feature of Symfony for handling events and performing specific actions.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Symfony Events vs Doctrine Events</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Although often used together in a Symfony application, Symfony events and Doctrine events are two distinct event systems.
                </p>
                <ul>
                    <li>Symfony events are used to trigger specific actions in response to events occurring in the application (such as HTTP request events, form handling, security events, notifications, etc.).</li>
                    <li>Doctrine events are specific to this ORM and are used to listen and react to database operations performed by Doctrine, such as entity creation, update, deletion, or loading. Doctrine emits events at different stages of an entity’s lifecycle, for example, `postPersist` after inserting an entity, `preUpdate` before updating an entity, etc.</li>
                </ul>

                <p className="text-lg leading-relaxed mb-4">
                    Doctrine events allow developers to intercept and react to database operations by executing additional actions. For example, you might send an email, update another entity, or perform any other necessary business logic.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                    While the two types of events are distinct, Symfony provides ways to integrate Doctrine events into its event system. You can create EventSubscribers to listen to both Symfony and Doctrine events and act accordingly.
                </p>

                <h2 className="text-2xl font-semibold mt-4">EventSubscriber vs EventListener</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    In Symfony, you can use both listeners (event listeners) and subscribers depending on the needs of your application. An EventSubscriber can listen to multiple events, while an EventListener listens to a specific event. A subscriber is more flexible because it can listen to and react to several events with a single class.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Commonly Used Doctrine Events</h2>
                <div className="border-b border-gray-300 mb-6" />

                <ul>
                    <li><strong>prePersist:</strong> Triggered just before an entity is first persisted in the database. It can be used for actions before a new entity is inserted, like setting default values or performing extra validation.</li>
                    <li><strong>postPersist:</strong> Triggered after an entity has been inserted into the database. Useful for additional actions, such as sending emails or updating caches.</li>
                    <li><strong>preUpdate:</strong> Triggered before an entity is updated in the database. Allows taking actions before modifications are persisted, such as additional validation or modifying related entities.</li>
                    <li><strong>postUpdate:</strong> Triggered after an entity is updated in the database. Can be used for post-update actions, like logging, sending notifications, etc.</li>
                    <li><strong>preRemove:</strong> Triggered before an entity is removed from the database. It can be used for pre-deletion actions, such as validation or checking dependencies.</li>
                    <li><strong>postRemove:</strong> Triggered after an entity is removed from the database. Useful for post-deletion actions, like removing related files or updating other entities.</li>
                    <li><strong>onFlush:</strong> Triggered before objects are validated and persisted to the database. It allows working with all ongoing changes before they are executed.</li>
                </ul>

                <p className="text-lg leading-relaxed mb-4">
                    Note: Doctrine events are specific to this ORM and do not react to SQL scripts executed directly on the database! When these SQL scripts are run, they bypass Doctrine's persistence process, so Doctrine events are not involved.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Creating a Doctrine EventSubscriber</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Let's create a new directory `EventSubscriber` in the `src` folder of your project, and inside this directory, create a `ContactSubscriber.php` class. This class will listen for Doctrine events to detect new records (insert). When the contact form is submitted, we will check if the subject or body of the message contains the word "GDPR." If it does, an alert email will be sent to the site administrator.
                </p>

                <CodeBlock code={`<?php

namespace App\EventSubscriber;

use App\Entity\Contact;
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Events;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class ContactSubscriber implements EventSubscriber
{
    private $mailer;

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }

    public function getSubscribedEvents()
    {
        return [
            Events::postPersist,
        ];
    }

    public function postPersist(LifecycleEventArgs $args)
    {
        $entity = $args->getObject();

        if ($entity instanceof Contact) {
            $subject = $entity->getSubject();
            $message = $entity->getMessage();

            if (preg_match("/rgpd\\b/i", $subject) || preg_match("/rgpd\\b/i", $message)) {
                $email = (new Email())
                    ->from('your_email@example.com')
                    ->to('admin@velvet.com')
                    ->subject('GDPR Alert')
                    ->text("A new message related to GDPR has been sent! Message ID: " . $entity->getId() . " \n Subject: " . $entity->getSubject() . " \n Message: " . $entity->getMessage());

                $this->mailer->send($email);
            }
        }
    }
}`} />


                <p className="text-lg leading-relaxed mb-4">
                    Explanation:
                </p>
                <ul>
                    <li><strong>getSubscribedEvents()</strong> - This method returns an array of events that the subscriber should listen to. The event is associated with the <code>postPersist()</code> method in the subscriber.</li>
                    <li>If a new <code>Contact</code> entity is persisted and the subject or body of the message contains "GDPR", the subscriber sends an email to the site administrator.</li>
                    <li><code>preg_match()</code> is used to search for the word "rgpd" (with case-insensitive matching and a word boundary to ensure it’s found as a whole word).</li>
                </ul>
                <h2 className="text-2xl font-semibold mt-4">Configuring the Subscriber</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Before using the subscriber, you need to declare it in the <code>services.yaml</code> file:
                </p>

                <CodeBlock code={`services:
  # Add more service definitions when explicit configuration is needed
  App\EventSubscriber\ContactSubscriber:
    arguments:
      $mailer: '@Symfony\Component\Mailer\MailerInterface'
    tags:
      - { name: doctrine.event_subscriber }`} />


                <p className="text-lg leading-relaxed mb-4">
                    This declaration uses the <code>doctrine.event_subscriber</code> tag to indicate to Doctrine that the <code>ContactSubscriber</code> class is a subscriber for the specified events. It also specifies the arguments passed to the constructor when the class is instantiated (in this case, the <code>Mailer</code>).
                </p>

                <h2 className="text-2xl font-semibold mt-4">Test the Subscriber in Your Project!</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    You can modify the actions performed in the <code>postPersist</code> method or add another type of event (e.g., <code>preUpdate</code>) as needed.
                </p>
            </section>
        </div >
    );
};

export default DoctrineEventsCourse;
