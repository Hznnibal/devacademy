import { CodeExample } from "@/app/courses/ar/backend/sql/sql-course/shared/CodeExample";
import { KeyPoints } from "@/app/courses/ar/backend/sql/sql-course/shared/KeyPoints";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const indexExample = `-- إنشاء فهرس بسيط
CREATE INDEX idx_email ON users(email);

-- إنشاء فهرس مركب
CREATE INDEX idx_name_dept ON employees(last_name, department);

-- إنشاء فهرس فريد
CREATE UNIQUE INDEX idx_username ON users(username);`;

const keyPoints = [
  "تُسرّع الفهارس عمليات استرجاع البيانات",
  "يمكن إنشاؤها على عمود واحد أو عدة أعمدة",
  "تحسن أداء استعلامات SELECT",
  "يمكن أن تكون فريدة أو غير فريدة",
  "تتطلب مساحة تخزين إضافية وصيانة دورية"
];

export function IndexSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>الفهرس</CardTitle>
        <CardDescription>تحسين أداء الاستعلامات</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-lg leading-relaxed mb-4">
          الفهرس هو هيكل في قاعدة البيانات يساعد في تسريع عمليات استرجاع البيانات. يعمل مثل فهرس الكتاب، حيث يوفر وصولًا سريعًا إلى البيانات المطلوبة.
        </p>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">أنواع الفهارس</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>فهرس على عمود واحد:</strong> يُنشأ على عمود واحد فقط</li>
            <li><strong>فهرس مركب:</strong> يُنشأ على عدة أعمدة</li>
            <li><strong>فهرس فريد:</strong> يضمن عدم تكرار القيم</li>
            <li><strong>فهرس متجمع:</strong> يحدد الترتيب الفعلي للبيانات</li>
          </ul>
        </div>

        <CodeExample
          title="أمثلة على إنشاء الفهارس:"
          code={indexExample}
        />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">متى يجب استخدام الفهارس؟</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>الأعمدة التي يتم البحث فيها بشكل متكرر</li>
            <li>الأعمدة المستخدمة في جمل WHERE</li>
            <li>الأعمدة المستخدمة في شروط JOIN</li>
            <li>الأعمدة المستخدمة في ترتيب البيانات (ORDER BY)</li>
          </ul>
        </div>

        <KeyPoints points={keyPoints} />
      </CardContent>
    </Card>
  );
}
