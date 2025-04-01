import { CodeBlock } from "@/components/CodeBlock/code-block";

export default function ProgramStructure() {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-bold text-center mb-10">هيكل البرنامج</h1>

            {/* مقدمة في CSS */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">الأهداف</h2>
                <div className="border-b border-gray-300 mb-6" />
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>فهم أساسيات البرمجة وإنشاء أول برنامج لك.</li>
                    <li>تعلم قواعد وعادات الكتابة والعرض في البرنامج.</li>
                    <li>إضافة تعليقات إلى برامجك لتوضيح الغرض منها.</li>
                </ul>
            </section>

            {/* النهج الأول */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">النهج الأول</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    إذا كنت تقرأ هذا، فأنت قد تعرضت بالفعل لـ HTML و CSS وعملت مع إطار العمل Bootstrap.
                    الآن حان الوقت لإضافة سلوك ديناميكي لصفحاتك باستخدام JavaScript.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    هناك عدة طرق لإدراج شفرة JavaScript في صفحة الويب الخاصة بك:
                </p>
                <ol className="list-decimal list-inside text-lg space-y-2">
                    <li>مباشرة في صفحة HTML:</li>
                </ol>
                <CodeBlock code={`<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
    </head>

    <body>
        Hello !!!
        <script>
            alert("my first script !");
        </script>
    </body>
</html>`} />

                <ol className="list-decimal list-inside text-lg space-y-2">
                    <li>أو في ملف خارجي (كلا من index.html و script.js في نفس المجلد):</li>
                </ol>
                <CodeBlock code={`<!-- fichier index.html -->
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
    </head>

    <body>
        Hello !!!
        <script src="script.js"></script>
    </body>
</html>

// fichier script.js
alert("my first script !");`} />
            </section >

            {/* عرض JavaScript */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">عرض JavaScript: التعليقات</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    التعليقات في البرنامج تخدم الأغراض التالية:
                </p>
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>توفير رؤى للمطورين حول كيفية عمل البرنامج.</li>
                    <li>تعطيل مؤقت لكتل من الشيفرة.</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    الشيفرة التي يتم تعليقها لا تنفذ.
                </p>

                <h3 className="text-xl font-semibold">تعليقات السطر الواحد</h3>
                <CodeBlock code={`// يعرض رسالة مهمة للغاية!!!
alert("Why 42 ?");`} />

                <h3 className="text-xl font-semibold">تعليقات متعددة الأسطر</h3>
                <CodeBlock code={`/* 
    تعليق
    على
    عدة
    أسطر
*/
alert("I got it");`} />
            </section >

        </div >
    );
}
