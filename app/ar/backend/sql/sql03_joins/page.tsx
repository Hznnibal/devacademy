import { CodeBlock } from '@/components/CodeBlock/code-block';
import Link from 'next/link';
import React from 'react';

const SqlJoinsExercise: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">الروابط</h1>

            <p className="mb-6">
                الصيغة الصحيحة لكتابة الروابط هي كما يلي:
            </p>
            <CodeBlock code={`SELECT *
FROM table1
JOIN table2 ON table1_table2_join_condition
WHERE restriction_condition;`} />
            <p className="mb-6">
                هناك صيغة قديمة مكتوبة كما يلي:
            </p>
            <CodeBlock code={`SELECT *
FROM table1, table2
WHERE table1_table2_join_condition AND restriction_condition;`} />

            <p className="text-lg leading-relaxed mb-4">
                في جدول <code>EMPLOYEE</code>، يحتوي عمود <code>nodept</code> على قيم توجد أيضًا في عمود
                <code>nodept</code> في جدول <code>DEPT</code> والعكس صحيح.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                منطقيًا، كل صف في <code>EMPLOYEE</code> يتوافق مع صف في <code>DEPT</code>، وكل صف في
                <code>DEPT</code> يتوافق مع صف أو أكثر في <code>EMPLOYEE</code>.
            </p>

            <p className="text-lg leading-relaxed mb-4">
                يتم تحقيق هذه المطابقة باستخدام عامل المساواة <code>=</code> بين قيم الأعمدة في الجدولين. وهذا ما يسمى بالربط المتساوي.
            </p>

            <h4 className="text-sm ml-12 font-semibold">1. ابحث عن الأسماء الأولى للموظفين ورقم المنطقة لقسمهم.</h4>

            <p className="text-lg leading-relaxed mb-4">
                بعد <code>SELECT</code>، قد يكون من الضروري إضافة بادئة اسم العمود مع اسم الجدول. إذا كان العمود يظهر في جداول متعددة، فإنه يسبب التباسًا.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                لتبسيط كتابة الاستعلامات، يمكن إعادة تسمية الجداول المدرجة بعد <code>FROM</code> بشكل مؤقت، ويمكن استخدام الاسم المستعار لإضافة بادئة للأعمدة.
            </p>
            <h4 className="text-sm ml-12 font-semibold">2. ابحث عن رقم القسم، اسم القسم، وأسماء الموظفين مرتبة حسب رقم القسم (أعد تسمية الجداول المستخدمة).</h4>
            <h4 className="text-sm ml-12 font-semibold">3. ابحث عن أسماء الموظفين في قسم التوزيع.</h4>

            <div className="py-8 space-y-4">
                <h2 className="text-2xl font-semibold mb-4">الربط الذاتي</h2>
                <p className="mb-6">
                    القدرة على إعادة تسمية الجدول مؤقتًا في الاستعلام تتيح الروابط الذاتية، حيث يتم ربط جدول بنفسه.
                </p>
                <h4 className="text-sm ml-12 font-semibold">4. ابحث عن أسماء ورواتب الموظفين الذين يكسبون أكثر من مديرهم، وكذلك أسماء ورواتب مديريهم.</h4>

                <h2 className="text-2xl font-semibold mb-4 mt-4">الاستعلامات الفرعية</h2>
                <p className="mb-6">
                    يمكن استخدام نتيجة الاستعلام في جملة التقييد لاستعلام آخر. يُعرف هذا بالاستعلام الفرعي المتداخل.
                </p>
                <CodeBlock code={`SELECT *
FROM emp
WHERE nodep IN
    (SELECT nodept FROM dept WHERE name='...');`} />


                <h4 className="text-sm ml-12 font-semibold">5. ابحث عن الأسماء والعناوين للموظفين الذين لديهم نفس العنوان كما هو الحال مع <strong>تايلور</strong>.</h4>
                <h4 className="text-sm ml-12 font-semibold">6. ابحث عن الأسماء، الرواتب، وأرقام الأقسام للموظفين الذين يكسبون أكثر من أي موظف آخر في القسم 31، مرتبة حسب رقم القسم والراتب.</h4>
                <h4 className="text-sm ml-12 font-semibold">
                    7. ابحث عن الأسماء، الرواتب، وأرقام الأقسام للموظفين الذين يكسبون أكثر من جميع الموظفين في القسم 31، مرتبة حسب رقم القسم والراتب.
                </h4>
                <p className="text-lg my-4">
                    <strong>ملاحظة:</strong> العامل <code>IN</code> يعادل <code>= ANY</code>، بينما <code>NOT IN</code> يعادل <code>!= ALL</code>.
                </p>
                <h4 className="text-sm ml-12 font-semibold">
                    8. ابحث عن الأسماء والعناوين للموظفين في القسم 31 الذين لديهم عنوان يوجد أيضًا في القسم 32.
                </h4>
                <h4 className="text-sm ml-12 font-semibold">
                    9. ابحث عن الأسماء والعناوين للموظفين في القسم 31 الذين لديهم عنوان لا يوجد في القسم 32.
                </h4>
                <h4 className="text-sm ml-12 font-semibold">
                    10. ابحث عن الأسماء، العناوين، والرواتب للموظفين الذين لديهم نفس العنوان والراتب كما هو الحال مع <strong>يونغ</strong>.
                </h4>
            </div>

            <div className="py-8">
                <h2 className="text-2xl font-semibold mb-4">الانضمام الخارجي</h2>
                <p className="mb-6">
                    تُستخدم أوامر <strong>LEFT JOIN</strong> و <strong>RIGHT JOIN</strong> لإدراج الصفوف التي لا تحتوي على مدخلات مطابقة في الجدول الآخر.
                </p>
                <p className="mb-6">
                    على سبيل المثال، في جدول <code>DEPT</code>، هناك صفوف تحتوي على أرقام أقسام لا تتطابق مع أي صف في جدول <code>EMP</code>.
                    تُعتبر هذه الصفوف "خارجية" بالنسبة للانضمام بين الجدولين. لإدراج هذه الصفوف في النتيجة، يمكنك استخدام <strong>LEFT JOIN</strong>.
                </p>
                <p className="mb-6">
                    لكتابة <strong>LEFT JOIN</strong>، تكون الصياغة كما هي بالنسبة للانضمام العادي، لكن استبدل <code>JOIN</code> بـ <code>LEFT JOIN</code>.
                </p>
                <p className="mb-6">
                    الاختلاف هو أنه في الانضمام العادي، يتم تضمين فقط السجلات التي يمكن مطابقتها بناءً على شرط الانضمام.
                    مع <strong>LEFT JOIN</strong>، يتم أيضًا تضمين السجلات من الجدول الموجود على الجانب الأيسر من <code>LEFT JOIN</code> التي لا تتطابق مع أي سجلات في الجدول الموجود على الجانب الأيمن.
                </p>
                <p className="mb-6">
                    بالمثل، يقوم <strong>RIGHT JOIN</strong> بتضمين السجلات من الجدول الموجود على الجانب الأيمن من <code>RIGHT JOIN</code> التي لا تتطابق مع أي سجلات في الجدول الموجود على الجانب الأيسر.
                </p>
                <h3 className="text-xl font-medium mb-4">استعلام مثال</h3>
                <p className="text-lg leading-relaxed mb-4">
                    العثور على رقم القسم، اسم القسم، وأسماء الموظفين،
                    مع عرض الأقسام التي ليس لها موظفين، مرتبة حسب رقم القسم.
                </p>
                <CodeBlock code={`SELECT dept.dept_no, dept.dept_name, emp.name
FROM dept
LEFT JOIN emp ON dept.dept_no = emp.dept_no
ORDER BY dept.dept_no;`} />

                <h2 className="text-2xl font-semibold mb-4">دوال المجموعة</h2>
                <p className="mb-6">
                    يوفر SQL دوالًا تعمل على مجموعات من الصفوف بدلاً من الصفوف الفردية. تشمل الأمثلة:
                    <code>AVG</code> (المتوسط)، <code>MIN</code> (الحد الأدنى)، <code>MAX</code> (الحد الأقصى)، <code>SUM</code> (المجموع)، و <code>COUNT</code> (العدد).
                </p>
                <h3 className="text-xl font-medium mb-4">مثال: المتوسط</h3>
                <p className="mb-6">
                    لحساب متوسط الرواتب للموظفين الذين يحملون وظيفة "سكرتير":
                </p>
                <CodeBlock code={`SELECT AVG(salary)
FROM employee
WHERE title = 'Secretary';`} />
                <p className="mb-6">
                    لا يمكنك استخدام <code>SELECT</code> للعمل على كل من الصفوف الفردية والمجموعات في نفس الوقت. على سبيل المثال:
                </p>
                <pre className="bg-gray-900 text-white p-4 rounded mb-4">
                    {`SELECT last_name, AVG(salary)
FROM employee;`}
                </pre>
                <p className="mb-6">
                    سينتج عن هذا الاستعلام خطأ لأنه يجمع بين العمليات على الصفوف والعمليات على المجموعات في نفس الاستعلام.
                </p>
                <h3 className="text-xl font-medium mb-4">استخدام الاستعلامات الفرعية مع دوال المجموعة</h3>
                <p className="mb-6">
                    ومع ذلك، باستخدام الاستعلامات المتداخلة، يمكنك استرجاع اسم الموظف وراتبه الذي يعتبر الأعلى:
                </p>
                <CodeBlock code={`SELECT last_name, salary
FROM employee
WHERE salary = (SELECT MAX(salary)
FROM employee);`} />
            </div>

            <div className="py-8 space-y-4">
                <h2 className="text-2xl font-semibold mb-4">المجموعات والتجميع</h2>
                <p className="mb-6">
                    لتطبيق دالة مجموعة على مجموعة محددة من الصفوف، استخدم جملة <code>GROUP BY</code>.
                    يمكن أيضًا استخدام دوال وعبارات المجموعة مع الانضمامات.
                </p>
                <p className="mb-6">
                    أي عمود مدرج في جملة <code>SELECT</code> والذي ليس جزءًا من دالة تجميع يجب أيضًا أن يكون مدرجًا في جملة <code>GROUP BY</code>.
                </p>
                <h3 className="text-xl font-medium mb-4">استعلام مثال</h3>
                <p className="text-lg leading-relaxed mb-4">
                    لحساب متوسط الرواتب لكل قسم:
                </p>
                <CodeBlock code={`SELECT nodep, AVG(salary)
FROM employee
GROUP BY nodep;`} />

                <h4 className="text-sm ml-12 font-semibold">11. حساب عدد الموظفين لكل وظيفة.</h4>
                <h4 className="text-sm ml-12 font-semibold">12. حساب متوسط الرواتب وإجماليها حسب المنطقة.</h4>

                <h2 className="text-2xl font-semibold mb-4">جملة HAVING</h2>
                <p className="mb-6">
                    بينما يتم استخدام جملة <code>WHERE</code> لتقييد الصفوف الفردية، فإن جملة <code>HAVING</code> تُقيّد مجموعات الصفوف.
                </p>
                <p className="mb-6">
                    على سبيل المثال، للعثور على الوظائف التي تضم أكثر من 2 موظف:
                </p>
                <CodeBlock code={`SELECT title, COUNT(*)
FROM employee
GROUP BY title
HAVING COUNT(*) > 2;`} />

                <h4 className="text-sm ml-12 font-semibold">13. عرض أرقام الأقسام التي تحتوي على 3 موظفين على الأقل.</h4>
                <h4 className="text-sm ml-12 font-semibold">14. عرض الحروف الأولى من الأسماء التي تنتمي إلى 3 موظفين على الأقل.</h4>
                <h4 className="text-sm ml-12 font-semibold">15. العثور على أقصى وأدنى الرواتب بين جميع الموظفين، وحساب الفرق بينهما.</h4>
                <h4 className="text-sm ml-12 font-semibold">16. العثور على عدد الوظائف الفريدة.</h4>
                <h4 className="text-sm ml-12 font-semibold">17. لكل وظيفة، عد عدد الموظفين الحاملين لتلك الوظيفة.</h4>
                <h4 className="text-sm ml-12 font-semibold">
                    18. لكل اسم قسم، عرض اسم القسم وعدد الموظفين في ذلك القسم.
                </h4>
                <h4 className="text-sm ml-12 font-semibold">
                    19. العثور على الوظائف ومتوسط الرواتب لكل وظيفة حيث يكون متوسط الراتب أكبر من متوسط راتب "المندوبين".
                </h4>
                <h4 className="text-sm ml-12 font-semibold">
                    20. العثور على عدد الرواتب المسجلة وعدد معدلات العمولات المسجلة.
                </h4>
            </div>

            <div className="text-center mt-8">
                <Link href="sql03_joins/solutions" className="text-blue-600 underline text-lg">
                    عرض الحلول
                </Link>
            </div>

        </div >
    );
};

export default SqlJoinsExercise;
