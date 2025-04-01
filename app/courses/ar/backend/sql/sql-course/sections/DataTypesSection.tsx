import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const dataTypes = {
  numeric: [
    { name: "INT", description: "أرقام صحيحة" },
    { name: "DECIMAL", description: "أرقام عشرية دقيقة" },
    { name: "FLOAT", description: "أرقام بفاصلة عائمة" }
  ],
  text: [
    { name: "VARCHAR(n)", description: "نص بطول متغير" },
    { name: "TEXT", description: "نص طويل" },
    { name: "CHAR(n)", description: "نص بطول ثابت" }
  ],
  dateTime: [
    { name: "DATE", description: "تاريخ (YYYY-MM-DD)" },
    { name: "TIME", description: "وقت (HH:MM:SS)" },
    { name: "DATETIME", description: "تاريخ ووقت" }
  ],
  other: [
    { name: "BOOLEAN", description: "صواب/خطأ" },
    { name: "BLOB", description: "بيانات ثنائية" },
    { name: "JSON", description: "بيانات JSON" }
  ]
};

export function DataTypesSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>أنواع البيانات</CardTitle>
        <CardDescription>تنسيقات البيانات المدعومة في SQL</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          {Object.entries(dataTypes).map(([category, types]) => (
            <div key={category}>
              <h3 className="font-semibold mb-2 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()} أنواع</h3>
              <ul className="list-disc pl-6 space-y-1">
                {types.map((type, index) => (
                  <li key={index}>
                    <span className="font-mono">{type.name}</span> - {type.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
