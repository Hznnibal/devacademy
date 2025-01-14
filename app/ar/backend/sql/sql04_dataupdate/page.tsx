import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const DmlDataUpdatePage: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">DML: تحديث البيانات</h1>
            <p className="mb-6">
                لتعديل البيانات في قاعدة البيانات، يمكن للمستخدم استخدام ثلاث أوامر SQL متاحة له:
                <code className="block  px-2 py-1 rounded mt-2">INSERT, UPDATE, DELETE</code>
            </p>

            <h2 className="text-2xl font-semibold mb-4">INSERT</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-6">
                يتم استخدام أمر <strong>INSERT</strong> بالشكل التالي:
            </p>
            <CodeBlock code={`INSERT INTO table_name (column_names)
VALUES (value_list);`} />
            <h3 className="text-xl font-medium mb-3">أمثلة:</h3>
            <p className="text-lg leading-relaxed mb-4">
                إدراج موظف برقم تعريف <code>00140</code>، اسم عائلة <code>REEVES</code>، اسم أول <code>TEDDY</code>، في القسم <code>A00</code>، براتب <code>2100</code>:
            </p>
            <CodeBlock code={`INSERT INTO employee (emp_id, last_name, first_name, dept, salary)
VALUES (00140, 'REEVES', 'TEDDY', 'A00', 2100);`} />
            <p className="mb-6">
                إذا لم يتم تحديد عمود الراتب، فسيأخذ قيمة <code>NULL</code> ما لم يكن هناك قيود أخرى:
            </p>
            <CodeBlock code={`INSERT INTO employee (emp_id, last_name, first_name, dept)
VALUES (00140, 'REEVES', 'TEDDY', 'A00');`} />
            <p className="mb-6">
                في هذه الحالة، سيكون للعمود <code>salary</code> قيمة <code>NULL</code>.
            </p>
            <h3 className="text-xl font-medium mb-3">إدخال عدة صفوف</h3>
            <p className="mb-6">
                يمكن إدخال عدة صفوف في أمر واحد كما هو موضح أدناه:
            </p>
            <CodeBlock code={`INSERT INTO employee (emp_id, last_name, first_name, dept, salary)
VALUES (00140, 'REEVES', 'HUBERT', 'A00', 2100),
(00150, 'SMITH', 'JOHN', 'B00', 1800);`} />

            <h3 className="text-xl font-medium mb-3">الأعمدة ذات خاصية AUTO_INCREMENT</h3>
            <p className="mb-6">
                يمكن تضمين عمود يحتوي على خاصية <code>AUTO_INCREMENT</code> في قائمة الأعمدة. إذا لم يتم تحديد قيمته، فسيقوم النظام بتوليد قيمة جديدة تلقائيًا.
            </p>

            <h2 className="text-2xl font-semibold mb-4">UPDATE</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-6">
                يتم استخدام أمر <strong>UPDATE</strong> لتعديل الصفوف الموجودة في جدول:
            </p>
            <CodeBlock code={`UPDATE table_name
SET column_1 = value_1, column_2 = value_2
WHERE condition;`} />
            <p className="mb-6">
                - <strong>SET</strong> يحدد الأعمدة والقيم أو التعبيرات الجديدة لها.
                - <strong>WHERE</strong> هو شرط اختياري لتحديد الصفوف التي سيتم تحديثها.
            </p>
            <p className="mb-6">
                إذا تم حذف جملة <code>WHERE</code>، سيتم تحديث الجدول بأكمله.
            </p>

            <h3 className="text-xl font-medium mb-3">أمثلة:</h3>
            <p className="text-lg leading-relaxed mb-4">
                زيادة راتب جميع الموظفين بنسبة 20%:
            </p>
            <CodeBlock code={`UPDATE employee
SET salary = salary * 1.2;`} />
            <p className="mb-6">
                زيادة راتب الموظف ذو الرقم <code>00040</code> بنسبة 20%:
            </p>
            <CodeBlock code={`UPDATE employee
SET salary = salary * 1.2
WHERE emp_id = 00040;`} />
            <p className="mb-6">
                زيادة راتب الموظف ذو الرقم <code>00040</code> بنسبة 20% وتغيير قسمه إلى <code>A40</code>:
            </p>
            <CodeBlock code={`UPDATE employee
SET salary = salary * 1.2, dept = 'A40'
WHERE emp_id = 00040;`} />

            <h2 className="text-2xl font-semibold mb-4">DELETE</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-6">
                يتم استخدام أمر <strong>DELETE</strong> لإزالة صف أو أكثر من جدول:
            </p>
            <CodeBlock code={`DELETE
FROM table_name
WHERE condition;`} />
            <p className="mb-6">
                - <strong>FROM</strong> يحدد الجدول الذي سيتم حذف الصفوف منه. <br />
                - <strong>WHERE</strong> يحدد الشرط لاختيار الصفوف للحذف (اختياري).
            </p>
            <p className="mb-6">
                إذا تم حذف جملة <code>WHERE</code>، سيتم حذف جميع الصفوف.
            </p>

            <h3 className="text-xl font-medium mb-3">أمثلة:</h3>
            <p className="text-lg leading-relaxed mb-4">
                حذف جميع الموظفين من جدول <code>employee</code>:
            </p>
            <CodeBlock code={`DELETE FROM employee;`} />
            <p className="mb-6">
                حذف الموظفين من القسم <code>E21</code>:
            </p>
            <CodeBlock code={`DELETE FROM employee
WHERE dept = 'E21';`} />

            <h3 className="mb-6 font-bold text-xl">
                راجع قاعدة بياناتك وقم بأداء التمارين التالية:
            </h3>

            <h4 className="text-lg font-bold mt-4 mb-2">لأمر INSERT:</h4>
            <ul className="text-base ml-12 font-semibold">
                <li>1. إضافة ثلاثة موظفين إلى قاعدة البيانات مع البيانات التي تختارها.</li>
                <li>2. إضافة قسم جديد.</li>
                <li>3. استخدام استعلام SELECT للتحقق من الإضافة.</li>
            </ul>

            <h4 className="text-lg font-bold mt-4 mb-2">لأمر UPDATE:</h4>
            <ul className="text-base ml-12 font-semibold">
                <li>4. زيادة راتب الموظف رقم 17 بنسبة 10%.</li>
                <li>5. تغيير اسم القسم رقم 45 إلى "اللوجستيات".</li>
            </ul>

            <h4 className="text-lg font-bold mt-4 mb-2">لأمر DELETE:</h4>
            <ul className="text-base ml-12 font-semibold">
                <li>6. حذف آخر موظف قمت بإضافته سابقًا.</li>
            </ul>
        </div >
    );
};

export default DmlDataUpdatePage;
