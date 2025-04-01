import { CodeExample } from "@/app/courses/ar/backend/sql/sql-course/shared/CodeExample";
import { KeyPoints } from "@/app/courses/ar/backend/sql/sql-course/shared/KeyPoints";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const tableCreationCode = `CREATE TABLE users (
    id INT,
    name VARCHAR(50),
    email VARCHAR(100),
    registration_date DATE
);`;

const keyPoints = [
  "يحتوي كل جدول على اسم فريد داخل قاعدة البيانات",
  "يتكون الجدول من أعمدة ذات أنواع بيانات محددة",
  "يتم تنظيم البيانات داخل الصفوف",
  "يمثل الجدول عادةً كيانًا أو مفهومًا معينًا"
];

export function TableSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>الجدول</CardTitle>
        <CardDescription>البنية الأساسية لتخزين البيانات</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg leading-relaxed mb-4">الجدول هو بنية تُنظم البيانات في صفوف وأعمدة، وهو مشابه لورقة بيانات إكسل. يمثل كل جدول كيانًا معينًا في تطبيقك.</p>
        <CodeExample
          title="مثال على إنشاء جدول:"
          code={tableCreationCode}
        />
        <KeyPoints points={keyPoints} />
      </CardContent>
    </Card>
  );
}
