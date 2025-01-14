import { CodeBlock } from "@/components/CodeBlock/code-block";
import Link from "next/link";

export default function CreateDatabasePage() {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">The "example" Database</h1>
            <div className="mb-4">
                <p className="text-xl font-bold mb-3">استخدم
                    <a
                        href="/SCRIPT/example.sql"
                        download="example.sql"
                        className="text-primary hover:underline font-medium text-blue-600"
                    > هذا السكربت </a>
                    لإنشاء قاعدة بيانات Example.</p>
                <p className="text-lg text-muted-foreground">
                    تمثل هذه القاعدة بيانات، بطريقة مبسطة، موظفي شركة. تم تصميمها لتعلم SQL، مع التركيز على البساطة والوضوح.
                </p>

                <img
                    src="/DATABASE/diagram.png"
                    alt="مخطط قاعدة البيانات"
                    className="rounded shadow-md mb-4"
                    width={360}
                />
                <h3 className="text-lg mt-4 mb-4">الجدول: EMPLOYEE</h3>

                <img
                    src="/DATABASE/tablemployee.png"
                    alt="مخطط قاعدة البيانات"
                    className="rounded shadow-md mb-4"
                    width={760}
                />
                <p className="text-muted-foreground">
                    يحتوي جدول <strong>EMPLOYEE</strong> على معلومات حول الموظفين، بما في ذلك معرفاتهم، أسمائهم، تواريخ تعيينهم، أدوارهم الوظيفية، ورواتبهم.
                </p>
                <ul className="list-disc space-y-2 ml-4">
                    <li><strong>emp_id:</strong> المعرف الفريد لكل موظف (المفتاح الرئيسي).</li>
                    <li><strong>last_name:</strong> اسم العائلة للموظف.</li>
                    <li><strong>first_name:</strong> الاسم الأول للموظف.</li>
                    <li><strong>hire_date:</strong> تاريخ تعيين الموظف.</li>
                    <li><strong>nosup:</strong> معرف المشرف.</li>
                    <li><strong>title:</strong> المسمى الوظيفي للموظف.</li>
                    <li><strong>nodep:</strong> معرف القسم الذي يعمل فيه الموظف (المفتاح الخارجي).</li>
                    <li><strong>salary:</strong> الراتب الشهري للموظف.</li>
                    <li><strong>commission_rate:</strong> نسبة العمولة، إذا كانت موجودة.</li>
                </ul>

                <h3 className="text-lg mt-4 mb-4">الجدول: DEPT</h3>

                <img
                    src="/DATABASE/tabledep.png"
                    alt="مخطط القسم"
                    className="rounded shadow-md mb-4 mt-4"
                    width={460}
                />

                <p className="text-muted-foreground mb-4">
                    يحتوي جدول <strong>DEPT</strong> على معلومات حول أقسام الشركة.
                </p>
                <ul className="list-disc space-y-2 ml-4">
                    <li><strong>nodept:</strong> المعرف الفريد لكل قسم (المفتاح الرئيسي).</li>
                    <li><strong>name:</strong> اسم القسم.</li>
                    <li><strong>region_id:</strong> معرف المنطقة (المفتاح الخارجي).</li>
                </ul>
            </div>

            <div className="py-4 space-y-4">
                <h3 className="text-xl font-semibold">SELECT</h3>
                <p className="text-base">
                    يتم استخدام جملة <strong className="font-bold">SELECT</strong> للاستعلام من قاعدة البيانات.
                </p>
                <p className="text-base">
                    في البداية، سننظر في الاستعلامات التي تشمل جدولًا واحدًا فقط.
                </p>
                <p className="text-base">
                    لاحقًا، سنغطي الاستعلامات التي تشمل جداول متعددة.
                </p>
                <p className="text-base">
                    الصيغة الأساسية هي:
                </p>
                <CodeBlock code={`SELECT columns
FROM tables separated by ","
WHERE conditions logical separated by "AND" or "OR"
ORDER BY columns separated by ","`} />

                <p className="text-base">
                    يتم استخدام الرمز <code className="font-mono text-sm">*</code> لاختيار جميع الأعمدة من الجدول.
                </p>

                <h4 className="text-sm ml-12 font-semibold">1. عرض جميع معلومات الموظف</h4>
                <p className="text-base">
                    لعرض جميع المعلومات حول الموظفين، استخدم الاستعلام التالي:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code className="text-sm">SELECT * FROM employee;</code>
                </pre>

                <h4 className="text-sm ml-12 font-semibold">2. عرض جميع معلومات القسم</h4>

                <p className="text-base">
                    بدلاً من اختيار جميع الأعمدة باستخدام <code className="font-mono text-sm">*</code>، يمكنك تحديد الأعمدة التي تريد عرضها عن طريق سردها.
                </p>

                <h4 className="text-sm ml-12 font-semibold">3. عرض الاسم، تاريخ التعيين، معرف القسم، والراتب للموظفين</h4>

                <p className="text-base">
                    يمكنك تغيير عناوين الأعمدة باستخدام <code className="font-mono text-sm">AS</code>. الاستعلام
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code className="text-sm">SELECT last_name AS Employee FROM employee;</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">سينتج نفس النتيجة مثل</p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code className="text-sm">SELECT last_name FROM employee;</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4"> باستثناء أن العمود سيكون بعنوان <code className="font-mono text-sm">Employee</code> بدلاً من <code className="font-mono text-sm">name</code>.
                </p>
                <p className="text-base">
                    إذا كنت ترغب في استخدام عنوان عمود يحتوي على أي شيء غير الحروف غير المعنونة (مثل المسافات أو الترقيم أو الحروف المت accentuée)، يجب عليك وضعه بين علامات اقتباس مزدوجة (<code className="font-mono text-sm">"</code>). على سبيل المثال:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code className="text-sm">SELECT last_name AS "Employee's Name" FROM emp;</code>
                </pre>
            </div>


            <div className="py-4 space-y-4">
                <h3 className="text-lg font-semibold">إزالة التكرارات</h3>
                <p className="text-base">
                    قد يكون من المفيد إزالة التكرارات، لذلك نستخدم جملة <code className="font-mono text-sm">DISTINCT</code>. هذا يضمن أنه سيتم عرض حالة واحدة فقط من أي صفوف مكررة.
                    تُستخدم في الاستعلام كما يلي:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code className="text-sm">SELECT DISTINCT ...</code>
                </pre>

                <h4 className="text-sm ml-12 font-semibold">4. عرض ألقاب جميع الموظفين</h4>

                <h4 className="text-sm ml-12 font-semibold">5. عرض القيم المختلفة لألقاب الموظفين</h4>


                <h3 className="text-xl font-semibold">القيود</h3>
                <p className="text-base">
                    تُكتب جمل القيود بعد <code className="font-mono text-sm">WHERE</code>. هذه تتيح لك تصفية الصفوف التي يجب عرضها.
                </p>

                <h4 className="text-sm ml-12 font-semibold">6. عرض الاسم ورقم الموظف ورقم القسم للموظفين الذين يحملون اللقب "سكرتير"</h4>

                <h4 className="text-sm ml-12 font-semibold">7. عرض الاسم ورقم القسم للموظفين الذين يكون رقم قسمهم أكبر من 40</h4>

                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code className="text-sm">SELECT last_name, nodep FROM employee WHERE nodep {`>`} 40;</code>
                </pre>
            </div>

            <div className="py-4 space-y-4">
                <h3 className="text-lg font-semibold">القيود عن طريق مقارنة الأعمدة</h3>
                <p className="text-base">
                    يمكن أن تتضمن القيود مقارنة عمودين أو أكثر ببعضهما البعض. عليك فقط الإشارة إلى الأعمدة بأسمائها.
                </p>
                <h4 className="text-sm ml-12 font-semibold">8. عرض الاسم والاسم الأول للموظفين الذين يأتي اسمهم أبجديًا قبل اسمهم الأول</h4>
                <h4 className="text-sm ml-12 font-semibold">9. عرض الاسم والراتب ورقم القسم للموظفين الذين يحملون اللقب "ممثل"، ورقم القسم 35، وراتبهم أكبر من 20,000</h4>
                <h4 className="text-sm ml-12 font-semibold">10. عرض الاسم واللقب والراتب للموظفين الذين يحملون اللقب "ممثل" أو "رئيس"</h4>
                <h4 className="text-sm ml-12 font-semibold">11. عرض الاسم واللقب ورقم القسم والراتب للموظفين في القسم 34 الذين يحملون اللقب "ممثل" أو "سكرتير"</h4>
                <h4 className="text-sm ml-12 font-semibold">12. عرض الاسم واللقب ورقم القسم والراتب للموظفين الذين يحملون اللقب "ممثل" أو "سكرتير" في القسم 34</h4>
                <h4 className="text-sm ml-12 font-semibold">13. عرض الاسم والراتب للموظفين الذين يتراوح راتبهم بين 20,000 و 30,000</h4>
            </div>

            <div className="py-4 space-y-4">
                <h3 className="text-xl font-semibold">النفي، المطابقة باستخدام الأنماط</h3>
                <p className="text-base">
                    يتم نفي العمليات الحسابية باستخدام « ! »: على سبيل المثال، "غير متساوٍ" يُكتب كـ « != » {`(أو « <> »)`}.
                    يتم نفي العمليات الأخرى باستخدام « NOT »: على سبيل المثال، "ليس في" يُكتب كـ « NOT IN ».
                    حروف البدل هي « % » لسلسلة من الأحرف و « _ » لحرف واحد. يتم استخدامها مع عامل LIKE.
                </p>
                <h4 className="text-sm ml-12 font-semibold">15. عرض اسم الموظفين الذين يبدأ اسمهم بحرف "H"</h4>
                <h4 className="text-sm ml-12 font-semibold">16. عرض اسم الموظفين الذين ينتهي اسمهم بحرف "n"</h4>
                <h4 className="text-sm ml-12 font-semibold">17. عرض اسم الموظفين الذين يحتوي اسمهم على حرف "u" في الموضع الثالث</h4>
                <h4 className="text-sm ml-12 font-semibold">18. عرض الراتب والاسم للموظفين من القسم 41 مرتبين حسب الراتب تصاعديًا</h4>
                <h4 className="text-sm ml-12 font-semibold">19. عرض الراتب والاسم للموظفين من القسم 41 مرتبين حسب الراتب تنازليًا</h4>
                <h4 className="text-sm ml-12 font-semibold">20. عرض اللقب والراتب والاسم للموظفين مرتبين حسب اللقب تصاعديًا والراتب تنازليًا</h4>
            </div>

            <div className="py-4 space-y-4">
                <h3 className="text-xl font-semibold">القيم NULL</h3>
                <p className="text-base">
                    في SQL، هناك قيمة تمثل قيمة فارغة. هذه تعادل القيمة Null في بعض لغات البرمجة (مثل Java أو Python). هي القيمة التي تحتوي عليها الحقول عندما لا تكون مملوءة، وتسمى أيضًا NULL. لا يتم أخذ هذه القيمة في الاعتبار في التصنيفات.
                </p>
                <h4 className="text-sm ml-12 font-semibold">21. عرض معدل العمولة والراتب والاسم للموظفين مرتبين حسب معدل العمولة تصاعديًا</h4>
                <h4 className="text-sm ml-12 font-semibold">22. عرض الاسم والراتب ومعدل العمولة واللقب للموظفين الذين لم يتم توفير معدل العمولة لهم</h4>
                <h4 className="text-sm ml-12 font-semibold">23. عرض الاسم والراتب ومعدل العمولة واللقب للموظفين الذين تم توفير معدل العمولة لهم</h4>
                <h4 className="text-sm ml-12 font-semibold">24. عرض الاسم والراتب ومعدل العمولة واللقب للموظفين الذين يكون معدل العمولة لديهم أقل من 15</h4>
                <h4 className="text-sm ml-12 font-semibold">25. عرض الاسم والراتب ومعدل العمولة واللقب للموظفين الذين يكون معدل العمولة لديهم أكبر من 15</h4>
                <h4 className="text-sm ml-12 font-semibold">26. عرض الاسم والراتب ومعدل العمولة والعمولة للموظفين الذين معدل العمولة لديهم ليس NULL (يتم حساب العمولة بضرب الراتب في معدل العمولة)</h4>
                <h4 className="text-sm ml-12 font-semibold">27. عرض الاسم والراتب ومعدل العمولة والعمولة للموظفين الذين معدل العمولة لديهم ليس NULL، مرتبين حسب معدل العمولة تصاعديًا</h4>
                <div className="py-4 space-y-4">
                    <h3 className="text-xl font-semibold">الدمج</h3>
                    <p className="text-base">
                        الدالة المستخدمة لدمج السلاسل النصية هي CONCAT. تتيح لك دمج سلسلتين أو أكثر في واحدة.
                    </p>

                    <h4 className="text-sm ml-12 font-semibold">28. عرض الاسم والاسم الأول (مدمجان) للموظفين. إعادة تسمية الأعمدة</h4>
                    <h3 className="text-xl font-semibold">دوال السلاسل النصية</h3>
                    <p className="text-base">
                        تقدم SQL أيضًا العديد من الدوال لمعالجة السلاسل النصية لاستخراج أجزاء من السلاسل، والعثور على حروف معينة، والتلاعب بالحروف:
                    </p>
                    <ul className="list-disc ml-6">
                        <li>
                            <b>SUBSTRING(expr, p, n):</b> هذه الدالة تستخرج جزءًا من السلسلة النصية `expr` بدءًا من الموضع `p` ويمتد لعدد `n` من الحروف.
                        </li>
                        <li>
                            <b>LOCATE(arg1, arg2):</b> هذه الدالة ترجع موضع `arg1` داخل `arg2`. تساعد في العثور على موضع سلسلة نصية داخل أخرى.
                        </li>
                        <li>
                            <b>UPPER(arg1):</b> هذه الدالة تحول السلسلة النصية `arg1` إلى أحرف كبيرة.
                        </li>
                        <li>
                            <b>LOWER(arg1):</b> هذه الدالة تحول السلسلة النصية `arg1` إلى أحرف صغيرة.
                        </li>
                        <li>
                            <b>LENGTH(arg1):</b> هذه الدالة ترجع عدد الحروف في السلسلة النصية `arg1`.
                        </li>
                    </ul>

                    <h4 className="text-sm ml-12 font-semibold">29. عرض أول 5 أحرف من اسم الموظف</h4>
                    <h4 className="text-sm ml-12 font-semibold">30. عرض الاسم وموقع حرف "r" في اسم الموظف</h4>
                    <h4 className="text-sm ml-12 font-semibold">31. عرض الاسم واسم الموظف بالحروف الكبيرة والصغيرة للموظف الذي اسمه "Vrante"</h4>
                    <h4 className="text-sm ml-12 font-semibold">32. عرض الاسم وعدد الأحرف في اسم الموظف</h4>
                </div>
            </div>

            <div className="text-center mt-8">
                <Link href="sql02_sqlqueries/solutions" className="text-blue-600 underline text-lg">
                    عرض الحلول
                </Link>
            </div>

        </div>
    );
}
