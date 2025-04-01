import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const IntroPHP: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <section className="mb-6">
                <h2 className="text-2xl font-semibold">النماذج والمتغيرات الخاصة بالخادم</h2>

                <h3 className="text-xl font-medium mt-4">استرجاع بيانات النموذج</h3>
                <p className="text-lg leading-relaxed mb-4">في PHP، هناك دوال مفيدة لاسترجاع البيانات المرسلة من نموذج HTML.</p>

                <h4 className="text-lg font-medium mt-4">العموميات</h4>
                <p className="text-lg leading-relaxed mb-4">عند إنشاء نموذج HTML، يمكنك إرساله إلى سكربت PHP باستخدام إما GET أو POST. تحدد هذا الاختيار باستخدام السمة <code>method</code> في وسم <code>form</code>. تتيح لك سمة <code>action</code> تحديد السكربت الذي سيتم تنفيذه على الخادم.</p>
                <CodeBlock code={`<form action="script.php" method="GET">`} />

                <h4 className="text-lg font-medium mt-4">استرجاع البيانات</h4>
                <ul className="list-disc ml-6">
                    <li>إذا كانت البيانات مرسلة باستخدام طريقة GET، استخدم: <code>$_GET</code> أو <code>$_REQUEST</code>.</li>
                    <li>إذا كانت البيانات مرسلة باستخدام طريقة POST، استخدم: <code>$_POST</code> أو <code>$_REQUEST</code>.</li>
                    <li>يمكن استخدام <code>$_REQUEST</code> لكلتا الطريقتين.</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">على سبيل المثال، إذا كان هناك حقل يسمى <code>firstname</code>:</p>
                <CodeBlock code={`<input type="text" name="firstname" />`} />
                <p className="text-lg leading-relaxed mb-4">إذا تم إرساله عبر GET، يمكن استرجاعه على النحو التالي:</p>
                <CodeBlock code={`$_GET["firstname"]`} />
                <p className="text-lg leading-relaxed mb-4">إذا تم إرساله عبر POST، يمكن استرجاعه على النحو التالي:</p>
                <CodeBlock code={`$_POST["firstname"]`} />

                <h4 className="text-lg font-medium mt-4">التحقق من طريقة الطلب</h4>
                <CodeBlock code={`if ($_SERVER['REQUEST_METHOD'] == "GET") { }`} />

                <h3 className="text-xl font-medium mt-4">معالجة البيانات على الخادم</h3>

                <h4 className="text-lg font-medium mt-4">في نموذج بسيط</h4>
                <CodeBlock code={`<form action="script.php" method="post">
    الاسم : <input type="text" name="name" size="20" maxlength="40" />
    <br />
    الاسم الأول: <input type="text" name="firstname" size="20" maxlength="40" />
    <input type="submit" value="إرسال" />
</form>`} />
                <p className="text-lg leading-relaxed mb-4">في ملف <code>script.php</code>، نسترجع المتغيرات من النموذج مباشرة:</p>
                <CodeBlock code={`echo "مرحبًا " . $_REQUEST['firstname'] . " " . $_REQUEST['name'] . "<br>";`} />

                <h4 className="text-lg font-medium mt-4">تمرير حقول النموذج كمصفوفة</h4>
                <CodeBlock code={`<form action="check.php" method="post">
    هل تستخدم الإنترنت :<br />
    <input type="checkbox" name="days[]" value="Monday" />الإثنين<br />
    <input type="checkbox" name="days[]" value="Tuesday" />الثلاثاء<br />
    <input type="checkbox" name="days[]" value="Wednesday" />الأربعاء<br />
    <input type="checkbox" name="days[]" value="Thursday" />الخميس<br />
    <input type="checkbox" name="days[]" value="Friday" />الجمعة<br />
    <input type="submit" name="Envoyer" value="إرسال" />
</form>`} />
                <CodeBlock code={`echo "أنت تتصفح الإنترنت في أيام الأسبوع غالبًا في: ";
foreach ($_REQUEST["days"] as $jour) {
    echo " $jour - ";
}`} />

                <h4 className="text-lg font-medium mt-4">استخدام الحقول المخفية</h4>
                <CodeBlock code={`<form action="page.php" method="post">
    بريدك الإلكتروني : <input type="text" name="email" />
    <input type="hidden" name="secret" value="نص يجب تمريره بسرية" />
    <input type="submit" value="موافق" />
</form>`} />

                <h4 className="text-lg font-medium mt-4">تمرير المتغيرات عبر URL (طريقة GET)</h4>
                <CodeBlock code={`http://www.monserveur.com/page.php?firstname=bill&lang=fr`} />

                <h4 className="text-lg font-medium mt-4">يمكن أن يكون النموذج والسكربت واحدًا</h4>
                <CodeBlock code={`<form action="<?php print $_SERVER['PHP_SELF'] ?>" method="post">
    <input type="text" name="text" size="40" maxlength="40" />
    <input type="submit" name="submit" value="إرسال" />
</form>`} />

                <h4 className="text-lg font-medium mt-4">معالجة إجراءات متعددة للنموذج</h4>
                <CodeBlock code={`if (isset($_POST['update'])) {
    echo "تحديث";
} elseif (isset($_POST['delete'])) {
    echo "حذف";
} elseif (isset($_POST['create'])) {
    echo "إنشاء";
}`} />
            </section>
        </div>
    );
};

export default IntroPHP;
