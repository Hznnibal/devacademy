import { CodeBlock } from '@/components/CodeBlock/code-block';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SymfonyFormsSetup: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">إعداد النماذج في Symfony</h1>

            <section>

                <h2 className="text-2xl font-semibold">مقدمة</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    مكون النماذج في Symfony هو مكتبة قوية تبسط إنشاء النماذج ومعالجتها والتحقق منها في تطبيق Symfony. يوفر تجريدًا فعالًا للنماذج التقليدية في HTML ويسمح بإدارة مركزية لبيانات النموذج.
                </p>

                <h2 className="text-2xl font-semibold">المتطلبات المبدئية</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    قبل البدء، تأكد من أنك قد قمت بتثبيت Symfony على جهازك وأنك قد أنشأت مشروع Symfony وظيفي. يمكنك استخدام الأمر التالي لإضافة مكون النماذج إلى مشروعك إذا لم يكن قد تم تثبيته بالفعل:
                </p>

                <CodeBlock code={`composer require symfony/form`} />

                <p className="text-lg leading-relaxed mb-4">
                    في هذه الدورة، سنواصل استخدام مشروع Symfony "monProjet"، حيث قمنا بإنشاء أولى المتحكمات والكيانات والعروض.
                </p>

                <h2 className="text-2xl font-semibold">ربط نموذج مع كيان</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    لنبدأ بإنشاء كيان "Contact".
                </p>

                <p className="text-lg leading-relaxed mb-4">
                    بعد ذلك، أضف ثلاث خصائص: <code>subject</code>، <code>email</code>، و <code>message</code>.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                    لاحظ علامة الاستفهام في نهاية خاصية <code>message</code>: اقترح Symfony خاصية نصية، لكننا نريد حقلًا يمكنه استيعاب أكثر من 255 حرفًا، مشابهًا لـ <code>textarea</code> في HTML! عندما تكون غير متأكد من الأنواع المتاحة، يمكنك إضافة علامة الاستفهام، وسعرض Symfony قائمة بجميع الأنواع المتاحة. بالنسبة لخاصية <code>message</code>، سنختار النوع <code>text</code>.
                </p>

                <CodeBlock code={`// src/Entity/Contact.php
namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ContactRepository::class)]
class Contact
{
#[ORM\Id]
#[ORM\GeneratedValue]
#[ORM\Column]
private ?int $id = null;

#[ORM\Column(length: 255)]
private ?string $subject = null;

#[ORM\Column(length: 255)]
private ?string $email = null;

#[ORM\Column(type: "text")]
private ?string $message = null;

// getters and setters...
}`} />

                <h3 className="text-xl font-semibold mb-4">تحديث قاعدة البيانات</h3>
                <p className="text-lg leading-relaxed mb-4">
                    بعد إنشاء الكيان، قم بتحديث مخطط قاعدة البيانات باستخدام الأمر التالي:
                </p>

                <CodeBlock code={`php bin/console d:s:u --force`} />

                <p className="text-lg leading-relaxed mb-4">
                    سيقوم هذا الأمر بتحديث قاعدة البيانات تلقائيًا لتعكس التغييرات التي تم إجراؤها على الكيان. سيقوم Symfony بإنشاء الجدول والأعمدة المناسبة لكيان <code>Contact</code>، بما في ذلك الحقل الجديد <code>message</code> من نوع <code>text</code>.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">شرح ContactFormType.php</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    الآن دعونا ننشئ نموذج اتصال مرتبط بكائن "Contact" الذي سيسمح لنا بإدخال رسالة جديدة في قاعدة البيانات.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                    دعونا نلقي نظرة على محتويات ملف <code>ContactFormType.php</code>:
                </p>

                <CodeBlock code={`// src/Form/ContactFormType.php
namespace App\Form;

use App\Entity\Contact;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('object')
            ->add('email')

            // لقد أضفنا تسمية وجعلنا حقل الرسالة اختياريًا عن طريق تعيين 'required' إلى false
            ->add('message', TextareaType::class, [
                'label' => 'رسالتك',
                'required' => false
            ])
            ->add('save', SubmitType::class, [
                'label' => 'إرسال الرسالة'
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
        ]);
    }
}`} />

                <h3 className="text-xl font-semibold mb-4">الشرح:</h3>
                <p className="text-lg leading-relaxed mb-4">
                    في هذا المثال، نستخدم فئة <code>ContactFormType</code> لإنشاء نموذج الاتصال الخاص بنا. نضيف ثلاث حقول: <code>object</code> (الموضوع)، <code>email</code>، و <code>message</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    يتم إنشاء كل حقل باستخدام طريقة <code>add()</code> من كائن <code>FormBuilderInterface</code>. تأخذ طريقة <code>add()</code> ثلاث معطيات: اسم الحقل، نوع الحقل، ومصفوفة اختيارية من الخيارات التي تسمح لنا بتخصيص طريقة عرض الحقل وسلوكه. على سبيل المثال، نستخدم الخيار <code>label</code> لتحديد التسمية المرتبطة بكل حقل.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                    كما جعلنا حقل <code>message</code> اختياريًا عن طريق تعيين الخيار <code>required</code> إلى <code>false</code>.
                </p>

                <h3 className="text-xl font-semibold mb-4">أنواع الحقول في نماذج Symfony</h3>
                <p className="text-lg leading-relaxed mb-4">
                    أحد الخيارات الأكثر استخدامًا في نماذج Symfony هو <code>required</code>، والذي يكون افتراضيًا <code>true</code>، مما يعني أن جميع الحقول في النموذج مطلوبة. إذا كنت ترغب في جعل حقل اختياريًا، قم بتعيين <code>required</code> إلى <code>false</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    كما أضفنا حقلًا يسمى <code>save</code>، مع النوع <code>SubmitType</code>، وحددنا التسمية الخاصة بزر الإرسال ('إرسال الرسالة'). <code>SubmitType</code> يعادل <code>&lt;input type="submit"&gt;</code> في HTML التقليدي.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    إحدى الفروقات الرئيسية بين نماذج Symfony ونماذج HTML التقليدية هي أن نماذج Symfony يتم تكوينها باستخدام فئات PHP بدلاً من كود HTML العادي.
                </p>

                <h3 className="text-xl font-semibold mb-4">أنواع الحقول الشائعة في Symfony</h3>
                <p className="text-lg leading-relaxed mb-4">
                    يوفر Symfony مجموعة واسعة من أنواع الحقول المدمجة التي تتوافق مع أنواع البيانات المختلفة التي قد تستخدمها في نموذج. فيما يلي بعض أنواع الحقول الشائعة:
                </p>
                <ul>
                    <li><strong>TextType:</strong> حقل نصي بسيط.</li>
                    <li><strong>TextareaType:</strong> حقل نصي متعدد الأسطر.</li>
                    <li><strong>EmailType:</strong> حقل لعنوان البريد الإلكتروني.</li>
                    <li><strong>IntegerType:</strong> حقل للأرقام الصحيحة.</li>
                    <li><strong>DateType:</strong> حقل للتواريخ.</li>
                    <li><strong>ChoiceType:</strong> حقل للقوائم المنسدلة أو مربعات الاختيار.</li>
                    <li><strong>FileType:</strong> حقل لتحميل الملفات.</li>
                    <li><strong>HiddenType:</strong> حقل مخفي.</li>
                    <li><strong>EntityType:</strong> حقل لاختيار كائن من علاقة.</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    هناك العديد من أنواع الحقول الأخرى المتاحة في Symfony. يمكنك أيضًا إنشاء أنواع حقول مخصصة عن طريق توسيع فئة <code>AbstractType</code> وتكوينها وفقًا لاحتياجاتك الخاصة.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    استخدام هذه الأنواع من الحقول يبسط عملية إنشاء وإدارة النماذج في Symfony، حيث يتولى التعامل مع العرض وتحويل البيانات تلقائيًا.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    يمكنك استخدام أنواع الحقول في Symfony عن طريق الإشارة إلى الفئات المقابلة في مكون النموذج، مثل <code>TextType::class</code>، <code>EmailType::class</code>، وهكذا، عند بناء النموذج.
                </p>
            </section>


            <section>
                <h2 className="text-2xl font-semibold">إعداد خيارات النموذج</h2>
                <p className="text-lg leading-relaxed mb-4">
                    يتم استخدام طريقة <code>configureOptions</code> في فئة FormType لتحديد خيارات إضافية للنموذج:
                </p>

                <CodeBlock code={`// src/Form/ContactFormType.php
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        // بناء النموذج...
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            // الخيارات الافتراضية للنموذج
            'data_class' => Contact::class,
        ]);
    }
}`} />

                <h3 className="text-xl font-semibold mb-4 ">الشرح:</h3>
                <p className="text-lg leading-relaxed mb-4">
                    في طريقة <code>configureOptions</code>، نستخدم كائن <code>$resolver</code> لتعريف الخيارات الافتراضية لنموذجنا. في هذه الحالة، نحدد أن الكائن (فئة البيانات) المرتبطة بالنموذج هي <code>Contact::class</code>. هذا يخبر Symfony بالفئة التي يجب استخدامها لربط بيانات النموذج.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    تتيح لنا طريقة <code>configureOptions</code> تحديد خيارات أخرى للنموذج، مثل خيارات العرض، خيارات التحقق، أو أي خيارات مخصصة نريد استخدامها في النموذج.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    لا تنسَ استيراد فئة <code>OptionsResolver</code> من مكون النموذج في Symfony لاستخدام طريقة <code>configureOptions</code>.
                </p>

                <h2 className="text-2xl font-semibold">حماية رمز CSRF</h2>
                <p className="text-lg leading-relaxed mb-4">
                    CSRF (تزوير الطلب عبر المواقع) هو هجوم شائع حيث يستغل المستخدم الضار ثقة المستخدم المعتمد لتنفيذ إجراءات غير مصرح بها نيابة عنه. لمنع هذا، يوفر Symfony حماية مدمجة ضد CSRF، حيث يستخدم رمز CSRF للتحقق من مصدر الطلبات المشروعة.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    عند استخدام مكون النموذج في Symfony، يتم إضافة حقل رمز CSRF تلقائيًا إلى النماذج الخاصة بك. يحتوي هذا الحقل على رمز فريد يتم إنشاؤه لكل تقديم نموذج ويستخدم للتحقق من صحة البيانات المقدمة.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    عند عرض النموذج في الواجهة، يتم إنشاء حقل رمز CSRF تلقائيًا مع علامة <code>&lt;input&gt;</code> محددة. عند تقديم النموذج، يتحقق Symfony من أن قيمة رمز CSRF تتطابق مع القيمة المتوقعة، مما يمنع هجمات CSRF.
                </p>

                <h3 className="text-xl font-semibold mb-4 ">توليد والتحقق من رمز CSRF</h3>
                <p className="text-lg leading-relaxed mb-4">
                    لتوليد والتحقق من رمز CSRF، يستخدم Symfony مكون <code>CsrfTokenManager</code>، الذي يتم تكوينه افتراضيًا في إطار Symfony. لا داعي للقلق بشأن إعدادها يدويًا. ومع ذلك، إذا كنت تستخدم نموذج HTML بسيط (كما في مشاريع PHP الخاصة بك)، ستحتاج إلى إنشاء رمز CSRF يدويًا والتحقق من قيمته في وحدة التحكم التي تدير النموذج.
                </p>

                <h4>مثال نموذج HTML</h4>
                <CodeBlock code={`<form action="{{ url('admin_post_delete', { id: post.id }) }}" method="post">
    {# يتم تمرير الوسيط إلى csrf_token() لتوليد الرمز #}
    <input type="hidden" name="token" value="{{ csrf_token('delete-item') }}"/>
    <button type="submit">حذف العنصر</button>
</form>`} />

                <h4>مثال وحدة تحكم</h4>
                <CodeBlock code={`use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
// ...

public function delete(Request $request): Response
{
    $submittedToken = $request->request->get('token');

    // يجب أن يتطابق 'delete-item' مع القيمة المستخدمة في العرض لتوليد الرمز
    if ($this->isCsrfTokenValid('delete-item', $submittedToken)) {
        // ... جسم الوظيفة
    }
}`} />

                <h3 className="text-xl font-semibold mb-4 ">عرض النموذج</h3>
                <p className="text-lg leading-relaxed mb-4">
                    بمجرد إنشاء النموذج، نحتاج إلى عرضه في الواجهة ومعالجة البيانات المقدمة من قبل المستخدم. دعونا ننشئ <code>ContactController</code> مع طريقة <code>index</code> التي يتم تفعيلها عند الوصول إلى المسار <code>/contact</code>. إليك كود العرض:
                </p>

                <CodeBlock code={`<?php

namespace App\Controller;

use App\Form\ContactFormType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact')]
    public function index(Request $request): Response
    {
        $form = $this->createForm(ContactFormType::class);
        // ...
        return $this->render('contact/index.html.twig', [
            'form' => $form
        ]);
    }
}`} />

                <h3 className="text-xl font-semibold mb-4 ">الشرح:</h3>
                <p className="text-lg leading-relaxed mb-4">
                    في هذه الوحدة التحكمية، نستخدم طريقة <code>createForm()</code> لإنشاء مثيل من <code>ContactFormType</code>. سيتم عرض هذا النموذج باستخدام طريقة <code>render()</code> في عرض <code>index.html.twig</code> الموجود في دليل <code>contact</code>. يمكننا الآن تعديل ملف <code>index.html.twig</code> لعرض النموذج:
                </p>

                <CodeBlock code={`{% extends 'base.html.twig' %}

{% block body %}
<div>
    {{ form(form) }}
</div>
{% endblock %}`} />

                <h4>عرض النموذج</h4>
                <p className="text-lg leading-relaxed mb-4">
                    وظيفة <code>form()</code> في Twig كافية لعرض النموذج بالكامل (الذي مررناه كمعامل)!
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    سيتم عرض النموذج مع الحقول التي تم تعريفها في <code>ContactFormType</code>: حقل نصي، حقل بريد إلكتروني، حقل نص طويل، وزر إرسال بعنوان "أرسل رسالتك". يمكننا تحسين العرض أكثر باستخدام وظائف Twig أخرى مثل <code>form_start()</code> و<code>form_end()</code> و<code>form_errors()</code> و<code>form_row()</code> لعرض كل جزء من النموذج بشكل فردي وإضافة سمات إضافية للحقول.
                </p>

                <CodeBlock code={`{% extends 'base.html.twig' %}

{% block body %}

<div class="row text-center">

    {{ form_start(form) }}
    <div class="my-custom-class-for-errors">
        {{ form_errors(form) }}
    </div>

    <div class="row">
        <div class="col-9 mx-auto mb-2 mt-4">
            {{ form_row(form.object) }}
        </div>
        <div class="col-9 mx-auto mb-2">
            {{ form_row(form.email) }}
        </div>
        <div class="col-9 mx-auto mb-2">
            {{ form_row(form.message) }}
        </div>

    </div>
    {{ form_end(form) }}
</div>
{% endblock %}`} />

                <p className="text-lg leading-relaxed mb-4">
                    الشرح:
                    بدلاً من استخدام وظيفة <code>form()</code>، استخدمنا وظائف أخرى لعرض كل حقل من حقول النموذج بشكل فردي (مع <code>form_row</code>).
                    ومع ذلك، يمكننا اتخاذ خطوة أخرى. بدلاً من استخدام <code>form_row()</code> لعرض الإدخال، التسمية، والأخطاء في كتلة واحدة،
                    يمكننا استخدام وظيفة <code>form_label()</code> للتسمية، و<code>form_widget()</code> للإدخال، و<code>form_help()</code> لرسائل المساعدة، و<code>form_errors()</code>
                    للأخطاء. بهذه الطريقة، يمكننا تخصيص كل جزء كما نريد!
                </p>

                <p className="text-lg leading-relaxed mb-4">إليك بنية حقل النموذج في Symfony:</p>
                <Image
                    src="/form_row_widget.png"
                    alt="بنية حقل النموذج"
                    className="rounded shadow-md"
                    width={560}
                    height={360}
                />
                <p className="text-lg leading-relaxed mb-4">
                    الآن، دعونا نضيف فئة Bootstrap إلى إدخال النموذج لـ "object" ونغير تسميته:
                </p>

                <CodeBlock code={`{% extends 'base.html.twig' %}

      {% block body %}

    <div class="row text-center">

       {{ form_start(form) }}
       <div class="my-custom-class-for-errors">
           {{ form_errors(form) }}
       </div>

       <div class="row">
          ...
             {{ form_label(form.object, "Mon libellé a été modifié") }}
             {{ form_widget(form.object, {'attr': {'class': 'btn-light'} }) }}
             {{ form_errors(form.object) }}
          ...
       </div>
       {{ form_end(form) }}
    </div>
    {% endblock %}`} />

            </section>

            <section>
                <h2 className="text-2xl font-semibold">معالجة النموذج</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">لنعد إلى وحدة التحكم الخاصة بنا ونلقي نظرة على الوظائف الأخرى:</p>

                <CodeBlock code={`use App\Entity\Contact;
use App\Form\DemoFormType;
use App\Form\ContactFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact')]
    public function index(Request $request, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ContactFormType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            //نقوم بإنشاء مثيل من Contact
            $message = new Contact();
            // معالجة بيانات النموذج
            $data = $form->getData();
            //نقوم بتخزين البيانات التي تم استرجاعها في المتغير $message
            $message = $data;

            $entityManager->persist($message);
            $entityManager->flush();

            // إعادة التوجيه إلى الصفحة الرئيسية
            return $this->redirectToRoute('app_accueil');
        }

        return $this->render('contact/index.html.twig', [
//            'form' => $form->createView(),
              'form' => $form
        ]);
    }
}`} />

                <ul>
                    <li>نستخدم طريقة <code>handleRequest()</code> لمعالجة طلب HTTP الحالي والتحقق من صحة البيانات المرسلة.</li>
                    <li>{`if ($form->isSubmitted()) - إذا تم إرسال النموذج و`}</li>
                    <li>{`&& $form->isValid()) - إذا كان النموذج صالحًا، يمكننا الوصول إلى بيانات النموذج باستخدام طريقة <code>getData()</code>.`}</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    في هذه المرحلة، يمكننا تنفيذ الإجراءات المطلوبة، مثل إنشاء كائن جديد من النوع Contact (`$message`). بعد حفظ الرسالة الجديدة في قاعدة البيانات، يمكننا إعادة توجيه المستخدم إلى صفحة أخرى.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    إذا لم يتم إرسال النموذج أو إذا كان غير صالح، نقوم بعرض النموذج في عرض <code>index.html.twig</code> الذي يقع في دليل contact ضمن القوالب، باستخدام طريقة <code>render()</code>. كما نستخدم طريقة <code>createView()</code> لإنشاء تمثيل للنموذج جاهز ليتم عرضه في قالبنا.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    ملاحظة: عندما تقوم بإنشاء نموذج في وحدة التحكم الخاصة بك، يكتشف Symfony تلقائيًا المسار الحالي ويستخدم هذا المسار كإجراء افتراضي للنموذج. وهذا يعني أنه عندما يتم إرسال النموذج، سيتم إرساله إلى نفس المسار الذي تم عرض النموذج فيه. إذا كنت ترغب في تحديد إجراء مختلف للنموذج، يمكنك القيام بذلك باستخدام الخيار <code>action</code> لتعريف مسار محدد:
                </p>
                <CodeBlock code={`$form = $this->createForm(ContactFormType::class, null, [
    'action' => $this->generateUrl('my_route'),
]);`} />
            </section>

            <section>
                <h2 className="text-2xl font-semibold">التحقق من البيانات</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    مكون النموذج في Symfony يدمج ميزة قوية للتحقق من البيانات. يمكنه التحقق تلقائيًا من صحة الحقول وفقًا للقواعد المحددة مسبقًا (على سبيل المثال، التحقق من صحة البريد الإلكتروني). يمكنك أيضًا تحديد قيود التحقق المخصصة الخاصة بك!
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    لإضافة قيود التحقق إلى نموذج الاتصال لدينا، يمكننا استخدام التعليقات التوضيحية للتحقق التي يوفرها Symfony، مثل <code>#[Assert\Email]</code> للتحقق من صحة عنوان البريد الإلكتروني.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    على سبيل المثال:
                </p>
                <CodeBlock code={`
use Symfony\Component\Validator\Constraints as Assert;

class Contact
{

    #[Assert\Email(message: "يرجى إدخال عنوان بريد إلكتروني صالح.")]
    private $email;

    // ...
}`} />

                <p className="text-lg leading-relaxed mb-4">
                    يمكن استخدام هذه السمات بطريقة مشابهة لتحديد قيود التحقق الأخرى مثل <code>NotNull</code> و<code>Length</code> و<code>Regex</code> وغيرها. يمكنك دمجها وتخصيصها وفقًا لاحتياجاتك.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    مهم! لا تنسَ استيراد فئة <code>Assert</code> من مكون التحقق في Symfony لاستخدام هذه السمات الخاصة بالتحقق.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">
                    ماذا لو لم يكن النموذج مرتبطًا بأي كائن؟
                </h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    إذا لم يكن النموذج مرتبطًا بكائن معين، يمكنك تمرير <code>null</code> كقيمة لخيار <code>data_class</code>. هذا يخبر Symfony أن النموذج غير مرتبط بكائن بيانات معين.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    يمكنك تحديد ذلك في طريقة <code>configureOptions</code> في فئة النموذج الخاصة بك:
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    مثال على نموذج غير مرتبط بكائن
                </p>
                <CodeBlock code={`class DemoFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('object')
            ->add('email')
            ->add('message', TextareaType::class, [
                'label' => 'رسالتك',
                'required' => false
                ]
            )
            ->add('save', SubmitType::class, [
                'label' => 'إرسال الرسالة'])

        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // النموذج غير مرتبط بأي كائن !!!
            // 'data_class' => Contact::class,
        ]);
    }
}`} />

                <p className="text-lg leading-relaxed mb-4">
                    بتحديد <code>data_class {`=>`} null</code> في الخيارات الافتراضية، نخبر Symfony أن النموذج غير مرتبط بكائن معين. هذا يعني أن بيانات النموذج سيتم إرجاعها كمصفوفة مترابطة بدلاً من كائن.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    <strong>[!ملاحظة]</strong> إذا كنت لا تحتاج إلى ربط النموذج بكائن بيانات أو لا ترغب في معالجة بيانات النموذج في كائن معين، يمكنك ترك خيار <code>data_class</code> بالقيمة الافتراضية <code>null</code>. ليس من الضروري تحديده صراحة.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    بتحديد <code>null</code> كقيمة لـ <code>data_class</code>، يمكنك معالجة بيانات النموذج مباشرة من المصفوفة التي يتم إرجاعها بواسطة طريقة <code>getData()</code> للنموذج.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    مثال على وحدة تحكم تنشئ نموذجًا غير مرتبط بكائن
                </p>
                <CodeBlock code={`#[Route('/contactdemo', name: 'app_contactdemo')]
public function index_demo(Request $request, EntityManagerInterface $entityManager): Response
{
    // عند إنشاء النموذج، يمكننا تحديد قيم أولية للحقول
    $form = $this->createForm(DemoFormType::class, [
        "object" => "أدخل نصًا هنا !!!",
        "email" => "",
        "message" => "",
    ]);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {

        // يمكننا استرجاع جميع بيانات النموذج كمصفوفة مترابطة
        $data = $form->getData();
        dump($data);

        // أو استرجاع الحقول واحدة تلو الأخرى
        $name = $form->get("object")->getData();
        dd($name);

        // إرسال البريد الإلكتروني، حفظ إلى قاعدة البيانات، إلخ.

        // إعادة التوجيه إلى الصفحة الرئيسية
        return $this->redirectToRoute('app_home');
    }

    return $this->render('contact/index.html.twig', [
          'form' => $form
    ]);
}
`} />

                <p className="text-lg leading-relaxed mb-4">
                    سمات النماذج في Symfony
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    من الممكن تحديد قالب أو أكثر لنماذجك. يجب تكوينها في ملف <code>config/packages/twig.yaml</code>:
                </p>
                <CodeBlock code={`# config/packages/twig.yaml
twig:
    form_themes: ['bootstrap_5_horizontal_layout.html.twig']
    # ...`} />

                <p className="text-lg leading-relaxed mb-4">
                    يمكنك إضافة سمات متعددة في مصفوفة الخيارات هذه، لكن كن حذرًا من الترتيب: كل سمة تتجاوز السمة السابقة! تأكد من وضع السمات الأكثر أهمية في نهاية القائمة!
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    على الرغم من أنه في معظم الأحيان ستقوم بتطبيق سمات النموذج بشكل عالمي (لكل النماذج في مشروعك)، يمكنك تطبيق سمة بناءً على الحالة. للقيام بذلك، يمكنك استخدام وسم Twig <code>form_theme</code> الذي تدمجه في الصفحة التي تعرض النموذج:
                </p>
                <CodeBlock code={`{# سمة النموذج هذه ستطبق فقط على النموذج في هذه القالب #}
{% form_theme form 'foundation_5_layout.html.twig' %}

{{ form_start(form) }}
    {# ... #}
{{ form_end(form) }}`} />

            </section>

            <div className="text-center mt-8">
                <Link href="symfony03_form/dbandform" className="text-blue-600 underline text-lg">
                    ربط النماذج بقاعدة البيانات.
                </Link>
            </div>

        </div>
    );
};

export default SymfonyFormsSetup;


