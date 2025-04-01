import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const DoctrineEventsCourse: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">أحداث Doctrine</h1>

            <section>
                <h2 className="text-2xl font-semibold mt-4">مقدمة - فهم EventSubscribers </h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    الـ EventSubscriber هو فئة تستمع إلى الأحداث وتنفذ إجراءات استجابة لتلك الأحداث. إنها ميزة قوية في Symfony لمعالجة الأحداث وتنفيذ إجراءات معينة.
                </p>

                <h2 className="text-2xl font-semibold mt-4">أحداث Symfony مقابل أحداث Doctrine</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    على الرغم من استخدامها معًا في تطبيق Symfony، إلا أن أحداث Symfony وأحداث Doctrine هما نظاما أحداث متميزان.
                </p>
                <ul>
                    <li>تستخدم أحداث Symfony لتحفيز إجراءات معينة استجابة للأحداث التي تحدث في التطبيق (مثل أحداث طلبات HTTP، معالجة النماذج، أحداث الأمان، الإشعارات، إلخ).</li>
                    <li>أحداث Doctrine هي خاصة بـ ORM هذا وتستخدم للاستماع إلى العمليات التي تجري على قاعدة البيانات بواسطة Doctrine، مثل إنشاء الكائنات، التحديث، الحذف، أو التحميل. يقوم Doctrine بإصدار الأحداث في مراحل مختلفة من دورة حياة الكائن، على سبيل المثال، `postPersist` بعد إدراج كائن، `preUpdate` قبل تحديث كائن، إلخ.</li>
                </ul>

                <p className="text-lg leading-relaxed mb-4">
                    تسمح أحداث Doctrine للمطورين باعتراض العمليات على قاعدة البيانات والرد عليها بتنفيذ إجراءات إضافية. على سبيل المثال، قد تقوم بإرسال بريد إلكتروني، أو تحديث كائن آخر، أو تنفيذ أي منطق أعمال ضروري.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                    بينما الأنواع المختلفة للأحداث متميزة، يوفر Symfony طرقًا لدمج أحداث Doctrine في نظام الأحداث الخاص به. يمكنك إنشاء EventSubscribers للاستماع إلى أحداث كل من Symfony وDoctrine والتصرف بناءً على ذلك.
                </p>

                <h2 className="text-2xl font-semibold mt-4">EventSubscriber مقابل EventListener</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    في Symfony، يمكنك استخدام كل من الـ listeners (مستمعي الأحداث) و الـ subscribers حسب احتياجات تطبيقك. يمكن لـ EventSubscriber الاستماع إلى عدة أحداث، بينما يستمع EventListener إلى حدث معين. الـ subscriber أكثر مرونة لأنه يمكنه الاستماع والرد على عدة أحداث باستخدام فئة واحدة.
                </p>

                <h2 className="text-2xl font-semibold mt-4">أحداث Doctrine الشائعة الاستخدام</h2>
                <div className="border-b border-gray-300 mb-6" />

                <ul>
                    <li><strong>prePersist:</strong> يتم تفعيله قبل أن يتم حفظ الكائن في قاعدة البيانات لأول مرة. يمكن استخدامه لإجراء إجراءات قبل إدراج كائن جديد، مثل تعيين القيم الافتراضية أو إجراء التحقق الإضافي.</li>
                    <li><strong>postPersist:</strong> يتم تفعيله بعد إدراج الكائن في قاعدة البيانات. مفيد لإجراءات إضافية، مثل إرسال رسائل بريد إلكتروني أو تحديث الذاكرة المؤقتة.</li>
                    <li><strong>preUpdate:</strong> يتم تفعيله قبل تحديث الكائن في قاعدة البيانات. يسمح باتخاذ إجراءات قبل حفظ التعديلات، مثل التحقق الإضافي أو تعديل الكائنات المرتبطة.</li>
                    <li><strong>postUpdate:</strong> يتم تفعيله بعد تحديث الكائن في قاعدة البيانات. يمكن استخدامه لإجراءات ما بعد التحديث، مثل السجلات، إرسال الإشعارات، إلخ.</li>
                    <li><strong>preRemove:</strong> يتم تفعيله قبل إزالة الكائن من قاعدة البيانات. يمكن استخدامه لإجراءات ما قبل الحذف، مثل التحقق أو فحص التبعيات.</li>
                    <li><strong>postRemove:</strong> يتم تفعيله بعد إزالة الكائن من قاعدة البيانات. مفيد لإجراءات ما بعد الحذف، مثل إزالة الملفات المرتبطة أو تحديث الكائنات الأخرى.</li>
                    <li><strong>onFlush:</strong> يتم تفعيله قبل التحقق من الكائنات وحفظها في قاعدة البيانات. يتيح لك العمل مع التغييرات الجارية قبل تنفيذها.</li>
                </ul>

                <p className="text-lg leading-relaxed mb-4">
                    ملاحظة: أحداث Doctrine هي خاصة بـ ORM هذا ولا تتفاعل مع سكربتات SQL التي يتم تنفيذها مباشرة على قاعدة البيانات! عندما يتم تشغيل هذه السكربتات، فإنها تتجاوز عملية الحفظ في Doctrine، لذلك لا يتم تفعيل أحداث Doctrine.
                </p>

                <h2 className="text-2xl font-semibold mt-4">إنشاء EventSubscriber لـ Doctrine</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    دعونا ننشئ مجلدًا جديدًا باسم `EventSubscriber` داخل مجلد `src` في مشروعك، وداخل هذا المجلد، أنشئ فئة `ContactSubscriber.php`. ستستمع هذه الفئة لأحداث Doctrine لاكتشاف السجلات الجديدة (الإدراج). عند إرسال نموذج الاتصال، سنقوم بالتحقق مما إذا كان الموضوع أو محتوى الرسالة يحتوي على كلمة "GDPR". إذا كان الأمر كذلك، سيتم إرسال بريد إلكتروني تنبيهي إلى مسؤول الموقع.
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
                    ->subject('تنبيه GDPR')
                    ->text("تم إرسال رسالة جديدة تتعلق بـ GDPR! معرّف الرسالة: " . $entity->getId() . " \n الموضوع: " . $entity->getSubject() . " \n الرسالة: " . $entity->getMessage());

                $this->mailer->send($email);
            }
        }
    }
}`} />

                <p className="text-lg leading-relaxed mb-4">
                    الشرح:
                </p>
                <ul>
                    <li><strong>getSubscribedEvents()</strong> - تُعيد هذه الطريقة مصفوفة من الأحداث التي يجب على الـ subscriber الاستماع إليها. الحدث مرتبط بطريقة <code>postPersist()</code> في الـ subscriber.</li>
                    <li>إذا تم إدراج كائن <code>Contact</code> جديد واحتوى الموضوع أو محتوى الرسالة على "GDPR"، يقوم الـ subscriber بإرسال بريد إلكتروني إلى مسؤول الموقع.</li>
                    <li><code>preg_match()</code> تُستخدم للبحث عن كلمة "rgpd" (بمقارنة غير حساسة للحروف وحدود الكلمات لضمان إيجادها ككلمة كاملة).</li>
                </ul>
                <h2 className="text-2xl font-semibold mt-4">تكوين الـ Subscriber</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    قبل استخدام الـ subscriber، يجب عليك إعلانها في ملف <code>services.yaml</code>:
                </p>

                <CodeBlock code={`services:
  # إضافة المزيد من تعريفات الخدمات عندما تكون التكوينات الصريحة مطلوبة
  App\EventSubscriber\ContactSubscriber:
    arguments:
      $mailer: '@Symfony\Component\Mailer\MailerInterface'
    tags:
      - { name: doctrine.event_subscriber }`} />

                <p className="text-lg leading-relaxed mb-4">
                    يستخدم هذا الإعلان وسم <code>doctrine.event_subscriber</code> للإشارة إلى Doctrine أن فئة <code>ContactSubscriber</code> هي subscriber للأحداث المحددة. كما يحدد الوسائط المرسلة إلى المُنشئ عند إنشاء الفئة (في هذه الحالة، <code>Mailer</code>).
                </p>

                <h2 className="text-2xl font-semibold mt-4">اختبر الـ Subscriber في مشروعك!</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    يمكنك تعديل الإجراءات المنفذة في طريقة <code>postPersist</code> أو إضافة نوع آخر من الأحداث (مثل <code>preUpdate</code>) حسب الحاجة.
                </p>
            </section>
        </div >
    );
};

export default DoctrineEventsCourse;
