import { CodeExample } from "@/app/courses/ar/backend/sql/sql-course/shared/CodeExample";
import { KeyPoints } from "@/app/courses/ar/backend/sql/sql-course/shared/KeyPoints";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const tableExample = `-- هيكل الجدول
CREATE TABLE employees (
    id INT,
    name VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);

-- بيانات الجدول (الصفوف)
INSERT INTO employees VALUES
(1, 'John Doe', 'الهندسة', 75000.00),
(2, 'Jane Smith', 'التسويق', 65000.00);`;

const keyPoints = [
  "تمثل الصفوف (Rows) السجلات الفردية في الجدول",
  "يحتوي كل صف على بيانات لجميع الأعمدة في الجدول",
  "تحدد الأعمدة (Columns) بنية الجدول ونوع البيانات لكل حقل",
  "يجب أن تكون أسماء الأعمدة فريدة داخل الجدول"
];

export function RowsColumnsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>الصفوف والأعمدة</CardTitle>
        <CardDescription>فهم بنية الجداول وتنظيم البيانات</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">الأعمدة (الحقول)</h3>
          <p className="text-lg leading-relaxed mb-4">تحدد الأعمدة بنية الجدول، حيث يحتوي كل عمود على:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>اسم فريد داخل الجدول</li>
            <li>نوع بيانات محدد</li>
            <li>قيود اختيارية (مثل NOT NULL، UNIQUE)</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">الصفوف (السجلات)</h3>
          <p className="text-lg leading-relaxed mb-4">تمثل الصفوف البيانات الفعلية داخل الجدول. كل صف:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>يمثل سجلًا كاملاً</li>
            <li>يجب أن يوفر قيمًا تتطابق مع تعريفات الأعمدة</li>
            <li>يتم تحديده بشكل فريد (عادةً باستخدام مفتاح أساسي)</li>
          </ul>
        </div>

        <CodeExample
          title="مثال على جدول يحتوي على صفوف:"
          code={tableExample}
        />

        <KeyPoints points={keyPoints} />
      </CardContent>
    </Card>
  );
}
