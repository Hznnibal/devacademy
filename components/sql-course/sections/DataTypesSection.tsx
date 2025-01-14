import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const dataTypes = {
  numeric: [
    { name: "INT", description: "Integer numbers" },
    { name: "DECIMAL", description: "Precise decimal numbers" },
    { name: "FLOAT", description: "Floating-point numbers" }
  ],
  text: [
    { name: "VARCHAR(n)", description: "Variable-length text" },
    { name: "TEXT", description: "Long text" },
    { name: "CHAR(n)", description: "Fixed-length text" }
  ],
  dateTime: [
    { name: "DATE", description: "Date (YYYY-MM-DD)" },
    { name: "TIME", description: "Time (HH:MM:SS)" },
    { name: "DATETIME", description: "Date and time" }
  ],
  other: [
    { name: "BOOLEAN", description: "True/False" },
    { name: "BLOB", description: "Binary data" },
    { name: "JSON", description: "JSON data" }
  ]
};

export function DataTypesSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Types</CardTitle>
        <CardDescription>Supported data formats in SQL</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          {Object.entries(dataTypes).map(([category, types]) => (
            <div key={category}>
              <h3 className="font-semibold mb-2 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()} Types</h3>
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