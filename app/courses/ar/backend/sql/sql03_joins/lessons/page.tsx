import React from 'react';

const SqlJoinsPage: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">الروابط في SQL</h1>
            <p className="mb-6">
                تسمح لك الروابط في SQL بربط البيانات من جداول مختلفة باستخدام مفتاح مشترك بينها. تساعد هذه العملية في استرجاع نتائج أكثر دقة وكاملة من خلال دمج البيانات من جداول متعددة.
            </p>

            <h2 className="text-2xl font-semibold mb-4">أنواع الروابط</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-6">
                هناك عدة أنواع من الروابط في SQL، ولكننا سوف نركز على الأنواع الأربعة الأكثر شيوعًا: INNER JOIN، LEFT JOIN، RIGHT JOIN، و FULL OUTER JOIN.
            </p>

            <h3 className="text-xl font-medium mb-3">LEFT JOIN</h3>
            <p className="text-lg leading-relaxed mb-4">
                يقوم LEFT JOIN بإرجاع جميع السجلات من الجدول الأيسر (هنا، جدول <code className="px-1 py-0.5 rounded">employe</code>) والسجلات المطابقة من الجدول الأيمن (جدول <code className="px-1 py-0.5 rounded">dept</code>). إذا لم توجد سجلات مطابقة في الجدول الأيمن، يتم إرجاع قيم NULL.
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded mb-4">

                SELECT columns
                FROM table1
                LEFT JOIN table2 ON table1.column = table2.column;
            </pre>
            <p className="font-semibold mb-2">مثال:</p>
            <pre className="bg-gray-900 text-white p-4 rounded mb-4">
                SELECT e.name, d.name
                FROM employe e
                LEFT JOIN dept d ON e.nodep = d.nodept;
            </pre>
            <p className="mb-6">
                هذا الاستعلام يُرجع جميع أسماء الموظفين والأقسام التي يعملون فيها، حتى إذا لم يكن بعض الموظفين مخصصين لقسم معين (قيمة NULL للقسم).
            </p>

            <h3 className="text-xl font-medium mb-3">RIGHT JOIN</h3>
            <p className="text-lg leading-relaxed mb-4">
                يقوم RIGHT JOIN بإرجاع جميع السجلات من الجدول الأيمن (هنا، جدول <code className="px-1 py-0.5 rounded">dept</code>) والسجلات المطابقة من الجدول الأيسر (<code className="px-1 py-0.5 rounded">employe</code>). إذا لم توجد سجلات مطابقة في الجدول الأيسر، يتم إرجاع قيم NULL.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                ملاحظة: الجدول الأيمن هو الجدول الذي يتم تحديده ثانيًا في جملة FROM، بينما الجدول الأيسر هو الجدول الذي يتم تحديده أولاً في جملة FROM.
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded mb-4">

                SELECT columns
                FROM table1
                RIGHT JOIN table2 ON table1.column = table2.column;
            </pre>
            <p className="font-semibold mb-2">مثال:</p>
            <pre className="bg-gray-900 text-white p-4 rounded mb-4">
                SELECT e.name, d.name
                FROM employe e
                RIGHT JOIN dept d ON e.nodep = d.nodept;
            </pre>
            <p className="mb-6">
                هذا الاستعلام يُرجع جميع أسماء الأقسام، حتى إذا لم تكن بعض الأقسام تحتوي على موظفين (قيمة NULL للموظفين).
            </p>

            <h3 className="text-xl font-medium mb-3">FULL OUTER JOIN</h3>
            <p className="text-lg leading-relaxed mb-4">
                يقوم FULL OUTER JOIN (أو FULL JOIN) بإرجاع جميع السجلات من كلا الجدولين، مع السجلات المطابقة من كلا الجدولين. إذا لم توجد سجلات مطابقة، يتم إرجاع قيم NULL.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                ملاحظة: هذا النوع من الروابط غير متوافق مع MySQL ولكن يمكن تحقيقه باستخدام UNION بين LEFT JOIN و RIGHT JOIN.
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded mb-4">

                SELECT columns
                FROM table1
                FULL OUTER JOIN table2 ON table1.column = table2.column;
            </pre>
            <p className="font-semibold mb-2">مثال باستخدام UNION:</p>
            <pre className="bg-gray-900 text-white p-4 rounded mb-4">
                SELECT columns
                FROM table1
                LEFT OUTER JOIN table2 ON table1.column = table2.column

                UNION

                SELECT columns
                FROM table1
                RIGHT OUTER JOIN table2 ON table1.column = table2.column;
            </pre>
            <p className="font-semibold mb-2">مثال:</p>
            <pre className="bg-gray-900 text-white p-4 rounded mb-4">
                SELECT e.name, d.name
                FROM employe e
                LEFT OUTER JOIN dept d ON e.nodep = d.nodept
                UNION
                SELECT e.name, d.name
                FROM employe e
                RIGHT OUTER JOIN dept d ON e.nodep = d.nodept;
            </pre>
            <p className="mb-6">
                هذا الاستعلام يُرجع جميع أسماء الموظفين والأقسام التي يعملون فيها، بالإضافة إلى أسماء الأقسام التي لا تحتوي على موظفين (قيمة NULL للموظفين) وأسماء الموظفين الذين ليس لديهم أقسام (قيمة NULL للأقسام).
            </p>

            <h2 className="text-2xl font-semibold mb-4">أنواع أخرى من الروابط</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-6">إليك بعض الأنواع الإضافية من الروابط في SQL:</p>

            <h3 className="text-xl font-medium mb-3">CROSS JOIN</h3>
            <p className="text-lg leading-relaxed mb-4">
                CROSS JOIN هو نوع من الروابط الذي يُرجع جميع التراكيب الممكنة للصفوف من جدولين، مما يخلق ناتج كارتيسي. لا يتطلب هذا الرابط شروط ربط محددة.
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded mb-4">
                مثال:
                SELECT e.name, d.name
                FROM employe e
                CROSS JOIN dept d;
            </pre>
            <p className="mb-6">
                هذا الاستعلام يُرجع جميع التراكيب الممكنة بين أسماء الموظفين وأسماء الأقسام.
            </p>

            <h3 className="text-xl font-medium mb-3">SELF JOIN</h3>
            <p className="text-lg leading-relaxed mb-4">
                SELF JOIN هو رابط يتم على نفس الجدول باستخدام مرجع مختلف لنفس الجدول. يمكن أن يكون هذا مفيدًا لربط السجلات مع نفسها لأغراض المقارنة.
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded mb-4">
                مثال:
                SELECT employe.name, supervisor.name AS supervisor
                FROM employe
                LEFT JOIN employe AS supervisor ON employe.nosup = supervisor.noemp;
            </pre>
            <p className="mb-6">
                التفسير:
                هذا الاستعلام يُرجع أسماء الموظفين وأسماء المشرفين عليهم، إذا كانوا موجودين. يتم ربط جدول <code className="px-1 py-0.5 rounded">employe</code> بنفسه باستخدام LEFT JOIN مع مرجع <code className="px-1 py-0.5 rounded">supervisor</code> للجدول المرتبط. شرط الربط <code className="px-1 py-0.5 rounded">employe.nosup = supervisor.noemp</code> يربط عمود <code className="px-1 py-0.5 rounded">nosup</code> في الجدول المصدر مع عمود <code className="px-1 py-0.5 rounded">noemp</code> في الجدول المرتبط.
            </p>

            <h3 className="text-xl font-medium mb-3">NATURAL JOIN</h3>
            <p className="text-lg leading-relaxed mb-4">
                يتم تنفيذ NATURAL JOIN على الأعمدة التي تحمل نفس الاسم في جدولين. إذا كان عمود يحمل نفس الاسم في كلا الجدولين، يتم استخدامه كشرط ربط ضمني.
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded mb-4">
                مثال:
                SELECT e.name, d.name
                FROM employe e
                NATURAL JOIN dept d;
            </pre>
            <p className="mb-6">
                هذا الاستعلام يُرجع أسماء الموظفين وأسماء الأقسام التي يعملون فيها، باستخدام عمود <code className="px-1 py-0.5 rounded">nodep</code> كشرط ربط ضمني.
            </p>

            <p className="mb-6">
                بعض أنواع الروابط قد تكون أكثر كفاءة من غيرها من حيث وقت التنفيذ وأداء الاستعلام بشكل عام. استخدم النوع المناسب من الروابط بناءً على هيكل قاعدة البيانات ومتطلبات الاستعلام.
            </p>
            <p className="mb-6">
                عمومًا، INNER JOIN و LEFT OUTER JOIN غالبًا ما يكونان أكثر كفاءة من RIGHT OUTER JOIN و FULL OUTER JOIN لأنهما عادة ما يحتويان على شروط ربط أكثر تقييدًا، مما يحد من عدد الصفوف للمقارنة. ومع ذلك، قد يختلف هذا اعتمادًا على هيكل قاعدة البيانات والاستعلام.
            </p>
            <p className="mb-6">
                بالإضافة إلى ذلك، قد تؤثر الاستعلامات الفرعية أو الجداول المؤقتة أيضًا على أداء الاستعلام. يوصى باستخدام طرق التحسين المناسبة مثل الفهرسة، وتطبيع قاعدة البيانات، واستخدام جمل WHERE و GROUP BY بشكل مدروس لتحسين أداء الاستعلام.
            </p>
        </div>
    );
};

export default SqlJoinsPage;
