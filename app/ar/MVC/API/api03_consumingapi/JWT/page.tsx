import { CodeBlock } from "@/components/CodeBlock/code-block";

const SymfonyJWTInstallationCourse = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">تثبيت - LexikJWTAuthenticationBundle</h1>
            <p className="text-lg mb-6">
                في هذه المرحلة، سنقوم بتثبيت وتكوين LexikJWTAuthenticationBundle لتفعيل المصادقة باستخدام JWT لواجهة Symfony API الخاصة بك.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">1. تثبيت LexikJWTAuthenticationBundle</h2>
                <p className="text-lg leading-relaxed mb-4">
                    لتثبيت LexikJWTAuthenticationBundle، قم بتنفيذ الأمر التالي في مشروع Symfony الخاص بك:
                </p>
                <CodeBlock code={`composer require "lexik/jwt-authentication-bundle"`} />

                <p className="text-lg leading-relaxed mb-4">
                    بعد التثبيت، ستلاحظ وجود ثلاثة متغيرات جديدة في ملف <code>.env</code> لتطبيقك:
                </p>
                <CodeBlock code={`###> lexik/jwt-authentication-bundle ###
JWT_SECRET_KEY=%kernel.project_dir%/config/jwt/private.pem
JWT_PUBLIC_KEY=%kernel.project_dir%/config/jwt/public.pem
JWT_PASSPHRASE="ne_pas_pousser_sur_git"
###< lexik/jwt-authentication-bundle ###`} />

                <p className="text-lg leading-relaxed mb-4">
                    هذه المتغيرات تتضمن:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>المسار إلى المفتاح الخاص (<code>private.pem</code>)</li>
                    <li>المسار إلى المفتاح العام (<code>public.pem</code>)</li>
                    <li>عبارة المرور (العبارة السرية المستخدمة لإنشاء زوج المفاتيح باستخدام OpenSSL)</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    ملاحظة: المجلدات الخاصة بهذه المفاتيح لا توجد بعد، سيتم إنشاؤها عند إنشاء المفاتيح.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">2. إنشاء زوج المفاتيح</h2>
                <p className="text-lg leading-relaxed mb-4">
                    لإنشاء زوج المفاتيح، قم بتنفيذ الأمر التالي:
                </p>
                <CodeBlock code={`php bin/console lexik:jwt:generate-keypair`} />

                <p className="text-lg leading-relaxed mb-4">
                    إذا كنت ترغب في تجنب الكتابة فوق المفاتيح الموجودة، يمكنك إضافة الخيارين التاليين:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li><code>--skip-if-exists</code> - إذا كانت المفاتيح موجودة بالفعل، فلن يقوم الأمر بفعل أي شيء.</li>
                    <li><code>--overwrite</code> - هذا الخيار سيعيد كتابة المفاتيح الموجودة.</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    بعد تنفيذ الأمر، سترى رسالة <code>[OK] Done!</code> في وحدة التحكم، وسيتم إنشاء مجلد <code>jwt</code> جديد يحتوي على زوج المفاتيح الذي تم إنشاؤه.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">3. إعداد الأمان</h2>
                <p className="text-lg leading-relaxed mb-4">
                    الآن، قم بتكوين ملف <code>security.yaml</code> لإعداد مصادقة JWT. تأكد من ترتيب جدران الحماية لضمان أن <code>/api/login_check</code> يمكن الوصول إليه للمصادقة:
                </p>
                <CodeBlock code={`# config/packages/security.yaml
security:
    firewalls:
        dev:
            pattern: ^/(_(profiler|wdt)|css|images|js)/
            security: false
        login:
            pattern: ^/api/login
            stateless: true
            json_login:
                check_path: /api/login_check
                username_path: email
                password_path: password
                success_handler: lexik_jwt_authentication.handler.authentication_success
                failure_handler: lexik_jwt_authentication.handler.authentication_failure
        api:
            pattern: ^/api/
            stateless: true
            provider: app_user_provider
            jwt: ~
        main:
            lazy: true
            provider: app_user_provider
            form_login:
                login_path: app_login
                check_path: app_login
                enable_csrf: true
            access_control:
                - { path: ^/api/login_check, roles: PUBLIC_ACCESS }
                - { path: ^/api, roles: ROLE_ADMIN }
`} />

                <p className="text-lg leading-relaxed mb-4">
                    تأكد من وضع جدار الحماية <code>login</code> قبل <code>api</code>، وإذا كان جدار الحماية <code>main</code> موجودًا، فيجب وضعه بعد <code>api</code>.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">4. تعريف مسار تسجيل الدخول API</h2>
                <p className="text-lg leading-relaxed mb-4">
                    تحتاج أيضًا إلى تعريف مسار تسجيل الدخول في ملف <code>routes.yaml</code> كما هو موضح أدناه:
                </p>
                <CodeBlock code={`# config/routes.yaml
api_login_check:
    path: /api/login_check`} />

                <p className="text-lg leading-relaxed mb-4">
                    يجب أن يكون المسار <code>/api/login_check</code> قابلاً للوصول للمصادقة، بينما تتطلب مسارات <code>/api</code> الأخرى <code>ROLE_ADMIN</code>.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">5. اختبار مصادقة JWT</h2>
                <p className="text-lg leading-relaxed mb-4">
                    دعنا نختبر مصادقة JWT باستخدام Postman لإنشاء أول رمز JWT. أرسل طلب POST إلى <code>/api/login_check</code> باستخدام بيانات الاعتماد لمستخدم لديه <code>ROLE_ADMIN</code>.
                </p>
                <CodeBlock code={`{
  "email": "admin@example.com",
  "password": "your_password"
}`} />

                <p className="text-lg leading-relaxed mb-4">
                    ستُرجع API حالة <code>200 OK</code> ورمزًا في الاستجابة.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">6. استخدام الرمز للمصادقة</h2>
                <p className="text-lg leading-relaxed mb-4">
                    بمجرد حصولك على الرمز، يمكنك استخدامه للمصادقة ضد نقاط API المحمية عن طريق إضافته إلى رأس Authorization كرمز Bearer.
                </p>
                <CodeBlock code={`Authorization: Bearer YOUR_JWT_TOKEN`} />

            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">7. تحديث الرموز</h2>
                <p className="text-lg leading-relaxed mb-4">
                    إذا كنت ترغب في معرفة كيفية تحديث الرموز، يمكنك الرجوع إلى الوثائق عبر الإنترنت.
                </p>
            </section>
        </div>
    );
};

export default SymfonyJWTInstallationCourse;
