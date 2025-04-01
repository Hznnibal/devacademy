import { CodeBlock } from "@/components/CodeBlock/code-block";

export default function Variables() {
    return (
        <div className="px-5 py-8 font-sans">

            <h1 className="text-3xl font-bold text-center mb-10">المتغيرات</h1>

            {/* إعلان المتغيرات */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">إعلان المتغيرات</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    المتغيرات تخزن البيانات التي يمكن تعديلها أثناء تنفيذ البرنامج. يجب أن يبدأ اسم المتغير بحرف (أبجدي ASCII) أو بعلامة <code>_</code>، ويمكن أن يحتوي على حروف وأرقام والعلامات <code>_</code> و <code>$</code> (دون وجود مسافات).
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    <strong>جافا سكريبت حساسة لحالة الأحرف</strong>، مما يعني أن <code>myVar</code> و <code>MyVar</code> يُعتبران متغيرين مختلفين.
                </p>

                <h3 className="text-xl font-semibold">مثال</h3>
                <CodeBlock code={`var num = 1;
var name = "John";

alert(num);
alert(name);`} />
                <p className="text-lg leading-relaxed mb-4">اختبر هذا المثال في وحدة تحكم JavaScript الخاصة بك.</p>

                <h3 className="text-xl font-semibold">الثوابت</h3>
                <p className="text-lg leading-relaxed mb-4">
                    هناك طريقة لإعلان المتغيرات التي لا يمكن تعديل قيمتها. تسمى هذه المتغيرات <code>const</code> ويتم الإعلان عنها باستخدام الكلمة المفتاحية <code>const</code>.
                </p>
                <CodeBlock code={`const age = 37;
age = 27;  // هذا سيؤدي إلى حدوث خطأ

alert(age);`} />
                <p className="text-lg leading-relaxed mb-4">اختبر هذا المثال وتحقق من الرسائل في وحدة التحكم.</p>
            </section >

            {/* أنواع البيانات */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">أنواع البيانات</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    تستخدم جافا سكريبت 5 أنواع من البيانات:
                </p>
                <ul className="list-decimal list-inside text-lg space-y-2">
                    <li><strong>عدد:</strong> أي عدد صحيح أو عشري مثل 22 أو 3.1416.</li>
                    <li><strong>سلسلة نصية:</strong> أي تسلسل من الأحرف محاط بعلامات اقتباس مثل "نص" أو 'نص'.</li>
                    <li><strong>منطقي:</strong> القيم <code>true</code> أو <code>false</code>.</li>
                    <li><strong>كائن:</strong> أي مرجع إلى كائن جافا سكريبت أصلي (مثل: Array، Date، String) أو كائن DOM.</li>
                    <li><strong>null:</strong> كلمة مفتاحية خاصة تمثل غياب القيمة.</li>
                    <li><strong>غير معرف:</strong> كلمة مفتاحية خاصة يتم إرجاعها عندما يتم الإعلان عن متغير ولكن لم يتم تعيين قيمة له.</li>
                </ul>

                <h3 className="text-xl font-semibold">أمثلة</h3>
                <CodeBlock code={`var myVar;              // نوع myVar هو undefined
myVar = 324;            // النوع عدد
myVar = "Hello";        // النوع سلسلة نصية
myVar = true;           // النوع منطقي
myVar = new Array();    // النوع كائن`} />
                <p className="text-lg leading-relaxed mb-4">اختبر هذه الأمثلة في وحدة التحكم الخاصة بك.</p>

                <h3 className="text-xl font-semibold">التحقق من نوع المتغير</h3>
                <p className="text-lg leading-relaxed mb-4">
                    يمكن أن يتغير نوع المتغير بعد التعيين. يمكنك التحقق من النوع الحالي للمتغير باستخدام عامل <code>typeof</code>:
                </p>
                <CodeBlock code={`console.log(typeof 42);           // يعرض "number"
console.log(typeof 'text');       // يعرض "string"
console.log(typeof true);         // يعرض "boolean"

var myVar;
console.log(typeof myVar);        // يعرض "undefined"`} />
                <p className="text-lg leading-relaxed mb-4">اختبر هذا المثال في وحدة التحكم الخاصة بك.</p>
            </section >

        </div >
    );
}
