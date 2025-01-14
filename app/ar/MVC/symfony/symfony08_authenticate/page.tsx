import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const SymfonyAuthenticationCourse: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">المصادقة في Symfony</h1>

            <section>
                <h2 className="text-2xl font-semibold mt-4">اكتشاف مكون الأمان</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    يعتبر الأمان أحد أهم جوانب تطبيقات الويب، ولا يعد أمرًا تافهًا. لتسهيل عمل المطور، توفر Symfony العديد من الأدوات الأساسية من خلال مكون الأمان.
                </p>

                <h2 className="text-2xl font-semibold mt-4">التثبيت</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    لاستخدام مكون الأمان في Symfony، يجب أولاً تثبيته:
                </p>
                <CodeBlock code={`composer require symfony/security-bundle`} />
                <p className="text-lg leading-relaxed mb-4">
                    الآن بعد أن تم تثبيته، دعونا نستكشف الأعمدة الثلاثة لنظام الأمان في مشروع Symfony:
                </p>
                <ul>
                    <li>فئة المستخدم (المسؤولة عن تسجيل المستخدمين والتحقق من هويتهم)</li>
                    <li>المصادقة (التحقق من هوية الزائر لموقعك - سواء كان مستخدمًا مجهولاً أو مستخدمًا موثقًا)</li>
                    <li>التفويض (التحكم في الوصول إلى أقسام/صفحات معينة من الموقع)</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-4">إنشاء فئة المستخدم</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    في مشروع Symfony، ترتبط الأذونات دائمًا بكائن المستخدم. إذا كنا بحاجة إلى تأمين بعض أقسام الموقع، يجب أولاً إنشاء فئة مستخدم. يمكنك إنشاؤها باستخدام الأمر التالي:
                </p>
                <CodeBlock code={`php bin/console make:user`} />
                <p className="text-lg leading-relaxed mb-4">
                    يقترح الأمر `make:user` اسم "User" كاسم الفئة، ولكن يمكننا اختيار اسم آخر. سنقوم بتسميتها `Utilisateur`.
                </p>

                <h2 className="text-2xl font-semibold mt-4">كود فئة المستخدم</h2>
                <div className="border-b border-gray-300 mb-6" />

                <CodeBlock code={`<?php

namespace App\Entity;

use App\Repository\UtilisateurRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UtilisateurRepository::class)]
class Utilisateur implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $email = null;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string كلمة المرور المشفرة
     */
    #[ORM\Column]
    private ?string $password = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * معرّف مرئي يمثل هذا المستخدم.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // ضمان أن كل مستخدم لديه ROLE_USER على الأقل
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // إذا كنت تخزن أي بيانات مؤقتة وحساسة للمستخدم، امسحها هنا
        // $this->plainPassword = null;
    }
}`} />

                <h2 className="text-2xl font-semibold mt-4">التفسير</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    على عكس الكيانات الأخرى التي أنشأتها، فإن كيان المستخدم ينفذ واجهتين مرتبطتين بنظام المصادقة: <code>UserInterface</code> و <code>PasswordAuthenticatedUserInterface</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    تسمح هذه الواجهات بإدارة المعرّف الفريد (افتراضيًا البريد الإلكتروني)، والأدوار (الأذونات)، وتجربة تشفير كلمة المرور.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    عند استخدام أمر <code>make:user</code>، تظهر هذه الفئة كمزود مستخدم (<code>UserProvider</code>) في ملف <code>security.yaml</code>.
                </p>

                <h2 className="text-2xl font-semibold mt-4">الخطوات التالية</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    بعد إنشاء فئة المستخدم، ستقوم بتكوينها لضمان وظيفة تسجيل وتوثيق المستخدم بشكل صحيح في تطبيق Symfony الخاص بك.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">الإعدادات: إعدادات الأمان</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    إليك كيفية تكوين إعدادات الأمان لمشروع Symfony الخاص بك.
                </p>

                <CodeBlock code={`# config/packages

security:
    # https://symfony.com/doc/current/security.html#registering-the-user-hashing-passwords
    password_hashers:
        Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface: 'auto'
    # https://symfony.com/doc/current/security.html#loading-the-user-the-user-provider
    providers:
        # used to reload user from session & other features (e.g. switch_user)
        app_user_provider:
            entity:
                class: App\Entity\Utilisateur  <--- مزود المستخدم الخاص بك
                property: email  <--- المعرف الفريد
`} />

                <p className="text-lg leading-relaxed mb-4">
                    لاحظ الإدخال <code>password_hashers</code> قبل <code>providers</code>: بمجرد إنشاء الفئة، يتيح لك Symfony استخدام خدمة <code>UserPasswordHasherInterface</code> لتجزئة كلمة مرور المستخدم قبل إدخالها في قاعدة البيانات. بشكل افتراضي، يستخدم Symfony "auto" لنظام التجزئة، مما يعني أنه يتحمل مسؤولية اختيار أحدث دالة لتجزئة (حاليًا bcrypt، ولكن هناك دوال أخرى).
                </p>

                <h2 className="text-2xl font-semibold mt-4">تجزئة كلمة المرور في المتحكم</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    إليك كيفية تجزئة كلمة المرور في متحكم:
                </p>

                <CodeBlock code={`// src/Controller/RegistrationController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class RegistrationController extends AbstractController
{
    public function index(UserPasswordHasherInterface $passwordHasher): Response
    {
        // على سبيل المثال، احصل على بيانات المستخدم من نموذج التسجيل
        $user = new User(...);
        $plaintextPassword = ...;

        // قم بتجزئة كلمة المرور (بناءً على تكوين security.yaml لفئة $user)
        $hashedPassword = $passwordHasher->hashPassword(
            $user,
            $plaintextPassword
        );
        $user->setPassword($hashedPassword);

        // ...
    }
}`} />

                <p className="text-lg leading-relaxed mb-4">
                    يمكنك أيضًا تجزئة كلمة المرور باستخدام سطر الأوامر (لأغراض الاختبار، لا تستخدمه في الإنتاج!):
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code className="bash">php bin/console security:hash-password</code>
                </pre>

                <h2 className="text-2xl font-semibold mt-4">جدار الحماية</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    يحتوي ملف <code>security.yaml</code> الخاص بك على إدخال ثالث (بعد <code>password_hashers</code> و<code>providers</code>):
                </p>

                <CodeBlock code={`firewalls:
        dev:
            pattern: ^/(_(profiler|wdt)|css|images|js)/
            security: false
        main:
            lazy: true
            provider: app_user_provider`} />

                <p className="text-lg leading-relaxed mb-4">
                    قسم <code>firewalls</code> هو جوهر نظام الأمان في تطبيق Symfony الخاص بك: فهو يتعامل مع المصادقة! يحدد جدار الحماية المناطق المحمية التي تتطلب تسجيل الدخول ويحدد كيفية مصادقة المستخدمين (نموذج تسجيل الدخول، رمز API، OAuth، وما إلى ذلك).
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    جدار الحماية "main" هو الجدار الأساسي (يتعامل مع جميع الروابط، أساسًا نقطة الدخول إلى موقعك!). إذا أضفت جدران حماية إضافية (مثل جدار حماية "api")، يجب عليك إعلانها قبل الجدار الرئيسي.
                </p>

                <h2 className="text-2xl font-semibold mt-4">المصادقة</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    نموذج تسجيل الدخول: تحتوي معظم المواقع على نموذج تسجيل دخول يسمح للمستخدمين بالمصادقة باستخدام اسم المستخدم (البريد الإلكتروني أو اسم المستخدم) وكلمة المرور. في Symfony، يمكنك إنشاء هذا النموذج باستخدام الأمر:
                </p>

                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code className="bash">php bin/console make:auth</code>
                </pre>

                <p className="text-lg leading-relaxed mb-4">
                    سيقوم هذا بإنشاء متحكم ونموذج وفئة للتعامل مع المصادقة المستندة إلى النماذج (المصادق).
                </p>

                <p className="text-lg leading-relaxed mb-4">
                    بعد تشغيل الأمر، سيكون لمشروعك ملفات جديدة: <code>SecurityController.php</code>، <code>src/Security/UserFormAuthenticator.php</code>، و<code>templates/security/login.html.twig</code>.
                </p>

                <h2 className="text-2xl font-semibold mt-4">تعديل طريقة onAuthenticationSuccess</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    افتح ملف <code>UserFormAuthenticator.php</code>. سنقوم بتعديل دالة <code>onAuthenticationSuccess</code> لإضافة المسار الذي سيتم إعادة توجيه المستخدم إليه بعد تسجيل الدخول:
                </p>

                <CodeBlock code={`public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
{
    // إذا كان هناك مسار في الجلسة قبل تسجيل الدخول، سيتم إعادة توجيه المستخدم إلى ذلك المسار
    if ($targetPath = $this->getTargetPath($request->getSession(), $firewallName)) {
        return new RedirectResponse($targetPath);
    }

    // خلاف ذلك، سيتم إعادة توجيه المستخدم إلى صفحة 'profil'
    return new RedirectResponse($this->urlGenerator->generate('app_profil'));

    throw new \Exception('TODO: provide a valid redirect inside '.__FILE__);
}`} />

            </section>
        </div>
    );
};

export default SymfonyAuthenticationCourse;
