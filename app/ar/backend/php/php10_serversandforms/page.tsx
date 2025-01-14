{/*TODO إعادة العمل بالكامل*/ }

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
                <pre className="bg-black text-blue-50 p-4"> <code>&lt;form action="script.php" method="GET"&gt;</code> </pre>

                <h4 className="text-lg font-medium mt-4">استرجاع البيانات</h4>
                <ul className="list-disc ml-6">
                    <li>إذا كانت البيانات مرسلة باستخدام طريقة GET، استخدم: <code>$_GET</code> أو <code>$_REQUEST</code>.</li>
                    <li>إذا كانت البيانات مرسلة باستخدام طريقة POST، استخدم: <code>$_POST</code> أو <code>$_REQUEST</code>.</li>
                    <li>يمكن استخدام <code>$_REQUEST</code> لكلتا الطريقتين.</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">على سبيل المثال، إذا كان هناك حقل يسمى <code>prenom</code>:</p>
                <pre className="bg-black text-blue-50 p-4"><code>&lt;input type="text" name="firstname" /&gt;</code></pre>
                <p className="text-lg leading-relaxed mb-4">إذا تم إرساله عبر GET، يمكن استرجاعه على النحو التالي: <code>$_GET["prenom"]</code> أو <code>$_REQUEST["prenom"]</code></p>
                <p className="text-lg leading-relaxed mb-4">إذا تم إرساله عبر POST، يمكن استرجاعه على النحو التالي: <code>$_POST["prenom"]</code> أو <code>$_REQUEST["prenom"]</code></p>

                <h4 className="text-lg font-medium mt-4">التحقق من طريقة الطلب</h4>
                <p className="text-lg leading-relaxed mb-4">للتحقق مما إذا كانت البيانات قد تم إرسالها عبر GET أو POST، استخدم:</p>
                <pre className="bg-black text-blue-50 p-4"><code>if ($_SERVER['REQUEST_METHOD'] == "GET") { }</code></pre>

                <h3 className="text-xl font-medium mt-4">معالجة البيانات على الخادم</h3>

                <h4 className="text-lg font-medium mt-4">في نموذج بسيط</h4>
                <p className="text-lg leading-relaxed mb-4">إليك مثال على نموذج HTML:</p>
                <code>&lt;form action="script.php" method="post"&gt;</code><br />
                الاسم : &lt;input type="text" name="name" size="20" maxlength="40" /&gt; &lt;br /&gt;<br />
                الاسم الأول: &lt;input type="text" name="firstname" size="20" maxlength="40" /&gt;<br />
                &lt;input type="submit" value="إرسال" /&gt;<br />
                &lt;/form&gt;
                <p className="text-lg leading-relaxed mb-4">في ملف <code>script.php</code>، نسترجع المتغيرات من النموذج مباشرة:</p>
                <CodeBlock code={`/* يسترجع الاسم واللقب تلقائيًا */
                                echo "مرحبًا" . $_REQUEST['firstname'] . " " . $_REQUEST['name'] . "&lt;br&gt;";`} />
                <p className="text-lg leading-relaxed mb-4">سيعرض هذا محتويات الحقول النصية من النموذج.</p>

                <h4 className="text-lg font-medium mt-4">تمرير حقول النموذج كمصفوفة</h4>
                <p className="text-lg leading-relaxed mb-4">إليك مثال حيث يتم إرسال قيم مربع الاختيار كمصفوفة:</p>
                <code>&lt;form action="check.php" method="post"&gt;</code><br />
                هل تستخدم الإنترنت :&lt;br /&gt;<br />
                &lt;input type="checkbox" name="days[]" value="Monday" /&gt;الإثنين&lt;br /&gt;<br />
                &lt;input type="checkbox" name="days[]" value="Tuesday" /&gt;الثلاثاء&lt;br /&gt;<br />
                &lt;input type="checkbox" name="days[]" value="Wednesday" /&gt;الأربعاء&lt;br /&gt;<br />
                &lt;input type="checkbox" name="days[]" value="Thursday" /&gt;الخميس&lt;br /&gt;<br />
                &lt;input type="checkbox" name="days[]" value="Friday" /&gt;الجمعة&lt;br /&gt;<br />
                &lt;input type="submit" name="Envoyer" value="إرسال" /&gt;<br />
                &lt;/form&gt;
                <p className="text-lg leading-relaxed mb-4">هذا يرسل مصفوفة تسمى <code>days[]</code> لجمع جميع قيم مربعات الاختيار المحددة.</p>
                <p className="text-lg leading-relaxed mb-4">في ملف <code>check.php</code>، نقرأ ونعرض المصفوفة:</p>
                <pre className="bg-black text-blue-50 p-4"><code>{`echo "أنت تتصفح الإنترنت في أيام الأسبوع غالبًا في: ";<br />
                        foreach ($_REQUEST["days"] as $jour) {<br />
        echo " $jour - ";<br />
    }`}</code></pre>

                <h4 className="text-lg font-medium mt-4">استخدام الحقول المخفية</h4>
                <p className="text-lg leading-relaxed mb-4">تتيح لك الحقول المخفية تمرير البيانات دون عرضها على الشاشة:</p>
                <code>&lt;form action="page.php" method="post"&gt;<br />
                    بريدك الإلكتروني : &lt;input type="text" name="email" /&gt;<br />
                    &lt;input type="hidden" name="secret" value="نص يجب تمريره بسرية" /&gt;<br />
                    &lt;input type="submit" value="موافق" /&gt;<br />
                    &lt;/form&gt;</code>
                <p className="text-lg leading-relaxed mb-4">بعد ملء حقل "بريدك الإلكتروني" والنقر على "موافق"، سيتم إرسال البيانات إلى <code>page.php</code> مع الحقل المخفي <code>secret</code>.</p>

                <h4 className="text-lg font-medium mt-4">تمرير المتغيرات عبر URL (طريقة GET)</h4>
                <p className="text-lg leading-relaxed mb-4">لتمرير متغير من صفحة إلى أخرى، قم بإضافة علامة استفهام (<code>?</code>) إلى URL متبوعة بالمتغير الذي سيتم تمريره:</p>
                <pre className="bg-black text-blue-50 p-4"><code>http://www.monserveur.com/page.php?prenom=bill&lang=fr</code></pre>
                <p className="text-lg leading-relaxed mb-4">هذه هي الطريقة التي تستخدم بها طريقة GET لتمرير المتغيرات.</p>

                <h4 className="text-lg font-medium mt-4">يمكن أن يكون النموذج والسكربت واحدًا</h4>
                <p className="text-lg leading-relaxed mb-4">أحيانًا يمكن دمج النموذج والسكربت في واحد. على سبيل المثال، يمكنك إرسال النموذج إلى نفس الصفحة التي تم إرساله منها:</p>
                <pre className="bg-black text-blue-50 p-4"><code>&lt;form action={`"<?php print $_SERVER['PHP_SELF'] ?>"`} method="post"&gt;<br />
                    &lt;input type="text" name="zoneDeTexte" size="40" maxlength="40"&gt;<br />
                    &lt;input type="submit" name="btnEnvoyer" value="إرسال"&gt;<br />
                    &lt;/form&gt;</code></pre>
                <p className="text-lg leading-relaxed mb-4">تحتوي المتغير <code>$_SERVER['PHP_SELF']</code> على اسم السكربت الحالي، مما يسمح لك بإرسال النموذج إلى نفسه.</p>

                <h4 className="text-lg font-medium mt-4">معالجة إجراءات متعددة للنموذج</h4>
                <p className="text-lg leading-relaxed mb-4">إذا كان النموذج الخاص بك يمكنه أداء عدة إجراءات (مثل الإنشاء، الحذف، أو التحديث)، يمكنك استخدام أزرار إرسال مختلفة لكل إجراء:</p>
                <code>&lt;input type="submit" name="delete" value="حذف"&gt;<br />
                    &lt;input type="submit" name="create" value="إنشاء"&gt;<br />
                    &lt;input type="submit" name="update" value="تحديث"&gt;</code>
                <p className="text-lg leading-relaxed mb-4">في السكربت PHP، استخدم <code>isset()</code> للتحقق من الزر الذي تم النقر عليه وتنفيذ الإجراء المقابل:</p>
                <CodeBlock code={`if (isset($_POST['update'])) { // تحديث
        echo "تحديث";
    } elseif (isset($_POST['delete'])) {
        echo"حذف";
    } elseif (isset($_POST['create'])) {
        echo "إنشاء";
    }`} />
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold">تمرين</h2>
                <p className="text-lg leading-relaxed mb-4">خذ النموذج الذي أنشأته في الجلسة السابقة (جافا سكربت). في هذا النموذج، تحتاج إلى تعديل سمة <code>action</code> في وسم <code>form</code> لتحديد عنوان سكربت PHP.</p>

                <code>&lt;form action="myscript.php"&gt;</code>

                <p className="text-lg leading-relaxed mb-4">ثم، أنشئ سكربت PHP لعرض جميع القيم المرسلة.</p>

                <p className="text-lg leading-relaxed mb-4">في PHP، يمكنك استرجاع قيمة حقل الإدخال للنموذج باستخدام:</p>
                <code>$_REQUEST["name_of_input"]</code>

                <p className="text-lg leading-relaxed mb-4">تسمح لك هذه التعليمة باسترجاع قيمة معلمة الإدخال <code>name_of_input</code>.</p>

                <h3 className="text-lg font-medium mt-4">مثال:</h3>
                <code>&lt;form action="myscript.php" method="post"&gt;</code><br />
                الاسم : &lt;input type="text" name="name" /&gt;<br />
                الاسم الأول : &lt;input type="text" name="firstname" /&gt;<br />
                &lt;input type="submit" value="إرسال" /&gt;<br />
                &lt;/form&gt;

                <p className="text-lg leading-relaxed mb-4">وفي <code>myscript.php</code>، يمكنك استرجاع وعرض قيم النموذج كما يلي:</p>
                <code>echo "الاسم : " . $_REQUEST['name'] . "&lt;br&gt;";<br />
                    echo "الاسم الأول : " . $_REQUEST['firstname'] . "&lt;br&gt;";</code>

                <p className="text-lg leading-relaxed mb-4">سيعرض هذا القيم المدخلة في الحقول <code>nom</code> و<code>prenom</code> عند إرسال النموذج.</p>
            </section>

        </div>
    );
};

export default IntroPHP;
