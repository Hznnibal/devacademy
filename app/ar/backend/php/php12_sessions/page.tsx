import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const PHP_Sessions: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">مقدمة إلى الجلسات في PHP</h1>

            {/* قسم التعريف */}
            <h2 className="text-2xl font-semibold mb-4">التعريف</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                <strong>الجلسة</strong> هي آلية تسمح لك بتخزين البيانات عبر عدة صفحات ويب.
                على سبيل المثال، يمكن استخدام الجلسات لتخزين معلومات تتعلق بالمصادقة، محتويات سلة التسوق، إلخ.
            </p>

            {/* قسم التشغيل */}
            <h2 className="text-2xl font-semibold mb-4">التشغيل</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                لتخزين المعلومات في الجلسة، تستخدم PHP المتغير <code className="px-1 rounded">$_SESSION</code>.
                إنه متغير فائق (مثل <code className="px-1 rounded">$_GET</code> أو <code className="px-1 rounded">$_POST</code>) يتصرف مثل مصفوفة PHP مع أزواج من المفاتيح والقيم.
            </p>
            <p className="mb-4 leading-relaxed">
                ومع ذلك، قبل استخدام هذا المتغير، من الضروري استدعاء دالة <code className="px-1 rounded">session_start()</code> في بداية كل ملف PHP يتعامل مع هذا المتغير وقبل إرسال أي طلبات HTTP، أي قبل أي <code className="px-1 rounded">echo</code> أو أي إخراج آخر.
            </p>
            <p className="mb-4 leading-relaxed">
                بعد ذلك، نستخدم <code className="px-1 rounded">$_SESSION</code> مع اسم المتغير في الأقواس وتعيين قيمة:
            </p>

            <CodeBlock code={`session_start();
$_SESSION["login"] = "webmaster";
echo $_SESSION["login"];`} />

            <p className="mb-4 leading-relaxed">
                في هذه النقطة، تحتوي الجلسة على متغير <code className="px-1 rounded">login</code> بقيمة "webmaster".
                على صفحة أخرى، يمكننا التحقق مما إذا كانت الجلسة موجودة ومنح أو رفض الوصول إلى المحتوى أو الميزات.
            </p>

            {/* قسم ID الجلسة */}
            <h2 className="text-2xl font-semibold mb-4">معرف الجلسة</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                تعتمد آلية الجلسة على معرف فريد: <strong>معرف الجلسة</strong>. يتم توفيره من قبل PHP بشكل افتراضي.
                إنه سلسلة أبجدية رقمية، مثل: <code className="px-1 rounded">jr48dn2gqsliubpq02u0cbchk5</code>.
            </p>
            <p className="mb-4 leading-relaxed">
                يمكن استخدام دالة <code className="px-1 rounded">session_id()</code> لعرض هذا المعرف:
            </p>

            <CodeBlock code={`session_start();
$_SESSION["login"] = "webmaster";
$_SESSION["role"] = "admin";
echo "session ID: " . session_id();`} />

            <p className="mb-4 leading-relaxed">
                تعيد دالة <code className="px-1 rounded">session_id()</code> سلسلة فارغة إذا لم تكن هناك جلسة نشطة.
            </p>

            {/* قسم الآلية */}
            <h2 className="text-2xl font-semibold mb-4">الآلية</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                عند إنشاء الجلسة، يتم إنشاء معرف فريد يتم تخزينه على جانب العميل (في ملف تعريف الارتباط على جهاز المستخدم) وعلى جانب الخادم.
                أثناء التبادلات، عندما يستقبل الخادم ملف تعريف الارتباط مع معرف الجلسة، فإنه يعيد بناء المتغيرات الخاصة بالجلسة (مصفوفة <code className="px-1 rounded">$_SESSION</code>).
            </p>

            {/* قسم اختبار الجلسة */}
            <h2 className="text-2xl font-semibold mb-4">اختبار الجلسة</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                بمجرد تهيئة الجلسة (على سبيل المثال، عندما يسجل المستخدم الدخول باستخدام اسم المستخدم / كلمة المرور)، يجب عليك التحقق مما إذا كان المستخدم مخولًا للوصول إلى الصفحة.
                يمكن القيام بذلك باستخدام شروط بسيطة:
            </p>

            <CodeBlock code={`session_start();
if ($_SESSION["login"]) {
    echo "أنت مخول لعرض هذه الصفحة.";
} else {
    echo "تتطلب هذه الصفحة التعريف.";
}`} />

            <p className="mb-4 leading-relaxed">
                بدلاً من ذلك، يمكنك التحقق مما إذا كان المتغير الخاص بالجلسة مضبوطًا، وإعادة توجيه المستخدم إذا لزم الأمر:
            </p>

            <CodeBlock code={`session_start();
if (!isset($_SESSION["login"])) {
    header("Location:index.php");
    exit;
}
// باقي الكود (PHP/HTML)
echo "مرحبًا " . $_SESSION["login"] . "<br>";`} />

            <p className="mb-4 leading-relaxed">
                إذا لم يكن المتغير الخاص بالجلسة <code className="px-1 rounded">login</code> مضبوطًا، فإننا نعيد توجيه المستخدم إلى <code className="px-1 rounded">index.php</code>. خلافًا لذلك، ستعرض الصفحة بشكل طبيعي.
            </p>

            {/* قسم تدمير الجلسة */}
            <h2 className="text-2xl font-semibold mb-4">تدمير الجلسة</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                لإزالة المعلومات من الجلسة، استخدم دالة <code className="px-1 rounded">unset()</code>، مع تمرير متغير الجلسة الذي سيتم تدميره.
                وهذا يُستخدم عادةً في رابط لتسجيل الخروج من الموقع:
            </p>

            <CodeBlock code={`unset($_SESSION["login"]);
unset($_SESSION["role"]);`} />

            <p className="mb-4 leading-relaxed">
                ومع ذلك، فإن هذا لا يدمر الجلسة تمامًا وبشكل صحيح. لتدمير الجلسة بالكامل، بما في ذلك مسح ملفات تعريف الارتباط، استخدم الكود التالي:
            </p>

            <CodeBlock code={`unset($_SESSION["login"]);
unset($_SESSION["role"]);

if (ini_get("session.use_cookies")) {
    setcookie(session_name(), '', time()-42000);
}

session_destroy();`} />

            <p className="mb-4 leading-relaxed">
                الشرح:
            </p>
            <ul className="list-disc list-inside pl-6">
                <li>الأسطر 1-2: قم بإلغاء تعيين متغيرات الجلسة.</li>
                <li>الأسطر 4-7: دالة <code className="px-1 rounded">setcookie()</code> تجبر انتهاء صلاحية ملف تعريف الارتباط.</li>
                <li>وأخيرًا، دالة <code className="px-1 rounded">session_destroy()</code> تدمر باقي الجلسة.</li>
            </ul>

            {/* قسم التكوين المتقدم والأمان */}
            <h2 className="text-2xl font-semibold mb-4">التكوين المتقدم والأمان</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                يسمح PHP بتكوين الجلسات بدقة (من خلال ملف <code className="px-1 rounded">php.ini</code>)، مثل حجم البيانات، والمدة، ووضع التخزين، والأمان.
                الأمان أمر بالغ الأهمية لمنع اختطاف الجلسة (سرقة معرف الجلسة من ملف تعريف الارتباط). من الممارسات الجيدة استخدام دالة <code className="px-1 rounded">session_regenerate_id()</code> كلما تم تعديل بيانات الجلسة.
            </p>
        </div >
    );
};

export default PHP_Sessions;
