import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const PHPCRUDExplanation: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">تطبيق CRUD باستخدام PHP</h1>

            {/* القسم 1: نظرة عامة على تطبيق CRUD */}
            <h2 className="text-2xl font-semibold mb-4">ما هو تطبيق CRUD؟</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                تطبيق CRUD (إنشاء، قراءة، تحديث، حذف) هو أحد أبسط أنواع التطبيقات التي تتفاعل مع قواعد البيانات.
                يسمح لك بإنشاء وقراءة وتحديث وحذف السجلات في قاعدة البيانات. في هذا التمرين، ستقوم ببناء تطبيق لإدارة الألبومات الموسيقية.
            </p>

            {/* القسم 2: عمليات CRUD */}
            <h2 className="text-2xl font-semibold mb-4">عمليات CRUD</h2>
            <div className="border-b border-gray-300 mb-6" />
            <h3 className="text-xl font-semibold mb-4">1. عرض جميع السجلات (قراءة)</h3>
            <p className="mb-4 leading-relaxed">
                يجب أن تعرض الصفحة الأولى، المعروفة بالصفحة الرئيسية، قائمة بجميع السجلات في جدول "disc". سيكون لكل سجل رابط لعرض تفاصيله، مع تمرير معرف السجل كمعامل في عنوان URL (مثل <code>details.php?disc_id=1</code>).
                يجب أن تحتوي الصفحة أيضًا على رابط لإضافة سجل جديد.
            </p>

            <h3 className="text-xl font-semibold mb-4">2. إضافة سجل جديد (إنشاء)</h3>
            <p className="mb-4 leading-relaxed">
                يسمح نموذج "إضافة" للمستخدمين بإنشاء سجل جديد. سيقع هذا النموذج في <code>add_form.php</code> ويتضمن:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>قائمة منسدلة للفنانين (يتم جلبها من جدول "artist").</li>
                <li>حقول نصية لتفاصيل الألبوم (مثل العنوان، سنة الإصدار، إلخ).</li>
                <li>خيار لتحميل صورة لغلاف الألبوم.</li>
            </ul>
            <p className="mb-4 leading-relaxed">
                عند إرسال النموذج، سيتم إرسال البيانات إلى <code>add_script.php</code> حيث:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>يتم استرداد البيانات من النموذج وإدخالها في جدول "disc".</li>
                <li>يتم معالجة الملف المرفوع (إن وجد) ويتم إنشاء السجل.</li>
                <li>يتم إعادة توجيه المستخدم إلى صفحة القائمة باستخدام <code>header("Location: index.php")</code>.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">3. عرض تفاصيل السجل (قراءة)</h3>
            <p className="mb-4 leading-relaxed">
                يجب أن تعرض صفحة التفاصيل معلومات حول الألبوم المحدد. سيتم تمرير معرف الألبوم في عنوان URL، مثل <code>details.php?disc_id=1</code>.
                ستحتوي هذه الصفحة على روابط لـ:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>نموذج لتحرير السجل (باستخدام معرف الألبوم).</li>
                <li>نموذج لحذف السجل (أيضًا باستخدام معرف الألبوم).</li>
                <li>رابط للعودة إلى صفحة القائمة.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">4. تعديل سجل موجود (تحديث)</h3>
            <p className="mb-4 leading-relaxed">
                يسمح نموذج التحديث بتعديل تفاصيل الألبوم الحالي. سيكون النموذج في <code>update_form.php</code> ويتضمن:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>قائمة منسدلة للفنانين، حيث يتم تحديد الفنان الحالي للألبوم مسبقًا.</li>
                <li>حقول نصية لتفاصيل الألبوم، مع تعبئتها بالبيانات الحالية.</li>
                <li>خيار لتحميل صورة جديدة للألبوم (إذا رغبت).</li>
            </ul>
            <p className="mb-4 leading-relaxed">عند إرسال النموذج، يتم إرسال البيانات إلى <code>update_script.php</code> حيث:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>يتم استرداد بيانات النموذج ويتم تنفيذ استعلام UPDATE.</li>
                <li>إذا تم تحميل ملف جديد، يتم استخدام استعلام ثاني لتحديث الصورة.</li>
                <li>يتم إعادة توجيه المستخدم إلى صفحة القائمة باستخدام <code>header("Location: index.php")</code>.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">5. حذف سجل (حذف)</h3>
            <p className="mb-4 leading-relaxed">
                يسمح لك وظيفة الحذف بإزالة ألبوم من قاعدة البيانات. يتم تنفيذ هذه العملية عادة على صفحة التفاصيل، حيث يوجد رابط إلى نموذج الحذف.
                عند نقر المستخدم على "حذف"، يتم تمرير <code>disc_id</code> إلى البرنامج النصي للحذف، الذي ينفذ استعلام DELETE لإزالة السجل من جدول "disc".
            </p>

            {/* القسم 3: تأمين استعلامات SQL */}
            <h2 className="text-2xl font-semibold mb-4">تأمين استعلامات SQL</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                من الضروري التحقق من مدخلات المستخدمين قبل إجراء العمليات SQL. استخدم الاستعلامات المحضرة لمنع هجمات حقن SQL ولضمان نزاهة استعلاماتك.
            </p>

            <h3 className="text-xl font-semibold mb-4">استخدام الاستعلامات المحضرة</h3>
            <p className="mb-4 leading-relaxed">
                بدلاً من استخدام استعلامات SQL الخام مع مدخلات المستخدم مباشرة، يجب عليك استخدام الاستعلامات المحضرة لربط المعلمات. إليك مثالاً على استعلام محضر في PHP:
            </p>

            <CodeBlock code={`$stmt = $conn->prepare("INSERT INTO disc (title, artist_id, year, cover_image) VALUES (:title, :artist_id, :year, :cover_image)");
$stmt->bindParam(':title', $title);
$stmt->bindParam(':artist_id', $artist_id);
$stmt->bindParam(':year', $year);
$stmt->bindParam(':cover_image', $cover_image);
$stmt->execute();`} />

            <p className="mb-4 leading-relaxed">
                باستخدام <code>bindParam()</code> أو <code>bindValue()</code> تضمن أن المدخلات تتم معالجتها بأمان من قبل قاعدة البيانات ومنع هجمات حقن SQL.
            </p>

            {/* القسم 4: مكتبات الوظائف */}
            <h2 className="text-2xl font-semibold mb-4">تنظيم الكود باستخدام مكتبات الوظائف</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                لجعل الكود أكثر تنظيمًا وقابلية للصيانة، من الأفضل عزل أجزاء من تطبيقك في مكتبات وظائف.
                على سبيل المثال، يمكنك إنشاء ملفات منفصلة لـ:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>الاتصال بقاعدة البيانات (مثل <code>db_connect.php</code>)</li>
                <li>رأس الصفحة (مثل <code>header.php</code>)</li>
                <li>تذييل الصفحة (مثل <code>footer.php</code>)</li>
            </ul>
            <p className="mb-4 leading-relaxed">
                يفيد هذا الفصل في تحسين قابلية قراءة الكود وإعادة استخدامه، مما يسمح لك بتعديل أو توسيع التطبيق بسهولة في المستقبل.
            </p>
        </div >
    );
};

export default PHPCRUDExplanation;
