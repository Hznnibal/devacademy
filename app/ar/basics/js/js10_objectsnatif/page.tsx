import { CodeBlock } from "@/components/CodeBlock/code-block";

export default function JSNativeObjects() {
  return (
    <div className="px-5 py-8 font-sans">

      <h1 className="text-3xl font-bold text-center mb-10">JS 12: الكائنات الأصلية</h1>

      {/* المقدمة */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">المقدمة</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          الكائنات هي مكونات أساسية في JavaScript. تتكون من الخصائص (المتغيرات) والطرق (الدوال).
        </p>
        <p className="text-lg leading-relaxed mb-4">
          تأتي JavaScript مع كائنات مدمجة خاصة بها، تعرف بـ "الكائنات الأصلية".
        </p>
      </section>

      {/* كائن السلسلة */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">كائن السلسلة</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          كائن السلسلة مفيد جدًا لمعالجة النصوص. يمكنك إنشاء كائن السلسلة كما يلي:
        </p>
        <CodeBlock code={`var str = new String("example");
var str = "example"; // أي سلسلة هي كائن سلسلة.`} />
        <p className="text-lg leading-relaxed mb-4">موقع أول حرف في السلسلة هو 0.</p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><strong>length</strong>: خاصية تشير إلى طول السلسلة.</li>
          <li><strong>charAt(int)</strong>: يعيد الحرف عند الفهرس المحدد.</li>
          <li><strong>indexOf(string, int)</strong>: يعيد موقع السلسلة الفرعية بدءًا من فهرس معين (القيمة الافتراضية هي 0).</li>
          <li><strong>lastIndexOf(string, int)</strong>: يعيد موقع السلسلة الفرعية بدءًا من فهرس معين، البحث يكون للخلف.</li>
          <li><strong>match(regExp)</strong>: يعيد مصفوفة إذا تطابق التعبير العادي مع السلسلة، أو null إذا لم يتطابق.</li>
          <li><strong>replace(regExp, string)</strong>: يستبدل التعبير المطابق بالسلسلة المعطاة.</li>
          <li><strong>substring(x, y)</strong>: يعيد جزء من السلسلة بين الموقعين x و (y-1).</li>
          <li><strong>toLowerCase()</strong>: يحول جميع الأحرف إلى حروف صغيرة.</li>
          <li><strong>toUpperCase()</strong>: يحول جميع الأحرف إلى حروف كبيرة.</li>
        </ul>
      </section>

      {/* كائن الرياضيات */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">كائن الرياضيات</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          يُستخدم كائن الرياضيات لتنفيذ العمليات الرياضية. يتم الوصول إلى طرقه وخصائصه مباشرة دون الحاجة لإنشاء مثيل.
        </p>
        <CodeBlock code={`var maxVal = Math.max(10, 20);`} />
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><strong>abs(x)</strong>: يعيد القيمة المطلقة لـ x.</li>
          <li><strong>ceil(x)</strong>: يعيد أصغر عدد صحيح أكبر من أو يساوي x.</li>
          <li><strong>floor(x)</strong>: يعيد أكبر عدد صحيح أقل من أو يساوي x.</li>
          <li><strong>round(x)</strong>: يقرب x إلى أقرب عدد صحيح.</li>
          <li><strong>max(x, y)</strong>: يعيد الأكبر من العددين.</li>
          <li><strong>min(x, y)</strong>: يعيد الأصغر من العددين.</li>
          <li><strong>pow(x, y)</strong>: يحسب x مرفوعًا للقوة y.</li>
          <li><strong>sqrt(x)</strong>: يحسب الجذر التربيعي لـ x.</li>
          <li><strong>random()</strong>: يعيد رقم عشوائي بين 0 و 1.</li>
        </ul>
      </section>

      {/* كائن التاريخ */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">كائن التاريخ</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          يُستخدم كائن التاريخ للتعامل مع التواريخ والأوقات. يمكنك إنشاء كائن التاريخ بعدة طرق:
        </p>
        <CodeBlock code={`var myDate = new Date(); // التاريخ الحالي
var myDate = new Date(milliseconds); // التاريخ منذ 1 يناير 1970
var myDate = new Date(year, month, day);
var myDate = new Date(year, month, day, hour, minute, second);`} />
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><strong>getYear()</strong>: يعيد آخر رقمين من السنة.</li>
          <li><strong>getMonth()</strong>: يعيد الشهر (من 0 إلى 11).</li>
          <li><strong>getDate()</strong>: يعيد اليوم في الشهر (من 1 إلى 31).</li>
          <li><strong>getDay()</strong>: يعيد اليوم في الأسبوع (0 للأحد).</li>
          <li><strong>getHours()</strong>: يعيد الساعة (من 0 إلى 23).</li>
          <li><strong>getMinutes()</strong>: يعيد الدقائق (من 0 إلى 59).</li>
          <li><strong>getSeconds()</strong>: يعيد الثواني (من 0 إلى 59).</li>
          <li><strong>getTime()</strong>: يعيد الوقت بالمللي ثانية منذ 1 يناير 1970.</li>
          <li><strong>toLocaleString()</strong>: يعيد التاريخ كسلسلة بتنسيق محلي.</li>
        </ul>
      </section>

      {/* مثال على كائن التاريخ */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">كائن التاريخ: مثال</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          يُستخدم كائن التاريخ للتعامل مع التواريخ والوقت. فيما يلي مثال يوضح عدة طرق لإنشاء والتعامل مع كائنات التاريخ:
        </p>
        <CodeBlock code={`<script>
var myDate1 = new Date();  // التاريخ الحالي
var myDate2 = new Date(3600 * 24 * 365 * 40); // التاريخ من 1 يناير 1970
var myDate3 = new Date(2012, 9, 19);
var myDate4 = new Date(2012, 9, 19, 10, 33, 12);
var myDate5 = new Date("Jan 1, 2000 00:00:00");

console.log('new Date(): ' + myDate1.toLocaleString());
console.log('new Date(3600 * 24 * 365 * 40): ' + myDate2.toLocaleString());
console.log('new Date(2012, 9, 19): ' + myDate3.toLocaleString());
console.log('new Date(2012, 9, 19, 10, 33, 12): ' + myDate4.toLocaleString());
console.log('new Date("Jan 1, 2000 00:00:00"): ' + myDate5.toLocaleString());

var year = 1900 + myDate1.getYear();
var month = myDate1.getMonth() + 1;
var day = myDate1.getDate();
console.log('التاريخ الحالي: ' + day + "/" + month + "/" + year);
</script>`} />
      </section>

      {/* كائن المصفوفة */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">كائن المصفوفة</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          يُتيح كائن المصفوفة لك تخزين ومعالجة قوائم البيانات. إليك بعض الأمثلة الأساسية:
        </p>
        <CodeBlock code={`var array1 = new Array(10);  // مصفوفة تحتوي على 10 عناصر فارغة
var array2 = new Array(1, 2, 3, 4);  // مصفوفة تحتوي على قيم محددة مسبقًا
array1[0] = "العنصر الأول"; // تعيين قيمة في الفهرس 0`} />
        <p className="text-lg leading-relaxed mb-4">
          المصفوفات في جافا سكريبت ديناميكية. يمكنك معالجتها باستخدام طرق مختلفة:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><strong>الطول</strong>: يُعيد عدد العناصر.</li>
          <li><strong>الانضمام (join)</strong>: يدمج العناصر في سلسلة نصية، مفصولة بالنص المحدد.</li>
          <li><strong>العكس (reverse)</strong>: يعكس ترتيب العناصر في المصفوفة.</li>
          <li><strong>الترتيب (sort)</strong>: يرتب العناصر أبجديًا.</li>
          <li><strong>الإضافة (push)</strong>: يضيف عنصرًا إلى نهاية المصفوفة.</li>
          <li><strong>الإزالة (pop)</strong>: يزيل آخر عنصر.</li>
          <li><strong>الإضافة في البداية (unshift)</strong>: يضيف عنصرًا إلى بداية المصفوفة.</li>
          <li><strong>الإزالة من البداية (shift)</strong>: يزيل أول عنصر.</li>
          <li><strong>الشريحة (slice)</strong>: يُعيد جزءًا من المصفوفة.</li>
        </ul>
      </section>

      {/* كائن الصورة */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">كائن الصورة</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          يُتيح كائن الصورة لجافا سكريبت تحميل الصور مسبقًا، مما يحسن التأثيرات البصرية ويقلل من وقت العرض.
        </p>
        <CodeBlock code={`var img1 = new Image();
img1.src = "images/logo2.gif";

<img src="images/logo1.gif" onMouseOver="this.src=img1.src;">`} />
        <p className="text-lg leading-relaxed mb-4">
          يحتوي الكائن على خصائص مثل <strong>الاسم</strong>، <strong>الارتفاع</strong>، <strong>العرض</strong>، <strong>المسافة الأفقية (hspace)</strong>، و<strong>المسافة الرأسية (vspace)</strong>.
        </p>
      </section>

      {/* تمرين */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">تمرين</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          اكتب برنامجًا يقبل القيم الرقمية (باستخدام <code>window.prompt</code>)، ويخزنها في مصفوفة، ويتوقف عندما يدخل المستخدم 0. ثم، اعرض:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>عدد القيم المدخلة.</li>
          <li>مجموع القيم.</li>
          <li>متوسط القيم.</li>
        </ul>
      </section>

    </div >
  );
}
