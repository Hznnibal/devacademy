import { CodeExample } from "@/app/courses/ar/backend/sql/sql-course/shared/CodeExample";
import { KeyPoints } from "@/app/courses/ar/backend/sql/sql-course/shared/KeyPoints";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const primaryKeyExample = `CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

const compositeKeyExample = `CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    price DECIMAL(10,2),
    PRIMARY KEY (order_id, product_id)
);`;

const keyPoints = [
  "المفتاح الأساسي يحدد كل سجل في الجدول بشكل فريد",
  "لا يمكن أن يحتوي على قيم NULL ويجب أن يكون فريدًا",
  "يتم استخدام الأعداد الصحيحة التي تزيد تلقائيًا في العادة",
  "يمكن أن يكون مفتاحًا على عمود واحد أو مركبًا من عدة أعمدة",
  "ضروري للحفاظ على تكامل البيانات"
];

export function PrimaryKeySection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>المفتاح الأساسي</CardTitle>
        <CardDescription>معرّف فريد لسجلات الجدول</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-lg leading-relaxed mb-4">
          المفتاح الأساسي هو عمود أو مجموعة من الأعمدة تحدد كل سجل في الجدول بشكل فريد. وهو ضروري من أجل:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>ضمان تكامل البيانات</li>
          <li>إنشاء العلاقات بين الجداول</li>
          <li>تحسين أداء قاعدة البيانات</li>
        </ul>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">مفتاح أساسي على عمود واحد</h3>
          <CodeExample
            title="مثال باستخدام AUTO_INCREMENT:"
            code={primaryKeyExample}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">مفتاح أساسي مركب</h3>
          <CodeExample
            title="مثال باستخدام عدة أعمدة:"
            code={compositeKeyExample}
          />
        </div>

        <KeyPoints points={keyPoints} />
      </CardContent>
    </Card>
  );
}
