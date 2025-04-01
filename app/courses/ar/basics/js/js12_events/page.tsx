import { CodeBlock } from "@/components/CodeBlock/code-block";

export default function JSEventsDemo() {
  return (
    <div className="px-5 py-8 font-sans">

      <h1 className="text-3xl font-bold text-center mb-10">JS 14: الأحداث</h1>

      {/* تعريف الأحداث */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">التعريف</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          الأحداث هي إجراءات يتم تنفيذها إما بواسطة المستخدم أو بواسطة المتصفح نفسه. تتيح JavaScript إنشاء تجارب تفاعلية وديناميكية للمستخدم.
        </p>
        <p className="text-lg">
          من أمثلة الأحداث النقر على رابط، تحميل صفحة ويب، أو إرسال نموذج بالنقر على زر إرسال.
        </p>
      </section>

      {/* قائمة الأحداث */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">قائمة الأحداث</h2>
        <div className="border-b border-gray-300 mb-6" />
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">الحدث</th>
              <th className="border border-gray-300 px-4 py-2">الوصف</th>
            </tr>
          </thead>
          <tbody>
            {[
              { event: "blur", description: "عندما يفقد عنصر النموذج التركيز" },
              { event: "change", description: "عندما يتغير قيمة حقل النموذج" },
              { event: "click", description: "عندما ينقر المستخدم على زر أو رابط أو عنصر آخر" },
              { event: "focus", description: "عندما يكتسب عنصر النموذج التركيز" },
              { event: "load", description: "عندما يقوم المتصفح بتحميل الصفحة" },
              { event: "mouseover", description: "عندما يمرر المستخدم الماوس فوق عنصر" },
              { event: "mouseout", description: "عندما يترك الماوس العنصر" },
              { event: "select", description: "عندما يحدد المستخدم حقل نموذج" },
              { event: "submit", description: "عندما يرسل المستخدم النموذج" },
              { event: "unload", description: "عندما يغادر المستخدم الصفحة" },
            ].map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{item.event}</td>
                <td className="border border-gray-300 px-4 py-2">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* أمثلة عملية */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">أمثلة عملية</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          عندما يحدث حدث، تلتقط JavaScript هذا الحدث وتنفذ الشيفرة المقابلة له، وغالباً ما تكون دالة. على سبيل المثال، يمكنك:
        </p>
        <ul className="list-disc ml-8 space-y-2 text-lg">
          <li>تغيير اللون أو الحجم</li>
          <li>التحقق من صحة إدخال النموذج</li>
          <li>تحديث المحتوى أو البيانات في HTML ديناميكياً</li>
        </ul>
      </section>

      {/* معالجات الأحداث */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">معالجات الأحداث</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          يتم اعتراض أحداث JavaScript باستخدام معالجات الأحداث. يتم كتابة أسماء الأحداث بتنسيق camelCase وتسبق بـ "on". على سبيل المثال:
        </p>
        <CodeBlock code={`<p onClick="alert('OK')">انقر هنا</p>`} />
        <p className="text-lg">
          في هذا المثال، يؤدي النقر على الفقرة إلى ظهور مربع تنبيه يحتوي على الرسالة "OK".
        </p>
      </section>

      {/* الممارسات الحديثة */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">الممارسات الحديثة</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          تجنب معالجات أحداث JavaScript المضمنة مثل <code>onClick</code>. بدلاً من ذلك، استخدم الأساليب الحديثة غير التدخلية مثل
          <code>addEventListener</code> و<code>getElementById</code> أو <code>querySelector</code>. تساعد هذه الأساليب في الحفاظ على نظافة الشيفرة وفصل الاهتمامات بشكل فعال.
        </p>
      </section>

      {/* القسم العام */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">نظرة عامة</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          في JavaScript غير التدخلية، يمكن التقاط الأحداث ومعالجتها باستخدام طريقة <code>getElementById</code> التي تستهدف عنصر HTML بواسطة معرفه،
          وطريقة <code>addEventListener</code> التي تضيف مستمع حدث للعنصر. يتيح لنا ذلك فصل الشيفرة JavaScript عن HTML.
        </p>
      </section>

      {/* مثال باستخدام getElementById و addEventListener */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">مثال: استخدام getElementById و addEventListener</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          يوضح المثال التالي كيفية استخدام <code>getElementById</code> لاختيار عنصر وإضافة مستمع حدث لحدث <code>click</code>:
        </p>
        <CodeBlock code={`<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <p id="button1">انقر عليّ!</p>
    <script>
var element = document.getElementById("button1");

element.addEventListener("click", function() {
   alert("OK");
});
</script>
  </body>
</html>`} />
        <p className="text-lg">
          في هذه الحالة، لا يتم إضافة بادئة "on" إلى اسم الحدث (على سبيل المثال، <code>click</code>). عند النقر على الفقرة التي تحتوي على <code>id="button1"</code>، ستظهر الرسالة "OK" في مربع التنبيه.
        </p>
      </section>

      {/* قسم التمرين */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">التمرين</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          جرب المثال أعلاه بتنفيذه في ملف HTML خاص بك.
          راقب كيف يتم تفعيل الحدث عندما يتم النقر على العنصر، وكيف يستجيب المستمع للحدث.
        </p>
      </section>

      {/* مثال باستخدام querySelector */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">مثال: باستخدام querySelector</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          توفر طريقة <code>querySelector</code> صيغة بديلة وتحقق نفس النتيجة مثل دمج <code>getElementById</code> و
          <code>addEventListener</code>. إنها تختار أول عنصر يتطابق مع محدد CSS المعطى.
        </p>

        <CodeBlock code={`<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <button id="button1">Click me !</button>
    <script>
document.querySelector('#button1').onclick = function() {
    alert('Vous avez cliqué !');
}   
</script>
</body>
</html>`} />
        <p className="text-lg">
          في هذا المثال، سيتم تفعيل التنبيه عند النقر على الزر مع الرسالة "لقد نقرت!".
        </p>
      </section>

      {/* قسم طرق أخرى لاختيار العناصر */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">طرق أخرى لاختيار العناصر</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          هناك العديد من الطرق الأخرى لاختيار العناصر في DOM:
        </p>
        <ul className="list-disc ml-8 space-y-2 text-lg">
          <li><code>getElementsByClassName</code>: يختار العناصر التي تحتوي على فئة معينة ويعيد مجموعة من تلك العناصر.</li>
          <li><code>getElementsByTagName</code>: يختار العناصر التي تحتوي على اسم علامة معينة (مثل <code>div</code>، <code>p</code>) ويعيد مجموعة.</li>
        </ul>
        <p className="text-lg">
          ملاحظة: لا تنسَ إضافة "s" في هذه الطرق: <code>getElementsBy...</code>.
        </p>
      </section>

      {/* جدول معالجات الأحداث */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">معالجات الأحداث للكائنات المحددة</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          يوفر JavaScript معالجات أحداث لأشياء متعددة في DOM. إليك قائمة بالكائنات والأحداث المقابلة لها:
        </p>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">الكائن</th>
              <th className="border border-gray-300 px-4 py-2">العلامة</th>
              <th className="border border-gray-300 px-4 py-2">الأحداث</th>
            </tr>
          </thead>
          <tbody>
            {[
              { object: "Window", tag: "body", events: "load, unload, focus, blur, error" },
              { object: "Anchor", tag: "a", events: "click, mouseover, mouseout" },
              { object: "Form", tag: "form", events: "reset, submit" },
              { object: "Form elements", tag: "input, select, textarea", events: "click, focus, blur, change, select" },
              { object: "Image", tag: "img", events: "load, abort, error" },
            ].map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{item.object}</td>
                <td className="border border-gray-300 px-4 py-2">{item.tag}</td>
                <td className="border border-gray-300 px-4 py-2">{item.events}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* مثال MouseOver */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">مثال MouseOver</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          يمكن استخدام حدث <code>mouseover</code> لتفعيل دالة عندما يحوم المستخدم فوق رابط أو عنصر. إليك مثال:
        </p>

        <CodeBlock code={`<html>
<head>
</head>
<body>
   <a href="#" onMouseOver="message();">رسالة مهمة</a>
   <script>
   function message()
   {
      alert("مرحباً");
   }
   </script>
</body>
</html>`} />
        <p className="text-lg">
          عند التمرير فوق رابط "رسالة مهمة"، سيتم تفعيل الدالة <code>message()</code> التي تعرض مربع تنبيه مع "مرحباً".
        </p>
      </section>

      {/* قسم تغيير الصورة */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">تغيير الصورة عند المرور بالفأرة</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          باستخدام حدث <code>mouseover</code>، يمكننا تغيير صورة عندما يحوم المستخدم فوقها. يوضح الكود أدناه كيفية تغيير مصدر الصورة عند تحريك الماوس فوق الصورة أو الخروج منها.
        </p>

        <CodeBlock code={`<img src="images1.jpg" border="0" width="38" height="20" 
onMouseOver="this.src='images2.jpg'"  
onMouseOut="this.src='images1.jpg'">`} />
        <p className="text-lg">
          في هذا المثال، عندما يتم تحريك الماوس فوق الصورة، سيتم التبديل إلى صورة أخرى. حدث <code>onMouseOver</code> يغير السمة <code>src</code> للصورة، و <code>onMouseOut</code> يعيد الصورة الأصلية.
        </p>
      </section>

      {/* قسم الصورة غير المرئية */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">حيلة الصورة غير المرئية</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          هناك حيلة ممتعة تتضمن استخدام صورة غير مرئية تتطابق مع لون الخلفية (أو تكون شفافة). من خلال وضعها بعناية في مسار المستخدم، يمكنك تفعيل الإجراءات دون أن يلاحظها. فيما يلي كيفية جعل الصورة غير مرئية:
        </p>

        <CodeBlock code={`<img src="images/invisible.jpg" style="position:absolute; left:100px; top:100px; opacity:0;">`} />

        <p className="text-lg">
          عندما يمر المستخدم فوق هذه الصورة غير المرئية، يمكن تفعيل أي إجراء، مثل عرض رسالة أو تفعيل تأثير مخفي. يتم استخدام هذه التقنية غالبًا للعناصر التفاعلية الممتعة.
        </p>
      </section>

      {/* تمرين: تمرين الرقم السحري */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">تمرين الرقم السحري</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          في هذا التمرين، ستقوم بإنشاء برنامج يقوم بتوليد "رقم سحري" عشوائي. يجب على المستخدم تخمين الرقم، وسيوفر البرنامج ملاحظات إذا كان التخمين مرتفعًا جدًا أو منخفضًا جدًا.
        </p>
        <CodeBlock code={`<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Magic number</title>
  </head>
  <body>
    <div id="label1">أدخل رقمًا</div>
    <input id="textBox1" value="">
    <input type="button" id="button1" value="التحقق"> 

    <script>
      let magicNumber = Math.floor(Math.random() * 100) + 1;

      function verif() {
        const userGuess = document.getElementById('textBox1').value;
        const label = document.getElementById('label1');
        
        if (userGuess == magicNumber) {
          label.innerHTML = "مبروك، لقد وجدت الرقم السحري!";
        } else if (userGuess > magicNumber) {
          label.innerHTML = "الرقم كبير جدًا! حاول مرة أخرى.";
        } else {
          label.innerHTML = "الرقم صغير جدًا! حاول مرة أخرى.";
        }
      }

      document.getElementById('button1').addEventListener('click', verif);
    </script>
  </body>
</html>`} />

        <p className="text-lg">
          يقوم البرنامج بتوليد رقم عشوائي بين 1 و 100. يقوم المستخدم بإدخال تخمينه في مربع النص، وعند النقر على زر "التحقق"، يقوم البرنامج بمقارنة تخمينه مع الرقم السحري وعرض ما إذا كان التخمين مرتفعًا جدًا، منخفضًا جدًا، أو صحيحًا في العنصر <code>label1</code>.
        </p>
        <p className="text-lg">
          بمجرد أن يعمل هذا الإصدار، يمكنك إعادة هيكلة الكود لجعله غير مزعج عن طريق فصل JavaScript عن HTML (وتجنب استخدام سمات <code>onclick</code> المضمنة).
        </p>
      </section>
    </div >
  );
}
