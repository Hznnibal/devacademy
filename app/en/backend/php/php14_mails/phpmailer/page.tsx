import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const SendingEmailsWithPHPMailer: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Sending Emails with PHPMailer</h1>

            <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                PHPMailer is an open-source library for sending emails using PHP. It is an alternative to PHP's mail() function and offers additional features like sending attachments, SMTP support, error handling, and email customization.
            </p>

            <h2 className="text-2xl font-semibold mb-2">Steps to Use PHPMailer</h2>
            <div className="border-b border-gray-300 mb-6" />
            <h3 className="text-xl font-semibold mb-4">1. Installation</h3>
            <p className="text-lg leading-relaxed mb-4">
                To use PHPMailer, the first step is to install the library. PHPMailer is available on Packagist and can be installed using Composer. Run the following command in your terminal:
            </p>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                composer require phpmailer/phpmailer
            </pre>
            <p className="text-lg leading-relaxed mb-4">
                If you haven't installed Composer, go to the Composer website and follow the instructions to install it. Then, run the following command to initialize your project:
            </p>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                composer init
            </pre>
            <p className="text-lg leading-relaxed mb-4">
                Afterward, install PHPMailer by running:
            </p>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                composer require phpmailer/phpmailer
            </pre>

            <h3 className="text-xl font-semibold mb-4">2. Configuration</h3>
            <p className="text-lg leading-relaxed mb-4">
                Before using PHPMailer, configure your SMTP server. We will use MailHog, a local SMTP server that captures emails and displays them in a web interface.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                If you haven't installed MailHog yet, you can find installation instructions online.
            </p>

            <h3 className="text-xl font-semibold mb-4">3. Importing Autoload</h3>
            <p className="text-lg leading-relaxed mb-4">
                To use PHPMailer, import the autoload file to automatically load the necessary classes:
            </p>
            <CodeBlock code={`<?php
require_once 'vendor/autoload.php';`} />

            <h3 className="text-xl font-semibold mb-4">4. Creating the Mailer Object</h3>
            <p className="text-lg leading-relaxed mb-4">
                Now, you can create a PHPMailer object and use it to send emails:
            </p>
            <CodeBlock code={`<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once 'vendor/autoload.php';

$mail = new PHPMailer(true);

// Set SMTP
$mail->isSMTP();

// Configure SMTP server address
$mail->Host       = 'localhost';    

// Disable SMTP authentication
$mail->SMTPAuth   = false;    

// Set SMTP port (MailHog)
$mail->Port       = 1025;                                   

// Sender's address and name
$mail->setFrom('from@thedistrict.com', 'The District Company');

// Recipient(s)
$mail->addAddress("client1@example.com", "Mr Client1");
$mail->addAddress("client2@example.com"); 

// Reply address
$mail->addReplyTo("reply@thedistrict.com", "Reply");

// CC & BCC
$mail->addCC("cc@example.com");
$mail->addBCC("bcc@example.com");

// Set HTML email format
$mail->isHTML(true);

// Attach a file
$mail->addAttachment('/path/to/file.pdf');

// Email subject
$mail->Subject = 'Test PHPMailer';

// Email body
$mail->Body = "Testing email sending with PHPMailer";

// Send the email in a try/catch block to capture any errors
if ($mail) {
    try {
        $mail->send();
        echo 'Email sent successfully';
    } catch (Exception $e) {
        echo "Mail sending failed. The following error occurred: ", $mail->ErrorInfo;
    }
}`} />

            <h3 className="text-xl font-semibold mb-4">
                In this example, we've created a PHPMailer object and configured the SMTP server to use localhost and port 1025, which are the default settings for MailHog. We set the sender, recipients, subject, and message body and added an attachment. Finally, we use the <code>send()</code> method to send the email.
            </h3>

            <h3 className="text-xl font-semibold mb-4">5. Testing the Email</h3>
            <p className="text-lg leading-relaxed mb-4">
                Run your PHPMailer script to send an email to MailHog. Then, open the MailHog web interface by navigating to:
            </p>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                http://localhost:8025/
            </pre>
            <p className="text-lg leading-relaxed mb-4">
                In the MailHog interface, you should see the email you just sent.
            </p>

            <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
            <p className="text-lg leading-relaxed mb-4">
                While PHP's <code>mail()</code> function is simple to use, it lacks many features, such as sending attachments and email customization. It can also be vulnerable to security issues like spamming and hacking.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                In contrast, PHPMailer offers many features, including attachment sending, email customization, error handling, and SMTP support. It is also more secure than PHP's <code>mail()</code> function, as it employs advanced techniques to prevent spamming and hacking.
            </p>

            <h3 className="note-title">Note about "use" Statements</h3>
            <p className="text-lg leading-relaxed mb-4">
                It is important to place the <code>use</code> statements at the beginning of your PHPMailer script. These statements import the PHPMailer and Exception classes, allowing you to use them without specifying their full namespace every time.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                Without the <code>use</code> statements, you would have to write the full namespace every time, like:
            </p>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                $mail = new \PHPMailer\PHPMailer\PHPMailer();
            </pre>
            <p className="text-lg leading-relaxed mb-4">
                With the <code>use</code> statements, you can simplify the code to:
            </p>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                $mail = new PHPMailer();
            </pre>
            <p className="text-lg leading-relaxed mb-4">
                This makes the code cleaner and easier to read.
            </p>
        </div>
    );
};

export default SendingEmailsWithPHPMailer;
