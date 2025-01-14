import { CodeBlock } from "@/components/CodeBlock/code-block";

export default function JSIntegrationDemo() {
  return (
    <div className="px-5 py-8 font-sans">

      <h1 className="text-3xl font-bold text-center mb-10">JS 13: دمج جافا سكريبت في صفحة ويب</h1>

      {/* مقدمة */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">نظرة عامة</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          هناك عدة طرق لدمج جافا سكريبت في صفحة ويب. هذه الطرق مشابهة لتلك المستخدمة لدمج CSS. دعونا نستعرضها أدناه:
        </p>
      </section>

      {/* الدمج المباشر في وسوم HTML */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">الدمج المباشر في وسوم HTML</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          يمكن تنفيذ كود جافا سكريبت مباشرة داخل وسوم HTML باستخدام خصائص الأحداث مثل <code>onClick</code>، <code>onMouseOver</code>، وما إلى ذلك.
          ومع ذلك، فإن هذه الطريقة أصبحت غير مستحسنة الآن لأنها تخلط بين HTML وجافا سكريبت.
        </p>
        <CodeBlock code={`<html>
<head>
 <title>عنوان الملف</title>
</head>
<body>
 <a href="page.html" title="عرض الصفحة" onclick="alert('تم النقر على الرابط!');"></a>
</body>
</html>`} />
      </section>

      {/* الدمج عبر وسم <script> */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">الدمج عبر وسم &lt;script&gt;</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          يمكن أيضًا وضع كود جافا سكريبت في أي مكان في صفحة الويب باستخدام وسم <code>&lt;script&gt;</code>. هذه الطريقة أيضًا أصبحت غير مستحسنة اليوم.
        </p>
        <CodeBlock code={`<html>
<head>
 <title>عنوان الملف</title>
</head>
<body>
 <a href="page.html" title="عرض الصفحة"></a>
 <script>alert('مرحبًا بالعالم!');</script>
</body>
</html>`} />
      </section>

      {/* الدمج عبر ملف خارجي */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">الدمج عبر ملف خارجي</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          الممارسة الموصى بها هي كتابة جافا سكريبت في ملف منفصل بامتداد <code>.js</code>. هذا يسمح بكتابة كود أكثر نظافة وقابلية لإعادة الاستخدام وصيانة أسهل.
        </p>
        <CodeBlock code={`<!DOCTYPE html>
<html>
<head>
 <title>عنوان الملف</title>
</head>
<body>
 <a href="page.html" title="عرض الصفحة"></a>
 <script src="script.js"></script>
</body>
</html>`} />
        <p className="text-lg leading-relaxed mb-4">
          الخاصية <code>src</code> تحدد المسار إلى الملف الخارجي، والذي يمكن أن يكون مسارًا نسبيًا
          (مثل <code>assets/js/script.js</code>) أو عنوان URL مطلق (مثل <code>https://code.jquery.com/jquery-3.3.1.js</code>).
        </p>
      </section>

      {/* التمارين */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">التمارين</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          اتبع الخطوات التالية للتدرب على دمج جافا سكريبت:
        </p>
        <ol className="list-decimal list-inside text-lg space-y-4">
          <li>
            انسخ الكود التالي إلى محرر النصوص المفضل لديك واحتفظ به كملف HTML:
            <CodeBlock code={`<!DOCTYPE html>
<html>
<head>
 <title>أول سكربت لي</title>
 <script>
    alert("مرحبًا!");
    console.log("مرحبًا من وحدة التحكم!");
    document.write("مرحبًا بالعالم!");
 </script>
</head>
<body>
 <!-- أضف كود جافا سكريبت هنا للعنوان -->   
 <p>لا شيء لإضافته هنا.</p>  
</body>
</html>`} />
          </li>
          <li>افتح الملف HTML في متصفح الويب ولاحظ ما يحدث في الصفحة وفي وحدة التحكم.</li>
          <li>
            أنشئ ملف جافا سكريبت جديدًا باسم <code>exercise1.js</code>. انقل كود جافا سكريبت من الملف HTML إلى الملف الخارجي الجديد.
          </li>
          <li>
            اربط الملف الخارجي لجافا سكريبت بالملف HTML باستخدام وسم <code>&lt;script&gt;</code> في نهاية وسم <code>&lt;body&gt;</code>.
          </li>
          <li>
            عدل كود جافا سكريبت لتكرار عنوان الصفحة في وسم <code>&lt;body&gt;</code> باستخدام <code>document.write()</code>. أضف وسوم HTML داخل معلمة السلسلة.
          </li>
          <li>
            جرب تمرير كود HTML كمعلمة إلى دالة <code>alert()</code>. ماذا تلاحظ؟
          </li>
        </ol>
      </section>
    </div>
  );
}
