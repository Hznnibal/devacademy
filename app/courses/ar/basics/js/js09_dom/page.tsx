import { CodeBlock } from "@/components/CodeBlock/code-block";

export default function JS11DOMAndObjects() {
  return (
    <div className="px-5 py-8 font-sans">

      <h1 className="text-3xl font-bold text-center mb-10">JS 11: الـ DOM والكائنات</h1>

      {/* المقدمة */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">المقدمة</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          JavaScript هي لغة تعتمد على الكائنات*. بالنسبة لـ JavaScript، تعتبر صفحة الويب "وثيقة"، وكل عنصر (علامات HTML وسماتها، بالإضافة إلى نافذة المتصفح) في هذه الوثيقة هو كائن. يُطلق على هذا التمثيل الكائني اسم "نموذج كائن الوثيقة" أو الـ D.O.M.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          الـ DOM يمثل هيكل الشجرة لصفحة الويب، وهو تسلسل هرمي حيث كل مستوى هو عقدة قد تحتوي على عناصر آباء أو أبناء.
          الكائن الافتراضي (والذي هو الوالد لجميع العناصر الأخرى) هو كائن <code>document</code>.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          كل شيء هو كائن في JavaScript، على سبيل المثال:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>السلاسل النصية، الأرقام، والقيم البوليانية (إما ككائنات أو كقيم بدائية تُعامل ككائنات)</li>
          <li>الدوال</li>
          <li>المصفوفات</li>
          <li>التواريخ</li>
          <li>المتصفح (<code>Navigator</code>)</li>
          <li>النافذة (<code>Window</code>)</li>
          <li>الشاشة (<code>Screen</code>)</li>
          <li>الموقع (<code>Location</code>)</li>
          <li>سجل التصفح (<code>History</code>)</li>
          <li>التعبيرات العادية (<code>Regexp</code>)</li>
        </ul>
        <p className="text-sm italic">
          *بالنسبة للأنصار المتشددين، JavaScript ليست لغة كائنية تمامًا مثل C++ أو Java. إنها توصف بشكل أكثر دقة بأنها لغة تعتمد على الكائنات.
        </p>
      </section>

      {/* تسلسل الكائنات */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">تسلسل الكائنات</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          تقوم JavaScript بتقسيم صفحة الويب إلى كائنات مشتقة من عناصر HTML وتسمح لك بالوصول إلى هذه الكائنات، واسترجاع المعلومات منها، والتلاعب بها.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          إليك توضيح لتسلسل الكائنات في صفحة ويب محملة:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>كائن <code>window</code> يمثل نافذة المتصفح.</li>
          <li>كائن <code>document</code> يمثل الوثيقة HTML داخل النافذة.</li>
          <li>كائن <code>form</code> يمثل نموذج HTML داخل الوثيقة.</li>
          <li>داخل النموذج، تمثل الكائنات مثل <code>radio</code> و<code>button</code> و<code>text</code> عناصر النموذج.</li>
        </ul>
        <p className="text-lg leading-relaxed mb-4">
          للوصول إلى كائن، يجب تحديد المسار الكامل له من الحاوية الخارجية إلى الكائن المرجعي.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          على سبيل المثال، من أجل زر الراديو "week":
        </p>
        <CodeBlock code={`var radio = document.forms[0].elements[0];`} />
        <p className="text-lg leading-relaxed mb-4">
          لاسترجاع كائن باستخدام معرفه:
        </p>
        <CodeBlock code={`var elt = document.getElementById("elementID");`} />
        <p className="text-lg leading-relaxed mb-4">
          لاسترجاع الكائنات باستخدام خاصية الاسم:
        </p>
        <CodeBlock code={`var elt = document.getElementsByName("elementName");`} />
      </section>

      {/* خصائص الكائنات */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">خصائص الكائنات</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          الخاصية هي سمة أو ميزة للكائن. على سبيل المثال، عجلة القيادة في السيارة يمكن أن تكون خشبية أو جلدية، بينما للكتاب خصائص مثل المؤلف، والناشر، والعنوان، وISBN.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          للوصول إلى خاصية في JavaScript، استخدم الصيغة:
        </p>
        <CodeBlock code={`objectName.propertyName`} />
        <p className="text-lg leading-relaxed mb-4">
          على سبيل المثال، للتحقق مما إذا كان زر الراديو محددًا:
        </p>
        <CodeBlock code={`document.forms[0].elements[0].checked`} />
      </section>

      {/* خاصية innerHTML */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">خاصية innerHTML</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          تقوم هذه الخاصية باسترجاع كود HTML الفرعي لعنصر HTML أو تعديل محتواه.
        </p>
        <CodeBlock code={`<div id="idDiv">
  <p>أنا فقرة في div</p>
</div>
<script>
  document.getElementById('idDiv').innerHTML = "<h3>عنوان</h3>";
</script>`} />
      </section>

      {/* خاصية القيمة */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">خاصية القيمة (value)</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          تقوم هذه الخاصية باسترجاع أو تعديل قيمة حقل نموذج.
        </p>
        <CodeBlock code={`<input type="text" id="txtBox">
<script>
  document.getElementById('txtBox').value = 53;
</script>`} />
      </section>

      {/* نموذج كائن المستند (DOM) */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">نموذج كائن المستند (DOM)</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          نموذج كائن المستند (DOM) هو نموذج مرجعي تنظيمي للكائنات المختلفة التي تشكل صفحة الويب.
          لقد قامت W3C بتعريف DOM قياسي يسمى DOM المستوى 0، والذي تدعمه جميع المتصفحات منذ Internet Explorer 5.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          توفر المتصفحات مجموعة من الوظائف لتمكين JavaScript من الوصول إلى عناصر DOM. تعمل JavaScript كواجهة للكائنات الداخلية للمتصفح.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          يسمح نموذج DOM الخاص بـ W3C بالوصول إلى جميع عناصر المستند، في حين أن DOM الخاص بالمتصفح قد لا يسمح بالوصول إلى محتوى المستند بأكمله.
        </p>
      </section>

      {/* نموذج كائن المتصفح */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">نموذج كائن المتصفح</h2>
        <div className="border-b border-gray-300 mb-6" />
        <h3 className="text-xl font-semibold">كائن النافذة</h3>
        <p className="text-lg leading-relaxed mb-4">
          يشير كائن <code>window</code> إلى نافذة المتصفح. يشمل:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><code>Anchors[]</code>: مصفوفة من العلامات المرجعية (&lt;a&gt;).</li>
          <li><code>Links[]</code>: مصفوفة من الروابط (سمات href في العلامات &lt;a&gt; و &lt;area&gt;).</li>
          <li><code>Embeds[]</code>: مصفوفة من الكائنات المتعددة الوسائط (&lt;embed&gt;).</li>
        </ul>

        {/* مثال */}
        <h3 className="text-xl font-semibold">مثال</h3>
        <CodeBlock code={`<!DOCTYPE html>
<html>
<head>
    <title>مثال DOM</title>
    <script>
        function testRadio() {
            var radios = document.getElementsByName("btnRadChoice");
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    document.getElementById("txtBox1").value = radios[i].value;
                }
            }
        }
    </script>
</head>
<body>
    <form name="frmChoice">
        <input type="radio" name="btnRadChoice" value="week" checked> أسبوع
        <br>
        <input type="radio" name="btnRadChoice" value="weekend"> عطلة نهاية الأسبوع
        <br>
        <input type="button" name="btn" value="اختيار" onclick="testRadio();">
        <br>
        <input id="txtBox1" type="text" name="txtChoice" value="">
    </form>
</body>
</html>`} />
      </section>

      {/* ميزات كائن النافذة */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">ميزات كائن النافذة</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          يوفر كائن <code>window</code> طرقًا وخصائص للتفاعل مع نافذة المتصفح.
        </p>
        <h3 className="text-xl font-semibold">إنشاء نافذة جديدة</h3>
        <p className="text-lg leading-relaxed mb-4">
          استخدم الصيغة التالية لإنشاء نافذة جديدة:
        </p>
        <CodeBlock code={`var myWindow = window.open(url, name, features, replace);`} />
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><strong>url</strong>: عنوان URL للصفحة لعرضها.</li>
          <li><strong>name</strong>: اسم النافذة الجديدة.</li>
          <li><strong>features</strong>: اختياري. قائمة مفصولة بفواصل من ميزات النافذة.</li>
          <li><strong>replace</strong>: اختياري. يحدد ما إذا كانت النافذة الجديدة ستستبدل الحالية في تاريخ المتصفح.</li>
        </ul>

        <h3 className="text-xl font-semibold">ميزات النافذة</h3>
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">الميزة</th>
              <th className="border border-gray-300 px-4 py-2">الوصف</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">toolbar</td>
              <td className="border border-gray-300 px-4 py-2">عرض أو إخفاء شريط الأدوات (نعم/لا).</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">location</td>
              <td className="border border-gray-300 px-4 py-2">عرض أو إخفاء شريط العناوين (نعم/لا).</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">width</td>
              <td className="border border-gray-300 px-4 py-2">عرض النافذة بالبكسل.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">height</td>
              <td className="border border-gray-300 px-4 py-2">ارتفاع النافذة بالبكسل.</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-semibold">إغلاق نافذة</h3>
        <p className="text-lg leading-relaxed mb-4">
          استخدم طريقة <code>close()</code> لإغلاق نافذة:
        </p>
        <CodeBlock code={`myWindow.close();`} />
      </section>

      {/* المؤقتات */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">المؤقتات</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          كائن <code>window</code> يوفر ميزة المؤقت لتنفيذ دالة بعد تأخير معين.
        </p>
        <CodeBlock code={`var timerId = setTimeout("functionToCall()", delayInMilliseconds);`} />
        <p className="text-lg leading-relaxed mb-4">
          لإلغاء المؤقت قبل تنفيذه، استخدم:
        </p>
        <CodeBlock code={`clearTimeout(timerId);`} />
      </section>

      {/* كائن المتصفح */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">كائن المتصفح</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          كائن <code>navigator</code> يوفر القدرة على التعرف على المتصفح وخصائصه مثل الإصدار والنظام الأساسي.
          هذا مفيد لضمان توافق الصفحة عبر المتصفحات المختلفة.
        </p>

        <h3 className="text-xl font-semibold">الخصائص الرئيسية</h3>
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">الخاصية</th>
              <th className="border border-gray-300 px-4 py-2">الوصف</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">appCodeName</td>
              <td className="border border-gray-300 px-4 py-2">يُرجع اسم كود المتصفح.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">appName</td>
              <td className="border border-gray-300 px-4 py-2">يُرجع اسم العلامة التجارية للمتصفح.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">appVersion</td>
              <td className="border border-gray-300 px-4 py-2">يُرجع معلومات عن الإصدار، النظام، واللغة.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">userAgent</td>
              <td className="border border-gray-300 px-4 py-2">يُرجع تفاصيل عن سلسلة وكيل المستخدم للمتصفح.</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-semibold">مثال</h3>
        <CodeBlock code={`<!DOCTYPE html>
<html>
<head>
    <title>مثال كائن المتصفح</title>
</head>
<body>
    <script>
        var version = navigator.appVersion;
        console.log("اسم كود المتصفح: " + navigator.appCodeName);
        console.log("علامة المتصفح: " + navigator.appName);
        console.log("تفاصيل الإصدار: " + version);
        console.log("وكيل المستخدم: " + navigator.userAgent);

        if (version.indexOf('Win') > -1) {
            console.log("أنت تستخدم نظام Windows.");
        }

        if (navigator.userAgent.indexOf('Firefox') > -1) {
            console.log("أنت تستخدم Firefox.");
        } else if (version.indexOf('Chrome') > -1) {
            console.log("أنت تستخدم Chrome.");
        } else if (version.indexOf('MSIE') > -1) {
            console.log("أنت تستخدم Internet Explorer.");
        } else {
            console.log("متصفح غير معروف.");
        }
    </script>
</body>
</html>`} />
      </section>

      {/* كائن الموقع */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">كائن الموقع</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          كائن <code>location</code> يوفر معلومات عن عنوان URL للصفحة الحالية.
        </p>

        <h3 className="text-xl font-semibold">الطرق الرئيسية</h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><code>reload()</code>: إعادة تحميل الصفحة الحالية.</li>
          <li><code>replace(url)</code>: تحميل صفحة جديدة بالـ URL المحدد.</li>
        </ul>

        <h3 className="text-xl font-semibold">الخصائص الرئيسية</h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><code>hostname</code>: اسم المجال للمضيف.</li>
          <li><code>href</code>: عنوان URL الكامل.</li>
          <li><code>pathname</code>: المسار لعنوان URL.</li>
          <li><code>port</code>: رقم المنفذ للمضيف.</li>
          <li><code>protocol</code>: البروتوكول المستخدم (مثل "http:" أو "https:").</li>
        </ul>
      </section>

      {/* كائن التاريخ */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">كائن التاريخ</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          كائن <code>history</code> يسمح بالتنقل عبر تاريخ الجلسة للمتصفح.
        </p>

        <h3 className="text-xl font-semibold">الطرق الرئيسية</h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><code>back()</code>: تحميل الصفحة السابقة في تاريخ الجلسة.</li>
          <li><code>forward()</code>: تحميل الصفحة التالية في تاريخ الجلسة.</li>
          <li><code>go(x)</code>: تحميل الصفحة في الفهرس المحدد في تاريخ الجلسة.</li>
        </ul>
      </section>

      {/* كائن الشاشة */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">كائن الشاشة</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          كائن <code>screen</code> يوفر معلومات عن شاشة المستخدم مثل الدقة وعمق اللون.
        </p>

        <h3 className="text-xl font-semibold">الخصائص الرئيسية</h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><code>availHeight</code>: ارتفاع الشاشة المتاحة.</li>
          <li><code>availWidth</code>: عرض الشاشة المتاح.</li>
          <li><code>colorDepth</code>: عمق اللون للشاشة.</li>
          <li><code>height</code>: ارتفاع الشاشة الكامل.</li>
          <li><code>width</code>: عرض الشاشة الكامل.</li>
        </ul>
      </section>

    </div >
  );
}
