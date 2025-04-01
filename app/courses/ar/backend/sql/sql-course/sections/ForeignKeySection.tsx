import { CodeExample } from "@/app/courses/ar/backend/sql/sql-course/shared/CodeExample";
import { KeyPoints } from "@/app/courses/ar/backend/sql/sql-course/shared/KeyPoints";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const foreignKeyExample = `-- الجدول الأب
CREATE TABLE departments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50)
);

-- الجدول الابن مع مفتاح خارجي
CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    nodep INT,
    FOREIGN KEY (nodep) 
    REFERENCES departments(id)
);`;

const keyPoints = [
  "المفاتيح الخارجية تنشئ علاقات بين الجداول",
  "تضمن تكامل البيانات المرجعي",
  "يجب أن تشير إلى مفتاح أساسي (أو مفتاح فريد) في جدول آخر",
  "يمكن استخدامها لتحديث أو حذف البيانات بشكل متسلسل",
  "تساعد في الحفاظ على تناسق البيانات بين الجداول"
];

export function ForeignKeySection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>المفتاح الخارجي</CardTitle>
        <CardDescription>إنشاء العلاقات بين الجداول</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-lg leading-relaxed mb-4">
          المفتاح الخارجي هو عمود أو مجموعة أعمدة تنشئ رابطًا بين البيانات في جدولين. حيث أنه:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>يشير إلى مفتاح أساسي في جدول آخر</li>
          <li>يحافظ على تكامل البيانات المرجعي</li>
          <li>يمكن من إنشاء علاقات وربط البيانات</li>
        </ul>

        <CodeExample
          title="مثال على المفتاح الخارجي:"
          code={foreignKeyExample}
        />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">حالات الاستخدام الشائعة</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>علاقات واحد إلى متعدد (مثل القسم ← الموظفين)</li>
            <li>علاقات متعدد إلى متعدد (باستخدام جداول وسيطة)</li>
            <li>ضمان تناسق البيانات بين الجداول المرتبطة</li>
          </ul>
        </div>

        <KeyPoints points={keyPoints} />
      </CardContent>
    </Card>
  );
}
