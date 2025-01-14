import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const PHP_Passwords: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">PHP - Passwords</h1>

            {/* قسم المقدمة */}
            <h2 className="text-2xl font-semibold mb-4">المقدمة</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                كلمة المرور هي أول ما نفكر فيه عندما يتعلق الأمر بالأمن السيبراني، وهي أيضًا الحلقة الأضعف في العديد من الأنظمة.
            </p>
            <p className="mb-4 leading-relaxed">
                كم من الوقت يستغرق كسر كلمة المرور الخاصة بك؟
            </p>
            <p className="mb-4 leading-relaxed">
                <a href="https://www.cnil.fr/fr/comprendre-les-grands-principes-de-la-cryptologie-et-du-chiffrement" target="_blank" rel="noopener noreferrer">تعرف على المزيد حول التشفير والتشفير</a>
            </p>

            {/* قسم تخزين كلمات المرور */}
            <h2 className="text-2xl font-semibold mb-4">تخزين كلمات المرور</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                يجب ألا يتم تخزين كلمة المرور بنص عادي. يجب تشفيرها باستخدام خوارزمية تجزئة بحيث لا يمكن قراءة قيمتها بشكل مباشر.
                على سبيل المثال، كلمة المرور "vacances" ستتحول إلى شيء مثل <code className="px-1 rounded">$2y$10$xybwIx80qUbemOsCiobdZeK4JIg2qe8BrT83vGJF1QqyJ9bnycrx6</code>.
            </p>
            <p className="mb-4 leading-relaxed">
                بينما كانت خوارزميات MD5 أو SHA1 تُستخدم في السابق، فقد تم اختراق هذه الخوارزميات. في الوقت الحاضر، تعتبر دوال PHP مثل <code className="px-1 rounded">password_hash()</code> و <code className="px-1 rounded">password_verify()</code> هي الطرق الموصى بها للتعامل مع تخزين كلمات المرور بشكل آمن.
            </p>

            {/* قسم دالة password_hash */}
            <h2 className="text-2xl font-semibold mb-4">دالة password_hash()</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                تتيح لك دالة <code className="px-1 rounded">password_hash()</code> استخدام خوارزميات التجزئة الآمنة مثل bcrypt في PHP لإنشاء تجزئة لكلمة المرور.
                الصيغة هي:
            </p>

            <CodeBlock code={`$password_hash = password_hash("vacances", PASSWORD_DEFAULT);
echo $password_hash;`} language="php" />

            <p className="mb-4 leading-relaxed">
                سيؤدي ذلك إلى إخراج سلسلة مثل <code className="px-1 rounded">$2y$10$xybwIx80qUbemOsCiobdZeK4JIg2qe8BrT83vGJF1QqyJ9bnycrx6</code>، وهي كلمة المرور المجزأة التي يجب تخزينها في قاعدة البيانات.
            </p>

            {/* قسم دالة password_verify */}
            <h2 className="text-2xl font-semibold mb-4">دالة password_verify()</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                للتحقق مما إذا كانت كلمة المرور المدخلة من قبل المستخدم تطابق التجزئة المخزنة، استخدم دالة <code className="px-1 rounded">password_verify()</code>.
                الصيغة هي:
            </p>

            <CodeBlock code={`if (password_verify($entered_password, $stored_hash)) {
    echo "كلمة المرور صحيحة!";
} else {
    echo "كلمة المرور غير صحيحة.";
}`} language="php" />

            {/* قسم التوصيات الرسمية */}
            <h2 className="text-2xl font-semibold mb-4">التوصيات الرسمية</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                تقدم الوكالة الوطنية لأمن نظم المعلومات (ANSSI) و CNIL توصيات رسمية للتعامل مع كلمات المرور بشكل آمن:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li><a href="https://www.ssi.gouv.fr/guide/mot-de-passe" target="_blank" rel="noopener noreferrer">دليل ANSSI لكلمات المرور</a></li>
                <li><a href="https://www.cnil.fr/fr/les-conseils-de-la-cnil-pour-un-bon-mot-de-passe" target="_blank" rel="noopener noreferrer">توصيات CNIL لكلمات المرور</a></li>
            </ul>

            {/* قسم المواصفات الوظيفية */}
            <h2 className="text-2xl font-semibold mb-4">المواصفات الوظيفية</h2>

            <h3 className="text-xl font-semibold mb-4">إنشاء الحساب</h3>
            <p className="mb-4 leading-relaxed">
                يملأ المستخدم نموذجًا يحتوي على معرّف فريد مثل عنوان البريد الإلكتروني. يجب أن يكون هذا المعرّف فريدًا تمامًا في قاعدة البيانات.
                ثم يدخل المستخدم كلمة المرور.
                إذا كان يُسمح للمستخدم باختيار كلمة المرور الخاصة به، يجب أن يؤكدها عن طريق إدخالها مرتين. يجب التحقق من كلمة المرور (فحص تطابق الإدخالات، القوة، إلخ) قبل تجزئتها.
            </p>
            <p className="mb-4 leading-relaxed">
                بمجرد التحقق من كلمة المرور، يجب تجزئتها باستخدام <code className="px-1 rounded">password_hash()</code>، ويجب تخزين كلمة المرور المجزأة في قاعدة البيانات. لا تخزن كلمات المرور بنص عادي أبدًا، ولا تخزنها في الجلسة، ولا ترسل رسائل تأكيد تحتوي على كلمة المرور بنص عادي.
            </p>

            <h3 className="text-xl font-semibold mb-4">المصادقة</h3>
            <p className="mb-4 leading-relaxed">
                أثناء تسجيل الدخول، يدخل المستخدم بريده الإلكتروني وكلمة مروره. حدّ من محاولات تسجيل الدخول إلى 3 (وفقًا للتوصيات الرسمية)، وحظر المستخدمين الذين يتجاوزون هذا العدد (قم بتخزين هذا العدد في قاعدة البيانات).
            </p>
            <p className="mb-4 leading-relaxed">
                بمجرد التحقق من المستخدم، قم بتخزين بعض المعلومات (البريد الإلكتروني، الاسم الأول، الاسم الأخير) في الجلسة ولكن لا تخزن كلمة المرور.
            </p>

            <h3 className="text-xl font-semibold mb-4">إعادة تعيين كلمة المرور</h3>
            <p className="mb-4 leading-relaxed">
                إذا نسى المستخدم كلمة مروره، قدم له طريقة لإعادة تعيينها. لا ترسل كلمة المرور الحالية في بريد إلكتروني حيث أنها مخزنة كتجزئة.
                لاسترداد كلمة المرور:</p>
            <ul className="list-disc pl-6">
                <li>قدم رابط "نسيت كلمة المرور" في صفحة تسجيل الدخول.</li>
                <li>اطلب معرّف المستخدم (عنوان البريد الإلكتروني) في نموذج استعادة كلمة المرور.</li>
                <li>إذا تم العثور على المستخدم في قاعدة البيانات، أرسل له بريدًا إلكترونيًا يتضمن رابطًا إلى نموذج حيث يمكنه إدخال كلمة مرور جديدة.</li>
                <li>لا ترسل أبدًا بريدًا إلكترونيًا يحتوي على كلمة المرور الجديدة.</li>
            </ul>


            {/* التمرين 1: نموذج المصادقة */}
            <h2 className="text-2xl font-semibold mb-4">التمرين 1: نموذج المصادقة</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                في هذا التمرين، سنقوم بإنشاء نموذج مصادقة بسيط باستخدام الجلسات.
            </p>
            <h3 className="text-xl font-semibold mb-4">1. إنشاء نموذج تسجيل الدخول</h3>
            <p className="mb-4 leading-relaxed">
                قم بإنشاء ملف يسمى <code className="px-1 rounded">login_form.php</code> يحتوي على حقلين: تسجيل الدخول (والذي يمكن أن يكون عنوان البريد الإلكتروني) وكلمة المرور. يجب أن يقوم هذا النموذج بنشر البيانات إلى برنامج نصي يسمى <code className="px-1 rounded">login_script.php</code>.
            </p>

            <CodeBlock code={`<!-- login_form.php -->
<form action="login_script.php" method="POST">
    <label for="login">تسجيل الدخول (البريد الإلكتروني):</label>
    <input type="email" name="login" required>
    <label for="password">كلمة المرور:</label>
    <input type="password" name="password" required>
    <button type="submit">تسجيل الدخول</button>
</form>`} language="php" />


            <h3 className="text-xl font-semibold mb-4">2. معالجة البيانات باستخدام PHP</h3>
            <p className="mb-4 leading-relaxed">
                في <code className="px-1 rounded">login_script.php</code>، قم بمعالجة بيانات النموذج كما يلي:
                إذا كانت بيانات تسجيل الدخول وكلمة المرور صحيحة (على سبيل المثال، تسجيل الدخول = 'admin' وكلمة المرور = 'admin')، قم بتهيئة متغير الجلسة <code className="px-1 rounded">auth</code> بالقيمة <code className="px-1 rounded">ok</code>.
                وإلا، قم بتدمير متغير الجلسة <code className="px-1 rounded">auth</code>.
            </p>

            <CodeBlock code={`<!-- login_script.php -->
<?php
session_start();

if ($_POST['login'] == 'admin' && $_POST['password'] == 'admin') {
    $_SESSION['auth'] = 'ok';
    header('Location: protected_page.php');
} else {
    unset($_SESSION['auth']);
    header('Location: login_form.php');
}
?>`} language="php" />

            <h3 className="text-xl font-semibold mb-4">3. حماية الصفحة</h3>
            <p className="mb-4 leading-relaxed">
                قم بإنشاء صفحة محمية (<code className="px-1 rounded">protected_page.php</code>) يمكن الوصول إليها فقط إذا كانت الجلسة مهيئة. إذا كان متغير الجلسة <code className="px-1 rounded">auth</code> موجودًا ويحتوي على القيمة <code className="px-1 rounded">ok</code>، قم بمنح الوصول. وإلا، قم بإعادة توجيه المستخدم إلى صفحة تسجيل الدخول.
            </p>

            <CodeBlock code={`<!-- protected_page.php -->
<?php
session_start();

if (!isset($_SESSION['auth']) || $_SESSION['auth'] != 'ok') {
    header('Location: login_form.php');
    exit();
}
?>
<h1>مرحبًا بك في الصفحة المحمية!</h1>`} language="php" />

            {/* التمرين 2: معالجة كلمات المرور */}
            <h2 className="text-2xl font-semibold mb-4">التمرين 2: معالجة كلمات المرور</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                في هذا التمرين، سنقوم بتوسيع نظام المصادقة السابق للتعامل مع كلمات المرور بشكل آمن.
            </p>
            <h3 className="text-xl font-semibold mb-4">1. إنشاء جدول المستخدمين</h3>
            <p className="mb-4 leading-relaxed">
                قم بإنشاء جدول يسمى <code className="px-1 rounded">user</code> لتخزين الاسم الأول للمستخدم، والاسم الأخير، وعنوان البريد الإلكتروني، وكلمة المرور. استخدم هذا الجدول لتخزين معلومات المستخدم.
            </p>

            <CodeBlock code={`-- SQL لإنشاء جدول المستخدمين
CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);`} language="php" />

            <h3 className="text-xl font-semibold mb-4">2. إنشاء نموذج التسجيل</h3>
            <p className="mb-4 leading-relaxed">
                قم بإنشاء نموذج تسجيل لجمع وحفظ معلومات المستخدم. يجب أن يتحقق هذا النموذج من صحة البيانات (على سبيل المثال، التحقق من تنسيق البريد الإلكتروني، وقوة كلمة المرور) قبل تخزينها في قاعدة البيانات.
            </p>

            <CodeBlock code={`<!-- registration_form.php -->
<form action="registration_script.php" method="POST">
    <label for="first_name">الاسم الأول:</label>
    <input type="text" name="first_name" required>
    <label for="last_name">الاسم الأخير:</label>
    <input type="text" name="last_name" required>
    <label for="email">البريد الإلكتروني:</label>
    <input type="email" name="email" required>
    <label for="password">كلمة المرور:</label>
    <input type="password" name="password" required>
    <button type="submit">التسجيل</button>
</form>`} language="php" />

            <h3 className="text-xl font-semibold mb-4">3. تعديل برنامج المصادقة</h3>
            <p className="mb-4 leading-relaxed">
                قم بتعديل <code className="px-1 rounded">login_script.php</code> للتحقق من بيانات تسجيل الدخول وكلمة المرور ضد قاعدة البيانات. استخدم <code className="px-1 rounded">password_hash()</code> لتجزئة كلمة المرور أثناء التسجيل و <code className="px-1 rounded">password_verify()</code> للتحقق من كلمة المرور أثناء تسجيل الدخول.
            </p>

            <CodeBlock code={`<!-- registration_script.php -->
<?php
// الاتصال بقاعدة البيانات
$hashed_password = password_hash($_POST['password'], PASSWORD_DEFAULT);

$sql = "INSERT INTO user (first_name, last_name, email, password) VALUES (?, ?, ?, ?)";
$stmt = $pdo->prepare($sql);
$stmt->execute([$_POST['first_name'], $_POST['last_name'], $_POST['email'], $hashed_password]);

header('Location: login_form.php');
?>`} language="php" />

            <CodeBlock code={`<!-- login_script.php -->
<?php
session_start();
include 'database_connection.php';

$stmt = $pdo->prepare('SELECT * FROM user WHERE email = ?');
$stmt->execute([$_POST['login']]);
$user = $stmt->fetch();

if ($user && password_verify($_POST['password'], $user['password'])) {
    $_SESSION['auth'] = 'ok';
    header('Location: protected_page.php');
} else {
    unset($_SESSION['auth']);
    header('Location: login_form.php');
}
?>`} language="php" />

        </div >
    );
};

export default PHP_Passwords;
