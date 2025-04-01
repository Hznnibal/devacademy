import { CodeBlock } from "@/components/CodeBlock/code-block";

const ApiPlatformCourse = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">واجهات برمجة التطبيقات باستخدام API-Platform</h1>
            <p className="text-lg mb-6">
                في هذه المرحلة، ستتعلم كيفية إنشاء واجهة برمجة تطبيقات باستخدام API-Platform. سنقوم بإنشاء نظام تعليقات للمنتجات في قاعدة البيانات الخاصة بنا.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">إنشاء جدول التعليقات</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    أولاً، سنقوم بإنشاء جدول جديد في قاعدة بيانات Northwind، يُسمى <code>comments</code>. سيتضمن هذا الجدول الخصائص التالية:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li><strong>المحتوى</strong> (نص): محتوى التعليق</li>
                    <li><strong>التاريخ</strong> (تاريخ ووقت): تاريخ إنشاء التعليق</li>
                    <li><strong>تاريخ التحديث</strong> (تاريخ ووقت): تاريخ آخر تحديث للتعليق</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">إضافة العلاقات بين الجداول</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    بمجرد إنشاء جدول <code>comments</code>، سنقوم بإنشاء العلاقات التالية:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>يمكن أن يحتوي المنتج على عدة تعليقات، ولكن كل تعليق مرتبط بمنتج واحد فقط.</li>
                    <li>يمكن للمستخدم إضافة عدة تعليقات، ولكن كل تعليق مضاف بواسطة مستخدم واحد فقط.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">تنظيم عمليات CRUD</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    الآن، لنقم بإعداد عمليات CRUD للسماح للمستخدمين بإضافة تعليقات إلى صفحة تفاصيل المنتج. ستستخدم الميزات المدمجة في API-Platform لتحقيق ذلك.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">تثبيت API-Platform</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    لتثبيت API-Platform، افتح وحدة التحكم في جذر مشروعك وشغل الأمر التالي:
                </p>
                <CodeBlock code={`composer req api`} />
                <p className="text-lg leading-relaxed mb-4">
                    للتحقق من أن المكون تم تثبيته بشكل صحيح، قم بزيارة المسار <code>/api</code> في متصفحك. يجب أن ترى العرض التالي:
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    هنا سيكون لديك الوصول إلى توثيق API.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">تعريف نقطة دخول لكيان التعليقات</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    بعد ذلك، نحتاج إلى تعريف نقطة دخول لكيان <code>التعليقات</code> لنتمكن من استرجاع التعليقات. لتحقيق ذلك، سنستخدم التعليقات التوضيحية.
                </p>
                <CodeBlock code={`<? php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CommentsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CommentsRepository::class)
 * @ApiResource()
 */
class Comments
{
    ...
}`} />
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">تحديث توثيق API</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    الآن، دعونا نقوم بتحديث توثيق API. ستجد عدة طرق للتفاعل مع التعليقات:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>استرجاع جميع التعليقات</li>
                    <li>إنشاء تعليق</li>
                    <li>استرجاع تعليق معين</li>
                    <li>حذف تعليق</li>
                    <li>تعديل تعليق</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">تصفية نقاط الدخول</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    يمكنك تصفية نقاط الدخول عن طريق تمرير معلمات في التعليقات التوضيحية. على سبيل المثال، إذا كنت ترغب فقط في الاحتفاظ بالطرق لاسترجاع جميع التعليقات أو تعليق واحد، يمكنك كتابة التالي:
                </p>
                <CodeBlock code={`/**
 * @ORM\Entity(repositoryClass=CommentsRepository::class)
 * @ApiResource(
 *     collectionOperations={"get"},
 *     itemOperations={"get"}
 * )
 */`} />
            </section>


            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">اختبار وتكوين واجهة برمجة التطبيقات (API)</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    في توثيق واجهة برمجة التطبيقات (API)، عند النقر على السطر الأول، سترى استجابة موثقة بالكامل مستخرجة من الكيان.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    النقر على <strong>جربها</strong> يظهر أن واجهة البرمجة تسترجع جميع الحقول. لمنع كشف جميع البيانات، يمكنك إنشاء مجموعات لتحديد البيانات التي تريد استرجاعها.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    للقيام بذلك، حدد في تعليقات الكيان البيانات التي تريد استرجاعها:
                </p>
                <CodeBlock code={`/**
* @ORM\Column(type="text")
* @Groups({"read:comment"})
*/`} />

                <p className="text-lg leading-relaxed mb-4">
                    التعليق <code>@Groups({"read:comment"})</code> يحدد مجموعة للخاصية، وهنا سميناها <code>read:comment</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    لعرض المجموعات المعرفة، حددها في تعليق الكلاس:
                </p>
                <CodeBlock code={`/**
 * @ORM\Entity(repositoryClass=CommentsRepository::class)
 * @ApiResource(
 *     normalizationContext={"groups"={"read:comment"}},
 *     collectionOperations={"get"},
 *     itemOperations={"get"}
 * )
 */`} />
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">التطبيق</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    قم بتحديد مجموعة للحقول التي تريد استرجاعها من الكيان، وراقب النتيجة في واجهة برمجة التطبيقات (API).
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    باستخدام التوثيق، قم بعرض النتائج مرتبة حسب تاريخ الإضافة بترتيب تنازلي.
                </p>
            </section>

            <h2 className="text-2xl font-semibold mb-2">اختبار واجهة برمجة التطبيقات باستخدام Insomnia</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg mb-6">
                في هذا القسم، سنتعرف على كيفية استخدام Insomnia لاختبار واجهة برمجة التطبيقات، تصفية النتائج، تنفيذ الترقيم، واسترجاع البيانات المرتبطة.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">اختبار بديل باستخدام برامج خارجية</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    لاختبار واجهة البرمجة، يمكنك استخدام برامج خارجية مثل Postman أو Insomnia. يتيح لك استخدام أداة أخرى المزيد من التخصيص.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    في هذا الكورس، سنستخدم Insomnia. باستخدام هذا البرنامج وتوثيقه، يمكنك تكرار النتائج من الخطوات السابقة.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    بعد إعداد Insomnia، تأكد من التحقق من الاستجابة كما هو موصوف في الأمثلة السابقة.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">إعداد فلتر بحث</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    لتصفية التعليقات حسب المنتج، قم بتعديل الرابط على النحو التالي:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code>localhost:8000/api/comments?products=2</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">
                    إذا قمت بتنفيذ هذا الطلب وحصلت على نتيجة خاطئة، ستحتاج إلى تعريف فلتر أولاً.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    للقيام بذلك، أضف فلتر بحث في تعليقات الكيان <code>Comments</code>:
                </p>
                <CodeBlock code={`@ApiFilter(SearchFilter::class, properties={"product": "exact"})`} />

                <p className="text-lg leading-relaxed mb-4">
                    إذا واجهت خطأ، لا تنسَ استيراد <code>SearchFilter</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    بعد تطبيق ذلك، قم بتجربة الطلب مرة أخرى باستخدام الرابط التالي في Insomnia:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code>localhost:8000/api/comments?product=2</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">
                    قم بتعديل الرابط بناءً على تكوين الخادم ومعرف المنتج (اختر منتجًا يحتوي على تعليقات متعددة).
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">تطبيق الترقيم</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    لمنع عرض كميات كبيرة من البيانات، توفر API-Platform نظام ترقيم.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    لتطبيق الترقيم، ما عليك سوى إضافة ما يلي في تعليق <code>@ApiResource</code>:
                </p>
                <CodeBlock code={`/**
 * @ApiResource(
 *     paginationItemsPerPage=2
 * )
 */`} />

                <p className="text-lg leading-relaxed mb-4">
                    جرب مرة أخرى لملاحظة النتيجة. سترى فقط تعليقين لكل صفحة. استبدال <code>application/json</code> بـ <code>application/ld+json</code> سيمنحك معلومات إضافية، مثل إجمالي الصفحات، الصفحة التالية، والصفحة السابقة.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    للوصول إلى الصفحة التالية، استخدم الرابط التالي في Insomnia:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code>localhost:8000/api/comments?id_product=2&page=2</code>
                </pre>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">استرجاع البيانات المرتبطة</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    سيكون من المفيد استرجاع اسم المستخدم الذي نشر كل تعليق.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    لتحقيق ذلك، انتقل إلى الكيان <code>User.php</code> وفي التعليقات التوضيحية لخاصية <code>email</code>، أضف نفس المجموعة المستخدمة في خصائص كيان <code>Comments</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    بعد إجراء هذا التغيير، قم بالاختبار مرة أخرى ويجب أن ترى استجابة مشابهة لما يلي:
                </p>
                <CodeBlock code={`[
  {
    "id": 2,
    "content": "string",
    "date": "2020-06-23T14:30:51+00:00",
    "user": {
      "id": 2,
      "email": "azerty@aze.rty"
    }
  },
  {
    "id": 9,
    "content": "test2",
    "date": "2020-06-19T08:30:04+00:00",
    "user": {
      "id": 2,
      "email": "azerty@aze.rty"
    }
  }
]`} />
            </section>

            <p className="text-lg mb-6">
                في هذا القسم، سنستعرض كيفية استرجاع التعليقات، إضافتها، وتعديلها عبر واجهة API باستخدام Insomnia وتعليقات Symfony.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">استرجاع تعليق باستخدام معرّفه</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    في Insomnia، قم بتكرار الطلب السابق وأعد تسميته إلى <code>{`comments/{id}`}</code>. حافظ على طريقة الطلب <code>GET</code>، وعدّل عنوان URL إلى التنسيق التالي:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code>localhost:8000/api/comments/2</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">
                    هنا، قد ترغب في استرجاع اسم المنتج المرتبط بالتعليق. للقيام بذلك، قم بإنشاء مجموعة جديدة في خاصيتي <code>product</code> و<code>product_name</code> داخل كيان <code>Products.php</code>، مثل: <code>@Groups({"read:comment:full"})</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    بعد ذلك، قم بتعديل التعليق التوضيحي <code>@ApiResource</code> في كيان <code>Comments</code> لإضافة سياق التهيئة التالي:
                </p>
                <CodeBlock code={`/**
 * @ORM\Entity(repositoryClass=CommentsRepository::class)
 * @ApiResource(
 *     itemOperations={
 *      "get"={
 *          "normalization_context"={"groups"={"read:comment", "read:comment:full"}}
 *          }
 *     }
 * )
 */`} />
                <p className="text-lg leading-relaxed mb-4">
                    يتيح لك هذا الإعداد تعريف واستدعاء مجموعات مختلفة بناءً على المتطلبات. إذا لم تكن بحاجة إلى تغيير سياق التهيئة، يمكنك ببساطة إضافة التعليق <code>@Groups({"read:comment"})</code> إلى خاصية <code>product_name</code> في <code>Products.php</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    إذا كنت تستخدم نفس المجموعة عبر كيانات متعددة (مثل <code>User</code> و<code>Comments</code>)، قد تواجه مشكلة مع المراجع الدائرية. لإصلاح ذلك، تحتاج إلى تحديد عمق أقصى بإضافة <code>"enable_max_depth"=true</code> وتعليق <code>@MaxDepth(1)</code> في التعليقات التوضيحية للخصائص المناسبة داخل كيان <code>User</code>.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">إضافة تعليق</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    لإضافة تعليق جديد، قم بتكرار طريقة موجودة وقم بتغيير طريقة HTTP إلى <code>POST</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    في Insomnia، انتقل إلى علامة التبويب <code>JSON</code> وأدخل الكود التالي:
                </p>
                <CodeBlock code={`{
 "content" : "تعليق جديد",
 "date" : "2020-06-24",
 "user" : "/api/users/1"
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    هنا، الحقل <code>user</code> يتوقع معرّف مصدر دولي (IRI) لكائن المستخدم. في هذا المثال، نستخدم <code>/api/users/1</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    إذا كنت قد عرّفت مجموعات مختلفة لخصائصك، لا تنسَ إضافة السطر التالي في <code>@ApiResource</code>:
                </p>
                <CodeBlock code={`collectionOperations={
  "post"={
     "normalization_context"={"groups"={"read:comment", "read:comment:full"}}
  }
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    يجب أن تتلقى استجابة مشابهة لما يلي:
                </p>
                <CodeBlock code={`{
  "id": 24,
  "content": "تعليق جديد",
  "date": "2020-06-24T00:00:00+00:00",
  "product": {
    "ProductName": "اسم المنتج"
  },
  "user": {
    "id": 1,
    "email": "toto@toto.com"
  }
}`} />
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">تعديل تعليق</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    لتعديل تعليق، قم بتعريف سياق التنسيق الخاص بالتحديثات في كيان
                    <code>Comments</code>. أضف مجموعة لكل خاصية تريد تعديلها:
                </p>
                <CodeBlock
                    code={`/**
 * @ORM\Column(type="text", nullable=true)
 * @Groups({"read:comment", "update:comment"})
 */
private $content;`}
                />

                <p className="text-lg leading-relaxed mb-4">
                    بعد ذلك، قم بتعديل التعليق
                    <code>@ApiResource</code>
                    لإضافة
                    <code>denormalization_context</code>
                    لطريقة
                    <code>PUT</code>:
                </p>
                <CodeBlock
                    code={`/**
 * @ORM\Entity(repositoryClass=CommentsRepository::class)
 * @ApiResource(
 *     itemOperations={
 *        "put"={
 *         "denormalization_context"={"groups"="update:comment"}
 *        },
 *     },
 * )
 */`}
                />

                <p className="text-lg leading-relaxed mb-4">
                    بعد ذلك، قم بتكرار طريقة موجودة في
                    Insomnia
                    وقم بتغيير طريقة
                    HTTP
                    إلى
                    <code>PUT</code>
                    لتعديل التعليق.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    قم بتجربتها عن طريق إدخال الكود التالي في تبويب
                    <code>JSON</code>:
                </p>
                <CodeBlock
                    code={`{
 "content" : "تعديل التعليق",
 "edit": "2020-07-07"
}`}
                />
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">حذف تعليق</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    لحذف تعليق، قم بتكوين العملية
                    <code>DELETE</code>
                    في تعليق
                    <code>@ApiResource</code>:
                </p>
                <CodeBlock
                    code={`/**
 * @ORM\Entity(repositoryClass=CommentsRepository::class)
 * @ApiResource(
 *     itemOperations={
 *        "delete"={}
 *     },
 * )
 */`}
                />

                <p className="text-lg leading-relaxed mb-4">
                    الآن يمكنك إرسال طلب
                    <code>DELETE</code>
                    إلى
                    <code>{`/api/comments/{id}`}</code>
                    لإزالة تعليق من قاعدة البيانات.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">تأمين الـ API</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    بعد إعداد الـ API الخاص بك، من المهم تأمينه لضمان عدم تمكن المستخدمين غير المصرح لهم من إضافة أو تعديل التعليقات.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    لتأمين طريقة
                    <code>POST</code>
                    (إنشاء تعليق)، استخدم المفتاح
                    <code>security</code>
                    في تعليق
                    <code>@ApiResource</code>:
                </p>
                <CodeBlock
                    code={`collectionOperations={
  "post"={
     "security"="is_granted('IS_AUTHENTICATED_FULLY', object)"
  }
}`}
                />

                <p className="text-lg leading-relaxed mb-4">
                    هذا يضمن أن المستخدمين المصرح لهم فقط يمكنهم نشر التعليقات. لتعديل التعليقات، يمكنك إنشاء
                    Voter
                    مخصص لتصفية التعديلات:
                </p>
                <CodeBlock
                    code={`/**
 * @ApiResource(
 *   itemOperations={
 *     "put"={
 *       "security"="is_granted('EDIT_COMMENT', object)"
 *     }
 *   }
 * )
 */`}
                />

                <p className="text-lg leading-relaxed mb-4">
                    سيضمن ذلك أن المستخدم الذي أنشأ التعليق فقط يمكنه تعديله. قم بإنشاء
                    Voter
                    مخصص للتعامل مع منطق التفويض بناءً على دور المستخدم.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">التقسيم</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    لمنع تحميل بيانات كثيرة دفعة واحدة، استخدم خاصية التقسيم. أضف ما يلي إلى تعليق
                    <code>@ApiResource</code>:
                </p>
                <CodeBlock
                    code={`/**
 * @ApiResource(
 *     paginationItemsPerPage=2
 * )
 */`}
                />

                <p className="text-lg leading-relaxed mb-4">
                    سيقوم هذا بتحديد عدد التعليقات التي يتم إرجاعها لكل صفحة إلى 2. لرؤية صفحات إضافية، قم بتعديل الرابط كالتالي:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code>localhost:8000/api/comments?id_product=2&page=2</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">
                    إذا قمت بتغيير عنوان
                    <code>Accept</code>
                    إلى
                    <code>application/ld+json</code>،
                    ستتلقى معلومات إضافية مثل العدد الإجمالي للصفحات وروابط الصفحة التالية/السابقة.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">استرجاع المستخدم الذي نشر التعليق</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    لاسترجاع اسم المستخدم الذي نشر تعليقًا، انتقل إلى كيان
                    <code>User.php</code>
                    وأضف نفس تعليمة المجموعة
                    <code>group</code>
                    إلى خاصية
                    <code>email</code>
                    كما هو الحال في كيان
                    <code>Comments</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    النتيجة ستكون كالتالي:
                </p>
                <CodeBlock
                    code={`[
  {
    "id": 2,
    "content": "string",
    "date": "2020-06-23T14:30:51+00:00",
    "product": {
      "id": 7,
      "ProductName": "jhkghjkghj",
      "picture": "7.jpeg"
    },
    "user": {
      "id": 2,
      "email": "azerty@aze.rty"
    }
  },
  {
    "id": 9,
    "content": "test2",
    "date": "2020-06-19T08:30:04+00:00",
    "product": {
      "id": 2,
      "ProductName": "fghfdgh",
      "picture": "2.jpeg"
    },
    "user": {
      "id": 2,
      "email": "azerty@aze.rty"
    }
  }
]`}
                />

                <p className="text-lg leading-relaxed mb-4">
                    يضمن ذلك أن يحتوي كل رد على التعليق على البريد الإلكتروني للمستخدم الذي نشره.
                </p>
            </section>

        </div>
    );
};

export default ApiPlatformCourse;
