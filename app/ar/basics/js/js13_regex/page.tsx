import { CodeBlock } from "@/components/CodeBlock/code-block";

export default function JSRegularExpressions() {
  return (
    <div className="px-5 py-8 font-sans">

      <h1 className="text-3xl font-bold text-center mb-10">JS 15: التعابير النمطية</h1>

      {/* مقدمة في التعابير النمطية */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">ما هي التعابير النمطية؟</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          التعبير النمطي (أو "Regex") هو تسلسل من الأحرف الذي يحدد نمط البحث. يتم استخدامها عادة لـ:
        </p>
        <ul className="list-disc pl-8">
          <li>التحقق من السلاسل النصية (على سبيل المثال، التأكد من وجود أرقام أو أحرف معينة فقط)</li>
          <li>البحث عن كلمات أو أجزاء من النص ضمن سلسلة نصية</li>
          <li>استبدال الأحرف أو الكلمات في السلسلة النصية</li>
        </ul>
        <p className="text-lg">
          تعمل التعابير النمطية كمرشح أو قيد يُطبق على سلسلة نصية إما للتحقق مما إذا كانت تتطابق مع النمط أو للتلاعب بها. توجد في العديد من لغات البرمجة (JavaScript، PHP، C#، وغيرها)، حيث يكون التنسيق عمومًا متسقًا لكن وظائف التنفيذ تختلف بين اللغات.
        </p>
      </section>

      {/* مثال على التعبير النمطي */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">مثال بسيط للتعبير النمطي</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          إليك مثال بسيط على تعبير نمطي يتحقق مما إذا كانت كلمة "javascript" تتكون فقط من حروف صغيرة:
        </p>
        <CodeBlock code={`var filter = new RegExp("^[a-z]+$");
var result = filter.test("javascript");
console.log(result);`} />
        <p className="text-lg">
          في هذا المثال:
        </p>
        <ul className="list-disc pl-8">
          <li>السطر 1 يقوم بإنشاء مرشح باستخدام <code>RegExp</code>، وهو كائن في JavaScript يأخذ نمط تعبير نمطي كسلسلة. النمط المستخدم هو <code>^[a-z]+$</code>.</li>
          <li>السطر 2 يستخدم الدالة <code>test()</code> الخاصة بكائن <code>RegExp</code> لتقييم السلسلة "javascript". يُرجع <code>true</code> لأن السلسلة تتوافق مع الشرط (حروف صغيرة فقط).</li>
        </ul>
        <p className="text-lg">
          يضمن التعبير <code>^[a-z]+$</code> أن السلسلة تتكون فقط من حروف صغيرة من A إلى Z.
        </p>
      </section>

      {/* الموارد الإضافية */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">موارد إضافية</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          إليك بعض الموارد لمساعدتك في تعلم المزيد عن التعابير النمطية:
        </p>
        <ul className="list-disc pl-8">
          <li>
            <a href="https://regexr.com/" className="text-blue-500">
              Regexr: أداة تفاعلية لاختبار وتصحيح التعابير النمطية
            </a> - أداة لتعلم وإنشاء واختبار التعابير النمطية.
          </li>
          <li>
            <a href="https://regex101.com/" className="text-blue-500">
              REGEX 101: منشئ ومختبر التعابير النمطية على الإنترنت
            </a> - أداة قوية على الإنترنت لإنشاء واختبار التعابير النمطية مع شروحات.
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions" className="text-blue-500">
              وثائق MDN: التعابير النمطية
            </a> - وثائق شاملة عن التعابير النمطية في JavaScript.
          </li>
          <li>
            <a href="https://www.regexone.com/" className="text-blue-500">
              RegexOne: تعلم التعابير النمطية من خلال دروس تفاعلية
            </a> - تقدم تمارين تفاعلية بسيطة لمساعدتك في تعلم التعابير النمطية.
          </li>
          <li>
            <a href="https://cheatography.com/davechild/cheat-sheets/regular-expressions/" className="text-blue-500">
              ورقة الغش الخاصة بالتعبيرات النمطية بواسطة DaveChild
            </a> - دليل مرجعي مفيد يتضمن الصياغة والرموز والأنماط النموذجية.
          </li>
        </ul>
      </section>

      {/* كتابة التعابير النمطية */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">كتابة التعابير النمطية</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          هناك نوعان رئيسيان من الأحرف المستخدمة في التعابير النمطية:
        </p>
        <ul className="list-disc pl-8">
          <li>
            <strong>أحرف META</strong>: أحرف خاصة مثل <code>.</code>، <code>\</code>، <code>?</code>، <code>*</code>، <code>+</code>، <code>{`{`}</code>، <code>{`}`}</code>، <code>(</code>، <code>)</code>، <code>[</code>، <code>]</code>. تُستخدم هذه لتحديد الأنماط المعقدة.
          </li>
          <li>
            <strong>الأحرف العادية</strong>: أي حرف آخر، بما في ذلك الحروف والأرقام والرموز، يتم التعامل معها حرفيًا ما لم يتم الهروب منها.
          </li>
        </ul>
        <p className="text-lg">
          على سبيل المثال، لمطابقة الحروف الأبجدية (باستثناء الحروف المُعَكَّسة)، يمكنك استخدام:
        </p>
        <CodeBlock code={`/[A-Za-z]/`} />
        <p className="text-lg">
          لضمان أن السلسلة تحتوي على حروف أبجدية فقط، يمكنك استخدام:
        </p>
        <CodeBlock code={`/^[A-Za-z]+$/`} />
        <p className="text-lg">
          هنا، <code>^</code> تعني بداية السلسلة، <code>[A-Za-z]</code> تطابق أي حرف أبجدي، <code>+</code> تعني واحد أو أكثر من الحروف السابقة، و<code>$</code> تعني نهاية السلسلة.
        </p>
      </section>

      {/* مطابقة الأرقام */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">مطابقة السلاسل الرقمية</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          لمطابقة سلسلة رقمية (أي أرقام فقط)، يمكنك استخدام:
        </p>
        <CodeBlock code={`/^[0-9]*$/`} />
        <p className="text-lg">
          يتحقق هذا التعبير النمطي من أن السلسلة تتكون فقط من الأرقام من 0 إلى 9. يمكن أيضًا استخدام الاختصار <code>\d</code> بدلاً من <code>[0-9]</code>، و<code>*</code> يعني أن عدد الأرقام يمكن أن يكون صفر أو أكثر (حتى يمكن أن تكون السلسلة فارغة).
        </p>
        <p className="text-lg">
          إذا كنت ترغب في التأكد من وجود رقم واحد على الأقل، يمكنك استبدال <code>*</code> بـ <code>+</code>.
        </p>
      </section>

      {/* التواريخ */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">التواريخ</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          للتحقق من صحة تاريخ بالصيغة <code>dd/mm/yyyy</code>، يمكننا استخدام التعبير النمطي التالي:
        </p>
        <CodeBlock code={`/^[0-9]+\/[0-9]+\/[0-9]+$/`} />
        <p className="text-lg">
          في هذا التعبير:
          <ul className="list-disc pl-8">
            <li><code>[0-9]+</code>: يمثل رقماً أو أكثر (لليوم، الشهر، والسنة).</li>
            <li><code>\/</code>: نحتاج إلى الهروب من الشرطة (/) باستخدام شرطة مائلة عكسية (<code>\</code>) لأنها تستخدم لتحديد التعبير النمطي.</li>
          </ul>
        </p>

        <p className="text-lg">
          لجعل اليوم، الشهر، والسنة أكثر مرونة (السماح برقمين أو رقم واحد لليوم والشهر، و2 أو 4 أرقام للسنة)، نستخدم هذا التعبير النمطي:
        </p>
        <CodeBlock code={`/^[0-9][0-9]?\/[0-9][0-9]?\/[0-9][0-9]([0-9][0-9])?$/`} />
        <p className="text-lg">
          النقاط الرئيسية:
        </p>
        <ul className="list-disc pl-8">
          <li><code>?</code>: يشير إلى أن الشخصية السابقة (الرقم) يمكن أن تظهر 0 أو 1 مرة.</li>
          <li><code>([0-9][0-9])?</code>: رقمان للسنة يمكن أن يكونا اختياريين، مما يسمح باستخدام الصيغة التي تحتوي على رقمين أو 4 أرقام للسنة.</li>
        </ul>

        <p className="text-lg">
          إذا كنت ترغب في استخدام فواصل أخرى (مثل الشرطة، النقطة، إلخ)، يمكنك تعديل التعبير النمطي على النحو التالي:
        </p>
        <CodeBlock code={`/(\/|-|\.)/`} />
      </section>

      {/* عناوين البريد الإلكتروني */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">عناوين البريد الإلكتروني</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          للتحقق من صحة عنوان بريد إلكتروني مثل <code>nom.prenom@site.fr</code>، يمكننا استخدام التعبير النمطي التالي:
        </p>
        <CodeBlock code={`^[a-z0-9.-]+@[a-z0-9.-]{2,}\.[a-z]{2,4}$`} />
        <p className="text-lg">
          هذا التعبير يتحقق من الأجزاء التالية من عنوان البريد الإلكتروني:
        </p>
        <ul className="list-disc pl-8">
          <li>جزء المستخدم: <code>[_a-z0-9-]+(.[_a-z0-9-]+)</code>، يسمح بالحروف الأبجدية والأرقام والشرطات السفلية.</li>
          <li>جزء اسم النطاق: <code>[a-z0-9-]+</code>، يسمح بالحروف الأبجدية والأرقام والشرطات.</li>
          <li>النطاق الأعلى (TLD): <code>(\.[a-z0-9]+)</code>، يتكون من نقطة تليها حروف أبجدية أو أرقام.</li>
        </ul>
      </section>

      {/* أرقام الهواتف */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">أرقام الهواتف</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          للتحقق من صحة أرقام الهواتف بصيغة <code>0111111111</code> (دون مسافات أو رموز):
        </p>
        <CodeBlock code={`^0[1-9]{9}$`} />
        <p className="text-lg">
          لأرقام الهواتف التي قد تحتوي على فواصل (مثل النقاط، المسافات، أو الشرطات)، استخدم هذا التعبير النمطي:
        </p>
        <CodeBlock code={`^0[1-9]([-. ]?[0-9]{2}){4}$`} />
        <p className="text-lg">
          هذا التعبير يضمن أن:
        </p>
        <ul className="list-disc pl-8">
          <li>الرقم الأول هو 0، يليه رقم من 1 إلى 9.</li>
          <li>المجموعات الأربعة التالية تتكون من فواصل اختيارية تليها رقمان (مثل <code>01-11-11-11-11</code>).</li>
        </ul>
      </section>

      {/* حالات أخرى */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">حالات أخرى</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          هنا بعض الحالات الإضافية والتعبيرات النمطية الخاصة بها:
        </p>
        <ul className="list-disc pl-8">
          <li><strong>سلسلة أبجدية رقمية:</strong> تسمح بالحروف والأرقام بما في ذلك الشرطات السفلية:
            <CodeBlock code={`/^[0-9A-Za-z]+$/`} />
          </li>
          <li><strong>رمز اللون:</strong> رمز لون سداسي عشري يبدأ بـ <code>#</code> ويتبعه أرقام أو حروف من A إلى F:
            <CodeBlock code={`/^#[0-9A-F]+$/`} />
          </li>
        </ul>
      </section>

      {/* الرموز الخاصة */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">الرموز الخاصة</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          فيما يلي أكثر الرموز الخاصة استخدامًا في التعبيرات المنتظمة:
        </p>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="text-sm font-semibold text-left ">
              <th className="px-4 py-2">الرمز</th>
              <th className="px-4 py-2">المعنى</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">\\</td>
              <td className="px-4 py-2">يُستخدم للهروب من الرمز التالي (على سبيل المثال، <code>\*</code> يعني النجم * حرفيًا).</td>
            </tr>
            <tr>
              <td className="px-4 py-2">^</td>
              <td className="px-4 py-2">يشير إلى بداية السلسلة التي يجب مطابقتها.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">$</td>
              <td className="px-4 py-2">يشير إلى نهاية السلسلة التي يجب مطابقتها.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">*</td>
              <td className="px-4 py-2">يُطابق الرمز السابق صفر أو أكثر من المرات.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">+</td>
              <td className="px-4 py-2">يُطابق الرمز السابق مرة واحدة أو أكثر.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">?</td>
              <td className="px-4 py-2">يُطابق الرمز السابق صفر أو مرة واحدة.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">(x)</td>
              <td className="px-4 py-2">يتم التقاط الرمز لاحقًا للإشارة إليه، وهو مفيد في وظائف مثل <code>exec</code>.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">|</td>
              <td className="px-4 py-2">يُطابق التعبير الذي قبله أو الذي بعده (OR المنطقية).</td>
            </tr>
            <tr>
              <td className="px-4 py-2">&#123;n&#125;</td>
              <td className="px-4 py-2">يُطابق الرمز السابق بالضبط n مرات.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">&#123;n, p&#125;</td>
              <td className="px-4 py-2">يُطابق الرمز السابق على الأقل n مرات ولكن في حدود p مرات.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">[abc]</td>
              <td className="px-4 py-2">يُطابق أي رمز داخل الأقواس (مثلًا: a أو b أو c).</td>
            </tr>
            <tr>
              <td className="px-4 py-2">[^abc]</td>
              <td className="px-4 py-2">يُطابق أي رمز باستثناء الرموز داخل الأقواس (ليس a أو b أو c).</td>
            </tr>
            <tr>
              <td className="px-4 py-2">\s</td>
              <td className="px-4 py-2">يُطابق أي رمز مسافة بيضاء (مسافة، تبويب، سطر جديد).</td>
            </tr>
            <tr>
              <td className="px-4 py-2">\S</td>
              <td className="px-4 py-2">يُطابق أي رمز باستثناء المسافة البيضاء.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">\d</td>
              <td className="px-4 py-2">يُطابق أي رقم (معادل لـ <code>[0-9]</code>).</td>
            </tr>
            <tr>
              <td className="px-4 py-2">\D</td>
              <td className="px-4 py-2">يُطابق أي رمز غير رقمي.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">\w</td>
              <td className="px-4 py-2">يُطابق أي رمز أبجدي رقمي (حروف، أرقام، وأسطوانة سفلية).</td>
            </tr>
            <tr>
              <td className="px-4 py-2">\W</td>
              <td className="px-4 py-2">يُطابق أي رمز ليس أبجديًا رقميًا أو أسطوانيًا سفلية.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* الوظائف */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">وظائف التعبير المنتظم</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          التعبيرات المنتظمة تأتي أيضًا مع العديد من الوظائف المفيدة التي تتيح لك اختبار، التلاعب، واستخراج البيانات من السلاسل.
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li>
            <strong>test()</strong> – يُرجع <code>true</code> إذا كانت السلسلة تتطابق مع التعبير المنتظم، وإلا يُرجع <code>false</code>.
            <CodeBlock code={`regex.test('string');`} />
          </li>
          <li>
            <strong>exec()</strong> – ينفذ التعبير المنتظم ويُرجع مصفوفة من المطابقات، أو <code>null</code> إذا لم يتم العثور على تطابقات.
            <CodeBlock code={`regex.exec('string');`} />
          </li>
          <li>
            <strong>match()</strong> – مشابه لـ <code>exec()</code>، ولكن يُرجع مصفوفة من المطابقات مباشرة.
            <CodeBlock code={`'string'.match(regex);`} />
          </li>
          <li>
            <strong>replace()</strong> – يستبدل التطابقات مع التعبير المنتظم بسلسلة استبدال معينة.
            <CodeBlock code={`'string'.replace(regex, 'replacement');`} />
          </li>
          <li>
            <strong>search()</strong> – يُرجع موقع أول تطابق، أو <code>-1</code> إذا لم يتم العثور على تطابق.
            <CodeBlock code={`'string'.search(regex);`} />
          </li>
          <li>
            <strong>split()</strong> – يقسم السلسلة إلى مصفوفة من السلاسل الفرعية بناءً على التعبير المنتظم.
            <CodeBlock code={`'string'.split(regex);`} />
          </li>
        </ul>
      </section>
    </div >
  );
}
