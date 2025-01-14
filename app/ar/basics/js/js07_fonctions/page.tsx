import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const JS09FunctionsPage: React.FC = () => {
  return (
    <div className="px-5 py-8 font-sans">

      <h1 className="text-3xl font-bold text-center mb-10">JS 09: الدوال</h1>

      {/* التعريف */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">التعريف</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          الدالة هي مجموعة من الأسطر البرمجية ("برنامج فرعي") مصممة لأداء مهمة أو أكثر، ويمكن إعادة استخدامها عدة مرات (تجزئة الكود).
        </p>
        <p className="text-lg leading-relaxed mb-4">
          استخدام الدوال يعزز بشكل كبير من قابلية قراءة السكربت الخاص بك.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          في JavaScript، مثل جميع اللغات الأخرى، هناك نوعان من الدوال:
        </p>
        <ul className="list-disc pl-6">
          <li>
            الدوال المدمجة في JavaScript (المعروفة أيضًا بالدوال الأصلية)، مثل الطريقة <code>alert()</code> المرتبطة بكائن <code>window</code>.
          </li>
          <li>
            الدوال التي تكتبها لاحتياجات السكربت الخاص بك، التي سنتناولها في هذه الدورة.
          </li>
        </ul>
      </section>

      {/* تعريف الدوال */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">تعريف الدوال</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          لتعريف أو إنشاء دالة، نستخدم جملة <code>function</code>. الصيغة الخاصة بتعريف الدالة هي كما يلي:
        </p>
        <CodeBlock code={`function function_name(arguments) {\n  ... code instructions ...\n}`} />
        <p className="text-lg leading-relaxed mb-4">
          اسم الدالة يتبع نفس قواعد أسماء المتغيرات (عدد غير محدود من الأحرف، يبدأ بحرف، يمكن أن يتضمن أرقامًا، إلخ). JavaScript حساس لحالة الأحرف، لذلك <code>mafonction()</code> ليست هي نفسها <code>maFonction()</code>. بالإضافة إلى ذلك، يجب أن تكون جميع أسماء الدوال في السكربت فريدة.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          قسم المعاملات اختياري، ولكن في هذه الحالة يجب أن تبقى الأقواس. هذا هو كيف يميز JavaScript بين المتغيرات والدوال.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          تأكد من إغلاق الأقواس دائمًا، حيث إن تركها مفتوحة سيؤدي إلى حدوث خطأ. اعتد على إغلاق الأقواس مباشرة بعد فتحها وكتابة الكود بداخلها.
        </p>
      </section>

      {/* استدعاء دالة */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">استدعاء دالة</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          لاستدعاء دالة، ما عليك سوى استخدام اسم الدالة متبوعًا بالأقواس. على سبيل المثال: <code>nom_de_la_fonction()</code>.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          تأكد من أن الدالة قد تم تعريفها قبل أن يتم استدعاؤها (نظرًا لأن المترجم يقرأ السكربت من الأعلى إلى الأسفل).
        </p>
      </section>

      {/* تمرير قيمة إلى دالة */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">تمرير قيمة إلى دالة</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          يمكنك تمرير قيم (تسمى أيضًا المعاملات أو الوسائط) إلى الدوال. يتم استخدام القيمة الممررة بواسطة الدالة.
        </p>
        <CodeBlock code={`function example(text) {\n  alert(text);\n}\n\nexample("Hello everyone");`} />
        <p className="text-lg leading-relaxed mb-4">
          في هذا المثال، يتم استدعاء الدالة <code>example()</code> مع الوسيطة "Hello everyone"، ويتم عرض الرسالة عبر طريقة <code>alert()</code>.
        </p>
      </section>

      {/* تمرير عدة معاملات */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">عدة معاملات</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          يمكنك تمرير معاملة أو أكثر إلى دالة، مفصولة بفواصل. يمكن أن تختلف أنواع المعاملات.
        </p>
        <CodeBlock code={`function myFunction(arg1, arg2, arg3) {
// ... code instructions ...
}
myFunction(arg1, arg2, arg3);`} />

        <p className="text-lg leading-relaxed mb-4">
          في هذا المثال، يتم تمرير ثلاث معاملات إلى الدالة <code>myFunction()</code>.
        </p>
      </section>

      {/* المعاملات الاختيارية والتعيين الافتراضي */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">المعاملات الاختيارية والتعيين الافتراضي</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          في JavaScript، جميع معاملات الدوال هي اختياريّة.
        </p>
        <CodeBlock code={`function myFunction(required, optional) {
console.log('المعامل 1: ' + required);
console.log('المعامل 2 (اختياري): ' + optional);
}
myFunction('Paul'); // الاستدعاء الأول
myFunction('Paul', 'Anne'); // الاستدعاء الثاني`} />

        <p className="text-lg leading-relaxed mb-4">
          في المثال أعلاه، المعامل الثاني اختياري. إذا لم يتم تمريره، سيكون <code>undefined</code>. يمكنك تقديم قيمة افتراضية لتجنب الأخطاء:
        </p>
        <CodeBlock code={`function myFunction(required, optional) {
if (typeof optional === 'undefined') {
optional = 'Anne';
}
console.log('المعامل 1: ' + required);
console.log('المعامل 2 (اختياري): ' + optional);
}
myFunction('Paul'); // الاستدعاء الأول
myFunction('Paul', 'Anne'); // الاستدعاء الثاني`} />

        <p className="text-lg leading-relaxed mb-4">
          في هذه النسخة المعدلة، إذا لم يتم توفير المعامل الثاني، فسيتم تعيينه إلى 'Anne' بشكل افتراضي.
        </p>
      </section>


      {/* إرجاع قيمة */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">إرجاع قيمة</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          المبدأ بسيط (لكن الممارسة قد تكون أكثر تعقيدًا في بعض الأحيان). لإرجاع نتيجة، فقط اكتب جملة <code>return</code> متبوعة بالتعبير المراد إرجاعه. لاحظ أنك لا تحتاج إلى تضمين التعبير بين الأقواس.
        </p>
        <CodeBlock code={`function square(number) {
var result = number * number;
return result;}`} />
        <p className="text-lg leading-relaxed mb-4">
          في هذه الحالة، تقوم باستدعاء الدالة وتعيينها إلى متغير سيخزن النتيجة التي ترجعها الدالة:
        </p>
        <CodeBlock code={`var result2 = square(5); // يُرجع 25`} />
        <p className="text-lg leading-relaxed mb-4">
          المتغير الذي يخزن القيمة المرجعة لا يحتاج أن يكون بنفس اسم المتغير الذي يلي جملة <code>return</code>. جملة <code>return</code> اختيارية، ويمكن أن تحتوي الدالة على عدة جمل <code>return</code> ضمن نفس الدالة، على سبيل المثال في كتلة شرطية حيث يتم إرجاع شيء في كل حالة.
        </p>
      </section>

      {/* نطاق المتغيرات */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">نطاق المتغيرات</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          مع الدوال، يصبح الاستخدام الصحيح للمتغيرات المحلية والعالمية مهمًا جدًا. المتغير الذي يتم الإعلان عنه داخل دالة باستخدام الكلمة المفتاحية <code>var</code> سيكون نطاقه محدودًا بتلك الدالة. لا يمكن استخدامه في مكان آخر في السكربت: إنه متغير محلي.
        </p>
        <CodeBlock code={`function square(number) {
var result = number * number;
}`} />
        <p className="text-lg leading-relaxed mb-4">
          ومع ذلك، إذا تم إعلان المتغير بشكل سياقي (دون استخدام الكلمة المفتاحية <code>var</code>) داخل دالة، يصبح نطاقه عالميًا بمجرد تنفيذ الدالة، مما يجعل جملة <code>return</code> اختيارية:
        </p>
        <CodeBlock code={`function cube(number) {
result = number * number * number;
}`} />
        <p className="text-lg leading-relaxed mb-4">
          المتغير <code>result</code> هنا هو متغير عالمي لأنه لم يُعلن باستخدام <code>var</code>.
        </p>
      </section>

      {/* تعبيرات الدوال */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">تعبيرات الدوال</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          يمكن إعلان الدالة باسم مسبوق بالكلمة المفتاحية <code>var</code>. يُسمى هذا تعبير دالة. يمكنك بعد ذلك استدعاء الدالة باستخدام اسمها:
        </p>
        <CodeBlock code={`var square = function(number) {
var result = number * number;
};`} />
        <p className="text-lg leading-relaxed mb-4">
          في هذه الحالة، يتم تخزين الدالة <code>square()</code> في المتغير <code>square</code>. يتم استخدام هذه الصيغة غالبًا للتكرار أو عند تمرير دالة كوسيط لدالة أخرى.
        </p>
      </section>

      {/* التكرار */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">التكرار</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          يمكن للدالة أن تشير إلى نفسها وتستدعي نفسها. الدالة التي تستدعي نفسها تُسمى دالة تكرارية. التكرار مشابه لحلقة في بعض الطرق: كلاهما ينفذ نفس الكود عدة مرات، وكلاهما يتطلب شرط إيقاف لمنع الحلقات أو التكرارات اللانهائية.
        </p>
        <CodeBlock code={`function boucle(x) {
if (x >= 10) 
{
      return;
}
console.log("x : " + x);
boucle(x + 1); // استدعاء تكراري
}
boucle(0); // استدعاء الدالة الأولي
`} />
        <p className="text-lg leading-relaxed mb-4">
          هذا الكود هو مثال على التكرار، حيث تستدعي الدالة نفسها حتى يتم الوصول إلى شرط الإيقاف.
        </p>
      </section>

      {/* التمرين 1 */} {/* TODO Fix this ! */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">التمرين 1</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          أنشئ الدالتين التاليتين:
        </p>
        <ul className="list-disc pl-6">
          <li><code>produit(x, y)</code> التي تُرجع حاصل ضرب المتغيرين <code>x</code> و <code>y</code> الممررين كوسائط.</li>
          <li><code>afficheImg(image)</code> التي تعرض الصورة الممررة كوسيط (مسار الصورة).</li>
        </ul>
        <p className="text-lg leading-relaxed mb-4">
          أنشئ الصفحة HTML المقابلة واستخدم خاصية <code>innerHTML</code> لعرض الصورة.
        </p>
        <CodeBlock code={`img src="img_function_pap.jpg" ;`} />
      </section>

      {/* التمرين 2 */} {/* TODO Fix this ! */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">التمرين 2 - تقسيم السلسلة</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          صمم دالة <code>strtok()</code> التي تأخذ ثلاثة معطيات <code>str1</code> و <code>str2</code> و <code>n</code> كمدخلات وتُرجع سلسلة: <code>str1</code> مكونة من قائمة من الكلمات مفصولة بحرف <code>str2</code>. تُستخدم دالة <code>strtok()</code> لاستخراج الكلمة رقم <code>n</code> من <code>str1</code>.
        </p>
        <CodeBlock code={`var str1 = "john ;doe ;new york ;10001";
console.log(strtok(str1, ";", 2)); // new york;`} />
        <p className="text-lg leading-relaxed mb-4">
          استخدم دالة <code>split()</code> لتحقيق ذلك.
        </p>
      </section>

    </div >
  );
};

export default JS09FunctionsPage;
