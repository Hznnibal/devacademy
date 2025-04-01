import { CodeBlock } from "@/components/CodeBlock/code-block";

export default function JavaScriptForms() {
  return (
    <div className="px-5 py-8 font-sans">
      <h1 className="text-3xl font-bold text-center mb-10">النماذج في HTML باستخدام JavaScript</h1>

      {/* المعلومات العامة */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">المعلومات العامة</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          مع JavaScript، تأخذ نماذج HTML بُعدًا جديدًا تمامًا. يتيح لك JavaScript الوصول إلى كل عنصر من عناصر النموذج، قراءة أو كتابة القيم، وربط معالجات الأحداث لتعزيز التفاعل في صفحاتك.
        </p>
      </section>

      {/* إعلان النموذج */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">إعلان النموذج</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          يتم إعلان النموذج في HTML باستخدام وسم <code>&lt;form&gt;</code>. قد يتضمن النموذج سمات مثل <code>name</code> و <code>id</code>، والتي تعد ضرورية للوصول عبر JavaScript.
          بالإضافة إلى ذلك، تعتبر سمات <code>action</code> و <code>method</code> اختيارية إذا لم يتم إجراء اتصال مع الخادم.
        </p>
        <p className="text-lg">
          مثال على إعلان النموذج:
        </p>
        <CodeBlock code={`<form id="myForm" name="myForm">
<!-- العناصر داخل النموذج هنا -->
</form>`} />
      </section>

      {/* الوصول إلى عناصر النموذج */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">الوصول إلى النموذج وعناصره</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          في JavaScript، يمكن الوصول إلى عناصر النموذج من خلال كائن الوثيقة بطرق متعددة، مثل:
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li><code>document.nom_du_formulaire</code></li>
          <li><code>document.forms[0]</code> – الوصول إلى النموذج الأول في الوثيقة.</li>
          <li><code>document.forms['nom_du_formulaire']</code> – الوصول إلى النموذج بواسطة اسمه.</li>
          <li><code>document.getElementById('idElt')</code> – الوصول إلى عنصر بواسطة معرفه.</li>
          <li><code>document.getElementsByName('nameElt')</code> – الوصول إلى جميع العناصر التي تحمل الاسم المحدد.</li>
        </ul>
      </section>

      {/* عناصر التحكم في النموذج */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">عناصر التحكم في النموذج</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          يُستخدم JavaScript على نطاق واسع للتحقق من صحة نماذج HTML على جانب العميل. يوفر تجربة أسرع وأكثر تفاعلية مقارنة بالتحقق من الخادم. ومع ذلك، من الضروري أيضًا التحقق من صحة النموذج على الخادم في حالة تعطيل المستخدم لـ JavaScript.
        </p>
        <p className="text-lg">
          يمكن إجراء التحقق من صحة النموذج باستخدام معالجات الأحداث مثل <code>onClick</code>، <code>onBlur</code>، <code>onSubmit</code>، و <code>onReset</code>، أو باستخدام طرق مثل <code>submit()</code> و <code>reset()</code>.
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li><strong>submit()</strong> – يتحقق من صحة النموذج ويقدمه.</li>
          <li><strong>reset()</strong> – يعيد تعيين عناصر النموذج إلى قيمها الأولية.</li>
        </ul>
      </section>

      {/* مثال على حدث onSubmit */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">حدث onSubmit</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          يتم تفعيل حدث <code>onSubmit</code> عند النقر على زر إرسال النموذج أو عند استدعاء طريقة <code>submit()</code>. يمكنه إرجاع قيمة منطقية لتحديد ما إذا كان يجب إرسال النموذج أم لا.
        </p>
        <p className="text-lg">
          المثال 1: منع إرسال النموذج:
        </p>
        <CodeBlock code={`<html>
<head>
  <script>
      function checkForm(f) {
          alert("التحقق من الحقل: " + f.elements['field'].value);
          return false; // لا يتم إرسال النموذج
      }
  </script>
</head>
<body>
  <form action="" id="form1" onSubmit="return checkForm(this);">
      <input type="text" name="field" value="test" />
      <input type="submit" value="إرسال" />
  </form>
</body>
</html>
`} />

        <p className="text-lg">
          في هذا المثال، يتم اعتراض إرسال النموذج بواسطة حدث <code>onSubmit</code>، الذي يستدعي وظيفة <code>checkForm()</code>. لم يتم إرسال النموذج لأن الوظيفة تعود بـ <code>false</code>.
        </p>

        <p className="text-lg">
          المثال 2: عرض القيم المدخلة قبل الإرسال:
        </p>
        <CodeBlock code={`<!DOCTYPE html>
<html>
  <head>
      <title>اعتراض التحقق من صحة النموذج</title>
      <script>
          function checkForm(f) {
              alert("اسمك هو: " + f.elements['name'].value + " " + f.elements['firstname'].value);
              return false; // لا يتم إرسال النموذج
          }
      </script>
  </head>
  <body>
      <h2>اعتراض التحقق من صحة النموذج</h2> <div className="border-b border-gray-300 mb-6"></div>
      <form id="form1" name="form1" onSubmit="return checkForm(this);">
          <input type="text" name="name" value="Dupont" />
          <input type="text" name="firstname" value="Eric" />
          <input type="submit" id="idSubForm1" name="subForm1" value="تسجيل الدخول" />
      </form>
  </body>
</html>
`} />

        <p className="text-lg">
          يحدد بيان <code>return</code> في حدث <code>onSubmit</code> ما إذا كان سيتم إرسال النموذج بناءً على القيمة المرجعية لوظيفة <code>checkForm()</code>.
        </p>
      </section>

      {/* مناطق النصوص */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">مناطق النصوص (text و textarea)</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          تتيح هذه العناصر للمستخدم إدخال نص متعدد الأسطر. الخصائص الأكثر شيوعاً هي:
        </p>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">الخاصية</th>
              <th className="border px-4 py-2 text-left">الوصف</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2"><code>name</code></td>
              <td className="border px-4 py-2">تحدد الاسم الذي يمكن من خلاله الوصول إلى التحكم.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>defaultValue</code></td>
              <td className="border px-4 py-2">تحدد القيمة الافتراضية المعروضة في منطقة النص.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>value</code></td>
              <td className="border px-4 py-2">تحدد القيمة الحالية لمنطقة النص، سواء التي تم إدخالها من قبل المستخدم أو القيمة الافتراضية إذا لم يتم إدخال شيء.</td>
            </tr>
          </tbody>
        </table>
        <p className="text-lg">
          ملاحظة: جميع قيم الحقول هي سلاسل نصية. بالنسبة للقيم الرقمية، تأكد من استبدال الفواصل بالنقاط.
        </p>
      </section>

      {/* أزرار الاختيار (Radio Buttons) */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">أزرار الاختيار (radio)</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          تسمح أزرار الاختيار للمستخدم باختيار خيار واحد من مجموعة. الخصائص لأزرار الاختيار هي:
        </p>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">الخاصية</th>
              <th className="border px-4 py-2 text-left">الوصف</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2"><code>name</code></td>
              <td className="border px-4 py-2">تحدد اسم التحكم. تشترك جميع أزرار الاختيار في نفس الاسم.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>index</code></td>
              <td className="border px-4 py-2">الترتيب أو الترتيب الرقمي لزر الاختيار، بدءاً من 0.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>checked</code></td>
              <td className="border px-4 py-2">تحدد الحالة الحالية لزر الاختيار (محدد أو غير محدد).</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>defaultChecked</code></td>
              <td className="border px-4 py-2">تحدد الحالة الافتراضية لزر الاختيار (ما إذا كان محدداً افتراضياً).</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>value</code></td>
              <td className="border px-4 py-2">تحدد قيمة زر الاختيار.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* أزرار الاختيار المتعدد (Checkbox Buttons) */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">أزرار الاختيار المتعدد (checkbox)</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          تسمح أزرار الاختيار المتعدد للمستخدمين باختيار عدة خيارات. الخصائص لأزرار الاختيار المتعدد هي:
        </p>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">الخاصية</th>
              <th className="border px-4 py-2 text-left">الوصف</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2"><code>name</code></td>
              <td className="border px-4 py-2">تحدد اسم التحكم. يجب أن يكون لكل مربع اختيار اسم فريد.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>checked</code></td>
              <td className="border px-4 py-2">تحدد ما إذا كان مربع الاختيار محدداً أم لا.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>defaultChecked</code></td>
              <td className="border px-4 py-2">تحدد الحالة الافتراضية لمربع الاختيار عندما يتم عرضه لأول مرة (محدد أو غير محدد).</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* قائمة الاختيار (Select List) */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">قائمة الاختيار (select)</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          قائمة الاختيار هي قائمة منسدلة حيث يمكن للمستخدمين اختيار خيار. الخصائص لقوائم الاختيار هي:
        </p>
        <table className="min-w-full  table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">الخاصية</th>
              <th className="border px-4 py-2 text-left">الوصف</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2"><code>name</code></td>
              <td className="border px-4 py-2">تحدد اسم التحكم في قائمة الاختيار.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>length</code></td>
              <td className="border px-4 py-2">تحدد عدد العناصر في قائمة الاختيار.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>selectedIndex</code></td>
              <td className="border px-4 py-2">تحدد الفهرس (بداية من 0) للخيار المحدد حالياً.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>defaultSelected</code></td>
              <td className="border px-4 py-2">تحدد أي خيار يتم تحديده بشكل افتراضي.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* استخدام 'this' */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">استخدام 'this'</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          الكلمة المفتاحية <code>this</code> تشير إلى الكائن الحالي في JavaScript. تُستخدم عادة في عناصر النماذج للإشارة إلى النموذج نفسه أو عنصر معين داخل النموذج.
        </p>
        <p className="text-lg">
          مثال على استخدام <code>this</code> في إرسال النموذج:
        </p>
        <CodeBlock code={`<form name="form3">
  <input type="radio" name="choice" value="1" />الاختيار رقم 1<br />
  <input type="radio" name="choice" value="2" />الاختيار رقم 2<br />
  <input type="radio" name="choice" value="3" />الاختيار رقم 3<br />
  <input type="button" name="but" value="ما هو اختيارك؟" onClick="getChoice(this.form)" />
</form>
`} />
        <p className="text-lg">
          في هذا المثال، <code>this.form</code> تشير إلى كائن النموذج (form3)، مما يمنع أي لبس مع أسماء النماذج الأخرى.
        </p>
        <p className="text-lg">
          بالإضافة إلى ذلك، يمكن استخدام <code>this</code> لإنشاء خصائص لكائن:
        </p>
        <CodeBlock code={`function book(author, publisher, price) {
    this.author = author;
    this.publisher = publisher;
    this.price = price;
}

var b1 = new book("myAuthor", "myPublisher", 15.0);
document.write("مؤلفي '" + b1.author + "' يكلف " + b1.price + " دولارات.");
`} />
      </section>

      {/* التمارين */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">التمارين</h2>
        <div className="border-b border-gray-300 mb-6" />
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>أنشئ نموذج HTML يحتوي على حقول إدخال مختلفة من المستخدم.</li>
          <li>نفذ التحقق من صحة لكل حقل في النموذج.</li>
          <li>اعرض رسائل خطأ في حال كان الإدخال غير صحيح.</li>
        </ul>
      </section>

      {/* التعليمات */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">التعليمات</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          في هذا التمرين، ستقوم بإنشاء نموذج اتصال باستخدام HTML مع التحقق من الصحة التالي:
        </p>
        <ol className="list-decimal list-inside text-lg space-y-2">
          <li>حقل "الشركة" يجب أن يحتوي على حرف واحد على الأقل.</li>
          <li>حقل "الشخص المسؤول" يجب أن يحتوي على حرف واحد على الأقل.</li>
          <li>حقل "الرمز البريدي" يجب أن يحتوي على 5 أرقام بالضبط.</li>
          <li>حقل "المدينة" يجب أن يحتوي على حرف واحد على الأقل.</li>
          <li>حقل "البريد الإلكتروني" يجب أن يحتوي على الرمز "@"</li>
        </ol>
      </section>

      {/* كود النموذج */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">نموذج الاتصال</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          إليك مثال على كود HTML لنموذج الاتصال:
        </p>
        <CodeBlock code={`<form action="submitForm.php" method="POST">
  <label for="company">الشركة:</label>
  <input type="text" id="company" name="company" required minlength="1" />
  
  <label for="contact">الشخص المسؤول:</label>
  <input type="text" id="contact" name="contact" required minlength="1" />
  
  <label for="postalCode">الرمز البريدي:</label>
  <input type="text" id="postalCode" name="postalCode" pattern="\\d{5}" required />
  
  <label for="city">المدينة:</label>
  <input type="text" id="city" name="city" required minlength="1" />
  
  <label for="email">البريد الإلكتروني:</label>
  <input type="email" id="email" name="email" required />
  
  <label for="environment">البيئة التقنية:</label>
  <select id="environment" name="environment">
    <option value="Choose">اختر</option>
    <option value="HTML/CSS/JS">HTML/CSS/JS</option>
    <option value="React">React</option>
    <option value="Vue">Vue</option>
  </select>
  
  <input type="submit" value="إرسال" />
</form>`} />
      </section>

      {/* رسائل الخطأ */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">رسائل الخطأ</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          يجب عرض رسائل خطأ مناسبة عندما لا يتم استيفاء أي من قواعد التحقق. إليك بعض الأمثلة:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>إذا كان حقل "الشركة" فارغًا، اعرض: <code>يرجى إدخال اسم شركة صحيح.</code></li>
          <li>إذا كان حقل "الشخص المسؤول" فارغًا، اعرض: <code>يرجى إدخال الشخص المسؤول.</code></li>
          <li>إذا لم يحتوي حقل "الرمز البريدي" على 5 أرقام بالضبط، اعرض: <code>يرجى إدخال رمز بريدي صحيح.</code></li>
          <li>إذا كان حقل "المدينة" فارغًا، اعرض: <code>يرجى إدخال اسم المدينة.</code></li>
          <li>إذا لم يحتوي حقل "البريد الإلكتروني" على الرمز "@"، اعرض: <code>يرجى إدخال بريد إلكتروني صحيح.</code></li>
        </ul>
      </section>
    </div >
  );
}
