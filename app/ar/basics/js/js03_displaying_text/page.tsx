import { CodeBlock } from "@/components/CodeBlock/code-block";

export default function DisplayingText() {
    return (
        <div className="px-5 py-8 font-sans">

            <h1 className="text-3xl font-bold text-center mb-10">عرض النصوص</h1>

            {/* مربعات الحوار */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">مربعات الحوار</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يمكن لجافا سكريبت عرض مربعات الحوار، وهي مفيدة للأغراض التعليمية للمبتدئين، ولكن يجب تجنب استخدامها في المواقع الإنتاجية.
                </p>

                {/* طريقة alert() */}
                <h3 className="text-xl font-semibold">طريقة alert()</h3>
                <p className="text-lg leading-relaxed mb-4">
                    طريقة <code>alert()</code> تعرض مربع حوار يحتوي على البيانات المرسلة كمعامل. سيقوم هذا المربع بحظر البرنامج الحالي حتى ينقر المستخدم على "موافق".
                </p>
                <CodeBlock code={`var name = "Jeff Lebowski";
window.alert("Hello");
window.alert(name);`} />
                <p className="text-lg leading-relaxed mb-4">
                    لعرض النصوص عبر عدة أسطر، يمكن إدراج الحرف <code>\n</code> في البيانات التي سيتم عرضها.
                </p>

                {/* طريقة prompt() */}
                <h3 className="text-xl font-semibold">طريقة prompt()</h3>
                <p className="text-lg leading-relaxed mb-4">
                    طريقة <code>prompt()</code> تعرض مربع حوار مع رسالة وتلتقط البيانات التي يدخلها المستخدم.
                </p>
                <CodeBlock code={`var name;
name = prompt("أدخل اسمك");
alert(name);`} />

                {/* طريقة confirm() */}
                <h3 className="text-xl font-semibold">طريقة confirm()</h3>
                <p className="text-lg leading-relaxed mb-4">
                    طريقة <code>confirm()</code> تعرض مربع حوار مع رسالة وزرين: موافق و إلغاء. إذا نقر المستخدم على "موافق"، سترجع الطريقة <code>true</code>، وإذا نقر على "إلغاء"، سترجع <code>false</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    سنتعلم المزيد حول كيفية استخدام هذه الطريقة لاحقاً.
                </p>
            </section >

            {/* عرض المعلومات في وحدة التحكم */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">عرض المعلومات في وحدة التحكم</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    كائن <code>console</code> هو أداة أساسية لتصحيح الأخطاء أثناء التطوير. يسمح لك بعرض معلومات التصحيح (التحذيرات، الأخطاء، قيم المتغيرات، إلخ)، مما يعد أمرًا حيويًا لاستكشاف الأخطاء وإصلاحها في السكربتات الخاصة بك.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    وحدة التحكم هي أداة للمطورين ولا يجب استخدامها للتفاعل مع المستخدم (استخدم <code>alert()</code> أو <code>prompt()</code> لذلك).
                </p>

                {/* طريقة log() */}
                <h3 className="text-xl font-semibold">طريقة log()</h3>
                <p className="text-lg leading-relaxed mb-4">
                    يتم تضمين وحدة التحكم في أدوات المطورين في المتصفحات مثل كروم وفايرفوكس. للوصول إليها، اضغط على F12 ثم انقر على تبويب "وحدة التحكم". بعد ذلك، يمكنك استخدام طريقة <code>console.log()</code> لعرض شيء في وحدة التحكم.
                </p>
                <CodeBlock code={`console.log("النص المعروض في وحدة التحكم");`} />
            </section >

            {/* التمارين */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">التمارين</h2>
                <div className="border-b border-gray-300 mb-6" />
                <ul className="list-decimal list-inside text-lg space-y-2">
                    <li>أنشئ سكربت يسأل المستخدم عن اسمه الأول واسم العائلة ويعرض المعلومات عبر مربع حوار <code>alert()</code>.</li>
                    <li>اكتب برنامجًا لحساب حاصل ضرب رقمين يدخلهما المستخدم ويعرض النتيجة.</li>
                    <li>اكتب برنامجًا لتحويل درجة الحرارة من مئوية إلى فهرنهايت باستخدام الصيغة: <code>F = (C * 9 / 5) + 32</code>. سيطلب البرنامج من المستخدم إدخال درجة الحرارة بالمئوية ثم يعرض درجة الحرارة المحولة بالفهرنهايت.</li>
                </ul>
            </section >

        </div >
    );
}
