import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const SendingEmailsWithPHPMailer: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">إرسال رسائل بريد إلكتروني باستخدام PHPMailer</h1>

            <h2 className="text-2xl font-semibold mb-2">مقدمة</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                PHPMailer هي مكتبة مفتوحة المصدر لإرسال الرسائل الإلكترونية باستخدام PHP. وهي بديل لدالة PHP `mail()` وتوفر ميزات إضافية مثل إرسال المرفقات ودعم SMTP ومعالجة الأخطاء وتخصيص البريد الإلكتروني.
            </p>

            <h2 className="text-2xl font-semibold mb-2">الخطوات لاستخدام PHPMailer</h2>
            <div className="border-b border-gray-300 mb-6" />
            <h3 className="text-xl font-semibold mb-4">1. التثبيت</h3>
            <p className="text-lg leading-relaxed mb-4">
                لاستخدام PHPMailer، الخطوة الأولى هي تثبيت المكتبة. PHPMailer متاح على Packagist ويمكن تثبيته باستخدام Composer. قم بتشغيل الأمر التالي في الطرفية:
            </p>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                composer require phpmailer/phpmailer
            </pre>
            <p className="text-lg leading-relaxed mb-4">
                إذا لم تكن قد قمت بتثبيت Composer، يمكنك زيارة موقع Composer واتباع التعليمات لتثبيته. ثم قم بتشغيل الأمر التالي لتهيئة مشروعك:
            </p>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                composer init
            </pre>
            <p className="text-lg leading-relaxed mb-4">
                بعد ذلك، قم بتثبيت PHPMailer بتشغيل:
            </p>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                composer require phpmailer/phpmailer
            </pre>

            <h3 className="text-xl font-semibold mb-4">2. التهيئة</h3>
            <p className="text-lg leading-relaxed mb-4">
                قبل استخدام PHPMailer، قم بتهيئة خادم SMTP الخاص بك. سنستخدم MailHog، وهو خادم SMTP محلي يقوم بالتقاط الرسائل وعرضها في واجهة ويب.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                إذا لم تكن قد قمت بتثبيت MailHog بعد، يمكنك العثور على تعليمات التثبيت عبر الإنترنت.
            </p>

            <h3 className="text-xl font-semibold mb-4">3. استيراد الملف التلقائي</h3>
            <p className="text-lg leading-relaxed mb-4">
                لاستخدام PHPMailer، قم باستيراد ملف `autoload` لتحميل الفئات اللازمة تلقائيًا:
            </p>
            <CodeBlock code={`<?php
require_once 'vendor/autoload.php';`} />

            <h3 className="text-xl font-semibold mb-4">4. إنشاء كائن البريد</h3>
            <p className="text-lg leading-relaxed mb-4">
                الآن، يمكنك إنشاء كائن PHPMailer واستخدامه لإرسال الرسائل:
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
        echo 'تم إرسال البريد الإلكتروني بنجاح';
    } catch (Exception $e) {
        echo "فشل إرسال البريد الإلكتروني. حدث الخطأ التالي: ", $mail->ErrorInfo;
    }
}`} />

            <h3 className="text-xl font-semibold mb-4">
                في هذا المثال، أنشأنا كائن PHPMailer وتهيأنا خادم SMTP لاستخدامه مع `localhost` والمنفذ `1025`، وهما الإعدادات الافتراضية لـ MailHog. قمنا بتحديد المرسل والمستلمين والموضوع وجسم الرسالة وأضفنا مرفقًا. وأخيرًا، استخدمنا طريقة <code>send()</code> لإرسال البريد الإلكتروني.
            </h3>

            <h3 className="text-xl font-semibold mb-4">5. اختبار البريد الإلكتروني</h3>
            <p className="text-lg leading-relaxed mb-4">
                قم بتشغيل سكربت PHPMailer لإرسال بريد إلكتروني إلى MailHog. ثم افتح واجهة MailHog عبر الانتقال إلى:
            </p>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                http://localhost:8025/
            </pre>
            <p className="text-lg leading-relaxed mb-4">
                في واجهة MailHog، يجب أن ترى البريد الإلكتروني الذي أرسلته للتو.
            </p>

            <h2 className="text-2xl font-semibold mb-2">الخاتمة</h2>
            <p className="text-lg leading-relaxed mb-4">
                بينما تعد دالة PHP <code>mail()</code> بسيطة في الاستخدام، إلا أنها تفتقر إلى العديد من الميزات مثل إرسال المرفقات وتخصيص البريد الإلكتروني. كما أنها قد تكون عرضة لمشاكل أمنية مثل البريد العشوائي والاختراق.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                في المقابل، يوفر PHPMailer العديد من الميزات بما في ذلك إرسال المرفقات وتخصيص البريد الإلكتروني ومعالجة الأخطاء ودعم SMTP. كما أنه أكثر أمانًا من دالة PHP <code>mail()</code>، حيث يستخدم تقنيات متقدمة لمنع البريد العشوائي والاختراق.
            </p>

            <h3 className="note-title">ملاحظة حول جمل "use"</h3>
            <p className="text-lg leading-relaxed mb-4">
                من المهم وضع جمل <code>use</code> في بداية سكربت PHPMailer الخاص بك. تستورد هذه الجمل فئات PHPMailer وException، مما يسمح لك باستخدامها دون الحاجة لتحديد المسار الكامل لها في كل مرة.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                بدون جمل <code>use</code>، ستحتاج إلى كتابة المسار الكامل كل مرة مثل:
            </p>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                $mail = new \PHPMailer\PHPMailer\PHPMailer();
            </pre>
            <p className="text-lg leading-relaxed mb-4">
                مع جمل <code>use</code>، يمكنك تبسيط الكود إلى:
            </p>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                $mail = new PHPMailer();
            </pre>
            <p className="text-lg leading-relaxed mb-4">
                هذا يجعل الكود أكثر نظافة وأسهل في القراءة.
            </p>
        </div>
    );
};

export default SendingEmailsWithPHPMailer;
