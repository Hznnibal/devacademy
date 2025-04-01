import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const PHP_Mail: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">PHP - Email</h1>

            {/* Section 1: Overview of Email in Web Applications */}
            <h2 className="text-2xl font-semibold mb-4">Overview of Emails in Web Applications</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Sending emails is a common feature in web applications. This functionality works in both directions:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>
                    Users contact the website owner via a contact form (or registration form).
                </li>
                <li>
                    The website owner sends emails to users, such as:
                    <ul className="list-disc pl-6">
                        <li>Registration confirmation</li>
                        <li>Order confirmation for an online purchase</li>
                        <li>Newsletters</li>
                        <li>Password reset or reminder</li>
                        <li>Attachments such as invoices, documentation...</li>
                    </ul>
                </li>
            </ul>
            <p className="mb-4 leading-relaxed">
                An email is structured in two parts:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>
                    The header section (headers) contains technical information. This section is not visible to the recipient but can be viewed in the source code.
                </li>
                <li>
                    The body section contains the message content and is the visible part shown by email clients.
                </li>
            </ul>
            <p className="mb-4 leading-relaxed">
                It’s important to note that sending emails involves not just the programming language used, but also several standards (RFC 2822, RFC 2047...), server software, communication protocols (SMTP, IMAP, etc.), server configurations, and email providers (e.g., Gmail, Yahoo, etc.). These factors make ensuring the proper receipt of an email complex.
            </p>

            {/* Section 2: Prerequisites */}
            <h2 className="text-2xl font-semibold mb-4">Prerequisites: Setting up an Email Server</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                By default, your system should not be able to send emails. To test whether your site can send emails, you need to set up a fake mail server.
            </p>
            <h3 className="text-xl font-semibold mb-4">Installing MailHog</h3>
            <p className="mb-4 leading-relaxed">
                MailHog is a tool that intercepts and displays emails on a local SMTP server without actually sending them. This is useful during development to test email functionality.
            </p>
            <CodeBlock code={`# Install Go
sudo apt-get -y install golang-go

# Install MailHog
go install github.com/mailhog/MailHog@latest
sudo cp go/bin/MailHog /usr/local/bin/mailhog

# If you encounter the following error, use the command below:
# can't load package: package github.com/mailhog/MailHog@latest: cannot use path@version syntax in GOPATH mode
$ export GO111MODULE=on

# Then run the following to install:
go get github.com/mailhog/MailHog@latest`} language="php" />

            {/* Section 3: Configuring PHP */}
            < h2 className="text-2xl font-semibold mb-4" > Configuring PHP</h2 ><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                After installing MailHog, you need to configure PHP to use it as the mail server for sending emails.
            </p>
            <CodeBlock code={`# Open PHP configuration file
sudo nano /etc/php/8.2/cli/php.ini

# Modify sendmail_path to use MailHog
sendmail_path = /usr/local/bin/mailhog sendmail`} language="php" />

            {/* Section 4: Running MailHog */}
            <h2 className="text-2xl font-semibold mb-4">Running MailHog</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                To start MailHog, open a terminal and run the following command:
            </p>
            <CodeBlock code={`# Start MailHog
mailhog`} language="php" />
            <p className="mb-4 leading-relaxed">
                Then, open <code className="px-1 rounded">http://localhost:8025</code> in your browser to view intercepted emails.
            </p>
            <p className="mb-4 leading-relaxed">
                Note that MailHog is just an emulator that intercepts and displays emails locally. It doesn’t send real emails. It’s a development tool used to test email functionality without sending actual emails.
            </p>


            {/* Section 1: Overview of the mail() Function */}
            <h2 className="text-2xl font-semibold mb-4">Sending Emails with the mail() Function</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                PHP provides the <code className="px-1 rounded">mail()</code> function to send emails.
                This function requires the following parameters:
            </p>
            <CodeBlock code={`mail(recipient, subject, message, headers, parameters);`} language="php" />
            <p className="mb-4 leading-relaxed">
                The <code className="px-1 rounded">mail()</code> function returns a boolean value: <strong>TRUE</strong> if executed correctly, and <strong>FALSE</strong> if it fails.
            </p>

            {/* Section 2: Function Parameters */}
            <h2 className="text-2xl font-semibold mb-4">Parameters of the mail() Function</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>
                    <strong>Recipient</strong>: The email address of the person you want to send the email to.
                </li>
                <li>
                    <strong>Subject</strong>: The subject of the email, as it will appear in the email client.
                </li>
                <li>
                    <strong>Message</strong>: The main content of the email, as it will appear in the email client.
                </li>
                <li>
                    <strong>Headers</strong>: Optional technical information (e.g., MIME version, content type).
                </li>
                <li>
                    <strong>Parameters</strong>: Additional optional technical information.
                </li>
            </ul>

            {/* Section 3: Example of Usage */}
            <h2 className="text-2xl font-semibold mb-4">Example</h2><div className="border-b border-gray-300 mb-6" />
            <CodeBlock code={`<?php
mail('dave.loper@outlook.com',
'Registration Confirmation',
'Welcome to Gardenly! You can buy cherry tomatoes for your aperitif and a wheelbarrow to carry them. Quickly get your American Express!',
array('From' => 'contact@gardenly.com',
    'Reply-To' => 'commercial@gardenly.com',
    'X-Mailer' => 'PHP/' . phpversion()
    )
);
?>`} language="php" />

            <p className="mb-4 leading-relaxed">
                Note: Most hosting providers disable the <code className="px-1 rounded">mail()</code> function to avoid spam. They may limit its usage (e.g., a quota of emails within a specific time period). Some offer alternatives with limited arguments or through custom functions.
            </p>

            {/* Section 4: Recipient Formatting */}
            <h2 className="text-2xl font-semibold mb-4">Recipient Formatting</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                The recipient email can be written in various formats, but it must comply with the RFC 2822 standard.
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>
                    <code>dave.loper@outlook.com</code>
                </li>
                <li>
                    <code>Dave Loper &lt;dave.loper@outlook.com&gt;</code>
                </li>
            </ul>
            <p className="mb-4 leading-relaxed">
                You can also specify multiple recipients, separated by commas (note that spam filters don't like this):
            </p>
            <CodeBlock code={`<?php
$recipient = 'Dave Loper <dave.loper@outlook.com>,
      jessica.young@outlook.com,
      alex.thomson@gmail.com';
?>`} language="php" />

            {/* Section 5: Subject */}
            < h2 className="text-2xl font-semibold mb-4" > Subject(Topic)</h2 ><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                The subject is the email's topic. It must also follow the RFC 2822 standard and adhere to good practices, as poorly written subjects may be flagged as spam.
            </p>
            <p className="mb-4 leading-relaxed">
                Keep the subject concise to avoid truncation by email clients.
            </p>

            {/* Section 6: Body Content */}
            <h2 className="text-2xl font-semibold mb-4">Body Content</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                The body contains the content of the email that will be displayed. It can be in either plain text or HTML format, and you can configure the email to handle both formats.
            </p>

            {/* Section 7: Headers */}
            <h2 className="text-2xl font-semibold mb-4">Headers</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Headers are optional but can include technical information like the format (text/HTML), encoding (UTF-8), recipients in CC, or attachments.
            </p>
            <p className="mb-4 leading-relaxed">
                Some email services require specific headers, or the email may be flagged as spam. Headers are not visible in the email itself but can be viewed in the email client’s source code.
            </p>

            <h3 className="text-xl font-semibold mb-4">Declaring Headers</h3>
            <p className="mb-4 leading-relaxed">
                Headers can be set using string concatenation or an associative array. The second method is recommended for better readability and security.
            </p>
            <CodeBlock code={`# Example 1: Concatenating strings for headers
$sHeaders  = 'MIME-Version: 1.0' . '\\r\\n';
$sHeaders .= 'Content-Type: text/html; charset=utf-8' . '\\r\\n';
$sHeaders .= 'From: Dave Loper <dave.loper@outlook.com>' . '\\r\\n';
$sHeaders .= 'Reply-to: Sales department <commercial@gardenly.com>' . '\\r\\n';
$sHeaders .= 'X-Mailer: PHP/' . phpversion() . '\\r\\n';

# Example 2: Using a PHP array for headers
$aHeaders[] = 'MIME-Version: 1.0';
$aHeaders[] = 'Content-Type: text/html; charset=utf-8';
$aHeaders[] = 'From: Dave Loper <dave.loper@outlook.com>';
$aHeaders[] = 'Reply-to: Sales department <commercial@gardenly.com>';
$aHeaders[] = 'X-Mailer: PHP/' . phpversion();

# Alternative syntax using associative arrays
$aHeaders = array(
'MIME-Version' => '1.0',
'Content-Type' => 'text/html; charset=utf-8',
'From' => 'Dave Loper <dave.loper@outlook.com>',
'Reply-To' => 'Sales department <commercial@gardenly.com>',
'X-Mailer' => 'PHP/' . phpversion()
);`} language="php" />

            {/* Section 1: Overview */}
            <h2 className="text-2xl font-semibold mb-4">Respecting the Case of Header Names</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Email headers should respect the case of the header names. Here is a list of common headers used in an email:
            </p>

            <table className="table-auto w-full mb-4">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">Value</th>
                        <th className="px-4 py-2 border">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2 border">BCC</td>
                        <td className="px-4 py-2 border">Blind Carbon Copy. Email addresses are hidden from other recipients.</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border">CC</td>
                        <td className="px-4 py-2 border">Carbon Copy. Email addresses are visible to all recipients.</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border">Content-Type</td>
                        <td className="px-4 py-2 border">Specifies the format of the email (e.g., plain text or HTML).</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border">From</td>
                        <td className="px-4 py-2 border">Sender of the email.</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border">MIME-Version</td>
                        <td className="px-4 py-2 border">MIME version (always 1.0).</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border">Reply-To</td>
                        <td className="px-4 py-2 border">Reply-to address, different from the "From" address.</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border">X-Mailer</td>
                        <td className="px-4 py-2 border">Software used to send the email.</td>
                    </tr>
                </tbody>
            </table>

            {/* Section 2: Text and HTML Formats */}
            <h2 className="text-2xl font-semibold mb-4">Text and HTML Formats</h2>

            <h3 className="text-xl font-semibold mb-4">Text Format</h3>
            <p className="mb-4 leading-relaxed">
                The text format (plain text) is the default email format. It is readable on all devices without any formatting.
            </p>
            <CodeBlock code={`$aHeaders[] = 'Content-Type: text/plain; charset=utf-8';`} language="php" />

            <h3 className="text-xl font-semibold mb-4">HTML Format</h3>
            <p className="mb-4 leading-relaxed">
                The HTML format allows you to send emails as actual web pages with HTML structure, CSS styling, images, and even Javascript interactions.
            </p>
            <CodeBlock code={`$aHeaders[] = 'MIME-Version: 1.0';`} language="php" />
            <CodeBlock code={`$aHeaders[] = 'Content-Type: text/html; charset=utf-8';`} language="php" />
            <p className="mb-4 leading-relaxed">
                The message body will then be encoded in HTML. Below is an example using Bootstrap:
            </p>

            <CodeBlock code={`$message = '<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>My First HTML Email</title>   
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h1>My First HTML Email</h1>
        <p className="text-lg leading-relaxed mb-4">Wow, this is awesome! We can even add an image.</p>
        <img src="image.jpg" alt="Logo" class="img-fluid">
    </div>
</body>
</html>'`} language="php" />

            <h3 className="text-xl font-semibold mb-4">Combined Formats</h3>
            <p className="mb-4 leading-relaxed">
                It is a good practice to send an email in both text and HTML formats. The code for this is separated by a "boundary" line, allowing email clients to choose which format to display based on their capabilities.
            </p>

            <CodeBlock code={`$boundary = '----=_Part_0_1234567_8901234';
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-Type: multipart/alternative; boundary=\"$boundary\"" . "\r\n";

        $message = "--$boundary\r\n";
        $message .= "Content-Type: text/plain; charset=utf-8\r\n";
        $message .= "\r\n" . $plainTextContent . "\r\n";
        $message .= "--$boundary\r\n";
        $message .= "Content-Type: text/html; charset=utf-8\r\n";
        $message .= "\r\n" . $htmlContent . "\r\n";
        $message .= "--$boundary--";`} language="php" />

            {/* Section 3: Headers */}
            <h2 className="text-2xl font-semibold mb-4">Headers</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Headers provide technical information about the email, such as content type, encoding, recipients in CC, or attachments.
            </p>
            <p className="mb-4 leading-relaxed">
                Some email services require specific headers, or the email may be flagged as spam. These headers are not visible to the recipient but can be viewed in the email client’s source code.
            </p>

            <h3 className="text-xl font-semibold mb-4">Declaring Headers</h3>
            <p className="mb-4 leading-relaxed">
                Headers can be set using string concatenation or an associative array. The latter method is recommended for better readability and security.
            </p>
            <CodeBlock code={`# Example 1: Concatenating strings for headers
$sHeaders  = 'MIME-Version: 1.0' . '\\r\\n';
$sHeaders .= 'Content-Type: text/html; charset=utf-8' . '\\r\\n';
$sHeaders .= 'From: Dave Loper <dave.loper@outlook.com>' . '\\r\\n';
$sHeaders .= 'Reply-to: Sales department <commercial@gardenly.com>' . '\\r\\n';
$sHeaders .= 'X-Mailer: PHP/' . phpversion() . '\\r\\n';

# Example 2: Using a PHP array for headers
$aHeaders[] = 'MIME-Version: 1.0';
$aHeaders[] = 'Content-Type: text/html; charset=utf-8';
$aHeaders[] = 'From: Dave Loper <dave.loper@outlook.com>';
$aHeaders[] = 'Reply-to: Sales department <commercial@gardenly.com>';
$aHeaders[] = 'X-Mailer: PHP/' . phpversion();

# Alternative syntax using associative arrays
$aHeaders = array(
'MIME-Version' => '1.0',
'Content-Type' => 'text/html; charset=utf-8',
'From' => 'Dave Loper <dave.loper@outlook.com>',
'Reply-To' => 'Sales department <commercial@gardenly.com>',
'X-Mailer' => 'PHP/' . phpversion()
);`} language="php" />


            {/* Section 1: Sending Email with an Attachment */}
            <h2 className="text-2xl font-semibold mb-4">How to Send an Email with an Attachment in PHP</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                To send an email with an attachment using PHP, you need to set the correct MIME type and encode the file as base64.
                Below is an example code showing how to do this.
            </p>

            <CodeBlock code={`<?php
// Recipients 
$recipients = 'contact@outlook.com'; 

// Object
$object = 'Registration confirmation';  

// Additional headers 
$headers  = ''; 
$headers .= 'From: \'Dave Loper\' <dave.loper@outlook.com>\r\n';  
$headers .= 'MIME-Version: 1.0\r\n'; 
$headers .= 'Content-Type: multipart/mixed; ';
$headers .= 'boundary=\'ligne\'\r\n'; 

// Message. 
$message  = ''; 
// First part of the message (text)
$message .= '--ligne\r\n'; 
$message .= 'Content-Type: text/plain; '; 
$message .= 'charset=iso-8859-1\r\n '; 
$message .= 'Content-Transfer-Encoding: 8bit\r\n'; 
$message .= '\r\n';  
$message .= 'Voir la pièce jointe.\r\n'; 
$message .= '\r\n';  

// Second part of the message (attachment)
$message .= '--ligne\r\n'; 
$message .= 'Content-Type: application/octet-stream; '; 
$message .= 'name=\'print.php\'\r\n'; 
$message .= 'Content-Transfer-Encoding: base64\r\n'; 
$message .= 'Content-Disposition: attachment; '; 
$message .= 'filename=\'print.php\'\r\n'; 
$message .= '\r\n'; 

// Reading the attached file
$sFileAdd = file_get_contents('print.php'); 

// Data encoding and slicing
$sFileAdd = chunk_split(base64_encode($sFileAdd)); 

// Part attachment (integration into message)
$message .= '$sFileAdd\r\n'; 
$message .= '\r\n'; 

// End of message delimiter.
$message .= '--ligne--\r\n'; 

// Sending 
$Sending = mail($recipients, $object, $message, $headers); 

echo 'Email successfully sent to ' . $recipients;
?>`} language="php" />

            <p className="mb-4 leading-relaxed">
                The PHP `mail()` function is used here with headers specifying MIME type for a multipart message, which includes both text and an attachment. The file is read and encoded in base64 before being added to the email.
            </p>

            {/* Section 2: Libraries, Frameworks, and Email Services */}
            <h2 className="text-2xl font-semibold mb-4">Libraries, Frameworks, and Email Services</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                To simplify the process of sending emails in a PHP project, you can use several tools. One popular open-source library is <a href="https://github.com/PHPMailer/PHPMailer" target="_blank" className="text-blue-600">PHPMailer</a>.
            </p>

            To install and get started with PHPMailer, check out this <a href="php14_mails/phpmailer" target="_blank" className="text-blue-600">ressource</a>.

            <p className="mb-4 leading-relaxed">
                Other frameworks, like Symfony, offer native tools or plugins, such as the Mailer library, to manage email sending.
            </p>
            <p className="mb-4 leading-relaxed">
                For mass email campaigns (such as newsletters), services like Mailchimp, Sendinblue, Mailgun, SendGrid, and MailJet offer powerful tools for optimal email deliverability and tracking (open rates, unsubscribes, etc.). These services are often integrated into CMS platforms like WordPress.
            </p>

            {/* Section 3: Best Practices for Sending Emails */}
            <h2 className="text-2xl font-semibold mb-4">Best Practices for Sending Emails</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                To avoid being flagged as a spammer and ensure your emails reach the recipient's inbox, follow these best practices:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Ensure correct HTML markup.</li>
                <li>Use UTF-8 encoding for your emails.</li>
                <li>Make the email HTML responsive so it looks good on both PCs and mobile devices.</li>
                <li>Include an unsubscribe link for the user.</li>
                <li>Provide a link for proper email display in case the email client does not render it well.</li>
            </ul>

            <p className="mb-4 leading-relaxed">
                Be aware that your server's IP address could be blacklisted as a spammer if you fail to follow proper practices. However, even a correctly configured server can have emails marked as spam if the content is not well interpreted by email filters.
            </p>
        </div >
    );
};

export default PHP_Mail;
