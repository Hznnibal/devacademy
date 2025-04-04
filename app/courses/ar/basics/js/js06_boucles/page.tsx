import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const JS08LoopsPage: React.FC = () => {
  return (
    <div className="px-5 py-8 font-sans">

      <h1 className="text-3xl font-bold text-center mb-10">JS 08: الحلقات</h1>

      {/* ضرورة الهياكل التكرارية */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">ضرورة الهياكل التكرارية</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          التكرار، أو الهياكل التكرارية (المعروفة أيضًا بالحلقات)، تسمح لك بأداء عملية عن طريق تكرار إجراء أساسي أو مركب حتى يتم تلبية شرط معين، أو التوقف عندما يتم تحقيق الشرط المحدد.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          هناك عدة أنواع من الهياكل التكرارية، كل منها يخدم غرضًا مختلفًا.
        </p>
      </section>

      {/* مثال - جدول الضرب للعدد 5 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">مثال: جدول الضرب للعدد 5</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          باستخدام التعليمات التي تم تعريفها حتى هذه النقطة، الطريقة الوحيدة لكتابة الجدول الكامل هي كما في البرنامج التالي:
        </p>
        <CodeBlock code={`console.log("جدول الضرب للعدد 5");
console.log("=============================");
console.log("5 * 0 = 0");
console.log("5 * 1 = 5");
console.log("5 * 2 = 10");
console.log("5 * 3 = 15");
console.log("5 * 4 = 20");
console.log("5 * 5 = 25");
console.log("5 * 6 = 30");
console.log("5 * 7 = 35");
console.log("5 * 8 = 40");
console.log("5 * 9 = 45");
console.log("5 * 10 = 50");`} />
        <p className="text-lg leading-relaxed mb-4">
          عند النظر إلى هذا البرنامج، ندرك بسرعة أن نفس الإجراء الأساسي يتكرر عدة مرات. نُستبدل الرقم 5 بمتحول مثل <code>i</code>.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          لتعميم الأمر، يمكننا كتابة التعليمات التالية:
        </p>
        <CodeBlock code={`console.log(i+" * 0 = 0");`} />
        <p className="text-lg leading-relaxed mb-4">
          هذا يتكرر للقيمة <code>i</code> التي تتراوح من 1 إلى 10، ويمكن التعبير عن شرط الإيقاف كالتالي:<br />
          <code>من 1 إلى 10</code><br />
          أو:<br />
          <code>بينما i {`<=`} 10</code><br />
          أو:<br />
          <code>حتى i {`>`} 10</code>
        </p>
      </section>

      {/* الحلقات باستخدام for */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">الحلقات باستخدام <code>for</code></h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          يسمح لك بيان <code>for</code> بتنفيذ مجموعة من التعليمات عددًا معينًا من المرات بناءً على معيار معين. الصيغة هي:
        </p>
        <CodeBlock code={`for (قيمة مبدئية; شرط; تحديث)
{
      التعليمات;
};`} />
        <p className="text-lg leading-relaxed mb-4">
          - <code>قيمة مبدئية</code> تمثل تهيئة المؤشرات؛<br />
          - <code>الشرط</code> يمثل شرط التكرار؛<br />
          - <code>التحديث</code> يمثل تحديث المؤشرات.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          لنُراجع مثال جدول الضرب:
        </p>
        <CodeBlock code={`console.log("جدول الضرب للعدد 5");
console.log("=============================");

for (i = 0; i<=10; i++)
{
    result = 5 * i;

    console.log("5 * "+i+" = "+result);
}
// التعليمات التي يتم تنفيذها بعد الحلقة (عند i تساوي 10)
console.log("نهاية الحلقة");`} />
        <p className="text-lg leading-relaxed mb-4">
          تحليل التنفيذ:
        </p>
        <ul className="list-disc pl-8">
          <li>في أول تنفيذ لبيان <code>for</code>، يتم تهيئة <code>i</code> إلى 0.</li>
          <li>يتم تقييم شرط التكرار (<code>i {`<=`} 10</code>) في كل مرة. إذا كان <code>i {`>`} 10</code>، تتوقف الحلقة، ويتم تنفيذ التعليمات التي تلي القوس المغلق.</li>
          <li>عندما يكون شرط التكرار صحيحًا، يتم تنفيذ التعليمات داخل الأقواس.</li>
          <li>عند القوس المغلق، يتم زيادة <code>i</code> بمقدار 1.</li>
          <li>يتم العودة إلى بيان <code>for</code> للمرور التالي، هذه المرة عندما تكون <code>i</code> تساوي 1.</li>
        </ul>
      </section>

      {/* الحلقات باستخدام while */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">الحلقات باستخدام <code>while</code></h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          يسمح لك بيان <code>while</code> بتنفيذ مجموعة من التعليمات عددًا معينًا من المرات.
        </p>
        <CodeBlock code={`while (الشرط صحيح)
{
      // التعليمات
}`} />
        <p className="text-lg leading-relaxed mb-4">
          <code>الشرط</code> هو تعبير منطقي. سيتم تنفيذ التعليمات بشكل متكرر طالما أن الشرط يقيم إلى true.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          يجب تقييم الشرط عند أول تنفيذ لبيان <code>while</code>، وهو ما يتطلب تهيئة المتغيرات المعنية في الشرط.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          إذا تم تقييم الشرط إلى false عند أول تنفيذ ل<code>while</code>، فلن يتم تنفيذ التعليمات.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          مثال:
        </p>
        <CodeBlock code={`var i = 0;
console.log("جدول الضرب للعدد 5");
console.log("=============================");
while (i <= 10) {
  result = 5 * i;
  console.log("نتيجة 5 x "+i+" هي: "+result);
  i++;
}
console.log("نهاية الحلقة");`} />
        <p className="text-lg leading-relaxed mb-4">
          تحليل التنفيذ:
        </p>
        <ul className="list-disc pl-8">
          <li>في كل مرة يتم فيها تنفيذ بيان <code>while</code>، يتم تقييم شرط التكرار (<code>i {'<='} 10</code>).</li>
          <li>إذا كان <code>i {'>'} 10</code>، تتوقف الحلقة، ويتم تنفيذ التعليمات التي تلي القوس المغلق.</li>
          <li>عندما يكون الشرط صحيحًا، يتم تنفيذ التعليمات داخل الأقواس.</li>
          <li>عند القوس المغلق، يتم إعادة تقييم بيان <code>while</code>.</li>
        </ul>
      </section>

      {/* التحذيرات وحلقات while */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">التحذيرات</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          جملة <code>while</code> تتطلب انتباهاً دقيقاً. الصيغة الكاملة لها هي:
        </p>
        <CodeBlock code={`initialization
while (condition) {
  // التعليمات
  // التحديث
}`} />
        <p className="text-lg leading-relaxed mb-4">
          في مثالنا:
        </p>
        <CodeBlock code={`i = 1; 
while (i <= 10) { 
  console.log("النتيجة لـ 5 × " + i + " هي: " + result); 
  i++; 
}`} />
        <p className="text-lg leading-relaxed mb-4">
          كن حريصاً على عدم نسيان خطوات التهيئة والتحديث، حيث إن عدم القيام بذلك قد يؤدي إلى خطأ "المتغير غير مهيأ".
        </p>
        <p className="text-lg leading-relaxed mb-4">
          إحدى المشكلات الرئيسية في حلقة <code>while</code> هي إمكانية حدوث حلقة لا نهائية، مما قد يؤدي إلى تعطل المتصفح إذا ظل الشرط صحيحاً للأبد.
        </p>
      </section>

      {/* فوائد while */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">فوائد <code>while</code></h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          جملة <code>while</code>، مقارنة بـ <code>for</code>، مفيدة للحالات الأكثر تعقيداً من التكرار، مثل:
        </p>
        <CodeBlock code={`while (i <=  10 && j != 2) {
  ...
}
while (!found) {
  ...
} // حيث 'found' هو قيمة منطقية`} />
      </section>

      {/* جملة break */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">جملة <code>break</code></h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          جملة <code>break</code> تسمح لك بالخروج المبكر من حلقة <code>for</code> أو <code>while</code>.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          لتوضيح ذلك، دعونا نأخذ المثال التالي:
        </p>
        <CodeBlock code={`var cpt = 1;
while (cpt < 5) {
  if (cpt == 4) {
    break;
  }
  console.log("السطر: " + cpt);
  cpt++;
}
console.log("نهاية الحلقة");`} />
        <p className="text-lg leading-relaxed mb-4">
          السلوك مشابه للمثال السابق، باستثناء أنه عندما يكون العداد يساوي 4، ستخرج جملة <code>break</code> من الحلقة، وستظهر الرسالة "نهاية الحلقة".
        </p>
        <p className="text-lg leading-relaxed mb-4">
          سيكون الناتج:
        </p>
        <CodeBlock code={`السطر: 1
السطر: 2
السطر: 3
نهاية الحلقة`} />
      </section>

      {/* جملة continue */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">جملة <code>continue</code></h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          جملة <code>continue</code> تسمح لك بتخطي تكرار من حلقة <code>for</code> أو <code>while</code> والانتقال إلى التكرار التالي (دون الخروج من الحلقة كما تفعل جملة <code>break</code>).
        </p>
        <p className="text-lg leading-relaxed mb-4">
          دعونا نأخذ المثال التالي:
        </p>
        <CodeBlock code={`var cpt = 1;
while (cpt < 5) {
  if (cpt == 3) {
    cpt++;
    continue;
  }
  console.log("السطر: " + cpt);
  cpt++;
}
console.log("نهاية الحلقة");`} />
        <p className="text-lg leading-relaxed mb-4">
          في هذه الحالة، تبدأ الحلقة كما هو معتاد. عندما يكون العداد يساوي 3، ستتخطى جملة <code>continue</code> تعليمات <code>console.log()</code> (لن يتم عرض السطر "السطر: 3") وتنتقل إلى التكرار التالي.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          لاحظ أننا أضفنا <code>cpt++</code> قبل <code>continue</code> لتجنب حدوث حلقة لا نهائية ومنع تعطل المتصفح (لأن <code>cpt</code> سيظل في القيمة 3).
        </p>
        <p className="text-lg leading-relaxed mb-4">
          سيكون الناتج:
        </p>
        <CodeBlock code={`السطر: 1
السطر: 2
السطر: 4
نهاية الحلقة`} />
      </section>

      {/* حلقات do...while */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">الحلقات باستخدام <code>do...while</code></h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          حلقة <code>do...while</code> تنفذ التعليمات حتى لا يُلبى الشرط. يتم التحقق من الشرط بعد تنفيذ التعليمات، مما يعني أن التعليمات يتم تنفيذها دائمًا مرة واحدة على الأقل.
        </p>
        <CodeBlock code={`do {
  التعليمات;
} while (الشرط);`} />
        <p className="text-lg leading-relaxed mb-4">
          الشرط هو تعبير منطقّي (من النوع <code>bool</code>). سيتم تنفيذ التعليمات طالما كان الشرط يساوي <code>true</code>.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          كتلة <code>do</code> تتبعها دائمًا عبارة <code>while</code>. وهي مشابهة لحلقة <code>while</code>، ولكن يتم تقييم الشرط في نهاية الحلقة وليس في البداية. وهذا يعني أن حلقة <code>do</code> ستنفذ دائمًا مرة واحدة على الأقل.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          إليك مثالًا باستخدام جدول الضرب:
        </p>
        <CodeBlock code={`var i = 0;
console.log("جدول ضرب 5");
console.log("=============================");
do {
  النتيجة = 5 * i;
  console.log("5 * " + i + " = " + النتيجة);
  i++;
} while (i <= 10);
console.log("نهاية الحلقة");`} />
        <p className="text-lg leading-relaxed mb-4">
          سيكون الناتج كما يلي:
        </p>
        <CodeBlock code={`5 * 0 = 0
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
نهاية الحلقة`} />
      </section>

      {/* الحلقات باستخدام for...in */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">الحلقات باستخدام <code>for...in</code></h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          حلقة <code>for...in</code> خاصة بـ JavaScript، على عكس <code>for</code> و <code>while</code> و <code>do...while</code> التي قد تجدها في لغات أخرى.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          تعبير <code>for...in</code> يبسط استخدام حلقة <code>for</code>، وخاصة لاستخراج العناصر من مصفوفة:
        </p>
        <CodeBlock code={`var tableau = ["بول", "جون", "آنا", "صوفيا"];
for (var i in tableau) {
  console.log(tableau[i]);
}`} />
        <p className="text-lg leading-relaxed mb-4">
          هذه الحلقة تتكرر عبر عناصر المصفوفة <code>tableau</code>، وتطبع كل عنصر في وحدة التحكم.
        </p>
      </section>

      {/* التمارين */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">التمارين</h2>
        <div className="border-b border-gray-300 mb-6" />

        {/* التمرين 1 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">التمرين 1 - الإدخال</h3>
          <p className="text-lg leading-relaxed mb-4">
            أنشئ صفحة HTML تطلب من المستخدم إدخال اسم أول. يجب أن تستمر الصفحة في طلب أسماء أولية حتى يترك المستخدم الحقل فارغًا. وأخيرًا، تعرض الصفحة عدد الأسماء المدخلة والأسماء في وحدة التحكم.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            مثال على النتيجة:
          </p>
          <video
            src="/Exboucle.mp4"
            width={460}
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* التمرين 2 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">التمرين 2 - الأعداد الصحيحة الأقل من N</h3>
          <p className="text-lg leading-relaxed mb-4">
            اكتب برنامجًا يعرض الأعداد التي تقل عن N.
          </p>
        </div>

        {/* التمرين 3 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">التمرين 3 - المتوسط</h3>
          <p className="text-lg leading-relaxed mb-4">
            اكتب برنامجًا يطلب من المستخدم إدخال أعداد صحيحة ويعرض مجموعها ومتوسطها (أوقف الإدخال عندما تكون القيمة 0).
          </p>
        </div>

        {/* التمرين 4 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">التمرين 4 - المضاعفات</h3>
          <p className="text-lg leading-relaxed mb-4">
            اكتب برنامجًا يحسب أول N مضاعفات لعدد صحيح X، حيث يتم إدخال N و X من قبل المستخدم.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            مثال لـ N=5 و X=7:
          </p>
          <CodeBlock code={`1 x 7 = 7
2 x 7 = 14
3 x 7 = 21
4 x 7 = 28
5 x 7 = 35`} />
          <p className="text-lg leading-relaxed mb-4">
            تحتاج إلى اختيار أفضل هيكل حلقي (<code>for</code> أو <code>while</code> أو <code>do...while</code>) لهذه المشكلة.
          </p>
        </div>

        {/* التمرين 5 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">التمرين 5 - عد الحروف المتحركة</h3>
          <p className="text-lg leading-relaxed mb-4">
            اكتب برنامجًا يعد عدد الحروف المتحركة في كلمة أدخلها المستخدم، باستخدام الطرق التالية:
          </p>
          <ul className="list-disc pl-6">
            <li><code>myVar.length</code>: يعيد عدد الأحرف في السلسلة <code>myVar</code></li>
            <li><code>myVar.substring(p, n)</code>: يستخرج جزءًا من السلسلة يتكون من <code>n</code> حرفًا من الموضع <code>p</code> (لاحظ أن في JavaScript، الحرف الأول يكون في الموضع 0)</li>
            <li><code>myVar.indexOf(chaine)</code>: يعيد موضع أول ظهور للسلسلة <code>chaine</code> في المتغير <code>myVar</code> (يعيد -1 إذا لم يتم العثور عليها)</li>
          </ul>
        </div>
      </section>

    </div >
  );
};

export default JS08LoopsPage;
