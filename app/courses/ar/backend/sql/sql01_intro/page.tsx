import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const SQLIntroduction: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">مقدمة إلى SQL</h1>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">لماذا تعلم SQL؟</h2>
                <div className="border-b border-gray-300 mb-6" />
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
                    <li>إدارة ومعالجة كميات كبيرة من البيانات بفعالية.</li>
                    <li>العمل مع قواعد البيانات العلائقية المستخدمة في تطوير الويب وتحليل البيانات والمزيد.</li>
                    <li>استعلام البيانات للحصول على رؤى تساعد في اتخاذ القرارات.</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">أوامر SQL الأساسية</h2>
                <div className="border-b border-gray-300 mb-6" />

                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">1. SELECT</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        يستخدم أمر <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">SELECT</code> للاستعلام عن البيانات من قاعدة البيانات.
                    </p>
                    <CodeBlock code={`SELECT * FROM employees;`} />
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">2. INSERT</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        يستخدم أمر <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">INSERT</code> لإضافة بيانات جديدة إلى الجدول.
                    </p>
                    <CodeBlock code={`INSERT INTO employees (name, position) VALUES ('John Doe', 'Developer');`} />
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">3. UPDATE</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        يستخدم أمر <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">UPDATE</code> لتعديل البيانات الموجودة.
                    </p>
                    <CodeBlock code={`UPDATE employees SET position = 'Senior Developer' WHERE name = 'John Doe';`} />
                </section >

                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">4. DELETE</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        يستخدم أمر <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">DELETE</code> لحذف البيانات من الجدول.
                    </p>
                    <CodeBlock code={`DELETE FROM employees WHERE name = 'John Doe';`} />
                </section >
            </section >

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">مزايا SQL</h2>
                <div className="border-b border-gray-300 mb-6" />
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
                    <li>SQL تُستخدم على نطاق واسع وتدعمها العديد من أنظمة قواعد البيانات مثل MySQL و PostgreSQL و SQLite.</li>
                    <li>من السهل تعلمها وقوية للاستعلامات المعقدة.</li>
                    <li>تسهل إدارة البيانات المنظمة بكفاءة.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">الخطوات التالية</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    الآن بعد أن أصبحت لديك فهم أساسي لـ SQL، حاول تجربة هذه الأوامر باستخدام قاعدة بيانات.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    ابدأ بإنشاء جدول، إدخال بعض البيانات، ثم استعلامها باستخدام <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">SELECT</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    لمزيد من التعلم المتقدم، استكشف مواضيع مثل <strong>الانضمام (joins)</strong>، <strong>الفهارس (indexes)</strong>، و <strong>المعاملات (transactions)</strong>.
                </p>
            </section>

            <footer className="mt-6 pt-4 border-t border-gray-300 text-center text-gray-500">
                <p className="text-lg leading-relaxed mb-4">تعلم ممتع!</p>
            </footer>
        </div >
    );
};

export default SQLIntroduction;
