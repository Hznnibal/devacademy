import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const ConditionalActionsPage: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">

            <h1 className="text-3xl font-bold text-center mb-10">JS 07: التعليمات الشرطية والبديلة</h1>

            {/* مقدمة في الإجراءات الشرطية */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">الإجراء الشرطي</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    الإجراء الشرطي هو تعليمات أساسية أو سلسلة من التعليمات التي يتم تنفيذها بالتتابع إذا سمحت حالة النظام بذلك. يتم التعبير عن المعايير التي يجب تلبيتها من أجل تنفيذ الإجراء باستخدام شرط (مؤشر) يمكن تقييمه في اللحظة الدقيقة التي يجب أن يحدث فيها الإجراء إذا لزم الأمر.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    أثناء تنفيذ البرنامج، يتعين على المعالج تقييم الشرط. ثم يشكل الشرط المُقيم بيانًا (أو اقتراحًا) إما صحيحًا أو خاطئًا.
                </p>
            </section>

            {/* رسم بياني للإجراء الشرطي */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">الرسم البياني</h3>
                <CodeBlock code={`If _predicate_ then
   Instruction 1
   Instruction 2
   ...
   Instruction N
End if`} />
            </section>

            {/* أمثلة على الإجراء الشرطي */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">أمثلة</h3>
                <CodeBlock code={`Example 1:
If Temperature > 38 then
   Write "The patient has a fever"
End if

Example 2:
If Temperature > 41 and Pressure > 25 then
   Write "The patient is losing patience"
End if

Example 3:
If not Patient then
   Write "Dismiss the idiot"
End if

Example 4:
If Temperature > 42 or (Pressure < 25 and Pulse > 180) then
   Write "Alert the family"
End if

Example 5:
If Temperature > 40 or Pressure >= 25 then
   Write "Hospitalize the patient"
End if

Example 6:
If Patient and Pulse = 0 then
   Write "Call the priest"
End if`} />
            </section>

            {/* شرح الصيغة */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">صيغة جافا سكريبت</h3>
                <p className="text-lg leading-relaxed mb-4">
                    جملة <code>if</code> تسمح لك بتنفيذ كتلة من التعليمات إذا كان الشرط المحدد صحيحًا. الصيغة الأساسية في جافا سكريبت هي كما يلي:
                </p>
                <CodeBlock code={`if (condition) {
   // Instruction 1
   // Instruction 2
   // ...
   // Instruction N
}`} />
            </section>

            {/* مثال على شرط بسيط */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">الشرط البسيط</h3>
                <p className="text-lg leading-relaxed mb-4">
                    تعبير <code>if</code> هو أبسط شكل للشرط في جافا سكريبت:
                </p>
                <CodeBlock code={`let response = "yes";

if (response == "yes") {
    console.log("Good answer!"); // Displays 'Good answer!' in the console
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    إذا كان هناك تعليم واحد فقط يجب تنفيذه، يمكن حذف الأقواس المعقوفة، لكن لا يُوصى بذلك من أجل قابلية قراءة الكود:
                </p>
                <CodeBlock code={`if (response == "yes")
   console.log("Good answer!");`} />
            </section>

            {/* شرح جملة if-else */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">استخدام if-else</h3>
                <p className="text-lg leading-relaxed mb-4">
                    يمكنك أيضًا استخدام جملة <code>else</code> للتعامل مع الحالة عندما يكون الشرط خاطئًا. الصيغة الأساسية هي كما يلي:
                </p>
                <CodeBlock code={`if (condition) {
   // Execute if condition is true
} else {
   // Execute if condition is false
}`} />
            </section>
            {/* جملة switch */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">جملة Switch</h3>
                <p className="text-lg leading-relaxed mb-4">
                    جملة <code>switch</code> تسمح لك بتنفيذ أحد العديد من كتل التعليمات بناءً على الحالات المختلفة:
                </p>
                <CodeBlock code={`switch (expression) {
   case value1:
      // block of code for value1;
      break;
   case value2:
      // block of code for value2;
      break;
   default:
      // block of code if no case is matched;
}`} />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">مقدمة في المشغلين المنطقيين</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    تُستخدم المشغلات المنطقية <strong>AND (&&)</strong> و <strong>OR (||)</strong> لاختبار مجموعات من الشروط:
                </p>
            </section>

            {/* استخدام AND (&&) */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">استخدام AND (&&)</h3>
                <p className="text-lg leading-relaxed mb-4">
                    مشغل <code>AND</code> يسمح لك باختبار ما إذا كانت الشروطان صحيحين:
                </p>
                <CodeBlock code={`// شرط باستخدام AND
if (age > 18 && permis == "Car") {
    console.log("أنت فوق 18 ولديك رخصة قيادة سيارة، يمكنك القيادة");
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    في هذا المثال، المستخدمين الذين لديهم رخصة دراجة نارية لا يستطيعون القيادة، بغض النظر عن عمرهم.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    <strong>مهم:</strong> لاحظ استخدام علامة المساواة المزدوجة (==) للمقارنة. هذه هي مشغل المقارنة، وليس علامة المساواة الواحدة (=)، التي تستخدم للتعيين.
                </p>
            </section>

            {/* استخدام OR (||) */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">استخدام OR (||)</h3>
                <p className="text-lg leading-relaxed mb-4">
                    مشغل <code>OR</code> يختبر ما إذا كان أحد الشروط على الأقل صحيحًا:
                </p>
                <CodeBlock code={`// شرط باستخدام OR
if (age > 18 || permis == "Car") {
    console.log("أنت فوق 18 أو لديك رخصة قيادة سيارة، يمكنك القيادة");
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    في هذا المثال، يمكن لأي مستخدم لديه رخصة قيادة (دراجة نارية، قارب، إلخ) القيادة طالما كان عمره فوق 18 عامًا.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    كن حذرًا عند كتابة الشروط باستخدام المشغلات المنطقية.
                </p>
            </section>

            {/* مشغلات المقارنة المنطقية الأخرى */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">مشغلات المقارنة المنطقية الأخرى</h3>
                <p className="text-lg leading-relaxed mb-4">
                    في الأمثلة السابقة، تم استخدام المشغل {`>`} لمقارنة العمر. هذا يعني أن الشرط يتحقق إذا كان العمر أكبر من 18، مستبعدًا 18 نفسه. إذا كنت ترغب في تضمين 18، يمكنك استخدام مشغل أكبر من أو يساوي {`(>=)`}.
                </p>
                <CodeBlock code={`if (age >= 18 || permis == "Car") {
    console.log("أنت فوق 18 أو لديك رخصة قيادة سيارة، يمكنك القيادة");
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    إليك بعض مشغلات المقارنة الإضافية:
                </p>
                <table className="min-w-full p-4 rounded">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">الرمز</th>
                            <th className="px-4 py-2">المعنى</th>
                            <th className="px-4 py-2">المثال</th>
                            <th className="px-4 py-2">الشرط</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2">==</td>
                            <td className="px-4 py-2">المقارنة</td>
                            <td className="px-4 py-2">x == 11</td>
                            <td className="px-4 py-2">هل x يساوي 11؟</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">&lt;</td>
                            <td className="px-4 py-2">أقل من بشكل صارم</td>
                            <td className="px-4 py-2">x &lt; 11</td>
                            <td className="px-4 py-2">هل x أقل من 11 بشكل صارم؟ نعم إذا كان x حتى 10، لا إذا كان x 11 أو أكثر.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">&lt;=</td>
                            <td className="px-4 py-2">أقل من أو يساوي</td>
                            <td className="px-4 py-2">x &lt;= 11</td>
                            <td className="px-4 py-2">هل x أقل من أو يساوي 11؟ نعم إذا كان x حتى 11، لا إذا كان x أكثر من 11.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">&gt;</td>
                            <td className="px-4 py-2">أكبر من بشكل صارم</td>
                            <td className="px-4 py-2">x &gt; 11</td>
                            <td className="px-4 py-2">هل x أكبر من 11 بشكل صارم؟ نعم إذا كان x على الأقل 12، لا إذا كان x 11 أو أقل.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">&gt;=</td>
                            <td className="px-4 py-2">أكبر من أو يساوي</td>
                            <td className="px-4 py-2">x &gt;= 11</td>
                            <td className="px-4 py-2">هل x أكبر من أو يساوي 11؟ نعم إذا كان x على الأقل 11، لا إذا كان x أقل من 11.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">!=</td>
                            <td className="px-4 py-2">لا يساوي</td>
                            <td className="px-4 py-2">x != "toto"</td>
                            <td className="px-4 py-2">هل x مختلف عن السلسلة "toto"؟</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* استخدام else و else-if */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">استخدام else و else-if</h3>
                <p className="text-lg leading-relaxed mb-4">
                    يمكنك تبسيط الكود للتعامل مع خيارين ممكنين باستخدام جملة <code>else</code>:
                </p>
                <CodeBlock code={`if (response == "yes") {
    console.log("إجابة صحيحة!");
} else {
    console.log("إجابة خاطئة!");
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    يمكن توسيع ذلك للتعامل مع حالات أخرى باستخدام <code>else if</code>:
                </p>
                <CodeBlock code={`if (response == "A") {
    console.log("إجابة صحيحة!");
} else if (response == "B") {
    console.log("إجابة خاطئة!");
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    ومع ذلك، ماذا لو كانت الإجابة ليست "A" ولا "B"؟ للتعامل مع مثل هذه الحالات، من الأفضل استخدام كتلة <code>else</code> النهائية:
                </p>
                <CodeBlock code={`if (response == "A") {
    console.log("إجابة صحيحة!");
} else if (response == "B") {
    console.log("إجابة خاطئة!");
} else {
    console.log("إجابة غير معروفة.");
}`} />
            </section>

            {/* استخدام Switch */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">جملة Switch</h3>
                <p className="text-lg leading-relaxed mb-4">
                    جملة <code>switch</code> تتيح لك كتابة مجموعة من الشروط بتنسيق مختلف. يتم تقديمها بواسطة الكلمة الرئيسية <code>switch</code>، التي تأخذ المتغير الذي سيتم اختباره كوسيط. بعد ذلك، داخل الأقواس المعقوفة، يتم استخدام كلمات <code>case</code> لتحديد القيم المختلفة المتوقعة لهذا المتغير. لكل حالة، تنفذ تعليمات معينة. يجب أن تنتهي كل كتلة <code>case</code> بجملة <code>break</code> للخروج من الـ switch بمجرد تلبية الشرط. إذا كانت جملة <code>break</code> مفقودة، فسيتم تنفيذ جميع الحالات.
                </p>
            </section>

            {/* المثال 1 */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">المثال 1</h3>
                <p className="text-lg leading-relaxed mb-4">
                    إليك مثال باستخدام متغير:
                </p>
                <CodeBlock code={`var variable = "1"; 

switch (variable) {   
  case "1" :
     console.log("الحالة 1");  
     break; 

  case "2" :
     console.log("الحالة 2");  
     break;

  case "3":
     console.log("الحالة 3");
     break; 
}`} />
            </section>

            {/* المثال 2 */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">المثال 2</h3>
                <p className="text-lg leading-relaxed mb-4">
                    دعونا نتحقق من طراز:
                </p>
                <CodeBlock code={`var model = "Clio"; 

switch (model) {   
  case "208" :
     console.log("طراز 208: ماركة بيجو");  
     break; 

  case "Clio" :
     console.log("طراز Clio: ماركة رينو"); 
     break;  

  case "C3" :
     console.log("طراز C3: ماركة سيتروين");
     break;
}`} />
            </section>

            {/* استخدام default case */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">استخدام default case</h3>
                <p className="text-lg leading-relaxed mb-4">
                    يمكن إضافة جملة <code>default</code> بشكل اختياري. يتم وضعها في نهاية كتلة <code>switch</code>، بعد جميع جمل <code>case</code>. دورها مشابه لـ <code>else</code> في جملة if، مما يعني أنه إذا لم يتم تلبية أي من الشروط في الحالات (إذا لم تخرج من الـ switch بسبب break)، سيتم تنفيذ التعليمات داخل كتلة <code>default</code>:
                </p>
                <CodeBlock code={`var model = "A4";

switch (model) {   
  case "208" :
     console.log("طراز 208: ماركة بيجو");  
     break; 

  case "Clio" :
     console.log("طراز Clio: ماركة رينو"); 
     break;  

  case "C3" :
     console.log("طراز C3: ماركة سيتروين");
     break;

  default: 
     console.log("طراز "+model+": ماركة غير معروفة");
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    لاحظ أنه لا توجد جملة <code>break</code> لإنهاء كتلة <code>default</code>.
                </p>
            </section>

            {/* تجميع الحالات */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">تجميع الحالات</h3>
                <p className="text-lg leading-relaxed mb-4">
                    من الممكن تجميع الحالات معًا وتطبيق نفس التعليمات. في المثال أدناه، كلا الطرازين "Laguna" و "Clio" ينتميان إلى ماركة رينو:
                </p>
                <CodeBlock code={`var model = "Clio";

switch (model) {   
  case "508" :
     console.log("طراز 508: ماركة بيجو");  
     break; 

  case "Clio" :   
  case "Laguna" :
     console.log("طراز "+model+" : ماركة رينو"); 
     break;  

  case "C5" :
     console.log("طراز C5: ماركة سيتروين");
     break;

  default: 
     console.log("طراز "+model+": ماركة غير معروفة");
}`} />
            </section>

            {/* الشروط المتداخلة */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">الشروط المتداخلة</h3>
                <p className="text-lg leading-relaxed mb-4">
                    يمكن أن تحتوي كتلة الشروط على واحدة أو أكثر من كتل الشروط الأخرى (إما <code>if</code> أو <code>switch</code>):
                </p>
                <CodeBlock code={`var answer = "yes";

if (answer == "yes") {   
   console.log("إجابة صحيحة!");
   score++; // زيادة النقاط بمقدار 1

   if (score == 20) {
       console.log("لقد فزت!");
   } // نهاية الجملة الشرطية الثانية
} // نهاية الجملة الشرطية الأولى`} />
            </section>

            {/* الشرط الثلاثي */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">الشرط الثلاثي</h3>
                <p className="text-lg leading-relaxed mb-4">
                    هناك طريقة أخرى لكتابة الشروط تسمى الشرط الثلاثي. يُعرف أيضًا بالمشغل الثلاثي أو المشغل الشرطي.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    يُكتب الشرط الثلاثي بهذه الطريقة:
                </p>
                <CodeBlock code={`(condition) ? instruction1 : instruction2`} />
                <p className="text-lg leading-relaxed mb-4">
                    كيفية عمله:
                    <ul>
                        <li>إذا كانت الحالة داخل الأقواس صحيحة، يتم تنفيذ <code>instruction1</code>.</li>
                        <li>إذا كانت الحالة غير صحيحة، يتم تنفيذ <code>instruction2</code>.</li>
                    </ul>
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    مثال:
                </p>
                <CodeBlock code={`var age = 19;

(age >= 18) ? console.log("أنت بالغ") : console.log("أنت قاصر");`} />
                <p className="text-lg leading-relaxed mb-4">
                    على الرغم من أن هذا الشكل من الكتابة يُستخدم أحيانًا، إلا أنه عادةً ما يُنصح بتجنب استخدامه بسبب مشكلات في القراءة.
                </p>
            </section>

            {/* التمرين 1 - التوازي */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2"> التمرين 1 - التوازي</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    اكتب برنامجًا يطلب من المستخدم إدخال رقم، ثم يختبر ما إذا كان الرقم زوجيًا. يجب على البرنامج عرض ما إذا كان الرقم زوجيًا أو فرديًا. يجب عليك استخدام المشغل <code>%</code>، الذي يعطي باقي القسمة. <code>a % 2</code> يعطي باقي قسمة <code>a</code> على 2. إذا كان الباقي 0، فإن <code>a</code> قابل للقسمة على 2.
                </p>
            </section>

            {/* التمرين 2 - العمر */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2"> التمرين 2 - العمر</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    اكتب برنامجًا يطلب من المستخدم سنة ميلاده. في الرد، يجب أن يعرض البرنامج عمر المستخدم ويحدد ما إذا كان المستخدم بالغًا أو قاصرًا.
                </p>
            </section>

            {/* التمرين 3 - الآلة الحاسبة */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2"> التمرين 3 - الآلة الحاسبة</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    اكتب برنامجًا يأخذ رقمين صحيحين ثم يطلب من المستخدم إدخال عملية حسابية (+، -، *، أو /).
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    إذا أدخل المستخدم مشغلًا غير صحيح، يجب على البرنامج عرض رسالة خطأ.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    بخلاف ذلك، سيقوم البرنامج بتنفيذ العملية المطلوبة (مع التعامل مع أخطاء القسمة على 0) وعرض النتيجة.
                </p>
            </section>

        </div >
    );
};

export default ConditionalActionsPage;
